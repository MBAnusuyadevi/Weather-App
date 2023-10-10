import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService],
    });
    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure that there are no outstanding HTTP requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve weather data by location', () => {
    const lat = 123; // Replace with your test latitude
    const lon = 456; // Replace with your test longitude
    const mockData = {
      // Define your mock weather data here
    };

    service.getWeatherByLocation(lat, lon).subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne((request) =>
      request.url.includes(`/weather?lat=${lat}&lon=${lon}&appid=${service['apiKey']}&units=metric`)
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
});
