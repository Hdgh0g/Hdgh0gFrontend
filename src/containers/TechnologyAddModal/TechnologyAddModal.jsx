import React, {Component} from 'react'
import Modal from '../Modal/Modal.jsx'
import LabeledInput from "../LabeledInput/LabeledInput";
import ImageUpload from "../ImageUpload/ImageUpload";
import Button from "../Button/Button";
import "./TechnologyAddModal.css"

class TechnologyAddModal extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
      >
        <div className="technology-add">
          <LabeledInput
            label="Название"
            onChange={(caption) => this.props.addProperty({caption})}
            onEnter={() => this.sendTechnology()}
          />
          <ImageUpload
            uploadImage={(image) => this.props.uploadImage(image, (image) => this.props.addProperty({image}))}
            clearImage={this.props.clearImage}
            image={this.props.image}
            imageError={this.props.imageError}
          />
          <Button
            caption="Сохранить технологию"
            onClick={() => this.sendTechnology()}
          />
          <label>{this.props.technologyUploadError}</label>
        </div>
      </Modal>
    );
  }

  sendTechnology() {
    this.props.postTechnology(this.props.technology);
  }
}

export default TechnologyAddModal
