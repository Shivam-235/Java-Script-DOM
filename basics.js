let a = 10;
let b = 20;
//arithematic operations
let sum = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;
let mod = a % b;
console.log("Sum: " + sum);
console.log("Sub: " + sub);
console.log("Mul: " + mul);
console.log("Div: " + div);
console.log("Mod: " + mod);
//Assignment operators
let x = 23;
let y = 45;
x += y; // x = x + y
console.log("x: " + x);
x -= y; // x = x - y
console.log("x: " + x);
x *= y; // x = x * y
console.log("x: " + x);
x /= y; // x = x / y
console.log("x: " + x);
x %= y; // x = x % y
console.log("x: " + x);
//comparison operators
let p = 10;
let q = 20;
console.log(p == q);
console.log(p != q);
console.log(p > q);
console.log(p < q);
console.log(p >= q);
console.log(p <= q);
console.log(p === q);//strictly equal
console.log(p !== q);//strict comparison
//logical operators
let r = true;
let s = false;
console.log(r && s);
console.log(r || s);
console.log(!r);
console.log(!s);
//Control Statements
//if else
let age = 18;
if (age >= 18) {
    console.log("You are eligible for voting");
}
else {
    console.log("You are not eligible for voting");
}
//switch
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
//for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
//do while
let j=0;
do{
    console.log(j);
    j++;
}
while(j<5);
//functions
