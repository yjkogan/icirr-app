import autoBind from 'react-autobind';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import shallowCompare from 'react-addons-shallow-compare';

import actions from 'actions';

import Body from 'components/Body';
import LabeledTable from 'components/LabeledTable';
import LabeledTableRow from 'components/LabeledTableRow';
import SettingsForm from 'components/forms/SettingsForm';
import SignupForm from 'components/forms/SignupForm';

import withTranslate from 'localization/withTranslate';

class MoreRoute extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleAboutClick() {
    this.props.history.push('/about-icirr');
  }

  handleInputBlur(event) {
    this.props.actions.settings.setSettings({
      [event.target.name]: event.target.value,
    });
  }
  handleInputChange(event) {
    this.props.actions.settings.setSettings({
      [event.target.name]: event.target.value,
    });
  }

  handleSignup(formData) {
    console.info(`Submitted form with name ${formData.name} and email ${formData.email}`);
  }

  render() {
    return (
      <Body className='MoreRoute'>
        <SettingsForm
          initialValues={{
            language: this.props.language,
            lawyerNumber: this.props.lawyerNumber,
          }}
          onBlur={this.handleInputBlur}
          onChange={this.handleInputChange}
          translate={this.props.translate} />
        <LabeledTable label={this.props.translate('more.getInvolved')}>
          <LabeledTableRow>
            <div className='MoreRoute-aboutLink' onClick={this.handleAboutClick}>
              <span className='MoreRoute-aboutLinkText'>{this.props.translate('more.aboutICIRRLink')}</span>
              <span className='MoreRoute-aboutLinkIcon'>></span>
            </div>
          </LabeledTableRow>
          <LabeledTableRow>
            <SignupForm onSubmit={this.handleSignup} translate={this.props.translate} />
          </LabeledTableRow>
        </LabeledTable>
      </Body>
    );
  }
}

MoreRoute.propTypes = {
  actions: React.PropTypes.object.isRequired,
  history: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
  }).isRequired,
  language: React.PropTypes.string,
  lawyerNumber: React.PropTypes.string,
  translate: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    language: state.settings.language,
    lawyerNumber: state.settings.lawyerNumber,
  };
};

export default withTranslate(withRouter(connect(mapStateToProps, actions)(MoreRoute)));
