import React from 'react';
import { withRouter } from 'react-router-dom';

class AboutForm extends React.Component {
  constructor(props) {
    super(props);
    let about = '';
    debugger
    if (props.location.state) {
      about = props.location.state.about;
    }
    this.state = {
      about: about,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectToUserShow = this.redirectToUserShow.bind(this);
    this.handleAboutEdit = this.handleAboutEdit.bind(this);
    this.editingAbout = false;
  }

  submitSuccessCallback() {
    this.redirectToUserShow();
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  redirectToUserShow() {
    const url = `/users/${this.props.match.params.id}`;
    this.props.history.push(url);
  }

  handleAboutEdit(e) {
    e.preventDefault();
    this.editingAbout = true;
  }

  userEditAbout() {
    return (
      <button
        className='user-review-edit-button'
        onClick={this.handleAboutEdit}
      >
        Edit
      </button>
    );
  }

  render() {
    if (this.editingAbout) {
      return (
        <ul className='user-about-container'>
          <li className={'user-about'}><h2>About me:</h2> {user.about} {this.userEditAbout()}</li>
        </ul>
      );
    } else {
      return (
        <ul className='user-about-container'>
          <form onSubmit={this.handleAboutSubmit}>
            <input
              className="about-form-title"
              type="text"
              value={this.state.about}
              onChange={this.update("about")}
            />
          <input className="about-submit" type="submit" />
            <div className="about-cancel" onClick={this.redirectToUserShow}>Cancel</div>
          </form>
        </ul>
      );
    }
  }
}

export default withRouter(AboutForm);
