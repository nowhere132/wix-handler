import dotenv from 'dotenv';
dotenv.config();

import handleIdGenerator from './services/handle_id_generator.js';
import priceConverter from './services/price_converter.js';
import skuGenerator from './services/sku_generator.js';

const choices = {
  0: () => console.log('DO_NOTHING'),
  1: handleIdGenerator,
  2: priceConverter,
  3: skuGenerator,
};

const pickedChoice = parseInt(process.argv.slice(2)[0] || '0');
console.log('pickedChoice: ', pickedChoice);

choices[pickedChoice]();
