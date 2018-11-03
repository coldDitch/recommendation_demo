import React,{Component} from 'react'
import '../styles/cardstyle.css'
import {Button,ButtonToolbar} from 'react-bootstrap'
import HandleRecommendation from '../api/CallApi'

class CardHeader extends Component {
  render() {
    const { image } = this.props;
    var style = {
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} id={image} className="card-header">
        <h4 className="card-header--title">Aalto</h4>
      </header>
    )
  }
}

class ButtonF extends React.Component {
  render() {
    return (
	    <div>
	    <ButtonToolbar>
		    <Button bsClass='button button-primary'>Meh</Button>
		    <Button bsClass='button button-primary'>Maybe</Button>
		    <Button bsClass='button button-primary'>Yeah!</Button>
	    </ButtonToolbar>
	    <ButtonToolbar>
	    	<Button bsClass='button button-primary'>Been there, done that</Button>
	    </ButtonToolbar>
	    </div>
    )
  }
}

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <p className="date">Course open till: March 20 2015</p>

        <h2>{this.props.title}</h2>

        <p className="body-content">{this.props.text}</p>

        <ButtonF />
      </div>
    )
  }
}

export default class Card extends React.Component {
	state= {
		name:'',
		university:'',
		description:'',
	}
	componentDidMount() {
		let api=new HandleRecommendation()
		api.callApi()
		.then(res => {
			console.log(res)
			this.setState({
				name: res.data[0].name,
				university:res.data[0].university,
				description:res.data[0].description})})
		.catch(err => console.log(err));
	}
	render() {

		return (
		<article className="card">
		<p>{this.state.response}</p>
			<CardHeader image={'https://images.freeimages.com/images/large-previews/c2a/books-1-1422241.jpg'}/>
			<CardBody title={this.state.name} text={this.state.description}/>
		</article>	
		)
  	}
}

