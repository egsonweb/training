// print()
// var a = 10;
// function print() {
//   console.log(a)
// }
// // this => window
// function fn1() {
//   // this => fn1
//   var c;
//   c = "Hello there!";
//   fn2();
//   console.log('From outer: ' + a)
//   console.log('From outer: ' + c)
//   function fn2() {
//     var c = "Some other string"
//     console.log('From inner fn2: ' + a)
//     console.log('From inner fn2: ' + c)
//     function fn3() {
//       console.log('From inner fn3: ' + c)
//     }
//     fn3();
//   }
// }
//
// var b = 20;
//
// fn1()


// var person = {
//   name: 'John',
//   age: 42,
//   friends: ['Doe', 'Mike', 'Jake'],
//   address: {
//     city: 'Newark',
//     state: 'CA'
//   }
// };


//
// console.log(person)
// console.log(person.name)
// console.log(person.address.city)

// for(var i=0; i<=10; i++) {
//   console.log(i);
// }

// for(var i=0; i<=10; i++) {
//   (function(x) {
//     setTimeout(function() {
//       console.log(x);
//     }, 2000*x);
//   })(i);
// }

var startBtn = document.getElementById('start')
var stopBtn = document.getElementById('stop')
var resetBtn = document.getElementById('reset')
var number = document.getElementById('number')

var count = 0;
var interval = null;

function stop() {
  if (interval && interval !== null) {
    clearInterval(interval);
  }
}

function start() {
  interval = setInterval(function() {
    count++;
    (function(x) {
      if(x === 5) {
        clearInterval(interval)
      }
      number.innerHTML = count;
      console.log(x)
    })(count)
  }, 1000);
}

function reset() {
  count = 0;
  number.innerHTML = count;
}

// startBtn.onclick = start;
// stopBtn.onclick = stop;
