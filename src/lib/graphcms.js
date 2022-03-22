import { gql, GraphQLClient } from "graphql-request";

const env = import.meta.env;

const graphcms = new GraphQLClient(`${env.VITE_GRAPHCMS_URL}`, {
  headers: {}
});

export default graphcms;
