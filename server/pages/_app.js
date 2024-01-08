(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "e": () => (/* binding */ useNProgress)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
;// CONCATENATED MODULE: ./src/hooks/use-nprogress.js



function useNProgress() {
    (0,external_react_.useEffect)(()=>{
        router_default().events.on("routeChangeStart", (external_nprogress_default()).start);
        router_default().events.on("routeChangeError", (external_nprogress_default()).done);
        router_default().events.on("routeChangeComplete", (external_nprogress_default()).done);
        return ()=>{
            router_default().events.off("routeChangeStart", (external_nprogress_default()).start);
            router_default().events.off("routeChangeError", (external_nprogress_default()).done);
            router_default().events.off("routeChangeComplete", (external_nprogress_default()).done);
        };
    }, []);
}


/***/ }),

/***/ 2730:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5753);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4046);
/* harmony import */ var _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_contexts_auth_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(249);
/* harmony import */ var src_hooks_use_nprogress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2419);
/* harmony import */ var src_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5517);
/* harmony import */ var src_utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4621);
/* harmony import */ var simplebar_react_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8710);
/* harmony import */ var simplebar_react_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(simplebar_react_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3745);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_contexts_auth_context__WEBPACK_IMPORTED_MODULE_7__, firebase_app__WEBPACK_IMPORTED_MODULE_12__]);
([src_contexts_auth_context__WEBPACK_IMPORTED_MODULE_7__, firebase_app__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const clientSideEmotionCache = (0,src_utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_10__/* .createEmotionCache */ .S)();
const firebaseConfig = {
    apiKey: "AIzaSyClK4fF0-fOrs_Acg8QMRT1YMw0r2sXSwk",
    authDomain: "ctu-nss.firebaseapp.com",
    databaseURL: "https://ctu-nss-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ctu-nss",
    storageBucket: "ctu-nss.appspot.com",
    messagingSenderId: "441926160180",
    appId: "1:441926160180:web:18920e8cbaac7c63bddf61"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_12__.initializeApp)(firebaseConfig);
const SplashScreen = ()=>null;
const App = (props)=>{
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    (0,src_hooks_use_nprogress__WEBPACK_IMPORTED_MODULE_8__/* .useNProgress */ .e)();
    const getLayout = Component.getLayout ?? ((page)=>page);
    const theme = (0,src_theme__WEBPACK_IMPORTED_MODULE_9__/* .createTheme */ .j)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Devias Kit"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_3__.LocalizationProvider, {
                dateAdapter: _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_4__.AdapterDateFns,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_contexts_auth_context__WEBPACK_IMPORTED_MODULE_7__/* .AuthProvider */ .Ho, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {
                        theme: theme,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.CssBaseline, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_contexts_auth_context__WEBPACK_IMPORTED_MODULE_7__/* .AuthConsumer */ .he, {
                                children: (auth)=>auth.isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SplashScreen, {}) : getLayout(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                        ...pageProps
                                    }))
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* binding */ createTheme)
});

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: external "@mui/material/colors"
const colors_namespaceObject = require("@mui/material/colors");
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./src/theme/colors.js

const withAlphas = (color)=>{
    return {
        ...color,
        alpha4: (0,styles_.alpha)(color.main, 0.04),
        alpha8: (0,styles_.alpha)(color.main, 0.08),
        alpha12: (0,styles_.alpha)(color.main, 0.12),
        alpha30: (0,styles_.alpha)(color.main, 0.30),
        alpha50: (0,styles_.alpha)(color.main, 0.50)
    };
};
const neutral = {
    50: "#F8F9FA",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D2D6DB",
    400: "#9DA4AE",
    500: "#6C737F",
    600: "#4D5761",
    700: "#2F3746",
    800: "#1C2536",
    900: "#111927"
};
const indigo = withAlphas({
    lightest: "#F5F7FF",
    light: "#EBEEFE",
    main: "#6366F1",
    dark: "#4338CA",
    darkest: "#312E81",
    contrastText: "#FFFFFF"
});
const success = withAlphas({
    lightest: "#F0FDF9",
    light: "#3FC79A",
    main: "#10B981",
    dark: "#0B815A",
    darkest: "#134E48",
    contrastText: "#FFFFFF"
});
const info = withAlphas({
    lightest: "#ECFDFF",
    light: "#CFF9FE",
    main: "#06AED4",
    dark: "#0E7090",
    darkest: "#164C63",
    contrastText: "#FFFFFF"
});
const warning = withAlphas({
    lightest: "#FFFAEB",
    light: "#FEF0C7",
    main: "#F79009",
    dark: "#B54708",
    darkest: "#7A2E0E",
    contrastText: "#FFFFFF"
});
const error = withAlphas({
    lightest: "#FEF3F2",
    light: "#FEE4E2",
    main: "#F04438",
    dark: "#B42318",
    darkest: "#7A271A",
    contrastText: "#FFFFFF"
});

;// CONCATENATED MODULE: ./src/theme/create-palette.js



function createPalette() {
    return {
        action: {
            active: neutral[500],
            disabled: (0,styles_.alpha)(neutral[900], 0.38),
            disabledBackground: (0,styles_.alpha)(neutral[900], 0.12),
            focus: (0,styles_.alpha)(neutral[900], 0.16),
            hover: (0,styles_.alpha)(neutral[900], 0.04),
            selected: (0,styles_.alpha)(neutral[900], 0.12)
        },
        background: {
            default: colors_namespaceObject.common.white,
            paper: colors_namespaceObject.common.white
        },
        divider: "#F2F4F7",
        error: error,
        info: info,
        mode: "light",
        neutral: neutral,
        primary: indigo,
        success: success,
        text: {
            primary: neutral[900],
            secondary: neutral[500],
            disabled: (0,styles_.alpha)(neutral[900], 0.38)
        },
        warning: warning
    };
}

;// CONCATENATED MODULE: ./src/theme/create-components.js

// Used only to create transitions
const muiTheme = (0,material_.createTheme)();
function createComponents(config) {
    const { palette  } = config;
    return {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: 0
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "12px",
                    textTransform: "none"
                },
                sizeSmall: {
                    padding: "6px 16px"
                },
                sizeMedium: {
                    padding: "8px 20px"
                },
                sizeLarge: {
                    padding: "11px 24px"
                },
                textSizeSmall: {
                    padding: "7px 12px"
                },
                textSizeMedium: {
                    padding: "9px 16px"
                },
                textSizeLarge: {
                    padding: "12px 16px"
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    [`&.${material_.paperClasses.elevation1}`]: {
                        boxShadow: "0px 5px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)"
                    }
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: "32px 24px",
                    "&:last-child": {
                        paddingBottom: "32px"
                    }
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: {
                    variant: "h6"
                },
                subheaderTypographyProps: {
                    variant: "body2"
                }
            },
            styleOverrides: {
                root: {
                    padding: "32px 24px 16px"
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                "*": {
                    boxSizing: "border-box"
                },
                html: {
                    MozOsxFontSmoothing: "grayscale",
                    WebkitFontSmoothing: "antialiased",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100%",
                    width: "100%"
                },
                body: {
                    display: "flex",
                    flex: "1 1 auto",
                    flexDirection: "column",
                    minHeight: "100%",
                    width: "100%"
                },
                "#__next": {
                    display: "flex",
                    flex: "1 1 auto",
                    flexDirection: "column",
                    height: "100%",
                    width: "100%"
                },
                "#nprogress": {
                    pointerEvents: "none"
                },
                "#nprogress .bar": {
                    backgroundColor: palette.primary.main,
                    height: 3,
                    left: 0,
                    position: "fixed",
                    top: 0,
                    width: "100%",
                    zIndex: 2000
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    "&::placeholder": {
                        opacity: 1
                    }
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                input: {
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: "24px",
                    "&::placeholder": {
                        color: palette.text.secondary
                    }
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: "transparent",
                    borderRadius: 8,
                    borderStyle: "solid",
                    borderWidth: 1,
                    overflow: "hidden",
                    borderColor: palette.neutral[200],
                    transition: muiTheme.transitions.create([
                        "border-color",
                        "box-shadow"
                    ]),
                    "&:hover": {
                        backgroundColor: palette.action.hover
                    },
                    "&:before": {
                        display: "none"
                    },
                    "&:after": {
                        display: "none"
                    },
                    [`&.${material_.filledInputClasses.disabled}`]: {
                        backgroundColor: "transparent"
                    },
                    [`&.${material_.filledInputClasses.focused}`]: {
                        backgroundColor: "transparent",
                        borderColor: palette.primary.main,
                        boxShadow: `${palette.primary.main} 0 0 0 2px`
                    },
                    [`&.${material_.filledInputClasses.error}`]: {
                        borderColor: palette.error.main,
                        boxShadow: `${palette.error.main} 0 0 0 2px`
                    }
                },
                input: {
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: "24px"
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: palette.action.hover,
                        [`& .${material_.outlinedInputClasses.notchedOutline}`]: {
                            borderColor: palette.neutral[200]
                        }
                    },
                    [`&.${material_.outlinedInputClasses.focused}`]: {
                        backgroundColor: "transparent",
                        [`& .${material_.outlinedInputClasses.notchedOutline}`]: {
                            borderColor: palette.primary.main,
                            boxShadow: `${palette.primary.main} 0 0 0 2px`
                        }
                    },
                    [`&.${material_.filledInputClasses.error}`]: {
                        [`& .${material_.outlinedInputClasses.notchedOutline}`]: {
                            borderColor: palette.error.main,
                            boxShadow: `${palette.error.main} 0 0 0 2px`
                        }
                    }
                },
                input: {
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: "24px"
                },
                notchedOutline: {
                    borderColor: palette.neutral[200],
                    transition: muiTheme.transitions.create([
                        "border-color",
                        "box-shadow"
                    ])
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 500,
                    [`&.${material_.inputLabelClasses.filled}`]: {
                        transform: "translate(12px, 18px) scale(1)"
                    },
                    [`&.${material_.inputLabelClasses.shrink}`]: {
                        [`&.${material_.inputLabelClasses.standard}`]: {
                            transform: "translate(0, -1.5px) scale(0.85)"
                        },
                        [`&.${material_.inputLabelClasses.filled}`]: {
                            transform: "translate(12px, 6px) scale(0.85)"
                        },
                        [`&.${material_.inputLabelClasses.outlined}`]: {
                            transform: "translate(14px, -9px) scale(0.85)"
                        }
                    }
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: 1.71,
                    minWidth: "auto",
                    paddingLeft: 0,
                    paddingRight: 0,
                    textTransform: "none",
                    "& + &": {
                        marginLeft: 24
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottomColor: palette.divider,
                    padding: "15px 16px"
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    borderBottom: "none",
                    [`& .${material_.tableCellClasses.root}`]: {
                        borderBottom: "none",
                        backgroundColor: palette.neutral[50],
                        color: palette.neutral[700],
                        fontSize: 12,
                        fontWeight: 600,
                        lineHeight: 1,
                        letterSpacing: 0.5,
                        textTransform: "uppercase"
                    },
                    [`& .${material_.tableCellClasses.paddingCheckbox}`]: {
                        paddingTop: 4,
                        paddingBottom: 4
                    }
                }
            }
        },
        MuiTextField: {
            defaultProps: {
                variant: "filled"
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/create-shadows.js
const createShadows = ()=>{
    return [
        "none",
        "0px 1px 2px rgba(0, 0, 0, 0.08)",
        "0px 1px 5px rgba(0, 0, 0, 0.08)",
        "0px 1px 8px rgba(0, 0, 0, 0.08)",
        "0px 1px 10px rgba(0, 0, 0, 0.08)",
        "0px 1px 14px rgba(0, 0, 0, 0.08)",
        "0px 1px 18px rgba(0, 0, 0, 0.08)",
        "0px 2px 16px rgba(0, 0, 0, 0.08)",
        "0px 3px 14px rgba(0, 0, 0, 0.08)",
        "0px 3px 16px rgba(0, 0, 0, 0.08)",
        "0px 4px 18px rgba(0, 0, 0, 0.08)",
        "0px 4px 20px rgba(0, 0, 0, 0.08)",
        "0px 5px 22px rgba(0, 0, 0, 0.08)",
        "0px 5px 24px rgba(0, 0, 0, 0.08)",
        "0px 5px 26px rgba(0, 0, 0, 0.08)",
        "0px 6px 28px rgba(0, 0, 0, 0.08)",
        "0px 6px 30px rgba(0, 0, 0, 0.08)",
        "0px 6px 32px rgba(0, 0, 0, 0.08)",
        "0px 7px 34px rgba(0, 0, 0, 0.08)",
        "0px 7px 36px rgba(0, 0, 0, 0.08)",
        "0px 8px 38px rgba(0, 0, 0, 0.08)",
        "0px 8px 40px rgba(0, 0, 0, 0.08)",
        "0px 8px 42px rgba(0, 0, 0, 0.08)",
        "0px 9px 44px rgba(0, 0, 0, 0.08)",
        "0px 9px 46px rgba(0, 0, 0, 0.08)"
    ];
};

;// CONCATENATED MODULE: ./src/theme/create-typography.js
const createTypography = ()=>{
    return {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        body1: {
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: 1.5
        },
        body2: {
            fontSize: "0.875rem",
            fontWeight: 400,
            lineHeight: 1.57
        },
        button: {
            fontWeight: 600
        },
        caption: {
            fontSize: "0.75rem",
            fontWeight: 500,
            lineHeight: 1.66
        },
        subtitle1: {
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: 1.57
        },
        subtitle2: {
            fontSize: "0.875rem",
            fontWeight: 500,
            lineHeight: 1.57
        },
        overline: {
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.5px",
            lineHeight: 2.5,
            textTransform: "uppercase"
        },
        h1: {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "3.5rem",
            lineHeight: 1.2
        },
        h2: {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "3rem",
            lineHeight: 1.2
        },
        h3: {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "2.25rem",
            lineHeight: 1.2
        },
        h4: {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "2rem",
            lineHeight: 1.2
        },
        h5: {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "1.5rem",
            lineHeight: 1.2
        },
        h6: {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "1.125rem",
            lineHeight: 1.2
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/index.js





function createTheme() {
    const palette = createPalette();
    const components = createComponents({
        palette
    });
    const shadows = createShadows();
    const typography = createTypography();
    return (0,material_.createTheme)({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1440
            }
        },
        components,
        palette,
        shadows,
        shape: {
            borderRadius: 8
        },
        typography
    });
}


/***/ }),

/***/ 4621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* binding */ createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./src/utils/create-emotion-cache.js

const createEmotionCache = ()=>{
    return cache_default()({
        key: "css"
    });
};


/***/ }),

/***/ 8710:
/***/ (() => {



/***/ }),

/***/ 2805:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 4046:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/x-date-pickers/AdapterDateFns");

/***/ }),

/***/ 5753:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/x-date-pickers/LocalizationProvider");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3745:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [249], () => (__webpack_exec__(2730)));
module.exports = __webpack_exports__;

})();