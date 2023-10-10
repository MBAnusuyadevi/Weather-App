import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationComponent } from './location.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationComponent],
      imports: [RouterTestingModule] // Import RouterTestingModule
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /weather on successful geolocation', () => {
    // Mock the geolocation API
    spyOn(navigator.geolocation, 'getCurrentPosition').and.callFake((successCallback) => {
      // Simulate a successful geolocation response
      successCallback({
        coords: {
          latitude: 42.12345,
          longitude: -71.67890,
        },
      }as any);
    });
  
  const navigateSpy = spyOn(component['router'], 'navigate');

  // Call the getLocation method
  component.getLocation();

  // Expect that router.navigate was called with the correct arguments
  expect(navigateSpy).toHaveBeenCalledWith(['/weather'], {
    queryParams: {
      lat: 42.12345,
      lon: -71.67890,
    },
  });
});
})
