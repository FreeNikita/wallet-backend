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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaFFML2luZGV4LmpzIl0sIm5hbWVzIjpbImN1c3RvbVR5cGUiLCJ0eXBlRGVmcyIsInR5cGVEZWZzUXVlcnkiLCJ0eXBlRGVmc011dGF0aW9uIiwicmVzb2x2ZXJzIiwiUXVlcnkiLCJyZXNvbHZlcnNRdWVyeSIsIk11dGF0aW9uIiwicmVzb2x2ZXJzTXV0YXRpb24iLCJyb290Il0sIm1hcHBpbmdzIjoid0lBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFVBQVUsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQXBCOztBQW9CTyxNQUFNQyxRQUFRLEdBQUcsNkJBQUk7SUFDeEJELFVBQVc7SUFDWEUsb0JBQWM7SUFDZEMsMEJBQWlCO0NBSGQsQzs7QUFNQSxNQUFNQyxTQUFTLEdBQUc7QUFDckJDLEVBQUFBLEtBQUssRUFBRUMscUJBRGM7QUFFckJDLEVBQUFBLFFBQVEsRUFBRUMsMkJBRlcsRUFBbEIsQzs7O0FBS0EsTUFBTUMsSUFBSSxHQUFHO0FBQ2hCLEtBQUdILHFCQURhO0FBRWhCLEtBQUdFLDJCQUZhLEVBQWIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcyc7XG5pbXBvcnQge3R5cGVEZWZzUXVlcnksIHJlc29sdmVyc1F1ZXJ5fSBmcm9tICcuL1F1ZXJ5J1xuaW1wb3J0IHt0eXBlRGVmc011dGF0aW9uLCByZXNvbHZlcnNNdXRhdGlvbn0gZnJvbSAnLi9NdXRhdGlvbidcblxuY29uc3QgY3VzdG9tVHlwZSA9IGBcbiAgICB0eXBlIFVzZXIge1xuICAgICAgICBpZDogU3RyaW5nLFxuICAgICAgICBmaXJlYmFzZV9pZDogU3RyaW5nLFxuICAgICAgICBuYW1lOiBTdHJpbmcsXG4gICAgICAgIHN1cm5hbWU6IFN0cmluZyxcbiAgICAgICAgZW1haWw6IFN0cmluZyxcbiAgICAgICAgY3JlYXRlZERhdGU6IFN0cmluZ1xuICAgIH1cbiAgICBcbiAgICB0eXBlIFdhbGxldCB7XG4gICAgICAgIGlkOiBTdHJpbmcsXG4gICAgICAgIHVzZXJfaWQ6IFN0cmluZyxcbiAgICAgICAgbmFtZTogU3RyaW5nLFxuICAgICAgICBhbW91bnQ6IEludCxcbiAgICAgICAgY3VycmVuY3k6IFN0cmluZyxcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsYFxuICAke2N1c3RvbVR5cGV9XG4gICR7dHlwZURlZnNRdWVyeX1cbiAgJHt0eXBlRGVmc011dGF0aW9ufVxuYDtcblxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcbiAgICBRdWVyeTogcmVzb2x2ZXJzUXVlcnksXG4gICAgTXV0YXRpb246IHJlc29sdmVyc011dGF0aW9uXG59O1xuXG5leHBvcnQgY29uc3Qgcm9vdCA9IHtcbiAgICAuLi5yZXNvbHZlcnNRdWVyeSxcbiAgICAuLi5yZXNvbHZlcnNNdXRhdGlvblxufSJdfQ==