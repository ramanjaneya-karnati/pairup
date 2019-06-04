export const Actions = {
  PAIR_CENTERS_COMPONENT_INIT: 'PAIR_CENTERS_COMPONENT_INIT',
  PAIR_CENTERS_DATA_SUCCESS: 'PAIR_CENTERS_DATA_SUCCESS',
  PAIR_CENTERS_DATA_FAILURE: 'PAIR_CENTERS_DATA_FAILURE',
  ADD_USER_TO_LOCALE_INTERST:'ADD_USER_TO_LOCALE_INTERST',
  GET_USERS_BY_LOCALE: 'GET_USERS_BY_LOCALE',
  GET_USER_DETAILS:'GET_USER_DETAILS',
  REPORT_USER_SUBMIT: 'REPORT_USER_SUBMIT',
  LIKED_USERS_LIST:'LIKED_USERS_LIST',
  SINGLE_USER_LIKED_PROFILE_VIEW:'SINGLE_USER_LIKED_PROFILE_VIEW'
};

export function raiseAction(type, payload) {
  return {
    type,
    payload
  }
}