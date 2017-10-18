import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class LabeledTable extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const className = cx(this.props.className, this.props.modifierClassName);
    return (
      <div className={className}>
        {this.props.label && <div className='LabeledTable-label'>{this.props.label}</div>}
        <div className='LabeledTable-rows'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

LabeledTable.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  modifierClassName: PropTypes.string,
};

LabeledTable.defaultProps = {
  className: 'LabeledTable',
};

export default LabeledTable;
