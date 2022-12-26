let x = 10;
let y = x;
y = y + 5;
console.log(x, y);

const number = {
  x: 10,
  y: 15,
};
const newNumber = number;
newNumber.x = 20;
console.log(number);
console.log(newNumber);

function copyObject(obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const first1 = {
  a: 10,
  b: 15,
  z: {
    a: 1,
    b: 2,
  },
};
const second = copyObject(first1);
second.a = 50;
console.log(first1);
console.log(second);

const number1 = {
  x: 10,
  y: 15,
};

const newNumbers1 = Object.assign({}, number1);
console.log(newNumbers1);
newNumbers1.x = 15;
console.log(newNumbers1);
console.log(number1);

const first2 = {
  x: 1,
  y: 2,
};
const second2 = {
  d: 12,
  s: 14,
};
const join = Object.assign(first, second);
console.log(join);
console.log(typeof join);
if (typeof join === "object") {
  for (let key in first) {
    console.log(`This is object connected with ${key} and ${second}`);
  }
}
//#endregion

const arr = [1, 2, 3];
const numbers77 = arr.slice();
numbers77[1] = "aziz";
console.log(arr);
console.log(numbers77);

//spread

const chelsea = ["Salah", "Mane"];
const united = ["Mahrez"];
const mixPlayer = [...chelsea, ...united];
console.log(mixPlayer);
