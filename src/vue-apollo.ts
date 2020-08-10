import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
require("dotenv").config();

const httpLink = createHttpLink({
  uri: process.env.VUE_APP_API_BASE_URL || ""
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache
});
