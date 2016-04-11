import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

/* eslint-disable no-console */

export default {

  destroySession() {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.SESSION_DESTROYED
    });
    Dispatcher.handleServerAction({
      type: Constants.ActionTypes.LOG_OUT
    })
  }

	
  /*addItem(text) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TASK_ADDED,
      text: text
    });
  },

  clearList() {
    //console.warn('clearList action not yet implemented...');
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TASK_CLEARED
    });
  },

  checkItem(task, index) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TASK_CHECKED,
      id: task.id,
      index: index
    });
  },

  uncheckItem(task, index) {
    console.log("dispatching TASK_UNCHECK");
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TASK_UNCHECKED,
      id: task.id,
      index: index
    });
  }*/
};
