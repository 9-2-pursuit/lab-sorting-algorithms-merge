const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const midpoint = Math.floor(array.length / 2);
  let firstHalfArr = array.slice(0, midpoint);
  let secondHalfArr = array.slice(midpoint);

  let sortedFirstHalfArr = sortNumsA(firstHalfArr);
  let sortedSecondHalfArr = sortNumsA(secondHalfArr);

  let sortedArray = [];

  while (sortedFirstHalfArr.length && sortedSecondHalfArr.length) {
    let minValue =
      sortedFirstHalfArr[0] < sortedSecondHalfArr[0]
        ? sortedFirstHalfArr.shift()
        : sortedSecondHalfArr.shift();

    sortedArray.push(minValue);
  }

  sortedArray = [...sortedArray, ...sortedFirstHalfArr, ...sortedSecondHalfArr];

  return sortedArray;
};

// sort numbers in descending order
const sortNumsD = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const midpoint = Math.floor(array.length / 2);
  let firstHalfArr = array.slice(0, midpoint);
  let secondHalfArr = array.slice(midpoint);

  let sortedFirstHalfArr = sortNumsA(firstHalfArr);
  let sortedSecondHalfArr = sortNumsA(secondHalfArr);

  let sortedArray = [];

  while (sortedFirstHalfArr.length && sortedSecondHalfArr.length) {
    let maxValue =
      sortedFirstHalfArr[sortedFirstHalfArr.length - 1] >
      sortedSecondHalfArr[sortedSecondHalfArr.length - 1]
        ? sortedFirstHalfArr.pop()
        : sortedSecondHalfArr.pop();

    sortedArray.push(maxValue);
  }

  sortedArray = [...sortedArray, ...sortedFirstHalfArr, ...sortedSecondHalfArr];

  return sortedArray;
};

// sort words in ascending order case sensitive
const sortWordsA = (array) => {
  return array.sort();
};

// sort words in descending order case insensitive
const sortWordsD = (array) => {
  return array.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()));
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (array) => {
  return array.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );
};

// sort products by price, ascending order
const sortProductPriceA = (array) => {
  return array.sort((a, b) => (a.price < b.price ? -1 : 1));
};

// sort products by price, descending order
const sortProductPriceD = (array) => {
  return array.sort((a, b) => (a.price > b.price ? -1 : 1));
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (array) => {
  return array.sort((a, b) => {
    return a.price - b.price || a.name.localeCompare(b.name);
  });
};

// sort catArt by designed by
const catArtSortDesginedByA = (array) => {
  return array.sort((a, b) => a.designedBy.localeCompare(b.designedBy));
};

// sort catArt by price
const catArtSortByPriceA = (array) => {
  return array.sort((a, b) => {
    let firstItemPrice =
      typeof a.price === "string"
        ? a.price.includes("♇♇")
          ? Number(a.price.replace("♇♇", "")) * 10
          : Number(a.price)
        : a.price;

    let secondItemPrice =
      typeof b.price === "string"
        ? b.price.includes("♇♇")
          ? Number(b.price.replace("♇♇", "")) * 10
          : Number(b.price)
        : b.price;

    return firstItemPrice < secondItemPrice ? -1 : 1;
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
const mySortFunction = (array, direction = "asc") => {
  if (direction === "asc") {
    return array.sort((a, b) => {
      return a < b ? -1 : 1;
    });
  } else if (direction === "desc") {
    return a > b ? -1 : 1;
  } else {
    return array;
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
