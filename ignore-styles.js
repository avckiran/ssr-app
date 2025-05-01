// This hook tells Node to effectively ignore SCSS imports on the server
// by registering a require hook that returns an empty object for .scss files.
require.extensions['.scss'] = function () {
    return {};
  };