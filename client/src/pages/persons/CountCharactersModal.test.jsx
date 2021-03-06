import { render } from '@testing-library/react'
import { CountCharactersContent, CountCharactersModal } from './CountCharactersModal'

import * as ApolloHooks from '@apollo/react-hooks'

let spyUseQuery = jest.spyOn(ApolloHooks, "useQuery");

jest.mock("../../components/InformativeModal", () => ({
  InformativeModal: () => <div data-testid="modal" />
}));

jest.mock("../../components/SimpleTable", () => ({
  SimpleTable: () => <div data-testid="table" />
}));

const mockData = { data: { countUniqueCharacters: [] } };
const mockHandleClose = jest.fn();

it("renders the Modal", () => {
  spyUseQuery.mockReturnValue(mockData);

  const { getByTestId } = render(
    <CountCharactersModal
      isOpen
      texts={[]}
      handleClose={mockHandleClose}
    />
  );

  expect(getByTestId("modal")).toBeTruthy();
});

it("does not render the Modal", () => {
  spyUseQuery.mockReturnValue(mockData);

  const { queryByTestId } = render(
    <CountCharactersModal
      isOpen={false}
      texts={[]}
      handleClose={mockHandleClose}
    />
  );

  expect(queryByTestId("modal")).toBeFalsy();
});

describe("CountCharactersContent tests", () => {
  it("returns null", () => {
    const { queryByTestId } = render(<CountCharactersContent data={null} />);

    expect(queryByTestId("simple-table")).toBeFalsy();
  });

  it("renders at least one simple table component", () => {
    const { queryByTestId } = render(
      <CountCharactersContent
        data={{
          countUniqueCharacters: [
            { text: "text", keyValuePair: [{ key: "key", value: "value"}] }
          ]
        }}
      />
    );

    expect(queryByTestId("simple-table")).toBeFalsy();
  });
})
