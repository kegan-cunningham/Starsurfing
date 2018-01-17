import React from 'react';
import ReactDOM from 'react-dom';

class StarMap extends React.Component {
  constructor(props) {
    super(props);
    this.addMarker = this.addMarker.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const map = ReactDOM.findDOMNode(this.refs.map);
    const lat = parseFloat(this.props.lat);
    const long = parseFloat(this.props.long);
    const position = new google.maps.LatLng(lat, long);

    const options = {
      center: position,
      zoom: 8,
      mapTypeId: 'satellite',
    };

    this.map = new google.maps.Map(map, options);

    this.listenForMove(map);

    this.addMarker(this.props.star);
  }

  componentDidMount() {

    const map = ReactDOM.findDOMNode(this.refs.map);
    const lat = parseFloat(this.props.lat);
    const long = parseFloat(this.props.long);
    const position = new google.maps.LatLng(lat, long);

    const options = {
      center: position,
      zoom: 8,
      mapTypeId: 'satellite',
    };

    this.map = new google.maps.Map(map, options);

    this.listenForMove(map);

    this.addMarker(this.props.star);

  }

  addMarker(star) {

    const pos = new google.maps.LatLng(this.props.lat, this.props.long);

    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
    });

    marker.addListener('click', () => {
    });

  }

  listenForMove(map) {

    google.maps.event.addListener(map, 'idle', () => {
      const bounds = map.getBounds();

      console.log('center',
        bounds.getCenter().lat(),
        bounds.getCenter().lng());
      console.log('north east',
        bounds.getNorthEast().lat(),
        bounds.getNorthEast().lng());
      console.log('south west',
        bounds.getSouthWest().lat(),
        bounds.getSouthWest().lng());
    });
  }

  render() {

    return (
      <div className="map-div">
        <span>Portal location on Earth</span>
        <div id='map' ref='map'/>
      </div>
    );
  }
}
export default StarMap;
