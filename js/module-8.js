let balance = 10000;
const payment = 2000;

console.log(
  `Total purchase amount ${payment} credits. We check the total amount of founds in the account.`
);

if (balance >= payment) {
  console.log('The operation is successful');
  balance -= payment;
  console.log(`You have ${balance} credits on your account`);
} else {
  console.log('There are not enough funds in the account');
}

console.log('Completion of the operation');
