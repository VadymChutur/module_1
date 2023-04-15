const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();

// console.log(normalizedTitle);

// console.log(normalizedTitle.split(' '));

// const words = normalizedTitle.split(' ');

// console.log(words);

// const slug = words.join('-');

const slug = title.toLowerCase().split(' ').join('-');

console.log(slug);
