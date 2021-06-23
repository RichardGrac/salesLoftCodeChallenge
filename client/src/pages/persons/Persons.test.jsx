import { render } from '@testing-library/react'

import { handleClose, onHandleClick, PersonsPage } from './Persons'

jest.mock("../../components/DataTable", () => ({
  Table: () => <div data-testid="mock-table" />,
}));

jest.mock("./CountCharactersModal", () => ({
  CountCharactersModal: () => <div data-testid="modal" />,
}));

jest.mock("./PossibleDuplicatesModal", () => ({
  PossibleDuplicatesModal: () => <div data-testid="duplicates-modal" />,
}));

it("renders the persons page", () => {
  const { queryByTestId } = render(<PersonsPage />);
  expect(queryByTestId("persons-page")).toBeTruthy();
});

describe("handlers tests", () => {
  it("calls the onHandleClick function", () => {
    const selectedItems = [{ email: "email" }];
    const setTexts = jest.fn();
    const setIsOpen = jest.fn();

    onHandleClick(selectedItems, setTexts, setIsOpen)()

    expect(setTexts).toHaveBeenCalledWith(["email"]);
    expect(setIsOpen).toHaveBeenCalledWith(true);
  });

  it("calls the handleClose function", () => {
    const setIsOpen = jest.fn();

    handleClose(setIsOpen)();

    expect(setIsOpen).toHaveBeenCalledWith(false);
  });
})
