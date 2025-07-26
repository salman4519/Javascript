//event loop
// event loop handles the asynchronous in js.
// its job is to check if the callstack is empty . need to refill from task quene based on priority .
 // HIgher prioriy task quene is microtask quene it includes promises.
 // the lower priority task quene is macrotask quene it includes setInterval, setTimeout 
 // when the callstack is empty the eventloop will first take from micro task then will take from macrotask 


console.log("start");

setTimeout(()=>{
    console.log("setTimeout(macrotask quene)") // (macrotask quene lower priority)
},0)

Promise.resolve().then(()=>console.log("promise(microtask quene)")); // microtask quene (higher priority)

console.log("end");


// the output will be :
// start
// end
// promise(microtask quene)
// setTimeout(macrotask quene)