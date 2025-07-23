// all falsy value will be 'false' in boolean context

const falsy = [
    false,
    0,
    -0,
    null,
    undefined,
    "",
    0n,
    // document.all
]


if(0){    
    // if the value inside if is falsy this line will never run
    console.log("its truthy")
}else{
    console.log("its falsy")
}

const name = data.name || "unknown User"; // if the data.name is falsy the unknown User will be gone as default

const score = data.score || 5 ;  // its not correct bcz if the score is valid 0 the 5 willl be gone as default

// so we use nullish collision for numeric 
const score1 = data.score ?? 5; // the 5 will be only gone if the data.score is null or undefined 

