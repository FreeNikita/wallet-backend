"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.resolversQuery = exports.typeDefsQuery = void 0;var _wallet = _interopRequireDefault(require("./../modules/wallet"));
var _user = _interopRequireDefault(require("../modules/user"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const typeDefsQuery = `
    type Query {
        setUser(firebase_id: String!): User
        getAllWallets(user_id: String): [Wallet]
        getWallet(
            user_id: String
            wallet_id: String
        ): Wallet
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
  },
  getWallet: async (_, params) => {
    try {
      const { user_id, wallet_id } = params;
      return await _wallet.default.findOne({
        user_id,
        _id: wallet_id });

    }
    catch (err) {
      console.log('getAllWallet: ', err);
    }
  } };exports.resolversQuery = resolversQuery;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaFFML1F1ZXJ5LmpzIl0sIm5hbWVzIjpbInR5cGVEZWZzUXVlcnkiLCJyZXNvbHZlcnNRdWVyeSIsInNldFVzZXIiLCJfIiwiZmlyZWJhc2VfaWQiLCJ1c2VyIiwiVXNlciIsImZpbmRPbmUiLCJzYXZlIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImdldEFsbFdhbGxldHMiLCJwYXJhbXMiLCJ1c2VyX2lkIiwiV2FsbGV0IiwiZmluZCIsImdldFdhbGxldCIsIndhbGxldF9pZCIsIl9pZCJdLCJtYXBwaW5ncyI6Im1JQUFBO0FBQ0EsK0Q7O0FBRU8sTUFBTUEsYUFBYSxHQUFJOzs7Ozs7Ozs7Q0FBdkIsQzs7QUFXQSxNQUFNQyxjQUFjLEdBQUc7QUFDMUJDLEVBQUFBLE9BQU8sRUFBRSxPQUFPQyxDQUFQLEVBQVMsRUFBQ0MsV0FBRCxFQUFULEtBQTJCO0FBQ2hDLFFBQUk7QUFDQSxVQUFJQyxJQUFJLEdBQUcsTUFBTUMsY0FBS0MsT0FBTCxDQUFhO0FBQzFCSCxRQUFBQSxXQUQwQixFQUFiLENBQWpCOzs7QUFJQSxVQUFHQyxJQUFILEVBQVMsT0FBT0EsSUFBUDs7QUFFVEEsTUFBQUEsSUFBSSxHQUFHLE1BQU0sSUFBSUMsYUFBSixDQUFTO0FBQ2xCRixRQUFBQSxXQURrQixFQUFULENBQWI7OztBQUlBLGFBQU8sTUFBTUMsSUFBSSxDQUFDRyxJQUFMLEVBQWI7QUFDSCxLQVpELENBWUUsT0FBT0MsR0FBUCxFQUFZO0FBQ1ZDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJGLEdBQXpCO0FBQ0g7QUFDSixHQWpCeUI7QUFrQjFCRyxFQUFBQSxhQUFhLEVBQUUsT0FBT1QsQ0FBUCxFQUFVVSxNQUFWLEtBQXFCO0FBQ2hDLFFBQUk7QUFDQSxZQUFNLEVBQUVDLE9BQUYsS0FBY0QsTUFBcEI7QUFDQSxhQUFPLE1BQU1FLGdCQUFPQyxJQUFQLENBQVksRUFBQ0YsT0FBRCxFQUFaLENBQWI7QUFDSDtBQUNELFdBQU9MLEdBQVAsRUFBWTtBQUNSQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkYsR0FBOUI7QUFDSDtBQUNKLEdBMUJ5QjtBQTJCMUJRLEVBQUFBLFNBQVMsRUFBRSxPQUFPZCxDQUFQLEVBQVVVLE1BQVYsS0FBcUI7QUFDNUIsUUFBSTtBQUNBLFlBQU0sRUFBRUMsT0FBRixFQUFXSSxTQUFYLEtBQXlCTCxNQUEvQjtBQUNBLGFBQU8sTUFBTUUsZ0JBQU9SLE9BQVAsQ0FBZTtBQUN4Qk8sUUFBQUEsT0FEd0I7QUFFeEJLLFFBQUFBLEdBQUcsRUFBRUQsU0FGbUIsRUFBZixDQUFiOztBQUlIO0FBQ0QsV0FBT1QsR0FBUCxFQUFZO0FBQ1JDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCRixHQUE5QjtBQUNIO0FBQ0osR0F0Q3lCLEVBQXZCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2FsbGV0IGZyb20gXCIuLy4uL21vZHVsZXMvd2FsbGV0XCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vbW9kdWxlcy91c2VyXCI7XG5cbmV4cG9ydCBjb25zdCB0eXBlRGVmc1F1ZXJ5ID0gYFxuICAgIHR5cGUgUXVlcnkge1xuICAgICAgICBzZXRVc2VyKGZpcmViYXNlX2lkOiBTdHJpbmchKTogVXNlclxuICAgICAgICBnZXRBbGxXYWxsZXRzKHVzZXJfaWQ6IFN0cmluZyk6IFtXYWxsZXRdXG4gICAgICAgIGdldFdhbGxldChcbiAgICAgICAgICAgIHVzZXJfaWQ6IFN0cmluZ1xuICAgICAgICAgICAgd2FsbGV0X2lkOiBTdHJpbmdcbiAgICAgICAgKTogV2FsbGV0XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IHJlc29sdmVyc1F1ZXJ5ID0ge1xuICAgIHNldFVzZXI6IGFzeW5jIChfLHtmaXJlYmFzZV9pZH0pID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHtcbiAgICAgICAgICAgICAgICBmaXJlYmFzZV9pZFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYodXNlcikgcmV0dXJuIHVzZXJcblxuICAgICAgICAgICAgdXNlciA9IGF3YWl0IG5ldyBVc2VyKHtcbiAgICAgICAgICAgICAgICBmaXJlYmFzZV9pZCxcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB1c2VyLnNhdmUoKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXRVc2VyOiAnLCBlcnIpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldEFsbFdhbGxldHM6IGFzeW5jIChfLCBwYXJhbXMpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlcl9pZCB9ID0gcGFyYW1zO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IFdhbGxldC5maW5kKHt1c2VyX2lkfSlcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0QWxsV2FsbGV0OiAnLCBlcnIpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldFdhbGxldDogYXN5bmMgKF8sIHBhcmFtcykgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgeyB1c2VyX2lkLCB3YWxsZXRfaWQgfSA9IHBhcmFtcztcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBXYWxsZXQuZmluZE9uZSh7XG4gICAgICAgICAgICAgICAgdXNlcl9pZCxcbiAgICAgICAgICAgICAgICBfaWQ6IHdhbGxldF9pZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0QWxsV2FsbGV0OiAnLCBlcnIpXG4gICAgICAgIH1cbiAgICB9XG59Il19