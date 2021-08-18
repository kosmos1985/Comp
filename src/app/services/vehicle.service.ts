import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Object } from '../models/object';



const BASE_URL = 'https://dev.vozilla.pl/api-client-portal/map?objectType=VEHICLE';
const KEY = 'x-ctx-organization-id:';
const AUTH_TOCKEN = '38c6047f-d9fd-496b-b4d6-27785499c6d7';

const headers = new HttpHeaders().append( 'Authorization', KEY + AUTH_TOCKEN)

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }
 
  getObjects() {
    return this.http.get<Object[]>(`${BASE_URL}`, { 'headers': headers });
  }

}

