import React from 'react';
import './Modal.css'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

class Modal extends React.Component<ModalProps> {
  render() {
    const { isOpen, onClose, children } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <div className="modal">
        <div className="modal-overlay" onClick={onClose}></div>
        <div className="modal-content">
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;