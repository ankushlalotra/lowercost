import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
@Injectable()
export class GetLocationService {

  constructor(private http: HttpClient) {}
    getData(){
      console.log("service")
     
      return this.http.get("http://partners.api.skyscanner.net/apiservices/geo/v1.0?apikey=lo963355623698263789439888313183");
    } 
    
    getData1(currency, country){
    console.log(currency,country,"kjgfjuh");
      return this.http.get(`http://partners.api.skyscanner.net/apiservices/autosuggest/v1.0/${country}/${currency}/en-GB/?query=stockholm&apiKey=lo963355623698263789439888313183`);
      
    } 
    
  

}
