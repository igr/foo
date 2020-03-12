// ajax

/**
 * Makes an AJAX request to provided URL.
 * On success, calls a function `fn`.
 * On error, calls a function `onerror`.
 */
function ajax(url, fn, onerror) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var data = JSON.parse(request.responseText);
      fn(data);
    } else {
      // We reached our target server, but it returned an error
      if (onerror) onerror(request);
    }
  };
  request.onerror = onerror;
  request.send();
}
