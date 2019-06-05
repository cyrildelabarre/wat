import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Col, Button } from 'react-bootstrap'

import { getUser } from '../actions/Authentication'


import ChangeUser from '../components/ChangeUser'


export class MonCompte extends Component {

  constructor(props) {
    super(props)
    let userPseudo = localStorage.getItem("userPseudo")
    let userID = localStorage.getItem("userID")

    this.state = {
      userPseudo: userPseudo,
      userID: userID,
      modifyName: false,
      isAdmin: false,
      qualifying: ['5c17bb3bc7924a0b36b6de71', '5c17bb3bc7924a0b36b6de68', '5c17bb3bc7924a0b36b6de73', '5c17bb3bc7924a0b36b6de69', '5c17bb3bc7924a0b36b6de6e', '5c17bb3bc7924a0b36b6de6a', '5c17bb3bc7924a0b36b6de70', '5c17bb3bc7924a0b36b6de72', '5c17bb3bc7924a0b36b6de74', '5c17bb3bc7924a0b36b6de6d', '5c17bb3bc7924a0b36b6de67', '5c17bb3bc7924a0b36b6de6b', '5c17bb3bc7924a0b36b6de6c', '5c17bb3bc7924a0b36b6de6f', '5c17bb3bc7924a0b36b6de75', '5c17bb3bc7924a0b36b6de84']
    }
  }

  componentDidMount() {
    const userID = this.state.userID
    this.props.getUser({ id: userID })
    this.state.userPseudo === 'C Fab' && this.setState({ isAdmin: true })
  }



  render() {
    return (
      <Container id="mon-compte" className="vertical-middle" fluid>
        <Col xs={12}>
          <h1 className="align-center">Voici ton compte {this.state.userPseudo}</h1>
          {this.props.userData.map((user, i) => <ChangeUser key={i} {...user} />)}
        </Col>

        {this.state.isAdmin ? <Col xs={12} className="align-center"><Button onClick={this.getPoints.bind(this)}>Calculer les points</Button></Col> : null}
      </Container>
    )
  }
}

function mapStateToProps(state){
  return {
    userData: state.auth.user,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getUser,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MonCompte)
