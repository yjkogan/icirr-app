import _ from 'lodash';
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import GoogleMapWrapper from 'components/map/GoogleMapWrapper';
import MarkerWithInfoWindow from 'components/map/MarkerWithInfoWindow';

import naiPartners from 'static/naiPartners.csv';

class MapRoute extends React.Component {
  constructor(props) {
    super(props);
    this.geocoder = new window.google.maps.Geocoder();

    this.state = {
      markers: [],
    };
  }
  
  componentDidMount() {
    this.getMarkers();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  getMarkers() {
    // TODO: https://developers.google.com/maps/documentation/javascript/marker-clustering
    const markers = _.map(naiPartners, (partner) => {
      return {
        position: {
          lat: partner.lat,
          lng: partner.lng,
        },
        key: partner.address,
        title: partner.address,
        defaultAnimation: 2,
      };
    });
    console.debug(markers);
    this.setState({
      markers,
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
              <MarkerWithInfoWindow {...marker} />
            );
          })}
        </GoogleMapWrapper>
      </div>
    );
  }
}

MapRoute.propTypes = {};

export default MapRoute;
