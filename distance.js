let x1 = 1;
let y1 = 3;
let x2 = 7;
let y2 = 6;

let x3 = x2 - x1;
let y3 = y2 - y1;

let x4 = x3**2;
let y4 = y3**2;

let yx5 = x4 + y4;

let d = Math.sqrt(yx5);

console.log(`The distance between points (${x1}, ${y1}) and (${x2}, ${y2}) is ${d}.`);


//solved in one line by a classmate! Very cool!
dist = ((((x2-x1)**2) + ((y2-y1)**2))**.5);
console.log(dist);
