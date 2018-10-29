import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {Jumbotron, Grid,Row,Col,Image} from 'react-bootstrap'
import logo from '../assets/Aalto AI Society_3.png';

export default class Home extends Component {
	render() {
		return (
	<Grid>
		<div className="App">
			<Jumbotron>
				<h2>RecommendAI</h2>
				<Image src={logo}/>
			</Jumbotron>
			<Row className="show-grid text-center">
				<Col xs={12} sm={5} className="course-wrapper">
					<Link to="/recommendations" >
						<Image src={logo}/>
						<h3>Recommendations</h3>
					</Link>
				</Col>
				<Col xs={12} sm={5} className="course-wrapper">
					<Link to="/questions" >
						<Image src={logo} circle className="menu-pic"/>
						<h3>Improve your recommendations</h3>
					</Link>
				</Col>
				<Col xs={12} sm={5} className="course-wrapper">
					<Link to="/rate" >
						<Image src={logo} circle className="menu-pic"/>
						<h3>Rate courses</h3>
					</Link>
				</Col>
				<Col xs={12} sm={5} className="course-wrapper">
					<Link to="/courses" >
						<Image src={logo} circle className="menu-pic"/>
						<h3>My courses</h3>
					</Link>
				</Col>
			</Row>
		</div>
	</Grid>

		)
	}
}
			
