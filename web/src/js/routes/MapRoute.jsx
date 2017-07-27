/* eslint-disable react/jsx-handler-names */
import autoBind from 'react-autobind';
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';
import { default as MarkerClusterer } from 'react-google-maps/lib/addons/MarkerClusterer';
import { createSelector } from 'reselect';

import { setSelectedMarker, setSelectedFilter } from 'actions/MapActions';

import GoogleMapWrapper from 'components/map/GoogleMapWrapper';
import MapFilters from 'components/map/MapFilters';
import MarkerWithInfoWindow from 'components/map/MarkerWithInfoWindow';

import servicesConstants from 'constants/servicesConstants';

const DOWNTOWN_CHICAGO_LAT_LNG = { lat: 41.8781, lng: -87.6298 };

class MapRoute extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleFilterSelect(filterValue) {
    this.props.setSelectedFilter(filterValue);
  }

  render() {
    return (
      <div className='MapRoute'>
        <MapFilters onSelect={this.handleFilterSelect} selectedFilter={this.props.selectedFilter} />
        <GoogleMapWrapper
          defaultCenter={DOWNTOWN_CHICAGO_LAT_LNG}
          defaultZoom={8}
          options={{
            streetViewControl: false,
            disableDefaultUI: true
          }}
          containerElement={
            <div className='MapRoute-container' />
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
  selectedFilter: React.PropTypes.string,
  selectedMarker: React.PropTypes.string,
  setSelectedFilter: React.PropTypes.func.isRequired,
  setSelectedMarker: React.PropTypes.func.isRequired,
};

const markersSelector = createSelector(
  (state) => state.map.markers,
  (state) => state.map.selectedFilter,
  (markers, selectedFilter) => {
    if (selectedFilter === servicesConstants.all) {
      return markers;
    }
    return _.filter(markers, (marker) => {
      return marker.services[selectedFilter];
    });
  }
);

const actions = {
  setSelectedFilter,
  setSelectedMarker,
};

const mapStateToProps = (state) => {
  return {
    markers: markersSelector(state),
    selectedFilter: state.map.selectedFilter,
    selectedMarker: state.map.selectedMarker,
  };
};

export default connect(mapStateToProps, actions)(MapRoute);
