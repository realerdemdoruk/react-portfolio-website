import { GraphQLClient } from 'graphql-request';

export const graphcms = new GraphQLClient(
  // process.env.NEXT_PUBLIC_GRAPHCMS_URL,
  // {
  //   headers: {},
  // }

  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cle709z3q09jn01tfcs5q4p3s/master',
  {
    headers: {},
  }
);
