import autoBind from 'react-autobind';
import React from 'react';
import { InfoWindow, Marker } from 'react-google-maps';

import PartnerInfo from 'components/PartnerInfo';

class MarkerWithInfoWindow extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  shouldComponentUpdate(/* nextProps, nextState */) {
    return true;
  }

  handleMarkerClick() {
    this.props.onClick(this.props.id);
  }

  render() {
    return (
      <Marker {...this.props} onClick={this.handleMarkerClick}>
        {this.props.isSelected &&
          <InfoWindow onCloseClick={this.handleMarkerClick}>
            <PartnerInfo {...this.props} />
          </InfoWindow>
        }
      </Marker>
    );
  }
}

MarkerWithInfoWindow.propTypes = {
  id: React.PropTypes.string.isRequired,
  isSelected: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default MarkerWithInfoWindow;
