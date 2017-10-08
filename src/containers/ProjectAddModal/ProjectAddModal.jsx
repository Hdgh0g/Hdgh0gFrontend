import React, {Component} from 'react'
import Modal from '../Modal/Modal.jsx'

class ProjectAddModal extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
      >
        <p>Добавление проекта</p>
      </Modal>
    );
  }
}

export default ProjectAddModal
