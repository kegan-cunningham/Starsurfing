import React from 'react';
import HeaderContainer from './header/header_container';
import { Route, Link } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './session_form_modal';

const App = () => (
  <div>
    <header>
      <h1 className="header-logo"><Link to={'/'}>starsurfing</Link></h1>
      <HeaderContainer/>
    </header>

  <AuthRoute path="" component={Modal} />
  <AuthRoute path="" component={Modal} />
</div>
);

export default App;
