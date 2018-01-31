import React from 'react';
import { Route, Link } from 'react-router-dom';
import ReviewFormContainer from './review_form_container';

class Review extends React.Component {

  constructor(props) {
    super(props);
    this.editDeleteLinks = this.editDeleteLinks.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteReview(this.props.id);
  }

  editDeleteLinks() {
    if (this.props.currentUser && this.props.currentUser.id === this.props.authorId) {
      return (
        <section className="user-review-links">
          <Link
            className='user-review-edit-link'
            to={{
              pathname: `/users/${this.props.userId}/review`,
              state: {
                formType: 'edit',
                body: this.props.body,
                title: this.props.title,
                id: this.props.id
              }
            }}
          >
            Edit Review
          </Link>

          <button
            className='user-review-delete-link'
            onClick={this.handleDelete}
          >
            Delete Review
          </button>
        </section>
      );
    }
  }

  render() {
    const date = new Date(this.props.updatedAt).toString();
    const month = date.slice(4, 7);
    const year = date.slice(11, 15);
    return (
      <div className="review">
        <div className="review-author-info">
          <section className="review-author-info-left">
            <div className="review-author-photo">
              <Link className='reviewer-photo-link' to={`/users/${this.props.authorId}`}>
                <img src={this.props.authorImageUrl}/>
              </Link>
            </div>
            <section className="review-author-text">
              <p className="review-author-name">
                <Link className='reviewer-name-link' to={`/users/${this.props.authorId}`}>
                  {this.props.authorName}
                </Link></p>
              <p className="review-author-location">
                <Link className='reviewer-location-link' to={`/stars/${this.props.authorLocationId}`}>
                  {this.props.authorLocation}
                </Link></p>
            </section>
          </section>
          <section className="review-author-info-right">
            <div className="review-date">
              <p>{ month }</p>
              <p>{ year }</p>
            </div>
          </section>
        </div>
        <ul className="review-ul">
          <li className="review-title">{this.props.title}</li>
          <li className="review-body">{this.props.body}</li>
          <li>{this.editDeleteLinks()}</li>
        </ul>
      </div>
    );
  }
}

export default Review;
