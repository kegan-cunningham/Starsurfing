import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.formAction(user);
  }

  componentDidUpdate(){
    if (this.props.loggedIn){
      hashHistory.push("/");
    }
	}

	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
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

  navLink(){
    if (this.props.formType === "login") {
      return <Link to="/signup">Sign up</Link>;
    } else {
      return <Link to="/login">Log in</Link>;
    }
  }

	render() {
		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					Log in to Starsurfing
					<br/>
					{ this.renderErrors() }
					<div className="login-form">
						<br />
						<label> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>

						<br />
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>

						<br />
						<input type="submit" value="Submit" />
            <br />
            { this.navLink() }
					</div>
				</form>
			</div>
		);
	}


}

export default SessionForm;
