const mapPersonToGQL = require('./mapPersonToGQL')

it("maps a person object", () => {
  expect(mapPersonToGQL({
    id: "id",
    display_name: "Ricardo Garcia",
    email_address: "software_engineer@email.com",
    title: "Software Engineer",
  })).toEqual({
    id: "id",
    name: "Ricardo Garcia",
    email: "software_engineer@email.com",
    jobTitle: "Software Engineer",
  });
});
