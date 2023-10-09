import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationComponent } from './location.component';

describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationComponent]
    });
    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create LocationComponent', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate to "/weather" with lat and lon query parameters when geolocation is supported', () => {
    const mockPosition: GeolocationPosition = {
      coords: {
        latitude: 42.12345,
        longitude: -71.98765,
        // Add any other required properties like accuracy, altitude, etc.
      } as any,
      timestamp: Date.now() // Provide a timestamp as required by GeolocationPosition
    };
  
    spyOn(navigator.geolocation, 'getCurrentPosition').and.callFake((callback) => {
      callback(mockPosition);
    });
  
    const navigateSpy = spyOn(component['router'], 'navigate');
  
    component.getLocation();
  
    expect(navigateSpy).toHaveBeenCalledWith(['/weather'], {
      queryParams: {
        lat: mockPosition.coords.latitude,
        lon: mockPosition.coords.longitude
      }
    });
  });
  
});
