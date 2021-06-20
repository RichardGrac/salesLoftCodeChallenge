import { removeByIndex } from './arrayRemoveByIndex'

it("removes an item by index", () => {
  expect(removeByIndex([1, 2, 3], 1)).toEqual([1, 3]);
});

it("does not remove anything if index does not exist", () => {
  expect(removeByIndex([1, 2, 3], 3)).toEqual([1, 2, 3]);
});
