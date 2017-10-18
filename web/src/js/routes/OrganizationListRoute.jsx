/* eslint-disable react/jsx-handler-names */
import autoBind from 'react-autobind';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';
import OrganizationListItem from 'components/organization-list/OrganizationListItem';

import partnersSelector from 'selectors/partnersSelector';

class OrganizationListRoute extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className='OrganizationListRoute-list'>
        {_.map(this.props.partners, (partner) => {
          return (
            <OrganizationListItem key={partner.id} {...partner} />
          );
        })}
      </div>
    );
  }
}

OrganizationListRoute.propTypes = {
  partners: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => {
  return {
    partners: partnersSelector(state),
  };
};

export default  connect(mapStateToProps)(OrganizationListRoute);
