import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let afAuth: jasmine.SpyObj<AngularFireAuth>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    afAuth = jasmine.createSpyObj('AngularFireAuth', ['signInWithEmailAndPassword']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: AngularFireAuth, useValue: afAuth },
        { provide: Router, useValue: router },
      ],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call signInWithEmailAndPassword and navigate on successful login', () => {
    const email = 'test@example.com';
    const password = 'testpassword';

    afAuth.signInWithEmailAndPassword.and.returnValue(Promise.resolve({})as any);

    component.loginForm.setValue({ email, password });
    component.login();

    expect(afAuth.signInWithEmailAndPassword).toHaveBeenCalledWith(email, password);
    expect(component.loginSuccess).toBe(true);
    expect(router.navigate).toHaveBeenCalledWith(['/weather']);
  });

  it('should handle login error', () => {
    const email = 'test@example.com';
    const password = 'testpassword';

    const error = new Error('Login failed');
    afAuth.signInWithEmailAndPassword.and.returnValue(Promise.reject(error));

    component.loginForm.setValue({ email, password });
    component.login();

    expect(afAuth.signInWithEmailAndPassword).toHaveBeenCalledWith(email, password);
    expect(component.loginSuccess).toBe(false);
    expect(console.error).toHaveBeenCalledWith('login failed:', error);
  });
});
