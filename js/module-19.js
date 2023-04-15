const arr1 = [5, 10, 15, 20];
const arr2 = [10, 20, 30];

let total = 0;

const arr = arr1.concat(arr2);
console.log(arr);

for (const number of arr) {
  total += number;
}

console.log(total);
