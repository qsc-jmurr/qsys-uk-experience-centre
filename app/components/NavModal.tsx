import React from 'react';
import Link from 'next/link';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <nav className="modal-nav">    
          <Link href="../main/tourmanagement" className="modal-link" onClick={onClose}>Tour Management</Link>
          <Link href="../main/manualdemos" className="modal-link" onClick={onClose}>Manual Demos</Link>
        </nav>
      </div>
    </div>
  );
};

export default Modal; 