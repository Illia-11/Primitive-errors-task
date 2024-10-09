'use strict';

// task 1
function getCapitalizeString(getString) {
  if (!getString || typeof getString !== 'string') {
    throw new TypeError('Type of data is incorrect! Enter a valid string!');
  }

  const getStringSplit = getString.split(' ');
  for (let i = 0; i < getStringSplit.length; i++) {
    getStringSplit[i] = getStringSplit[i][0].toUpperCase() + getStringSplit[i].slice(1);
  }

  return getStringSplit.join(' ');
}

console.log(getCapitalizeString('test string'));




// task 2
function getVowels(resultString) {
  if (!resultString || typeof resultString !== 'string') {
    throw new TypeError('Type of data is incorrect! Enter a valid string!');
  }

  let vowelCount = 0;
  const array = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < resultString.length; i++) {
    if (array.includes(resultString[i])) {
      vowelCount++;
    }
  }

  return vowelCount;
}

console.log(getVowels('test string'));
