"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.resolversMutation = exports.typeDefsMutation = void 0;var _user = _interopRequireDefault(require("./../modules/user"));
var _wallet = _interopRequireDefault(require("../modules/wallet"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const typeDefsMutation = `
    type Mutation {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaFFML011dGF0aW9uLmpzIl0sIm5hbWVzIjpbInR5cGVEZWZzTXV0YXRpb24iLCJyZXNvbHZlcnNNdXRhdGlvbiIsImNyZWF0ZVdhbGxldCIsIl8iLCJwYXJhbXMiLCJ1c2VyX2lkIiwibmFtZSIsImFtb3VudCIsImN1cnJlbmN5IiwidHlwZSIsIndhbGxldCIsIldhbGxldCIsInNhdmUiLCJlcnIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoieUlBQUE7QUFDQSxtRTs7QUFFTyxNQUFNQSxnQkFBZ0IsR0FBSTs7Ozs7Ozs7OztDQUExQjs7QUFZUDs7QUFFTyxNQUFNQyxpQkFBaUIsR0FBRztBQUM3QkMsRUFBQUEsWUFBWSxFQUFFLE9BQU9DLENBQVAsRUFBVUMsTUFBVixLQUFxQjtBQUMvQixRQUFJO0FBQ0EsWUFBTSxFQUFDQyxPQUFELEVBQVVDLElBQUksR0FBRyxFQUFqQixFQUFxQkMsTUFBTSxHQUFHLENBQTlCLEVBQWlDQyxRQUFRLEdBQUcsRUFBNUMsRUFBZ0RDLElBQUksR0FBRyxFQUF2RCxLQUE4REwsTUFBcEU7O0FBRUEsWUFBTU0sTUFBTSxHQUFHLE1BQU0sSUFBSUMsZUFBSixDQUFXO0FBQzVCTixRQUFBQSxPQUQ0QjtBQUU1QkMsUUFBQUEsSUFGNEI7QUFHNUJDLFFBQUFBLE1BSDRCO0FBSTVCQyxRQUFBQSxRQUo0QjtBQUs1QkMsUUFBQUEsSUFMNEIsRUFBWCxDQUFyQjs7O0FBUUEsYUFBTyxNQUFNQyxNQUFNLENBQUNFLElBQVAsRUFBYjtBQUNILEtBWkQsQ0FZRSxPQUFPQyxHQUFQLEVBQVk7QUFDVkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJGLEdBQTlCO0FBQ0g7QUFDSixHQWpCNEIsRUFBMUIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gJy4vLi4vbW9kdWxlcy91c2VyJ1xuaW1wb3J0IFdhbGxldCBmcm9tICcuLi9tb2R1bGVzL3dhbGxldCdcblxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzTXV0YXRpb24gPSBgXG4gICAgdHlwZSBNdXRhdGlvbiB7XG4gICAgICAgIGNyZWF0ZVdhbGxldChcbiAgICAgICAgICAgIHVzZXJfaWQ6IFN0cmluZyxcbiAgICAgICAgICAgIG5hbWU6IFN0cmluZyxcbiAgICAgICAgICAgIGFtb3VudDogSW50LFxuICAgICAgICAgICAgY3VycmVuY3k6IFN0cmluZyxcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgKTogV2FsbGV0XG4gICAgfVxuYFxuXG4vLyBNb3ZlIHRvIFVTRVJfTU9EVUxFU1xuXG5leHBvcnQgY29uc3QgcmVzb2x2ZXJzTXV0YXRpb24gPSB7XG4gICAgY3JlYXRlV2FsbGV0OiBhc3luYyAoXywgcGFyYW1zKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7dXNlcl9pZCwgbmFtZSA9ICcnLCBhbW91bnQgPSAwLCBjdXJyZW5jeSA9ICcnLCB0eXBlID0gJycgfSA9IHBhcmFtcztcblxuICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gYXdhaXQgbmV3IFdhbGxldCh7XG4gICAgICAgICAgICAgICAgdXNlcl9pZCxcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgICAgICBjdXJyZW5jeSxcbiAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgd2FsbGV0LnNhdmUoKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGVXYWxsZXQ6ICcsIGVycilcbiAgICAgICAgfVxuICAgIH0sXG59XG4iXX0=