import _ from 'lodash';
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { InfoWindow, Marker } from 'react-google-maps';


import GoogleMapWrapper from 'components/map/GoogleMapWrapper';

class MapRoute extends React.Component {
  constructor(props) {
    super(props);
    this.geocoder = new window.google.maps.Geocoder();

    this.state = {
      markers: [],
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  
  componentDidMount() {
    this.getMarkers();
  }

  getMarkers() {
    const addresses = ['Merchandise Mart, Chicago, IL 60608'];
    _.forEach(addresses, (address) => {
      this.geocoder.geocode( { 'address': address}, (results, status) => {
        if (status === window.google.maps.GeocoderStatus.OK) {
          const newMarkers = this.state.markers.concat([{
            position: results[0].geometry.location,
            key: address,
            title: address,
            defaultAnimation: 2,
          }]);
          this.setState({
            markers: newMarkers,
          });
        }
      });
    });
  }

  render() {
    return (
      <div className='MapRoute'>
        <GoogleMapWrapper
          defaultCenter={{ lat: 41.8781, lng: -87.6298 }}
          defaultZoom={8}
          onMapLoad={_.noop}
          onMapClick={_.noop}
          containerElement={
            <div style={{ height: '100%' }} />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }>
          {_.map(this.state.markers, (marker) => {
            return (
              <Marker {...marker}>
                <InfoWindow content={marker.title} />
              </Marker>
            );
          })}
        </GoogleMapWrapper>
      </div>
    );
  }
}

MapRoute.propTypes = {};

export default MapRoute;
