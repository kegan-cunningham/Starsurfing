import React from 'react';
import { withRouter } from 'react-router-dom';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const userId = this.props.user.id;
    this.props.history.push(`/users/${userId}`);
  }

  render() {
    const { username, firstname, lastname } = this.props.user;
    return (
      <div
        className="user-index-item"
        onClick={this.handleClick}
      >
      <img className='user-index-img' src={this.props.user.imageUrl}/>
        <div className="user-index-item-info">
          <span className="user-index-item-desc">{ firstname.concat(' ').concat(lastname) }</span>
          <br/>
          <span className="user-index-item-username">{ username }</span>
        </div>
      </div>
    );
  }
}

export default withRouter(IndexItem);
