import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  constructor(props) {
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

    if (this.props.currentUser){
      return (
        <div>
          <ProfilePhotoLinks currentUser={this.props.currentUser} logout={this.props.logout}/>
          <SessionFormModal
            isOpen={this.state.showModal}
            onRequestClose={this.handleCloseModal}
            shouldCloseOnOverlayClick={false}
            handleCloseModal={this.handleCloseModal}
            />
        </div>
      );
    }
     else {
      return (
        <div>
          <SessionLinks/>
        </div>
      );
    }
  }
}

const SessionLinks = () => (
  <nav className="header-session-links">
    <Link to="/signup">Join</Link>
    <br/>
    <Link to="/login">Log in</Link>
  </nav>
);

const ProfilePhotoLinks = (currentUser, logout) => (
  <section className="header-photo-links">
    <h2 className="header-photo">{currentUser.username}</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
  </section>
);

export default Header;
