import React, { Component } from 'react';

class StarShow extends Component {
  componentDidMount() {
    this.props.fetchStar(this.props.match.params.id);
    this.props.fetchStars();
  }

  render() {
    const { star } = this.props;
    if (!star) return null;

    return (
      <section className="star-show">
        <figure className="star-photo-name">
          <img src={star.image} alt={star.name} />
          <h2 className="star-name">{star.name.toUpperCase()}</h2>
        </figure>
        <section className="star-bottom-side">
          <ul className="star-info">
            <li className={'star-planets'}>Planets: {star.planets}</li>
          </ul>
          <ul className="star-hosts">
            <li className={'star-host'}>Local hosts</li>
          </ul>
        </section>
      </section>
    );
  }
}

export default StarShow;
