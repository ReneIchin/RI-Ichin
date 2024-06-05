import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _loggedIn: boolean = true; // true es cuando ya esta logueado
  private loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this._loggedIn);

  get loggedIn(): boolean {
    return this._loggedIn;
  }

  setLoggedIn(value: boolean) {
    this._loggedIn = value;
    this.loggedInSubject.next(value);
  }

  getLoggedInObservable(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }
}
