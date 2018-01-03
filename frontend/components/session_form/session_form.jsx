import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      hosting: false,
      star_id: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkboxUpdate = this.checkboxUpdate.bind(this);
  }

  componentDidUpdate(){
    if (this.props.loggedIn){
      hashHistory.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.formAction(user);
  }


	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	checkboxUpdate(e){
		this.setState({
      hosting: e.target.checked
    });
	}

	renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

  headerText(){
    if (this.props.formType === "login") {
      return (
        <p>Log in to Starsurfing</p>
      );
    } else {
      return (
        <p>Join Starsurfing for free</p>
      );
    }
  }

  signupExtras(){
    if (this.props.formType === "signup") {
      return (
        <div>
          <label> Available to host guests:
            <input type="checkbox"
              checked={this.state.hosting}
              onChange={this.checkboxUpdate}
              className="login-input" />
          </label>
          <br/>
          <label> Home star id:
            <input type="number"
              onChange={this.update("star_id")}
              className="login-input" />
          </label>
          <br/>
        </div>
      );
    } else {
    }
  }

  navLink(){
    if (this.props.formType === "login") {
      return (
        <div>
          <p>Don't have an account?</p>
          <Link to="/signup">Sign up</Link>
        </div>
      );
    } else {
      return (
        <div>
          <p>Already a member?</p>
          <Link to="/login">Log In</Link>
        </div>
      );
    }
  }

	render() {
		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
          { this.headerText() }
					<br/>
					{ this.renderErrors() }
					<div className="login-form">
						<br/>
						<label> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>

						<br/>
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>

						<br/>
            { this.signupExtras() }

						<input type="submit" value="Submit" />
            <br/>
            { this.navLink() }
					</div>
				</form>
			</div>
		);
	}


}

export default withRouter(SessionForm);
