exports.id = 644;
exports.ids = [644];
exports.modules = {

/***/ 9281:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1611))

/***/ }),

/***/ 2767:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7293));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9941))

/***/ }),

/***/ 7239:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8782, 23))

/***/ }),

/***/ 1611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_context_layoutcontext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6538);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(284);
/* harmony import */ var primereact_resources_primereact_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4732);
/* harmony import */ var primereact_resources_primereact_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_resources_primereact_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3468);
/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1091);
/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_layout_layout_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7993);
/* harmony import */ var _styles_layout_layout_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_layout_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_demo_Demos_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3114);
/* harmony import */ var _styles_demo_Demos_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_demo_Demos_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9941);
/* __next_internal_client_entry_do_not_use__ default auto */ 








function RootLayout({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("html", {
        lang: "en",
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("head", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    id: "theme-css",
                    href: `/themes/lara-light-indigo/theme.css`,
                    rel: "stylesheet"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_api__WEBPACK_IMPORTED_MODULE_8__.PrimeReactProvider, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_project__WEBPACK_IMPORTED_MODULE_7__.ProjectProvider, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_context_layoutcontext__WEBPACK_IMPORTED_MODULE_1__/* .LayoutProvider */ .a, {
                            children: children
                        })
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 9941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectContext: () => (/* binding */ ProjectContext),
/* harmony export */   ProjectProvider: () => (/* binding */ ProjectProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7136);
/* __next_internal_client_entry_do_not_use__ ProjectContext,ProjectProvider auto */ 


const ProjectContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    hcxProject: {
        name: ""
    },
    setHcxProject: ()=>{}
});
function ProjectProvider({ children }) {
    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [hcxProject, setHcxProject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        vcenters: [
            {
                ..._constants__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_VALUES */ .T.VCENTER,
                serviceMeshes: [
                    {
                        ..._constants__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_VALUES */ .T.SERVICE_MESH
                    }
                ]
            }
        ]
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsClient(true);
        const saved = localStorage.getItem("hcxProject");
        if (saved) {
            setHcxProject(JSON.parse(saved));
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isClient) {
            localStorage.setItem("hcxProject", JSON.stringify(hcxProject));
        }
    }, [
        hcxProject,
        isClient
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProjectContext.Provider, {
        value: {
            hcxProject,
            setHcxProject
        },
        children: children
    });
}


/***/ }),

/***/ 7136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ VALIDATION_PATTERNS),
/* harmony export */   T: () => (/* binding */ DEFAULT_VALUES)
/* harmony export */ });
const DEFAULT_VALUES = {
    VCENTER: {
        vcenter_name: "",
        vcenter_sso_url: "",
        vcenter_version: "",
        vcenter_url: "",
        vcenter_clusters: [],
        hcx_manager_name: "",
        hcx_cluster: "",
        hcx_datastore: "",
        hcx_resource_pool: "",
        hcx_ip: "",
        hcx_network: "",
        hcx_network_prefix: "",
        hcx_gateway: "",
        hcx_dns_servers: [],
        hcx_ntp_servers: [],
        serviceMeshes: []
    },
    SERVICE_MESH: {
        name: "",
        vcenter_name: "",
        clusters_services: [],
        clusters_deployments: [],
        storage: [],
        pool: [],
        management: {
            network: "",
            ip: [],
            prefix: "",
            gateway: "",
            dns_servers: []
        },
        vmotion_type: "management",
        replication_type: "management",
        uplink_type: "management",
        vMotion: null,
        replication: null,
        uplink: null,
        distributed_switches: [],
        wo_enabled: false
    }
};
const VALIDATION_PATTERNS = {
    IP_ADDRESS: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    URL: /^https?:\/\/.+/,
    VERSION: /^\d+\.\d+(\.\d+)?$/,
    NETWORK_PREFIX: /^([1-9]|[1-2][0-9]|3[0-2])$/
};


/***/ }),

/***/ 6538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ LayoutContext),
/* harmony export */   a: () => (/* binding */ LayoutProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ LayoutContext,LayoutProvider auto */ 

const LayoutContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const LayoutProvider = ({ children })=>{
    const [layoutConfig, setLayoutConfig] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        ripple: false,
        inputStyle: "outlined",
        menuMode: "static",
        colorScheme: "light",
        theme: "lara-light-indigo",
        scale: 14
    });
    const [layoutState, setLayoutState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        profileSidebarVisible: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false
    });
    const onMenuToggle = ()=>{
        if (isOverlay()) {
            setLayoutState((prevLayoutState)=>({
                    ...prevLayoutState,
                    overlayMenuActive: !prevLayoutState.overlayMenuActive
                }));
        }
        if (isDesktop()) {
            setLayoutState((prevLayoutState)=>({
                    ...prevLayoutState,
                    staticMenuDesktopInactive: !prevLayoutState.staticMenuDesktopInactive
                }));
        } else {
            setLayoutState((prevLayoutState)=>({
                    ...prevLayoutState,
                    staticMenuMobileActive: !prevLayoutState.staticMenuMobileActive
                }));
        }
    };
    const showProfileSidebar = ()=>{
        setLayoutState((prevLayoutState)=>({
                ...prevLayoutState,
                profileSidebarVisible: !prevLayoutState.profileSidebarVisible
            }));
    };
    const isOverlay = ()=>{
        return layoutConfig.menuMode === "overlay";
    };
    const isDesktop = ()=>{
        return window.innerWidth > 991;
    };
    const value = {
        layoutConfig,
        setLayoutConfig,
        layoutState,
        setLayoutState,
        onMenuToggle,
        showProfileSidebar
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LayoutContext.Provider, {
        value: value,
        children: children
    });
};


/***/ }),

/***/ 7293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/primereact/hooks/hooks.cjs.js
var hooks_cjs = __webpack_require__(5215);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/primereact/utils/utils.cjs.js
var utils_cjs = __webpack_require__(7666);
// EXTERNAL MODULE: ./layout/context/layoutcontext.tsx
var layoutcontext = __webpack_require__(6538);
;// CONCATENATED MODULE: ./layout/AppFooter.tsx
/* eslint-disable @next/next/no-img-element */ 


const AppFooter = ()=>{
    const { layoutConfig } = (0,react_.useContext)(layoutcontext/* LayoutContext */.V);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "layout-footer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: `/layout/images/logo-${layoutConfig.colorScheme === "light" ? "dark" : "white"}.svg`,
                alt: "Logo",
                height: "20",
                className: "mr-2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "font-medium ml-2",
                children: "HCX Builder v0.1"
            })
        ]
    });
};
/* harmony default export */ const layout_AppFooter = (AppFooter);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/primereact/ripple/ripple.cjs.js
var ripple_cjs = __webpack_require__(6412);
// EXTERNAL MODULE: ./node_modules/react-transition-group/cjs/index.js
var cjs = __webpack_require__(5701);
;// CONCATENATED MODULE: ./layout/context/menucontext.tsx


const MenuContext = /*#__PURE__*/ (0,react_.createContext)({});
const MenuProvider = ({ children })=>{
    const [activeMenu, setActiveMenu] = (0,react_.useState)("");
    const value = {
        activeMenu,
        setActiveMenu
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(MenuContext.Provider, {
        value: value,
        children: children
    });
};

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
;// CONCATENATED MODULE: ./layout/AppMenuitem.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const AppMenuitem = (props)=>{
    const pathname = (0,navigation.usePathname)();
    const searchParams = (0,navigation.useSearchParams)();
    const { activeMenu, setActiveMenu } = (0,react_.useContext)(MenuContext);
    const item = props.item;
    const key = props.parentKey ? props.parentKey + "-" + props.index : String(props.index);
    const isActiveRoute = item.to && pathname === item.to;
    const active = activeMenu === key || activeMenu.startsWith(key + "-");
    const onRouteChange = (url)=>{
        if (item.to && item.to === url) {
            setActiveMenu(key);
        }
    };
    (0,react_.useEffect)(()=>{
        onRouteChange(pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname,
        searchParams
    ]);
    const itemClick = (event)=>{
        //avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        //execute command
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
        // toggle active state
        if (item.items) setActiveMenu(active ? props.parentKey : key);
        else setActiveMenu(key);
    };
    const subMenu = item.items && item.visible !== false && /*#__PURE__*/ jsx_runtime_.jsx(cjs.CSSTransition, {
        timeout: {
            enter: 1000,
            exit: 450
        },
        classNames: "layout-submenu",
        in: props.root ? true : active,
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            children: item.items.map((child, i)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx(AppMenuitem, {
                    item: child,
                    index: i,
                    className: child.badgeClass,
                    parentKey: key
                }, child.label);
            })
        })
    }, item.label);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: (0,utils_cjs.classNames)({
            "layout-root-menuitem": props.root,
            "active-menuitem": active
        }),
        children: [
            props.root && item.visible !== false && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "layout-menuitem-root-text",
                children: item.label
            }),
            (!item.to || item.items) && item.visible !== false ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: item.url,
                onClick: (e)=>itemClick(e),
                className: (0,utils_cjs.classNames)(item.class, "p-ripple"),
                target: item.target,
                tabIndex: 0,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: (0,utils_cjs.classNames)("layout-menuitem-icon", item.icon)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "layout-menuitem-text",
                        children: item.label
                    }),
                    item.items && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "pi pi-fw pi-angle-down layout-submenu-toggler"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ripple_cjs.Ripple, {})
                ]
            }) : null,
            item.to && !item.items && item.visible !== false ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: item.to,
                replace: item.replaceUrl,
                target: item.target,
                onClick: (e)=>itemClick(e),
                className: (0,utils_cjs.classNames)(item.class, "p-ripple", {
                    "active-route": isActiveRoute
                }),
                tabIndex: 0,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: (0,utils_cjs.classNames)("layout-menuitem-icon", item.icon)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "layout-menuitem-text",
                        children: item.label
                    }),
                    item.items && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "pi pi-fw pi-angle-down layout-submenu-toggler"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ripple_cjs.Ripple, {})
                ]
            }) : null,
            subMenu
        ]
    });
};
/* harmony default export */ const layout_AppMenuitem = (AppMenuitem);

;// CONCATENATED MODULE: ./layout/AppMenu.tsx
/* eslint-disable @next/next/no-img-element */ 




const AppMenu = ()=>{
    const { layoutConfig } = (0,react_.useContext)(layoutcontext/* LayoutContext */.V);
    const model = [
        {
            label: "HCX Builder",
            items: [
                {
                    label: "Home",
                    icon: "pi pi-fw pi-home",
                    to: "/"
                },
                {
                    label: "Wizard",
                    icon: "pi pi-fw pi-id-card",
                    to: "/hcx/builder"
                },
                {
                    label: "Schema",
                    icon: "pi pi-fw pi-mobile",
                    to: "/hcx/tree"
                },
                {
                    label: "Import",
                    icon: "pi pi-fw pi-table",
                    to: "/hcx/import"
                },
                {
                    label: "Export",
                    icon: "pi pi-fw pi-list",
                    to: "/hcx/export"
                }
            ]
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(MenuProvider, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: "layout-menu",
            children: model.map((item, i)=>{
                return !item?.seperator ? /*#__PURE__*/ jsx_runtime_.jsx(layout_AppMenuitem, {
                    item: item,
                    root: true,
                    index: i
                }, item.label) : /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "menu-separator"
                });
            })
        })
    });
};
/* harmony default export */ const layout_AppMenu = (AppMenu);

;// CONCATENATED MODULE: ./layout/AppSidebar.tsx


const AppSidebar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(layout_AppMenu, {});
};
/* harmony default export */ const layout_AppSidebar = (AppSidebar);

// EXTERNAL MODULE: ./node_modules/primereact/api/api.cjs.js
var api_cjs = __webpack_require__(284);
;// CONCATENATED MODULE: ./layout/layout.tsx
/* eslint-disable react-hooks/exhaustive-deps */ /* __next_internal_client_entry_do_not_use__ default auto */ 








const Layout = ({ children })=>{
    const { layoutConfig, layoutState, setLayoutState } = (0,react_.useContext)(layoutcontext/* LayoutContext */.V);
    const { setRipple } = (0,react_.useContext)(api_cjs.PrimeReactContext);
    const sidebarRef = (0,react_.useRef)(null);
    const [bindMenuOutsideClickListener, unbindMenuOutsideClickListener] = (0,hooks_cjs.useEventListener)({
        type: "click",
        listener: (event)=>{
            const isOutsideClicked = !(sidebarRef.current?.isSameNode(event.target) || sidebarRef.current?.contains(event.target));
            if (isOutsideClicked) {
                hideMenu();
            }
        }
    });
    const pathname = (0,navigation.usePathname)();
    const searchParams = (0,navigation.useSearchParams)();
    (0,react_.useEffect)(()=>{
        hideMenu();
    }, [
        pathname,
        searchParams
    ]);
    const hideMenu = ()=>{
        setLayoutState((prevLayoutState)=>({
                ...prevLayoutState,
                overlayMenuActive: false,
                staticMenuMobileActive: false,
                menuHoverActive: false
            }));
        unbindMenuOutsideClickListener();
        unblockBodyScroll();
    };
    const blockBodyScroll = ()=>{
        if (document.body.classList) {
            document.body.classList.add("blocked-scroll");
        } else {
            document.body.className += " blocked-scroll";
        }
    };
    const unblockBodyScroll = ()=>{
        if (document.body.classList) {
            document.body.classList.remove("blocked-scroll");
        } else {
            document.body.className = document.body.className.replace(new RegExp("(^|\\b)" + "blocked-scroll".split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    };
    (0,react_.useEffect)(()=>{
        if (layoutState.overlayMenuActive || layoutState.staticMenuMobileActive) {
            bindMenuOutsideClickListener();
        }
        layoutState.staticMenuMobileActive && blockBodyScroll();
    }, [
        layoutState.overlayMenuActive,
        layoutState.staticMenuMobileActive
    ]);
    (0,hooks_cjs.useUnmountEffect)(()=>{
        unbindMenuOutsideClickListener();
    });
    const containerClass = (0,utils_cjs.classNames)("layout-wrapper", {
        "layout-overlay": layoutConfig.menuMode === "overlay",
        "layout-static": layoutConfig.menuMode === "static",
        "layout-static-inactive": layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === "static",
        "layout-overlay-active": layoutState.overlayMenuActive,
        "layout-mobile-active": layoutState.staticMenuMobileActive,
        "p-input-filled": layoutConfig.inputStyle === "filled",
        "p-ripple-disabled": !layoutConfig.ripple
    });
    return /*#__PURE__*/ jsx_runtime_.jsx((react_default()).Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: containerClass,
            style: {
                paddingTop: 0
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    ref: sidebarRef,
                    className: "layout-sidebar",
                    style: {
                        top: 0,
                        marginTop: "2rem"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(layout_AppSidebar, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "layout-main-container",
                    style: {
                        paddingTop: 0,
                        marginTop: "2rem"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "layout-main",
                            children: children
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(layout_AppFooter, {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "layout-mask"
                })
            ]
        })
    });
};
/* harmony default export */ const layout = (Layout);


/***/ }),

/***/ 6858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./layout/layout.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/bravgj/Downloads/hcx-builder/layout/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const layout = (__default__);
;// CONCATENATED MODULE: ./app/project.tsx

const project_proxy = (0,module_proxy.createProxy)(String.raw`/Users/bravgj/Downloads/hcx-builder/app/project.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: project_esModule, $$typeof: project_$$typeof } = project_proxy;
const project_default_ = project_proxy.default;

const e0 = project_proxy["ProjectContext"];

const e1 = project_proxy["ProjectProvider"];

;// CONCATENATED MODULE: ./app/(main)/layout.tsx



const metadata = {
    title: "HCX Builder",
    description: "HCX Builder.",
    robots: {
        index: false,
        follow: false
    },
    viewport: {
        initialScale: 1,
        width: "device-width"
    },
    icons: {
        icon: "/favicon.ico"
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(e1, {
            children: children
        })
    });
}


/***/ }),

/***/ 729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/bravgj/Downloads/hcx-builder/app/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 3174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 3114:
/***/ (() => {



/***/ }),

/***/ 7993:
/***/ (() => {



/***/ })

};
;