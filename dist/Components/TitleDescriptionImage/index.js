"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../Grid/index");

var _index2 = _interopRequireDefault(require("../TitleDescription/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHTitleDescriptionImage = function VHTitleDescriptionImage(props) {
  return /*#__PURE__*/_react.default.createElement(_index.Row, {
    row: true
  }, /*#__PURE__*/_react.default.createElement(_index.Row, null, /*#__PURE__*/_react.default.createElement(_index2.default, {
    titleColor: props.titleColor,
    descriptionColor: props.descriptionColor,
    titleVariant: props.titleVariant,
    descriptionVariant: props.descriptionVariant,
    title: props.title,
    description: props.description
  })), /*#__PURE__*/_react.default.createElement(_index.Row, null, /*#__PURE__*/_react.default.createElement(S.ImgWrapper, {
    image: props.image
  })));
};

VHTitleDescriptionImage.defaultProps = {
  className: ''
};
VHTitleDescriptionImage.prototypes = {
  className: _propTypes.default.string,
  onEvent: _propTypes.default.func,
  data: _propTypes.default.object,
  titleColor: _propTypes.default.string,
  descriptionColor: _propTypes.default.string,
  titleVariant: _propTypes.default.string,
  descriptionVariant: _propTypes.default.string,
  title: _propTypes.default.string,
  description: _propTypes.default.string,
  image: _propTypes.default.string
};
var _default = VHTitleDescriptionImage;
exports.default = _default;