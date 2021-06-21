function cleanAndGetUpperCaseText(text) {
  const textWithNoSpaces = text.replace(/\s/g, "");
  const upperCaseText = textWithNoSpaces.toUpperCase();

  return upperCaseText;
}

module.exports = { cleanAndGetUpperCaseText };
