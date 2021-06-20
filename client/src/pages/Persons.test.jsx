import { render } from '@testing-library/react'

import { PersonsPage } from './Persons'

jest.mock("../components/DataTable", () => ({
  Table: () => <div data-testid="mock-table" />,
}));

it("renders the persons page", () => {
  const { queryByTestId } = render(<PersonsPage />);

  expect(queryByTestId("persons-page")).toBeTruthy();
});
