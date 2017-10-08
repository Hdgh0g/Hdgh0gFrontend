import React, {Component} from 'react'
import Modal from '../Modal/Modal.jsx'

class TechnologyAddModal extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
      >
        <p>Добавление технологии</p>
      </Modal>
    );
  }
}

export default TechnologyAddModal
