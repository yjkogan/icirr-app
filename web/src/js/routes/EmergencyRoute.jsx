import _ from 'lodash';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import React from 'react';
import { connect } from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';

import actions from 'actions';

import Body from 'components/Body';
import EmergencyHotline from 'components/EmergencyHotline';
import SettingsForm from 'components/forms/SettingsForm';

import withTranslate from 'localization/withTranslate';

class EmergencyRoute extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      editingLawyersNumber: !props.lawyerNumber,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleInputBlur(event) {
    this.props.actions.settings.setSettings({
      [event.target.name]: event.target.value,
    });
    this.setState({
      editingLawyersNumber: false,
    });
  }

  handleSetLawyerNumber() {
    this.setState({
      editingLawyersNumber: true,
    });
  }

  render() {
    return (
      <div className='EmergencyRoute'>
        <Body>
          <div className='EmergencyRoute-lawyerNumber'>
            {!this.state.editingLawyersNumber &&
              <EmergencyHotline
                name='Your Lawyer'
                number={this.props.lawyerNumber}
                onInfoClick={this.handleSetLawyerNumber}
                />
            }
            {this.state.editingLawyersNumber && 
              <SettingsForm
                initialValues={{
                  lawyerNumber: this.props.lawyerNumber,
                }}
                onBlur={this.handleInputBlur}
                translate={this.props.translate} />
            }
          </div>
          <div className='EmergencyRoute-hotlines'>
            {/*<div className='EmergencyRoute-hotlinesTitle'>
              Hotlines
            </div>*/}
            {_.map(EmergencyRoute.hotlines, (hotline) => {
              return (
                <EmergencyHotline key={hotline.name} name={hotline.name} number={hotline.number} />
              );
            })}
          </div>
          {/*<div className='EmergencyRoute-kyr'>
            <ReactMarkdown source={emergencyKyr} />
          </div>*/}
        </Body>
      </div>
    );
  }
}

EmergencyRoute.hotlines = [{
  additionalInfo: 'English/Spanish/Korean/Polish',
  name: 'ICIRR Family Support Hotline',
  number: '1-855-HELP-MY-FAMILY',
  subNumber: '1-855-435-7693',
}, {
  additionalInfo: 'English/Spanish',
  name: 'First Defense Legal Aid',
  number: '1-800-LAW-REP-4',
  subNumber: '1-800-519-7374',
}];

EmergencyRoute.propTypes = {
  actions: PropTypes.object.isRequired,
  lawyerNumber: PropTypes.string.isRequired,
  translate: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    lawyerNumber: state.settings.lawyerNumber,
  };
};

export default withTranslate(connect(mapStateToProps, actions)(EmergencyRoute));
