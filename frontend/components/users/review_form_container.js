import { connect } from 'react-redux';
import { createReview, editReview } from '../../actions/user_actions.js';
import ReviewForm from './review_form';

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  editReview: (review, reviewId) => dispatch(editReview(review, reviewId)),
});

export default connect(null, mapDispatchToProps)(ReviewForm);
