import UserShow from './user_show';
import { connect } from 'react-redux';
import { fetchUser, fetchUsers, fetchReviews, clearReviewErrors } from '../../actions/user_actions';
import { toggleRequestSuccessMessage } from '../../actions/ui_actions';
import { clearRequestErrors } from '../../actions/request_actions';
import { fetchRequests } from '../../actions/request_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.id];
  const reviews = Object.values(state.entities.reviews);
  const requests = Object.values(state.entities.requests);
  return {
    user,
    reviews,
    requests,
    currentUser: state.session.currentUser,
    requestSuccessMessageOn: state.ui.requestSuccessMessageOn
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchUsers: () => dispatch(fetchUsers()),
    editUser: (user, userId) => dispatch(editUser(user, userId)),
    fetchReviews: (id) => dispatch(fetchReviews(id)),
    fetchRequests: (id) => dispatch(fetchRequests(id)),
    clearReviewErrors: () => dispatch(clearReviewErrors()),
    clearRequestErrors: () => dispatch(clearRequestErrors()),
    toggleRequestSuccessMessage: () => dispatch(toggleRequestSuccessMessage()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
