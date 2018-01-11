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
    this.handleProfileLink = this.handleProfileLink.bind(this);
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

  handleProfileLink () {
    this.props.clearSessionErrors();
    const userId = this.props.currentUser.id;
    this.props.history.push(`/users/${userId}`);
  }

  render () {
    let headerLinksOrPhoto;
    if (this.props.currentUser){
      headerLinksOrPhoto = (
        <div>
          <ProfilePhotoLinks
            handleProfileLink={this.handleProfileLink}
            dropdownOpen={this.props.dropdownOpen}
            toggleDropdown={this.props.toggleDropdown}
            currentUser={this.props.currentUser}
            logout={this.props.logout}
          />
        </div>
      );
    } else {
      headerLinksOrPhoto = (
        <div>
          <SessionLinks
            handleOpenModalJoin={this.handleOpenModalJoin}
            handleOpenModalLogin={this.handleOpenModalLogin}
          />
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

const ProfilePhotoLinks = ({ currentUser, logout, dropdownOpen, toggleDropdown, handleProfileLink }) => (
  <section className="header-photo-links">
    <div onClick={toggleDropdown} className="dropdown-toggle">
      <div className="header-photo">
        <img src={currentUser.imageUrl}></img><i>&#9662;</i>
      </div>
    </div>
    <ul className={dropdownOpen ? 'dropdown' : 'hidden'}>
      <button className="header-button" onClick={
          function(event){ toggleDropdown(); logout()}
        }>Log Out</button>
      <button className="header-button" onClick={
          function(event){ toggleDropdown(); handleProfileLink()}
        }>My Profile</button>
    </ul>
  </section>
);

export default withRouter(Header);
