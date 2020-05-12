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
        <div className="modal" id="modal">
          <div className="content">{this.props.children}</div>
          <div className="actions">
            <button className="toggle-button" onClick={this.onClose}>
              close
            </button>
          </div>
        </div>
      );
    }
  }
export default Modal;
