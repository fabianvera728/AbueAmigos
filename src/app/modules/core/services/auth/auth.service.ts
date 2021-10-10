/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL_API = environment.BASE_URL_API;

  constructor(private http: HttpClient) { }

  login(form: any){
    return this.http.post<any>(`${this.BASE_URL_API}users/login/`, form);
  }

  register(form: any): Observable<any>{
    const data = {phone_number: form.phone_number,
      user: {
        username: form.username,
        email: form.username + '@abueamigo.com',
        first_name: form.first_name,
        last_name: form.last_name,
        password: form.password
      }};
    console.log(data);
    return this.http.post<any>(`${this.BASE_URL_API}users/`, data);
  }

}
