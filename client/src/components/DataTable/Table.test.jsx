import React from "react";
import { ApolloError } from "apollo-client";
import { fireEvent, render } from '@testing-library/react'
import * as ApolloHooks from '@apollo/react-hooks'

import { Table } from './Table'

let spyUseQuery;

beforeAll(() => {
  // I don't want to pass all properties to the <Table /> component
  // in some tests. I'll disable 'PropTypes' errors.
  jest.spyOn(console, "error").mockImplementation();
  spyUseQuery = jest.spyOn(ApolloHooks, "useQuery");
})

const defaultProps = {
  columns: [{ id: "name", label: "Meal" }],
  currentPage: 0,
  defaultOrder: "asc",
  defaultOrderBy: "name",
  defaultRowsPerPage: 4,
  query: {},
  queryNodeName: "meals",
  rowsPerPageOptions: [4, 8, 12],
  selectedItems: [],
  setSelectedItems: jest.fn(),
  sortFieldMap: { name: "NAME" },
};

function renderIt(props) {
  const mergedProps = { ...defaultProps, ...props };
  return render(<Table {...mergedProps} />);
}

const mealsResponseMock = {
  data: {
    meals: {
      pageInfo: { totalCount: 5 },
      edges: [
        { id: "hamburgerId", name: "Hamburger 🍔" },
        { id: "tacoId", name: "Taco 🌮" },
        { id: "pizzaId", name: "Pizza 🍕" },
        { id: "hotDogId", name: "Hot Dog 🌭" },
      ],
    },
  },
};

it("renders a message while loading data", () => {
  spyUseQuery.mockReturnValueOnce({ loading: true });

  const { getByTestId } = render(<Table />);

  expect(getByTestId("loading-message")).toBeTruthy();
});

it("displays an error if something wrong happened with the request", () => {
  spyUseQuery.mockReturnValueOnce({
    error: new ApolloError({
      errorMessage: "GraphQL error: an error occurred"
    })
  });

  const { getByTestId } = render(<Table />);

  expect(getByTestId("error-message")).toBeTruthy();
});

it("renders the data table", () => {
  spyUseQuery.mockReturnValueOnce(mealsResponseMock);
  const { getByTestId, getAllByTestId } = renderIt();

  expect(getByTestId("data-table")).toBeTruthy();
  expect(getAllByTestId("table-row").length).toEqual(4);
});

it("selects all items", async () => {
  spyUseQuery.mockReturnValue(mealsResponseMock);
  const { getByTestId } = renderIt();

  const checkAllCheckbox = getByTestId("check-all-rows");

  fireEvent.click(checkAllCheckbox);

  expect(defaultProps.setSelectedItems).toHaveBeenCalledWith(
    mealsResponseMock.data.meals.edges,
  );
});

it("changes to the next Page", () => {
  spyUseQuery.mockReturnValue(mealsResponseMock);
  const { getByTitle } = renderIt();

  const nextPageBtn = getByTitle("Next page");
  fireEvent.click(nextPageBtn);

  expect(spyUseQuery).toHaveBeenLastCalledWith(defaultProps.query, {
    variables: {
      sorting: expect.anything(),
      pagination: { page: 2, size: expect.anything() },
    }
  });
});

it("sorts to the opposite order", () => {
  spyUseQuery.mockReturnValue(mealsResponseMock);
  const { getByTestId } = renderIt();

  const currentSortHeader = getByTestId(`sort-header-${defaultProps.defaultOrderBy}`);
  fireEvent.click(currentSortHeader);

  expect(spyUseQuery).toHaveBeenLastCalledWith(defaultProps.query, {
    variables: {
      sorting: { direction: "DESC", field: "NAME" },
      pagination: expect.anything(),
    }
  });
});
