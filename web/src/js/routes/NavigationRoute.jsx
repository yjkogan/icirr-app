import _ from 'lodash';
import React from 'react';
import autoBind from 'react-autobind';
import { Redirect, Route, Switch } from 'react-router';
import { connect } from 'react-redux';

import actions from 'actions';

import ICIRRHeader from 'components/ICIRRHeader';
// import TabBar from 'components/TabBar';

import DiscoverRoute from 'routes/DiscoverRoute';
import EmergencyRoute from 'routes/EmergencyRoute';
import KnowYourRightsRoute from 'routes/KnowYourRightsRoute';
import MapRoute from 'routes/MapRoute';
import MoreRoute from 'routes/MoreRoute';

import withTranslate from 'localization/withTranslate';

class NavigationRoute extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  shouldComponentUpdate() {
    return true;
  }

  handleSelectLanguage(language) {
    this.props.actions.settings.setSettings({
      language,
    });
  }

  render() {
    // TODO (YK 2017-04-18): Memoize
    // const translatedTabs = _.map(NavigationRoute.tabs, (tab) => {
    //   return {
    //     ...tab,
    //     name: this.props.translate(_.join(['navigation', 'tabs', tab.key], '.')),
    //   };
    // });
    return (
      <div className='NavigationRoute'>
        <ICIRRHeader
          onSelectLanguage={this.handleSelectLanguage}
          selectedLanguage={this.props.selectedLanguage} />
        <div className='NavigationRoute-content'>
          <Switch>
            <Route path='/emergency' component={EmergencyRoute} />
            <Route path='/more' component={MoreRoute} />
            <Route path='/kyr' component={KnowYourRightsRoute} />
            <Route path='/map/:filter' component={MapRoute} />
            <Route path='/' component={DiscoverRoute} />
            <Redirect from='*' to='/' />
          </Switch>
        </div>
        {/*<TabBar tabs={translatedTabs} tabClassName='NavigationRoute-tab' />*/}
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
  selectedLanguage: React.PropTypes.string.isRequired,
  translate: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    selectedLanguage: state.settings.language,
  };
};

export default withTranslate(connect(mapStateToProps, actions)(NavigationRoute));
