import { connect } from 'react-redux';
import { logout, clearSessionErrors } from '../../actions/session_actions';
import Header from './header';
import { receiveFormType } from '../../actions/ui_actions';

const mapStateToProps = state => {
  debugger
  return {
    currentUser: state.session.currentUser,
    formType: state.ui.formType
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  receiveFormType: formType => dispatch(receiveFormType(formType)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
