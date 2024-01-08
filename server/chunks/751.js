"use strict";
exports.id = 751;
exports.ids = [751];
exports.modules = {

/***/ 2377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ Scrollbar)
/* harmony export */ });
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4172);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simplebar_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);


const Scrollbar = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)((simplebar_react__WEBPACK_IMPORTED_MODULE_0___default()))``;


/***/ }),

/***/ 5642:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_contexts_auth_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(249);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_contexts_auth_context__WEBPACK_IMPORTED_MODULE_3__]);
src_contexts_auth_context__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const AuthGuard = (props)=>{
    const { children  } = props;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { isAuthenticated  } = (0,src_contexts_auth_context__WEBPACK_IMPORTED_MODULE_3__/* .useAuthContext */ .Eu)();
    const ignore = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    // Only do authentication check on component mount.
    // This flow allows you to manually redirect the user after sign-out, otherwise this will be
    // triggered and will automatically redirect to sign-in page.
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!router.isReady) {
            return;
        }
        // Prevent from calling twice in development mode with React.StrictMode enabled
        if (ignore.current) {
            return;
        }
        ignore.current = true;
        if (!isAuthenticated) {
            console.log("Not authenticated, redirecting");
            router.replace({
                pathname: "/auth/login",
                query: router.asPath !== "/" ? {
                    continueUrl: router.asPath
                } : undefined
            }).catch(console.error);
        } else {
            setChecked(true);
        }
    }, [
        router.isReady
    ]);
    if (!checked) {
        return null;
    }
    // If got here, it means that the redirect did not occur, and that tells us that the user is
    // authenticated / authorized.
    return children;
};
AuthGuard.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9010:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ withAuthGuard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5642);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__]);
src_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const withAuthGuard = (Component)=>(props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__/* .AuthGuard */ .a, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...props
            })
        });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ usePopover)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function usePopover() {
    const anchorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handleOpen = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setOpen(true);
    }, []);
    const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setOpen(false);
    }, []);
    const handleToggle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setOpen((prevState)=>!prevState);
    }, []);
    return {
        anchorRef,
        handleClose,
        handleOpen,
        handleToggle,
        open
    };
}


/***/ }),

/***/ 5392:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ AccountPopover)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9332);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_hooks_use_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2662);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_hooks_use_auth__WEBPACK_IMPORTED_MODULE_5__]);
src_hooks_use_auth__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const AccountPopover = (props)=>{
    const { anchorEl , onClose , open  } = props;
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const auth = (0,src_hooks_use_auth__WEBPACK_IMPORTED_MODULE_5__/* .useAuth */ .a)();
    const handleSignOut = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        onClose?.();
        auth.signOut();
        router.push("/auth/login");
    }, [
        onClose,
        auth,
        router
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Popover, {
        anchorEl: anchorEl,
        anchorOrigin: {
            horizontal: "left",
            vertical: "bottom"
        },
        onClose: onClose,
        open: open,
        PaperProps: {
            sx: {
                width: 200
            }
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                sx: {
                    py: 1.5,
                    px: 2
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        variant: "overline",
                        children: "Account"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        color: "text.secondary",
                        variant: "body2",
                        children: "Anika Visser"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Divider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuList, {
                disablePadding: true,
                dense: true,
                sx: {
                    p: "8px",
                    "& > *": {
                        borderRadius: 1
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                    onClick: handleSignOut,
                    children: "Sign out"
                })
            })
        ]
    });
};
AccountPopover.propTypes = {
    anchorEl: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),
    onClose: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    open: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool.isRequired)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8336:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ items)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_solid_ChartBarIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5123);
/* harmony import */ var _heroicons_react_24_solid_CogIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9573);
/* harmony import */ var _heroicons_react_24_solid_LockClosedIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3004);
/* harmony import */ var _heroicons_react_24_solid_ShoppingBagIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8707);
/* harmony import */ var _heroicons_react_24_solid_UserIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8356);
/* harmony import */ var _heroicons_react_24_solid_UserPlusIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8916);
/* harmony import */ var _heroicons_react_24_solid_UsersIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1950);
/* harmony import */ var _heroicons_react_24_solid_XCircleIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid_ChartBarIcon__WEBPACK_IMPORTED_MODULE_1__, _heroicons_react_24_solid_CogIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_LockClosedIcon__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_24_solid_ShoppingBagIcon__WEBPACK_IMPORTED_MODULE_4__, _heroicons_react_24_solid_UserIcon__WEBPACK_IMPORTED_MODULE_5__, _heroicons_react_24_solid_UserPlusIcon__WEBPACK_IMPORTED_MODULE_6__, _heroicons_react_24_solid_UsersIcon__WEBPACK_IMPORTED_MODULE_7__, _heroicons_react_24_solid_XCircleIcon__WEBPACK_IMPORTED_MODULE_8__]);
([_heroicons_react_24_solid_ChartBarIcon__WEBPACK_IMPORTED_MODULE_1__, _heroicons_react_24_solid_CogIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_LockClosedIcon__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_24_solid_ShoppingBagIcon__WEBPACK_IMPORTED_MODULE_4__, _heroicons_react_24_solid_UserIcon__WEBPACK_IMPORTED_MODULE_5__, _heroicons_react_24_solid_UserPlusIcon__WEBPACK_IMPORTED_MODULE_6__, _heroicons_react_24_solid_UsersIcon__WEBPACK_IMPORTED_MODULE_7__, _heroicons_react_24_solid_XCircleIcon__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const items = [
    {
        title: "Dashboard",
        path: "/",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.SvgIcon, {
            fontSize: "small",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                width: "24",
                height: "26",
                viewBox: "0 0 24 26",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M8.73273 23.8331V20.1037C8.73273 19.1517 9.51013 18.38 10.4691 18.38H13.9746C14.4351 18.38 14.8767 18.5616 15.2024 18.8848C15.528 19.2081 15.7109 19.6465 15.7109 20.1037V23.8331C15.708 24.2288 15.8644 24.6094 16.1453 24.8903C16.4262 25.1712 16.8084 25.3292 17.2071 25.3292H19.5987C20.7156 25.332 21.7878 24.8936 22.5787 24.1105C23.3695 23.3274 23.814 22.2642 23.814 21.1553V10.531C23.814 9.63526 23.414 8.78563 22.7219 8.21097L14.5861 1.76048C13.1709 0.62949 11.1432 0.666007 9.77018 1.84721L1.82004 8.21097C1.09524 8.76869 0.662033 9.62084 0.640625 10.531V21.1445C0.640625 23.4556 2.52789 25.3292 4.85595 25.3292H7.19294C8.021 25.3292 8.69397 24.6659 8.69997 23.8439L8.73273 23.8331Z",
                    fill: "currentColor"
                })
            })
        })
    },
    {
        title: "Issues",
        path: "/issues",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.SvgIcon, {
            fontSize: "small",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                width: "23",
                height: "25",
                viewBox: "0 0 23 25",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M16.3384 0.47937C20.1059 0.47937 22.2037 2.65035 22.2037 6.37028V18.9693C22.2037 22.7502 20.1059 24.8724 16.3384 24.8724H6.11652C2.40878 24.8724 0.25 22.7502 0.25 18.9693V6.37028C0.25 2.65035 2.40878 0.47937 6.11652 0.47937H16.3384ZM6.44582 17.2374C6.07993 17.2008 5.72623 17.3715 5.53108 17.6886C5.33594 17.9935 5.33594 18.396 5.53108 18.7131C5.72623 19.0181 6.07993 19.201 6.44582 19.1522H16.0079C16.4945 19.1034 16.8616 18.6875 16.8616 18.2009C16.8616 17.7008 16.4945 17.2861 16.0079 17.2374H6.44582ZM16.0079 11.6745H6.44582C5.92015 11.6745 5.49449 12.1026 5.49449 12.6271C5.49449 13.1515 5.92015 13.5784 6.44582 13.5784H16.0079C16.5323 13.5784 16.9592 13.1515 16.9592 12.6271C16.9592 12.1026 16.5323 11.6745 16.0079 11.6745ZM10.0914 6.15074H6.44582V6.16294C5.92015 6.16294 5.49449 6.58982 5.49449 7.11427C5.49449 7.63872 5.92015 8.06559 6.44582 8.06559H10.0914C10.617 8.06559 11.0439 7.63872 11.0439 7.10085C11.0439 6.57762 10.617 6.15074 10.0914 6.15074Z",
                    fill: "currentColor"
                })
            })
        })
    },
    {
        title: "Departments",
        path: "/departments",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.SvgIcon, {
            fontSize: "small",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                width: "23",
                height: "25",
                viewBox: "0 0 23 25",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M11.2329 0.022583C14.5015 0.022583 17.1887 2.59106 17.3251 5.84559H17.2932C17.2971 5.94019 17.2789 6.03439 17.2401 6.12083H17.4305C18.9149 6.12083 20.4692 7.14962 21.0924 9.63318L21.1601 9.92623L22.0979 17.4816C22.7728 22.3004 20.1363 24.3269 16.5399 24.4127L16.2987 24.4156H6.1879C2.53291 24.4156 -0.283543 23.0837 0.335718 17.8094L0.377947 17.4816L1.32651 9.92623C1.79425 7.25167 3.36451 6.19675 4.8775 6.12481L5.04531 6.12083H5.14066C5.12458 6.02978 5.12458 5.93664 5.14066 5.84559C5.27706 2.59106 7.96428 0.022583 11.2329 0.022583ZM7.6862 10.1814C7.09089 10.1814 6.60829 10.6781 6.60829 11.2908C6.60829 11.9036 7.09089 12.4003 7.6862 12.4003C8.28152 12.4003 8.76412 11.9036 8.76412 11.2908L8.75572 11.1517C8.6892 10.6046 8.23572 10.1814 7.6862 10.1814ZM14.7465 10.1814C14.1512 10.1814 13.6686 10.6781 13.6686 11.2908C13.6686 11.9036 14.1512 12.4003 14.7465 12.4003C15.3419 12.4003 15.8244 11.9036 15.8244 11.2908C15.8244 10.6781 15.3419 10.1814 14.7465 10.1814ZM11.1851 1.61104C8.83833 1.61104 6.93593 3.50691 6.93593 5.84559C6.952 5.93664 6.952 6.02978 6.93593 6.12083H15.4873C15.4534 6.03295 15.4354 5.93975 15.4342 5.84559C15.4342 3.50691 13.5318 1.61104 11.1851 1.61104Z",
                    fill: "currentColor"
                })
            })
        })
    },
    {
        title: "Employees",
        path: "/employees",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.SvgIcon, {
            fontSize: "small",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                width: "25",
                height: "17",
                viewBox: "0 0 28 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M14.1626 12.8597C18.3474 12.8597 21.9207 13.5231 21.9207 16.178C21.9207 18.8318 18.3704 19.5194 14.1626 19.5194C9.97773 19.5194 6.40446 18.856 6.40446 16.2022C6.40446 13.5473 9.9548 12.8597 14.1626 12.8597ZM20.8536 11.261C22.4535 11.2313 24.1735 11.451 24.8091 11.607C26.1557 11.8717 27.0413 12.4122 27.4083 13.1975C27.7184 13.8423 27.7184 14.5903 27.4083 15.234C26.847 16.4522 25.0374 16.8432 24.3341 16.9443C24.1888 16.9662 24.072 16.8399 24.0873 16.6938C24.4466 13.3184 21.5886 11.718 20.8493 11.35C20.8176 11.3335 20.811 11.3082 20.8143 11.2929C20.8165 11.2819 20.8296 11.2643 20.8536 11.261ZM7.2954 11.2587L7.59668 11.2614C7.6207 11.2647 7.63272 11.2823 7.6349 11.2922C7.63818 11.3087 7.63162 11.3328 7.60104 11.3504C6.86062 11.7184 4.00265 13.3188 4.36194 16.6932C4.37723 16.8403 4.26147 16.9656 4.11622 16.9447C3.41293 16.8436 1.60335 16.4526 1.04203 15.2344C0.730783 14.5897 0.730783 13.8427 1.04203 13.198C1.40896 12.4126 2.29355 11.8722 3.64008 11.6063C4.27676 11.4515 5.99569 11.2318 7.59668 11.2614L7.2954 11.2587ZM14.1626 0.00500488C17.0118 0.00500488 19.2964 2.30071 19.2964 5.1676C19.2964 8.03339 17.0118 10.3313 14.1626 10.3313C11.3133 10.3313 9.02872 8.03339 9.02872 5.1676C9.02872 2.30071 11.3133 0.00500488 14.1626 0.00500488ZM21.1321 0.86595C23.8841 0.86595 26.0454 3.47032 25.3093 6.37126C24.8124 8.32426 23.0138 9.6215 21.0098 9.56877C20.8089 9.56328 20.6112 9.54461 20.4201 9.51165C20.2814 9.48749 20.2115 9.33041 20.2901 9.21398C21.0546 8.0826 21.4903 6.72165 21.4903 5.26075C21.4903 3.73613 21.0142 2.31477 20.1875 1.14934C20.1613 1.1131 20.1416 1.05708 20.1678 1.01534C20.1896 0.981285 20.2301 0.96371 20.2683 0.954923C20.5468 0.897805 20.8329 0.86595 21.1321 0.86595ZM7.31656 0.865841C7.61579 0.865841 7.90191 0.897695 8.18148 0.954813C8.21862 0.9636 8.26011 0.982274 8.28196 1.01523C8.30707 1.05697 8.28851 1.11299 8.2623 1.14923C7.43559 2.31466 6.95945 3.73602 6.95945 5.26064C6.95945 6.72154 7.39519 8.08249 8.15964 9.21387C8.23827 9.3303 8.16838 9.48738 8.02969 9.51154C7.83748 9.5456 7.64091 9.56317 7.43996 9.56866C5.436 9.62139 3.63735 8.32415 3.14045 6.37115C2.4033 3.47021 4.56452 0.865841 7.31656 0.865841Z",
                    fill: "currentColor"
                })
            })
        })
    }
];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4751:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9332);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_hocs_with_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9010);
/* harmony import */ var _side_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9826);
/* harmony import */ var _top_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8683);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_hocs_with_auth_guard__WEBPACK_IMPORTED_MODULE_4__, _side_nav__WEBPACK_IMPORTED_MODULE_5__, _top_nav__WEBPACK_IMPORTED_MODULE_6__]);
([src_hocs_with_auth_guard__WEBPACK_IMPORTED_MODULE_4__, _side_nav__WEBPACK_IMPORTED_MODULE_5__, _top_nav__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const SIDE_NAV_WIDTH = 280;
const LayoutRoot = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)("div")(({ theme  })=>({
        display: "flex",
        flex: "1 1 auto",
        maxWidth: "100%",
        [theme.breakpoints.up("lg")]: {
            paddingLeft: SIDE_NAV_WIDTH
        }
    }));
const LayoutContainer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)("div")({
    display: "flex",
    flex: "1 1 auto",
    flexDirection: "column",
    width: "100%"
});
const Layout = (0,src_hocs_with_auth_guard__WEBPACK_IMPORTED_MODULE_4__/* .withAuthGuard */ .I)((props)=>{
    const { children  } = props;
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const [openNav, setOpenNav] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handlePathnameChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (openNav) {
            setOpenNav(false);
        }
    }, [
        openNav
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        handlePathnameChange();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        pathname
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_top_nav__WEBPACK_IMPORTED_MODULE_6__/* .TopNav */ .t, {
                onNavOpen: ()=>setOpenNav(true)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_side_nav__WEBPACK_IMPORTED_MODULE_5__/* .SideNav */ .k, {
                onClose: ()=>setOpenNav(false),
                open: openNav
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LayoutRoot, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LayoutContainer, {
                    children: children
                })
            })
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ SideNavItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





const SideNavItem = (props)=>{
    const { active =false , disabled , external , icon , path , title , onClick  } = props;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const handleClick = ()=>{
        if (onClick) {
            onClick();
        } else if (path && !external) {
            router.push(path);
        }
    };
    const linkProps = path ? external ? {
        component: "a",
        href: path,
        target: "_blank"
    } : {
        component: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),
        href: path
    } : {};
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ButtonBase, {
            disabled: disabled,
            onClick: handleClick,
            sx: {
                alignItems: "center",
                borderRadius: 1,
                display: "flex",
                justifyContent: "flex-start",
                pl: "16px",
                pr: "16px",
                py: "6px",
                textAlign: "left",
                width: "100%",
                ...active && {
                    backgroundColor: "rgba(255, 255, 255, 0.04)"
                },
                "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.04)"
                }
            },
            ...linkProps,
            children: [
                icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    component: "span",
                    sx: {
                        alignItems: "center",
                        color: "neutral.400",
                        display: "inline-flex",
                        justifyContent: "center",
                        mr: 2,
                        ...active && {
                            color: "primary.main"
                        }
                    },
                    children: icon
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    component: "span",
                    sx: {
                        color: "neutral.400",
                        flexGrow: 1,
                        fontFamily: (theme)=>theme.typography.fontFamily,
                        fontSize: 14,
                        fontWeight: 600,
                        lineHeight: "24px",
                        whiteSpace: "nowrap",
                        ...active && {
                            color: "common.white"
                        },
                        ...disabled && {
                            color: "neutral.500"
                        }
                    },
                    children: title
                })
            ]
        })
    });
};
SideNavItem.propTypes = {
    active: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    disabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    external: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    icon: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
    path: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};


/***/ }),

/***/ 9826:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ SideNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9332);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_24_solid_ArrowTopRightOnSquareIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(111);
/* harmony import */ var _heroicons_react_24_solid_ChevronUpDownIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9510);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_components_logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2540);
/* harmony import */ var src_components_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2377);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8336);
/* harmony import */ var _side_nav_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1587);
/* harmony import */ var _heroicons_react_24_solid_LockClosedIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3004);
/* harmony import */ var _contexts_auth_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(249);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3837);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid_ArrowTopRightOnSquareIcon__WEBPACK_IMPORTED_MODULE_4__, _heroicons_react_24_solid_ChevronUpDownIcon__WEBPACK_IMPORTED_MODULE_5__, _config__WEBPACK_IMPORTED_MODULE_9__, _heroicons_react_24_solid_LockClosedIcon__WEBPACK_IMPORTED_MODULE_11__, _contexts_auth_context__WEBPACK_IMPORTED_MODULE_12__]);
([_heroicons_react_24_solid_ArrowTopRightOnSquareIcon__WEBPACK_IMPORTED_MODULE_4__, _heroicons_react_24_solid_ChevronUpDownIcon__WEBPACK_IMPORTED_MODULE_5__, _config__WEBPACK_IMPORTED_MODULE_9__, _heroicons_react_24_solid_LockClosedIcon__WEBPACK_IMPORTED_MODULE_11__, _contexts_auth_context__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const SideNav = (props)=>{
    const { open , onClose  } = props;
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const lgUp = (0,_mui_material__WEBPACK_IMPORTED_MODULE_6__.useMediaQuery)((theme)=>theme.breakpoints.up("lg"));
    const auth = (0,_contexts_auth_context__WEBPACK_IMPORTED_MODULE_12__/* .useAuth */ .aC)();
    const handleLogout = async ()=>{
        try {
            await auth.signOut();
            sessionStorage.removeItem("authenticated");
            sessionStorage.removeItem("token");
            window.location.href = "/auth/login";
        } catch (error) {
            console.error("Chyba při odhl\xe1šen\xed:", error.message);
        }
    };
    const content = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_scrollbar__WEBPACK_IMPORTED_MODULE_8__/* .Scrollbar */ .L, {
        sx: {
            height: "100%",
            "& .simplebar-content": {
                height: "100%"
            },
            "& .simplebar-scrollbar:before": {
                background: "neutral.400"
            }
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
            sx: {
                display: "flex",
                flexDirection: "column",
                height: "100%"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                        /* component={NextLink} */ /* href="/" */ sx: {
                            display: "inline-flex",
                            height: 50,
                            width: 280,
                            px: 2,
                            py: 2
                        },
                        children: "A Better City - Public Service"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Divider, {
                    sx: {
                        borderColor: "neutral.700"
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                    component: "nav",
                    sx: {
                        flexGrow: 1,
                        px: 2,
                        py: 3
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                        component: "ul",
                        spacing: 0.5,
                        sx: {
                            listStyle: "none",
                            p: 0,
                            m: 0
                        },
                        children: _config__WEBPACK_IMPORTED_MODULE_9__/* .items.map */ .e.map((item)=>{
                            const active = item.path ? pathname === item.path : false;
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_side_nav_item__WEBPACK_IMPORTED_MODULE_10__/* .SideNavItem */ .y, {
                                active: active,
                                disabled: item.disabled,
                                external: item.external,
                                icon: item.icon,
                                path: item.path,
                                title: item.title
                            }, item.title);
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Divider, {
                    sx: {
                        borderColor: "neutral.700"
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                    sx: {
                        px: 2,
                        py: 1
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                        component: "ul",
                        spacing: 0.1,
                        sx: {
                            listStyle: "none",
                            p: 0,
                            m: 0
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_side_nav_item__WEBPACK_IMPORTED_MODULE_10__/* .SideNavItem */ .y, {
                            active: true,
                            //disabled={disabled}
                            //external={external}
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.SvgIcon, {
                                fontSize: "small",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: 1.5,
                                    stroke: "currentColor",
                                    className: "w-6 h-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                                    })
                                })
                            }),
                            //path={'/auth/login'}
                            onClick: handleLogout,
                            title: "Log out"
                        }, "Log out")
                    })
                })
            ]
        })
    });
    if (lgUp) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Drawer, {
            anchor: "left",
            open: true,
            PaperProps: {
                sx: {
                    backgroundColor: "neutral.800",
                    color: "common.white",
                    width: 280
                }
            },
            variant: "permanent",
            children: content
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Drawer, {
        anchor: "left",
        onClose: onClose,
        open: open,
        PaperProps: {
            sx: {
                backgroundColor: "neutral.800",
                color: "common.white",
                width: 280
            }
        },
        sx: {
            zIndex: (theme)=>theme.zIndex.appBar + 100
        },
        variant: "temporary",
        children: content
    });
};
SideNav.propTypes = {
    onClose: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    open: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8683:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ TopNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_solid_BellIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5856);
/* harmony import */ var _heroicons_react_24_solid_UsersIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1950);
/* harmony import */ var _heroicons_react_24_solid_Bars3Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2506);
/* harmony import */ var _heroicons_react_24_solid_MagnifyingGlassIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(521);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_hooks_use_popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9797);
/* harmony import */ var _account_popover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid_BellIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_UsersIcon__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_24_solid_Bars3Icon__WEBPACK_IMPORTED_MODULE_4__, _heroicons_react_24_solid_MagnifyingGlassIcon__WEBPACK_IMPORTED_MODULE_5__, _account_popover__WEBPACK_IMPORTED_MODULE_9__]);
([_heroicons_react_24_solid_BellIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_UsersIcon__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_24_solid_Bars3Icon__WEBPACK_IMPORTED_MODULE_4__, _heroicons_react_24_solid_MagnifyingGlassIcon__WEBPACK_IMPORTED_MODULE_5__, _account_popover__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;
const TopNav = (props)=>{
    const { onNavOpen  } = props;
    const lgUp = (0,_mui_material__WEBPACK_IMPORTED_MODULE_6__.useMediaQuery)((theme)=>theme.breakpoints.up("lg"));
    const accountPopover = (0,src_hooks_use_popover__WEBPACK_IMPORTED_MODULE_8__/* .usePopover */ .S)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                component: "header",
                sx: {
                    backdropFilter: "blur(6px)",
                    backgroundColor: (theme)=>(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.alpha)(theme.palette.background.default, 0.8),
                    position: "sticky",
                    left: {
                        lg: `${SIDE_NAV_WIDTH}px`
                    },
                    top: 0,
                    width: {
                        lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`
                    },
                    zIndex: (theme)=>theme.zIndex.appBar
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                    alignItems: "center",
                    direction: "row",
                    justifyContent: "space-between",
                    spacing: 2,
                    sx: {
                        minHeight: TOP_NAV_HEIGHT,
                        px: 2
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                            alignItems: "center",
                            direction: "row",
                            spacing: 2,
                            children: !lgUp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
                                onClick: onNavOpen,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.SvgIcon, {
                                    fontSize: "small",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_Bars3Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {})
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                            alignItems: "center",
                            direction: "row",
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
                                    title: "Notifications",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Badge, {
                                            badgeContent: 4,
                                            color: "success",
                                            variant: "dot",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.SvgIcon, {
                                                fontSize: "small",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_BellIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {})
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Avatar, {
                                    onClick: accountPopover.handleOpen,
                                    ref: accountPopover.anchorRef,
                                    sx: {
                                        cursor: "pointer",
                                        height: 40,
                                        width: 40
                                    }
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_account_popover__WEBPACK_IMPORTED_MODULE_9__/* .AccountPopover */ .x, {
                anchorEl: accountPopover.anchorRef.current,
                open: accountPopover.open,
                onClose: accountPopover.handleClose
            })
        ]
    });
};
TopNav.propTypes = {
    onNavOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;