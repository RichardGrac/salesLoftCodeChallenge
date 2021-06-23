import { fireEvent, render } from '@testing-library/react'
import { InformativeModal } from './InformativeModal'

// Don't want to test beyond boundaries
jest.mock("../Loader", () => ({
  Loader: () => <div />,
}))

jest.mock("../ErrorComponent", () => ({
  ErrorComponent: () => <div />,
}))

it("calls the onClose parent function", () => {
  const handleClose = jest.fn();

  const { getByTestId } = render(
    <InformativeModal
      handleClose={handleClose}
      isOpen
    />
  );
  fireEvent.click(getByTestId("ok-button"));

  expect(handleClose).toHaveBeenCalled();
});

it("provides a title and a description", () => {
  const { getByTestId } = render(
    <InformativeModal
      handleClose={jest.fn()}
      isOpen
      title="A title"
      description="A description"
    />
  );

  expect(getByTestId("title")).toBeTruthy();
  expect(getByTestId("description")).toBeTruthy();
});
