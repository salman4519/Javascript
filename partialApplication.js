// its similar to currying but can have more than one argment
// in simple making a new function with fewer argument

function a(a, b, c) { // without PA
  return a + b + c;
}

console.log(a(1, 2, 3));

function b(a) { // with PA
  return function (b, c) {
    return a + b + c;
  };
}

console.log(b(1)(2,3))
