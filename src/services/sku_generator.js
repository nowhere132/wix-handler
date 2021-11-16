import { appendToFile, readFromFile } from '../utils/common.js';

const getIndex = (value, ranges) => {
  return ranges.findIndex((range) => range[0] <= value && value < range[1]);
};

const action = () => {
  const skuPrefix = process.env.SKU_PREFIX || 'xxxxxxxx';
  const symbols = ['B', 'A', 'S', 'SS', 'SSS'];
  const priceRanges = [
    [0, 500000],
    [500000, 1000000],
    [1000000, 2000000],
    [2000000, 3000000],
    [3000000, 5000000],
  ];
  const counters = Array(5).fill(0);

  const data = readFromFile();
  const prices = data.split('\n').map((rp) => +rp);

  const skus = prices.map((p) => {
    const index = getIndex(p, priceRanges);
    if (index < 0) {
      console.log('ERROR | getSymbol | value = ', p);
      return '';
    }

    // side-effect
    counters[index]++;

    return skuPrefix + '-' + symbols[index] + counters[index];
  });

  skus.forEach((sku) => appendToFile(sku + '\n'));
};

export default action;
