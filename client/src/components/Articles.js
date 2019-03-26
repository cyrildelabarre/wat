import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBView, MDBMask, MDBIcon } from 'mdbreact';
import Media from 'react-bootstrap/Media'

import { getArticles } from '../actions/GetArticles'

class Articles extends Component {

  constructor(props) {
    super(props)

    this.props.getArticles()

  }

  render () {

    return (
// {TOP 2 ARTICLES}
      <div className='container'>
        <div>
          <MDBCard
            className="my-5 px-5 mx-auto"
            style={{ fontWeight: 300, maxWidth: "90%" }}
            >
            <MDBCardBody style={{ paddingTop: 0 }}>
              <h2 className="h1-responsive font-weight-bold my-5 text-center">
                Section title
              </h2>
              <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit id
                laborum.
              </p>
              <MDBRow>
                {
                  this.props.articles.map((article, i) => {
                    if(article.content === null || article.description === null || article.publishedAt === null || article.source.name === null || article.title === null || article.urlToImage === null || article.url === null) {
                      return null
                    } else {
                      const content = article.content;
                      const contentSplit = content.split('[')[0];
                      if (i < 2) {
                        return (
                          <MDBCol lg="6" md="12" key={i}>
                            <div style={{
                                borderBottom: "1px solid #e0e0e0",
                                marginBottom: "1.5rem"
                              }}>
                              <MDBView hover rounded className="z-depth-1-half mb-4">
                                <img
                                  className="img-fluid"
                                  src={article.urlToImage}
                                  alt=""
                                  />
                                <a href="#!">
                                  <MDBMask overlay="white-slight" className="waves-light" />
                                </a>
                              </MDBView>
                              <div className="d-flex justify-content-between">
                                <a href="#!" className="light-blue-text">
                                  <h6 className="font-weight-bold">
                                    <MDBIcon icon="plane" className="pr-2" />

                                  </h6>
                                </a>
                                <p className="font-weight-bold dark-grey-text">
                                  <MDBIcon far icon="clock" className="pr-2" />
                                {article.publishedAt}
                                </p>
                              </div>
                              <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                                <a href="#!">{article.title}</a>
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
                          <ul className="list-unstyled" key={i}>
                            <a href={article.url} >
                              <Media as="li" key={i}>
                                <img
                                  width={264}
                                  height={180}
                                  className="mr-3"
                                  src={article.urlToImage}
                                  alt="Generic placeholder"
                                  />
                                <Media.Body>
                                  <h5>{article.title}</h5>
                                  <p>
                                    {article.description}
                                  </p>
                                </Media.Body>
                              </Media>
                            </a>
                          </ul>
                        )
                      }
                    }
                  })
                }
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
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
    getArticles,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
