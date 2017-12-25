import PropTypes from 'prop-types';
import React from 'react';
import autoBind from 'react-autobind';
import shallowCompare from 'react-addons-shallow-compare';

import withTranslate from 'localization/withTranslate';

class ServiceListItem extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleClick(event) {
    if (this.props.href) {
      this.props.onClick(this.props.href);
    } else {
      this.props.onClick(event);
    }
  }

  render() {
    return (
      <div className='DiscoverRoute-servicesListItem' name={this.props.value} onClick={this.handleClick}>
        <span className='DiscoverRoute-servicesListItemLabel'>
          {this.props.translate(`discover.items.${this.props.value}`)}
        </span>
        <span className='DiscoverRoute-servicesListItemArrow'>></span>
      </div>
    );
  }
}

ServiceListItem.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default withTranslate(ServiceListItem);
