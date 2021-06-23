const { isInputValid } = require('./isInputValid')
const { countUniqueCharactersMap } = require('./countUniqueCharactersMap')
const { cleanAndGetUpperCaseText } = require('./cleanAndGetUpperCaseText')
const { objectToArray, sortArrayOfObjects } = require("../../../helpers");

const countUniqueCharacters = (parent, { input: { texts } }) => {
  const results = countCharacters(texts);
  return buildSortedResponse(results);
}

function countCharacters(texts) {
  return texts.map(text => {
    if (!isInputValid(text)) {
      return { text, keyValuePair: null };
    }

    const cleanedText = cleanAndGetUpperCaseText(text);
    const countMap = countUniqueCharactersMap(cleanedText);

    return {
      text: cleanedText,
      keyValuePair: objectToArray(countMap),
    };
  });
}

function buildSortedResponse(results) {
  return results.map(({ text, keyValuePair }) => {
    return {
      text,
      keyValuePair: sortArrayOfObjects(keyValuePair, "value", "DESC"),
    }
  });
}

module.exports = countUniqueCharacters;
