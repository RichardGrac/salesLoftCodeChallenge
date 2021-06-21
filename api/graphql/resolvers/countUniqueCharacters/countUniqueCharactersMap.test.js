const { countUniqueCharactersMap } = require('./countUniqueCharactersMap');

it.each([
  ["ricardo", { r: 2, i: 1, c: 1, a: 1, d: 1, o: 1 }],
  ["ana", { a: 2, n: 1 }],
])("counts correctly for each text", (input, expected) => {
  expect(countUniqueCharactersMap(input)).toEqual(expected);
});
