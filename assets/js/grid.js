// Press "G" to toggle the 12-column layout grid.
(function () {
  var overlay = document.querySelector('.grid-overlay');
  if (!overlay) return;
  document.addEventListener('keydown', function (e) {
    var t = e.target;
    if (e.metaKey || e.ctrlKey || e.altKey || (t && /INPUT|TEXTAREA/.test(t.tagName))) return;
    if (e.key === 'g' || e.key === 'G') overlay.hidden = !overlay.hidden;
  });
})();
