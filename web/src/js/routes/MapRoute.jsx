/* eslint-disable react/jsx-handler-names */
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';
import { default as MarkerClusterer } from 'react-google-maps/lib/addons/MarkerClusterer';

import { setSelectedMarker } from 'actions/MapActions';

import GoogleMapWrapper from 'components/map/GoogleMapWrapper';
import MarkerWithInfoWindow from 'components/map/MarkerWithInfoWindow';

const DOWNTOWN_CHICAGO_LAT_LNG = { lat: 41.8781, lng: -87.6298 };

class MapRoute extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
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
            {_.map(this.props.markers, (marker) => {
              return (
                <MarkerWithInfoWindow
                  {...marker}
                  isSelected={marker.id === this.props.selectedMarker}
                  onClick={this.props.setSelectedMarker} />
              );
            })}
          </MarkerClusterer>
        </GoogleMapWrapper>
      </div>
    );
  }
}

MapRoute.propTypes = {
  markers: React.PropTypes.arrayOf(React.PropTypes.object), // TODO: Better prop types
  setSelectedMarker: React.PropTypes.func.isRequired,
  selectedMarker: React.PropTypes.string,
};

const actions = {
  setSelectedMarker,
};

const mapStateToProps = (state) => {
  return {
    markers: state.map.markers,
    selectedMarker: state.map.selectedMarker,
  };
};

export default connect(mapStateToProps, actions)(MapRoute);
