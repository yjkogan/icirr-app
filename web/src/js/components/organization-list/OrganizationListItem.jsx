import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import PartnerInfo from 'components/PartnerInfo';


class OrganizationListRoute extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className='OrganizationListItem'>
        <PartnerInfo {...this.props} />
      </div>
    );
  }
}

export default OrganizationListRoute;
