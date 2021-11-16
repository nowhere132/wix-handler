import { v4 as uuid } from 'uuid';
import { loopFixedTimes, appendToFile } from '../utils/common.js';

const f = () => appendToFile('product_' + uuid() + '\n');

const action = () => {
  const n = process.env.NUM_PRODUCTS || 0;
  loopFixedTimes(n)(f);
};

export default action;
