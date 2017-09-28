import _ from 'lodash';
import autoBind from 'react-autobind';
import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';

import actions from 'actions';

import ServiceListItem from 'components/discover/ServiceListItem';

import { servicesFilterOptions } from 'constants/servicesConstants';

import withTranslate from 'localization/withTranslate';

class DiscoverRoute extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleClick(event) {
    const filterName = event.currentTarget.getAttribute('name');
    this.props.actions.map.toggleFilter(filterName);
    this.props.history.push('/map');
  }

  render() {
    return (
      <div className='DiscoverRoute'>
        <div className='DiscoverRoute-servicesList'>
          {_.map(servicesFilterOptions, (serviceOption) => {
            return (
              <ServiceListItem
                key={serviceOption.value}
                onClick={this.handleClick}
                {...serviceOption}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

DiscoverRoute.propTypes = {
  actions: React.PropTypes.object.isRequired,
  history: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => {
  return {
    selectedLanguage: state.settings.language,
  };
};

export default withTranslate(withRouter(connect(mapStateToProps, actions)(DiscoverRoute)));
