const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];

const cardToRemove = 'card-3';
const index = cards.indexOf(cardToRemove);
console.log(cards);

console.log(index);
cards.splice(index, 1);
console.log(cards);

const cardToInsert = 'card-6';
const indexAdd = 3;
cards.splice(indexAdd, 0, cardToInsert);
console.log(cards);

const cardToUpdate = 'card-4-update';
cards.splice(2, 1, cardToUpdate);

console.log(cards);
