const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (someNums) => {
  return someNums.sort((a, b) => a - b);
};

// sort numbers in descending order
const sortNumsD = (someNums) => {
  return someNums.sort((a, b) => b - a);
};

// sort words in ascending order case sensitive
const sortWordsA = (someWords) => {
  return someWords.sort((a, b) => (a > b ? 1 : -1));
};

// sort words in descending order case insensitive
const sortWordsD = (someWords) => {
  return someWords.sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? -1 : 1));
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (someProducts) => {
  return someProducts.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
};

// sort products by price, ascending order
const sortProductPriceA = (someProducts) => {
  return someProducts.sort((a, b) => a.price - b.price);
};

// sort products by price, descending order
const sortProductPriceD = (someProducts) => {
  return someProducts.sort((a, b) => b.price - a.price);
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (someProducts) => {
  return someProducts.sort((a, b) =>
    a.price === b.price ? (a.name > b.name ? 1 : -1) : a.price - b.price
  );
};

// sort catArt by designed by
const catArtSortDesginedByA = (catArt) => {
  return catArt.sort((a, b) =>
    a.designedBy.toUpperCase() < b.designedBy.toUpperCase() ? -1 : 1
  );
};

// sort catArt by price
const catArtSortByPriceA = (catArt) => {
    for (let i = 0; i < catArt.length; i++) {
    for (let j = 0; j < catArt.length - 1; j++) {
      let curr = catArt[j];
      let next = catArt[j + 1];
      let currPrice = typeof curr.price === "string" && curr.price.includes("♇") ? parseFloat(curr.price.replace(/♇/g, "")) * 10 : curr.price;
      let nextPrice = typeof next.price === "string" && next.price.includes("♇") ? parseFloat(next.price.replace(/♇/g, "")) * 10 : next.price;
      if (currPrice > nextPrice) {
        catArt[j] = next;
        catArt[j + 1] = curr;
      }
    }
  }
  return catArt;

};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
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
