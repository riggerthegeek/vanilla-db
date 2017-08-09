/**
 * base
 */

/* Node modules */
import { EventEmitter } from 'events';

/* Third-party modules */
import { remote } from 'electron';

/* Files */

export default class Base extends EventEmitter {

  /**
   * Logger
   *
   * Returns the logger instance
   *
   * @returns {*}
   */
  static get logger () {
    return remote.app.logger.trigger;
  }

}
