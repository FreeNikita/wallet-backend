"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.root = exports.resolvers = exports.typeDefs = void 0;var _apolloServerExpress = require("apollo-server-express");
var _Query = require("./Query");
var _Mutation = require("./Mutation");

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
`;

const typeDefs = (0, _apolloServerExpress.gql)`
  ${customType}
  ${_Query.typeDefsQuery}
  ${_Mutation.typeDefsMutation}
`;exports.typeDefs = typeDefs;

const resolvers = {
  Query: _Query.resolversQuery,
  Mutation: _Mutation.resolversMutation };exports.resolvers = resolvers;


const root = {
  ..._Query.resolversQuery,
  ..._Mutation.resolversMutation };exports.root = root;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaFFML2luZGV4LmpzIl0sIm5hbWVzIjpbImN1c3RvbVR5cGUiLCJ0eXBlRGVmcyIsInR5cGVEZWZzUXVlcnkiLCJ0eXBlRGVmc011dGF0aW9uIiwicmVzb2x2ZXJzIiwiUXVlcnkiLCJyZXNvbHZlcnNRdWVyeSIsIk11dGF0aW9uIiwicmVzb2x2ZXJzTXV0YXRpb24iLCJyb290Il0sIm1hcHBpbmdzIjoid0lBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFVBQVUsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFwQjs7QUE2Q08sTUFBTUMsUUFBUSxHQUFHLDZCQUFJO0lBQ3hCRCxVQUFXO0lBQ1hFLG9CQUFjO0lBQ2RDLDBCQUFpQjtDQUhkLEM7O0FBTUEsTUFBTUMsU0FBUyxHQUFHO0FBQ3JCQyxFQUFBQSxLQUFLLEVBQUVDLHFCQURjO0FBRXJCQyxFQUFBQSxRQUFRLEVBQUVDLDJCQUZXLEVBQWxCLEM7OztBQUtBLE1BQU1DLElBQUksR0FBRztBQUNoQixLQUFHSCxxQkFEYTtBQUVoQixLQUFHRSwyQkFGYSxFQUFiLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnO1xuaW1wb3J0IHt0eXBlRGVmc1F1ZXJ5LCByZXNvbHZlcnNRdWVyeX0gZnJvbSAnLi9RdWVyeSdcbmltcG9ydCB7dHlwZURlZnNNdXRhdGlvbiwgcmVzb2x2ZXJzTXV0YXRpb259IGZyb20gJy4vTXV0YXRpb24nXG5cbmNvbnN0IGN1c3RvbVR5cGUgPSBgXG4gICAgdHlwZSBVc2VyIHtcbiAgICAgICAgaWQ6IFN0cmluZyxcbiAgICAgICAgZmlyZWJhc2VfaWQ6IFN0cmluZyxcbiAgICAgICAgbmFtZTogU3RyaW5nLFxuICAgICAgICBzdXJuYW1lOiBTdHJpbmcsXG4gICAgICAgIGVtYWlsOiBTdHJpbmcsXG4gICAgICAgIGNyZWF0ZWREYXRlOiBTdHJpbmdcbiAgICB9XG4gICAgXG4gICAgdHlwZSBIaXN0b3J5IHtcbiAgICAgICAgaWQ6IFN0cmluZyxcbiAgICAgICAgYW1vdW50OiBJbnQsXG4gICAgICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgICAgIGNhdGVnb3J5OiBTdHJpbmcsXG4gICAgICAgIHN1YkNhdGVnb3J5OiBTdHJpbmcsXG4gICAgICAgIGRhdGU6IFN0cmluZyxcbiAgICAgICAgZGVzY3JpcHRpb246IFN0cmluZyxcbiAgICB9XG4gICAgXG4gICAgdHlwZSBXYWxsZXQge1xuICAgICAgICBpZDogU3RyaW5nLFxuICAgICAgICB1c2VyX2lkOiBTdHJpbmcsXG4gICAgICAgIG5hbWU6IFN0cmluZyxcbiAgICAgICAgYW1vdW50OiBJbnQsXG4gICAgICAgIGN1cnJlbmN5OiBTdHJpbmcsXG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgaGlzdG9yeTogW0hpc3RvcnldXG4gICAgfVxuICAgIFxuICAgIHR5cGUgSWQge1xuICAgICAgICBpZDogU3RyaW5nLFxuICAgIH1cbiAgICBcbiAgICB0eXBlIFRyYW5zYWN0aW9uIHtcbiAgICAgICAgaWQ6IFN0cmluZ1xuICAgICAgICBuYW1lOiBTdHJpbmdcbiAgICAgICAgYW1vdW50OiBJbnRcbiAgICB9XG4gICAgXG4gICAgdHlwZSBTdGF0dXMge1xuICAgICAgICBzdGF0dXM6IFN0cmluZ1xuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsYFxuICAke2N1c3RvbVR5cGV9XG4gICR7dHlwZURlZnNRdWVyeX1cbiAgJHt0eXBlRGVmc011dGF0aW9ufVxuYDtcblxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcbiAgICBRdWVyeTogcmVzb2x2ZXJzUXVlcnksXG4gICAgTXV0YXRpb246IHJlc29sdmVyc011dGF0aW9uXG59O1xuXG5leHBvcnQgY29uc3Qgcm9vdCA9IHtcbiAgICAuLi5yZXNvbHZlcnNRdWVyeSxcbiAgICAuLi5yZXNvbHZlcnNNdXRhdGlvblxufSJdfQ==