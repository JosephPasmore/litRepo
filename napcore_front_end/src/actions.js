export const SHOW_DETAIL_VIEW = 'SHOW_DETAIL_VIEW';
export const HIDE_DETAIL_VIEW = 'HIDE_DETAIL_VIEW';

export function showDetailView(locationId) {
  return {
    type: SHOW_DETAIL_VIEW,
    locationId
  }
}

export function hideDetailView() {
  return {
    type: HIDE_DETAIL_VIEW,
  }
}