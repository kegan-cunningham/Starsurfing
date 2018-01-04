import React from 'react';
import { withRouter } from 'react-router-dom';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const starId = this.props.star.id;
    this.props.history.push(`/stars/${starId}`);
  }

  render() {
    const { name, planets } = this.props.star;
    return (
      <div
        className="star-index-item"
        onClick={this.handleClick}
      >
        <div className="index-item-info">
          <span className="index-item-desc">{ name }</span>
        </div>
      </div>
    );
  }
}

export default withRouter(IndexItem);
