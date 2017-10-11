/* eslint-disable react/jsx-handler-names */
import autoBind from 'react-autobind';
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';
import { withRouter } from 'react-router';
import { createSelector } from 'reselect';

import { toggleFilter } from 'actions/MapActions';

import FloatyButton from 'components/buttons/FloatyButton';
import ServicesFilters from 'components/map/ServicesFilters';
import OrganizationListItem from 'components/organization-list/OrganizationListItem';


class OrganizationListRoute extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleFilterSelect(filterValue) {
    this.props.toggleFilter(filterValue);
  }

  handleMapClick() {
    this.props.history.replace('/map');
  }

  render() {
    return (
      <div className='OrganizationListRoute'>
        <ServicesFilters onSelect={this.handleFilterSelect} selectedFilters={this.props.selectedFilters} />
        <div className='OrganizationListRoute-list'>
          {_.map(this.props.organizations, (organization) => {
            return (
              <OrganizationListItem key={organization.id} {...organization} />
            );
          })}
        </div>
        <FloatyButton onClick={this.handleMapClick}>Map</FloatyButton>
      </div>
    );
  }
}

OrganizationListRoute.propTypes = {
  history: React.PropTypes.shape({
    replace: React.PropTypes.func.isRequired,
  }).isRequired,
  organizations: React.PropTypes.arrayOf(React.PropTypes.object),
  selectedFilters: React.PropTypes.arrayOf(React.PropTypes.string),
  toggleFilter: React.PropTypes.func.isRequired,
};

const partnersSelector = createSelector(
  (state) => state.map.partners,
  (state) => state.map.selectedFilters,
  (partners, selectedFilters) => {
    return _.filter(partners, (marker) => {
      // TODO: Rethink
      let matchAll = true;
      _.forEach(selectedFilters, (filter) => {
        matchAll = marker.services[filter] && matchAll;
      });
      return matchAll;
    });
  }
);

const actions = {
  toggleFilter,
};

const mapStateToProps = (state) => {
  return {
    organizations: partnersSelector(state),
    selectedFilters: state.map.selectedFilters,
    selectedMarker: state.map.selectedMarker,
  };
};

export default  withRouter(connect(mapStateToProps, actions)(OrganizationListRoute));
