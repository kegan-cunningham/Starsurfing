import React from 'react';
import { Route, Link } from 'react-router-dom';

class Request extends React.Component {

  constructor(props) {
    super(props);

    this.handleApprove = this.handleApprove.bind(this);
    this.handleDeny = this.handleDeny.bind(this);
    this.redirectToUserShow = this.redirectToUserShow.bind(this);
  }

  handleApprove(e) {
    e.preventDefault();

    let request = Object.assign({}, {
      host_id: this.props.request.host_id,
      end_date: this.props.request.end_date,
      start_date: this.props.request.start_date,
    }, { status: 'APPROVED' });

    this.props.editRequest(request, this.props.id );
    this.redirectToUserShow();
  }

  handleDeny(e) {
    e.preventDefault();

    this.props.deleteRequest(this.props.id );
    this.redirectToUserShow();
  }

  redirectToUserShow() {
    const url = `/users/${this.props.match.params.id}`;
    this.props.history.push(url);
  }

  approveDeny() {

    if (this.props.request.status !== "PENDING") {
      return;
    }
    return (
      <section className='user-request-links'>
        <button
          className='user-request-link-approve'
          onClick={this.handleApprove}
        >
          Approve
        </button>

        <button
            className='user-request-link-deny'
            onClick={this.handleDeny}
          >
            Deny
        </button>
      </section>
    );
  }

  render() {
    const date = new Date(this.props.startDate)
                  .toString().slice(0, 15)
                  .concat(' - ')
                  .concat(new Date(this.props.endDate)
                  .toString().slice(0, 15));

    return (
      <div className="request">
        <div className="request-surfer-info">
          <section className="request-surfer-info-left">
            <div className="request-surfer-photo">
              <img src={this.props.surferImageUrl}/>
            </div>
            <section className="request-surfer-text">
              <p className="request-surfer-name">{this.props.surferName}</p>
              <p className="request-surfer-location">{this.props.surferLocation}</p>
            </section>
          </section>
          <section className="request-surfer-info-right">
            <div className="request-date">
              <p>{ date }</p>
            </div>
            <div className="request-status">Status: {this.props.status}</div>
            { this.approveDeny() }
          </section>
        </div>
      </div>
    );
  }
}

export default Request;
