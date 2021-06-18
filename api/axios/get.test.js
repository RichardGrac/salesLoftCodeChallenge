const axios = require("axios");

const get = require('./get')

const spyAxiosGet = jest.spyOn(axios, "get");

it("returns data fetched", async () => {
  spyAxiosGet.mockResolvedValueOnce({ data: "Some data returned" });
  await expect(get({})).resolves.toEqual("Some data returned");
});

it("throws an error", async () => {
  spyAxiosGet.mockRejectedValueOnce(new Error("An error ocurred while fetching"));
  await expect(get({})).rejects.toThrowError();
});
