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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaFFML2luZGV4LmpzIl0sIm5hbWVzIjpbImN1c3RvbVR5cGUiLCJ0eXBlRGVmcyIsInR5cGVEZWZzUXVlcnkiLCJ0eXBlRGVmc011dGF0aW9uIiwicmVzb2x2ZXJzIiwiUXVlcnkiLCJyZXNvbHZlcnNRdWVyeSIsIk11dGF0aW9uIiwicmVzb2x2ZXJzTXV0YXRpb24iLCJyb290Il0sIm1hcHBpbmdzIjoid0lBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFVBQVUsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFwQjs7QUF3Qk8sTUFBTUMsUUFBUSxHQUFHLDZCQUFJO0lBQ3hCRCxVQUFXO0lBQ1hFLG9CQUFjO0lBQ2RDLDBCQUFpQjtDQUhkLEM7O0FBTUEsTUFBTUMsU0FBUyxHQUFHO0FBQ3JCQyxFQUFBQSxLQUFLLEVBQUVDLHFCQURjO0FBRXJCQyxFQUFBQSxRQUFRLEVBQUVDLDJCQUZXLEVBQWxCLEM7OztBQUtBLE1BQU1DLElBQUksR0FBRztBQUNoQixLQUFHSCxxQkFEYTtBQUVoQixLQUFHRSwyQkFGYSxFQUFiLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnO1xuaW1wb3J0IHt0eXBlRGVmc1F1ZXJ5LCByZXNvbHZlcnNRdWVyeX0gZnJvbSAnLi9RdWVyeSdcbmltcG9ydCB7dHlwZURlZnNNdXRhdGlvbiwgcmVzb2x2ZXJzTXV0YXRpb259IGZyb20gJy4vTXV0YXRpb24nXG5cbmNvbnN0IGN1c3RvbVR5cGUgPSBgXG4gICAgdHlwZSBVc2VyIHtcbiAgICAgICAgaWQ6IFN0cmluZyxcbiAgICAgICAgZmlyZWJhc2VfaWQ6IFN0cmluZyxcbiAgICAgICAgbmFtZTogU3RyaW5nLFxuICAgICAgICBzdXJuYW1lOiBTdHJpbmcsXG4gICAgICAgIGVtYWlsOiBTdHJpbmcsXG4gICAgICAgIGNyZWF0ZWREYXRlOiBTdHJpbmdcbiAgICB9XG4gICAgXG4gICAgdHlwZSBXYWxsZXQge1xuICAgICAgICBpZDogU3RyaW5nLFxuICAgICAgICB1c2VyX2lkOiBTdHJpbmcsXG4gICAgICAgIG5hbWU6IFN0cmluZyxcbiAgICAgICAgYW1vdW50OiBJbnQsXG4gICAgICAgIGN1cnJlbmN5OiBTdHJpbmcsXG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9XG4gICAgXG4gICAgdHlwZSBJZCB7XG4gICAgICAgIGlkOiBTdHJpbmcsXG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgdHlwZURlZnMgPSBncWxgXG4gICR7Y3VzdG9tVHlwZX1cbiAgJHt0eXBlRGVmc1F1ZXJ5fVxuICAke3R5cGVEZWZzTXV0YXRpb259XG5gO1xuXG5leHBvcnQgY29uc3QgcmVzb2x2ZXJzID0ge1xuICAgIFF1ZXJ5OiByZXNvbHZlcnNRdWVyeSxcbiAgICBNdXRhdGlvbjogcmVzb2x2ZXJzTXV0YXRpb25cbn07XG5cbmV4cG9ydCBjb25zdCByb290ID0ge1xuICAgIC4uLnJlc29sdmVyc1F1ZXJ5LFxuICAgIC4uLnJlc29sdmVyc011dGF0aW9uXG59Il19