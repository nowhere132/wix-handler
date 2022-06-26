import { appendToFile, readFromFile } from '../utils/common.js';

const action = () => {
  const n = process.env.NUM_PRODUCTS || 0;

  const sourceDescriptions = readFromFile().split('\n');
  console.assert(sourceDescriptions.length === 4 * n);

  const targetDescriptions = Array.from({ length: n }, (_) => '');
  console.log('$ DEBUG:', targetDescriptions.length, '->', targetDescriptions);
  for (let i = 0; i < 3 * n; i += 1) {
    if (i % 3 === 1) continue;
    const prefix = '<p>';
    const suffix = i % 3 === 0 ? '</p>' : '</p><p>&nbsp;</p>';
    // console.log('$ DEBUG:', i, '->', i / 3, prefix, sourceDescriptions[i], suffix);
    targetDescriptions[Math.floor(i / 3)] += prefix + sourceDescriptions[i] + suffix;
  }
  for (let i = 3 * n; i < 4 * n; i += 1) {
    const prefix = '<p>';
    const suffix = '</p>';
    targetDescriptions[i - 3 * n] += prefix + sourceDescriptions[i] + suffix;
  }

  targetDescriptions.forEach((e) => appendToFile(e + '\n'));
};

export default action;
