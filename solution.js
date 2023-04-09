const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (nums) => {
  return nums.sort((a, b) => a - b);
};

// sort numbers in descending order
const sortNumsD = (nums) => {
  return sortNumsA(nums).reverse();
};

// sort words in ascending order case sensitive
const sortWordsA = (words) => {
  return words.sort((a, b) => (a > b ? 1 : -1));
};

// sort words in descending order case insensitive
const sortWordsD = (words) => {
  return words.sort((a, b) =>
    a.toLowerCase() < b.toLowerCase()
      ? 1
      : a.toLowerCase() > b.toLowerCase()
      ? -1
      : 0
  );
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (products) => {
  return products.sort((a, b) =>
    a.name > b.name ? 1 : a.name < b.name ? -1 : 0
  );
};

// sort products by price, ascending order
const sortProductPriceA = (products) => {
  return products.sort((a, b) => a.price - b.price);
};

// sort products by price, descending order
const sortProductPriceD = (products) => {
  return products.sort((a, b) => b.price - a.price);
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (products) => {
  return products.sort((a, b) => {
    if (a.price === b.price) {
      return a.name > b.name ? 1 : -1;
    }
    return a.price - b.price;
  });
};

// sort catArt by designed by
const catArtSortDesginedByA = (art) => {
  return art.sort((a, b) =>
    a.designedBy > b.designedBy ? 1 : a.designedBy < b.designedBy ? -1 : 0
  );
};

// sort catArt by price
const catArtSortByPriceA = (art) => {
  let sorted = true;

  while (sorted) {
    sorted = false;

    for (let i = 0; i < art.length - 1; i++) {
      let newPrice1 = Number(art[i].price);
      let newPrice2 = Number(art[i + 1].price);

      if (isNaN(newPrice1)) {
        newPrice1 = Number(10 * art[i].price.slice(-1));
      }
      if (isNaN(newPrice2)) {
        newPrice2 = Number(10 * art[i + 1].price.slice(-1));
      }
      if (newPrice1 > newPrice2) {
        sorted = true;
        let temp = art[i + 1];
        art[i + 1] = art[i];
        art[i] = temp;
      }
    }
  }
  return art;
};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order

function mySortFunction(arr, ascending = true) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mySortFunction(arr.slice(0, mid));
  let right = mySortFunction(arr.slice(mid));
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  sortedArr.push(...left, ...right);
  return ascending ? [...sortedArr] : [...sortedArr].reverse();
}

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
