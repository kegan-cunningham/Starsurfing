import React, { Component } from 'react';

class UserShow extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  render() {
    const { user } = this.props;
    if (!user) return null;
    let hosting;
    let hostingColor;
    if (user.hosting === true) {
      hosting = 'Accepting guests';
      hostingColor = 'green';
    } else {
      hosting = 'Not accepting guests';
      hostingColor = 'red';
    }
    return (
      <section className="user-show">
        <figure className="user-photo-username">
          <img className="user-img" src={user.imageUrl} alt={user.name} />
          <h2 className="user-name">{user.firstname} {user.lastname}</h2>
          <h2 className="user-username">{user.username}</h2>
        </figure>
        <section className="user-right-side">
          <ul className="user-info">
            <li className={'user-hosting ' + hostingColor}>{hosting}</li>
          </ul>
          <ul className="user-about">
            <li className={'user-about'}><h2>About me:</h2> {user.about.slice(2, -2)}</li>
          </ul>
          <ul className="user-reviews">
            <li className={'user-review'}>Reviews: </li>
          </ul>
        </section>
      </section>
    );
  }
}

export default UserShow;
