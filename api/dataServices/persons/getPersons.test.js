const axios = require('../../axios')
const build = require('./buildGetPersonsQuery')
const getPersons = require('./getPersons')

jest
  .spyOn(build, "getPersonsQuery")
  .mockReturnValue("undefined");

const spyAxiosGet = jest.spyOn(axios, "get");

it("calls the right functions and returns with built data", async () => {
  spyAxiosGet.mockResolvedValueOnce({
    metadata: {
      paging: {},
    },
    data: [],
  });
  await expect(getPersons()).resolves.toEqual({
    edges: [],
    pageInfo: expect.anything(),
  });
});
