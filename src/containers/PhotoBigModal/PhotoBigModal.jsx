import React, {Component} from 'react'
import Modal from '../Modal/Modal.jsx'
import "./PhotoBigModal.css"
import ImagesUtils from "../../utils/ImagesUtils";
import Button from "../Button/Button";

class PhotoBigModal extends Component {
  render() {
    return this.props.image ? (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
      >
        <div className="photo-big">
          <div className="photo-with-controls">
            <div className="photo-button-center">
              <Button caption="<" onClick={this.props.prevImage}/>
            </div>
            <img alt={this.props.image.caption}
                 src={ImagesUtils.getFullOrDefault(this.props.image.image)}
                 className="photo-big-image"
            />
            <div className="photo-button-center">
              <Button caption=">" onClick={this.props.nextImage}/>
            </div>
          </div>
          <label>{this.props.image.caption}</label>
        </div>
      </Modal>
    ) : null;
  }
}

export default PhotoBigModal
