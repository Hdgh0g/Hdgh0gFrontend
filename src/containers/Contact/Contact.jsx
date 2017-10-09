import React, {Component} from 'react'
import './Contact.css'
import ImagesUtils from '../../utils/ImagesUtils.js'
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import Button from "../Button/Button";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <Link
          className="contact-link"
          target="_blank"
          href={this.props.link}>
          <img alt={this.props.title} src={ImagesUtils.getThumbnailOrDefault(this.props.image)}
               className="contact-image"/>
          <div className="contact-strings">
            <p className="contact-title"> {this.props.title} </p>
            {this.props.text ? <div className="contact-text"> {this.props.text} </div> : null}
          </div>
        </Link>
        {this.props.loggedIn ? <Button caption="✖" onClick={() => this.props.removeContact(this.props.id)}/> : null}
      </div>
    );
  }
}

Contact.PropTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.object,
};

export default Contact
