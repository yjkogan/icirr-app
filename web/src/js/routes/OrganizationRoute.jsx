/* eslint-disable react/jsx-handler-names */
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';
import { Redirect, Route, Switch, withRouter } from 'react-router';

import { toggleFilter } from 'actions/MapActions';

import FloatyButton from 'components/buttons/FloatyButton';
import ServicesFilters from 'components/map/ServicesFilters';

import MapRoute from 'routes/MapRoute';
import OrganizationListRoute from 'routes/OrganizationListRoute';

class OrganizationRoute extends React.Component {
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

  isMap() {
    return this.props.history.location.pathname === '/orgs/map';
  }

  toggleView() {
    if (this.isMap()) {
      this.props.history.replace('/orgs/list');
    } else {
      this.props.history.replace('/orgs/map');
    }
  }

  render() {
    return (
      <div className='OrganizationRoute'>
        <ServicesFilters onSelect={this.handleFilterSelect} selectedFilters={this.props.selectedFilters} />
        <Switch>
          <Route
            component={MapRoute}
            path='/orgs/map'
          />
          <Route
            component={OrganizationListRoute}
            path='/orgs/list'
          />
          <Redirect from='*' to='/orgs/list' />
        </Switch>
        <FloatyButton onClick={this.toggleView}>{this.isMap() ? 'List' : 'Map'}</FloatyButton>
      </div>
    );
  }
}

OrganizationRoute.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
    replace: PropTypes.func.isRequired,
  }).isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string),
  toggleFilter: PropTypes.func.isRequired,
};

const actions = {
  toggleFilter,
};

const mapStateToProps = (state) => {
  return {
    selectedFilters: state.map.selectedFilters,
  };
};

export default withRouter(connect(mapStateToProps, actions)(OrganizationRoute));
