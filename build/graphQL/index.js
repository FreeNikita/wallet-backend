"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.root = exports.resolvers = exports.typeDefs = void 0;var _apolloServerExpress = require("apollo-server-express");
var _Query = require("./Query");
var _Mutation = require("./Mutation");

const typeUSer = `
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
`;

const typeDefs = (0, _apolloServerExpress.gql)`
  ${typeUSer}
  ${_Query.typeDefsQuery}
  ${_Mutation.typeDefsMutation}
`;exports.typeDefs = typeDefs;

const resolvers = {
  Query: _Query.resolversQuery,
  Mutation: _Mutation.resolversMutation };exports.resolvers = resolvers;


const root = {
  ..._Query.resolversQuery,
  ..._Mutation.resolversMutation };exports.root = root;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaFFML2luZGV4LmpzIl0sIm5hbWVzIjpbInR5cGVVU2VyIiwidHlwZURlZnMiLCJ0eXBlRGVmc1F1ZXJ5IiwidHlwZURlZnNNdXRhdGlvbiIsInJlc29sdmVycyIsIlF1ZXJ5IiwicmVzb2x2ZXJzUXVlcnkiLCJNdXRhdGlvbiIsInJlc29sdmVyc011dGF0aW9uIiwicm9vdCJdLCJtYXBwaW5ncyI6IndJQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFsQjs7QUFvQk8sTUFBTUMsUUFBUSxHQUFHLDZCQUFJO0lBQ3hCRCxRQUFTO0lBQ1RFLG9CQUFjO0lBQ2RDLDBCQUFpQjtDQUhkLEM7O0FBTUEsTUFBTUMsU0FBUyxHQUFHO0FBQ3JCQyxFQUFBQSxLQUFLLEVBQUVDLHFCQURjO0FBRXJCQyxFQUFBQSxRQUFRLEVBQUVDLDJCQUZXLEVBQWxCLEM7OztBQUtBLE1BQU1DLElBQUksR0FBRztBQUNoQixLQUFHSCxxQkFEYTtBQUVoQixLQUFHRSwyQkFGYSxFQUFiLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnO1xuaW1wb3J0IHt0eXBlRGVmc1F1ZXJ5LCByZXNvbHZlcnNRdWVyeX0gZnJvbSAnLi9RdWVyeSdcbmltcG9ydCB7dHlwZURlZnNNdXRhdGlvbiwgcmVzb2x2ZXJzTXV0YXRpb259IGZyb20gJy4vTXV0YXRpb24nXG5cbmNvbnN0IHR5cGVVU2VyID0gYFxuICAgIHR5cGUgVXNlciB7XG4gICAgICAgIGlkOiBTdHJpbmcsXG4gICAgICAgIGZpcmViYXNlX2lkOiBTdHJpbmcsXG4gICAgICAgIG5hbWU6IFN0cmluZyxcbiAgICAgICAgc3VybmFtZTogU3RyaW5nLFxuICAgICAgICBlbWFpbDogU3RyaW5nLFxuICAgICAgICBjcmVhdGVkRGF0ZTogU3RyaW5nXG4gICAgfVxuICAgIFxuICAgIHR5cGUgV2FsbGV0IHtcbiAgICAgICAgaWQ6IFN0cmluZyxcbiAgICAgICAgdXNlcl9pZDogU3RyaW5nLFxuICAgICAgICBuYW1lOiBTdHJpbmcsXG4gICAgICAgIGFtb3VudDogSW50LFxuICAgICAgICBjdXJyZW5jeTogU3RyaW5nLFxuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgdHlwZURlZnMgPSBncWxgXG4gICR7dHlwZVVTZXJ9XG4gICR7dHlwZURlZnNRdWVyeX1cbiAgJHt0eXBlRGVmc011dGF0aW9ufVxuYDtcblxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcbiAgICBRdWVyeTogcmVzb2x2ZXJzUXVlcnksXG4gICAgTXV0YXRpb246IHJlc29sdmVyc011dGF0aW9uXG59O1xuXG5leHBvcnQgY29uc3Qgcm9vdCA9IHtcbiAgICAuLi5yZXNvbHZlcnNRdWVyeSxcbiAgICAuLi5yZXNvbHZlcnNNdXRhdGlvblxufSJdfQ==