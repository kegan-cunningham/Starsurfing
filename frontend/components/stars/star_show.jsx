import React, { Component } from 'react';
import StarMap from './star_map';

class StarShow extends Component {
  componentDidMount() {
    this.props.fetchStar(this.props.match.params.id);
    this.props.fetchStars();
  }

  render() {
    const { star } = this.props;
    if (!star) return null;
    const users = star.users.map(
      (user) => (<li className="user-username"><img src={user.image} alt={user.name} />{ user.username }</li>)
    );
    return (
      <section className="star-show">
        <figure className="star-photo-name">
          <img src={star.image} alt={star.name} />
          <h2 className="star-name">{star.name.toUpperCase()}</h2>
        </figure>
        <section className="star-bottom-side">
          <ul className="star-info">
            <li className={'star-info-title'}>Star Info:</li>
            <li className={'star-planets'}>Planets: {star.planets}</li>
            <li className="map-container"><StarMap star={star} lat={star.lat} long={star.long}/></li>
          </ul>
          <ul className="star-hosts">
            <li className={'star-host'}>Local hosts</li>
            <ul>
              { users }
            </ul>
          </ul>
        </section>
      </section>
    );
  }
}

export default StarShow;
