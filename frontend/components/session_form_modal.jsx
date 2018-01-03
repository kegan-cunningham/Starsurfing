import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

export default (props) => {

  return (
    <Modal
      isOpen={props.showModal}
      onRequestClose={props.handleCloseModal}
      shouldCloseOnOverlayClick={false}
    >
      <SessionFormContainer/>
    </Modal>
  );
};
