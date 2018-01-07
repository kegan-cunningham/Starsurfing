import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SessionFormModal from '../session_form_modal';

class Footer extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {

    return (
      <div className="footer">
        <a className='github' href='http://github.com/TheSlyPig'/>
        <a className='linkedin' href='http://www.linkedin.com/in/kegan-cunningham'/>
      </div>
    );
  }
}

export default withRouter(Footer);
