import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      title: '',
      user_id: 0,
      author_id: props.currentUser.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToUserShow = this.navigateToUserShow.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const userId = parseInt(this.props.match.params.userId);
    const review = Object.assign({}, this.state, {
      user_id: userId
    });
    this.props.createReview({review});
    this.navigateToUserShow();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  navigateToUserShow() {
    const url = `/users/${this.props.match.params.userId}`;
    this.props.history.push(url);
  }

  render() {
    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <br/>
          <input
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
          <div className="review-cancel" onClick={this.navigateToUserShow}>Cancel</div>
        </form>
      </div>
    );
 }
}

export default withRouter(ReviewForm);
