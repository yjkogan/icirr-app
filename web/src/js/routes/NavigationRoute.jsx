import _ from 'lodash';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import ICIRRHeader from 'components/ICIRRHeader';
import TabBar from 'components/TabBar';

import EmergencyRoute from 'routes/EmergencyRoute';
import KnowYourRightsRoute from 'routes/KnowYourRightsRoute';
import MapRoute from 'routes/MapRoute';
import MoreRoute from 'routes/MoreRoute';

import withTranslate from 'localization/withTranslate';

class NavigationRoute extends React.Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    // TODO (YK 2017-04-18): Memoize
    const translatedTabs = _.map(NavigationRoute.tabs, (tab) => {
      return {
        ...tab,
        name: this.props.translate(_.join(['navigation', 'tabs', tab.key], '.')),
      };
    });
    return (
      <div className='NavigationRoute'>
        <ICIRRHeader />
        <div className='NavigationRoute-content'>
          <Switch>
            <Route path='/emergency' component={EmergencyRoute} />
            <Route path='/more' component={MoreRoute} />
            <Route path='/kyr' component={KnowYourRightsRoute} />
            <Route path='/map' component={MapRoute} />
            <Redirect from='*' to='/map' />
          </Switch>
        </div>
        <TabBar tabs={translatedTabs} tabClassName='NavigationRoute-tab' />
      </div>
    );
  }
}

NavigationRoute.tabs = [
  {
    className: 'EmergencyRoute-tab',
    icon: 'ICON',
    key: 'emergency',
    to: '/emergency',
  },{
    icon: 'ICON',
    key: 'map',
    to: '/map',
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
  translate: React.PropTypes.func.isRequired,
};

export default withTranslate(NavigationRoute);
