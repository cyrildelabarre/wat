import React, { Component } from 'react'
import { connect } from 'react-redux'
import Iframe from 'react-iframe'
import { bindActionCreators } from 'redux'
import {  MDBCard, MDBCardBody, MDBCol, MDBRow, MDBView, MDBMask, MDBIcon } from 'mdbreact';
import Media from 'react-bootstrap/Media'

import { getArticles, getCategories } from '../actions/GetArticles'

class Articles extends Component {

  constructor(props) {
    super(props)
    this.props.getArticles()

    this.state = {
      displayIframe: false,
      imageLoadError: true,
    }
  }

  chooseCategory(e, props) {
    let category = e.target.innerText
    this.props.getCategories(category)
  }

  openIframe(url) {
    document.getElementById('myId').setAttribute("src", url)
    this.setState({
      displayIframe: !this.state.displayIframe
    })
     window.scrollTo(0, 0)
  }

  onError() {
    this.setState({
      imageUrl: "https://media.giphy.com/media/uprwwjptZW4Za/giphy.gif"
    })
  }


  closeIframe() {
    let element = document.getElementById('myId');

      element.classList.add('hideIframe');
      element.classList.remove("showIframe");
  }

  render () {
    return (
      // {TOP 2 ARTICLES}
      <div>
        <div id="mainIframe" className={this.state.displayIframe ? "myClassname showIframe" : "myClassname"}>
          <div id="iframeControl" onClick={this.closeIframe} className={this.state.displayIframe ? "myClassname showIframe" : "myClassname"}>
            <p>Retour sur Wat WAT ?</p>
            <button type="button" className="close" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>

          </div>
          <Iframe src='' id="myId" display="initial" position="relative" allowFullScreen />
        </div>
        <MDBRow className="m-top-5 px-5 mx-auto justify-content-center"
          style={{ fontWeight: 300, maxWidth: "100%" }}
          >
          <button type="button" className="btn category-btn gradient-button" onClick={this.chooseCategory.bind(this)}>business</button>
          <button type="button" className="btn category-btn gradient-button" onClick={this.chooseCategory.bind(this)}>entertainment</button>
          <button type="button" className="btn category-btn gradient-button" onClick={this.chooseCategory.bind(this)}>general</button>
          <button type="button" className="btn category-btn gradient-button" onClick={this.chooseCategory.bind(this)}>health</button>
          <button type="button" className="btn category-btn gradient-button" onClick={this.chooseCategory.bind(this)}>science</button>
          <button type="button" className="btn category-btn gradient-button" onClick={this.chooseCategory.bind(this)}>sports</button>
          <button type="button" className="btn category-btn gradient-button" onClick={this.chooseCategory.bind(this)}>technology</button>
        </MDBRow>
        <div className='container'>
          <div>
            <MDBCard
              className="my-5 px-5 mx-auto"
              style={{ fontWeight: 300, maxWidth: "90%" }}
              >
              <MDBCardBody style={{ paddingTop: 0 }}>
                <h2 className="h1-responsive font-weight-bold my-5 text-center">
                  Top News
                </h2>
                <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
                  ...
                </p>
                <MDBRow>
                  {
                    this.props.articles.map((article, i) => {
                      var now = new Date();
                      var publishedTime = new Date(article.publishedAt);
                      var timeDiff = (now - publishedTime)
                      var time = new Date(timeDiff).toLocaleTimeString("fr-FR")
                      const timePassed = time.split(':')[0] + 'h';
                      if (i < 2) {
                        var birthdays = require('celeb-birthdays');
                        console.log(birthdays['03-13']);
                        return (
                          <MDBCol lg="6" md="12" key={i} className="d-flex" onClick={this.openIframe.bind(this, article.url)}>
                            <div style={{
                                marginBottom: "1.5rem"
                              }}>
                              <MDBView hover rounded className="z-depth-1-half mb-4">
                                <img
                                  height={200}
                                  className="top-img"
                                  onError={(e)=>{ if (e.target.src !== "https://media.giphy.com/media/uprwwjptZW4Za/giphy.gif"){ e.target.onerror = null; e.target.src="https://media.giphy.com/media/uprwwjptZW4Za/giphy.gif"; } }}
                                  src={article.urlToImage}
                                  alt=""
                                  />

                                <MDBMask overlay="white-slight" className="waves-light" />

                              </MDBView>
                              <div className="d-flex justify-content-between">

                                <h6 className="">
                                  <MDBIcon icon="plane" className="pr-2" />
                                  {article.source.name}
                                </h6>

                                <p className="font-weight-bold dark-grey-text">
                                  <MDBIcon far icon="clock" className="pr-2" />
                                  {timePassed}
                                </p>
                              </div>
                              <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                                {article.title}
                              </h3>
                              <p className="dark-grey-text">
                                {article.description}
                              </p>
                            </div>
                          </MDBCol>
                        )
                      } else {
                        return (
                          // {REST OF ARTICLES}
                          <ul className="list-unstyled" key={i} onClick={this.openIframe.bind(this, article.url)}>

                              <Media as="li" key={i}>
                                <img
                                  width={264}
                                  height={180}
                                  className="mr-3"

                                  src={article.urlToImage}
                                  onError={(e)=>{ if (e.target.src !== "https://media.giphy.com/media/uprwwjptZW4Za/giphy.gif"){ e.target.onerror = null; e.target.src="https://media.giphy.com/media/uprwwjptZW4Za/giphy.gif"; } }}
                                  alt="Generic placeholder"
                                  />
                                <Media.Body>
                                  <h5>{article.title}</h5>
                                  <p>
                                    {article.description}
                                  </p>
                                  <p>{timePassed}</p>
                                </Media.Body>
                              </Media>

                          </ul>
                        )
                      }

                    })
                  }
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    articles: state.article.article,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCategories,
    getArticles,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
