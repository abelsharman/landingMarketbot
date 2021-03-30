"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _vue2TouchEvents = _interopRequireDefault(require("vue2-touch-events"));

var _smoothscrollPolyfill = _interopRequireDefault(require("smoothscroll-polyfill"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_smoothscrollPolyfill["default"].polyfill();

_vue["default"].use(_vue2TouchEvents["default"]);

_vue["default"].config.productionTip = false;
new _vue["default"]({
  router: _router["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');