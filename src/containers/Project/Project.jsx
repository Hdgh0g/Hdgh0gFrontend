import React, {Component} from 'react'
import './Project.css'
import ImagesUtils from '../../utils/ImagesUtils.js'
import PropTypes from 'prop-types';

class Project extends Component {

  static defaultProps = {
    title: "Title",
    image: null,
    description: "",
  };

  render() {
    return (
      <div className="project">
        <img alt={this.props.title} src={ImagesUtils.getFullOrDefault(this.props.image)} className="project-image"/>
        <div className="project-texts">
          <div className="project-caption"> {this.props.title} </div>
          <div className="project-description"> {this.props.description} </div>
        </div>
      </div>
    );
  }
}

Project.PropTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string
};

export default Project
