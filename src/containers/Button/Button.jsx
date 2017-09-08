import React, {Component} from 'react';
import './Button.css';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return <div
      className="button"
      onClick={this.props.onClick}
    >
      {this.props.caption}
    </div>
  }
}

Button.PropTypes = {
  onClick: PropTypes.func,
  caption: PropTypes.string
};

export default Button;
