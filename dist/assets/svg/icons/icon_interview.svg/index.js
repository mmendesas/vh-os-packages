"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var icon_interview = function icon_interview(props) {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "46",
    height: props.height || "46",
    fill: props.fill || "none",
    viewBox: props.viewBox || "0 0 46 46"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "#788894",
    clipPath: "url(#prefix__clip0)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.637 44.466c-.167-.167-.399-.263-.635-.263-.237 0-.468.096-.635.263-.168.167-.264.4-.264.636s.096.468.264.635c.167.167.398.263.635.263.236 0 .468-.096.635-.263.167-.167.263-.4.263-.635 0-.237-.096-.468-.263-.636zM33.518 38.117c-.167-.167-.399-.263-.635-.263s-.468.096-.635.263c-.167.167-.264.4-.264.635 0 .237.096.468.264.636.167.167.399.263.635.263s.468-.096.635-.264c.167-.167.263-.398.263-.635 0-.236-.096-.468-.263-.635z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M43.102 14.52c.68-.682 1.101-1.623 1.101-2.66v-.72c0-2.08-1.693-3.773-3.773-3.773-2.081 0-3.774 1.693-3.774 3.774v.718c0 1.038.421 1.979 1.101 2.662-1.474.81-2.545 2.267-2.825 3.987h-4.116c-1.486 0-2.695 1.209-2.695 2.695 0 .315.055.617.155.899H17.724c.1-.282.155-.584.155-.899 0-1.486-1.21-2.695-2.695-2.695h-4.116c-.28-1.72-1.35-3.177-2.825-3.987.68-.683 1.1-1.624 1.1-2.662v-.718c0-2.081-1.692-3.774-3.773-3.774-2.08 0-3.773 1.693-3.773 3.774v.718c0 1.038.42 1.979 1.1 2.662C1.173 15.467 0 17.303 0 19.405v10.078c0 2.815 2.29 5.106 5.106 5.106h7.113v8.58c0 .364.07.713.196 1.033h-3.55c-.497 0-.899.402-.899.898 0 .497.402.899.899.899h32.134c.496 0 .898-.402.898-.898 0-.497-.402-.899-.898-.899h-7.414c.126-.32.196-.669.196-1.033v-1.033c0-.496-.402-.899-.898-.899s-.899.403-.899.899v1.033c0 .57-.463 1.033-1.033 1.033-.57 0-1.033-.463-1.033-1.033V31.827c0-1.4 1.139-2.538 2.538-2.538h11.747v.195c0 1.824-1.484 3.309-3.31 3.309h-8.01c-.496 0-.899.402-.899.898v1.438c0 .496.403.898.899.898s.898-.402.898-.898v-.54h7.113c2.815 0 5.106-2.29 5.106-5.105V19.406c0-2.103-1.172-3.938-2.898-4.885zm-4.649-3.38c0-1.09.887-1.976 1.977-1.976s1.976.887 1.976 1.977v.718c0 1.09-.886 1.977-1.976 1.977-1.09 0-1.977-.887-1.977-1.977v-.718zm-34.86 0c0-1.09.887-1.976 1.977-1.976s1.977.887 1.977 1.977v.718c0 1.09-.887 1.977-1.977 1.977s-1.976-.887-1.976-1.977v-.718zm-1.796 8.266c0-2.08 1.693-3.773 3.773-3.773 2.081 0 3.774 1.693 3.774 3.773 0 .496.402.899.898.899h4.942c.495 0 .898.403.898.898s-.403.899-.898.899H9.952c-1.429 0-2.735-.783-3.41-2.042-.234-.437-.779-.602-1.216-.368-.438.235-.602.78-.368 1.217.9 1.678 2.566 2.778 4.436 2.962-.033.093-.05.193-.05.297v3.324H1.797v-8.086zm11.085 8.086h-1.741v-3.324c0-.094-.015-.184-.041-.27h1.782c-.307.53-.484 1.143-.484 1.797 0 .655.177 1.268.484 1.797zm3.2 15.678c0 .57-.464 1.033-1.033 1.033-.57 0-1.033-.463-1.033-1.033V33.69c0-.496-.403-.898-.899-.898h-8.01c-1.826 0-3.31-1.485-3.31-3.31v-.194H13.543c1.4 0 2.539 1.139 2.539 2.538V43.17zm4.223 1.033h-2.622c.126-.32.196-.669.196-1.033V31.827c0-.947-.306-1.824-.824-2.538h3.25v14.914zm3.593 0h-1.796V29.29h1.796v14.914zm4.42 0h-2.623V29.29h3.25c-.518.714-.824 1.59-.824 2.538V43.17c0 .364.07.713.196 1.033zm1.69-16.71H15.992c-.99 0-1.797-.807-1.797-1.798 0-.99.806-1.797 1.797-1.797h14.016c.99 0 1.797.806 1.797 1.797 0 .991-.806 1.797-1.797 1.797zm4.851-3.325v3.324h-1.741c.307-.529.484-1.142.484-1.797 0-.654-.177-1.268-.484-1.797H34.9c-.026.085-.04.176-.04.27zm9.344 3.324h-7.547v-3.324c0-.104-.017-.204-.05-.297 1.87-.184 3.536-1.284 4.436-2.962.234-.438.07-.982-.368-1.217-.437-.234-.982-.07-1.216.368-.675 1.26-1.981 2.042-3.41 2.042h-5.232c-.495 0-.898-.404-.898-.899s.403-.898.898-.898h4.942c.496 0 .898-.403.898-.899 0-2.08 1.693-3.773 3.774-3.773 2.08 0 3.773 1.693 3.773 3.773v8.086z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M29.469 0H16.53c-1.486 0-2.695 1.21-2.695 2.695V11.5c0 1.486 1.209 2.695 2.695 2.695h3.132l2.702 2.702c.175.175.405.263.635.263.23 0 .46-.088.635-.263l2.702-2.702h3.132c1.486 0 2.695-1.209 2.695-2.695V2.695C32.164 1.21 30.954 0 29.469 0zm.898 11.5c0 .495-.403.898-.898.898h-3.504c-.238 0-.467.095-.636.264L23 14.992l-2.329-2.33c-.168-.169-.397-.264-.635-.264h-3.504c-.495 0-.898-.403-.898-.898V2.695c0-.495.403-.898.898-.898H29.47c.495 0 .898.403.898.898V11.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.413 6.118c-.168-.168-.4-.263-.636-.263s-.468.095-.635.263c-.167.167-.263.4-.263.635 0 .237.096.469.263.636.167.167.4.263.635.263.237 0 .468-.096.636-.263.167-.167.263-.4.263-.636s-.096-.468-.263-.635zM23.635 6.118c-.167-.167-.399-.263-.635-.263s-.468.096-.635.263c-.167.167-.263.4-.263.635 0 .237.096.469.263.636.167.167.399.263.635.263s.468-.096.635-.263c.167-.167.263-.4.263-.636s-.096-.468-.263-.635zM27.858 6.118c-.167-.168-.399-.263-.635-.263-.237 0-.468.095-.636.263-.167.167-.263.4-.263.635 0 .237.096.469.263.636.168.167.4.263.636.263s.468-.096.635-.263c.167-.167.263-.4.263-.636s-.096-.468-.263-.635z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "prefix__clip0"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0H46V46H0z"
  }))));
};

var _default = icon_interview;
exports.default = _default;