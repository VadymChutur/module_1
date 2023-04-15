const logins = ['login1', 'Logins1', 'LoGiN1', 'lOgIn1'];
const loginToFind = 'LoGiN1';
let message = '';

// 1 перебрати масив
// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   if (login === loginToFind) {
//     message = `Match ${loginToFind}`;
//     break;
//   }
//   message = `Not match ${loginToFind}`;
//   console.log(login);
// }

// for (const login of logins) {
//   login === loginToFind;
//   message = `Match ${login}`;
// }
// console.log(message);
// 2 попрівняти кожен елемент масиву з пошуковим словом

// console.log(logins.includes(loginToFind));

message = logins.includes(loginToFind)
  ? `Math ${loginToFind}`
  : `Not mathc ${loginToFind}`;
console.log(message);
