"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _mongoose = require("mongoose");

const walletSchema = new _mongoose.Schema({
  user_id: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User" },

  name: String,
  amount: {
    type: Number,
    default: '' },

  currency: String,
  type: String,
  history: [{
    amount: Number,
    title: String,
    category: String,
    subCategory: String,
    date: String,
    description: String }]



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
(0, _mongoose.model)('Wallet', walletSchema);exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL3dhbGxldC5qcyJdLCJuYW1lcyI6WyJ3YWxsZXRTY2hlbWEiLCJTY2hlbWEiLCJ1c2VyX2lkIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJuYW1lIiwiU3RyaW5nIiwiYW1vdW50IiwiTnVtYmVyIiwiZGVmYXVsdCIsImN1cnJlbmN5IiwiaGlzdG9yeSIsInRpdGxlIiwiY2F0ZWdvcnkiLCJzdWJDYXRlZ29yeSIsImRhdGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Im9HQUFBOztBQUVBLE1BQU1BLFlBQVksR0FBRyxJQUFJQyxnQkFBSixDQUFXO0FBQzVCQyxFQUFBQSxPQUFPLEVBQUU7QUFDTEMsSUFBQUEsSUFBSSxFQUFFRixpQkFBT0csS0FBUCxDQUFhQyxRQURkO0FBRUxDLElBQUFBLEdBQUcsRUFBRSxNQUZBLEVBRG1COztBQUs1QkMsRUFBQUEsSUFBSSxFQUFFQyxNQUxzQjtBQU01QkMsRUFBQUEsTUFBTSxFQUFFO0FBQ0pOLElBQUFBLElBQUksRUFBRU8sTUFERjtBQUVKQyxJQUFBQSxPQUFPLEVBQUUsRUFGTCxFQU5vQjs7QUFVNUJDLEVBQUFBLFFBQVEsRUFBRUosTUFWa0I7QUFXNUJMLEVBQUFBLElBQUksRUFBRUssTUFYc0I7QUFZNUJLLEVBQUFBLE9BQU8sRUFBRSxDQUFDO0FBQ05KLElBQUFBLE1BQU0sRUFBRUMsTUFERjtBQUVOSSxJQUFBQSxLQUFLLEVBQUVOLE1BRkQ7QUFHTk8sSUFBQUEsUUFBUSxFQUFFUCxNQUhKO0FBSU5RLElBQUFBLFdBQVcsRUFBRVIsTUFKUDtBQUtOUyxJQUFBQSxJQUFJLEVBQUVULE1BTEE7QUFNTlUsSUFBQUEsV0FBVyxFQUFFVixNQU5QLEVBQUQ7Ozs7QUFVVDtBQUNBO0FBQ0E7QUFDQTtBQXpCNEIsQ0FBWCxDQUFyQjs7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUscUJBQU0sUUFBTixFQUFnQlIsWUFBaEIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSwgbW9kZWwgfSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IHdhbGxldFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAgIHVzZXJfaWQ6IHtcbiAgICAgICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgICByZWY6IFwiVXNlclwiXG4gICAgfSxcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgYW1vdW50OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIGN1cnJlbmN5OiBTdHJpbmcsXG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGhpc3Rvcnk6IFt7XG4gICAgICAgIGFtb3VudDogTnVtYmVyLFxuICAgICAgICB0aXRsZTogU3RyaW5nLFxuICAgICAgICBjYXRlZ29yeTogU3RyaW5nLFxuICAgICAgICBzdWJDYXRlZ29yeTogU3RyaW5nLFxuICAgICAgICBkYXRlOiBTdHJpbmcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBTdHJpbmcsXG4gICAgfV1cblxuXG4gICAgLy8gd2FsbGV0czoge1xuICAgIC8vICAgICB0eXBlOiBbXSxcbiAgICAvL1xuICAgIC8vIH1cbn0pXG5cbi8vIHVzZXJTY2hlbWEubWV0aG9kcy5zZXRVc2VyID0gYXN5bmMgZnVuY3Rpb24oaWQpe1xuLy8gICAgIC8vIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe1xuLy8gICAgIC8vICAgICBmaXJlYmFzZV9pZDogaWRcbi8vICAgICAvLyB9KVxuLy9cbi8vICAgICByZXR1cm4gXCJ0ZXN0XCJcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgbW9kZWwoJ1dhbGxldCcsIHdhbGxldFNjaGVtYSApXG4iXX0=