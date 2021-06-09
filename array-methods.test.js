/* eslint-disable no-sparse-arrays */
import { map, filter } from './array-methods.js';


function multiplyByThree(number) {
  return number * 3;
}

function addBeans(string) {
  return `${string} beans`;
}

function evenNumbers(number) {
  return number % 2 === 0;
}

const arrayOne = [1, 2,, 3, 4, 5];

describe('map', () => {
  it('multiplies each item of array by 3', () => {
    const actual = map(arrayOne, multiplyByThree);
    const expected = [3, 6,, 9, 12, 15];
    expect(actual).toEqual(expected);
  });
  
  it('takes an array and adds beans to each index', () => {
    const input = ['one', 'two',, 'red', 'blue'];
    const actual = map(input, addBeans);
    const expected = ['one beans', 'two beans',, 'red beans', 'blue beans'];
    expect(actual).toEqual(expected);
  });
});

describe('filter', () => {
  it('creates an array of only even numbers', () => {
    const actual = filter(arrayOne, evenNumbers);
    const expected = [2, 4];
    expect(actual).toEqual(expected);
  });
});
