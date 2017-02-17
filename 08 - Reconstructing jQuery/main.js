var one = foo('.para')
// var two = foo('#wrapper > .container')
// var three = foo('.para', '.container')
// var abc = foo('.para')
// var four = foo(abc)
// var five = foo(document.getElementById('wrapper'))

// console.log(one)
// foo('.para').each(function(item, idx) {
//   item.className += item.className + ' test-class';
// })
foo('#wrapper div').last().each(function(obj) {
  var $this = foo(obj)
  $this.html('asdasdasd')
})
// console.log(two)
// console.log(three)
// console.log(four)
// console.log(five)
