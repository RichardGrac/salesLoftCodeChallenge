function areOneCharacterAway(text1, text2) {
  let index1 = 0;
  let index2 = 0;

  while (index1 < text1.length && index2 < text2.length) {
    const currentCharText1 = text1[index1];
    const currentCharText2 = text2[index2];

    // They are in line
    if (currentCharText1 === currentCharText2) {
      index1++;
      index2++;
      continue;
    }

    // We found a miss of a character, let's give it an opportunity
    if (index1 === index2) {
      index2++;
      continue;
    }

    // They used their unique opportunity, we are missing more than 1 character
    // this is possible not a duplicate
    return false;
  }

  return true;
}

module.exports = { areOneCharacterAway }
