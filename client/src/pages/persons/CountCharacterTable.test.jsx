import { render } from '@testing-library/react'
import { CountCharacterTable } from './CountCharacterTable'

it("returns null if not 'keyValuePairArray' is given", () => {
  const { queryByTestId } = render(
    <CountCharacterTable keyValuePairArray={null} />
  );
  expect(queryByTestId("count-character-table")).toBeFalsy();
});

it("returns null if 'array is empty'", () => {
  const { queryByTestId } = render(
    <CountCharacterTable keyValuePairArray={[]} />
  );
  expect(queryByTestId("count-character-table")).toBeFalsy();
});

it("renders the table", () => {
  const { getByTestId } = render(
    <CountCharacterTable
      keyValuePairArray={[
        { key: "A", value: 2 },
        { key: "N", value: 1 },
      ]}
    />
  );
  expect(getByTestId("count-character-table")).toBeTruthy();
});
