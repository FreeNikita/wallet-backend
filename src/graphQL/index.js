import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    hello: String
    hello1: String
  }
  type Mutation {
    hello: String
  }
`;

export const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        hello1: () => 'Hello world!',
    },
    Mutation: {
        hello: () => "test"
    }
};