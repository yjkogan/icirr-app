import autoBind from 'react-autobind';
import React from 'react';
import { InfoWindow, Marker } from 'react-google-maps';

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
            <div>
              <div>{this.props.name}</div>
              <div>{this.props.address}</div>
              <div>{this.props.phone}</div>
              <div>{this.props.website}</div>
            </div>
          </InfoWindow>
        }
      </Marker>
    );
  }
}

MarkerWithInfoWindow.propTypes = {
  address: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  isSelected: React.PropTypes.bool.isRequired,
  name: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  phone: React.PropTypes.string.isRequired,
  website: React.PropTypes.string.isRequired,
};

export default MarkerWithInfoWindow;
