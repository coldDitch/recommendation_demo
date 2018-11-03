import React, {Component} from 'react'

export default class Fetchcourses extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Partial',
      items: [],
      isLoaded: false,
    }
  }


  componentDidMount() {
      console.log('mounting')
      fetch('localhost', {
  mode: 'no-cors'})

        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json,
          })
        })
  }

  render() {
    var { isLoaded, items }=this.state

    if (!isLoaded){
      return <div>Loading...</div>
    }

    else {
      return (
        <div>
        Found
          <ul>
            {items.map(item =>(
              <li key={item.id}>
                {item.opintokohde}
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }
}
