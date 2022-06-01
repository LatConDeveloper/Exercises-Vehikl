/**
 * You can use the bigint type and BigInt global object to support numbers below
 * Number.MIN_SAFE_INTEGER and above NUMBER.MAX_SAFE_INTEGER.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 */

//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const NUM_BASE = 2;
export const square = (position) => {
  if ( 0 >= position || position >=65  ) {
    throw new Error('square must be between 1 and 64');
  }

  return BigInt(Math.pow(NUM_BASE, (position-1)));
};

export const total = () => {
  throw new Error('Remove this statement and implement this function');
};
