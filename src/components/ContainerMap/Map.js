/* global google*/
import React from 'react';
const { compose, withProps, lifecycle } = require('recompose');
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  Marker,
} = require('react-google-maps');


const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDKOv5tv0rN5Mih51I-c6XHKhxCqa-AEC8&libraries=places',
    loadingElement: <div style={{ height: '100vh' }} />,
    containerElement: <div style={{ height: '100vh' }} />,
    mapElement: <div style={{ height: '100vh' }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();
      DirectionsService.route({
        origin: new google.maps.LatLng(-33.419584, -70.643391),
        destination: new google.maps.LatLng(-33.426069, -70.6452597),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={new google.maps.LatLng(-33.4225577, -70.6467192)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
    <Marker
      position={{ lat: -33.426069,
        lng: -70.6452597}}
      animation={google.maps.Animation.BOUNCE}
    />
  </GoogleMap>
);
// esto debería setiar el nuevo estado pero no sé cómo engancharlo con el marker de arriba
class ContentContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      marker: [
        {
          position: {lat: -33.419584,
            lng: -70.643391},
          animation: google.maps.Animation.BOUNCE,
        },
        {
          position: {lat: -33.426069,
            lng: -70.6452597},
          animation: google.maps.Animation.BOUNCE,
        }
      ],
    };
  }
}

export default MapWithADirectionsRenderer;
