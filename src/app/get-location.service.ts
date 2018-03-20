import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import { HeaderComponent } from './header/header.component';
@Injectable()
export class GetLocationService {

  constructor(private http: HttpClient) {}
    getData():Observable<HeaderComponent[]>{
      return this.http.get("http://partners.api.skyscanner.net/apiservices/geo/v1.0?apikey=lo963355623698263789439888313183").map(r => <HeaderComponent[]>r.json());
    } 
    
  

}
