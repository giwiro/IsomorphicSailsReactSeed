import keyMirror from 'keymirror';

export default {
  // event name triggered from store, listened to by views
  CHANGE_EVENT: 'change',

  // Each time you add an action, add it here... They should be past-tense
  ActionTypes: keyMirror({
    SESSION_DESTROYED: null,
    LOG_OUT: null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};