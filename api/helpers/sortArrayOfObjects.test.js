const { sortArrayOfObjects } = require('./sortArrayOfObjects')

it.each([
  [
    [{ id: 10 }, { id: 15 }, { id: 1 }, { id: 2 }, { id: 100 }],
    "id",
    undefined,
    [{ id: 1 }, { id: 2 }, { id: 10 }, { id: 15 }, { id: 100 }],
  ],
  [
    [{ name: "Ana" }, { name: "Ricardo" }, { name: "Eddie" }],
    "name",
    "DESC",
    [{ name: "Ricardo" }, { name: "Eddie" }, { name: "Ana" }],
  ],
])("sorts correctly", (array, property, order, expected) => {
  expect(sortArrayOfObjects(array, property, order)).toEqual(expected);
})

it.each([
  [null],
  [undefined],
  [[]],
  [{}],
  [1],
  ["1"],
  [new Error()],
])("returns null", (input) => {
  expect(sortArrayOfObjects(input)).toEqual(null)
})
