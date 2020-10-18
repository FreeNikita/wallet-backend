"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.resolversQuery = exports.typeDefsQuery = void 0;var _wallet = _interopRequireDefault(require("./../modules/wallet"));
var _user = _interopRequireDefault(require("../modules/user"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const typeDefsQuery = `
    type Query {
        setUser(firebase_id: String!): User
        getAllWallets(user_id: String): [Wallet]
  }
`;exports.typeDefsQuery = typeDefsQuery;

const resolversQuery = {
  setUser: async (_, { firebase_id }) => {
    try {
      let user = await _user.default.findOne({
        firebase_id });


      if (user) return user;

      user = await new _user.default({
        firebase_id });


      return await user.save();
    } catch (err) {
      console.log('setUser: ', err);
    }
  },
  getAllWallets: async (_, params) => {
    try {
      const { user_id } = params;
      return await _wallet.default.find({ user_id });
    }
    catch (err) {
      console.log('getAllWallet: ', err);
    }
  } };exports.resolversQuery = resolversQuery;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaFFML1F1ZXJ5LmpzIl0sIm5hbWVzIjpbInR5cGVEZWZzUXVlcnkiLCJyZXNvbHZlcnNRdWVyeSIsInNldFVzZXIiLCJfIiwiZmlyZWJhc2VfaWQiLCJ1c2VyIiwiVXNlciIsImZpbmRPbmUiLCJzYXZlIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImdldEFsbFdhbGxldHMiLCJwYXJhbXMiLCJ1c2VyX2lkIiwiV2FsbGV0IiwiZmluZCJdLCJtYXBwaW5ncyI6Im1JQUFBO0FBQ0EsK0Q7O0FBRU8sTUFBTUEsYUFBYSxHQUFJOzs7OztDQUF2QixDOztBQU9BLE1BQU1DLGNBQWMsR0FBRztBQUMxQkMsRUFBQUEsT0FBTyxFQUFFLE9BQU9DLENBQVAsRUFBUyxFQUFDQyxXQUFELEVBQVQsS0FBMkI7QUFDaEMsUUFBSTtBQUNBLFVBQUlDLElBQUksR0FBRyxNQUFNQyxjQUFLQyxPQUFMLENBQWE7QUFDMUJILFFBQUFBLFdBRDBCLEVBQWIsQ0FBakI7OztBQUlBLFVBQUdDLElBQUgsRUFBUyxPQUFPQSxJQUFQOztBQUVUQSxNQUFBQSxJQUFJLEdBQUcsTUFBTSxJQUFJQyxhQUFKLENBQVM7QUFDbEJGLFFBQUFBLFdBRGtCLEVBQVQsQ0FBYjs7O0FBSUEsYUFBTyxNQUFNQyxJQUFJLENBQUNHLElBQUwsRUFBYjtBQUNILEtBWkQsQ0FZRSxPQUFPQyxHQUFQLEVBQVk7QUFDVkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QkYsR0FBekI7QUFDSDtBQUNKLEdBakJ5QjtBQWtCMUJHLEVBQUFBLGFBQWEsRUFBRSxPQUFPVCxDQUFQLEVBQVVVLE1BQVYsS0FBcUI7QUFDaEMsUUFBSTtBQUNBLFlBQU0sRUFBRUMsT0FBRixLQUFjRCxNQUFwQjtBQUNBLGFBQU8sTUFBTUUsZ0JBQU9DLElBQVAsQ0FBWSxFQUFDRixPQUFELEVBQVosQ0FBYjtBQUNIO0FBQ0QsV0FBT0wsR0FBUCxFQUFZO0FBQ1JDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCRixHQUE5QjtBQUNIO0FBQ0osR0ExQnlCLEVBQXZCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2FsbGV0IGZyb20gXCIuLy4uL21vZHVsZXMvd2FsbGV0XCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vbW9kdWxlcy91c2VyXCI7XG5cbmV4cG9ydCBjb25zdCB0eXBlRGVmc1F1ZXJ5ID0gYFxuICAgIHR5cGUgUXVlcnkge1xuICAgICAgICBzZXRVc2VyKGZpcmViYXNlX2lkOiBTdHJpbmchKTogVXNlclxuICAgICAgICBnZXRBbGxXYWxsZXRzKHVzZXJfaWQ6IFN0cmluZyk6IFtXYWxsZXRdXG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IHJlc29sdmVyc1F1ZXJ5ID0ge1xuICAgIHNldFVzZXI6IGFzeW5jIChfLHtmaXJlYmFzZV9pZH0pID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHtcbiAgICAgICAgICAgICAgICBmaXJlYmFzZV9pZFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYodXNlcikgcmV0dXJuIHVzZXJcblxuICAgICAgICAgICAgdXNlciA9IGF3YWl0IG5ldyBVc2VyKHtcbiAgICAgICAgICAgICAgICBmaXJlYmFzZV9pZCxcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB1c2VyLnNhdmUoKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXRVc2VyOiAnLCBlcnIpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldEFsbFdhbGxldHM6IGFzeW5jIChfLCBwYXJhbXMpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlcl9pZCB9ID0gcGFyYW1zO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IFdhbGxldC5maW5kKHt1c2VyX2lkfSlcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0QWxsV2FsbGV0OiAnLCBlcnIpXG4gICAgICAgIH1cbiAgICB9XG59Il19