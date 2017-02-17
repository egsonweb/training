function add() {
  var sum = 0;
  var l = arguments.length;
  for(var i=0; i<l; i++) {
    sum += arguments[i]
  }
  return sum;
}

// var acc = add.apply(null, numbersasofnow)
// console.log(acc)

var numbersasofnow = [2, 5, 10, 15, 34]
var randInt = function() {
  return Math.round(1+(Math.random()*50))
};

setInterval(function() {
  var num = randInt()
  // numbersasofnow.push(num)
  var acc = add.call(null, 2, 5, 15, 34, num)
  console.log(acc)
}, 1000)
