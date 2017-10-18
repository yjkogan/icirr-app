import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import { ifClickable } from 'utils/touchUtils';

class Button extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  
  render() {
    const className = cx(this.props.className, this.props.modifierClassName);
    return (
      <button
        className={className}
        disabled={this.props.disabled}
        type={this.props.type}
        onClick={ifClickable(this.props.onClick)}>
        <div className='Button-content'>
          {this.props.children}
        </div>
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string.isRequired,
  modifierClassName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  // FUNCTIONS
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: 'Button',
  modifierClassName: 'Button--primary',
  type: 'button',
};

export default Button;
