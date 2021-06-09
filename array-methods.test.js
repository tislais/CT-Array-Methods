/* eslint-disable no-sparse-arrays */
import { map, filter, findIndex, reduce } from './array-methods.js';


function multiplyByThree(number) {
  return number * 3;
}

function addBeans(string) {
  return `${string} beans`;
}

function removeBeans(string) {
  return string != 'beans';
}

function evenNumbers(number) {
  return number % 2 === 0;
}

const arrayOne = [1,, 2, 3, 4, 5];

describe('map', () => {
  it('multiplies each item of array by 3', () => {
    const actual = map(arrayOne, multiplyByThree);
    const expected = [3,, 6, 9, 12, 15];
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
  
  it('creates an array of strings that arent beans', () => {
    const beanArray = ['brains', 'beans', 'beans',, 'brains', 'braiiiinssss', 'beans'];
    const actual = filter(beanArray, removeBeans);
    const expected = ['brains', 'brains', 'braiiiinssss'];
    expect(actual).toEqual(expected);
  });
});

describe('find index', () => {
  it('takes an array of numbers and returns the index of the first item who is divisble by 2.', () => {
    const actual = findIndex(arrayOne, evenNumbers);
    const expected = 2;
    expect(actual).toEqual(expected);
  });

  it('takes an array of numbers and strings and returns the index of the first item who is divisible by 2.', () => {
    const mixedArray = [1,, 'two', 3, 4];
    const actual = findIndex(mixedArray, evenNumbers);
    const expected = 4;
    expect(actual).toEqual(expected);
  });

  it('takes an array of numbers and strings and returns -1 if no item is divisible by 2', () => {
    const mixedArray = [1,, 'two', 3, 'four'];
    const actual = findIndex(mixedArray, evenNumbers);
    const expected = -1;
    expect(actual).toEqual(expected);
  });
});

describe('reduce', () => {
  it('does something', () => {
    const actual = reduce(arrayOne, (accumulator, item) => accumulator += item);
    const expected = 15;
    expect(actual).toEqual(expected);
  });
});
