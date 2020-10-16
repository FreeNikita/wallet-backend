"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _mongoose = require("mongoose");

const userSchema = new _mongoose.Schema({
  firebase_id: String,
  name: String,
  surname: String,
  email: String,
  createdDate: {
    type: Date,
    default: Date.now }

  // wallets: {
  //     type: [],
  //
  // }
});

// userSchema.methods.setUser = async function(id){
//     // const user = await User.findOne({
//     //     firebase_id: id
//     // })
//
//     return "test"
// }
var _default =
(0, _mongoose.model)('User', userSchema);exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL3VzZXIuanMiXSwibmFtZXMiOlsidXNlclNjaGVtYSIsIlNjaGVtYSIsImZpcmViYXNlX2lkIiwiU3RyaW5nIiwibmFtZSIsInN1cm5hbWUiLCJlbWFpbCIsImNyZWF0ZWREYXRlIiwidHlwZSIsIkRhdGUiLCJkZWZhdWx0Iiwibm93Il0sIm1hcHBpbmdzIjoib0dBQUE7O0FBRUEsTUFBTUEsVUFBVSxHQUFHLElBQUlDLGdCQUFKLENBQVc7QUFDMUJDLEVBQUFBLFdBQVcsRUFBRUMsTUFEYTtBQUUxQkMsRUFBQUEsSUFBSSxFQUFFRCxNQUZvQjtBQUcxQkUsRUFBQUEsT0FBTyxFQUFFRixNQUhpQjtBQUkxQkcsRUFBQUEsS0FBSyxFQUFFSCxNQUptQjtBQUsxQkksRUFBQUEsV0FBVyxFQUFFO0FBQ1RDLElBQUFBLElBQUksRUFBRUMsSUFERztBQUVUQyxJQUFBQSxPQUFPLEVBQUVELElBQUksQ0FBQ0UsR0FGTDs7QUFJYjtBQUNBO0FBQ0E7QUFDQTtBQVowQixDQUFYLENBQW5COztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHFCQUFNLE1BQU4sRUFBY1gsVUFBZCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbCB9IGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAgIGZpcmViYXNlX2lkOiBTdHJpbmcsXG4gICAgbmFtZTogU3RyaW5nLFxuICAgIHN1cm5hbWU6IFN0cmluZyxcbiAgICBlbWFpbDogU3RyaW5nLFxuICAgIGNyZWF0ZWREYXRlOiB7XG4gICAgICAgIHR5cGU6IERhdGUsXG4gICAgICAgIGRlZmF1bHQ6IERhdGUubm93XG4gICAgfSxcbiAgICAvLyB3YWxsZXRzOiB7XG4gICAgLy8gICAgIHR5cGU6IFtdLFxuICAgIC8vXG4gICAgLy8gfVxufSlcblxuLy8gdXNlclNjaGVtYS5tZXRob2RzLnNldFVzZXIgPSBhc3luYyBmdW5jdGlvbihpZCl7XG4vLyAgICAgLy8gY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7XG4vLyAgICAgLy8gICAgIGZpcmViYXNlX2lkOiBpZFxuLy8gICAgIC8vIH0pXG4vL1xuLy8gICAgIHJldHVybiBcInRlc3RcIlxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBtb2RlbCgnVXNlcicsIHVzZXJTY2hlbWEgKVxuIl19