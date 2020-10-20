import { gql } from 'apollo-server-express';
import {typeDefsQuery, resolversQuery} from './Query'
import {typeDefsMutation, resolversMutation} from './Mutation'

const customType = `
    type User {
        id: String,
        firebase_id: String,
        name: String,
        surname: String,
        email: String,
        createdDate: String
    }
    
    type Wallet {
        id: String,
        user_id: String,
        name: String,
        amount: Int,
        currency: String,
        type: String,
    }
    
    type Id {
        id: String,
    }
`

export const typeDefs = gql`
  ${customType}
  ${typeDefsQuery}
  ${typeDefsMutation}
`;

export const resolvers = {
    Query: resolversQuery,
    Mutation: resolversMutation
};

export const root = {
    ...resolversQuery,
    ...resolversMutation
}