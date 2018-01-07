import React, { Component } from 'react';
import StarMap from './star_map';
import UserIndexItem from '../users/user_index_item';

class StarShow extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchStar(this.props.match.params.id);
    this.props.fetchStars();
  }

  handleClick() {
    const starId = this.props.star.id;
    this.props.history.push(`/stars/${starId}`);
  }

  render() {
    const { star } = this.props;
    if (!star) return null;
    const allUsers = star.users.map(user => (
      <li className='user'>
        <img className='user-img' src={user.image}/><UserIndexItem user={user} key={user.id}/>
      </li>)
    );
    return (
      <section className='star-show'>
        <figure className='star-photo-name'>
          <img src={star.image} alt={star.name} />
          <h2 className='star-name'>{star.name.toUpperCase()}</h2>
        </figure>
        <section className='star-bottom-side'>
          <ul className='star-info'>
            <li className={'star-info-title'}>Star Info:</li>
            <li className={'star-planets'}>Planets: {star.planets}</li>
            <li className='map-container'>
              <StarMap star={star} lat={star.lat} long={star.long}/>
            </li>
          </ul>
          <ul className='star-hosts'>
            <li className='star-host'>Local hosts</li>
            <ul className='users'>
              { allUsers }
            </ul>
          </ul>
        </section>
      </section>
    );
  }
}

export default StarShow;
