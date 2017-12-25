import _ from 'lodash';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';

import actions from 'actions';

import ServiceListItem from 'components/discover/ServiceListItem';

import { servicesFilterOptions } from 'constants/servicesConstants';

import withTranslate from 'localization/withTranslate';

const infoLinkItems = [{
  href: 'http://www.icirr.org/news-events/events?show=citizenship-workshop',
  value: 'nextWorkshop',
}, {
  href: 'https://www.uscis.gov/citizenship/educators/naturalization-information#eligibility_reqmts',
  value: 'citizenshipRequirements',
}, {
  href: 'http://www.icirr.org/our-work/what-to-bring-to-a-workshop-que-llevar-a',
  value: 'workshopWhatToBring',
}, {
  href: 'http://www.icirr.org/content/documents/agency_referral_12.2016.pdf',
  value: 'lowCostLegalAidProviders',
}];

class DiscoverRoute extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleKYRClicked() {
    this.props.history.push('/kyr');
  }

  handleOpenLink(href) {
    window.open(href,'_blank','noopener');
  }

  handleServiceClicked(event) {
    const filterName = event.currentTarget.getAttribute('name');
    this.props.actions.map.setFilter(filterName);
    this.props.history.push('/orgs/list');
  }

  render() {
    return (
      <div className='DiscoverRoute'>
        <div className='DiscoverRoute-header'>
          {this.props.translate('discover.orgHeader')}
        </div>
        <div className='DiscoverRoute-servicesList'>
          {_.map(servicesFilterOptions, (serviceOption) => {
            return (
              <ServiceListItem
                key={serviceOption.value}
                onClick={this.handleServiceClicked}
                {...serviceOption}
              />
            );
          })}
        </div>
        <div className='DiscoverRoute-header'>
          {this.props.translate('discover.infoHeader')}
        </div>
        <div className='DiscoverRoute-servicesList'>
          <ServiceListItem
            onClick={this.handleKYRClicked}
            value='kyr'
          />
          {_.map(infoLinkItems, (linkItem) => {
            return (
              <ServiceListItem
                href={linkItem.href}
                onClick={this.handleOpenLink}
                value={linkItem.value}
              />
            );
          })}
        </div>
        <div className='DiscoverRoute-icirrInfoLink'>
          {this.props.translate('discover.footerText')}&nbsp;
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='http://www.icirr.org/'>
            {this.props.translate('discover.footerLink')}
          </a>
        </div>
      </div>
    );
  }
}

DiscoverRoute.propTypes = {
  actions: PropTypes.object.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  translate: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    selectedLanguage: state.settings.language,
  };
};

export default withTranslate(withRouter(connect(mapStateToProps, actions)(DiscoverRoute)));
