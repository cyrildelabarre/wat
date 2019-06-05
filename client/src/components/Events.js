import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import $ from 'jquery';

class Events extends Component {

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
    setTimeout(function(){
      $(".event-box").load("https://www.onthisday.com/today/events.php .section");
    }, 100);
    function getFormattedDate(today)
    {
      var week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
      var day  = week[today.getDay()];
      var dd   = today.getDate();
      var mm   = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();
      var hour = today.getHours();
      var minu = today.getMinutes();
      if(dd < 10){
        dd='0'+dd
      }
      if(mm < 10){
        mm='0'+mm ;
      };
      if(minu < 10){
        minu='0'+minu;
      };

      setTimeout(function(){
        $('.show-date').html(day+' - '+dd+'/'+mm+'/'+yyyy);
        $('.event-list__item a').removeAttr("href");
      }, 500);
    }

    var date = new Date();
    var text = getFormattedDate(date);
    return(
      <section>
        <Jumbotron fluid>
          <Container>
            <h1>Events that happened on this day</h1>
            <p className="show-date">
              This is a modified jumbotron that occupies the entire horizontal space of
              its parent.
            </p>
          </Container>
        </Jumbotron>
          <Container>
        <div className="event-box">
        </div>
        </Container>
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(Events)
