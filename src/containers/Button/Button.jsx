import React, {Component} from 'react';
import './Button.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

class Button extends Component {
  render() {
    return <Link
      className="button"
      to={this.props.link}
      onClick={this.props.onClick}
    >
      {this.props.caption}
    </Link>
  }
}

Button.PropTypes = {
  onClick: PropTypes.func,
  link: PropTypes.string,
  caption: PropTypes.string
};

export default Button;
