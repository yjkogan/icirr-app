import _ from 'lodash';
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { default as MarkerClusterer } from 'react-google-maps/lib/addons/MarkerClusterer';

import GoogleMapWrapper from 'components/map/GoogleMapWrapper';
import MarkerWithInfoWindow from 'components/map/MarkerWithInfoWindow';

import naiPartners from 'static/naiPartners.csv';

const DOWNTOWN_CHICAGO_LAT_LNG = { lat: 41.8781, lng: -87.6298 };

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
          defaultCenter={DOWNTOWN_CHICAGO_LAT_LNG}
          defaultZoom={8}
          onMapLoad={_.noop}
          onMapClick={_.noop}
          containerElement={
            <div style={{ height: '100%' }} />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }>
          <MarkerClusterer
            averageCenter={ true }
            enableRetinaIcons={ true }
            gridSize={ 60 }>
            {_.map(this.state.markers, (marker) => {
              return (
                <MarkerWithInfoWindow {...marker} />
              );
            })}
          </MarkerClusterer>
        </GoogleMapWrapper>
      </div>
    );
  }
}

MapRoute.propTypes = {};

export default MapRoute;
