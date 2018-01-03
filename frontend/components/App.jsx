import React from 'react';
import HeaderContainer from './header/header_container';
import { Route, Link } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div>
    <header>
      <h1><Link to={'/'}>Starsurfing</Link></h1>
      <HeaderContainer/>
    </header>

  <Route path="/login" component={SessionFormContainer} />
  <Route path="/signup" component={SessionFormContainer} />
</div>
);

export default App;
