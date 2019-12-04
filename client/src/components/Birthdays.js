import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup'
import { bindActionCreators } from 'redux'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import $ from 'jquery';

class Birthdays extends Component {

  constructor(props) {
    super(props)
    this.state = {
      imageLoadError: true
    }
  }

  onError() {
    this.setState({
      imageUrl: "https://media.giphy.com/media/uprwwjptZW4Za/giphy.gif"
    })
  }

  render () {
    const birthdays = require('celeb-birthdays');
    var d = new Date();
    var dayNumber = d.getDate();
    var monthNumber1 = d.getMonth();
    var monthNumber = monthNumber1 + 1;
    if (monthNumber < 9){
      monthNumber = '0' + (monthNumber1 + 1);
    }
    if (dayNumber < 10){
      dayNumber = '0' + dayNumber;
    }
    let birthdate = monthNumber + '-' + dayNumber;

    return(
      <CardGroup>
        {
          birthdays[birthdate].map((birthday, i) => {
            let str = birthday.split(" ")
            var firstName = str[0].toLowerCase();
            var lastName = str[1].toLowerCase();
            if (lastName.includes("'")){
              let n = lastName
              let nn = n.replace("'", '');
              lastName = nn
            } else {
              lastName = str[1].toLowerCase();
            }
            let nameClass = firstName+'-'+lastName
            setTimeout(function(){
              $(".birthdate"+nameClass).load("https://www.famousbirthdays.com/people/" + firstName + '-' + lastName+".html .main-stats .stat");
              $(".box"+nameClass).load("https://www.famousbirthdays.com/people/" + firstName + '-' + lastName+".html .bio");
            }, 200);
            setTimeout(function(){
              var htmlstring = $(".box"+nameClass).load("https://www.famousbirthdays.com/people/" + firstName + '-' + lastName+".html .bio")[0].innerHTML;
              htmlstring = (htmlstring.trim) ? htmlstring.trim() : htmlstring.replace(/^\s+/,'');
              var htmlstring2 = $(".box"+nameClass).load("https://www.famousbirthdays.com/people/" + firstName + '-' + lastName+"-tvactress.html .bio")[0].innerHTML;
              htmlstring2 = (htmlstring.trim) ? htmlstring.trim() : htmlstring.replace(/^\s+/,'');
              console.log(htmlstring2)
              if(htmlstring == '') {
                var htmlstring2 = $(".box"+nameClass).load("https://www.famousbirthdays.com/people/" + firstName + '-' + lastName+"-tvactress.html .bio")[0].innerHTML;
                htmlstring2 = (htmlstring.trim) ? htmlstring.trim() : htmlstring.replace(/^\s+/,'');
                console.log(htmlstring2)
                if(htmlstring2 == '') {
                  let boxToHide = $(".box"+nameClass).parent().parent()
                  $(boxToHide).hide()
                }
              }
            }, 500);
            return(
              <Card key={i}>
                <Card.Img variant="top" onError={(e)=>{ if (e.target.src !== "https://media.giphy.com/media/uprwwjptZW4Za/giphy.gif"){ e.target.onerror = null; e.target.src="https://media.giphy.com/media/uprwwjptZW4Za/giphy.gif"; } }} src={'https://www.famousbirthdays.com/faces/' + lastName + '-' + firstName + '-image.jpg'} />
                <Card.Body>
                  <Card.Title>{birthdays[birthdate][i]}</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item className={"birthdate" + nameClass}></ListGroup.Item>
                  </ListGroup>
                  <Card.Text className={"box" + nameClass}>
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
