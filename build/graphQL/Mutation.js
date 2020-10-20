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
        
        removeWallet(
            wallet_id: String,
            user_id: String
        ): Id
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
  },
  removeWallet: async (_, params) => {
    try {
      const { wallet_id, user_id } = params;
      await _wallet.default.findOneAndDelete({
        _id: wallet_id,
        user_id });


      return { id: wallet_id };
    } catch (err) {
      console.log('removeWallet: ', err);
    }
  } };exports.resolversMutation = resolversMutation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaFFML011dGF0aW9uLmpzIl0sIm5hbWVzIjpbInR5cGVEZWZzTXV0YXRpb24iLCJyZXNvbHZlcnNNdXRhdGlvbiIsImNyZWF0ZVdhbGxldCIsIl8iLCJwYXJhbXMiLCJ1c2VyX2lkIiwibmFtZSIsImFtb3VudCIsImN1cnJlbmN5IiwidHlwZSIsIndhbGxldCIsIldhbGxldCIsInNhdmUiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlV2FsbGV0Iiwid2FsbGV0X2lkIiwiZmluZE9uZUFuZERlbGV0ZSIsIl9pZCIsImlkIl0sIm1hcHBpbmdzIjoieUlBQUE7QUFDQSxtRTs7QUFFTyxNQUFNQSxnQkFBZ0IsR0FBSTs7Ozs7Ozs7Ozs7Ozs7O0NBQTFCOztBQWlCUDs7QUFFTyxNQUFNQyxpQkFBaUIsR0FBRztBQUM3QkMsRUFBQUEsWUFBWSxFQUFFLE9BQU9DLENBQVAsRUFBVUMsTUFBVixLQUFxQjtBQUMvQixRQUFJO0FBQ0EsWUFBTSxFQUFDQyxPQUFELEVBQVVDLElBQUksR0FBRyxFQUFqQixFQUFxQkMsTUFBTSxHQUFHLENBQTlCLEVBQWlDQyxRQUFRLEdBQUcsRUFBNUMsRUFBZ0RDLElBQUksR0FBRyxFQUF2RCxLQUE4REwsTUFBcEU7O0FBRUEsWUFBTU0sTUFBTSxHQUFHLE1BQU0sSUFBSUMsZUFBSixDQUFXO0FBQzVCTixRQUFBQSxPQUQ0QjtBQUU1QkMsUUFBQUEsSUFGNEI7QUFHNUJDLFFBQUFBLE1BSDRCO0FBSTVCQyxRQUFBQSxRQUo0QjtBQUs1QkMsUUFBQUEsSUFMNEIsRUFBWCxDQUFyQjs7O0FBUUEsYUFBTyxNQUFNQyxNQUFNLENBQUNFLElBQVAsRUFBYjtBQUNILEtBWkQsQ0FZRSxPQUFPQyxHQUFQLEVBQVk7QUFDVkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJGLEdBQTlCO0FBQ0g7QUFDSixHQWpCNEI7QUFrQjdCRyxFQUFBQSxZQUFZLEVBQUUsT0FBT2IsQ0FBUCxFQUFVQyxNQUFWLEtBQXFCO0FBQy9CLFFBQUk7QUFDQSxZQUFNLEVBQUVhLFNBQUYsRUFBYVosT0FBYixLQUF5QkQsTUFBL0I7QUFDQSxZQUFNTyxnQkFBT08sZ0JBQVAsQ0FBd0I7QUFDMUJDLFFBQUFBLEdBQUcsRUFBRUYsU0FEcUI7QUFFMUJaLFFBQUFBLE9BRjBCLEVBQXhCLENBQU47OztBQUtBLGFBQU8sRUFBRWUsRUFBRSxFQUFFSCxTQUFOLEVBQVA7QUFDSCxLQVJELENBUUUsT0FBT0osR0FBUCxFQUFZO0FBQ1ZDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCRixHQUE5QjtBQUNIO0FBQ0osR0E5QjRCLEVBQTFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tICcuLy4uL21vZHVsZXMvdXNlcidcbmltcG9ydCBXYWxsZXQgZnJvbSAnLi4vbW9kdWxlcy93YWxsZXQnXG5cbmV4cG9ydCBjb25zdCB0eXBlRGVmc011dGF0aW9uID0gYFxuICAgIHR5cGUgTXV0YXRpb24ge1xuICAgICAgICBjcmVhdGVXYWxsZXQoXG4gICAgICAgICAgICB1c2VyX2lkOiBTdHJpbmcsXG4gICAgICAgICAgICBuYW1lOiBTdHJpbmcsXG4gICAgICAgICAgICBhbW91bnQ6IEludCxcbiAgICAgICAgICAgIGN1cnJlbmN5OiBTdHJpbmcsXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICk6IFdhbGxldFxuICAgICAgICBcbiAgICAgICAgcmVtb3ZlV2FsbGV0KFxuICAgICAgICAgICAgd2FsbGV0X2lkOiBTdHJpbmcsXG4gICAgICAgICAgICB1c2VyX2lkOiBTdHJpbmdcbiAgICAgICAgKTogSWRcbiAgICB9XG5gXG5cbi8vIE1vdmUgdG8gVVNFUl9NT0RVTEVTXG5cbmV4cG9ydCBjb25zdCByZXNvbHZlcnNNdXRhdGlvbiA9IHtcbiAgICBjcmVhdGVXYWxsZXQ6IGFzeW5jIChfLCBwYXJhbXMpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHt1c2VyX2lkLCBuYW1lID0gJycsIGFtb3VudCA9IDAsIGN1cnJlbmN5ID0gJycsIHR5cGUgPSAnJyB9ID0gcGFyYW1zO1xuXG4gICAgICAgICAgICBjb25zdCB3YWxsZXQgPSBhd2FpdCBuZXcgV2FsbGV0KHtcbiAgICAgICAgICAgICAgICB1c2VyX2lkLFxuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgYW1vdW50LFxuICAgICAgICAgICAgICAgIGN1cnJlbmN5LFxuICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB3YWxsZXQuc2F2ZSgpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0ZVdhbGxldDogJywgZXJyKVxuICAgICAgICB9XG4gICAgfSxcbiAgICByZW1vdmVXYWxsZXQ6IGFzeW5jIChfLCBwYXJhbXMpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgd2FsbGV0X2lkLCB1c2VyX2lkIH0gPSBwYXJhbXM7XG4gICAgICAgICAgICBhd2FpdCBXYWxsZXQuZmluZE9uZUFuZERlbGV0ZSh7XG4gICAgICAgICAgICAgICAgX2lkOiB3YWxsZXRfaWQsXG4gICAgICAgICAgICAgICAgdXNlcl9pZFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IHdhbGxldF9pZCB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZVdhbGxldDogJywgZXJyKVxuICAgICAgICB9XG4gICAgfVxufVxuIl19