import { connect } from 'react-redux';
import { logout, clearSessionErrors } from '../../actions/session_actions';
import Header from './header';
import { receiveFormType, toggleDropdown } from '../../actions/ui_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    formType: state.ui.formType,
    dropdownOpen: state.ui.dropdownOpen,
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  receiveFormType: formType => dispatch(receiveFormType(formType)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  toggleDropdown: () => dispatch(toggleDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
