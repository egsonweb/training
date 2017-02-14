(function(w) {
  var test = (function() {
    var name = "John"
    var person = {
      name: 'Jake',
      eat: function(n) {
        console.log(n + ' is eating')
      },
      move: function() {
        foo()
        return name + ' is moving...'
      }
    };

    function foo() {
      console.log('Returning something...')
    }

    return {
      hello: person.move,
      eat: person.eat
    };
  })();

  w.main = {
    sayHello: test.hello,
    eatSomething: test.eat.bind(null, "Mike")
  }
})(window)
