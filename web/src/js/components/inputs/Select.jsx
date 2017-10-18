import cx from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

class Select extends React.Component {
  render() {
    const wrapperClassName = cx(this.props.className, this.props.modifierClassName);
    return (
      <div className={wrapperClassName}>
        {this.props.label && <label className='Select-label' htmlFor={this.props.name}>{this.props.label}</label>}
        <Field
          className='Select-input'
          name={this.props.name}
          component='select'
          onBlur={this.props.onBlur}
          onChange={this.props.onChange}>
          {_.map(this.props.options, (option) => {
            return (
              <option key={option.value} value={option.value}>{option.label}</option>
            );
          })}
        </Field>
      </div>
    );
  }
}

Select.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  modifierClassName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
};

Select.defaultProps = {
  className: 'Select',
  modifierClassName: 'Select--inline',
};

export default Select;
