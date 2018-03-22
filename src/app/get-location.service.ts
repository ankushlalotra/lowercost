import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import { HeaderComponent } from './header/header.component';
@Injectable()
export class GetLocationService {

  constructor(private http: HttpClient) {}
    getData(){
    	console.log("service")
      return this.http.get("http://partners.api.skyscanner.net/apiservices/geo/v1.0?apikey=lo963355623698263789439888313183")
    } 
    
  

}
