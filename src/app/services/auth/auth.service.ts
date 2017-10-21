import { Injectable } from '@angular/core';
import { ModelUser } from '../../models/model-user';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { ModelToken } from '../../models/model-token';

@Injectable()
/**
 * @TODO Consider breaking off the session management into a separate controller
 */
export class AuthService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private baseUrl = 'api/v1/users';

  private _currentUserKey = 'currentUser';
  private _currentUser: ModelUser;

  private _tokenKey = 'token';
  private _token: string;

  get user () {
    if (!this._currentUser && localStorage.getItem(this._currentUserKey)) {
      this._currentUser = JSON.parse(localStorage.getItem(this._currentUserKey));
    }

    return this._currentUser;
  }

  set user (user: ModelUser) {
    localStorage.setItem(this._currentUserKey, JSON.stringify(user));
    this._currentUser = user;
  }

  get token() {
    if (!this._token && localStorage.getItem(this._tokenKey)) {
      this._token = localStorage.getItem(this._tokenKey);
    }

    return this._token;
  }

  set token(token: string) {
    localStorage.setItem(this._tokenKey, token);
    this._token = token;
  }

  constructor(private http: Http) { }

  register(user: ModelUser): Promise<ModelUser> {
    return this.http
      .put(`${this.baseUrl}/register`, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(res => {
        return res.json() as ModelUser;
      }, this.handleError);
  }

  login(user: ModelUser): Promise<ModelToken> {
    return this.http
      .put(`${this.baseUrl}/login`,
        JSON.stringify({email: user.email, password: user.password}),
        {headers: this.headers})
      .toPromise()
      .then(res => {
        const response: ModelToken = res.json();
        this.user = response.user;
        this.token = response.token;

        return response;
      }, this.handleError);
  }

  logout() {
    this.user = null;
    this.token = null;
  }

  isUserLoggedIn() {
    return this.user && this.token;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    if (error && error._body) {
      return Promise.reject(JSON.parse(error._body));
    }

    return Promise.reject(error);
  }
}
