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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaFFML2luZGV4LmpzIl0sIm5hbWVzIjpbImN1c3RvbVR5cGUiLCJ0eXBlRGVmcyIsInR5cGVEZWZzUXVlcnkiLCJ0eXBlRGVmc011dGF0aW9uIiwicmVzb2x2ZXJzIiwiUXVlcnkiLCJyZXNvbHZlcnNRdWVyeSIsIk11dGF0aW9uIiwicmVzb2x2ZXJzTXV0YXRpb24iLCJyb290Il0sIm1hcHBpbmdzIjoid0lBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFVBQVUsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBcEI7O0FBa0NPLE1BQU1DLFFBQVEsR0FBRyw2QkFBSTtJQUN4QkQsVUFBVztJQUNYRSxvQkFBYztJQUNkQywwQkFBaUI7Q0FIZCxDOztBQU1BLE1BQU1DLFNBQVMsR0FBRztBQUNyQkMsRUFBQUEsS0FBSyxFQUFFQyxxQkFEYztBQUVyQkMsRUFBQUEsUUFBUSxFQUFFQywyQkFGVyxFQUFsQixDOzs7QUFLQSxNQUFNQyxJQUFJLEdBQUc7QUFDaEIsS0FBR0gscUJBRGE7QUFFaEIsS0FBR0UsMkJBRmEsRUFBYixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcbmltcG9ydCB7dHlwZURlZnNRdWVyeSwgcmVzb2x2ZXJzUXVlcnl9IGZyb20gJy4vUXVlcnknXG5pbXBvcnQge3R5cGVEZWZzTXV0YXRpb24sIHJlc29sdmVyc011dGF0aW9ufSBmcm9tICcuL011dGF0aW9uJ1xuXG5jb25zdCBjdXN0b21UeXBlID0gYFxuICAgIHR5cGUgVXNlciB7XG4gICAgICAgIGlkOiBTdHJpbmcsXG4gICAgICAgIGZpcmViYXNlX2lkOiBTdHJpbmcsXG4gICAgICAgIG5hbWU6IFN0cmluZyxcbiAgICAgICAgc3VybmFtZTogU3RyaW5nLFxuICAgICAgICBlbWFpbDogU3RyaW5nLFxuICAgICAgICBjcmVhdGVkRGF0ZTogU3RyaW5nXG4gICAgfVxuICAgIFxuICAgIHR5cGUgV2FsbGV0IHtcbiAgICAgICAgaWQ6IFN0cmluZyxcbiAgICAgICAgdXNlcl9pZDogU3RyaW5nLFxuICAgICAgICBuYW1lOiBTdHJpbmcsXG4gICAgICAgIGFtb3VudDogSW50LFxuICAgICAgICBjdXJyZW5jeTogU3RyaW5nLFxuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfVxuICAgIFxuICAgIHR5cGUgSWQge1xuICAgICAgICBpZDogU3RyaW5nLFxuICAgIH1cbiAgICBcbiAgICB0eXBlIFRyYW5zYWN0aW9uIHtcbiAgICAgICAgaWQ6IFN0cmluZ1xuICAgICAgICBuYW1lOiBTdHJpbmdcbiAgICAgICAgYW1vdW50OiBJbnRcbiAgICB9XG4gICAgXG4gICAgdHlwZSBTdGF0dXMge1xuICAgICAgICBzdGF0dXM6IFN0cmluZ1xuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsYFxuICAke2N1c3RvbVR5cGV9XG4gICR7dHlwZURlZnNRdWVyeX1cbiAgJHt0eXBlRGVmc011dGF0aW9ufVxuYDtcblxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcbiAgICBRdWVyeTogcmVzb2x2ZXJzUXVlcnksXG4gICAgTXV0YXRpb246IHJlc29sdmVyc011dGF0aW9uXG59O1xuXG5leHBvcnQgY29uc3Qgcm9vdCA9IHtcbiAgICAuLi5yZXNvbHZlcnNRdWVyeSxcbiAgICAuLi5yZXNvbHZlcnNNdXRhdGlvblxufSJdfQ==