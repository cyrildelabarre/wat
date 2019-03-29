import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSources } from '../actions/GetArticles'

class Sources extends Component {

  constructor(props) {
    super(props)
    this.props.getSources()
  }

  render () {
    return (
      <div>
        {this.props.sources.map((source, i) => {
          return(
          <p key={i}>{source.name}</p>
      )  }
      )}
    </div>
  )
}
}

function mapStateToProps(state){
  console.log('state :', state)
  return {
    sources: state.article.source
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getSources,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Sources)
