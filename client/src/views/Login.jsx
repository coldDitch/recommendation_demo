import React,{Component} from 'react'
import {Form,Checkbox,FormGroup, ControlLabel, FormControl, Grid,Button} from 'react-bootstrap'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default class Recommend extends Component {
	state = {
		email: "",
		password: ""
	}
	onChange= (e) => {
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	
	render() {
		return (
			<form>
				<FormControl
					name='email'
					placeholder='Email'
					onChange={e => this.onChange(e)}
					value={this.state.email}/>
				<FormControl
					name='password'
					placeholder='Password'
					onChange={e => this.onChange(e)}
					value={this.state.password}/>
				<Button
					onClick={this.handleClick}>
					Login
				</Button>
				<Button
					href='/register'
					to='/register'>
					Register	
				</Button>
				<Button>
					Reset password
				</Button>
			</form>
		)
	}
}
