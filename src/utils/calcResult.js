const countItems = (arr) => {
  return arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
};

export const calcResult = (array) => {
  const counts = countItems(array);
  console.log(counts);
  let result = '';

  result += (counts['E'] || 0) > (counts['I'] || 0) ? 'E' : 'I';
  result += (counts['S'] || 0) > (counts['N'] || 0) ? 'S' : 'N';
  result += (counts['T'] || 0) > (counts['F'] || 0) ? 'T' : 'F';
  result += (counts['J'] || 0) > (counts['P'] || 0) ? 'J' : 'P';

  return result;
};
