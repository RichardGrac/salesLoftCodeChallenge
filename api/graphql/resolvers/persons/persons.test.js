const dataServices = require('../../../dataServices')
const persons = require('./persons')

const spyGetPersons =
  jest
    .spyOn(dataServices.personsDataService, "getPersons")
    .mockImplementation();

it("calls the data service", async () => {
  spyGetPersons.mockResolvedValueOnce("A response");
  await expect(persons(null, null)).resolves.toEqual("A response");
});
