import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';
import shallowCompare from 'react-addons-shallow-compare';

class TextInput extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const wrapperClassName = cx(this.props.className, this.props.modifierClassName);
    return (
      <div className={wrapperClassName}>
        {this.props.label && <label className='TextInput-label' htmlFor={this.props.name}>{this.props.label}</label>}
        <Field
          className='TextInput-input'
          name={this.props.name}
          onBlur={this.props.onBlur}
          placeholder={this.props.placeholder}
          component='input'
          type='text' />
      </div>
    );
  }
}

TextInput.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string,
  modifierClassName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
};

TextInput.defaultProps = {
  className: 'TextInput',
  modifierClassName: 'TextInput--default',
};

export default TextInput;
