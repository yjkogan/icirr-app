import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class GoogleMapWrapper extends React.Component {
  shouldComponentUpdate(/* nextProps, nextState */) {
    return true;
    // return shallowCompare(this, nextProps, nextState);
  }
  render() {
    return (
      <GoogleMap
        ref={this.props.onMapLoad}
        defaultZoom={this.props.defaultZoom}
        defaultCenter={this.props.defaultCenter}
        onClick={this.props.onMapClick}>
        {this.props.children}
      </GoogleMap>
    );
  }
}

GoogleMapWrapper.propTypes = {
  children: React.PropTypes.node,
  defaultCenter: React.PropTypes.object.isRequired,
  defaultZoom: React.PropTypes.number.isRequired,
  onMapClick: React.PropTypes.func.isRequired,
  onMapLoad: React.PropTypes.func.isRequired,
};

export default withGoogleMap(GoogleMapWrapper);
