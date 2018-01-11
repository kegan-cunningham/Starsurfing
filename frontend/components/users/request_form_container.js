import { connect } from 'react-redux';
import { createRequest, receiveRequestErrors, clearRequestErrors } from '../../actions/request_actions.js';
import { toggleRequestSuccessMessage } from '../../actions/ui_actions.js';
import RequestForm from './request_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.request,
  };
};

const mapDispatchToProps = dispatch => ({
  createRequest: request => dispatch(createRequest(request)),
  receiveRequestErrors: (errors) => dispatch(receiveRequestErrors(errors)),
  clearRequestErrors: () => dispatch(clearRequestErrors()),
  toggleRequestSuccessMessage: () => dispatch(toggleRequestSuccessMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestForm);
