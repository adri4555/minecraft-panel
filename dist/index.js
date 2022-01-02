"use strict";

var _app = _interopRequireDefault(require("./app.js"));

var _socket = require("./socket.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const appServer = _app.default.listen(3000, () => {
  console.log("Server on port: 3000");
});

(0, _socket.initSocketIo)(appServer).listen(3001, () => {
  console.log("Socket on port: 3001");
});