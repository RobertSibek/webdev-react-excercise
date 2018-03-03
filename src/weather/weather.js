import React, {Component} from 'react';
import './weather.css';
import 'whatwg-fetch';

const weatherUrl = "https://www.google.com/search?q=ubud+temperature";

class Weather extends Component {

	constructor(props) {
		super(props); 
		
		console.log("Weather.js Constructor");
		
		this.createWeather = this.createWeather.bind(this);
		this.getCurrentTemperature = this.getCurrentTemperature.bind(this);
	}
		
	createWeather = () => {
		return(
			<div className="card weather">
				<div className="card-block">				
					<div className="temperature">
						{ this.getCurrentTemperature() }˚
					</div>
					<div className="city">
						Ubud
					</div>					
				</div>								
			</div>	
			);
	}
	
	// Currently static, but it would be nice to have from API or Google search->HTML Element
    getCurrentTemperature = () => {
		console.log(weatherUrl);
//		var promise = new Promise((resolve, reject) => {
//
//        	fetch(weatherUrl, {'mode': 'no-cors'})
//        	.then(response => {
//            	resolve(response);	
//    		});
//		});

//		return promise;
		return "26";
 	}	
	
	render() {
		return (
			<div className="row">
				<div className="col-sm-12">	
					{ this.createWeather() }
				</div>										
			</div>						
		)
	}
}

export default Weather;