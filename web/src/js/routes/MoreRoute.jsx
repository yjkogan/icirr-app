import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import React from 'react';
import { withRouter } from 'react-router';
import shallowCompare from 'react-addons-shallow-compare';

import Body from 'components/Body';
import LabeledTable from 'components/LabeledTable';
import LabeledTableRow from 'components/LabeledTableRow';
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

  handleSignup(formData) {
    console.info(`Submitted form with name ${formData.name} and email ${formData.email}`);
  }

  render() {
    return (
      <Body className='MoreRoute'>
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  translate: PropTypes.func.isRequired,
};

export default withTranslate(withRouter(MoreRoute));
