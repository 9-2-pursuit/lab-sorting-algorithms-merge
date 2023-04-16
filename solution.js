const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (someNums) => {
  return someNums.sort((a, b) => a - b);
};

// sort numbers in descending order
const sortNumsD = () => {
  return someNums.sort((a, b) => b - a);
};

// sort words in ascending order case sensitive
const sortWordsA = (someWords) => {
  return someWords.sort((a, b) => (a > b ? 1 : -1));
};

// sort words in descending order case insensitive
const sortWordsD = () => {
  return someWords.sort((a, b) =>
    a.toUpperCase() < b.toUpperCase()
      ? 1
      : a.toUpperCase() > b.toUpperCase()
      ? -1
      : 0
  );
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = () => {
  return someProducts.sort((a, b) => (a.name > b.name ? 1 : -1));
};

// sort products by price, ascending order
const sortProductPriceA = () => {
  return someProducts.sort((a, b) => a.price - b.price);
};

// sort products by price, descending order
const sortProductPriceD = () => {
  return someProducts.sort((a, b) => b.price - a.price);
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = () => {
  let secondproduct = someProducts.sort((a, b) => a.price - b.price);

  return secondproduct.sort((a, b) => a.name - b.name);
};

// sort catArt by designed by
const catArtSortDesginedByA = () => {
  return catArt.sort((a, b) =>
    a.designedBy > b.designedBy ? 1 : a.designedBy < b.designedBy ? -1 : 0
  );
};

// sort catArt by price
const catArtSortByPriceA = (catArt) => {
  // let priceArr = catArt.sort((a, b) => (a.price - b.price));

  // let arr = []
  // return catArt.map((a) => {
  //     while (typeof a.price === "number") {
  //      return a.price;
  //     }
  //     return a.price.replace(/[^a-zA-Z0-9 ]/g);

  //     }
  //   );

  let sorted = true;

  while (sorted) {
    sorted = false;

    for (let i = 0; i < catArt.length - 1; i++) {
      let newPrice1 = Number(catArt[i].price);
      let newPrice2 = Number(catArt[i + 1].price);

      if (isNaN(newPrice1)) {
        newPrice1 = Number(10 * catArt[i].price.slice(-1));
      }
      if (isNaN(newPrice2)) {
        newPrice2 = Number(10 * catArt[i + 1].price.slice(-1));
      }
      if (newPrice1 > newPrice2) {
        sorted = true;
        let temp = catArt[i + 1];
        catArt[i + 1] = catArt[i];
        catArt[i] = temp;
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
  
  
  let sortedArr = [] // the sorted items will go here

  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  
  let left = mySortFunction(arr.slice(0, mid))
  let right = mySortFunction(arr.slice(mid))
  

  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right]


  
};

function mergeSort(arr) {
  // Base case
  
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
  mergeSort,
};
