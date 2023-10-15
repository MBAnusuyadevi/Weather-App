import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LogoutComponent } from './logout.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;
  let afAuth: jasmine.SpyObj<AngularFireAuth>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    afAuth = jasmine.createSpyObj('AngularFireAuth', ['signOut']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [LogoutComponent],
      providers: [
        { provide: AngularFireAuth, useValue: afAuth },
        { provide: Router, useValue: router },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call signOut and navigate on successful logout', waitForAsync(() => {
    // Stub the signOut method to return a resolved Observable
    afAuth.signOut.and.returnValue(Promise.resolve());

    component.logout();

    fixture.whenStable().then(() => {
      expect(afAuth.signOut).toHaveBeenCalled();
      expect(router.navigate).toHaveBeenCalledWith(['/login']);
    });
  }))

  it('should handle logout error', waitForAsync(() => {
    // Stub the signOut method to return a rejected Promise
    const error = new Error('Logout failed');
    afAuth.signOut.and.returnValue(Promise.reject(error));

    component.logout();

    fixture.whenStable().then(() => {
      expect(console.error).toHaveBeenCalledWith('Logout failed:', error);
    });
  }))
});