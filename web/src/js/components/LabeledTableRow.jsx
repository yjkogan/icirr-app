import PropTypes from 'prop-types';
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class LabeledTableRow extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className='LabeledTableRow'>
        {this.props.children}
      </div>
    );
  }
}

LabeledTableRow.propTypes = {
  children: PropTypes.node.isRequired,
};


export default LabeledTableRow;
