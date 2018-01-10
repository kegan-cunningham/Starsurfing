import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RequestShow from './request_show';
import { fetchRequest, editRequest, deleteRequest } from '../../actions/request_actions.js';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let requestId = ownProps.id;
  return {
    fetchRequest: (requestId) => dispatch(fetchRequest(requestId)),
    editRequest: (request, requestId) => dispatch(editRequest(request, requestId)),
    deleteRequest: (requestId) => dispatch(deleteRequest(requestId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RequestShow));
