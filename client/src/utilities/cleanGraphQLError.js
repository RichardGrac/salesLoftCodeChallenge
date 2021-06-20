export const cleanGraphQLError = (error) => {
  return error.message.split(":")[1].trim()
}
