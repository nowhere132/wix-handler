import fs from 'fs';
import { inputPath, outputPath } from './configs.js';

const loopFixedTimes = (x) => (f) => {
  if (x <= 0) return;
  f();
  loopFixedTimes(x - 1)(f);
};

const readFromFile = () => {
  try {
    const data = fs.readFileSync(inputPath);
    return data.toString();
  } catch (err) {
    console.log('readFromFile error: ', err.message);
  }
};

const writeToFile = (content) => {
  try {
    const data = fs.writeFileSync(outputPath, content);
  } catch (err) {
    console.log('writeToFile error: ', err.message);
  }
};

const appendToFile = (content) => {
  try {
    const data = fs.writeFileSync(
      outputPath,
      content,
      { flag: 'a+' },
      (err) => {}
    );
  } catch (err) {
    console.log('appendToFile error: ', err.message);
  }
};

export { loopFixedTimes, readFromFile, writeToFile, appendToFile };
