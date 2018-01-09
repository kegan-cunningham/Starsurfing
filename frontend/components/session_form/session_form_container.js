import { connect } from 'react-redux';
import { signup, login, logout, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';
import { receiveFormType } from '../../actions/ui_actions';
import { fetchStars } from '../../actions/star_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType: state.ui.formType,
    stars: state.entities.stars,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.formType;
  const formAction = (formType === 'login') ? login : signup;

  return {
    formAction: user => dispatch(formAction(user)),
    receiveFormType: formType => dispatch(receiveFormType(formType)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    fetchStars: () => dispatch(fetchStars()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
