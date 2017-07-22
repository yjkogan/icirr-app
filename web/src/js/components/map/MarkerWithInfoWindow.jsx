import autoBind from 'react-autobind';
import React from 'react';
import { InfoWindow, Marker } from 'react-google-maps';

class MarkerWithInfoWindow extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      isInfoWindowOpen: false,
    };
  }
  shouldComponentUpdate(/* nextProps, nextState */) {
    return true;
  }

  handleMarkerClick() {
    this.setState({
      isInfoWindowOpen: !this.state.isInfoWindowOpen,
    });
  }

  render() {
    return (
      <Marker {...this.props} onClick={this.handleMarkerClick}>
        {this.state.isInfoWindowOpen &&
          <InfoWindow onCloseClick={this.handleMarkerClick}>
            <div>{this.props.title}</div>
          </InfoWindow>
        }
      </Marker>
    );
  }
}

MarkerWithInfoWindow.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default MarkerWithInfoWindow;
