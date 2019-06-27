import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '../../../store/ducks/auth';

import { GoogleConf } from '../../../services/google';
import { Container, SignForm } from '../styles';

class Signin extends Component {
  static propTypes = {
    signInRequest: PropTypes.func.isRequired,
  };

  handleSubmit = (response) => {
    const { signInRequest } = this.props;

    signInRequest(response);
  };

  // handleInputChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  render() {
    return (
      <Container>
        <SignForm>
          <h1>Boas Vindas</h1>

          <GoogleLogin
            clientId={GoogleConf.clientId}
            buttonText="Entrar com Google"
            onSuccess={this.handleSubmit}
            onFailure={this.handleSubmit}
            cookiePolicy={GoogleConf.cookiePolicy}
          />
        </SignForm>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Signin);
