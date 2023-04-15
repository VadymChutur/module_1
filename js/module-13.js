const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
let total = 0;
// 1 перебрати масив
// 2 створити тотал для підрахунку
// 3 визначити чи парне число?
// 4 пропускати тільки парні числа

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
//   const number = numbers[i];
//   if (number % 2 === 0) {
//     console.log('even');
//     total += number;
//   }
// }

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     total += number;
//   }
// }

for (const number of numbers) {
  if (number % 2 !== 0) {
    continue;
  }
  total += number;
}

console.log(total);
