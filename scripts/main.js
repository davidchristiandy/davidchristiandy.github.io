// Nothing fancy.
var wut = document.getElementById('wut')
  , wat = document.getElementById('wat')
  , i = 1
  , j = 1
  , innerDelay = 2000
  , delay = 4000;

setTimeout(function() {
  setInterval(function() {
    wut.className = 'variation-'+i;
    i = i % 4 + 1;
  }, innerDelay);

  setInterval(function() {
    wat.className = 'variation-'+j;
    j = j % 4 + 1;
  }, innerDelay);
}, delay);

