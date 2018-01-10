import { connect } from 'react-redux';
import RequestShow from './request_show';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let requestId = ownProps.id;
  return {
    fetchRequest: (requestId) => dispatch(fetchRequest(requestId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestShow);
