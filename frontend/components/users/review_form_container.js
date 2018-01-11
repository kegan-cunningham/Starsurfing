import { connect } from 'react-redux';
import { createReview, editReview, receiveReviewErrors, clearReviewErrors } from '../../actions/user_actions.js';
import ReviewForm from './review_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.review,
  };
};

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  editReview: (review, reviewId) => dispatch(editReview(review, reviewId)),
  receiveReviewErrors: (errors) => dispatch(receiveReviewErrors(errors)),
  clearReviewErrors: () => dispatch(clearReviewErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
