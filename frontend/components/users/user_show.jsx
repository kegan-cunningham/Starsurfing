import React, { Component } from 'react';
import ReviewFormContainer from './review_form_container';
import RequestFormContainer from './request_form_container';
import ReviewShowContainer from './review_show_container';
import RequestShowContainer from './request_show_container';
import { ProtectedRoute } from '../../util/route_util';
import { Route, Link } from 'react-router-dom';

class UserShow extends Component {

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id).then(
      () => {
        this.props.fetchReviews(this.props.match.params.id);
        this.props.fetchRequests(this.props.match.params.id);
      }
    );
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.user) {
      this.props.fetchUser(this.props.match.params.id);
    }
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchReviews(nextProps.match.params.id);
      this.props.fetchRequests(nextProps.match.params.id);
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

  requestList() {
    const myRequests =  this.props.requests.map(request => {
      if (request.host_id === parseInt(this.props.match.params.id)) {
        const { user } = this.props;
        if (!user) return null;
        return (
          <RequestShowContainer
            request={request}
            status={request.status}
            hostId={user.id}
            surferId={request.surfer_id}
            surferImageUrl={request.surfer_image_url}
            surferLocation={request.surfer_location}
            surferName={request.surfer_name}
            updatedAt={request.updated_at}
            startDate={request.start_date}
            endDate={request.end_date}
            id={request.id}
            key={request.id}
          />
        );
      }
    });
    if (parseInt(this.props.match.params.id) !== this.props.currentUser.id) {
      return;
    }

    return (
      <ul className='user-requests'>
        <section className='user-requests-top'>
          <li className={'user-request'}>My Requests: </li>
        </section>
        <section className='user-requests-bottom'>
          <section className='user-requests-each'>
            { myRequests }
          </section>
        </section>
      </ul>
    );
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

    let leaveAReview;
    if (this.props.currentUser) {
      leaveAReview = (
        <Link
          className='user-review-link'
          component={ReviewFormContainer}
          to={`/users/${user.id}/review`}
        >
        Leave a Review
      </Link>
      );
    }

    let makeARequest;
    if (this.props.currentUser && this.props.user.hosting === true) {
      makeARequest = (
        <Link
          className='user-request-link'
          component={RequestFormContainer}
          to={`/users/${user.id}/request`}
        >
        Make a Request
      </Link>
      );
    }


    return (
      <section className='user-show'>
        { this.userPhotoName(user) }
        <section className='user-right-side'>
          <ul className='user-info'>
            <li className={'user-hosting ' + hostingColor}>{hosting}</li>
              <ProtectedRoute
                path='/users/:userId/request'
                component={RequestFormContainer}
                />
              { makeARequest }
          </ul>
          <ul className='user-about-container'>
            <li className={'user-about'}><h2>About me:</h2> {user.about}</li>
          </ul>

          { this.requestList() }

          <ul className='user-reviews'>
            <section className='user-reviews-top'>
              <li className={'user-review'}>Reviews: </li>
                { leaveAReview }
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
