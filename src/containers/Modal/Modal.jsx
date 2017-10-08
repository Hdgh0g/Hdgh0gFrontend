import React, {Component} from 'react'
import ReactModal from 'react-modal'
import './Modal.css'

class Modal extends Component {
  render() {
    return (
      <ReactModal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        className="modal"
        overlayClassName="modal-overlay"
      >
        {this.props.children}
      </ReactModal>
    );
  }
}

export default Modal
