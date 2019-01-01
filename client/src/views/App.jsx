import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Recommendations from './Recommend.jsx'
import Card from './Recommendation.jsx'
import Navbar from '../components/Navigation.jsx'
import Login from './Login.jsx'
class App extends Component {
  render() {
	    return(
	 <Router>
		<div>
		    	<Navbar />
			<Route exact path="/" component={Card}/>
			<Route path="/recommendations" component={Recommendations}/>
		    	<Route path="/cards" component={Card}/>
		    	<Route path="/login" component={Login}/>
		</div>
	</Router>
    );
  }
}

export default App;
