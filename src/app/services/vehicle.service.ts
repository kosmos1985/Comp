import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const BASE_URL = 'https://dev.vozilla.pl/api-client-portal/map?objectType=VEHICLE';
const AUTH_TOCKEN = ' 38c6047f-d9fd-496b-b4d6-27785499c6d7';

const headers = new HttpHeaders().append('x-ctx-organization-id' , AUTH_TOCKEN)
// .append( 'Authorization', 'Bearer'+ AUTH_TOCKEN)
// 'Content-Type': 'application/json',
  // .set('Access-Control-Request-Headers', ['x-ctx-organization-id: 38c6047f-d9fd-496b-b4d6-27785499c6d7']);

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }
 

  getObjects() {
    return this.http.get(`${BASE_URL}`, { 'headers': headers });   
  }
}


