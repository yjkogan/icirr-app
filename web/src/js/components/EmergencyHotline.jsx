import _ from 'lodash';
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class EmergencyHotline extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className='EmergencyHotline'>
        <div className='EmergencyHotline-content'>
          <div className='EmergencyHotline-name'>{this.props.name}</div>
          <a className='EmergencyHotline-number' href={`tel:${this.props.number}`}>{this.props.number}</a>
        </div>
        {_.isFunction(this.props.onInfoClick) &&
          <i className='EmergencyHotline-icon icon info' onClick={this.props.onInfoClick}>i</i>
        }
      </div>
    );
  }
}

EmergencyHotline.propTypes = {
  name: React.PropTypes.string.isRequired,
  number: React.PropTypes.string.isRequired,
  onInfoClick: React.PropTypes.func,
};

export default EmergencyHotline;
