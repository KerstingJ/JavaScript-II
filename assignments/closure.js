// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function dextersParents() {
  let momsMessage = "dinners ready";

  function dextersLaboratory(){
    //dexters parents dont know whats going on in dexters laboratory
    let dexterDoingExperiments = true;
  }
}


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function() {
    count +=1
    return count;
  }
};
// const newCounter = counter();
// console.log(newCounter()); // 1
// console.log(newCounter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  
  let counter = {
    increment: function(){ return ++count},
    decrement: function(){ return --count}
  }
  
  return counter;
};

let newCounter = counterFactory();
console.log(newCounter.increment());
console.log(newCounter.increment());
console.log(newCounter.increment());
