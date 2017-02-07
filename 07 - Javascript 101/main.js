function makeSizer(size, color, cb) {
  function sizer() {
    cb(size);
    document.body.style.fontSize = size + 'px';
    document.body.style.color = color;
  }

  return sizer;
}

var print = function(result) {
  console.log('Before: Changing font to ' + result + 'px');
}

var print2 = function() {
  console.log('Booyah!!!!');
}

var size12fn = makeSizer(12, '#333', print);
var size14fn = makeSizer(14, 'papayawhip', print);
var size16fn = makeSizer(16, 'red', print2);

document.getElementById('size12').onclick = size12fn;
document.getElementById('size14').onclick = size14fn;
document.getElementById('size16').onclick = size16fn;
