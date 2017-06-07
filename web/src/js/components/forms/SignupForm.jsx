import React from 'react';
import { Field, reduxForm } from 'redux-form';
import shallowCompare from 'react-addons-shallow-compare';

import Button from 'components/buttons/Button';

class SignupForm extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <form className='Form SignupForm' onSubmit={this.props.handleSubmit}>
        <div className='SignupForm-title'>
          {this.props.translate('signup.title')}
        </div>
        <Field
          className='SignupForm-textInput'
          component='input'
          name='name'
          placeholder={this.props.translate('signup.namePlaceholder')}
          type='text' />
        <Field
          className='SignupForm-textInput'
          component='input'
          name='email'
          placeholder={this.props.translate('signup.emailPlaceholder')}
          type='email' />
        <div className='SignupForm-submitButton'>
          <Button modifierClassName='Button--primary' type='submit'>{this.props.translate('signup.buttonText')}</Button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  translate: React.PropTypes.func.isRequired,
};

SignupForm = reduxForm({
  form: 'SignupForm',
  initialValues: {
    email:'',
    name: '',
  }
})(SignupForm);

export default SignupForm;
