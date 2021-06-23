import { render } from '@testing-library/react'

import { SimpleTable } from './SimpleTable'

it("renders the Simple Table component", () => {
  const { getByTestId } = render(
    <SimpleTable
      headers={["Name"]}
      columns={[
        ["Ricardo"],
        ["Daniel"],
      ]}
    />
  );
  expect(getByTestId("simple-table")).toBeTruthy();
});
