const { objectToArray } = require('./objectToArray')

it.each([
  [
    { key: "value", anotherKey: "anotherValue" },
    [{ key: "key", value: "value" }, { key: "anotherKey", value: "anotherValue" }],
  ],
  [
    { propertyOne: 1, propertyTwo: 2 },
    [{ key: "propertyOne", value: 1 }, { key: "propertyTwo", value: 2 }],
  ],
  [
    {},
    [],
  ],
  [
    null,
    [],
  ],
  [
    undefined,
    [],
  ],
  [
    "a string",
    [],
  ],
  [
    123,
    [],
  ],
])("converts %s to %s properly", (input, expected) => {
  expect(objectToArray(input)).toEqual(expected);
})
