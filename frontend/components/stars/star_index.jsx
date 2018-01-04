import React from 'react';
import StarIndexItem from './star_index_item';

class StarIndex extends React.Component {
  componentDidMount() {
    this.props.fetchStars();
  }

  render() {
    const allStars = this.props.stars.map(star => (<li className="star"><img className="star-img" src={star.image}/><StarIndexItem star={star} key={star.id}/></li>));
    return (
      <section className="stars-index">
        <h2>Top Star Destinations</h2>
        <ul className="stars">
          { allStars }
        </ul>
      </section>
    );
  }
}

export default StarIndex;
