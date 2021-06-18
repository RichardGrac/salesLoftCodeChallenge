const snakeCase = require("lodash/snakeCase");

function applyFilters(query) {
  query = `${query}?include_paging_counts=true`;

  return query;
}

function applyPagination(query, pagination = {}) {
  if (pagination.size) {
    query += `&per_page=${pagination.size}`;
  }

  if (pagination.page) {
    query += `&page=${pagination.page}`;
  }

  return query;
}

function applySorting(query, sorting = {}) {
  if (sorting.field) {
    query += `&sort_by=${snakeCase(sorting.field)}`;
  }

  if (sorting.direction) {
    query += `&sort_direction=${sorting.direction}`;
  }

  return query;
}

function getPersonsQuery(url, args = {}) {
  let query = url;

  query = applyFilters(query);
  query = applyPagination(query, args.pagination);
  query = applySorting(query, args.sorting);

  return query;
}

module.exports = { getPersonsQuery };
