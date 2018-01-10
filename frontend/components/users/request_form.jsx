import React from 'react';
import { withRouter } from 'react-router-dom';

class RequestForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      start_date: '',
      end_date: '',
      host_id: -1,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectToUserShow = this.redirectToUserShow.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const hostId = parseInt(this.props.match.params.userId);
    const request = Object.assign({}, this.state, { host_id: hostId });
    this.props.createRequest(request);
    this.redirectToUserShow();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  redirectToUserShow() {
    const url = `/users/${this.props.match.params.userId}`;
    this.props.history.push(url);
  }

  render() {
    return (
      <div className="request-form">
        <form onSubmit={this.handleSubmit}>
          <label>Start Date</label>
          <br/>
          <input
            className="request-form-start_date"
            type="date"
            value={this.state.start_date}
            onChange={this.update("start_date")}
          />
          <br/>

          <label>End Date</label>
          <br/>
            <input
              className="request-form-end_date"
              type="date"
              value={this.state.end_date}
              onChange={this.update("end_date")}
            />
          <br/>
          <section className="request-links">
            <input className="request-submit" type="submit" />
            <div className="request-cancel" onClick={this.redirectToUserShow}>Cancel</div>
          </section>
        </form>
      </div>
    );
 }
}

export default withRouter(RequestForm);
