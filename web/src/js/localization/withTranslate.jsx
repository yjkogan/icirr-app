import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import hoistStatics from 'hoist-non-react-statics';

import strings from 'localization';

/*
 * A public higher-order component for exposing the translate function as a prop
 * Taken almost entirely from react-router `withRouter`
 * https://github.com/ReactTraining/react-router/blob/ef2f8f90d6243d007b32f262e1215a5d40f0577b/packages/react-router/modules/withRouter.js
 */
const withTranslate = (Component) => {
  class C extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        translate: (path) => _.get(strings, path, ''),
      };
    }
    componentWillReceiveProps(nextProps) {
      if (this.props.language !== nextProps.language) {
        this.setState({
          translate: (path) => _.get(strings, path, ''),
        });
      }
    }

    render() {
      const { wrappedComponentRef, ...remainingProps } = this.props;
      return (
        <Component {...remainingProps} translate={this.state.translate} ref={wrappedComponentRef} />
      );
    }
  }

  C.displayName = `withTranslate(${Component.displayName || Component.name})`;
  C.WrappedComponent = Component;
  C.propTypes = {
    language: React.PropTypes.string.isRequired,
    wrappedComponentRef: React.PropTypes.func
  };

  const ConnectedC = connect((state) => {
    return {
      language: state.settings.language,
    };
  })(C);


  return hoistStatics(ConnectedC, Component);
};

export default withTranslate;
