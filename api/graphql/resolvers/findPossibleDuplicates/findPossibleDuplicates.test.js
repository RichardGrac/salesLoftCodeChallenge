const findPossibleDuplicates = require('./findPossibleDuplicates')

it.each([
  [
    // differences in spaces and casing:
    ["ricardod_gn@hotmail.com", "RIcardOD_GN@hotmail.com  "],
    [ { source: "ricardod_gn@hotmail.com", duplicate: "RIcardOD_GN@hotmail.com  " }],
  ],
  [
    // differences in one missing letter
    ["ricardod_gn@hotmail.com", "ricardo_gn@hotmail.com"],
    [ { source: "ricardod_gn@hotmail.com", duplicate: "ricardo_gn@hotmail.com" }],
  ],
  [
    // differences in one extra letter
    ["ricardod_gn@hotmail.com", "ricardod_gn@hotmail.com1"],
    [ { source: "ricardod_gn@hotmail.com", duplicate: "ricardod_gn@hotmail.com1" }],
  ],
  [
    // differences in one different letter
    ["ricardod_gn@hotmail.com", "ricardox_gn@hotmail.com"],
    [ { source: "ricardod_gn@hotmail.com", duplicate: "ricardox_gn@hotmail.com" }],
  ],
  [
    // multiple duplicates
    [
      "ricardod_gn@hotmail.com",
      "RIcardOD_GN@hotmail.com  ",
      "ricardod_gn@hotmail.com1",
      "ricardo_gn@hotmail.com",
      "ricardox_gn@hotmail.com",
    ],
    [
      {
        source: "ricardod_gn@hotmail.com",
        duplicate: "RIcardOD_GN@hotmail.com  ",
      },
      {
        source: "ricardod_gn@hotmail.com",
        duplicate: "ricardod_gn@hotmail.com1",
      },
      {
        source: "ricardod_gn@hotmail.com",
        duplicate: "ricardo_gn@hotmail.com",
      },
      {
        source: "ricardod_gn@hotmail.com",
        duplicate: "ricardox_gn@hotmail.com",
      },
      {
        source: "RIcardOD_GN@hotmail.com  ",
        duplicate: "ricardod_gn@hotmail.com1",
      },
      {
        source: "RIcardOD_GN@hotmail.com  ",
        duplicate: "ricardo_gn@hotmail.com",
      },
      {
        source: "RIcardOD_GN@hotmail.com  ",
        duplicate: "ricardox_gn@hotmail.com",
      },
      // Next does not apply since one has 1 extra letter
      // and the other has minus 1 (differences in 2 letters)
      // {
      //   source: "ricardod_gn@hotmail.com1",
      //   duplicate: "ricardo_gn@hotmail.com",
      // },
      // Next does not apply since one has 1 extra letter
      // and the other has one different letter (differences in 2 letters)
      // {
      //   source: "ricardod_gn@hotmail.com1",
      //   duplicate: "ricardox_gn@hotmail.com",
      // },
      {
        source: "ricardo_gn@hotmail.com",
        duplicate: "ricardox_gn@hotmail.com",
      },
    ],
  ],
])("returns some possible duplicates", (texts, expected) => {
  expect(
    findPossibleDuplicates(null, { input: { texts } })
  ).toEqual(expected);
});

it.each([
  [[]],
  [["one"]],
  [["Ricardo", "Eddie", "SalesLoft"]],
])("returns empty array for no duplicates", (texts) => {
  expect(
    findPossibleDuplicates(null, { input: { texts } })
  ).toEqual([]);
});
