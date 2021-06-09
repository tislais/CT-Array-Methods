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
