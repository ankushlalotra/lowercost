import { Component } from '@angular/core';
import {GetLocationService} from './get-location.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private getLocation: GetLocationService) {}
  public cities = [];
  ngOnInit(){
  	console.log("app co")
  }

  getCities(data){
  	console.log("app co", data)
  	for(var i=0; i<data.Places.length; i++){
  		var temp = data.Places[i]
  		this.cities.push(temp);
  	}
  		console.log('temp', this.cities)
  		this.ngOnInit();
  	// this.getLocation.cities.subscribe((data) => {
  	// 	if(data) {
  	// 		this.cities = data;
  	// 		console.log("app", this.cities);
  	// 	}
  	// })
  }

  fromData(value){
  	console.log(value);
  }

  toData(value){
  	console.log(value);	
  }
}
