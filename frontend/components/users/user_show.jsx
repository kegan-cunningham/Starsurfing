import React, { Component } from 'react';
import ReviewFormContainer from './review_form_container';
import ReviewShowContainer from './review_show_container';
import { ProtectedRoute } from '../../util/route_util';
import { Route, Link } from 'react-router-dom';

class UserShow extends Component {

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id).then(
      () => {
        this.props.fetchReviews(this.props.match.params.id);
      }
    );
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.user) {
      this.props.fetchUser(this.props.match.params.id);
    }
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchReviews(nextProps.match.params.id);
    }
  }

  reviewList() {
    const myReviews =  this.props.reviews.map(review => {
      if (review.user_id === parseInt(this.props.match.params.id)) {
        const { user } = this.props;
        if (!user) return null;
        return (
          <ReviewShowContainer
            userId={user.id}
            authorId={review.author_id}
            authorImageUrl={review.author_image_url}
            authorLocation={review.author_location}
            authorName={review.author_name}
            updatedAt={review.updated_at}
            title={review.title}
            body={review.body}
            id={review.id}
            key={review.id}
          />
        );
      }
    });
    return myReviews;
  }

  userPhotoName(user) {
    return (
      <figure className='user-photo-username'>
        <img className='user-show-img' src={user.imageUrl} alt={user.name} />
        <h2 className='user-name'>{user.firstname} {user.lastname}</h2>
        <h2 className='user-username'>{user.username}</h2>
      </figure>
    );
  }

  render() {
    const { user } = this.props;
    if (!user) return null;
    let hosting;
    let hostingColor;
    if (user.hosting === true) {
      hosting = 'Accepting guests';
      hostingColor = 'green';
    } else {
      hosting = 'Not accepting guests';
      hostingColor = 'red';
    }
    return (
      <section className='user-show'>
        { this.userPhotoName(user) }
        <section className='user-right-side'>
          <ul className='user-info'>
            <li className={'user-hosting ' + hostingColor}>{hosting}</li>
          </ul>
          <ul className='user-about'>
            <li className={'user-about'}><h2>About me:</h2> {user.about}</li>
          </ul>
          <ul className='user-reviews'>
            <section className='user-reviews-top'>
              <li className={'user-review'}>Reviews: </li>
                <Link
                  className='user-review-link'
                  component={ReviewFormContainer}
                  to={`/users/${user.id}/review`}
                >
                Leave a Review
              </Link>
            </section>
            <section className='user-reviews-bottom'>
              <section className='user-reviews-each'>
                { this.reviewList() }
              </section>
              <ProtectedRoute
                path='/users/:userId/review'
                component={ReviewFormContainer}
                />
            </section>
          </ul>
        </section>
      </section>
    );
  }
}

export default UserShow;
