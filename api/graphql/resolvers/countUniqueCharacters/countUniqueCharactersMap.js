/**
 * It receives a ready-to-work pre-validated-text string
 */
function countUniqueCharactersMap(text) {
  const countMap = {};

  for (let i = 0; i < text.length; i++) {

    const currentChar = text[i];
    const value = countMap[currentChar]

    if (value) {
      countMap[currentChar] = value + 1;
      continue;
    }
    countMap[currentChar] = 1;
  }

  return countMap;
}

module.exports = { countUniqueCharactersMap };
