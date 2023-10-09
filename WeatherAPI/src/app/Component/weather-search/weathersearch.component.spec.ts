import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathersearchComponent } from './weathersearch.component';

describe('WeathersearchComponent', () => {
  let component: WeathersearchComponent;
  let fixture: ComponentFixture<WeathersearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeathersearchComponent]
    });
    fixture = TestBed.createComponent(WeathersearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
