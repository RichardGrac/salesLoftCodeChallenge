const { findDuplicate } = require('./findDuplicate')

const findPossibleDuplicates = (parent, { input: { texts }}) => {
  if (texts.length < 2) {
    return [];
  }

  return getPossibleDuplicates(texts);
}

function getPossibleDuplicates(texts) {
  const possibleDuplicates = [];

  for (let i = 0; i < texts.length - 1; i++) {
    for (let j = i + 1; j < texts.length; j++) {
      const text1 = texts[i];
      const text2 = texts[j];

      if (findDuplicate(text1, text2)) {
        possibleDuplicates.push({ source: text1, duplicate: text2 });
      }
    }
  }

  return possibleDuplicates;
}

module.exports = findPossibleDuplicates;
