import PropTypes from 'prop-types';
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class HeaderButtonLeft extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className='HeaderButton--left' onClick={this.props.onClick}>
        &larr;{this.props.children}
      </div>
    );
  }
}

HeaderButtonLeft.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default HeaderButtonLeft;
