import { connect } from 'react-redux';
import ReviewShow from './review_show';
import { deleteReview } from '../../actions/user_actions.js';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let reviewId = ownProps.id;
  return {
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewShow);
