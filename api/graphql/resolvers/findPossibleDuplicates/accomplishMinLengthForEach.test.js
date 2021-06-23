const { accomplishMinLengthForEach } = require('./accomplishMinLengthForEach')
const constants = require('./constants')

function generateString(plus = 0) {
  return [...new Array(constants.MIN_LENGTH_FOR_VERIFICATION + plus)]
    .map(() => "A")
    .join("");
}

it.each([
  [generateString(), generateString(1)]
])("returns true", (text1, text2) => {
  expect(accomplishMinLengthForEach(text1, text2)).toEqual(true);
});

it.each([
  [generateString(-1), generateString(-1)]
])("returns false", (text1, text2) => {
  expect(accomplishMinLengthForEach(text1, text2)).toEqual(false);
});
