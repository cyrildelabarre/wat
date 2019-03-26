import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Col, FormGroup, FormControl, Button, Card } from 'react-bootstrap';
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
        <Col xs={12} md={4} mdOffset={4}>

            <Card id="logup-panel-group">
              <Card.Heading>
                <Card.Title componentClass="h2">Créer ton compte</Card.Title>
              </Card.Heading>
              <Card.Body>
                <FormGroup controlId="nom">
                  <FormControl
                    type='text'
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.nom
                    })}
                    placeholder="Entre ton nom"
                    name="nom"
                    onChange={ this.handleInputChange }
                    value={ this.state.nom } />
                  {errors.nom && (<div className="invalid-feedback">{errors.nom}</div>)}
                </FormGroup>
                <FormGroup controlId="prenom">
                  <FormControl
                    type='text'
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.prenom
                    })}
                    placeholder="Entre ton prénom"
                    name="prenom"
                    onChange={ this.handleInputChange }
                    value={ this.state.prenom } />
                  {errors.prenom && (<div className="invalid-feedback">{errors.prenom}</div>)}
                </FormGroup>
                <FormGroup controlId="pseudo">
                  <FormControl
                    type='text'
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.pseudo
                    })}
                    placeholder="Entre ton pseudo"
                    name="pseudo"
                    onChange={ this.handleInputChange }
                    value={ this.state.pseudo } />
                  {errors.pseudo && (<div className="invalid-feedback">{errors.pseudo}</div>)}
                </FormGroup>
                <FormGroup controlId="email">
                  <FormControl
                    type='email'
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.email
                    })}
                    placeholder="Entre ton email"
                    name="email"
                    onChange={ this.handleInputChange }
                    value={ this.state.email } />
                  {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                </FormGroup>
                <FormGroup controlId="password">
                  <FormControl
                    type='password'
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password
                    })}
                    placeholder="Entre ton mot de passe"
                    name="password"
                    onChange={ this.handleInputChange }
                    value={ this.state.password } />
                  {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                </FormGroup>
                <FormGroup controlId="password_confirm">
                  <FormControl
                    type='password'
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password_confirm
                    })}
                    placeholder="Confirme ton mot de passe"
                    name="password_confirm"
                    onChange={ this.handleInputChange }
                    value={ this.state.password_confirm } />
                  {errors.password_confirm && (<div className="invalid-feedback">{errors.password_confirm}</div>)}
                </FormGroup>
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
