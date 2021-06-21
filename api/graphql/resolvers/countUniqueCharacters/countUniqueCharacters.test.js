const countUniqueCharacters = require("./countUniqueCharacters");

it.each([
  [
    ["garcia"],
    [
      {
        text: "GARCIA",
        keyValuePair: [
          { key: "A", value: 2 },
          { key: "G", value: 1 },
          { key: "R", value: 1 },
          { key: "C", value: 1 },
          { key: "I", value: 1 },
        ],
      },
    ],
  ],
  [
    ["  ana  "],
    [
      {
        text: "ANA",
        keyValuePair: [
          { key: "A", value: 2 },
          { key: "N", value: 1 },
        ],
      },
    ],
  ],
  [
    [
      `
      john
      smith
      `,
    ],
    [
      {
        text: "JOHNSMITH",
        keyValuePair: [
          { key: "H", value: 2 },
          { key: "J", value: 1 },
          { key: "O", value: 1 },
          { key: "N", value: 1 },
          { key: "S", value: 1 },
          { key: "M", value: 1 },
          { key: "I", value: 1 },
          { key: "T", value: 1 },
        ],
      },
    ],
  ],
  [
    [null],
    [
      {
        text: null,
        keyValuePair: null,
      },
    ],
  ],
  [
    ["   "],
    [
      {
        text: "   ",
        keyValuePair: null,
      },
    ],
  ],
  [
    ["john", "smith"],
    [
      {
        text: "JOHN",
        keyValuePair: [
          { key: "J", value: 1 },
          { key: "O", value: 1 },
          { key: "H", value: 1 },
          { key: "N", value: 1 },
        ],
      },
      {
        text: "SMITH",
        keyValuePair: [
          { key: "S", value: 1 },
          { key: "M", value: 1 },
          { key: "I", value: 1 },
          { key: "T", value: 1 },
          { key: "H", value: 1 },
        ],
      },
    ],
  ],
])("counts unique characters", (texts, expected) => {
  expect(countUniqueCharacters(null, { input: { texts } })).toEqual(expected);
});
