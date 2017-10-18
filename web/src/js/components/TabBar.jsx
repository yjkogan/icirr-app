import cx from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

class TabBar extends React.Component {
  render() {
    return (
      <div className='TabBar'>
        {_.map(this.props.tabs, (tab) => {
          const linkClassName = cx('TabBar-tab', this.props.tabClassName, tab.className);
          return (
            <NavLink key={tab.to}
              activeClassName='TabBar-tabActive'
              className={linkClassName}
              to={tab.to}>
              {/*<div className='TabBar-tabIcon'>{tab.icon}</div>*/}
              <div className='TabBar-tabName'>
                {tab.name}
              </div>
            </NavLink>
          );
        })}
      </div>
    );
  }
}

TabBar.propTypes = {
  tabClassName: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  })).isRequired,
};

export default TabBar;
