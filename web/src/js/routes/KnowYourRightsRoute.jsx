import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class KnowYourRightsRoute extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className='KYRRoute'>
        <div className='RightsList'>
          <div className='RightsItem'>
            <div className='RightsItem-header'>NO WARRANT NO ACCESS</div>
            <ul className='RightsItem-listItem'>
              <li>You do NOT have to answer the door. You have the right to ask the agent (through the closed door) if he has a warrant. If 
            the agent says he has a warrant, ask him to slide it under your door.</li>
              <li>Check if the warrant:
              <ol>
                <li>(1) is signed by a judge or supervisor </li>
                <li>(2) has your name on it, and</li>
                <li>(3) is recent</li>
              </ol>
              </li>
            </ul>
          </div>
          <div className='RightsItem'>
            <div className='RightsItem-header'>REMAIN SILENT</div>
            <ul className='RightsItem-listItem'>
              <li>You have the right to remain silent!</li>
              <li>You can show your 'Knor Your Rights' card</li>
              <li>Remain Calm!</li>
            </ul>
          </div>
          <div className='RightsItem'>
            <div className='RightsItem-header'>DON'T SIGN</div>
            <ul className='RightsItem-listItem'>
              <li>Do NOT sign any documents. Tell the agents you won't sign anything until you talk with a lawyer</li>
            </ul>
          </div>
          <div className='RightsItem'>
            <div className='RightsItem-header'>TAKE DOWN INFORMATION</div>
            <ul className='RightsItem-listItem'>
              <li>If the agents force their way into your home:
                Take down their names and agent numbers and the license plate numbers of their vehicles.
            </li>
            </ul>
          </div>
          <div className='RightsItem'>
            <div className='RightsItem-header'>IF DETAINED</div>
            <ul className='RightsItem-listItem'>
              <li>Don't sign any documents without legal counsel</li>
              <li>You have the right to make a call. Call a family member or lawyer to tell them where you are.</li>
              <li>***You will not have access to your cellphone - memorize important phone numbers!***</li>
            </ul>
          </div>
          <div className='RightsItem'>
            <div className='RightsItem-header'>PREPARE AN EMERGENCY PLAN</div>
            <ul className='RightsItem-listItem'>
              <li>Always carry with you your Know Your Rights Card</li>
              <li>Carefully choose a responsible adult that can take care of your children and help you during an emergency</li>
              <li>Keep all your important documents in a safe and secure place.</li>
            </ul>
          </div>
          <div className='RightsItem'>
            <div className='RightsItem-header'>REPORT IT!</div>
            <ul className='RightsItem-listItem'>
              <li> Call the Family Support Hotline! <span>855-435-7693</span></li>
              <li>In order to organize and take effective action, we need the community to report these incidents. Your information will 
            be kept confidential!</li>
            </ul>
          </div>
        </div>
      </div>      
    );
  }
}

KnowYourRightsRoute.propTypes = {};

export default KnowYourRightsRoute;
