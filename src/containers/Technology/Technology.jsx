import React, {Component} from 'react'
import './Technology.css'
import ImagesUtils from '../../utils/ImagesUtils.js'
import PropTypes from 'prop-types';
import Button from "../Button/Button";

class Technology extends Component {
  render() {
    return (
      <div className="technology-row">
        <div className="technology">
          <img alt={this.props.caption} src={ImagesUtils.getThumbnailOrDefault(this.props.image)}
               className="technology-image"/>
          <div className="technology-caption"> {this.props.caption} </div>
        </div>
        {this.props.loggedIn ?
          <div className="technology-button-center">
            <Button caption="✖" onClick={() => this.props.removeTechnology(this.props.id)}/>
          </div>
          : null
        }
      </div>
    );
  }
}

Technology.PropTypes = {
  caption: PropTypes.string,
  image: PropTypes.object,
};

export default Technology
