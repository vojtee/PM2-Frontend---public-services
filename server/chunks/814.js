"use strict";
exports.id = 814;
exports.ids = [814];
exports.modules = {

/***/ 7309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ Chart)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);


const ApexChart = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\chart.js -> " + "react-apexcharts"
        ]
    },
    ssr: false,
    loading: ()=>null
});
const Chart = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(ApexChart)``;


/***/ }),

/***/ 6822:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const createApiInstance = ()=>{
    const instance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
        baseURL: "https://bettercity.mikita.dev",
        timeout: 8000,
        headers: {
            "Authorization": "Bearer " + window.sessionStorage.getItem("token")
        }
    });
    return instance;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createApiInstance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;