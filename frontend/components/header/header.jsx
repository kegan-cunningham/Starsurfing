import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="session-links">
    <Link to="/login">Log in</Link>
    <br/>
    <Link to="/signup">Sign up</Link>
  </nav>
);

const profilePhotoLinks = (currentUser, logout) => (
  <section className="header-photo-links">
    <h2 className="header-photo">{currentUser.username}</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
  </section>
);

function Header({currentUser, logout}){
  if (currentUser){
    return profilePhotoLinks(currentUser, logout);
  } else {
    return sessionLinks();
  }
}

export default Header;
