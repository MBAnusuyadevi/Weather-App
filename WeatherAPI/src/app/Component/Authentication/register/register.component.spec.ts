import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RegistrationComponent } from './register.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let afAuth: jasmine.SpyObj<AngularFireAuth>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    afAuth = jasmine.createSpyObj('AngularFireAuth', ['createUserWithEmailAndPassword']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: AngularFireAuth, useValue: afAuth },
        { provide: Router, useValue: router },
        FormBuilder,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call createUserWithEmailAndPassword and navigate on successful registration', waitForAsync(() => {
    afAuth.createUserWithEmailAndPassword.and.returnValue(Promise.resolve({ user: {} })as any);
    component.registrationForm.setValue({ email: 'test@example.com', password: 'testpassword' });
    component.register();
    fixture.whenStable().then(() => {
      expect(afAuth.createUserWithEmailAndPassword).toHaveBeenCalled();
      expect(router.navigate).toHaveBeenCalledWith(['/login']);
    });
  }))

  it('should handle registration error', waitForAsync(() => {
    const error = new Error('Registration failed');
    afAuth.createUserWithEmailAndPassword.and.returnValue(Promise.reject(error));
    component.registrationForm.setValue({ email: 'test@example.com', password: 'testpassword' });
    component.register();
    fixture.whenStable().then(() => {
      expect(console.error).toHaveBeenCalledWith('Registration failed:', error);
    });
  }))
});
