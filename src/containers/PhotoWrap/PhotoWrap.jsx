import React, {Component} from 'react';
import ImagesUtils from '../../utils/ImagesUtils'
import './PhotoWrap.css'
import PropTypes from 'prop-types';

class PhotoWrap extends Component {
  render() {
    return <div className="photoWrap">
      <div className="photoWrap-image-frame">
        <img alt={this.props.caption} src={ImagesUtils.getFullOrDefault(this.props.image)} className="photoWrap-image"/>
      </div>
      <div className="photoWrap-caption">{this.props.caption}</div>
    </div>
  }
}

PhotoWrap.PropTypes = {
  image: PropTypes.object,
  caption: PropTypes.string,
};

export default PhotoWrap;
