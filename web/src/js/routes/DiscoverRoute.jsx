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

class AboutICIRRRoute extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleClick(event) {
    // console.debug('list item name', event.target.getAttribute('name'));
    this.props.history.push(`/map/${event.target.getAttribute('name')}`)
  }

  render() {
    return (
      <div className='DiscoverRoute'>
        <div className='DiscoverRoute-servicesList'>
          {_.map(servicesFilterOptions, (serviceOption) => {
            return (
              <ServiceListItem onClick={this.handleClick} {...serviceOption} />
            );
          })}
        </div>
      </div>
    );
  }
}

AboutICIRRRoute.propTypes = {
  actions: React.PropTypes.object.isRequired,
  history: React.PropTypes.shape({
    goBack: React.PropTypes.func.isRequired,
  }).isRequired,
  selectedLanguage: React.PropTypes.string.isRequired,
  translate: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    selectedLanguage: state.settings.language,
  };
};

export default withTranslate(withRouter(connect(mapStateToProps, actions)(AboutICIRRRoute)));
