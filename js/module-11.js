// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// friends[1] = 'Test';

// console.log(friends);

// const lastIndex = friends.length - 1;

// console.log(lastIndex);

// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);

// a = 20;

// console.log(a);
// console.log(b);

// const a = [1, 2, 3];
// const b = a;

// console.log(a);
// console.log(b);

// a[0] = 500;

// console.log(a);
// console.log(b);

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i += 1) {
//   friends[i] += '-1';
//   console.log(friends[i]);
// }

for (const friend of friends) {
  console.log(friend);
}
