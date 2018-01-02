import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="session-links">
    <Link to="/log_in">Log in</Link>
    <br/>
    <Link to="/sign_up">Sign up</Link>
  </nav>
);

const profilePhotoLinks = (currentUser, logOut) => (
  <section className="header-photo-links">
    <h2 className="header-photo">{currentUser.username}</h2>
    <button className="header-button" onClick={logOut}>Log Out</button>
  </section>
);

function Header({currentUser, logOut}){
  if (currentUser){
    return profilePhotoLinks(currentUser, logOut);
  } else {
    return sessionLinks();
  }
}

export default Header;
