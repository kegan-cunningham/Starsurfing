import StarShow from './star_show';
import { connect } from 'react-redux';
import { fetchStar, fetchStars } from '../../actions/star_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const star = state.entities.stars[ownProps.match.params.id] || {};
  let users = [];
  let user;
  if (star.userIds) {
    star.userIds.forEach((id) => {
      user = state.entities.users[id];
      if (user) {
        users.push(user);
      }
    });
  }
  return {
    star,
    users
  };
};

const mapDispatchToProps = dispatch => ({
  fetchStar: (id) => dispatch(fetchStar(id)),
  fetchStars: () => dispatch(fetchStars()),
  fetchUsers: (userIds) => dispatch(fetchUsers(userIds)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarShow);
