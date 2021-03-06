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
    
    type History {
        id: String,
        amount: Int,
        title: String,
        category: String,
        subCategory: String,
        date: String,
        description: String,
    }
    
    type Wallet {
        id: String,
        user_id: String,
        name: String,
        amount: Int,
        currency: String,
        type: String,
        history: [History]
    }
    
    type Id {
        id: String,
    }
    
    type Transaction {
        id: String
        name: String
        amount: Int
    }
    
    type Status {
        status: String
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