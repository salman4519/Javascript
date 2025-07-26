// closure
// closure is a feature in js. where a function can access its outer scope(outer functions) variables even the outer function finished the execution

// closure has access to
// 1. its own scope
// 2. outer scope
// 3. global scope

// we can make private data
// but its not be gone to garbage collector unless it is not called (accessing outer scope from inner scope)

function outer() {
  const outerVal = "I am outer scope";

  function inner() {
    console.log(outerVal);
  }
  inner();
}

outer();
