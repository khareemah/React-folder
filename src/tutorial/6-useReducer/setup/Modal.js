import React, { useEffect } from 'react';

const Modal = ({ modalMessage, closeModal }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      closeModal();
    }, 3000);

    return () => clearTimeout(timeOut);
  }, []);
  return (
    <div className="modal">
      <p>{modalMessage}</p>
    </div>
  );
};

export default Modal;
