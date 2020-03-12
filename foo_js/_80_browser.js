// set the hash

/**
 * Push HASH code to history i.e. location.
 */
function pushHash(hashName) {
  if (history.pushState) {
    history.pushState(null, null, '#' + hashName);
  } else {
    location.hash = '#' + hashName;
  }
}

