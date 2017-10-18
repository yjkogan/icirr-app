import PropTypes from 'prop-types';
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class ServiceListItem extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className='DiscoverRoute-servicesListItem' name={this.props.value} onClick={this.props.onClick}>
        <span className='DiscoverRoute-servicesListItemLabel'>{this.props.label}</span>
        <span className='DiscoverRoute-servicesListItemArrow'>></span>
      </div>
    );
  }
}

ServiceListItem.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default ServiceListItem;
