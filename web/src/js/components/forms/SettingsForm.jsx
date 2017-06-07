import React from 'react';
import { reduxForm } from 'redux-form';
import shallowCompare from 'react-addons-shallow-compare';

import LabeledTable from 'components/LabeledTable';
import LabeledTableRow from 'components/LabeledTableRow';
import Select from 'components/inputs/Select';
import TextInput from 'components/inputs/TextInput';

class SettingsForm extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <form className='Form SettingsForm'>
        <LabeledTable label={this.props.translate('settings.header')}>
          <LabeledTableRow>
            <TextInput
              label={this.props.translate('settings.lawyerNumberLabel')}
              modifierClassName='TextInput--inline'
              name='lawyerNumber'
              onBlur={this.props.onBlur} />
          </LabeledTableRow>
          <LabeledTableRow>
            <Select
              label={this.props.translate('settings.languageLabel')}
              name='language'
              onChange={this.props.onChange}
              options={SettingsForm.languageOptions} />
          </LabeledTableRow>
        </LabeledTable>
      </form>
    );
  }
}

SettingsForm.languageOptions = [{
  label: 'English',
  value: 'en',
}, {
  label: 'Español',
  value: 'es',
}];

SettingsForm.propTypes = {
  onBlur: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  translate: React.PropTypes.func.isRequired,
};

SettingsForm = reduxForm({
  form: 'SettingsForm',
})(SettingsForm);

export default SettingsForm;
