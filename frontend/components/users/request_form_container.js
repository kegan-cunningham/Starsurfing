import { connect } from 'react-redux';

import { createRequest } from '../../actions/request_actions.js';
import RequestForm from './request_form';

const mapDispatchToProps = dispatch => ({
  createRequest: request => dispatch(createRequest(request)),
});

export default connect(null, mapDispatchToProps)(RequestForm);
