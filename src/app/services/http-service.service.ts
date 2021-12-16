import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { spaceLocationResponse } from '../models/space-location-response';
import { importantLocation } from '../models/important-location';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getLocation(){
    return this.http.get<spaceLocationResponse>('https://localhost:44367/api/Space');
  }
  saveLocation(importantLocation:importantLocation){
    return this.http.post<importantLocation>('https://localhost:44367/api/Space',importantLocation);
  }
}
