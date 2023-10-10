import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LocationService } from './ForeCastLocation.service';

describe('LocationService', () => {
  let service: LocationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LocationService],
    });
    service = TestBed.inject(LocationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure that there are no outstanding HTTP requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve forecast data by location', () => {
    const lat = 123; // Replace with your test latitude
    const lon = 456; // Replace with your test longitude
    const mockData = {
      // Define your mock forecast data here
    };

    service.getForecastByLocation(lat, lon).subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne((request) =>
      request.url.includes(`/forecast?lat=${lat}&lon=${lon}&appid=${service['apiKey']}&units=metric`)
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
});
