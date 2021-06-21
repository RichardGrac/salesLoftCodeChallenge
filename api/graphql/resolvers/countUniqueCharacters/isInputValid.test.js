const { isInputValid } = require('./isInputValid')

it.each([
  [""],
  [null],
  [undefined],
  ["    "],
  [`  
  `],
])("returns false for %s (invalid input)", (input) => {
  expect(isInputValid(input)).toEqual(false);
});

it.each([
  ["Ricardo Garcia"],
  [" Ariana "],
  [" J. o. h. n. "],
  [`
    Kim  
  `],
])("returns true for %s (valid input)", (input) => {
  expect(isInputValid(input)).toEqual(true);
});
