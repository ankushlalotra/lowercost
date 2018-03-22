import { Component, OnInit } from '@angular/core';
import {GetLocationService} from '../get-location.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private getLocation: GetLocationService) { }

  public currency: any = [];
  public location: any;
  public country: any = [];

  ngOnInit() {
  	this.getData();
  }

  getData() {
  	var temp = [],
  		temp2 = [];

  	this.getLocation.getData().subscribe((data) => {
  		if(data){
  			if(data.Continents.length > 1){
		  		for(var i = 0; i < data.Continents.length; i++){
		  			temp.push(data.Continents[i].Countries);
		  			for(var j=0; j< temp.length; j++){
		  				temp2.push(temp[j])
		  				for(var k=0; k < temp[j].length; k++){
		  					console.log("tempj", temp[j][k]);
		  					this.country.push(temp[j][k].Name);
		  					this.currency.push(temp[j][k].CurrencyId)
		  				}
		  			}
		  		}
  			}
  		}
  	})  

  }

}
