"use strict";
exports.id = 645;
exports.ids = [645];
exports.modules = {

/***/ 8919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ SeverityPill)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);



const SeverityPillRoot = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("span")(({ theme , ownerState  })=>{
    const backgroundColor = theme.palette[ownerState.color].alpha12;
    const color = theme.palette.mode === "dark" ? theme.palette[ownerState.color].main : theme.palette[ownerState.color].dark;
    return {
        alignItems: "center",
        backgroundColor,
        borderRadius: 12,
        color,
        cursor: "default",
        display: "inline-flex",
        flexGrow: 0,
        flexShrink: 0,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.pxToRem(12),
        lineHeight: 2,
        fontWeight: 600,
        justifyContent: "center",
        letterSpacing: 0.5,
        minWidth: 20,
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        textTransform: "uppercase",
        whiteSpace: "nowrap"
    };
});
const SeverityPill = (props)=>{
    const { color ="primary" , children , ...other } = props;
    const ownerState = {
        color
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SeverityPillRoot, {
        ownerState: ownerState,
        ...other,
        children: children
    });
};
SeverityPill.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
    color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "primary",
        "secondary",
        "error",
        "info",
        "warning",
        "success"
    ])
};


/***/ }),

/***/ 5645:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ OverviewLatestIssues)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_24_solid_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5677);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_components_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2377);
/* harmony import */ var src_components_severity_pill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8919);
/* harmony import */ var _heroicons_react_24_solid_ListBulletIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(579);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_24_solid_ListBulletIcon__WEBPACK_IMPORTED_MODULE_7__]);
([_heroicons_react_24_solid_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_24_solid_ListBulletIcon__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const statusMap = {
    //"not started": 'info',
    SOLVING: "warning",
    SOLVED: "success"
};
const OverviewLatestIssues = (props)=>{
    const { issues =[] , sx  } = props;
    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const rowsPerPage = 5; // Set the default number of rows per page to 5
    const handleChangePage = (event, newPage)=>{
        setPage(newPage);
    };
    const paginatedIssues = issues.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    const parseISOWithMilliseconds = (isoString)=>{
        const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.parse)(isoString, "yyyy-MM-dd'T'HH:mm:ss.SSSSSS", new Date());
        return date;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Card, {
        sx: sx,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CardHeader, {
                avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Avatar, {
                    sx: {
                        backgroundColor: "warning.main",
                        height: 56,
                        width: 56,
                        paddingBottom: 0
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.SvgIcon, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_ListBulletIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {})
                    })
                }),
                title: "Your latest Issues"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_scrollbar__WEBPACK_IMPORTED_MODULE_5__/* .Scrollbar */ .L, {
                sx: {
                    flexGrow: 1
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                    sx: {
                        minWidth: 800,
                        paddingTop: 0
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Table, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableHead, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                            children: " Issue Nr. "
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                            children: " What happened "
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                            children: " Location "
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                            sortDirection: "desc",
                                            children: " Date "
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                            children: " Status "
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableBody, {
                                children: paginatedIssues.map((issue)=>{
                                    // const date = format(issue.dateOfCreation, 'dd/MM/yyyy');
                                    const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(parseISOWithMilliseconds(issue.dateOfCreation), "dd/MM/yyyy");
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {
                                        hover: true,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                                children: [
                                                    " ",
                                                    issue.id,
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                                children: [
                                                    " ",
                                                    issue.name,
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                                children: [
                                                    " ",
                                                    issue.latitude,
                                                    ", ",
                                                    issue.longitude,
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                                children: [
                                                    " ",
                                                    date,
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_severity_pill__WEBPACK_IMPORTED_MODULE_6__/* .SeverityPill */ .I, {
                                                    color: statusMap[issue.status],
                                                    children: issue.status
                                                })
                                            })
                                        ]
                                    }, issue.id);
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TablePagination, {
                component: "div",
                count: issues.length,
                rowsPerPage: rowsPerPage,
                page: page,
                onPageChange: handleChangePage,
                rowsPerPageOptions: []
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Divider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CardActions, {
                sx: {
                    justifyContent: "flex-end"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                    color: "inherit",
                    endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.SvgIcon, {
                        fontSize: "small",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {})
                    }),
                    size: "small",
                    variant: "text",
                    children: "View all"
                })
            })
        ]
    });
};
OverviewLatestIssues.propTypes = {
    issues: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;