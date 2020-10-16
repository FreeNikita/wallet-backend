"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.resolversMutation = exports.typeDefsMutation = void 0;var _user = _interopRequireDefault(require("./../modules/user"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const typeDefsMutation = `
    type Mutation {
        setUser(firebase_id: String): User
    }
`;

// Move to USER_MODULES
exports.typeDefsMutation = typeDefsMutation;const resolversMutation = {
  setUser: async (_, { firebase_id }) => {
    try {
      let user = await _user.default.findOne({ firebase_id });

      if (user) return user;

      user = await _user.default.create({ firebase_id });

      return user;
    } catch (err) {
      console.log('setUser: ', err);
    }
  } };exports.resolversMutation = resolversMutation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaFFML011dGF0aW9uLmpzIl0sIm5hbWVzIjpbInR5cGVEZWZzTXV0YXRpb24iLCJyZXNvbHZlcnNNdXRhdGlvbiIsInNldFVzZXIiLCJfIiwiZmlyZWJhc2VfaWQiLCJ1c2VyIiwiVXNlciIsImZpbmRPbmUiLCJjcmVhdGUiLCJlcnIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoieUlBQUEsaUU7O0FBRU8sTUFBTUEsZ0JBQWdCLEdBQUk7Ozs7Q0FBMUI7O0FBTVA7NENBQ08sTUFBTUMsaUJBQWlCLEdBQUc7QUFDN0JDLEVBQUFBLE9BQU8sRUFBRSxPQUFPQyxDQUFQLEVBQVMsRUFBQ0MsV0FBRCxFQUFULEtBQTJCO0FBQ2hDLFFBQUk7QUFDQSxVQUFJQyxJQUFJLEdBQUcsTUFBTUMsY0FBS0MsT0FBTCxDQUFhLEVBQUNILFdBQUQsRUFBYixDQUFqQjs7QUFFQSxVQUFHQyxJQUFILEVBQVMsT0FBT0EsSUFBUDs7QUFFVEEsTUFBQUEsSUFBSSxHQUFHLE1BQU1DLGNBQUtFLE1BQUwsQ0FBWSxFQUFDSixXQUFELEVBQVosQ0FBYjs7QUFFQSxhQUFPQyxJQUFQO0FBQ0gsS0FSRCxDQVFFLE9BQU9JLEdBQVAsRUFBWTtBQUNWQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCRixHQUF6QjtBQUNIO0FBQ0osR0FiNEIsRUFBMUIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gJy4vLi4vbW9kdWxlcy91c2VyJ1xuXG5leHBvcnQgY29uc3QgdHlwZURlZnNNdXRhdGlvbiA9IGBcbiAgICB0eXBlIE11dGF0aW9uIHtcbiAgICAgICAgc2V0VXNlcihmaXJlYmFzZV9pZDogU3RyaW5nKTogVXNlclxuICAgIH1cbmBcblxuLy8gTW92ZSB0byBVU0VSX01PRFVMRVNcbmV4cG9ydCBjb25zdCByZXNvbHZlcnNNdXRhdGlvbiA9IHtcbiAgICBzZXRVc2VyOiBhc3luYyAoXyx7ZmlyZWJhc2VfaWR9KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7ZmlyZWJhc2VfaWR9KVxuXG4gICAgICAgICAgICBpZih1c2VyKSByZXR1cm4gdXNlclxuXG4gICAgICAgICAgICB1c2VyID0gYXdhaXQgVXNlci5jcmVhdGUoe2ZpcmViYXNlX2lkfSlcblxuICAgICAgICAgICAgcmV0dXJuIHVzZXJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2V0VXNlcjogJywgZXJyKVxuICAgICAgICB9XG4gICAgfVxufSJdfQ==