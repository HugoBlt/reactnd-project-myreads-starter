import React, {Component} from 'react'
import './Modal.css'

class Modal extends Component {
    onClose = event => {
      this.props.onClose && this.props.onClose(event);
    };
    render() {
      if (!this.props.show) {
        return null;
      }
      return (
        <div class="modal" id="modal">
          <div class="content">{this.props.children}</div>
          <div class="actions">
            <button class="toggle-button" onClick={this.onClose}>
              close
            </button>
          </div>
        </div>
      );
    }
  }
export default Modal;
