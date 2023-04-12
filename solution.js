const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (arr) => {
  return arr.sort((a, b) => (a < b ? -1 : 1));
};

// sort numbers in descending order
const sortNumsD = (arr) => {
  return arr.sort((a, b) => (a > b ? -1 : 1));
};

// sort words in ascending order case sensitive
const sortWordsA = (arr) => {
  return arr.sort((a, b) => (a < b ? -1 : 1));
};

// sort words in descending order case insensitive
const sortWordsD = (arr) => {
  return arr.sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? -1 : 1));
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (arr) => {
  return arr.sort((a, b) => (a.name < b.name ? -1 : 1));
};

// sort products by price, ascending order
const sortProductPriceA = (arr) => {
  return arr.sort((a, b) => (a.price < b.price ? -1 : 1));
};

// sort products by price, descending order
const sortProductPriceD = (arr) => {
  return arr.sort((a, b) => (a.price > b.price ? -1 : 1));
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (arr) => {
  return arr.sort((a, b) => {
    if (a.price !== b.price) return a.price < b.price ? -1 : 1;
    return a.name < b.name ? -1 : 1;
  });
};

// sort catArt by designed by
const catArtSortDesginedByA = (arr) => {
  return arr.sort((a, b) => (a.designedBy < b.designedBy ? -1 : 1));
};

// sort catArt by price
const catArtSortByPriceA = (arr) => {
  return arr.sort((a, b) => {
    return +a.price < +b.price ? -1 : 1;
  });
};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (arr, order = "ascending") => {
  if (order == "ascending") {
    return bubbleSort(arr, (a, b) => a > b);
  } else {
    return bubbleSort(arr, (a, b) => a < b);
  }
};

const bubbleSort = (arr, callback) => {
  let sorted = true;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (callback(arr[j], arr[j + 1])) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        sorted = false;
      }
    }
    if (sorted) break;
  }
  return arr;
};

module.exports = {
  sortNumsA,
  sortNumsD,
  sortWordsA,
  sortWordsD,
  sortProductNamesA,
  sortProductPriceA,
  sortProductPriceD,
  sortProducsPriceNameA,
  catArtSortDesginedByA,
  catArtSortByPriceA,
  mySortFunction,
};
