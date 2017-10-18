import _ from 'lodash';
import { createSelector } from 'reselect';

export default createSelector(
  (state) => state.map.partners,
  (state) => state.map.selectedFilters,
  (partners, selectedFilters) => {
    return _.filter(partners, (marker) => {
      let matchAll = true;
      _.forEach(selectedFilters, (filter) => {
        matchAll = marker.services[filter] && matchAll;
      });
      return matchAll;
    });
  }
);
