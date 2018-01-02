import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const formAction = (formType === 'login') ? login : signup;

  return {
    formAction: user => dispatch(formAction(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
