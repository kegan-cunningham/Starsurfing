import UserShow from './user_show';
import { connect } from 'react-redux';
import { fetchUser, fetchUsers, fetchReviews } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.id];
  let reviews = [];
  if (user && user.reviews) {
    reviews = user.reviews;
  }
  return {
    user,
    reviews,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchReviews: () => dispatch(fetchReviews(ownProps.match.params.id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
