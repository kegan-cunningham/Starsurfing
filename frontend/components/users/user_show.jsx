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
        this.props.fetchRequests(this.props.currentUser.id);
        this.props.clearReviewErrors();
        this.props.clearRequestErrors();
      }
    );
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchUser(nextProps.match.params.id);
      this.props.fetchReviews(nextProps.match.params.id);
      this.props.fetchRequests(nextProps.match.params.id);
      this.props.clearReviewErrors();
      this.props.clearRequestErrors();
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
            authorLocationId={review.author_location_id}
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
            surferLocationId={request.surfer_location_id}
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
    if (!this.props.currentUser ||
      !this.props.match ||
      parseInt(this.props.match.params.id) !== this.props.currentUser.id) {
      return;
    }

    return (
      <ul className='user-requests'>
        <section className='user-requests-top'>
          <li className={'user-request'}>Requests made to you: </li>
        </section>
        <section className='user-requests-bottom'>
          <section className='user-requests-each'>
            { myRequests.length > 0 ? myRequests : <p className="no-requests"> No requests... yet!</p> }
          </section>
        </section>
      </ul>
    );
  }

  madeRequestList() {
    const mySurfRequests =  this.props.requests.map(request => {
      if (request.surfer_id === parseInt(this.props.match.params.id)) {
        const { user } = this.props;
        if (!user) return null;
        return (
          <RequestShowContainer
            madeRequests={true}
            request={request}
            status={request.status}
            hostId={request.host_id}
            surferId={request.surfer_id}
            surferImageUrl={request.surfer_image_url}
            surferLocation={request.surfer_location}
            surferLocationId={request.surfer_location_id}
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
    if (!this.props.currentUser ||
      !this.props.match ||
      parseInt(this.props.match.params.id) !== this.props.currentUser.id) {
      return;
    }

    return (
      <ul className='user-requests'>
        <section className='user-requests-top'>
          <li className={'user-request'}>Requests you made: </li>
        </section>
        <section className='user-requests-bottom'>
          <section className='user-requests-each'>
            { mySurfRequests.length > 0 ? mySurfRequests : <p className="no-requests"> No requests... yet!</p> }
          </section>
        </section>
      </ul>
    );
  }

  userPhotoName(user) {
    return (
      <figure className='user-photo-username'>
        <Link className='user-photo-link' to={`/users/${user.id}`}>
          <div className='user-show-img'>
              <img src={user.imageUrl} alt={user.name} />
          </div>
        </Link>
        <Link className='user-star-link' to={`/users/${user.id}`}>
          <h2 className='user-name'>{user.firstname} {user.lastname}</h2>
        </Link>
        <Link className='user-star-link' to={`/users/${user.id}`}>
          <h2 className='user-username'>{user.username}</h2>
        </Link>
        <h2 className='user-location'>Home star:
          <Link className='user-star-link' to={`/stars/${user.star_id}`}>
            {user.star}
          </Link>
        </h2>
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

    const successMessage = this.props.requestSuccessMessageOn ?
      <p className="request-success">✔ Request Successful</p> :
      null;

    let leaveAReview;
    let hostingMe = false;
    if (this.props.user.host_requests != undefined) {
      this.props.user.host_requests.forEach((host_request) => {
        if (this.props.currentUser && host_request.surfer_id == this.props.currentUser.id) {
          hostingMe = true;
        }
      });
    }
    if (this.props.currentUser &&
        parseInt(this.props.match.params.id) !== this.props.currentUser.id &&
        (this.props.match.params.id in this.props.requests || hostingMe)
      ) {
      leaveAReview = (
        <Link
          className='user-review-link'
          to={`/users/${user.id}/review`}
        >
        Leave a Review
      </Link>
      );
    }

    let makeARequest;
    if (this.props.currentUser &&
        this.props.user.hosting === true &&
        parseInt(this.props.match.params.id) !== this.props.currentUser.id
      ) {
      makeARequest = (
        <Link
          className='user-request-link'
          to={`/users/${user.id}/request`}
        >
        <i className="fas fa-star"></i> Send Request
      </Link>
      );
    }

    return (
      <section className='user-show'>
        <section className='user-show-container'>
          { this.userPhotoName(user) }
          <section className='user-right-side'>
            <ul className='user-info'>
              <li className={'user-hosting ' + hostingColor}>{hosting}</li>
                <ProtectedRoute
                  path='/users/:userId/request'
                  component={RequestFormContainer}
                  />
                { successMessage }
                { makeARequest }
            </ul>
            <ul className='user-about-container'>
              <li className={'user-about'}><h2>About me:</h2> {user.about}</li>
            </ul>

            { this.requestList() }
            { this.madeRequestList() }

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
      </section>
    );
  }
}

export default UserShow;
