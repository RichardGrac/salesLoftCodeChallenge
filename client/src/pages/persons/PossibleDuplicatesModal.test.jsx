import { render } from '@testing-library/react'
import { PossibleDuplicatesContent, PossibleDuplicatesModal } from './PossibleDuplicatesModal'

import * as ApolloHooks from '@apollo/react-hooks'

let spyUseQuery = jest.spyOn(ApolloHooks, "useQuery");

jest.mock("../../components/InformativeModal", () => ({
  InformativeModal: () => <div data-testid="modal" />
}));

jest.mock("../../components/SimpleTable", () => ({
  SimpleTable: () => <div data-testid="simple-table" />
}));

const mockData = { data: { findPossibleDuplicates: [] } };
const mockHandleClose = jest.fn();

it("renders the Modal", () => {
  spyUseQuery.mockReturnValue(mockData);

  const { getByTestId } = render(
    <PossibleDuplicatesModal
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
    <PossibleDuplicatesModal
      isOpen={false}
      texts={[]}
      handleClose={mockHandleClose}
    />
  );

  expect(queryByTestId("modal")).toBeFalsy();
});

describe("PossibleDuplicatesContent tests", () => {
  it("returns null", () => {
    const { queryByTestId } = render(<PossibleDuplicatesContent data={null} />);

    expect(queryByTestId("no-duplicates")).toBeFalsy();
    expect(queryByTestId("simple-table")).toBeFalsy();
  });

  it("returns info message when no duplicates were found", () => {
    const { queryByTestId } = render(
      <PossibleDuplicatesContent data={{ findPossibleDuplicates: [] }} />
    );

    expect(queryByTestId("no-duplicates")).toBeTruthy();
    expect(queryByTestId("simple-table")).toBeFalsy();
  });

  it("renders the simple table component", () => {
    const { queryByTestId } = render(
      <PossibleDuplicatesContent data={{ findPossibleDuplicates: [{}] }} />
    );

    expect(queryByTestId("no-duplicates")).toBeFalsy();
    expect(queryByTestId("simple-table")).toBeTruthy();
  });
})
