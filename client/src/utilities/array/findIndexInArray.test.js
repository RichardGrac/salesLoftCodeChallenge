import { findIndexInArray } from './findIndexInArray'

it("finds the element that matches the passed id", () => {
  expect(findIndexInArray([{ id: 1 }, { id: 2 }], 1)).toEqual(0);
});

it("does not find the element that matches the passed id", () => {
  expect(findIndexInArray([{ id: 1 }, { id: 2 }], 3)).toEqual(-1);
});
