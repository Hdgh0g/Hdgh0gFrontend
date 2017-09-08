import React, {Component} from 'react';
import './Button.css';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

class LinkButton extends Component {
  render() {
    return <Link
      className="button"
      to={this.props.link}
    >
      {this.props.caption}
    </Link>
  }
}

LinkButton.PropTypes = {
  link: PropTypes.string,
  caption: PropTypes.string
};

export default LinkButton;
