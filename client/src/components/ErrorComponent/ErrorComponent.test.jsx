import { render } from '@testing-library/react'
import { ErrorComponent } from './ErrorComponent'

jest.mock("../../utilities", () => ({
  cleanGraphQLError: jest.fn()
}))

it("returns null if no error is given", () => {
  const { queryByTestId } = render(<ErrorComponent />);
  expect(queryByTestId("error-component")).toBeFalsy();
});

it("renders the <ErrorComponent />", () => {
  const { getByTestId } = render(<ErrorComponent error={{}} />);
  expect(getByTestId("error-component")).toBeTruthy();
});
