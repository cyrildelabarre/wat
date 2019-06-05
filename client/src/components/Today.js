import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import $ from 'jquery';

class Today extends Component {

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
      $(".today-box").load("https://www.onthisday.com/ .event-list");
    return(
      <section>
        <div className="today-box">
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

export default connect(mapStateToProps, mapDispatchToProps)(Today)
