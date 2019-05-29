import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup'
import { bindActionCreators } from 'redux'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import {getBirthdayImg} from '../actions/GetArticles'
class Birthdays extends Component {

  constructor(props) {
    super(props)
this.props.getBirthdayImg()
  }

  render () {
    let birthdate = '';
    const birthdays = require('celeb-birthdays');
    var d = new Date();
    var dayNumber = d.getDate();
    var monthNumber1 = d.getMonth();
    var monthNumber = monthNumber1 + 1;
    if (dayNumber < 10) {
      let day = '0'+dayNumber
       birthdate = monthNumber + '-' + day
    } else if (monthNumber < 10){
      let month = '0'+monthNumber
         birthdate = month + '-' + dayNumber
    } else {
       birthdate = monthNumber + '-' + dayNumber
}
    console.log(birthdate)
    return(
      <CardGroup>
        {

          birthdays[birthdate].map((birthday, i) => {
            console.log(birthdays[birthdate][i])
            let str = birthdays[birthdate][i];
            let res = str.split(" ");
            let lastName = res[1].toLowerCase();
            let firstName = res[0].toLowerCase();
            return(

              <Card key={i}>
              <Card.Img variant="top" src={'https://www.famousbirthdays.com/faces/' + lastName +'-' + firstName + '-image.jpg'} />
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
    bdayImg : state.imglink
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
getBirthdayImg
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Birthdays)
