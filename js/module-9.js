const totalSpent = 2000;
let payment = 500;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
  console.log('Bronze partner, discount 2%');
  discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  console.log('Silver partner, discount 5%');
  discount = 0.05;
} else if (totalSpent >= 5000) {
  console.log('Golden partner, discount 10%');
} else {
  console.log('No partner, discount 0%');
}

console.log(
  `We place an order for ${payment} credits with a ${discount * 100}% discount`
);
