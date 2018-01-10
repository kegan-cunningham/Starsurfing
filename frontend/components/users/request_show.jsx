import React from 'react';
import { Route, Link } from 'react-router-dom';

class Request extends React.Component {

  constructor(props) {
    super(props);

    this.handleApprove = this.handleApprove.bind(this);
  }

  handleApprove(e) {
    e.preventDefault();
    this.props.createRequest(request);
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
            <div className="request-status">{this.props.status}</div>
            <button
              className='user-request-link-approve'
              onClick={this.handleApprove}
            >
              Approve
          </button>
          </section>
        </div>
      </div>
    );
  }
}

export default Request;
