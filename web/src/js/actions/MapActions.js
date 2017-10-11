export function setFilter(filterName) {
  return {
    type: 'SET_FILTER',
    payload: filterName,
  };
}

export function toggleFilter(filterName) {
  return {
    type: 'TOGGLE_FILTER',
    payload: filterName,
  };
}

export function setSelectedMarker(selectedMarker) {
  return {
    type: 'SELECT_MARKER',
    payload: selectedMarker,
  };
}
