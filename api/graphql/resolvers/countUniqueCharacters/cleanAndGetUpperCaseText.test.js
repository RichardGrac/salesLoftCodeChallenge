const { cleanAndGetUpperCaseText } = require('./cleanAndGetUpperCaseText')

it.each([
  ["ricardo", "RICARDO"],
  [" ana  ", "ANA"],
  [" %&/().  ", "%&/()."],
  ["  with_tabs  ", "WITH_TABS"],
  [`
  MULTIPle lIne 
  strInG
  `, "MULTIPLELINESTRING"],
])("cleans inputs", (input, expected) => {
  expect(cleanAndGetUpperCaseText(input)).toEqual(expected);
});
