import { appendToFile, loopFixedTimes, readFromFile } from '../utils/common.js';

const convert = (priceWithDots) => {
  const result = [...priceWithDots].reduce((res, c) => {
    return '0' <= c && c <= '9' ? res * 10 + (c - '0') : res;
  }, 0);
  return result;
};

const action = () => {
  const n = process.env.NUM_PRODUCTS || 0;
  const data = readFromFile();
  const sourcePrices = data.split('\n');
  const targetPrices = sourcePrices.map(convert);
  targetPrices.forEach((p) => appendToFile(p.toString() + '\n'));
};

export default action;
