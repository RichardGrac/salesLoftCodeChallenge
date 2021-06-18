const { getPersonsQuery } = require("./buildGetPersonsQuery");

describe("buildGetPersonsQuery", () => {
  const url = "MY_URL";

  it("applies default filter that retrieves pagination info", () => {
    expect(
      getPersonsQuery(url, undefined)
    ).toEqual(`${url}?include_paging_counts=true`);
  });

  it("applies pagination to the query", () => {
    expect(
      getPersonsQuery(url, { pagination: { size: 5, page: 1 } })
    ).toEqual(`${url}?include_paging_counts=true&per_page=5&page=1`);
  });

  it("applies sorting to the query", () => {
    expect(
      getPersonsQuery(url, { sorting: { field: "NAME", direction: "DESC" } })
    ).toEqual(`${url}?include_paging_counts=true&sort_by=name&sort_direction=DESC`);
  });
})
