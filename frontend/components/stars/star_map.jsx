import React from 'react';
import ReactDOM from 'react-dom';

class StarMap extends React.Component {
  constructor(props) {
    super(props);
    this.addMarker = this.addMarker.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const lat = newProps.lat;
    const long = newProps.long;
    const mapOptions = {
      center: { lat, long },
      zoom: 10,
      mapTypeId: 'satellite',
    };
  }

  componentDidMount() {

    const map = ReactDOM.findDOMNode(this.refs.map);
    const lat = parseFloat(this.props.lat);
    const long = parseFloat(this.props.long);
    const position = new google.maps.LatLng(lat, long);

    const options = {
      center: position,
      zoom: 10,
      mapTypeId: 'satellite',
    };

    // this line actually creates the map and renders it into the DOM
    this.map = new google.maps.Map(map, options);

    // add a movement listener
    this.listenForMove(map);

    this.addMarker(this.props.star);

  }

  addMarker(star) {
    /*
     * we make an instance of the google maps LatLng class, args are
     * (lat, lng)
     */
    const pos = new google.maps.LatLng(this.props.lat, this.props.long);

    /*
     * then we use our new instance of LatLng to make a marker
     * set map to this.map, this is what adds it to the map
     * when we want to remove this marker, we need to set its
     * map property to null using myMarker.setMap(null)
     */
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
    });

    marker.addListener('click', () => {
      alert(`Portal to ${star.name}`);
    });

  }

  listenForMove(map) {
    /*
     * we listen for the map to emit an 'idle' event, it does this when
     * the map stops moving
     */
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
