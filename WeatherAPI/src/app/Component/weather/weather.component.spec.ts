import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherComponent } from './weather.component';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from 'src/app/Service/User Location/ForeCastLocation.service';
import { WeatherService } from 'src/app/Service/User Location/weather.service';
import { of, throwError } from 'rxjs';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let locationService: LocationService;
  let weatherService: WeatherService;

  const mockLocationService = {
    getForecastByLocation: jasmine.createSpy('getForecastByLocation').and.returnValue(of({ forecastData: 'mocked forecast data' })),
  };

  const mockWeatherService = {
    getWeatherByLocation: jasmine.createSpy('getWeatherByLocation').and.returnValue(of({ weatherData: 'mocked weather data' })),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ lat: 42.12345, lon: -71.67890 }), // Mock queryParams
          },
        },
        { provide: LocationService, useValue: mockLocationService },
        { provide: WeatherService, useValue: mockWeatherService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    locationService = TestBed.inject(LocationService);
    weatherService = TestBed.inject(WeatherService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch weather data by location', () => {
    expect(mockWeatherService.getWeatherByLocation).toHaveBeenCalledWith(42.12345, -71.67890);
    expect(component.weatherData).toEqual({ weatherData: 'mocked weather data' }); // Check the component's data property
  });

  it('should fetch forecast data by location', () => {
    expect(mockLocationService.getForecastByLocation).toHaveBeenCalledWith(42.12345, -71.67890);
    expect(component.forecastData).toEqual({ forecastData: 'mocked forecast data' }); // Check the component's data property
  });

  it('should handle error while fetching weather data', () => {
    mockWeatherService.getWeatherByLocation.and.returnValue(throwError('Weather API error'));

    component.ngOnInit(); // Simulate ngOnInit to trigger the data fetch
    fixture.detectChanges();

    expect(mockWeatherService.getWeatherByLocation).toHaveBeenCalledWith(42.12345, -71.67890);
    expect(component.errorMessage).toEqual('Error fetching weather data.'); // Check the error message
  });

  it('should handle error while fetching forecast data', () => {
    mockLocationService.getForecastByLocation.and.returnValue(throwError('Forecast API error'));

    component.ngOnInit(); // Simulate ngOnInit to trigger the data fetch
    fixture.detectChanges();

    expect(mockLocationService.getForecastByLocation).toHaveBeenCalledWith(42.12345, -71.67890);
    expect(component.errorMessage).toEqual('Error fetching forecast data.'); // Check the error message
  });

  
  
});
