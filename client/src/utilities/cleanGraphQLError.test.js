import { ApolloError } from "apollo-client";
import { cleanGraphQLError } from './cleanGraphQLError'

it("cleans a typical apollo error", () => {
  // this sort of messages returns Apollo server:
  const apolloError = new ApolloError({ errorMessage: "GraphQL error: an error occurred" });
  expect(cleanGraphQLError(apolloError)).toEqual("an error occurred");
});
