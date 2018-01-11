import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    let body = '';
    let title = '';
    if (props.location.state) {
      body = props.location.state.body;
      title = props.location.state.title;
    }
    this.state = {
      body: body,
      title: title,
      user_id: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectToUserShow = this.redirectToUserShow.bind(this);
    this.submitErrorsCallback = this.submitErrorsCallback.bind(this);
    this.submitSuccessCallback = this.submitSuccessCallback.bind(this);
  }

  submitSuccessCallback() {
    this.props.clearReviewErrors();
    this.redirectToUserShow();
  }

  submitErrorsCallback(errors) {
    this.props.receiveReviewErrors(errors.responseJSON);
  }

  handleSubmit(e) {
    e.preventDefault();
    const userId = parseInt(this.props.match.params.userId);
    const review = Object.assign({}, this.state, { user_id: userId });

    if (this.props.location.state) {
      this.props.editReview(review, this.props.location.state.id).then(
        // if 200
        this.submitSuccessCallback,
        // else
        this.submitErrorsCallback
      );
    } else {
      this.props.createReview(review).then(
        this.submitSuccessCallback,
        this.submitErrorsCallback
      );
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  redirectToUserShow() {
    const url = `/users/${this.props.match.params.userId}`;
    this.props.history.push(url);
  }

  renderErrors() {
    return (
      <ul className="review-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <br/>
          <input
            className="review-form-title"
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
          />
          <br/>

          <label>Body</label>
          <br/>

          <textarea
            cols="30"
            rows="6"
            value={this.state.body}
            onChange={this.update("body")}
          />
          <br/>
          <input className="review-submit" type="submit" />
          <div className="review-cancel" onClick={this.redirectToUserShow}>Cancel</div>
          { this.renderErrors() }
        </form>
      </div>
    );
 }
}

export default withRouter(ReviewForm);
