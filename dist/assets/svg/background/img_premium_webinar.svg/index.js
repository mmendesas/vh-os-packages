"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var img_premium_webinar = function img_premium_webinar(props) {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "457",
    height: props.height || "424",
    fill: props.fill || "none",
    viewBox: props.viewBox || "0 0 457 424"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M42.6731 260.014C47.0718 259.793 51.2157 262.277 54.4525 265.288C57.4472 268.073 58.4513 272.147 59.8616 276.001C61.3404 280.042 63.6 284 62.8523 288.24C62.0494 292.794 59.5008 297.117 55.6853 299.685C51.9387 302.206 47.1628 302.19 42.6731 301.82C38.495 301.476 34.4698 300.201 31.1198 297.661C27.8114 295.152 25.3629 291.689 24.0794 287.721C22.7949 283.75 22.542 279.427 23.9503 275.499C25.3308 271.648 28.5745 269.023 31.7143 266.426C35.0616 263.658 38.3487 260.23 42.6731 260.014Z",
    fill: "#F7EEFB"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: "0.2",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M212.8 62.4071C175.253 71.6792 133.691 52.4695 99.9556 70.9544C61.2151 92.182 19.8726 126.48 18.6903 168.768C17.5023 211.263 67.5044 235.379 94.4239 268.82C115.5 295.001 130.928 323.944 159.077 343.164C191.916 365.587 227.407 390.293 268.058 387.377C310.223 384.352 348.182 358.662 375.637 327.632C401.844 298.011 412.467 259.436 415.213 221.055C417.777 185.232 403.85 152.492 390.554 119.153C375.344 81.0141 373.066 26.5035 332.457 13.5395C290.746 0.223925 255.773 51.7953 212.8 62.4071Z",
    fill: "#D8ACE9"
  }), /*#__PURE__*/React.createElement("g", {
    filter: "url(#filter0_d)"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "94",
    y: "100",
    width: "312",
    height: "188",
    rx: "6",
    fill: "white"
  })), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M267.817 177.116C263.191 172.527 257.039 170 250.496 170C243.953 170 237.801 172.527 233.175 177.116C228.548 181.705 226 187.807 226 194.297C226 194.69 226.321 195.009 226.718 195.009C227.114 195.009 227.436 194.69 227.436 194.297C227.436 188.187 229.834 182.443 234.19 178.123C238.545 173.803 244.336 171.424 250.496 171.424C256.656 171.424 262.447 173.803 266.802 178.123C271.158 182.443 273.557 188.187 273.557 194.297C273.557 200.407 271.158 206.15 266.802 210.471C262.447 214.79 256.656 217.17 250.496 217.17C244.908 217.17 239.517 215.162 235.317 211.517C231.156 207.905 228.439 202.942 227.666 197.542C227.61 197.153 227.246 196.882 226.854 196.938C226.462 196.993 226.189 197.353 226.244 197.742C227.066 203.48 229.952 208.752 234.372 212.588C238.834 216.461 244.56 218.594 250.496 218.594C257.039 218.594 263.191 216.066 267.817 211.477C272.444 206.888 274.992 200.787 274.992 194.297C274.992 187.807 272.444 181.705 267.817 177.116Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M244.504 184.979C244.609 184.922 244.888 184.81 245.192 185.005L250.106 188.159C250.439 188.373 250.883 188.278 251.099 187.948C251.314 187.618 251.219 187.177 250.886 186.964L245.972 183.81C245.323 183.393 244.497 183.362 243.817 183.728C243.138 184.095 242.716 184.799 242.716 185.567V204.076C242.716 204.844 243.138 205.548 243.817 205.915C244.133 206.085 244.48 206.169 244.826 206.169C245.225 206.169 245.624 206.057 245.972 205.833L260.391 196.579C260.994 196.191 261.354 195.534 261.354 194.822C261.354 194.109 260.994 193.452 260.391 193.064L253.967 188.941C253.634 188.727 253.189 188.822 252.974 189.152C252.758 189.482 252.854 189.923 253.186 190.136L259.611 194.26C259.806 194.385 259.919 194.59 259.919 194.821C259.919 195.053 259.806 195.258 259.611 195.383L245.192 204.638C244.888 204.833 244.609 204.721 244.503 204.664C244.397 204.607 244.151 204.435 244.151 204.076V185.567C244.151 185.208 244.397 185.036 244.504 184.979Z",
    fill: "black"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M274.602 323.898C270.736 320.031 266.134 317.169 261.112 315.436C266.49 311.732 270.023 305.533 270.023 298.523C270.023 287.207 260.817 278 249.5 278C238.183 278 228.977 287.207 228.977 298.523C228.977 305.533 232.51 311.732 237.888 315.436C232.867 317.169 228.264 320.031 224.398 323.898C217.693 330.603 214 339.518 214 349H219.547C219.547 332.484 232.984 319.047 249.5 319.047C266.016 319.047 279.453 332.484 279.453 349H285C285 339.518 281.307 330.603 274.602 323.898ZM249.5 313.5C241.242 313.5 234.523 306.782 234.523 298.523C234.523 290.265 241.242 283.547 249.5 283.547C257.758 283.547 264.477 290.265 264.477 298.523C264.477 306.782 257.758 313.5 249.5 313.5Z",
    fill: "#D8ACE9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M191.531 308.969C188.754 306.191 185.448 304.135 181.841 302.891C185.704 300.23 188.242 295.777 188.242 290.742C188.242 282.613 181.629 276 173.5 276C165.371 276 158.758 282.613 158.758 290.742C158.758 295.777 161.296 300.23 165.159 302.891C161.552 304.135 158.246 306.191 155.469 308.969C150.652 313.785 148 320.189 148 327H151.984C151.984 315.136 161.636 305.484 173.5 305.484C185.364 305.484 195.016 315.136 195.016 327H199C199 320.189 196.347 313.785 191.531 308.969ZM173.5 301.5C167.568 301.5 162.742 296.674 162.742 290.742C162.742 284.81 167.568 279.984 173.5 279.984C179.432 279.984 184.258 284.81 184.258 290.742C184.258 296.674 179.432 301.5 173.5 301.5Z",
    fill: "#D8ACE9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M225.874 307.626C223.968 305.72 221.7 304.309 219.224 303.454C221.875 301.628 223.617 298.573 223.617 295.117C223.617 289.539 219.079 285 213.5 285C207.921 285 203.383 289.539 203.383 295.117C203.383 298.573 205.125 301.628 207.776 303.454C205.3 304.309 203.032 305.72 201.126 307.626C197.82 310.931 196 315.326 196 320H198.734C198.734 311.858 205.358 305.234 213.5 305.234C221.642 305.234 228.266 311.858 228.266 320H231C231 315.326 229.18 310.931 225.874 307.626ZM213.5 302.5C209.429 302.5 206.117 299.188 206.117 295.117C206.117 291.046 209.429 287.734 213.5 287.734C217.571 287.734 220.883 291.046 220.883 295.117C220.883 299.188 217.571 302.5 213.5 302.5Z",
    fill: "#D8ACE9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M299.874 309.626C297.968 307.72 295.7 306.309 293.224 305.454C295.875 303.628 297.617 300.573 297.617 297.117C297.617 291.539 293.079 287 287.5 287C281.921 287 277.383 291.539 277.383 297.117C277.383 300.573 279.125 303.628 281.776 305.454C279.3 306.309 277.032 307.72 275.126 309.626C271.82 312.931 270 317.326 270 322H272.734C272.734 313.858 279.358 307.234 287.5 307.234C295.642 307.234 302.266 313.858 302.266 322H305C305 317.326 303.18 312.931 299.874 309.626ZM287.5 304.5C283.429 304.5 280.117 301.188 280.117 297.117C280.117 293.046 283.429 289.734 287.5 289.734C291.571 289.734 294.883 293.046 294.883 297.117C294.883 301.188 291.571 304.5 287.5 304.5Z",
    fill: "#D8ACE9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M343.531 310.969C340.754 308.191 337.448 306.135 333.841 304.891C337.704 302.23 340.242 297.777 340.242 292.742C340.242 284.613 333.629 278 325.5 278C317.371 278 310.758 284.613 310.758 292.742C310.758 297.777 313.296 302.23 317.159 304.891C313.552 306.135 310.246 308.191 307.469 310.969C302.652 315.785 300 322.189 300 329H303.984C303.984 317.136 313.636 307.484 325.5 307.484C337.364 307.484 347.016 317.136 347.016 329H351C351 322.189 348.347 315.785 343.531 310.969ZM325.5 303.5C319.568 303.5 314.742 298.674 314.742 292.742C314.742 286.81 319.568 281.984 325.5 281.984C331.432 281.984 336.258 286.81 336.258 292.742C336.258 298.674 331.432 303.5 325.5 303.5Z",
    fill: "#D8ACE9"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "30",
    y: "85",
    width: "84",
    height: "30",
    rx: "6",
    fill: "#25C1CB"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "373",
    y: "225",
    width: "84",
    height: "30",
    rx: "6",
    fill: "#25C1CB"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "292",
    y: "47",
    width: "99",
    height: "30",
    rx: "6",
    fill: "#25C1CB"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M56.5703 103.008L59.8203 93.625H61.4609L57.2422 105H55.9141L51.7031 93.625H53.3359L56.5703 103.008ZM64.3359 105H62.8906V96.5469H64.3359V105ZM62.7734 94.3047C62.7734 94.0703 62.8438 93.8724 62.9844 93.7109C63.1302 93.5495 63.3438 93.4688 63.625 93.4688C63.9062 93.4688 64.1198 93.5495 64.2656 93.7109C64.4115 93.8724 64.4844 94.0703 64.4844 94.3047C64.4844 94.5391 64.4115 94.7344 64.2656 94.8906C64.1198 95.0469 63.9062 95.125 63.625 95.125C63.3438 95.125 63.1302 95.0469 62.9844 94.8906C62.8438 94.7344 62.7734 94.5391 62.7734 94.3047ZM71.5781 102.758C71.5781 102.367 71.4297 102.065 71.1328 101.852C70.8411 101.633 70.3281 101.445 69.5938 101.289C68.8646 101.133 68.2839 100.945 67.8516 100.727C67.4245 100.508 67.1068 100.247 66.8984 99.9453C66.6953 99.6432 66.5938 99.2839 66.5938 98.8672C66.5938 98.1745 66.8854 97.5885 67.4688 97.1094C68.0573 96.6302 68.8073 96.3906 69.7188 96.3906C70.6771 96.3906 71.4531 96.638 72.0469 97.1328C72.6458 97.6276 72.9453 98.2604 72.9453 99.0312H71.4922C71.4922 98.6354 71.3229 98.2943 70.9844 98.0078C70.651 97.7214 70.2292 97.5781 69.7188 97.5781C69.1927 97.5781 68.7812 97.6927 68.4844 97.9219C68.1875 98.151 68.0391 98.4505 68.0391 98.8203C68.0391 99.1693 68.1771 99.4323 68.4531 99.6094C68.7292 99.7865 69.2266 99.9557 69.9453 100.117C70.6693 100.279 71.2552 100.471 71.7031 100.695C72.151 100.919 72.4818 101.19 72.6953 101.508C72.9141 101.82 73.0234 102.203 73.0234 102.656C73.0234 103.411 72.7214 104.018 72.1172 104.477C71.513 104.93 70.7292 105.156 69.7656 105.156C69.0885 105.156 68.4896 105.036 67.9688 104.797C67.4479 104.557 67.0391 104.224 66.7422 103.797C66.4505 103.365 66.3047 102.898 66.3047 102.398H67.75C67.776 102.883 67.9688 103.268 68.3281 103.555C68.6927 103.836 69.1719 103.977 69.7656 103.977C70.3125 103.977 70.75 103.867 71.0781 103.648C71.4115 103.424 71.5781 103.128 71.5781 102.758ZM80.125 105C80.0417 104.833 79.974 104.536 79.9219 104.109C79.25 104.807 78.4479 105.156 77.5156 105.156C76.6823 105.156 75.9974 104.922 75.4609 104.453C74.9297 103.979 74.6641 103.38 74.6641 102.656C74.6641 101.776 74.9974 101.094 75.6641 100.609C76.3359 100.12 77.2786 99.875 78.4922 99.875H79.8984V99.2109C79.8984 98.7057 79.7474 98.3047 79.4453 98.0078C79.1432 97.7057 78.6979 97.5547 78.1094 97.5547C77.5938 97.5547 77.1615 97.6849 76.8125 97.9453C76.4635 98.2057 76.2891 98.5208 76.2891 98.8906H74.8359C74.8359 98.4688 74.9844 98.0625 75.2812 97.6719C75.5833 97.276 75.9896 96.9635 76.5 96.7344C77.0156 96.5052 77.5807 96.3906 78.1953 96.3906C79.1693 96.3906 79.9323 96.6354 80.4844 97.125C81.0365 97.6094 81.3229 98.2786 81.3438 99.1328V103.023C81.3438 103.799 81.4427 104.417 81.6406 104.875V105H80.125ZM77.7266 103.898C78.1797 103.898 78.6094 103.781 79.0156 103.547C79.4219 103.312 79.7161 103.008 79.8984 102.633V100.898H78.7656C76.9948 100.898 76.1094 101.417 76.1094 102.453C76.1094 102.906 76.2604 103.26 76.5625 103.516C76.8646 103.771 77.2526 103.898 77.7266 103.898Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M400.711 241.391C400.57 242.594 400.125 243.523 399.375 244.18C398.63 244.831 397.638 245.156 396.398 245.156C395.055 245.156 393.977 244.674 393.164 243.711C392.357 242.747 391.953 241.458 391.953 239.844V238.75C391.953 237.693 392.141 236.763 392.516 235.961C392.896 235.159 393.432 234.544 394.125 234.117C394.818 233.685 395.62 233.469 396.531 233.469C397.74 233.469 398.708 233.807 399.438 234.484C400.167 235.156 400.591 236.089 400.711 237.281H399.203C399.073 236.375 398.789 235.719 398.352 235.312C397.919 234.906 397.312 234.703 396.531 234.703C395.573 234.703 394.82 235.057 394.273 235.766C393.732 236.474 393.461 237.482 393.461 238.789V239.891C393.461 241.125 393.719 242.107 394.234 242.836C394.75 243.565 395.471 243.93 396.398 243.93C397.232 243.93 397.87 243.742 398.312 243.367C398.76 242.987 399.057 242.328 399.203 241.391H400.711ZM407.758 244.164C407.195 244.826 406.37 245.156 405.281 245.156C404.38 245.156 403.693 244.896 403.219 244.375C402.75 243.849 402.513 243.073 402.508 242.047V236.547H403.953V242.008C403.953 243.289 404.474 243.93 405.516 243.93C406.62 243.93 407.354 243.518 407.719 242.695V236.547H409.164V245H407.789L407.758 244.164ZM412.938 245H411.492V233H412.938V245ZM417.219 234.5V236.547H418.797V237.664H417.219V242.906C417.219 243.245 417.289 243.5 417.43 243.672C417.57 243.839 417.81 243.922 418.148 243.922C418.315 243.922 418.544 243.891 418.836 243.828V245C418.456 245.104 418.086 245.156 417.727 245.156C417.081 245.156 416.594 244.961 416.266 244.57C415.938 244.18 415.773 243.625 415.773 242.906V237.664H414.234V236.547H415.773V234.5H417.219ZM425.711 244.164C425.148 244.826 424.323 245.156 423.234 245.156C422.333 245.156 421.646 244.896 421.172 244.375C420.703 243.849 420.466 243.073 420.461 242.047V236.547H421.906V242.008C421.906 243.289 422.427 243.93 423.469 243.93C424.573 243.93 425.307 243.518 425.672 242.695V236.547H427.117V245H425.742L425.711 244.164ZM433.406 237.844C433.188 237.807 432.951 237.789 432.695 237.789C431.747 237.789 431.104 238.193 430.766 239V245H429.32V236.547H430.727L430.75 237.523C431.224 236.768 431.896 236.391 432.766 236.391C433.047 236.391 433.26 236.427 433.406 236.5V237.844ZM438.094 245.156C436.948 245.156 436.016 244.781 435.297 244.031C434.578 243.276 434.219 242.268 434.219 241.008V240.742C434.219 239.904 434.378 239.156 434.695 238.5C435.018 237.839 435.466 237.323 436.039 236.953C436.617 236.578 437.242 236.391 437.914 236.391C439.013 236.391 439.867 236.753 440.477 237.477C441.086 238.201 441.391 239.237 441.391 240.586V241.188H435.664C435.685 242.021 435.927 242.695 436.391 243.211C436.859 243.721 437.453 243.977 438.172 243.977C438.682 243.977 439.115 243.872 439.469 243.664C439.823 243.456 440.133 243.18 440.398 242.836L441.281 243.523C440.573 244.612 439.51 245.156 438.094 245.156ZM437.914 237.578C437.331 237.578 436.841 237.792 436.445 238.219C436.049 238.641 435.805 239.234 435.711 240H439.945V239.891C439.904 239.156 439.706 238.589 439.352 238.188C438.997 237.781 438.518 237.578 437.914 237.578Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M311.812 63.3906C311.672 64.5938 311.227 65.5234 310.477 66.1797C309.732 66.8307 308.74 67.1562 307.5 67.1562C306.156 67.1562 305.078 66.6745 304.266 65.7109C303.458 64.7474 303.055 63.4583 303.055 61.8438V60.75C303.055 59.6927 303.242 58.763 303.617 57.9609C303.997 57.1589 304.534 56.5443 305.227 56.1172C305.919 55.6849 306.721 55.4688 307.633 55.4688C308.841 55.4688 309.81 55.8073 310.539 56.4844C311.268 57.1562 311.693 58.0885 311.812 59.2812H310.305C310.174 58.375 309.891 57.7188 309.453 57.3125C309.021 56.9062 308.414 56.7031 307.633 56.7031C306.674 56.7031 305.922 57.0573 305.375 57.7656C304.833 58.474 304.562 59.4818 304.562 60.7891V61.8906C304.562 63.125 304.82 64.1068 305.336 64.8359C305.852 65.5651 306.573 65.9297 307.5 65.9297C308.333 65.9297 308.971 65.7422 309.414 65.3672C309.862 64.987 310.159 64.3281 310.305 63.3906H311.812ZM315.086 59.5703C315.727 58.7839 316.56 58.3906 317.586 58.3906C319.372 58.3906 320.273 59.3984 320.289 61.4141V67H318.844V61.4062C318.839 60.7969 318.698 60.3464 318.422 60.0547C318.151 59.763 317.727 59.6172 317.148 59.6172C316.68 59.6172 316.268 59.7422 315.914 59.9922C315.56 60.2422 315.284 60.5703 315.086 60.9766V67H313.641V55H315.086V59.5703ZM327.672 67C327.589 66.8333 327.521 66.5365 327.469 66.1094C326.797 66.8073 325.995 67.1562 325.062 67.1562C324.229 67.1562 323.544 66.9219 323.008 66.4531C322.477 65.9792 322.211 65.3802 322.211 64.6562C322.211 63.776 322.544 63.0938 323.211 62.6094C323.883 62.1198 324.826 61.875 326.039 61.875H327.445V61.2109C327.445 60.7057 327.294 60.3047 326.992 60.0078C326.69 59.7057 326.245 59.5547 325.656 59.5547C325.141 59.5547 324.708 59.6849 324.359 59.9453C324.01 60.2057 323.836 60.5208 323.836 60.8906H322.383C322.383 60.4688 322.531 60.0625 322.828 59.6719C323.13 59.276 323.536 58.9635 324.047 58.7344C324.562 58.5052 325.128 58.3906 325.742 58.3906C326.716 58.3906 327.479 58.6354 328.031 59.125C328.583 59.6094 328.87 60.2786 328.891 61.1328V65.0234C328.891 65.7995 328.99 66.4167 329.188 66.875V67H327.672ZM325.273 65.8984C325.727 65.8984 326.156 65.7812 326.562 65.5469C326.969 65.3125 327.263 65.0078 327.445 64.6328V62.8984H326.312C324.542 62.8984 323.656 63.4167 323.656 64.4531C323.656 64.9062 323.807 65.2604 324.109 65.5156C324.411 65.7708 324.799 65.8984 325.273 65.8984ZM332.727 67H331.281V55H332.727V67ZM336.617 67H335.172V55H336.617V67ZM342.445 67.1562C341.299 67.1562 340.367 66.7812 339.648 66.0312C338.93 65.276 338.57 64.2682 338.57 63.0078V62.7422C338.57 61.9036 338.729 61.1562 339.047 60.5C339.37 59.8385 339.818 59.3229 340.391 58.9531C340.969 58.5781 341.594 58.3906 342.266 58.3906C343.365 58.3906 344.219 58.7526 344.828 59.4766C345.438 60.2005 345.742 61.237 345.742 62.5859V63.1875H340.016C340.036 64.0208 340.279 64.6953 340.742 65.2109C341.211 65.7214 341.805 65.9766 342.523 65.9766C343.034 65.9766 343.466 65.8724 343.82 65.6641C344.174 65.4557 344.484 65.1797 344.75 64.8359L345.633 65.5234C344.924 66.612 343.862 67.1562 342.445 67.1562ZM342.266 59.5781C341.682 59.5781 341.193 59.7917 340.797 60.2188C340.401 60.6406 340.156 61.2344 340.062 62H344.297V61.8906C344.255 61.1562 344.057 60.5885 343.703 60.1875C343.349 59.7812 342.87 59.5781 342.266 59.5781ZM348.789 58.5469L348.836 59.6094C349.482 58.7969 350.326 58.3906 351.367 58.3906C353.154 58.3906 354.055 59.3984 354.07 61.4141V67H352.625V61.4062C352.62 60.7969 352.479 60.3464 352.203 60.0547C351.932 59.763 351.508 59.6172 350.93 59.6172C350.461 59.6172 350.049 59.7422 349.695 59.9922C349.341 60.2422 349.065 60.5703 348.867 60.9766V67H347.422V58.5469H348.789ZM355.906 62.7031C355.906 61.3854 356.211 60.3385 356.82 59.5625C357.43 58.7812 358.237 58.3906 359.242 58.3906C360.273 58.3906 361.078 58.7552 361.656 59.4844L361.727 58.5469H363.047V66.7969C363.047 67.8906 362.721 68.7526 362.07 69.3828C361.424 70.013 360.555 70.3281 359.461 70.3281C358.852 70.3281 358.255 70.1979 357.672 69.9375C357.089 69.6771 356.643 69.3203 356.336 68.8672L357.086 68C357.706 68.7656 358.464 69.1484 359.359 69.1484C360.062 69.1484 360.609 68.9505 361 68.5547C361.396 68.1589 361.594 67.6016 361.594 66.8828V66.1562C361.016 66.8229 360.227 67.1562 359.227 67.1562C358.237 67.1562 357.435 66.7578 356.82 65.9609C356.211 65.1641 355.906 64.0781 355.906 62.7031ZM357.359 62.8672C357.359 63.8203 357.555 64.5703 357.945 65.1172C358.336 65.6589 358.883 65.9297 359.586 65.9297C360.497 65.9297 361.167 65.5156 361.594 64.6875V60.8281C361.151 60.0208 360.487 59.6172 359.602 59.6172C358.898 59.6172 358.349 59.8906 357.953 60.4375C357.557 60.9844 357.359 61.7943 357.359 62.8672ZM368.742 67.1562C367.596 67.1562 366.664 66.7812 365.945 66.0312C365.227 65.276 364.867 64.2682 364.867 63.0078V62.7422C364.867 61.9036 365.026 61.1562 365.344 60.5C365.667 59.8385 366.115 59.3229 366.688 58.9531C367.266 58.5781 367.891 58.3906 368.562 58.3906C369.661 58.3906 370.516 58.7526 371.125 59.4766C371.734 60.2005 372.039 61.237 372.039 62.5859V63.1875H366.312C366.333 64.0208 366.576 64.6953 367.039 65.2109C367.508 65.7214 368.102 65.9766 368.82 65.9766C369.331 65.9766 369.763 65.8724 370.117 65.6641C370.471 65.4557 370.781 65.1797 371.047 64.8359L371.93 65.5234C371.221 66.612 370.159 67.1562 368.742 67.1562ZM368.562 59.5781C367.979 59.5781 367.49 59.7917 367.094 60.2188C366.698 60.6406 366.453 61.2344 366.359 62H370.594V61.8906C370.552 61.1562 370.354 60.5885 370 60.1875C369.646 59.7812 369.167 59.5781 368.562 59.5781ZM378.641 64.7578C378.641 64.3672 378.492 64.0651 378.195 63.8516C377.904 63.6328 377.391 63.4453 376.656 63.2891C375.927 63.1328 375.346 62.9453 374.914 62.7266C374.487 62.5078 374.169 62.2474 373.961 61.9453C373.758 61.6432 373.656 61.2839 373.656 60.8672C373.656 60.1745 373.948 59.5885 374.531 59.1094C375.12 58.6302 375.87 58.3906 376.781 58.3906C377.74 58.3906 378.516 58.638 379.109 59.1328C379.708 59.6276 380.008 60.2604 380.008 61.0312H378.555C378.555 60.6354 378.385 60.2943 378.047 60.0078C377.714 59.7214 377.292 59.5781 376.781 59.5781C376.255 59.5781 375.844 59.6927 375.547 59.9219C375.25 60.151 375.102 60.4505 375.102 60.8203C375.102 61.1693 375.24 61.4323 375.516 61.6094C375.792 61.7865 376.289 61.9557 377.008 62.1172C377.732 62.2786 378.318 62.4714 378.766 62.6953C379.214 62.9193 379.544 63.1901 379.758 63.5078C379.977 63.8203 380.086 64.2031 380.086 64.6562C380.086 65.4115 379.784 66.0182 379.18 66.4766C378.576 66.9297 377.792 67.1562 376.828 67.1562C376.151 67.1562 375.552 67.0365 375.031 66.7969C374.51 66.5573 374.102 66.224 373.805 65.7969C373.513 65.3646 373.367 64.8984 373.367 64.3984H374.812C374.839 64.8828 375.031 65.2682 375.391 65.5547C375.755 65.8359 376.234 65.9766 376.828 65.9766C377.375 65.9766 377.812 65.8672 378.141 65.6484C378.474 65.4245 378.641 65.1276 378.641 64.7578Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: "filter0_d",
    x: "80",
    y: "90",
    width: "340",
    height: "216",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/React.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/React.createElement("feOffset", {
    dy: "4"
  }), /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "7"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
  }), /*#__PURE__*/React.createElement("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow"
  }), /*#__PURE__*/React.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow",
    result: "shape"
  })), /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M226 170H275V218.594H226V170Z",
    fill: "white"
  }))));
};

var _default = img_premium_webinar;
exports.default = _default;