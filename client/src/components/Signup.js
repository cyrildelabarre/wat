import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Col, Form, Button, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { registerUser } from "../actions/Authentication";

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      nom: '',
      prenom: '',
      pseudo: '',
      email: '',
      password: '',
      password_confirm: '',
      errors: {}
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit() {
    const user = {
      nom: this.state.nom,
      prenom: this.state.prenom,
      pseudo: this.state.pseudo,
      email: this.state.email,
      password: this.state.password,
      password_confirm: this.state.password_confirm
    }
    this.props.registerUser(user, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <Container id="logup" className="vertical-middle" fluid>
        <Col xs={12} md={{span:4,offset:4}}>
            <Card id="logup-panel-group">
              <Card.Header>
                <Card.Title>Créer ton compte</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form.Group controlId="nom">
                  <Form.Control
                    type='text'
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.nom
                    })}
                    placeholder="Entre ton nom"
                    name="nom"
                    onChange={ this.handleInputChange }
                    value={ this.state.nom } />
                  {errors.nom && (<div className="invalid-feedback">{errors.nom}</div>)}
                </Form.Group>
                <Form.Group controlId="prenom">
                  <Form.Control
                    type='text'
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.prenom
                    })}
                    placeholder="Entre ton prénom"
                    name="prenom"
                    onChange={ this.handleInputChange }
                    value={ this.state.prenom } />
                  {errors.prenom && (<div className="invalid-feedback">{errors.prenom}</div>)}
                </Form.Group>
                <Form.Group controlId="pseudo">
                  <Form.Control
                    type='text'
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.pseudo
                    })}
                    placeholder="Entre ton pseudo"
                    name="pseudo"
                    onChange={ this.handleInputChange }
                    value={ this.state.pseudo } />
                  {errors.pseudo && (<div className="invalid-feedback">{errors.pseudo}</div>)}
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Control
                    type='email'
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.email
                    })}
                    placeholder="Entre ton email"
                    name="email"
                    onChange={ this.handleInputChange }
                    value={ this.state.email } />
                  {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Control
                    type='password'
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password
                    })}
                    placeholder="Entre ton mot de passe"
                    name="password"
                    onChange={ this.handleInputChange }
                    value={ this.state.password } />
                  {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                </Form.Group>
                <Form.Group controlId="password_confirm">
                  <Form.Control
                    type='password'
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password_confirm
                    })}
                    placeholder="Confirme ton mot de passe"
                    name="password_confirm"
                    onChange={ this.handleInputChange }
                    value={ this.state.password_confirm } />
                  {errors.password_confirm && (<div className="invalid-feedback">{errors.password_confirm}</div>)}
                </Form.Group>
                <Button onClick={this.handleSubmit}>Enregistrer</Button>
                <Col xs={12} className='signup-to-signin'>
                  <Link to='/signin'>Sinon pour te connecter c'est par ici</Link>
                </Col>
              </Card.Body>
            </Card>
        </Col>
      </Container>
    )
  }
}

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(Signup);
