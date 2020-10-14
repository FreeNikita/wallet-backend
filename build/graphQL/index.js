"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.resolvers = exports.typeDefs = void 0;var _apolloServerExpress = require("apollo-server-express");

const typeDefs = (0, _apolloServerExpress.gql)`
  type Query {
    hello: String
    hello1: String
  }
  type Mutation {
    hello: String
  }
`;exports.typeDefs = typeDefs;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    hello1: () => 'Hello world!' },

  Mutation: {
    hello: () => "test" } };exports.resolvers = resolvers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaFFML2luZGV4LmpzIl0sIm5hbWVzIjpbInR5cGVEZWZzIiwicmVzb2x2ZXJzIiwiUXVlcnkiLCJoZWxsbyIsImhlbGxvMSIsIk11dGF0aW9uIl0sIm1hcHBpbmdzIjoieUhBQUE7O0FBRU8sTUFBTUEsUUFBUSxHQUFHLDZCQUFJOzs7Ozs7OztDQUFyQixDOztBQVVBLE1BQU1DLFNBQVMsR0FBRztBQUNyQkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0hDLElBQUFBLEtBQUssRUFBRSxNQUFNLGNBRFY7QUFFSEMsSUFBQUEsTUFBTSxFQUFFLE1BQU0sY0FGWCxFQURjOztBQUtyQkMsRUFBQUEsUUFBUSxFQUFFO0FBQ05GLElBQUFBLEtBQUssRUFBRSxNQUFNLE1BRFAsRUFMVyxFQUFsQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcblxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsYFxuICB0eXBlIFF1ZXJ5IHtcbiAgICBoZWxsbzogU3RyaW5nXG4gICAgaGVsbG8xOiBTdHJpbmdcbiAgfVxuICB0eXBlIE11dGF0aW9uIHtcbiAgICBoZWxsbzogU3RyaW5nXG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XG4gICAgUXVlcnk6IHtcbiAgICAgICAgaGVsbG86ICgpID0+ICdIZWxsbyB3b3JsZCEnLFxuICAgICAgICBoZWxsbzE6ICgpID0+ICdIZWxsbyB3b3JsZCEnLFxuICAgIH0sXG4gICAgTXV0YXRpb246IHtcbiAgICAgICAgaGVsbG86ICgpID0+IFwidGVzdFwiXG4gICAgfVxufTsiXX0=