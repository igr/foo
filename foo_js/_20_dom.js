// DOM

/**
 * Removes this node from the DOM tree.
 */
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

/**
 * Removes all nodes from the DOM tree.
 */
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

/**
 * Selects single element in DOM tree.
 */
function _(selector, src) {
  if (src === undefined) {
    src = document;
  }
  return src.querySelector(selector);
}

/**
 * Selects all matched elements in DOM tree.
 */
function __(selector) {
  return document.querySelectorAll(selector);
}

/**
 * Invokes a callback when DOM is ready.
 */
function ready(callback) {
  // in case the document is already rendered
  if (document.readyState !== 'loading') callback();
  // modern browsers
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
  // IE <= 8
  else document.attachEvent('onreadystatechange', function () {
      if (document.readyState === 'complete') callback();
    });
}
