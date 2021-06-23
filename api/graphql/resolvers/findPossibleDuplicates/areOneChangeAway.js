function areOneChangeAway(text1, text2) {
  let foundDifference = false;

  for (let i = 0; i < text1.length; i++) {
    const currentCharText1 = text1[i];
    const currentCharText2 = text2[i];

    // They are in line
    if (currentCharText1 === currentCharText2) {
      continue;
    }

    // More than one change away, that's possible not a duplicate
    if (foundDifference) {
      return false;
    }

    // We trigger our unique opportunity of being one change away
    foundDifference = true;
  }

  // They are indeed a possible duplicate with only one change away
  return true;
}

module.exports = { areOneChangeAway }
