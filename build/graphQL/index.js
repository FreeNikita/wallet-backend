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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaFFML2luZGV4LmpzIl0sIm5hbWVzIjpbInR5cGVVU2VyIiwidHlwZURlZnMiLCJ0eXBlRGVmc1F1ZXJ5IiwidHlwZURlZnNNdXRhdGlvbiIsInJlc29sdmVycyIsIlF1ZXJ5IiwicmVzb2x2ZXJzUXVlcnkiLCJNdXRhdGlvbiIsInJlc29sdmVyc011dGF0aW9uIiwicm9vdCJdLCJtYXBwaW5ncyI6IndJQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUk7Ozs7Ozs7OztDQUFsQjs7QUFXTyxNQUFNQyxRQUFRLEdBQUcsNkJBQUk7TUFDdEJELFFBQVM7SUFDWEUsb0JBQWM7SUFDZEMsMEJBQWlCO0NBSGQsQzs7QUFNQSxNQUFNQyxTQUFTLEdBQUc7QUFDckJDLEVBQUFBLEtBQUssRUFBRUMscUJBRGM7QUFFckJDLEVBQUFBLFFBQVEsRUFBRUMsMkJBRlcsRUFBbEIsQzs7O0FBS0EsTUFBTUMsSUFBSSxHQUFHO0FBQ2hCLEtBQUdILHFCQURhO0FBRWhCLEtBQUdFLDJCQUZhLEVBQWIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcyc7XG5pbXBvcnQge3R5cGVEZWZzUXVlcnksIHJlc29sdmVyc1F1ZXJ5fSBmcm9tICcuL1F1ZXJ5J1xuaW1wb3J0IHt0eXBlRGVmc011dGF0aW9uLCByZXNvbHZlcnNNdXRhdGlvbn0gZnJvbSAnLi9NdXRhdGlvbidcblxuY29uc3QgdHlwZVVTZXIgPSBgXG4gICAgdHlwZSBVc2VyIHtcbiAgICAgICAgaWQ6IFN0cmluZyxcbiAgICAgICAgZmlyZWJhc2VfaWQ6IFN0cmluZyxcbiAgICAgICAgbmFtZTogU3RyaW5nLFxuICAgICAgICBzdXJuYW1lOiBTdHJpbmcsXG4gICAgICAgIGVtYWlsOiBTdHJpbmcsXG4gICAgICAgIGNyZWF0ZWREYXRlOiBTdHJpbmdcbiAgICB9XG5gXG5cbmV4cG9ydCBjb25zdCB0eXBlRGVmcyA9IGdxbGBcbiAgICAke3R5cGVVU2VyfVxuICAke3R5cGVEZWZzUXVlcnl9XG4gICR7dHlwZURlZnNNdXRhdGlvbn1cbmA7XG5cbmV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XG4gICAgUXVlcnk6IHJlc29sdmVyc1F1ZXJ5LFxuICAgIE11dGF0aW9uOiByZXNvbHZlcnNNdXRhdGlvblxufTtcblxuZXhwb3J0IGNvbnN0IHJvb3QgPSB7XG4gICAgLi4ucmVzb2x2ZXJzUXVlcnksXG4gICAgLi4ucmVzb2x2ZXJzTXV0YXRpb25cbn0iXX0=