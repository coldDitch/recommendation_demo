import React,{Component} from 'react'
import {Form,Checkbox,FormGroup, ControlLabel, FormControl, Grid,Button} from 'react-bootstrap'

export default class Recommend extends Component {
	constructor(props, context) {
	    super(props, context)

	    this.handleChange = this.handleChange.bind(this);

	    this.state = {
	      value: ''
	    }
	  }
	
	handleChange(e) {
		this.setState({value:e.target.value})
	}

	handleClick() {
		//Recommend
	}

	render() {
		return (
	<Grid>
		<Form inline>
			<FormGroup controlId="formInlineName">
				<ControlLabel>Add tags</ControlLabel>{' '}
				<FormControl
				type="text"
				placeholder="E.g. math" 
				onChange={this.handleChange}/>
			</FormGroup>{' '}
		</Form>
		<Checkbox>
			Only from your school	
		</Checkbox>

		<Checkbox>
			Only from your field of study
		</Checkbox>
		<Checkbox>
			Find me something I haven't heard about 
		</Checkbox>
		<Button
		onClick={this.handleClick}>
			Recommend!
		</Button>
	</Grid>

		)
	}
}
