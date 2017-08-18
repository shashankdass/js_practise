// Rule 1 : if initialized by new, 'this' represent the brand new object inside
// eg :
function ConsoleLog (){
// console.log(this)
this.value = 10;
// console.log(this)
this.dummy = function(){
  console.log(this);
  return 2;
}
}
cl = new ConsoleLog();
// cl.dummy

// Rule 2: if function called using call, bind, apply this refers to the object passed
// eg

// var obj = {
//   value:5
// };
// ConsoleLog.call(obj);
// ConsoleLog.apply(obj);
// bound = ConsoleLog.bind(obj);
// bound();

// Rule 3: if function called with 'dot', the object calling it becomes this

console.log(cl.dummy());

// Rule 4 : if invoked independently, this represents window object
var fun  = cl.dummy
fun();

// If rules above clashes with each other, it flows from top to bottom in priority.
