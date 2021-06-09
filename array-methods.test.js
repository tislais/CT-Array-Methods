import { map } from './array-methods.js';

const arrayOne = [1, 2, 3, 4, 5];

function multiplyByThree(number) {
  return number * 3;
}

describe('map', () => {
  it('multiplies each item of array by 3', () => {
    const actual = map(arrayOne, multiplyByThree);
    const expected = [3, 6, 9, 12, 15];
    expect(actual).toEqual(expected);
  });
});
