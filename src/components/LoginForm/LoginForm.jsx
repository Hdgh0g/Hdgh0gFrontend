import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import './LoginForm.css';
import Button from "../../containers/Button/Button";
import {login, logout} from '../../actions/login.js'

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      passwordValue : '',
      isActive : false,
    };
  }

  render() {
    if (this.props.loggedIn) {
      return this.renderLoggedIn();
    }
    if (this.state.isActive) {
      return this.renderLoginForm();
    }
    return this.renderHiddenButton();
  }

  renderHiddenButton() {
    return (
      <div className="loginForm">
        <Button caption="" onClick={() => this.showLoginForm()}/>
      </div>
    )
  }

  renderLoggedIn() {
    return(
      <div className="loginForm">
        <p className="loginForm-message">Поздравляю, ты сейчас админ</p>
        <Button caption="Выйти" onClick={() => this.logout()}/>
      </div>
    )
  }

  renderLoginForm() {
    return(
      <div className="loginForm">
        <input type="password"
               onChange={(e) => this.updatePassword(e)}
               onKeyUp={(key) => this.handleInputKeyUp(key)}/>
        <Button caption="Войти" onClick={() => this.props.actions.login(this.state.passwordValue)}/>
        <p className="loginForm-message">{this.props.errorMessage}</p>
      </div>
    )
  }

  handleInputKeyUp(key) {
    if (key.key === "Enter") {
      this.props.actions.login(this.state.passwordValue);
    }
  }

  updatePassword(evt) {
    this.setState({
      passwordValue : evt.target.value
    })
  }

  showLoginForm() {
    this.setState({
      isActive : true,
    });
  }

  logout() {
    this.setState({
      passwordValue : '',
      isActive : false,
    });
    this.props.actions.logout();
  }
}

LoginForm.PropTypes = {
  loggedIn: PropTypes.bool,
};

export default connect(
  (state) => {
    return {
      loggedIn: state.admin.loggedIn,
      errorMessage : state.admin.errorMessage,
    }
  },
  (dispatch) => {
    return {
      actions: {
        login: bindActionCreators(login, dispatch),
        logout: bindActionCreators(logout, dispatch),
      }
    }
  }
)(LoginForm);
