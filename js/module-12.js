const cart = [54, 28, 105, 70, 92, 17, 120];
let total = 0;

// 1 перебрати масив
// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);
//   total += cart[i];
// }

// console.log(total);

// 2 створити перемінну для загальної суми до цикла
// 3 на кожній ітерації додавати значення до загальної суми

for (const value of cart) {
  total += value;
}

console.log(total);
