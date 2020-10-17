"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.resolversMutation = exports.typeDefsMutation = void 0;var _user = _interopRequireDefault(require("./../modules/user"));
var _wallet = _interopRequireDefault(require("./../modules/wallet"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const typeDefsMutation = `
    type Mutation {
        setUser(firebase_id: String): User
        createWallet(
            user_id: String,
            name: String,
            amount: Int,
            currency: String,
            type: String,
        ): Wallet
    }
`;

// Move to USER_MODULES
exports.typeDefsMutation = typeDefsMutation;
const resolversMutation = {
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
  createWallet: async (_, params) => {
    try {
      const { user_id, name = '', amount = 0, currency = '', type = '' } = params;

      const wallet = await new _wallet.default({
        user_id,
        name,
        amount,
        currency,
        type });


      return await wallet.save();
    } catch (err) {
      console.log('createWallet: ', err);
    }
  } };exports.resolversMutation = resolversMutation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaFFML011dGF0aW9uLmpzIl0sIm5hbWVzIjpbInR5cGVEZWZzTXV0YXRpb24iLCJyZXNvbHZlcnNNdXRhdGlvbiIsInNldFVzZXIiLCJfIiwiZmlyZWJhc2VfaWQiLCJ1c2VyIiwiVXNlciIsImZpbmRPbmUiLCJzYXZlIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZVdhbGxldCIsInBhcmFtcyIsInVzZXJfaWQiLCJuYW1lIiwiYW1vdW50IiwiY3VycmVuY3kiLCJ0eXBlIiwid2FsbGV0IiwiV2FsbGV0Il0sIm1hcHBpbmdzIjoieUlBQUE7QUFDQSxxRTs7QUFFTyxNQUFNQSxnQkFBZ0IsR0FBSTs7Ozs7Ozs7Ozs7Q0FBMUI7O0FBYVA7O0FBRU8sTUFBTUMsaUJBQWlCLEdBQUc7QUFDN0JDLEVBQUFBLE9BQU8sRUFBRSxPQUFPQyxDQUFQLEVBQVMsRUFBQ0MsV0FBRCxFQUFULEtBQTJCO0FBQ2hDLFFBQUk7QUFDQSxVQUFJQyxJQUFJLEdBQUcsTUFBTUMsY0FBS0MsT0FBTCxDQUFhO0FBQzFCSCxRQUFBQSxXQUQwQixFQUFiLENBQWpCOzs7QUFJQSxVQUFHQyxJQUFILEVBQVMsT0FBT0EsSUFBUDs7QUFFVEEsTUFBQUEsSUFBSSxHQUFHLE1BQU0sSUFBSUMsYUFBSixDQUFTO0FBQ2xCRixRQUFBQSxXQURrQixFQUFULENBQWI7OztBQUlBLGFBQU8sTUFBTUMsSUFBSSxDQUFDRyxJQUFMLEVBQWI7QUFDSCxLQVpELENBWUUsT0FBT0MsR0FBUCxFQUFZO0FBQ1ZDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJGLEdBQXpCO0FBQ0g7QUFDSixHQWpCNEI7QUFrQjdCRyxFQUFBQSxZQUFZLEVBQUUsT0FBT1QsQ0FBUCxFQUFVVSxNQUFWLEtBQXFCO0FBQy9CLFFBQUk7QUFDQSxZQUFNLEVBQUNDLE9BQUQsRUFBVUMsSUFBSSxHQUFHLEVBQWpCLEVBQXFCQyxNQUFNLEdBQUcsQ0FBOUIsRUFBaUNDLFFBQVEsR0FBRyxFQUE1QyxFQUFnREMsSUFBSSxHQUFHLEVBQXZELEtBQThETCxNQUFwRTs7QUFFQSxZQUFNTSxNQUFNLEdBQUcsTUFBTSxJQUFJQyxlQUFKLENBQVc7QUFDNUJOLFFBQUFBLE9BRDRCO0FBRTVCQyxRQUFBQSxJQUY0QjtBQUc1QkMsUUFBQUEsTUFINEI7QUFJNUJDLFFBQUFBLFFBSjRCO0FBSzVCQyxRQUFBQSxJQUw0QixFQUFYLENBQXJCOzs7QUFRQSxhQUFPLE1BQU1DLE1BQU0sQ0FBQ1gsSUFBUCxFQUFiO0FBQ0gsS0FaRCxDQVlFLE9BQU9DLEdBQVAsRUFBWTtBQUNWQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkYsR0FBOUI7QUFDSDtBQUNKLEdBbEM0QixFQUExQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSAnLi8uLi9tb2R1bGVzL3VzZXInXG5pbXBvcnQgV2FsbGV0IGZyb20gJy4vLi4vbW9kdWxlcy93YWxsZXQnXG5cbmV4cG9ydCBjb25zdCB0eXBlRGVmc011dGF0aW9uID0gYFxuICAgIHR5cGUgTXV0YXRpb24ge1xuICAgICAgICBzZXRVc2VyKGZpcmViYXNlX2lkOiBTdHJpbmcpOiBVc2VyXG4gICAgICAgIGNyZWF0ZVdhbGxldChcbiAgICAgICAgICAgIHVzZXJfaWQ6IFN0cmluZyxcbiAgICAgICAgICAgIG5hbWU6IFN0cmluZyxcbiAgICAgICAgICAgIGFtb3VudDogSW50LFxuICAgICAgICAgICAgY3VycmVuY3k6IFN0cmluZyxcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgKTogV2FsbGV0XG4gICAgfVxuYFxuXG4vLyBNb3ZlIHRvIFVTRVJfTU9EVUxFU1xuXG5leHBvcnQgY29uc3QgcmVzb2x2ZXJzTXV0YXRpb24gPSB7XG4gICAgc2V0VXNlcjogYXN5bmMgKF8se2ZpcmViYXNlX2lkfSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe1xuICAgICAgICAgICAgICAgIGZpcmViYXNlX2lkXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZih1c2VyKSByZXR1cm4gdXNlclxuXG4gICAgICAgICAgICB1c2VyID0gYXdhaXQgbmV3IFVzZXIoe1xuICAgICAgICAgICAgICAgIGZpcmViYXNlX2lkLFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHVzZXIuc2F2ZSgpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldFVzZXI6ICcsIGVycilcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlV2FsbGV0OiBhc3luYyAoXywgcGFyYW1zKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7dXNlcl9pZCwgbmFtZSA9ICcnLCBhbW91bnQgPSAwLCBjdXJyZW5jeSA9ICcnLCB0eXBlID0gJycgfSA9IHBhcmFtcztcblxuICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gYXdhaXQgbmV3IFdhbGxldCh7XG4gICAgICAgICAgICAgICAgdXNlcl9pZCxcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgICAgICBjdXJyZW5jeSxcbiAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgd2FsbGV0LnNhdmUoKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGVXYWxsZXQ6ICcsIGVycilcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==