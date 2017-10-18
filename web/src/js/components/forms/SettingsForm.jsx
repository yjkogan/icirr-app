import PropTypes from 'prop-types';
import React from 'react';
import { reduxForm } from 'redux-form';
import shallowCompare from 'react-addons-shallow-compare';

import LabeledTableRow from 'components/LabeledTableRow';
import TextInput from 'components/inputs/TextInput';

class SettingsForm extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <form className='Form SettingsForm'>
        <LabeledTableRow>
          <TextInput
            label={this.props.translate('settings.lawyerNumberLabel')}
            modifierClassName='TextInput--inline'
            name='lawyerNumber'
            onBlur={this.props.onBlur} />
        </LabeledTableRow>
      </form>
    );
  }
}

SettingsForm.propTypes = {
  onBlur: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
};

SettingsForm = reduxForm({
  form: 'SettingsForm',
})(SettingsForm);

export default SettingsForm;
