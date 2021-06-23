const { areOneCharacterAway } = require('./areOneCharacterAway')

it("returns true for a possible duplicate", () => {
  expect(areOneCharacterAway("ricardo@gmail.com", "richardo@gmail.com")).toEqual(true);
});

it("returns true for same texts", () => {
  expect(areOneCharacterAway("ricardo@gmail.com", "ricardo@gmail.com")).toEqual(true);
});

it("returns false if they are different texts", () => {
  expect(areOneCharacterAway("ricardo@gmail.com", "juan@gmail.com")).toEqual(false);
});
