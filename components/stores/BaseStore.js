import {EventEmitter} from 'events';
import Constants from '../Constants';

export default class BaseStore extends EventEmitter {
	addChangeListener(callback) {
    this.on(Constants.CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback);
  }

  // triggers change listener above, firing controller-view callback
  emitChange() {
    this.emit(Constants.CHANGE_EVENT);
  }
}