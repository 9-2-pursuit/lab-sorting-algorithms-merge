const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// Merge cases variants for each specific case condition
const mergeNumbers = (left, right) => {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
};

const mergeCaseSensitiveWords = (left, right) => {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      //In this implementation, the merge function has been modified to compare the words
      // using the <= operator instead of the < operator.This is because the Unicode code
      // points of uppercase letters come before the code points of lowercase letters, so
      //using the < operator would not produce a case -sensitive sort.
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
};

const mergeCaseInsensitiveWords = (left, right) => {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0].toLowerCase() >= right[0].toLowerCase()) {
      ///OJO The lower case is nedeed here!
      //In this implementation, the merge function has been modified to compare the lowercase versions of the words using the >= operator instead of the < operator. This will sort the words in descending order case-insensitive. The sortWordsD function then sorts the array in descending order by calling reverse() on the result of execMerge().
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
};

const execMerge = (arr, mergeFunc) => {
  if (arr.length <= 1) return arr;

  const pivot = Math.floor(arr.length / 2);

  const left = execMerge(arr.slice(0, pivot), mergeFunc);
  const right = execMerge(arr.slice(pivot), mergeFunc);

  return mergeFunc(left, right);
};

const mergeProducts = (left, right) => {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0].name.toLowerCase() <= right[0].name.toLowerCase()) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
};

const mergeProductPriceAscending = (left, right) => {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0].price <= right[0].price) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
};

const mergeProductPriceDescending = (left, right) => {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0].price >= right[0].price) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
};

const mergeProductsByDesigned = (left, right) => {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0].designedBy.toLowerCase() <= right[0].designedBy.toLowerCase()) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
};

// sort numbers in ascending order
const sortNumsA = (arr) => {
  return execMerge(arr, mergeNumbers);
};

// sort numbers in descending order
const sortNumsD = (arr) => {
  return execMerge(arr, mergeNumbers).reverse();
};

// sort words in ascending order case sensitive
const sortWordsA = (arr) => {
  return execMerge(arr, mergeCaseSensitiveWords);
};

// sort words in descending order case insensitive
const sortWordsD = (arr) => {
  return execMerge(arr, mergeCaseInsensitiveWords);
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (arr) => {
  return execMerge(arr, mergeProducts);
};

// sort products by price, ascending order
const sortProductPriceA = (arr) => {
  return execMerge(arr, mergeProductPriceAscending);
};

// sort products by price, descending order
const sortProductPriceD = (arr) => {
  return execMerge(arr, mergeProductPriceDescending);
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (arr) => {
  let byPrice = sortProductPriceA(arr);
  return byPrice;
};

// sort catArt by designed by
const catArtSortDesginedByA = (arr) => {
  return execMerge(arr, mergeProductsByDesigned);
};

// sort catArt by price
const catArtSortByPriceA = (arr) => {
  return execMerge(arr, mergeProductPriceAscending);
};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort ==> O(n^2)
// or try to implement merge sort ==> O(n*logn)
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order

///Mi propia funcion
const mySortFunction = (arr) => {
  const type = typeof arr[0];

  if (type === "number") {
    return execMerge(arr, mergeNumbers);
  }

  if (type === "string") {
    return execMerge(arr, mergeCaseSensitiveWords);
  }
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
