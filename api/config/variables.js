module.exports = {
  API_KEY: process.env.API_KEY || "",
  PEOPLE_URL: process.env.PEOPLE_URL || "https://api.salesloft.com/v2/people.json?include_paging_counts=true",
  PORT: process.env.PORT || 5001,
}
