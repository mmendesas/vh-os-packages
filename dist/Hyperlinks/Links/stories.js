"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Colors = _interopRequireDefault(require("../../Colors"));

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Hyperlinks|Links', module).add('xs', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    to: "#",
    xs: true,
    label: "VH link"
  }));
}).add('sm', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    to: "#",
    sm: true,
    label: "VH link"
  }));
}).add('lg', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    to: "#",
    lg: true,
    label: "VH link"
  }));
}).add('reverse', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '200px',
      height: '200px',
      backgroundColor: _Colors.default["primary-dark"],
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    reverse: true,
    to: "#",
    lg: true,
    label: "VH link reverse"
  }));
}).add('noUnderscore', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '200px',
      height: '200px',
      backgroundColor: _Colors.default["primary-dark"],
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    reverse: true,
    to: "#",
    lg: true,
    label: "VH link reverse",
    noUnderscore: true
  }));
});