(function (window) {
  var greeter = {};
  var greeting = "Hello ";
  greeter.sayHello = function (name) {
    console.log(greeting + name);
  }
  window.greeter = greeter;
})(window);