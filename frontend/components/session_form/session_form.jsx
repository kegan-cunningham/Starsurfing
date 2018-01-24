import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      hosting: false,
      imageFile: null,
      imageUrl: null,
      about: '',
      selectedOption: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModalChange = this.handleModalChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ formType: nextProps.formType });
  }

  componentDidMount() {
    this.props.fetchStars();
  }

  handleSelectChange(e) {
    this.setState({ selectedOption: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData;
    if (this.props.formType === 'login') {
      formData = Object.assign({}, {
        username: this.state.username,
        password: this.state.password,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        hosting: this.state.hosting,
        about: this.state.about,
        star_id: this.state.selectedOption,
      });
    } else {
      formData = new FormData();
      formData.append('user[username]', this.state.username);
      formData.append('user[password]', this.state.password);
      formData.append('user[firstname]', this.state.firstname);
      formData.append('user[lastname]', this.state.lastname);
      formData.append('user[hosting]', this.state.hosting);
      formData.append('user[about]', this.state.about);
      formData.append('user[star_id]', this.state.selectedOption);
      if (this.state.imageFile) formData.append('user[image]', this.state.imageFile);
    }
    this.props.formAction(formData).then(() => (this.props.handleCloseModal()));
  }

  handleDemoLogin(e) {
    e.preventDefault();
    const user = {
      username: 'DemoUser',
      password: 'password',
    };
    this.props.demoLogin(user).then(() => (this.props.handleCloseModal()));
  }

  handleModalChange(e) {
    e.preventDefault();
    if (this.props.formType === 'login') {
      this.props.receiveFormType('sign_up');
    } else {
      this.props.receiveFormType('login');
    }

    this.props.clearSessionErrors();
  }

  update(field) {
    return e => { this.setState({ [field]: e.currentTarget.value }); };
  }

  renderErrors() {
    return (
      <ul className="session-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  headerText() {
    if (this.props.formType === 'login') {
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

  demoLogin() {
    return (
      <div className="demo-login">
        <p>or</p>
        <button onClick={this.handleDemoLogin}>Demo Login</button>
      </div>
    );
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  signupExtras() {
    if (this.props.formType === 'sign_up') {
      const { selectedOption } = this.state;
      const selectedValue = selectedOption && selectedOption.value;
      const allStars = Object.values(this.props.stars).map((star) => {
        return (<option value={star.id}>{star.name}</option>);
      });

      return (
        <div className="signup-extras">
          <div className="firstname-lastname">
            <label className="login-input-label">
              <input type="text"
                placeholder="First name"
                value={this.state.firstname}
                onChange={this.update('firstname')}
                className="login-input" />
            </label>
            <br/>

            <label className="login-input-label">
              <input type="text"
                placeholder="Last name"
                value={this.state.lastname}
                onChange={this.update('lastname')}
                className="login-input" />
            </label>
            <br/>
          </div>

          <div className="star-select">
            <select
              onChange={this.handleSelectChange}
              value={this.state.selectedOption}
            >
              <option disabled selected value="0">What solar system are you from?</option>
              { allStars }
            </select>

          </div>

          <div className="signup-about">
            <label className="login-input-label">
              <textarea
                placeholder="Write a paragraph about yourself"
                cols="30"
                rows="4"
                value={this.state.about}
                onChange={this.update("about")}
              />
            </label>
          </div>

          <div className="signup-image">
            Profile picture: <input className="signup-image-form" type="file" onChange={this.updateFile}/>
          </div>
        </div>
      );
    }
  }

  navLink() {
    if (this.props.formType === 'login') {
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
                  onChange={this.update('username')}
                  className="login-input" />
                </label>

                <br/>
                <label className="username-password">
                  <input type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input" />
                </label>

                <br/>
                <input className="submit-button" type="submit" value="Submit" />
              { this.demoLogin() }
              { this.navLink() }
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
