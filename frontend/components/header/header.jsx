import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SessionFormModal from '../session_form_modal';

class Header extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      showModal: false,
      formType: ''
    };

    this.handleOpenModalJoin = this.handleOpenModalJoin.bind(this);
    this.handleOpenModalLogin = this.handleOpenModalLogin.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

  }

  handleOpenModalJoin () {
    this.setState({ showModal: true });
    this.props.receiveFormType('sign_up');
  }

  handleOpenModalLogin () {
    this.setState({ showModal: true });
    this.props.receiveFormType('login');
  }

  handleCloseModal () {
    this.props.clearSessionErrors();
    this.setState({ showModal: false });
  }

  render () {
    let headerLinksOrPhoto;
    if (this.props.currentUser){
      headerLinksOrPhoto = (
        <div>
          <ProfilePhotoLinks currentUser={this.props.currentUser} logout={this.props.logout}/>
        </div>
      );
    } else {
      headerLinksOrPhoto = (
        <div>
          <SessionLinks handleOpenModalJoin={this.handleOpenModalJoin} handleOpenModalLogin={this.handleOpenModalLogin}/>
        </div>
      );
    }
    return (
      <div>
        <SessionFormModal
          { ...this.props }
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={false}
          handleCloseModal={this.handleCloseModal}
        />
      { headerLinksOrPhoto }
      </div>
    )
  }
}

const SessionLinks = (props) => (
  <nav className="header-session-links">
    <button onClick={props.handleOpenModalJoin}>Join</button>
    <button onClick={props.handleOpenModalLogin}>Log in</button>
  </nav>
);

const ProfilePhotoLinks = ({ currentUser, logout }) => (
  <section className="header-photo-links">
    <h2 className="header-photo">{currentUser.username}</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
  </section>
);

export default withRouter(Header);
