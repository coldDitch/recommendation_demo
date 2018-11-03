import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Home.jsx'
import Recommendations from './Recommend.jsx'
import Questions from './Questions.jsx'
import Rate from './Rate.jsx'
import Card from './Recommendation.jsx'

class App extends Component {
  render() {
	    return(
	 <Router>
		<div>
			<Route exact path="/" component={Home}/>
			<Route path="/recommendations" component={Recommendations}/>
			<Route path="/questions" component={Questions}/>
			<Route path="/rate" component={Rate}/>
		    	<Route path="/cards" component={Card}/>
		</div>
	</Router>
    );
  }
}

export default App;
