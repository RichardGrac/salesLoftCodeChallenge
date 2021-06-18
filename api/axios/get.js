const axios = require("axios");
const { ApolloError } = require('apollo-server')

const { API_KEY } = require("../config/variables");

async function get({ url }) {
  try {
    const response = await axios.get(url, {
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (e) {
    throw new ApolloError(`Error fetching data from ${url}, error: ${e}`);
  }
}

module.exports = get;
