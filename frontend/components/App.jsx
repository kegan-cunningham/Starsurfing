import React from 'react';
import HeaderContainer from './header/header_container';
import { Route, Link } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import StarIndexContainer from './stars/star_index_container';
import UserShowContainer from './users/user_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './session_form_modal';

const App = () => (
  <div>
    <header>
      <h1 className="header-logo"><Link to={'/'}>starsurfing</Link></h1>
      <HeaderContainer/>
    </header>
    <Route exact path="/" component={ StarIndexContainer } />
    <Route path="/users/:id" component={ UserShowContainer } />
</div>
);

export default App;
