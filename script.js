var whichNameObj = {};
whichNameObj.names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var x in whichNameObj.names) {
  if (whichNameObj.names[x].charAt(0).toLowerCase() != "j") {
      greeter.sayHello(whichNameObj.names[x]);  
  }else{
      greeter2.sayGoodBye(whichNameObj.names[x]);
  }
} 


