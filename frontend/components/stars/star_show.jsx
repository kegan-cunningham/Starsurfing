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
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchStar(nextProps.match.params.id);
    }
    if (nextProps.star.userIds && nextProps.star.userIds.length > 0) {
      if (this.props.star.userIds !== nextProps.star.userIds) {
        this.props.fetchUsers(nextProps.star.userIds);
      }
    }
  }

  handleClick() {
    const starId = this.props.star.id;
    this.props.history.push(`/stars/${starId}`);
  }

  render() {
    const { star } = this.props;
    if (!star) return null;
    const allUsers = this.props.users.map(user => {
      return (
        <li className='user'>
          <UserIndexItem className="user-idx-item" user={user} key={user.id}/>
        </li>
      );
    });
    let starName;
    if (star.name) {
      starName = star.name.toUpperCase();
    }
    return (
      <section className='star-show'>
        <figure className='star-photo-name'>
          <h2 style={{backgroundImage: `url(${star.imageUrl})`}} className='star-name'>{starName}</h2>
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
