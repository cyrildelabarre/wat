import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup'
import { bindActionCreators } from 'redux'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
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
      $(".event-box").load("https://www.onthisday.com/today/events.php .section");
    return(
      <section>
        <div className="event-box">
        </div>
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
