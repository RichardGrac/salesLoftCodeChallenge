function mapPaginationToGQL({
  per_page,
  current_page,
  next_page,
  prev_page,
  total_pages,
  total_count,
}) {
  return {
    perPage: per_page,
    currentPage: current_page,
    nextPage: next_page,
    prevPage: prev_page,
    totalPages: total_pages,
    totalCount: total_count,
  }
}

module.exports = mapPaginationToGQL;
