import { Loader } from './Loader'
import { render } from '@testing-library/react'

it("returns null if 'loading' prop is false", () => {
  const { queryByTestId } = render(<Loader />);
  expect(queryByTestId("loader")).toBeFalsy();
});

it("renders the <Loader />", () => {
  const { getByTestId } = render(<Loader loading />);
  expect(getByTestId("loader")).toBeTruthy();
});
