import React, {Component} from 'react';
import './TopText.css'
import PropTypes from 'prop-types';

class TopText extends Component {

  render() {
    if (this.props.headerText && this.props.infoText) {
      return <div className="topText">
        <h1> {this.props.headerText} </h1>
        <p className="topText-info"> {this.props.infoText} </p>
      </div>
    }
    return <div></div>
  }
}

TopText.PropTypes = {
  headerText : PropTypes.string,
  infoText : PropTypes.string,
};

export default TopText;
