const mapPaginationToGQL = require('./mapPaginationToGQL')

it("maps a pagination object", () => {
  expect(mapPaginationToGQL({
    per_page: 20,
    current_page: 1,
    next_page: 2,
    prev_page: null,
    total_pages: 10,
    total_count: 200,
  })).toEqual({
    perPage: 20,
    currentPage: 1,
    nextPage: 2,
    prevPage: null,
    totalPages: 10,
    totalCount: 200,
  });
});
