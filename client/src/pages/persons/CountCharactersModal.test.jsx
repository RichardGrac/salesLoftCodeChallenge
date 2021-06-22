import { fireEvent, render } from '@testing-library/react'
import { CountCharactersModal } from './CountCharactersModal'

import * as ApolloHooks from '@apollo/react-hooks'

let spyUseQuery = jest.spyOn(ApolloHooks, "useQuery");

jest.mock("./CountCharacterTable", () => ({
  CountCharacterTable: () => <div data-testid="table" />
}));

const mockData = { data: { countUniqueCharacters: [] } };
const mockHandleClose = jest.fn();

it("renders the Dialog", () => {
  spyUseQuery.mockReturnValue(mockData);

  const { getByTestId } = render(
    <CountCharactersModal
      isOpen
      texts={[]}
      handleClose={mockHandleClose}
    />
  );

  expect(getByTestId("count-characters-dialog")).toBeTruthy();
});

it("does not render the Dialog", () => {
  spyUseQuery.mockReturnValue(mockData);

  const { queryByTestId } = render(
    <CountCharactersModal
      isOpen={false}
      texts={[]}
      handleClose={mockHandleClose}
    />
  );

  expect(queryByTestId("count-characters-dialog")).toBeFalsy();
});

it("calls the onClose parent function", () => {
  spyUseQuery.mockReturnValue(mockData);
  const handleClose = jest.fn();

  const { getByTestId } = render(
    <CountCharactersModal
      isOpen
      texts={[]}
      handleClose={handleClose}
    />
  );
  fireEvent.click(getByTestId("ok-button"));

  expect(handleClose).toHaveBeenCalled();
});
