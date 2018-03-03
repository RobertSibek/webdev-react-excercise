import React, { Component } from 'react';
import './App.css';

//Components
import WhiteCard from '../white-card/white-card';
import MainCard from '../main-card/main-card';
import SideCard from '../side-card/side-card';
import Weather from '../weather/weather';

class App extends Component {
	
	constructor(props) {
		super(props);
		
		console.log("App.js Constructor");
						
	}
	
	render() {
	return (
	  <div className="App">
		<div className="container-fluid App-main">
			<div className="row">
			
				{/* Center column components */}		
				<div className="col-sm-9">
					
					{/* Top White Cards */}
					<div className="row">
				
						<WhiteCard />		
											
					</div>
									
					
					{/* Main cards */}
					<MainCard />				
						
				</div>
				
				{/* Side column components */}
				<div className="col-sm-3">
				
					{/* Weather component */}
					<Weather />		

					{/* Other side components */}
					<SideCard />					
																			
							
				</div>					
					
			</div>			
		</div>
		</div>		  
	);
	}
}

export default App;
