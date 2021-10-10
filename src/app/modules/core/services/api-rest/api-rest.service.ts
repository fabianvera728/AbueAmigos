/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  BASE_URL_API = environment.BASE_URL_API;

  constructor(private http: HttpClient) { }

  query(url: string, method: string, params?: any): Observable<any>{
    switch ( method ){
      case 'GET':
        return this.http.get(`${this.BASE_URL_API}${url}/`, params);
        break;
      case 'POST':
        return this.http.post(`${this.BASE_URL_API}${url}/`, params);
        break;
    }
  }

}
