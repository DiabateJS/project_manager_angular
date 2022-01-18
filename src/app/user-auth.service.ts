import { Injectable } from '@angular/core';
import {User} from './model/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthResponseData} from './model/auth-response-data';
import {environment} from '../environments/environment';
import {HTTP_OPTIONS} from './model/constants';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private httpClient: HttpClient) { }

  isAuth(user: User): Observable<AuthResponseData> {
    const url = environment.urlAuth + 'method=auth';
    return this.httpClient.post<AuthResponseData>(url, user, HTTP_OPTIONS);
  }
}
