exports.id = 239;
exports.ids = [239];
exports.modules = {

/***/ 4733:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7290))

/***/ }),

/***/ 7290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HCXBuilderLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2518);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function HCXBuilderLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_page__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: children
    });
}


/***/ }),

/***/ 2518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_steps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9099);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8176);
/* harmony import */ var _app_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9941);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1785);
/* __next_internal_client_entry_do_not_use__ default auto */ 







const HCXBuilderWizard = ({ children })=>{
    const { hcxProject, setHcxProject } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_app_project__WEBPACK_IMPORTED_MODULE_3__.ProjectContext);
    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const checkActiveIndex = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const paths = pathname.split("/");
        const currentPath = paths[paths.length - 1];
        switch(currentPath){
            case "2-vcenter":
                setActiveIndex(1);
                break;
            case "3-hcx-manager":
                setActiveIndex(2);
                break;
            case "4-service-mesh":
                setActiveIndex(3);
                break;
            default:
                setActiveIndex(0);
                break;
        }
    }, [
        pathname
    ]);
    const wizardItems = [
        {
            label: "Project",
            command: ()=>router.push("/hcx/builder")
        },
        {
            label: "vCenters",
            command: ()=>router.push("/hcx/builder/2-vcenter")
        },
        {
            label: "HCX Manager",
            command: ()=>router.push("/hcx/builder/3-hcx-manager")
        },
        {
            label: "HCX Services",
            command: ()=>router.push("/hcx/builder/4-service-mesh")
        } // Updated URL
    ];
    const next = ()=>{
        const nextIndex = activeIndex + 1;
        if (nextIndex > 3) return;
        setActiveIndex(nextIndex);
        switch(nextIndex){
            case 1:
                router.push("/hcx/builder/2-vcenter");
                break;
            case 2:
                router.push("/hcx/builder/3-hcx-manager");
                break;
            case 3:
                router.push("/hcx/builder/4-service-mesh"); // Updated URL
                break;
        }
    };
    const back = ()=>{
        const prevIndex = activeIndex - 1;
        if (prevIndex < 0) return;
        setActiveIndex(prevIndex);
        switch(prevIndex){
            case 0:
                router.push("/hcx/builder");
                break;
            case 1:
                router.push("/hcx/builder/2-vcenter");
                break;
            case 2:
                router.push("/hcx/builder/3-hcx-manager");
                break;
            case 3:
                router.push("/hcx/builder/4-service-mesh"); // Updated URL
                break;
        }
    };
    const handleProjectNameChange = (e)=>{
        setHcxProject({
            ...hcxProject,
            name: e.target.value
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-column h-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "card m-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_steps__WEBPACK_IMPORTED_MODULE_4__/* .Steps */ .R, {
                    model: wizardItems,
                    activeIndex: activeIndex,
                    onSelect: (e)=>{
                        setActiveIndex(e.index);
                        wizardItems[e.index].command();
                    },
                    readOnly: false
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "card m-3 flex-1 overflow-hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "overflow-y-auto h-full",
                    style: {
                        maxHeight: "calc(100vh - 250px)"
                    },
                    children: pathname === "/hcx/builder" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-column lg:flex-row align-items-center justify-content-between gap-5 py-5 px-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "card w-25rem shadow-none",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-column gap-3",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "text-3xl font-bold m-0 mb-3",
                                                    children: "HCX Builder"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-700 m-0",
                                                    children: "Create your HCX deployment configuration"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-column gap-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    htmlFor: "projectname",
                                                    className: "font-bold",
                                                    children: "Project Name"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, {
                                                    id: "projectname",
                                                    value: hcxProject.name || "",
                                                    "aria-describedby": "project-help",
                                                    onChange: handleProjectNameChange,
                                                    placeholder: "Enter your project name",
                                                    className: "p-2"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                    id: "project-help",
                                                    className: "text-600",
                                                    children: "This name will be used to identify your HCX configuration"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-content-center flex-grow-1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/images/home.png",
                                    alt: "HCX Builder",
                                    className: "w-full",
                                    style: {
                                        maxHeight: "400px",
                                        objectFit: "contain",
                                        maxWidth: "600px"
                                    }
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: children
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "card mx-3 mb-0 flex justify-content-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "p-buttonset flex",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                            disabled: activeIndex === 0,
                            label: "Previous",
                            icon: "pi pi-chevron-left",
                            onClick: back,
                            rounded: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                            disabled: activeIndex === 3,
                            label: "Next",
                            icon: "pi pi-chevron-right",
                            iconPos: "right",
                            onClick: next,
                            rounded: true
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HCXBuilderWizard);


/***/ }),

/***/ 2745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/bravgj/Downloads/hcx-builder/app/(main)/hcx/builder/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;