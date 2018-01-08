import React, { Component } from 'react';
import ReviewFormContainer from './review_form_container';
import { ProtectedRoute } from '../../util/route_util';
import { Route, Link } from 'react-router-dom';

class UserShow extends Component {

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  componentWillReceiveProps() {
    this.props.fetchReviews(this.props.match.params.id);
    debugger
  }

  reviewList() {
    this.props.reviews.map(review => (
      <ReviewShow
        rating={review.title}
        body={review.body}
        key={review.id}
      />
  ));
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
        <figure className='user-photo-username'>
          <img className='user-show-img' src={user.imageUrl} alt={user.name} />
          <h2 className='user-name'>{user.firstname} {user.lastname}</h2>
          <h2 className='user-username'>{user.username}</h2>
        </figure>
        <section className='user-right-side'>
          <ul className='user-info'>
            <li className={'user-hosting ' + hostingColor}>{hosting}</li>
          </ul>
          <ul className='user-about'>
            <li className={'user-about'}><h2>About me:</h2> {user.about.slice(2, -2)}</li>
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
            { this.reviewList() }
            <section className='user-reviews-bottom'>
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
