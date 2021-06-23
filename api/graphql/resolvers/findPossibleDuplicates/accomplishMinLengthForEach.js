const constants = require('./constants')

function accomplishMinLengthForEach(text1, text2) {
  const minLength = constants.MIN_LENGTH_FOR_VERIFICATION;

  return text1.length >= minLength && text2.length >= minLength;
}

module.exports = { accomplishMinLengthForEach };
