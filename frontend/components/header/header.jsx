import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormModal from '../session_form_modal';

class Header extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
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
    }
     else {
      headerLinksOrPhoto = (
        <div>
          <SessionLinks handleOpenModal={this.handleOpenModal}/>
        </div>
      );
      return (
        <div>
          <SessionFormModal
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
}

const SessionLinks = (props) => (
  <nav className="header-session-links">
    <button onClick={props.handleOpenModal}>Join</button>
    <button onClick={props.handleOpenModal}>Log in</button>
  </nav>
);

const ProfilePhotoLinks = ({ currentUser, logout }) => (
  <section className="header-photo-links">
    <h2 className="header-photo">{currentUser.username}</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
  </section>
);

export default Header;
