import _ from 'lodash';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import shallowCompare from 'react-addons-shallow-compare';

import Body from '../components/Body';
import EmergencyHotline from '../components/EmergencyHotline';
import emergencyKyr from '../../static/emergency-kyr';

class EmergencyRoute extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className='EmergencyRoute'>
        <Body>
          <div className='EmergencyRoute-lawyerNumber'>
            <div className='EmergencyRoute-lawyerNumberLabel'>Call your lawyer:</div>
            <div className='EmergencyRoute-lawyerNumberLink'>
              {this.props.lawyerNumber ?
                <a href={`tel:${this.props.lawyerNumber}`}>{this.props.lawyerNumber}</a>
              : <Link to='settings'>Set number</Link>
              }
            </div>
          </div>
          <div className='EmergencyRoute-hotlines'>
            {/*<div className='EmergencyRoute-hotlinesTitle'>
              Hotlines
            </div>*/}
            {_.map(EmergencyRoute.hotlines, (hotline) => {
              return (
                <EmergencyHotline key={hotline.name} {...hotline} />
              );
            })}
          </div>
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
  lawyerNumber: React.PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    lawyerNumber: state.settings.lawyerNumber,
  };
};

export default connect(mapStateToProps)(EmergencyRoute);
