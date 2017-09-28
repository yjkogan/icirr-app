import React from 'react';
import autoBind from 'react-autobind';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import { connect } from 'react-redux';

import actions from 'actions';

import ICIRRHeader from 'components/ICIRRHeader';

import DiscoverRoute from 'routes/DiscoverRoute';
import EmergencyRoute from 'routes/EmergencyRoute';
import KnowYourRightsRoute from 'routes/KnowYourRightsRoute';
import MapRoute from 'routes/MapRoute';
import MoreRoute from 'routes/MoreRoute';

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
            <Route path='/map' component={MapRoute} />
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
  actions: React.PropTypes.object.isRequired,
  history: React.PropTypes.shape({
    goBack: React.PropTypes.func.isRequired,
    length: React.PropTypes.number.isRequired,
    location: React.PropTypes.shape({
      pathname: React.PropTypes.string,
    }),
  }).isRequired,
  selectedLanguage: React.PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    selectedLanguage: state.settings.language,
  };
};

export default withRouter(connect(mapStateToProps, actions)(NavigationRoute));
