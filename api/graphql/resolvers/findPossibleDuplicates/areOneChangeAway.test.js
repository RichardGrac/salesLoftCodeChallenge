const { areOneChangeAway } = require('./areOneChangeAway');

it("returns false for not a duplicate", () => {
  expect(areOneChangeAway("Ana", "Ricardo")).toEqual(false);
});

it("returns true for a possible duplicate", () => {
  expect(areOneChangeAway("Petter", "Potter")).toEqual(true);
});

it("returns true for a duplicate", () => {
  expect(areOneChangeAway("Ana", "Ana")).toEqual(true);
});
