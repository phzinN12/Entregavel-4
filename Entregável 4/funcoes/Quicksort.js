function quicksort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quicksort(left), pivot, ...quicksort(right)];
}

const arrayToSort = [3, 6, 8, 10, 1, 2, 1];

console.log("Array ordenado:", quicksort(arrayToSort));


module.exports = quicksort;