import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SessionFormContainer from './session_form/session_form_container';
import { connect } from 'react-redux';

export default (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.handleCloseModal}
      shouldCloseOnOverlayClick={false}
      overlayClassName={{
        base: 'modal-screen',
        afterOpen: 'modal-screen',
        beforeClose: 'modal-screen'
      }}
      className={{
        base: 'login-form-container',
        afterOpen: 'login-form-container',
        beforeClose: 'login-form-container'
      }}
    >
      <SessionFormContainer
        formType={props.formType}
        handleCloseModal={props.handleCloseModal}
      />
    </Modal>
  );
};
