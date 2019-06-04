export const Actions = {
  USER_PROFILE_LANDING_COMPONENT_INIT: 'USER_PROFILE_LANDING_COMPONENT_INIT',
  USER_PROFILE_LANDING_NAVIGATE: 'USER_PROFILE_LANDING_NAVIGATE',
  USER_PROFILE_LANDING_SUCCESS: 'USER_PROFILE_LANDING_SUCCESS',
  USER_PROFILE_LANDING_FAILURE: 'USER_PROFILE_LANDING_FAILURE',
  USER_PROFILE_UPDATE_SUBMIT: 'USER_PROFILE_UPDATE_SUBMIT',
  USER_PREFERENCES_SUBMIT: 'USER_PREFERENCES_SUBMIT',
  USER_PROFILE_IMAGE_UPLOAD: 'USER_PROFILE_IMAGE_UPLOAD',
  USER_PROFILE_IMAGE_DELETE: 'USER_PROFILE_IMAGE_DELETE'
}

export function raiseAction(type, payload) {
  return {
    type,
    payload
  }
}
