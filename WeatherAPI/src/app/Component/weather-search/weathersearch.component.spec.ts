import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeathersearchComponent } from './weathersearch.component';
import { WeathersearchService } from 'src/app/Service/Weather-Search/weathersearch.service';
import { of } from 'rxjs';

describe('WeathersearchComponent', () => {
  let component: WeathersearchComponent;
  let fixture: ComponentFixture<WeathersearchComponent>;
  let weathersearchService: jasmine.SpyObj<WeathersearchService>;

  beforeEach(() => {
    weathersearchService = jasmine.createSpyObj('WeathersearchService', ['getWeatherByLocation', 'getForecast']);

    TestBed.configureTestingModule({
      declarations: [WeathersearchComponent],
      providers: [{ provide: WeathersearchService, useValue: weathersearchService }],
    });

    fixture = TestBed.createComponent(WeathersearchComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch weather data and forecast data on searchLocation', () => {
    const mockWeatherData = { /* Define your mock weather data here */ };
    const mockForecastData = { /* Define your mock forecast data here */ };

    weathersearchService.getWeatherByLocation.and.returnValue(of(mockWeatherData));
    weathersearchService.getForecast.and.returnValue(of(mockForecastData));

    component.query = 'MockCity'; // Set a query to simulate user input
    component.searchLocation();

    expect(weathersearchService.getWeatherByLocation).toHaveBeenCalledWith('MockCity');
    expect(weathersearchService.getForecast).toHaveBeenCalledWith('MockCity', 7);

    expect(component.weatherData).toEqual(mockWeatherData);
    expect(component.forecastData).toEqual(mockForecastData);
  });
});
