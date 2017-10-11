import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import { ifClickable } from 'utils/touchUtils';

class Button extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  
  render() {
    return (
      <button className='FloatyButton' onClick={ifClickable(this.props.onClick)}>
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  children:  React.PropTypes.any,
  onClick: React.PropTypes.func,
};

export default Button;
