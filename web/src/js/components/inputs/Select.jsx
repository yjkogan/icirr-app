import _ from 'lodash';
import cx from 'classnames';
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
  className: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  modifierClassName: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  onBlur: React.PropTypes.func,
  onChange: React.PropTypes.func,
  options: React.PropTypes.arrayOf(React.PropTypes.shape({
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
  })),
};

Select.defaultProps = {
  className: 'Select',
  modifierClassName: 'Select--inline',
};

export default Select;
