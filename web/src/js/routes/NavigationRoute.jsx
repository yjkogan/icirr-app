import PropTypes from 'prop-types';
import React from 'react';
import autoBind from 'react-autobind';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import { connect } from 'react-redux';

import actions from 'actions';

import ICIRRHeader from 'components/ICIRRHeader';

import DiscoverRoute from 'routes/DiscoverRoute';
import EmergencyRoute from 'routes/EmergencyRoute';
import KnowYourRightsRoute from 'routes/KnowYourRightsRoute';
import MoreRoute from 'routes/MoreRoute';
import OrganizationRoute from 'routes/OrganizationRoute';

class NavigationRoute extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  shouldComponentUpdate() {
    return true;
  }

  handleBack() {
    this.props.history.goBack();
  }

  handleSelectLanguage(language) {
    this.props.actions.settings.setSettings({
      language,
    });
  }

  render() {
    return (
      <div className='NavigationRoute'>
        <ICIRRHeader
          backButtonText='Back'
          onBack={this.props.history.location.pathname === '/' ? undefined : this.handleBack}
          onSelectLanguage={this.handleSelectLanguage}
          selectedLanguage={this.props.selectedLanguage} />
        <div className='NavigationRoute-content'>
          <Switch>
            <Route path='/emergency' component={EmergencyRoute} />
            <Route path='/more' component={MoreRoute} />
            <Route path='/kyr' component={KnowYourRightsRoute} />
            <Route path='/orgs' component={OrganizationRoute} />
            <Route path='/' component={DiscoverRoute} />
            <Redirect from='*' to='/' />
          </Switch>
        </div>
      </div>
    );
  }
}

NavigationRoute.tabs = [
  {
    icon: 'ICON',
    key: 'map',
    to: '/map',
  }, {
    className: 'EmergencyRoute-tab',
    icon: 'ICON',
    key: 'emergency',
    to: '/emergency',
  }, {
    icon: 'ICON',
    key: 'myRights',
    to: '/kyr',
  }, {
    icon: 'ICON',
    key: 'more',
    to: '/more',
  },
];

NavigationRoute.propTypes = {
  actions: PropTypes.object.isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
  selectedLanguage: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    selectedLanguage: state.settings.language,
  };
};

export default withRouter(connect(mapStateToProps, actions)(NavigationRoute));
