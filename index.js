// Code your solutions in this file


// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   let i=0;
//   while (i < gifts.length) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     i++
//   };
//   return gifts;
// }

// wrapGifts(gifts);
// function wrapGifts (gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   
//   };

//   return gifts;

// };



// const people = ['James', 'Mary', 'Lauren', 'John'];

function writeCards (people, event) {
  const finishedCards = [];
  for (let i = 0; i < people.length; i++) {
    finishedCards.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`);
  };
  return finishedCards;
};


function countDown(n) {
  while (n >= 0) {
    console.log(n);
    n--;
  }
}

countDown(10);