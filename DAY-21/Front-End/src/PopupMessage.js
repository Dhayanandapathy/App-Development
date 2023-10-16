import React from 'react';
import './PopupMessage.css';

function PopupMessage({ message, onClose }) {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PopupMessage;
