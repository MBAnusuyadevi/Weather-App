import { TestBed } from '@angular/core/testing';
import { WeatherdisplayService } from './weatherdisplay.service';


describe('WeatherService', () => {
  let service: WeatherdisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherdisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
