import { connect } from 'react-redux';
import { editUser } from '../../actions/user_actions.js';
import AboutForm from './about_form';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.id];
  return {
    user
  };
};

const mapDispatchToProps = dispatch => ({
  editUser: (user, userId) => dispatch(editUser(user, userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutForm);
