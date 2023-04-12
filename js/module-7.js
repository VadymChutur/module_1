const min = 6;
const max = 13;
let total = 0;

for (let i = min; i <= max; i += 1) {
  if (i % 2 !== 0) {
    console.log('odd', i);
    // total += i;
    continue;
  }
  console.log('even', i);
  total += i;
  // total += i % 2 ? i : continue;
}

console.log('total', total);

// console.log(total);

// const employees = 5;
// let totalSalary = 0;
// const minSalary = 500;
// const maxSalary = 5000;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary
//   );
//   console.log(`Salary worker number ${i}-${salary}`);
//   totalSalary += salary;
// }

// console.log('Total salary:', totalSalary);
