import React, {Component} from 'react'
import Modal from '../Modal/Modal.jsx'
import Button from "../Button/Button";
import ImageUpload from "../ImageUpload/ImageUpload";
import LabeledInput from "../LabeledInput/LabeledInput"
import "./ContactAddModal.css"

class ContactAddModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: null,
      description: null,
      url: null,
      imageId: null,
    };
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
      >
        <div className="contact-add">
          <LabeledInput
            label="Название"
            onChange={(text) => this.updateTitle(text)}
            onEnter={() => this.sendContact()}
          />
          <LabeledInput
            label="Описание"
            onChange={(text) => this.updateDescription(text)}
            onEnter={() => this.sendContact()}
          />
          <LabeledInput
            label="URL"
            onChange={(text) => this.updateUrl(text)}
            onEnter={() => this.sendContact()}
          />
          <ImageUpload
            onUpload={(id) => this.setImageId(id)}
            onCancel={() => this.clearImageId()}
          />
          <Button
            caption="Сохранить контакт"
            onClick={() => this.sendContact()}
          />
        </div>
      </Modal>
    );
  }

  updateTitle(title) {
    this.setState({title})
  }

  updateDescription(description) {
    this.setState({description})
  }

  updateUrl(url) {
    this.setState({url})
  }

  setImageId(imageId) {
    this.setState({imageId})
  }

  clearImageId() {
    this.setState({
      imageId: null
    })
  }

  sendContact() {
    const contact = {
      title: this.state.title,
      description: this.state.description,
      url: this.state.url,
      image: {
        id: this.state.imageId,
      }
    };
    console.log(contact);
  }
}

export default ContactAddModal
