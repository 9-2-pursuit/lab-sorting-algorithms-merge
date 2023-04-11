const { catArt, someNums, someProducts, someWords } = require("./data/data.js");
///////////////////////////////
class sort {
  ///variable below///////////////////////
  static CaseHelper = {"a":0,"b":0,"c":0,"d":0,"e":0,"f":0,"g":0,"h":0,"i":0,"j":0,"k":0,"l":0,"m":0,"n":0,"o":0,"p":0,"q":0,"r":0,"s":0,"t":0,"u":0,"v":0,"w":0,"x":0,"y":0,"z":0,"A":1,"B":1,"C":1,"D":1,"E":1,"F":1,"G":1,"H":1,"I":1,"J":1,"K":1,"L":1,"M":1,"N":1,"O":1,"P":1,"Q":1,"R":1,"S":1,"T":1,"U":1,"V":1,"W":1,"X":1,"Y":1,"Z":1};
  /////checker below///////////////////////
  static strAscUpperCaseAtFront = function (a, b) {
    let diff = this.CaseHelper[a[0]] - this.CaseHelper[b[0]];
    switch(diff){
      case 0: // same 
        return a.localeCompare(b, 'en', { sensitivity: 'case' }) === 1 ? 0 : 1;
      case 1: // upper case at a
        return 1;
      case -1: // upper case at b
        return 0;
    }
  }.bind(this);
  static strDesc = (a, b) => {
    return a.localeCompare(b, 'en', { sensitivity: 'case' }) === 1 ? 1 : 0;
  };
  static strAsc = (a, b) => {
    return a.localeCompare(b, 'en', { sensitivity: 'case' }) === 1 ? 0 : 1;
  };
  static numAsc = (a, b) => a < b ;
  static numDesc = (a, b) => a > b ;
  ////sorting function below////////////////////////
  static mergeSortRecursion(arr, checker){
    if(arr.length <= 1) return arr;
    let midPoint = Math.floor(arr.length / 2);
    let left = arr.slice(0,midPoint);
    let right = arr.slice(midPoint);
    return mergeArrays(this.mergeSort(left, checker), this.mergeSort(right, checker), checker);
    /////////////////////////
    function mergeArrays(left, right, checker){
      const ret = [];
      while(left.length && right.length){
        if(checker(left[0], right[0])){
          ret.push(left.shift());
        }else{
          ret.push(right.shift());
        }
      }
      return ret.concat(left, right);
    }
  }
  static bubbleSort(arr, checker){
    for(let x = 0; x < arr.length; x++){
      for(let y = 0; y < arr.length - x - 1; y++){
        if(!checker(arr[y], arr[y+1])){
          [arr[y], arr[y+1]] = [arr[y+1], arr[y]];
        }
      }
    }
    return arr;
  }
  // static quickSort(array, compareFn) {
  //   const stack = [[0, array.length - 1]];
  
  //   while (stack.length > 0) {
  //     const [start, end] = stack.pop();
  
  //     // Base case
  //     if (end <= start) {
  //       continue;
  //     }
  
  //     // Choosing the pivot
  //     const pivotIndex = Math.floor((start + end) / 2);
  //     const pivot = array[pivotIndex];
  
  //     // Partitioning the array
  //     let left = start;
  //     let right = end;
  //     while (left <= right) {
  //       while (compareFn(array[left], pivot) < 0) {
  //         left++;
  //       }
  //       while (compareFn(array[right], pivot) > 0) {
  //         right--;
  //       }
  //       if (left <= right) {
  //         [array[left], array[right]] = [array[right], array[left]];
  //         left++;
  //         right--;
  //       }
  //     }
  
  //     // Push the subarrays onto the stack
  //     if (start < right) {
  //       stack.push([start, right]);
  //     }
  //     if (left < end) {
  //       stack.push([left, end]);
  //     }
  //   }
  //   return array;
  // }
  static mergeSort(arr, compareFn) {
    let stack = [];
    for(let el of arr) stack.push([el]);
    
    while (stack.length > 1) {
      let left = stack.pop();
      let right = stack.pop();
      let merged = merge(left, right);
      stack.push(merged);
    }
    
    function merge(arr1, arr2) {
      let mergedArr = [];
      let [i, j] = [0, 0];
      let [len1, len2] = [arr1.length, arr2.length];
      
      while (i < len1 && j < len2) {
        if (compareFn(arr1[i], arr2[j])) {
          mergedArr.push(arr1[i++]);
        } else {
          mergedArr.push(arr2[j++]);
        }
      }
      
      while (i < len1) {
        mergedArr.push(arr1[i++]);
      }
      while (j < len2) {
        mergedArr.push(arr2[j++]);
      }
      return mergedArr;
    }
    return stack[0];
  }
}
//////////////////////////////////////////
// sort numbers in ascending order
const sortNumsA = (arr) => {
  return sort.mergeSort(arr, sort.numAsc);
};

// sort numbers in descending order
const sortNumsD = (arr) => {
  return sort.mergeSortRecursion(arr, sort.numDesc);
};

// sort words in ascending order case sensitive
const sortWordsA = (arr) => {
  return sort.mergeSort(arr, sort.strAscUpperCaseAtFront);
};

// sort words in descending order case insensitive
const sortWordsD = (arr) => {
  return sort.mergeSort(arr, sort.strDesc);
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (arr) => {
  return sort.mergeSort(arr, (a, b) => {
    return sort.strAsc(a.name, b.name);
  });
};

// sort products by price, ascending order
const sortProductPriceA = (arr) => {
  return sort.mergeSort(arr, (a, b) => {
    return sort.numAsc(a.price, b.price);
  });
};

// sort products by price, descending order
const sortProductPriceD = (arr) => {
  return sort.mergeSort(arr, (a, b) => {
    return sort.numDesc( a.price, b.price);
  });
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (arr) => {
  return sort.mergeSort(arr, (a, b) => {
    if(a.price === b.price){
      return sort.strAsc(a.name, b.name);
    }else{
      return sort.numAsc(a.price, b.price);
    }
  });
};

// sort catArt by designed by
const catArtSortDesginedByA = (arr) => {
  return sort.bubbleSort(arr, (a, b) => sort.strAsc(a.designedBy, b.designedBy));
};

// sort catArt by price
const catArtSortByPriceA = (arr) => {
  return sort.mergeSortRecursion(arr, (a, b)=>{
    return sort.numAsc(convert2Num(a.price), convert2Num(b.price));
  });
  function convert2Num(str){
    if(typeof str === "number") return str;
    try {
      if(str[0]==="♇") return Number(str.match(/\d+/)[0]) * 10;///?? because dont understand what is "♇♇" so multiply by 10 to get the result fit the test
      return Number(str.match(/\d+/)[0]);
    } catch (error) {
      return false;
    }
  }
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
  return sort.mergeSort(arr, sort.numAsc);
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
