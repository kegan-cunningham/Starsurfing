import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      hosting: false,
      star_id: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModalChange = this.handleModalChange.bind(this);
    this.checkboxUpdate = this.checkboxUpdate.bind(this);
  }

  // componentDidUpdate() {
  //   if (this.props.loggedIn){
  //     this.props.history.push("/");
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.loggedIn) {
    //   this.props.history.push('/');
    // }
    this.setState({formType: nextProps.formType});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.formAction(user).then(() => (this.props.handleCloseModal()));
  }


	update(field) {
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	checkboxUpdate(e) {
		this.setState({
      hosting: e.target.checked
    });
	}

	renderErrors() {
		return(
			<ul className="session-errors">
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

  headerText() {
    if (this.props.formType === "login") {
      return (
        <div className="header-title">
          <h2>Log in to Starsurfing</h2><div onClick={this.props.handleCloseModal}>&times;</div>
        </div>
      );
    } else {
      return (
        <div className="header-title">
          <h2>Join Starsurfing for free</h2><div onClick={this.props.handleCloseModal}>&times;</div>
        </div>
      );
    }
  }

  signupExtras() {
    if (this.props.formType === "sign_up") {
      return (
        <div className="firstname-lastname">
          <label className="login-input-label">
            <input type="text"
              placeholder="First name"
              value={this.state.firstname}
              onChange={this.update("firstname")}
              className="login-input" />
          </label>
          <br/>

          <label className="login-input-label">
            <input type="text"
              placeholder="Last name"
              value={this.state.lastname}
              onChange={this.update("lastname")}
              className="login-input" />
          </label>
          <br/>

        </div>
      );
    } else {
    }
  }

  handleModalChange(e) {
    e.preventDefault();
    if (this.props.formType === "login"){
      this.props.receiveFormType('sign_up');
    } else {
      this.props.receiveFormType('login');
    }
  }

  navLink() {
    if (this.props.formType === "login") {
      return (
        <div className="login-alternate">
          <p>Don't have an account?</p>
          <button onClick={this.handleModalChange}>Sign up</button>
        </div>
      );
    } else {
      return (
        <div className="login-alternate">
          <p>Already a member?</p>
          <button onClick={this.handleModalChange}>Log in</button>
        </div>
      );
    }
  }

	render() {
		return (
      <div className="modal-screen">
  			<div className="login-form-container">
  				<form onSubmit={this.handleSubmit} className="login-form-box">
            { this.headerText() }
  					{ this.renderErrors() }
  					<div className="login-form">

              { this.signupExtras() }

  						<label className="username-password">
  							<input type="text"
                  placeholder="Username"
  								value={this.state.username}
  								onChange={this.update("username")}
  								className="login-input" />
  						</label>

  						<br/>
  						<label className="username-password">
  							<input type="password"
                  placeholder="Password"
  								value={this.state.password}
  								onChange={this.update("password")}
  								className="login-input" />
  						</label>

  						<br/>

  						<input className="submit-button" type="submit" value="Submit" />
              <br/>
              { this.navLink() }
  					</div>
  				</form>
  			</div>
      </div>
		);
	}
}

export default withRouter(SessionForm);
