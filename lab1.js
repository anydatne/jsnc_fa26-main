console.log("day la lab 1");
// PHP ; $_tenbien
// JS let, const

let name = "hoadv"; // string
let age = 36; // number
age = "30"; // string
let myName = "hoadv21"; // string
// boolean: true / false
let online = true;
let isActive = true;
// Nếu đúng thì xảy ra
if (isActive) {
  console.log("hoat dong ", isActive);
}

// tham trị, tham chiếu, địa chỉ bộ nhớ máy tính
name = "hoadv21";
age = 40;
const a = 10;
const b = 3;
console.log(a * b);
console.log(a / b);
console.log("Ten toi la: ", name);
console.log("Tuoi cua toi la:", age);

// Ham
function sayHello() {
  console.log("xin chao dat");
  return 10;
}

sayHello();

//bài 2 
let aage = 20;
console.log(aage); 

aage = 21;
console.log(aage);

//bài 3

const c = 10;
const d = 5;

console.log("Tong:", c + d);
console.log("Hieu:", c - d);
console.log("Tich:", c * d);
console.log("Thuong:", c / d);

//bai 4
function sayHi(name) {
  console.log("Xin chao " + name);
}

sayHi("Nam");
sayHi("Huyen");
sayHi("Dat");

//bai 5
function sum(a,b){
  return a + b;
}

const result = sum(10, 20);
console.log(result);

//bai 6 
function calculateTotal(price, quantity){
  return price * quantity;
}

const total = calculateTotal(5000 ,3);
console.log(total); 

//bai 7 
const math = 8;
const english = 7;
const java = 9;

function calculateAverage(math, english, java){
  return (math + english + java) /3;
}

const average = calculateAverage(math, english, java);
console.log(average);