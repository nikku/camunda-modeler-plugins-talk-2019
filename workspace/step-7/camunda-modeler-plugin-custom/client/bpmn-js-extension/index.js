import ExampleExtensionService from './ExampleExtensionService';

/**
 * A bpmn-js module, defining all extension services and their dependencies.
 *
 * --------
 *
 * WARNING: This is an example only.
 *
 * Make sure you choose a unique name under which your extension service
 * is exposed (i.e. change pluginService_1qx2bod to something sensible).
 *
 * --------
 *
 */
export default {
  __init__: [ 'pluginService_1qx2bod' ],
  pluginService_1qx2bod: [ 'type', ExampleExtensionService ]
};
