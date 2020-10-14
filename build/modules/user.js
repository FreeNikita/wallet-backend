"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _mongoose = require("mongoose");

const user = new _mongoose.Schema({
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
});var _default =

(0, _mongoose.model)('User', user);exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL3VzZXIuanMiXSwibmFtZXMiOlsidXNlciIsIlNjaGVtYSIsIm5hbWUiLCJTdHJpbmciLCJzdXJuYW1lIiwiZW1haWwiLCJjcmVhdGVkRGF0ZSIsInR5cGUiLCJEYXRlIiwiZGVmYXVsdCIsIm5vdyJdLCJtYXBwaW5ncyI6Im9HQUFBOztBQUVBLE1BQU1BLElBQUksR0FBRyxJQUFJQyxnQkFBSixDQUFXO0FBQ3BCQyxFQUFBQSxJQUFJLEVBQUVDLE1BRGM7QUFFcEJDLEVBQUFBLE9BQU8sRUFBRUQsTUFGVztBQUdwQkUsRUFBQUEsS0FBSyxFQUFFRixNQUhhO0FBSXBCRyxFQUFBQSxXQUFXLEVBQUU7QUFDVEMsSUFBQUEsSUFBSSxFQUFFQyxJQURHO0FBRVRDLElBQUFBLE9BQU8sRUFBRUQsSUFBSSxDQUFDRSxHQUZMOztBQUliO0FBQ0E7QUFDQTtBQUNBO0FBWG9CLENBQVgsQ0FBYixDOztBQWNlLHFCQUFNLE1BQU4sRUFBY1YsSUFBZCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbCB9IGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgdXNlciA9IG5ldyBTY2hlbWEoe1xuICAgIG5hbWU6IFN0cmluZyxcbiAgICBzdXJuYW1lOiBTdHJpbmcsXG4gICAgZW1haWw6IFN0cmluZyxcbiAgICBjcmVhdGVkRGF0ZToge1xuICAgICAgICB0eXBlOiBEYXRlLFxuICAgICAgICBkZWZhdWx0OiBEYXRlLm5vd1xuICAgIH0sXG4gICAgLy8gd2FsbGV0czoge1xuICAgIC8vICAgICB0eXBlOiBbXSxcbiAgICAvL1xuICAgIC8vIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IG1vZGVsKCdVc2VyJywgdXNlcilcbiJdfQ==