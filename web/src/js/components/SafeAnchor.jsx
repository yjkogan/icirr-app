import PropTypes from 'prop-types';
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class SafeAnchor extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <a {...this.props} target='_blank' rel='noopener noreferrer'>
        {this.props.children}
      </a>
    );
  }
}

SafeAnchor.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SafeAnchor;
