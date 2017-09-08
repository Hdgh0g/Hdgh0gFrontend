import React, {Component} from 'react'
import './Technology.css'
import ImagesUtils from '../../utils/ImagesUtils.js'
import PropTypes from 'prop-types';

class Technology extends Component {
  static defaultProps = {
    caption: "Title",
    image: null,
  };

  render() {
    return (
      <div className="technology">
        <img alt={this.props.caption} src={ImagesUtils.getThumbnailOrDefault(this.props.image)} className="technology-image"/>
        <div className="technology-caption"> {this.props.caption} </div>
      </div>
    );
  }
}

Technology.PropTypes = {
  caption: PropTypes.string,
  image: PropTypes.object,
};

export default Technology
