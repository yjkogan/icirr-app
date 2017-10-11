import _ from 'lodash';
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class PartnerInfo extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      address, name, phone, website,
    } = this.props;
    const isExternal = _.startsWith(website, 'http');
    const href = isExternal ? website : `http://${website}`;
    return (
      <div className='PartnerInfo'>
        <div className='PartnerInfo-name'>{name}</div>
        {address && <div className='PartnerInfo-address'>{address}</div>}
        {phone && <div className='PartnerInfo-phone'>Phone: {phone}</div>}
        {website &&
          <a className='PartnerInfo-website' href={href}>
            {website}
          </a>
        }
      </div>
    );
  }
}

PartnerInfo.propTypes = {
  address: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  phone: React.PropTypes.number.isRequired,
  website: React.PropTypes.string.isRequired,
};

export default PartnerInfo;
