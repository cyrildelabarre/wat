import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup'
import { bindActionCreators } from 'redux'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'

class Birthdays extends Component {

  constructor(props) {
    super(props)
  }

  render () {
    const birthdays = require('celeb-birthdays');
    let birthdate = '02-06'
    return(
      <CardGroup>
        {
          birthdays[birthdate].map((birthday, i) => {
            console.log(birthdays[birthdate][i])
            return(
              <Card key={i}>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>{birthdays[birthdate][i]}</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            )
          })
        }
      </CardGroup>
    )
  }
}


function mapStateToProps(state){
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Birthdays)
