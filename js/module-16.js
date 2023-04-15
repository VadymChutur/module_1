const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
let string = '';

// for (const friend of friends) {
//   string += friend + ', ';
// }

// console.log(string.slice(0, string.length - 2));
// string = string.slice(0, string.length - 2);
string = friends.join(', ');
console.log(string);
