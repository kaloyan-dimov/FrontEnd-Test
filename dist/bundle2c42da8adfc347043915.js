/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../dist/search.png */ "./dist/search.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h6 {\n  font-size: 12px; }\n\nh5 {\n  font-size: 14px; }\n\nh4 {\n  font-size: 16px; }\n\nh3 {\n  font-size: 18px; }\n\nh2 {\n  font-size: 24px; }\n\nh1 {\n  font-size: 2vw; }\n\n.space-between {\n  justify-content: space-between; }\n\n.space-around {\n  justify-content: space-around; }\n\n.width100 {\n  width: 100%; }\n\n.h-3vw {\n  height: 3.5vw; }\n\n.p-05vw {\n  height: auto;\n  padding: 1vw; }\n\n.pl-3vw {\n  padding-left: 3vw; }\n\n.ml-1vw {\n  margin-left: 1vw; }\n\n.ml-2vw {\n  margin-left: 2vw; }\n\n.ml-3vw {\n  margin-left: 3vw; }\n\n.mr-1vw {\n  margin-right: 1vw; }\n\n.mr-05vw {\n  margin-right: 0.5vw; }\n\n.orangeText {\n  color: #ffbf46; }\n\n.greenText {\n  color: #0ebe98; }\n\n#navBar {\n  display: flex;\n  align-items: center;\n  background-color: #29323d;\n  padding: 0 1vw;\n  z-index: 2; }\n  #navBar ul {\n    display: flex;\n    align-items: center;\n    color: #fdfdfd;\n    height: 45px;\n    font-size: 1.3vw; }\n  #navBar ul:hover {\n    cursor: pointer;\n    background-color: lightgray; }\n\n.bar {\n  display: block;\n  width: 25px;\n  height: 3px;\n  margin: 5px auto;\n  outline-style: solid;\n  outline-color: #161b21;\n  outline-width: 1px;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 1s ease-in-out;\n  background-color: white; }\n\n#navImg {\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 1s ease-in-out; }\n\n@media (max-width: 1000px) {\n  header {\n    padding-left: 6vw; }\n  #navImg {\n    display: block;\n    position: fixed;\n    top: 3vw;\n    left: 1.5vw; }\n  #navImg.active {\n    transform: translateX(38vw); }\n  #navImg.active .bar:nth-child(2) {\n    opacity: 0; }\n  #navImg.active .bar:nth-child(1) {\n    transform: translateY(1px) rotate(-40deg); }\n  #navImg.active .bar:nth-child(3) {\n    transform: translateY(-1px) rotate(40deg); }\n  #navImg.active .bar {\n    outline: none; }\n  #navBar {\n    height: auto;\n    flex-direction: column;\n    position: absolute;\n    top: 0;\n    left: -45vw;\n    width: 45vw;\n    transition: 0.5s; }\n    #navBar ul {\n      width: 100%;\n      justify-content: center;\n      font-size: 2.2vw; }\n    #navBar #navToggle {\n      display: flex;\n      justify-content: end;\n      padding-right: 2vw; }\n  #navBar.active {\n    left: 0; } }\n\n@media (max-width: 768px) {\n  #navBar {\n    left: -70vw;\n    width: 70vw; }\n    #navBar ul {\n      font-size: 3vw; }\n  #navImg.active {\n    transform: translateX(60vw); } }\n\n@media (max-width: 500px) {\n  #navBar {\n    left: -100vw;\n    width: 100vw; }\n    #navBar ul {\n      font-size: 4vw; }\n  #navImg.active {\n    transform: translateX(85vw); } }\n\n*::-webkit-scrollbar,\n*::-webkit-scrollbar-thumb {\n  width: 26px;\n  border-radius: 13px;\n  height: 50px;\n  color: #818a96;\n  background-color: #cad1da;\n  background-clip: padding-box;\n  border: 10px solid transparent; }\n\n*::-webkit-scrollbar-thumb {\n  box-shadow: inset 0 0 0 10px; }\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\nimg {\n  width: 100%; }\n\nheader {\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  background-color: #161b21; }\n\n#logo {\n  font-size: 30px;\n  color: #fdfdfd; }\n\n#searchBar {\n  background-color: #161b21;\n  padding: 5px;\n  width: 20%;\n  border-style: solid;\n  border-width: 0 0 0.5px 0;\n  border-color: #fdfdfd;\n  padding-left: 30px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: 5px 0px;\n  background-size: 20px;\n  background-repeat: no-repeat; }\n\n#login {\n  display: flex;\n  align-items: center; }\n  #login div {\n    color: #fdfdfd; }\n  #login #phone {\n    margin-right: 1vw; }\n    #login #phone div {\n      display: flex;\n      align-items: center; }\n\n.container {\n  display: flex;\n  align-items: center;\n  padding: 0.5vw 1vw 0 1vw; }\n\n#left {\n  display: flex;\n  width: 50%;\n  flex-direction: row; }\n\n#container3 {\n  width: 30%; }\n\n#leftLeft {\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 70vh; }\n  #leftLeft div {\n    background-color: #c4c4c4;\n    height: 100px;\n    margin: 10px 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer; }\n\n#leftRight {\n  background-color: #c4c4c4;\n  width: 100%;\n  margin: auto 1vw auto 0; }\n  #leftRight #previous {\n    position: relative;\n    width: 3vw;\n    height: 4vw;\n    top: 24vw; }\n    #leftRight #previous img {\n      transform: rotate(180deg); }\n  #leftRight #next2 {\n    position: relative;\n    width: 3vw;\n    height: 4vw;\n    top: 20vw;\n    left: calc(100% - 3vw); }\n  #leftRight .next {\n    opacity: 0.5;\n    background-color: rgba(0, 0, 0, 0.2);\n    padding: 0.7vw; }\n  #leftRight .next:hover {\n    opacity: 1;\n    background-color: rgba(0, 0, 0, 0.7); }\n  #leftRight #mainImg {\n    width: 100%;\n    aspect-ratio: 1/1; }\n    #leftRight #mainImg img {\n      display: block; }\n\n#right {\n  width: 50%; }\n\n.containerRight {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center; }\n  .containerRight * {\n    display: flex;\n    flex-direction: row;\n    align-items: center; }\n  .containerRight div {\n    padding: 0.5vw 0; }\n\n#promotion {\n  background-color: #ffbf46;\n  padding: 5px 20px;\n  border-radius: 15px;\n  border-width: 0; }\n\n#divider {\n  height: 1px;\n  border-width: 0;\n  border-top: 2px solid #bbb;\n  border-radius: 5px; }\n\n#pickColor div:hover {\n  border: 1px solid black; }\n  #pickColor div:hover .tooltip {\n    visibility: visible;\n    opacity: 1; }\n\n#pickColor div {\n  height: 46px;\n  width: 46px;\n  background-color: #c4c4c4;\n  margin: 0 1vw; }\n  #pickColor div img {\n    height: 36px;\n    width: 36px; }\n\n#pickColor .tooltip {\n  position: relative;\n  visibility: hidden;\n  min-width: 80px;\n  max-height: 25px;\n  color: white;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  bottom: 160%;\n  left: -150%;\n  opacity: 0;\n  transition: opacity 0.7s;\n  background-color: #161b21; }\n\n#pickColor .tooltip::before {\n  position: relative;\n  content: \" \";\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 12px 12.5px 0 12.5px;\n  border-color: #161b21 transparent transparent;\n  position: absolute;\n  top: 90%;\n  left: 35%; }\n\n#protection {\n  background: linear-gradient(90deg, #29323d 0%, #454b53 50%, #29323d 100%); }\n\n#addCart {\n  background-color: #161b21;\n  color: #fdfdfd;\n  width: 47%;\n  justify-content: center; }\n\n#credit {\n  background: none;\n  border-color: #ffbf46;\n  border-width: 1px;\n  width: 47%; }\n\n#addFavorites > button {\n  background: none;\n  border: none; }\n\n.icon {\n  width: 25px;\n  height: 25px; }\n\n.hidden {\n  display: none; }\n\n.iconGreen {\n  border: 1px solid #0ebe98; }\n  .iconGreen:hover {\n    background-color: #0ebe98; }\n\n.iconWhite {\n  border: 1px solid #fdfdfd; }\n  .iconWhite:hover {\n    background-color: #fdfdfd; }\n\n.iconLarge {\n  padding: 10px;\n  margin: 5px;\n  width: 50px;\n  border-radius: 50%; }\n\n.oldPrice {\n  text-decoration: line-through;\n  color: gray; }\n\n.underline {\n  text-decoration: underline; }\n\n.pointer {\n  cursor: pointer; }\n\n@media (max-width: 1000px) {\n  #logo {\n    padding-left: 6vw; }\n  #phone h5 {\n    display: none; }\n  #left {\n    flex-direction: column-reverse;\n    width: 50%; }\n  #container3 {\n    display: flex;\n    overflow: auto;\n    width: 100%;\n    height: auto; }\n    #container3 #leftLeft {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-wrap: nowrap;\n      width: auto;\n      height: auto;\n      overflow: hidden;\n      margin: 0.5vw; }\n      #container3 #leftLeft div {\n        width: max-content; }\n  #protection {\n    padding: 1vw; }\n  #leftRight {\n    width: 95%;\n    margin: auto; }\n    #leftRight #previous {\n      width: 4vw;\n      height: 5vw;\n      top: 32vw; }\n      #leftRight #previous img {\n        transform: rotate(180deg); }\n    #leftRight #next2 {\n      width: 4vw;\n      height: 5vw;\n      top: 27vw;\n      left: calc(100% - 4vw); }\n  h1 {\n    font-size: 4vw; } }\n\n@media (max-width: 768px) {\n  .container {\n    flex-direction: column; }\n    .container #left {\n      width: 90%; }\n    .container #right {\n      width: 85%; }\n      .container #right * {\n        margin-bottom: 1vw; }\n    .container #leftRight {\n      width: 60%;\n      margin: auto; }\n  .icon {\n    height: 15px;\n    width: 15px; }\n  .iconLarge {\n    padding: 5px;\n    margin: 3px;\n    width: 35px;\n    height: 35px;\n    border-radius: 50%; } }\n\n@media (max-width: 500px) {\n  #phone h4 {\n    display: none; }\n  #phone div {\n    width: 35px;\n    height: 35px;\n    border-radius: 50%;\n    border: 1px solid #fdfdfd; }\n    #phone div img {\n      width: 18px;\n      height: 18px;\n      margin: auto; }\n    #phone div:hover {\n      filter: hue-rotate(180deg);\n      -webkit-filter: hue-rotate(180deg);\n      background-color: #fdfdfd; }\n      #phone div:hover img {\n        filter: brightness(0); }\n  #logo {\n    display: none; }\n  #searchBar {\n    width: 30%;\n    margin-left: 10vw; } }\n", "",{"version":3,"sources":["webpack://./src/styles/_config.scss","webpack://./src/styles/_navigation.scss","webpack://./src/styles/_scrollbar.scss","webpack://./src/styles/main.scss","webpack://./src/styles/_media.scss"],"names":[],"mappings":"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","sourcesContent":["$darkColor: #161b21;\r\n$whiteColor: #fdfdfd;\r\n$lightGrayColor: #f1f5f9;\r\n$anotherGray: #cad1da;\r\n$orangeColor: #ffbf46;\r\n$greenColor: #0ebe98;\r\n$imgGray: #c4c4c4;\r\n\r\nh6 {\r\n\tfont-size: 12px;\r\n}\r\n\r\nh5 {\r\n\tfont-size: 14px;\r\n}\r\nh4 {\r\n\tfont-size: 16px;\r\n}\r\nh3 {\r\n\tfont-size: 18px;\r\n}\r\nh2 {\r\n\tfont-size: 24px;\r\n}\r\nh1 {\r\n\tfont-size: 2vw;\r\n}\r\n\r\n.space-between {\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.space-around {\r\n\tjustify-content: space-around;\r\n}\r\n.width100 {\r\n\twidth: 100%;\r\n}\r\n\r\n.h-3vw {\r\n\theight: 3.5vw;\r\n}\r\n\r\n.p-05vw {\r\n\theight: auto;\r\n\tpadding: 1vw;\r\n}\r\n.pl-3vw {\r\n\tpadding-left: 3vw;\r\n}\r\n\r\n.ml-1vw {\r\n\tmargin-left: 1vw;\r\n}\r\n.ml-2vw {\r\n\tmargin-left: 2vw;\r\n}\r\n.ml-3vw {\r\n\tmargin-left: 3vw;\r\n}\r\n.mr-1vw {\r\n\tmargin-right: 1vw;\r\n}\r\n.mr-05vw {\r\n\tmargin-right: 0.5vw;\r\n}\r\n.orangeText {\r\n\tcolor: $orangeColor;\r\n}\r\n.greenText {\r\n\tcolor: $greenColor;\r\n}\r\n","#navBar {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tbackground-color: #29323d;\r\n\tpadding: 0 1vw;\r\n\tz-index: 2;\r\n\r\n\tul {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tcolor: $whiteColor;\r\n\t\theight: 45px;\r\n\t\tfont-size: 1.3vw;\r\n\t}\r\n\tul:hover {\r\n\t\tcursor: pointer;\r\n\t\tbackground-color: lightgray;\r\n\t}\r\n\t// -webkit-transition: all 1s ease-in-out;\r\n\t// transition: all 1s ease-in-out;\r\n}\r\n\r\n.bar {\r\n\tdisplay: block;\r\n\twidth: 25px;\r\n\theight: 3px;\r\n\tmargin: 5px auto;\r\n\t//border: 1px solid $darkColor;\r\n\toutline-style: solid;\r\n\toutline-color: $darkColor;\r\n\toutline-width: 1px;\r\n\t-webkit-transition: all 0.5s ease-in-out;\r\n\ttransition: all 1s ease-in-out;\r\n\tbackground-color: white;\r\n}\r\n#navImg {\r\n\t-webkit-transition: all 0.5s ease-in-out;\r\n\ttransition: all 1s ease-in-out;\r\n}\r\n// Media Queries\r\n@media (max-width: 1000px) {\r\n\theader {\r\n\t\tpadding-left: 6vw;\r\n\t}\r\n\t#navImg {\r\n\t\tdisplay: block;\r\n\t\tposition: fixed;\r\n\t\ttop: 3vw;\r\n\t\tleft: 1.5vw;\r\n\t}\r\n\t#navImg.active {\r\n\t\ttransform: translateX(38vw);\r\n\t}\r\n\t// #navImg.active {\r\n\t// \ttransform: translateX(40vw);\r\n\t// }\r\n\t#navImg.active .bar:nth-child(2) {\r\n\t\topacity: 0;\r\n\t}\r\n\t#navImg.active .bar:nth-child(1) {\r\n\t\ttransform: translateY(1px) rotate(-40deg);\r\n\t}\r\n\t#navImg.active .bar:nth-child(3) {\r\n\t\ttransform: translateY(-1px) rotate(40deg);\r\n\t}\r\n\t#navImg.active .bar {\r\n\t\toutline: none;\r\n\t}\r\n\t#navBar {\r\n\t\theight: auto;\r\n\t\tflex-direction: column;\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: -45vw;\r\n\t\twidth: 45vw;\r\n\t\ttransition: 0.5s;\r\n\t\tul {\r\n\t\t\twidth: 100%;\r\n\t\t\tjustify-content: center;\r\n\t\t\tfont-size: 2.2vw;\r\n\t\t\t//left: -45vw;\r\n\t\t}\r\n\t\t#navToggle {\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: end;\r\n\t\t\tpadding-right: 2vw;\r\n\t\t}\r\n\t}\r\n\t#navBar.active {\r\n\t\tleft: 0;\r\n\t}\r\n}\r\n@media (max-width: 768px) {\r\n\t#navBar {\r\n\t\tleft: -70vw;\r\n\t\twidth: 70vw;\r\n\t\tul {\r\n\t\t\tfont-size: 3vw;\r\n\t\t\t//left: -45vw;\r\n\t\t}\r\n\t}\r\n\t#navImg.active {\r\n\t\ttransform: translateX(60vw);\r\n\t}\r\n}\r\n@media (max-width: 500px) {\r\n\t#navBar {\r\n\t\tleft: -100vw;\r\n\t\twidth: 100vw;\r\n\t\tul {\r\n\t\t\tfont-size: 4vw;\r\n\t\t}\r\n\t}\r\n\t#navImg.active {\r\n\t\ttransform: translateX(85vw);\r\n\t}\r\n}\r\n","*::-webkit-scrollbar,\r\n*::-webkit-scrollbar-thumb {\r\n\twidth: 26px;\r\n\tborder-radius: 13px;\r\n\theight: 50px;\r\n\tcolor: #818a96;\r\n\tbackground-color: #cad1da;\r\n\tbackground-clip: padding-box;\r\n\tborder: 10px solid transparent;\r\n}\r\n\r\n*::-webkit-scrollbar-thumb {\r\n\tbox-shadow: inset 0 0 0 10px;\r\n}\r\n","@import \"config\";\r\n@import \"navigation\";\r\n@import \"scrollbar\";\r\n\r\n* {\r\n\tbox-sizing: border-box;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\t//border: 1px solid black;\r\n}\r\n\r\nimg {\r\n\twidth: 100%;\r\n}\r\n\r\nheader {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tpadding: 10px;\r\n\tbackground-color: $darkColor;\r\n}\r\n#logo {\r\n\tfont-size: 30px;\r\n\tcolor: $whiteColor;\r\n}\r\n#searchBar {\r\n\tbackground-color: $darkColor;\r\n\tpadding: 5px;\r\n\twidth: 20%;\r\n\tborder-style: solid;\r\n\tborder-width: 0 0 0.5px 0;\r\n\tborder-color: $whiteColor;\r\n\tpadding-left: 30px;\r\n\tbackground-image: url(\"/dist/search.png\");\r\n\tbackground-position: 5px 0px;\r\n\tbackground-size: 20px;\r\n\tbackground-repeat: no-repeat;\r\n}\r\n\r\n#login {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tdiv {\r\n\t\tcolor: $whiteColor;\r\n\t}\r\n\t#phone {\r\n\t\tmargin-right: 1vw;\r\n\t\tdiv {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tpadding: 0.5vw 1vw 0 1vw;\r\n}\r\n#left {\r\n\tdisplay: flex;\r\n\twidth: 50%;\r\n\tflex-direction: row;\r\n\t//flex-wrap: wrap;\r\n}\r\n#container3 {\r\n\twidth: 30%;\r\n}\r\n#leftLeft {\r\n\t//flex-grow: 1;\r\n\toverflow-y: auto;\r\n\toverflow-x: hidden;\r\n\theight: 70vh;\r\n\tdiv {\r\n\t\tbackground-color: $imgGray;\r\n\t\t//width: 11vw;\r\n\t\t//aspect-ratio: 1 / 0.75;\r\n\t\theight: 100px;\r\n\t\tmargin: 10px 0;\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tcursor: pointer;\r\n\t}\r\n}\r\n#leftRight {\r\n\tbackground-color: $imgGray;\r\n\twidth: 100%;\r\n\tmargin: auto 1vw auto 0;\r\n\r\n\t#previous {\r\n\t\tposition: relative;\r\n\t\twidth: 3vw;\r\n\t\theight: 4vw;\r\n\t\ttop: 24vw;\r\n\t\timg {\r\n\t\t\ttransform: rotate(180deg);\r\n\t\t}\r\n\t}\r\n\t#next2 {\r\n\t\tposition: relative;\r\n\t\t//background-color: red;\r\n\t\twidth: 3vw;\r\n\t\theight: 4vw;\r\n\t\ttop: 20vw;\r\n\t\tleft: calc(100% - 3vw);\r\n\t}\r\n\t.next {\r\n\t\topacity: 0.5;\r\n\t\tbackground-color: rgba(0, 0, 0, 0.2);\r\n\t\tpadding: 0.7vw;\r\n\t}\r\n\t.next:hover {\r\n\t\topacity: 1;\r\n\t\tbackground-color: rgba(0, 0, 0, 0.7);\r\n\t}\r\n\t#mainImg {\r\n\t\twidth: 100%;\r\n\t\taspect-ratio: 1/1;\r\n\t\timg {\r\n\t\t\tdisplay: block;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n#right {\r\n\twidth: 50%;\r\n}\r\n\r\n.containerRight {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: 100%;\r\n\tjustify-content: center;\r\n\t* {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\talign-items: center;\r\n\t}\r\n\tdiv {\r\n\t\tpadding: 0.5vw 0;\r\n\t}\r\n}\r\n#promotion {\r\n\tbackground-color: $orangeColor;\r\n\tpadding: 5px 20px;\r\n\tborder-radius: 15px;\r\n\tborder-width: 0;\r\n}\r\n#divider {\r\n\theight: 1px;\r\n\tborder-width: 0;\r\n\tborder-top: 2px solid #bbb;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n#pickColor {\r\n\t//align-items: center;\r\n\tdiv:hover {\r\n\t\tborder: 1px solid black;\r\n\t\t.tooltip {\r\n\t\t\tvisibility: visible;\r\n\t\t\topacity: 1;\r\n\t\t}\r\n\t}\r\n\r\n\tdiv {\r\n\t\theight: 46px;\r\n\t\twidth: 46px;\r\n\t\tbackground-color: $imgGray;\r\n\t\tmargin: 0 1vw;\r\n\t\timg {\r\n\t\t\theight: 36px;\r\n\t\t\twidth: 36px;\r\n\t\t}\r\n\t}\r\n\r\n\t.tooltip {\r\n\t\tposition: relative;\r\n\t\tvisibility: hidden;\r\n\t\tmin-width: 80px;\r\n\t\tmax-height: 25px;\r\n\r\n\t\tcolor: white;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tborder-radius: 6px;\r\n\t\tpadding: 5px 0;\r\n\t\tbottom: 160%;\r\n\t\tleft: -150%;\r\n\t\topacity: 0;\r\n\t\t//transform: translateY(7px);\r\n\t\ttransition: opacity 0.7s;\r\n\t\tbackground-color: $darkColor;\r\n\t}\r\n\t.tooltip::before {\r\n\t\tposition: relative;\r\n\t\tcontent: \" \";\r\n\t\twidth: 0;\r\n\t\theight: 0;\r\n\t\tborder-style: solid;\r\n\t\tborder-width: 12px 12.5px 0 12.5px;\r\n\t\tborder-color: $darkColor transparent transparent;\r\n\t\tposition: absolute;\r\n\t\ttop: 90%;\r\n\t\tleft: 35%;\r\n\t}\r\n}\r\n#protection {\r\n\tbackground: linear-gradient(\r\n\t\t90deg,\r\n\t\t#29323d 0%,\r\n\t\trgba(69, 75, 83, 1) 50%,\r\n\t\t#29323d 100%\r\n\t);\r\n}\r\n\r\n#addCart {\r\n\tbackground-color: #161b21;\r\n\tcolor: $whiteColor;\r\n\twidth: 47%;\r\n\tjustify-content: center;\r\n}\r\n\r\n#credit {\r\n\tbackground: none;\r\n\tborder-color: $orangeColor;\r\n\tborder-width: 1px;\r\n\twidth: 47%;\r\n}\r\n\r\n#addFavorites > button {\r\n\tbackground: none;\r\n\tborder: none;\r\n}\r\n\r\n.icon {\r\n\twidth: 25px;\r\n\theight: 25px;\r\n}\r\n.hidden {\r\n\tdisplay: none;\r\n}\r\n.iconGreen {\r\n\tborder: 1px solid $greenColor;\r\n\t&:hover {\r\n\t\tbackground-color: $greenColor;\r\n\t}\r\n}\r\n.iconWhite {\r\n\tborder: 1px solid $whiteColor;\r\n\t&:hover {\r\n\t\tbackground-color: $whiteColor;\r\n\t}\r\n}\r\n.iconLarge {\r\n\tpadding: 10px;\r\n\tmargin: 5px;\r\n\twidth: 50px;\r\n\tborder-radius: 50%;\r\n\t//height: 50px;\r\n}\r\n\r\n.oldPrice {\r\n\ttext-decoration: line-through;\r\n\tcolor: gray;\r\n}\r\n\r\n.underline {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.pointer {\r\n\tcursor: pointer;\r\n}\r\n\r\n@import \"media\";\r\n","@media (max-width: 1000px) {\r\n\t#logo {\r\n\t\tpadding-left: 6vw;\r\n\t}\r\n\t#phone {\r\n\t\th5 {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t}\r\n\t#left {\r\n\t\tflex-direction: column-reverse;\r\n\t\twidth: 50%;\r\n\t}\r\n\t#container3 {\r\n\t\tdisplay: flex;\r\n\t\toverflow: auto;\r\n\t\twidth: 100%;\r\n\t\theight: auto;\r\n\r\n\t\t#leftLeft {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t\tflex-wrap: nowrap;\r\n\t\t\twidth: auto;\r\n\t\t\theight: auto;\r\n\t\t\toverflow: hidden;\r\n\t\t\tmargin: 0.5vw;\r\n\t\t\tdiv {\r\n\t\t\t\twidth: max-content;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t#protection {\r\n\t\tpadding: 1vw;\r\n\t}\r\n\t#leftRight {\r\n\t\twidth: 95%;\r\n\t\tmargin: auto;\r\n\t\t#previous {\r\n\t\t\twidth: 4vw;\r\n\t\t\theight: 5vw;\r\n\t\t\ttop: 32vw;\r\n\t\t\timg {\r\n\t\t\t\ttransform: rotate(180deg);\r\n\t\t\t}\r\n\t\t}\r\n\t\t#next2 {\r\n\t\t\twidth: 4vw;\r\n\t\t\theight: 5vw;\r\n\t\t\ttop: 27vw;\r\n\t\t\tleft: calc(100% - 4vw);\r\n\t\t}\r\n\t}\r\n\th1 {\r\n\t\tfont-size: 4vw;\r\n\t}\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\t.container {\r\n\t\tflex-direction: column;\r\n\t\t#left {\r\n\t\t\twidth: 90%;\r\n\t\t}\r\n\t\t#right {\r\n\t\t\twidth: 85%;\r\n\t\t\t* {\r\n\t\t\t\tmargin-bottom: 1vw;\r\n\t\t\t}\r\n\t\t\t// * {\r\n\t\t\t// \tmargin: 0.4vw 0;\r\n\t\t\t// }\r\n\t\t}\r\n\t\t#leftRight {\r\n\t\t\twidth: 60%;\r\n\t\t\tmargin: auto;\r\n\t\t}\r\n\t}\r\n\t.icon {\r\n\t\theight: 15px;\r\n\t\twidth: 15px;\r\n\t}\r\n\t.iconLarge {\r\n\t\tpadding: 5px;\r\n\t\tmargin: 3px;\r\n\t\twidth: 35px;\r\n\t\theight: 35px;\r\n\t\tborder-radius: 50%;\r\n\t}\r\n}\r\n\r\n@media (max-width: 500px) {\r\n\t#phone {\r\n\t\th4 {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t\tdiv {\r\n\t\t\t//padding: 10px;\r\n\t\t\t//margin: 5px;\r\n\t\t\twidth: 35px;\r\n\t\t\theight: 35px;\r\n\t\t\tborder-radius: 50%;\r\n\t\t\tborder: 1px solid $whiteColor;\r\n\t\t\timg {\r\n\t\t\t\twidth: 18px;\r\n\t\t\t\theight: 18px;\r\n\t\t\t\tmargin: auto;\r\n\t\t\t}\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tfilter: hue-rotate(180deg);\r\n\t\t\t\t-webkit-filter: hue-rotate(180deg);\r\n\t\t\t\tbackground-color: $whiteColor;\r\n\t\t\t\timg {\r\n\t\t\t\t\tfilter: brightness(0);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t#logo {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t#searchBar {\r\n\t\twidth: 30%;\r\n\t\tmargin-left: 10vw;\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./dist/search.png":
/*!*************************!*\
  !*** ./dist/search.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "search.png";

/***/ }),

/***/ "./src/assets/icons/cart1.png":
/*!************************************!*\
  !*** ./src/assets/icons/cart1.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cart1.png";

/***/ }),

/***/ "./src/assets/icons/cart2.png":
/*!************************************!*\
  !*** ./src/assets/icons/cart2.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cart2.png";

/***/ }),

/***/ "./src/assets/icons/compare.png":
/*!**************************************!*\
  !*** ./src/assets/icons/compare.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "compare.png";

/***/ }),

/***/ "./src/assets/icons/download.png":
/*!***************************************!*\
  !*** ./src/assets/icons/download.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "download.png";

/***/ }),

/***/ "./src/assets/icons/ellipse.png":
/*!**************************************!*\
  !*** ./src/assets/icons/ellipse.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ellipse.png";

/***/ }),

/***/ "./src/assets/icons/favicon.ico":
/*!**************************************!*\
  !*** ./src/assets/icons/favicon.ico ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "favicon.ico";

/***/ }),

/***/ "./src/assets/icons/fire.png":
/*!***********************************!*\
  !*** ./src/assets/icons/fire.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fire.png";

/***/ }),

/***/ "./src/assets/icons/heart.png":
/*!************************************!*\
  !*** ./src/assets/icons/heart.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "heart.png";

/***/ }),

/***/ "./src/assets/icons/icon.png":
/*!***********************************!*\
  !*** ./src/assets/icons/icon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon.png";

/***/ }),

/***/ "./src/assets/icons/nav.png":
/*!**********************************!*\
  !*** ./src/assets/icons/nav.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "nav.png";

/***/ }),

/***/ "./src/assets/icons/next.png":
/*!***********************************!*\
  !*** ./src/assets/icons/next.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "next.png";

/***/ }),

/***/ "./src/assets/icons/person.png":
/*!*************************************!*\
  !*** ./src/assets/icons/person.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "person.png";

/***/ }),

/***/ "./src/assets/icons/phone.png":
/*!************************************!*\
  !*** ./src/assets/icons/phone.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "phone.png";

/***/ }),

/***/ "./src/assets/icons/return.png":
/*!*************************************!*\
  !*** ./src/assets/icons/return.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "return.png";

/***/ }),

/***/ "./src/assets/icons/search.png":
/*!*************************************!*\
  !*** ./src/assets/icons/search.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "search.png";

/***/ }),

/***/ "./src/assets/icons/secure.png":
/*!*************************************!*\
  !*** ./src/assets/icons/secure.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "secure.png";

/***/ }),

/***/ "./src/assets/icons/share.png":
/*!************************************!*\
  !*** ./src/assets/icons/share.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "share.png";

/***/ }),

/***/ "./src/assets/icons/star.png":
/*!***********************************!*\
  !*** ./src/assets/icons/star.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "star.png";

/***/ }),

/***/ "./src/assets/icons/tick.png":
/*!***********************************!*\
  !*** ./src/assets/icons/tick.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "tick.png";

/***/ }),

/***/ "./src/assets/icons/truck.png":
/*!************************************!*\
  !*** ./src/assets/icons/truck.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "truck.png";

/***/ }),

/***/ "./src/assets/img/img1.png":
/*!*********************************!*\
  !*** ./src/assets/img/img1.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img1.png";

/***/ }),

/***/ "./src/assets/img/img10.png":
/*!**********************************!*\
  !*** ./src/assets/img/img10.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img10.png";

/***/ }),

/***/ "./src/assets/img/img2.png":
/*!*********************************!*\
  !*** ./src/assets/img/img2.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img2.png";

/***/ }),

/***/ "./src/assets/img/img3.png":
/*!*********************************!*\
  !*** ./src/assets/img/img3.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img3.png";

/***/ }),

/***/ "./src/assets/img/img4.png":
/*!*********************************!*\
  !*** ./src/assets/img/img4.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img4.png";

/***/ }),

/***/ "./src/assets/img/img5.png":
/*!*********************************!*\
  !*** ./src/assets/img/img5.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img5.png";

/***/ }),

/***/ "./src/assets/img/img6.png":
/*!*********************************!*\
  !*** ./src/assets/img/img6.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img6.png";

/***/ }),

/***/ "./src/assets/img/img7.png":
/*!*********************************!*\
  !*** ./src/assets/img/img7.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img7.png";

/***/ }),

/***/ "./src/assets/img/img8.png":
/*!*********************************!*\
  !*** ./src/assets/img/img8.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img8.png";

/***/ }),

/***/ "./src/assets/img/img9.png":
/*!*********************************!*\
  !*** ./src/assets/img/img9.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img9.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_img_img1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/img/img1.png */ "./src/assets/img/img1.png");
/* harmony import */ var _assets_img_img2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/img2.png */ "./src/assets/img/img2.png");
/* harmony import */ var _assets_img_img3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/img/img3.png */ "./src/assets/img/img3.png");
/* harmony import */ var _assets_img_img4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/img/img4.png */ "./src/assets/img/img4.png");
/* harmony import */ var _assets_img_img5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/img/img5.png */ "./src/assets/img/img5.png");
/* harmony import */ var _assets_img_img6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/img/img6.png */ "./src/assets/img/img6.png");
/* harmony import */ var _assets_img_img7_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/img/img7.png */ "./src/assets/img/img7.png");
/* harmony import */ var _assets_img_img8_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/img/img8.png */ "./src/assets/img/img8.png");
/* harmony import */ var _assets_img_img9_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/img/img9.png */ "./src/assets/img/img9.png");
/* harmony import */ var _assets_img_img10_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/img/img10.png */ "./src/assets/img/img10.png");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _assets_icons_nav_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/icons/nav.png */ "./src/assets/icons/nav.png");
/* harmony import */ var _assets_icons_icon_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/icons/icon.png */ "./src/assets/icons/icon.png");
/* harmony import */ var _assets_icons_heart_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/icons/heart.png */ "./src/assets/icons/heart.png");
/* harmony import */ var _assets_icons_ellipse_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/icons/ellipse.png */ "./src/assets/icons/ellipse.png");
/* harmony import */ var _assets_icons_fire_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/icons/fire.png */ "./src/assets/icons/fire.png");
/* harmony import */ var _assets_icons_phone_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/icons/phone.png */ "./src/assets/icons/phone.png");
/* harmony import */ var _assets_icons_return_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/icons/return.png */ "./src/assets/icons/return.png");
/* harmony import */ var _assets_icons_search_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/icons/search.png */ "./src/assets/icons/search.png");
/* harmony import */ var _assets_icons_share_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/icons/share.png */ "./src/assets/icons/share.png");
/* harmony import */ var _assets_icons_star_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/icons/star.png */ "./src/assets/icons/star.png");
/* harmony import */ var _assets_icons_tick_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/icons/tick.png */ "./src/assets/icons/tick.png");
/* harmony import */ var _assets_icons_truck_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/icons/truck.png */ "./src/assets/icons/truck.png");
/* harmony import */ var _assets_icons_cart1_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assets/icons/cart1.png */ "./src/assets/icons/cart1.png");
/* harmony import */ var _assets_icons_cart2_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assets/icons/cart2.png */ "./src/assets/icons/cart2.png");
/* harmony import */ var _assets_icons_secure_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./assets/icons/secure.png */ "./src/assets/icons/secure.png");
/* harmony import */ var _assets_icons_compare_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./assets/icons/compare.png */ "./src/assets/icons/compare.png");
/* harmony import */ var _assets_icons_download_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./assets/icons/download.png */ "./src/assets/icons/download.png");
/* harmony import */ var _assets_icons_person_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./assets/icons/person.png */ "./src/assets/icons/person.png");
/* harmony import */ var _assets_icons_next_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./assets/icons/next.png */ "./src/assets/icons/next.png");
/* harmony import */ var _assets_icons_favicon_ico__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./assets/icons/favicon.ico */ "./src/assets/icons/favicon.ico");































var navImg = document.getElementById("navImg");
var navBar = document.getElementById("navBar");
navImg.addEventListener("click", function () {
  navImg.classList.toggle("active");
  navBar.classList.toggle("active");
});

// console.log("logs");
// document.querySelector("#left").onclick = () => {
// 	//console.log("bla bla");
// };
// document
// 	.querySelectorAll("#left")
// 	.forEach(input => input.addEventListener("click", console.log("this", this)));

// let children = document.querySelector("#left").childNodes;
// Array.from(children).forEach(child => {
// 	child.addEventListener("click", e => {
// 		//console.log("clicked!");
// 		//console.log("child", child, "children", children);
// 		//let test = child.querySelector("div");
// 		let test2 = child.querySelector("img");
// 		//console.log("child", child, "child.div", child.div);
// 		//console.log("test", test, "test2", test2);
// 		console.log("test2", test2, "test2.src", test2.src);
// 	});
// });
//let childrenArray = [];

// //console.log("children", children);
// Array.from(children).forEach(child => {
// 	//console.log("child", child);
// 	// 	let wq = child.querySelector("img");
// 	// 	console.log(wq);
// 	if (child.tagName === "DIV") {
// 		//console.log("true", child);
// 		childrenArray.push(child.children[0].currentSrc);
// 		child.addEventListener("click", () => {
// 			//console.log(child.innerHTML, "clicked");
// 			console.log("childrenArray", childrenArray);
// 			let compare = child.querySelector("img").src;
// 			let compare2 = getIndex(childrenArray, compare);

// 			console.log("index", compare, compare2);
// 		});
// 	}
// });

// function getIndex(arr, compare) {
// 	arr.findIndex((w, index) => {
// 		console.log("w", w);
// 		if (w == compare) {
// 			console.log("matched", index);
// 			return index;
// 		}
// 	});
// }

//let test = children.querySelectorAll("div");
//console.log("test", test);
// let test = Array.from(children);
// console.log("test", test, typeof test);
// Array.from(children).forEach((child, index) => {
// 	child.addEventListener("click", e => {
// 		//let test2 = children.indexOf(test);
// 		console.log("[7]", children[7]);
// 		console.log("clicked on: ", child, index);
// 		let selectImg = child.querySelector("img");
// 		mainImg.src = selectImg.src;
// 		//console.log("selectImg.src", selectImg.src);
// 	});
// });

var mainImg = document.getElementById("mainImg").querySelector("img");
var children = document.querySelector("#leftLeft").childNodes;
var previous = document.getElementById("previous");
var next = document.getElementById("next2");
mainImg.src = children[1].querySelector("img").src;
console.log("arrLength", children.length, children);
var currentIndex = 1;
checkIndex();

//console.log("childeren1:", children[1].querySelector("img").src);

Array.from(children).forEach(function (child, index) {
  console.log("index", index);
  child.addEventListener("click", function (e) {
    currentIndex = index;
    checkIndex();
    var selectImg = child.querySelector("img");
    //mainImg.src = selectImg.src;
  });
});

previous.addEventListener("click", function () {
  currentIndex = currentIndex - 2;
  // console.log(
  // 	"prev",
  // 	currentIndex - 2,
  // 	children[currentIndex - 2].querySelector("img").src
  // );
  checkIndex();
});
next.addEventListener("click", function () {
  currentIndex = currentIndex + 2;

  // console.log(
  // 	"next",
  // 	currentIndex + 2,
  // 	children[currentIndex].querySelector("img").src
  // );
  checkIndex();
  //mainImg.src = children[currentIndex].querySelector("img").src;
});

function checkIndex() {
  console.log("currIndex", currentIndex);
  if (currentIndex <= 1) {
    previous.classList.add("hidden");
  } else if (currentIndex >= children.length - 2) {
    next.classList.add("hidden");
  } else {
    previous.classList.remove("hidden");
    next.classList.remove("hidden");
  }
  mainImg.src = children[currentIndex].querySelector("img").src;
}
})();

/******/ })()
;
//# sourceMappingURL=bundle2c42da8adfc347043915.js.map