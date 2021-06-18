function mapPersonToGQL({
  id,
  display_name,
  email_address,
  title
}) {
  return {
    id,
    name: display_name,
    email: email_address,
    jobTitle: title,
  }
}

module.exports = mapPersonToGQL;
