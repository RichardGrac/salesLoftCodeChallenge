const { areTheSame } = require('./areTheSame')

it("returns true for same texts", () => {
  expect(areTheSame("Hola", "Hola")).toEqual(true);
});

it("returns false for different texts", () => {
  expect(areTheSame("Hi", "Hola")).toEqual(false);
});
