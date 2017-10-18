/* eslint-disable react/jsx-handler-names */
import autoBind from 'react-autobind';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';
import { default as MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';

import { setSelectedMarker } from 'actions/MapActions';

import GoogleMapWrapper from 'components/map/GoogleMapWrapper';
import MarkerWithInfoWindow from 'components/map/MarkerWithInfoWindow';

import partnersSelector from 'selectors/partnersSelector';

const DOWNTOWN_CHICAGO_LAT_LNG = { lat: 41.8781, lng: -87.6298 };

class MapRoute extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <GoogleMapWrapper
        defaultCenter={DOWNTOWN_CHICAGO_LAT_LNG}
        defaultZoom={8}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
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
          {_.map(this.props.partners, (marker) => {
            return (
              <MarkerWithInfoWindow
                {...marker}
                isSelected={marker.id === this.props.selectedMarker}
                onClick={this.props.setSelectedMarker} />
            );
          })}
        </MarkerClusterer>
      </GoogleMapWrapper>
    );
  }
}

MapRoute.propTypes = {
  partners: PropTypes.arrayOf(PropTypes.object), // TODO: Better prop types
  selectedMarker: PropTypes.string,
  setSelectedMarker: PropTypes.func.isRequired,
};

const actions = {
  setSelectedMarker,
};

const mapStateToProps = (state) => {
  return {
    partners: partnersSelector(state),
    selectedMarker: state.map.selectedMarker,
  };
};

export default connect(mapStateToProps, actions)(MapRoute);
