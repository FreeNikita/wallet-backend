"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.resolversQuery = exports.typeDefsQuery = void 0;var _apolloServerExpress = require("apollo-server-express");

const typeDefsQuery = `
    type Query {
        hello: String
        hello1: String
  }
`;exports.typeDefsQuery = typeDefsQuery;

const resolversQuery = {
  hello: () => 'Hello world!',
  hello1: () => 'Hello world!' };exports.resolversQuery = resolversQuery;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaFFML1F1ZXJ5LmpzIl0sIm5hbWVzIjpbInR5cGVEZWZzUXVlcnkiLCJyZXNvbHZlcnNRdWVyeSIsImhlbGxvIiwiaGVsbG8xIl0sIm1hcHBpbmdzIjoibUlBQUE7O0FBRU8sTUFBTUEsYUFBYSxHQUFJOzs7OztDQUF2QixDOztBQU9BLE1BQU1DLGNBQWMsR0FBRztBQUMxQkMsRUFBQUEsS0FBSyxFQUFFLE1BQU0sY0FEYTtBQUUxQkMsRUFBQUEsTUFBTSxFQUFFLE1BQU0sY0FGWSxFQUF2QixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcblxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzUXVlcnkgPSBgXG4gICAgdHlwZSBRdWVyeSB7XG4gICAgICAgIGhlbGxvOiBTdHJpbmdcbiAgICAgICAgaGVsbG8xOiBTdHJpbmdcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgcmVzb2x2ZXJzUXVlcnkgPSB7XG4gICAgaGVsbG86ICgpID0+ICdIZWxsbyB3b3JsZCEnLFxuICAgIGhlbGxvMTogKCkgPT4gJ0hlbGxvIHdvcmxkIScsXG59Il19