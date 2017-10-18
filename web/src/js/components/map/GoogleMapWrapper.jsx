import PropTypes from 'prop-types';
import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class GoogleMapWrapper extends React.Component {
  shouldComponentUpdate(/* nextProps, nextState */) {
    return true;
  }
  render() {
    const { children, ...rest } = this.props;
    return (
      <GoogleMap {...rest}>
        {children}
      </GoogleMap>
    );
  }
}

GoogleMapWrapper.propTypes = {
  children: PropTypes.node,
};

export default withGoogleMap(GoogleMapWrapper);
