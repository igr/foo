// class

function addClass(el, className) {
  if (!el) return;
  if (el.classList)
    el.classList.add(className);
  else
    el.className += ' ' + className;
}
function removeClass(el, className) {
  if (!el) return;
  if (el.classList)
    el.classList.remove(className);
  else
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}
function toggleClass(el, addedClass) {
  if (!el) return;
  if (el.classList.contains(addedClass)) {
    el.classList.remove(addedClass);
  }
  else {
    el.classList.add(addedClass);
  }
};
