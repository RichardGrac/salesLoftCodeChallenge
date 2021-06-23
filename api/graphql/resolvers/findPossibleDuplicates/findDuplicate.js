const { cleanAndGetUpperCaseText } = require('../countUniqueCharacters')
const { areTheSame } = require('./areTheSame')
const { accomplishMinLengthForEach } = require('./accomplishMinLengthForEach')
const { areOneChangeAway } = require('./areOneChangeAway')
const { areOneCharacterAway } = require('./areOneCharacterAway')

// There are four possible ways to find duplicates:
// 1. They are the same string with different casing or with extra spaces
// 2. They are likely one different character away (pale -> bale)
// 3. They are one extra character away (pale -> ple)
// 4. They are one missed character away (pales -> pale)
//
// The 3 last rules requires to accomplish the 'MIN_LENGTH_FOR_VERIFICATION'

function findDuplicate(text1, text2) {
  const cleanedText1 = cleanAndGetUpperCaseText(text1);
  const cleanedText2 = cleanAndGetUpperCaseText(text2);

  if (areTheSame(cleanedText1, cleanedText2)) {
    return true;
  }

  if (!accomplishMinLengthForEach(cleanedText1, cleanedText2)) {
    return false;
  }

  if (cleanedText1.length === cleanedText2.length) {
    return areOneChangeAway(cleanedText1, cleanedText2);
  }

  if (cleanedText1.length + 1 === cleanedText2.length) {
    return areOneCharacterAway(cleanedText1, cleanedText2);
  }

  if (cleanedText1.length - 1 === cleanedText2.length) {
    return areOneCharacterAway(cleanedText2, cleanedText1);
  }

  return false;
}

module.exports = { findDuplicate };
