import { map } from './array-methods.js';


function multiplyByThree(number) {
  return number * 3;
}

function addBeans(string) {
  return `${string} beans`;
}

describe('map', () => {
  it('multiplies each item of array by 3', () => {
    const arrayOne = [1, 2, 3, 4, 5];
    const actual = map(arrayOne, multiplyByThree);
    const expected = [3, 6, 9, 12, 15];
    expect(actual).toEqual(expected);
  });
  
  it('takes a string and adds beans', () => {
    const input = ['one', 'two', 'red', 'blue'];
    const actual = map(input, addBeans);
    const expected = ['one beans', 'two beans', 'red beans', 'blue beans'];
    expect(actual).toEqual(expected);
  });
});
