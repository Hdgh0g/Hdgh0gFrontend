import React, {Component} from 'react'
import Modal from '../Modal/Modal.jsx'
import LabeledInput from "../LabeledInput/LabeledInput";
import ImageUpload from "../ImageUpload/ImageUpload";
import "./PhotoAddModal.css"

class PhotoAddModal extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
      >
        <div className="photo-add">
          <LabeledInput
            label="Название"
            onChange={(caption) => this.props.setPhotoAddModalCaption(caption)}
          />
          <ImageUpload
            uploadImage={(image) => this.props.uploadImageWithCaption(image, this.props.caption)}
            clearImage={this.props.clearImage}
            imageError={this.props.imageError}
          />
        </div>
      </Modal>
    );
  }
}

export default PhotoAddModal
