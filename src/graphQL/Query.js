import { gql } from 'apollo-server-express';

export const typeDefsQuery = `
    type Query {
        hello: String
        hello1: String
  }
`

export const resolversQuery = {
    hello: () => 'Hello world!',
    hello1: () => 'Hello world!',
}