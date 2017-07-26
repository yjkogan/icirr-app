import _ from 'lodash';
import autoBind from 'react-autobind';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import shallowCompare from 'react-addons-shallow-compare';

import Body from 'components/Body';
import EmergencyHotline from 'components/EmergencyHotline';

class EmergencyRoute extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleSetLawyerNumber() {
    this.props.history.push('/more');
  }

  render() {
    const lawyerNumberText = this.props.lawyerNumber ? 'Your Lawyer' : 'Set your lawyer\'s number';
    return (
      <div className='EmergencyRoute'>
        <Body>
          <div className='EmergencyRoute-lawyerNumber'>
            <EmergencyHotline
              name={lawyerNumberText}
              number={this.props.lawyerNumber}
              onInfoClick={this.handleSetLawyerNumber}
              />
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
  history: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
  }).isRequired,
  lawyerNumber: React.PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    lawyerNumber: state.settings.lawyerNumber,
  };
};

export default withRouter(connect(mapStateToProps)(EmergencyRoute));
