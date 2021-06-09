export function map(arr, callback) {
  const mappedArray = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i]) {
      mappedArray[i] = callback(arr[i]);
    } else {
      mappedArray[i] = arr[i];
    }
  }
  return mappedArray;
}

export function filter(arr, callback) {
  const filteredArray = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] && callback(arr[i])) {
      filteredArray[filteredArray.length] = arr[i];
    }
  }
  return filteredArray;
}
