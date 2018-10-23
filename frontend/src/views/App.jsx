import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../components/Home.jsx'
import Recommendations from '../components/Recommend.jsx'
import Questions from '../components/Questions.jsx'
import Rate from '../components/Rate.jsx'
class App extends Component {
  render() {
	    return(
	 <Router>
		<div>
			<Route exact path="/" component={Home}/>
			<Route path="/recommendations" component={Recommendations}/>
			<Route path="/questions" component={Questions}/>
			<Route path="/rate" component={Rate}/>
		</div>
	</Router>
    );
  }
}

export default App;
