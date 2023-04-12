const btnAdd = document.querySelector('button[data-add]');
const btnReset = document.querySelector('button[data-reset]');
const valueInput = document.querySelector('input[data-value]');
const outputEl = document.querySelector('p[data-sum] span');

let total = 0;

btnAdd.addEventListener('click', () => {
  const value = Number(valueInput.value);

  total += value;
  outputEl.textContent = total;
  valueInput.value = '';
});

btnReset.addEventListener('click', () => {
  total = 0;
  outputEl.textContent = 0;
});
