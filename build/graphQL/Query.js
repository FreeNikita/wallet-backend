"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.resolversQuery = exports.typeDefsQuery = void 0;var _wallet = _interopRequireDefault(require("./../modules/wallet"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const typeDefsQuery = `
    type Query {
        getAllWallets(user_id: String): [Wallet]
  }
`;exports.typeDefsQuery = typeDefsQuery;

const resolversQuery = {
  getAllWallets: async (_, params) => {
    try {
      const { user_id } = params;
      return await _wallet.default.find({ user_id });
    }
    catch (err) {
      console.log('getAllWallet: ', err);
    }
  } };exports.resolversQuery = resolversQuery;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaFFML1F1ZXJ5LmpzIl0sIm5hbWVzIjpbInR5cGVEZWZzUXVlcnkiLCJyZXNvbHZlcnNRdWVyeSIsImdldEFsbFdhbGxldHMiLCJfIiwicGFyYW1zIiwidXNlcl9pZCIsIldhbGxldCIsImZpbmQiLCJlcnIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoibUlBQUEscUU7O0FBRU8sTUFBTUEsYUFBYSxHQUFJOzs7O0NBQXZCLEM7O0FBTUEsTUFBTUMsY0FBYyxHQUFHO0FBQzFCQyxFQUFBQSxhQUFhLEVBQUUsT0FBT0MsQ0FBUCxFQUFVQyxNQUFWLEtBQXFCO0FBQ2hDLFFBQUk7QUFDQSxZQUFNLEVBQUVDLE9BQUYsS0FBY0QsTUFBcEI7QUFDQSxhQUFPLE1BQU1FLGdCQUFPQyxJQUFQLENBQVksRUFBQ0YsT0FBRCxFQUFaLENBQWI7QUFDSDtBQUNELFdBQU9HLEdBQVAsRUFBWTtBQUNSQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkYsR0FBOUI7QUFDSDtBQUNKLEdBVHlCLEVBQXZCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2FsbGV0IGZyb20gXCIuLy4uL21vZHVsZXMvd2FsbGV0XCI7XG5cbmV4cG9ydCBjb25zdCB0eXBlRGVmc1F1ZXJ5ID0gYFxuICAgIHR5cGUgUXVlcnkge1xuICAgICAgICBnZXRBbGxXYWxsZXRzKHVzZXJfaWQ6IFN0cmluZyk6IFtXYWxsZXRdXG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IHJlc29sdmVyc1F1ZXJ5ID0ge1xuICAgIGdldEFsbFdhbGxldHM6IGFzeW5jIChfLCBwYXJhbXMpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlcl9pZCB9ID0gcGFyYW1zO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IFdhbGxldC5maW5kKHt1c2VyX2lkfSlcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0QWxsV2FsbGV0OiAnLCBlcnIpXG4gICAgICAgIH1cbiAgICB9XG59Il19