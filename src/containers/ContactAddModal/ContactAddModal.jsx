import React, {Component} from 'react'
import Modal from '../Modal/Modal.jsx'
import Button from "../Button/Button";
import ImageUpload from "../ImageUpload/ImageUpload";
import LabeledInput from "../LabeledInput/LabeledInput"
import "./ContactAddModal.css"

class ContactAddModal extends Component {

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
      >
        <div className="contact-add">
          <LabeledInput
            label="Название"
            onChange={(title) => this.props.addProperty({title})}
            onEnter={() => this.sendContact()}
          />
          <LabeledInput
            label="Описание"
            onChange={(description) => this.props.addProperty({description})}
            onEnter={() => this.sendContact()}
          />
          <LabeledInput
            label="URL"
            onChange={(url) => this.props.addProperty({url})}
            onEnter={() => this.sendContact()}
          />
          <ImageUpload
            uploadImage={(image) => this.props.uploadImage(image, (image) => this.props.addProperty({image}))}
            clearImage={this.props.clearImage}
            image={this.props.image}
            imageError={this.props.imageError}
          />
          <Button
            caption="Сохранить контакт"
            onClick={() => this.sendContact()}
          />
          <label>{this.props.contactUploadError}</label>
        </div>
      </Modal>
    );
  }

  sendContact() {
    this.props.postContact(this.props.contact);
  }
}

export default ContactAddModal
