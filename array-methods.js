export function map(arr, callback) {

  const mappedArray = [];

  for(let i = 0; i < arr.length; i++) {
    mappedArray[i] = callback(arr[i]);
  }

  return mappedArray;
  
}
