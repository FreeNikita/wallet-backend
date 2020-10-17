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
    type: String,
    categories: String,
    description: {
      type: String,
      default: '' } }]




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL3dhbGxldC5qcyJdLCJuYW1lcyI6WyJ3YWxsZXRTY2hlbWEiLCJTY2hlbWEiLCJ1c2VyX2lkIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJuYW1lIiwiU3RyaW5nIiwiYW1vdW50IiwiTnVtYmVyIiwiZGVmYXVsdCIsImN1cnJlbmN5IiwiaGlzdG9yeSIsImNhdGVnb3JpZXMiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Im9HQUFBOztBQUVBLE1BQU1BLFlBQVksR0FBRyxJQUFJQyxnQkFBSixDQUFXO0FBQzVCQyxFQUFBQSxPQUFPLEVBQUU7QUFDTEMsSUFBQUEsSUFBSSxFQUFFRixpQkFBT0csS0FBUCxDQUFhQyxRQURkO0FBRUxDLElBQUFBLEdBQUcsRUFBRSxNQUZBLEVBRG1COztBQUs1QkMsRUFBQUEsSUFBSSxFQUFFQyxNQUxzQjtBQU01QkMsRUFBQUEsTUFBTSxFQUFFO0FBQ0pOLElBQUFBLElBQUksRUFBRU8sTUFERjtBQUVKQyxJQUFBQSxPQUFPLEVBQUUsRUFGTCxFQU5vQjs7QUFVNUJDLEVBQUFBLFFBQVEsRUFBRUosTUFWa0I7QUFXNUJMLEVBQUFBLElBQUksRUFBRUssTUFYc0I7QUFZNUJLLEVBQUFBLE9BQU8sRUFBRSxDQUFDO0FBQ05KLElBQUFBLE1BQU0sRUFBRUMsTUFERjtBQUVOUCxJQUFBQSxJQUFJLEVBQUVLLE1BRkE7QUFHTk0sSUFBQUEsVUFBVSxFQUFFTixNQUhOO0FBSU5PLElBQUFBLFdBQVcsRUFBRTtBQUNUWixNQUFBQSxJQUFJLEVBQUVLLE1BREc7QUFFVEcsTUFBQUEsT0FBTyxFQUFFLEVBRkEsRUFKUCxFQUFEOzs7OztBQVdUO0FBQ0E7QUFDQTtBQUNBO0FBMUI0QixDQUFYLENBQXJCOztBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxxQkFBTSxRQUFOLEVBQWdCWCxZQUFoQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbCB9IGZyb20gJ21vbmdvb3NlJztcblxuY29uc3Qgd2FsbGV0U2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgdXNlcl9pZDoge1xuICAgICAgICB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgICAgIHJlZjogXCJVc2VyXCJcbiAgICB9LFxuICAgIG5hbWU6IFN0cmluZyxcbiAgICBhbW91bnQ6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBkZWZhdWx0OiAnJ1xuICAgIH0sXG4gICAgY3VycmVuY3k6IFN0cmluZyxcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgaGlzdG9yeTogW3tcbiAgICAgICAgYW1vdW50OiBOdW1iZXIsXG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgY2F0ZWdvcmllczogU3RyaW5nLFxuICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfVxuICAgIH1dXG5cblxuICAgIC8vIHdhbGxldHM6IHtcbiAgICAvLyAgICAgdHlwZTogW10sXG4gICAgLy9cbiAgICAvLyB9XG59KVxuXG4vLyB1c2VyU2NoZW1hLm1ldGhvZHMuc2V0VXNlciA9IGFzeW5jIGZ1bmN0aW9uKGlkKXtcbi8vICAgICAvLyBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHtcbi8vICAgICAvLyAgICAgZmlyZWJhc2VfaWQ6IGlkXG4vLyAgICAgLy8gfSlcbi8vXG4vLyAgICAgcmV0dXJuIFwidGVzdFwiXG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IG1vZGVsKCdXYWxsZXQnLCB3YWxsZXRTY2hlbWEgKVxuIl19