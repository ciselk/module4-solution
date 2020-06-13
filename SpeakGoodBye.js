(function (window) {
  var greeter2 = {};
  var greeting = "Good Bye ";
  greeter2.sayGoodBye = function (name) {
    console.log(greeting + name);
  }
  window.greeter2 = greeter2;
})(window);