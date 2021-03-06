import { Component, OnInit , Output,EventEmitter} from '@angular/core';
import {GetLocationService} from '../get-location.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private getLocation: GetLocationService) { }

  public dataApi: any = {};
  public country: any = [];
  public currency: any = [];  
  public selected_country ;
  public selected_currency ;

  @Output() public places = new EventEmitter();

  ngOnInit() {
  this.getData();
	
  }

  getData() {
  	var temp = {};

  	this.getLocation.getData().subscribe((data) => {
  		if(data){
			  this.dataApi=data;
			
  		}
  	})  
return this.dataApi;
  }
  
  ngDoCheck(){
	 var temp=[],temp2=[];
	 if (this.dataApi){
	  if(this.dataApi.Continents.length  > 1){
		for(var i = 0; i < this.dataApi.Continents.length; i++){
			temp.push(this.dataApi.Continents[i].Countries);
			for(var j=0; j< temp.length; j++){
				temp2.push(temp[j])
				for(var k=0; k < temp[j].length; k++){
					// console.log("tempj", temp[j][k]);
					this.country.push(temp[j][k].Id);
					this.currency.push(temp[j][k].CurrencyId)
				}
			}
		}

	}
	}

}
countryData(value){
	
	this.selected_country = value;
console.log(this.selected_country)
this.getLocation.getData1(this.selected_currency,this.selected_country).subscribe((data) => {
  		if(data){
			  console.log(data)
			this.places.emit(data.Places);
  		}
  	})  
	
}

currencyData(value){
	
	this.selected_currency = value;

	console.log(this.selected_currency)
}



}
