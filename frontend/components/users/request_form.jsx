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
    this.submitSuccessCallback = this.submitSuccessCallback.bind(this);
  }

  submitSuccessCallback() {
    this.props.clearRequestErrors();
    this.props.toggleRequestSuccessMessage();
    setTimeout(
      this.props.toggleRequestSuccessMessage, 2300
    );
    this.redirectToUserShow();
  }

  handleSubmit(e) {
    e.preventDefault();
    const hostId = parseInt(this.props.match.params.userId);
    const request = Object.assign({}, this.state, { host_id: hostId });
    this.props.createRequest(request).then(
      this.submitSuccessCallback
    );
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
      <ul className="request-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const today = new Date().toISOString().split('T')[0];
    if(document.getElementsByName("start_date")[0]){
      document.getElementsByName("start_date")[0].setAttribute('min', today);
    }
    return (
      <div className="request-form">
        <form onSubmit={this.handleSubmit}>
          <label>Arrival Date</label>
          <br/>
          <input
            name="start_date"
            className="request-form-start_date"
            type="date"
            value={this.state.start_date}
            onChange={this.update("start_date")}
          />
          <br/>

          <label>Departure Date</label>
          <br/>
            <input
              id="end_date"
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
          { this.renderErrors() }
        </form>
      </div>
    );
 }
}

export default withRouter(RequestForm);
