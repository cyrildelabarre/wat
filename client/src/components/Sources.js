import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  Card  from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardColumns from 'react-bootstrap/CardGroup'
import { getSources } from '../actions/GetArticles'

class Sources extends Component {

  constructor(props) {
    super(props)
    this.props.getSources()
  }

  render () {

    return (
      <div>
        <CardColumns>
          {
            this.props.sources.map((source, i) => {
              return(
                <Card className="source-card" data-attribute={source.name} key={i}>
                  <Card.Img variant="top" src={'https://icon-locator.herokuapp.com/icon?url='+source.url+'&size=70..120..200'} />
                  <Card.Body>
                    <Card.Title>{source.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text>
                      {source.description}
                    </Card.Text>
                    <Card.Link target="_blank" href={source.url}><Button className="source-link-button">{source.url}</Button></Card.Link>


                  </Card.Body>
                  <Card.Footer className="source-infos">
                    <small className="text-muted">Country : {source.country}</small><br></br>
                    <small className="text-muted">Language : {source.language}</small>
  </Card.Footer>
                </Card>
              )
            }
          )}
        </CardColumns>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    sources: state.article.source
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getSources
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Sources)
