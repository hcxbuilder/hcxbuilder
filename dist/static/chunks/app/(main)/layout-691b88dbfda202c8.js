(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95],{124:function(e,t,i){Promise.resolve().then(i.bind(i,5587)),Promise.resolve().then(i.bind(i,2801))},2801:function(e,t,i){"use strict";i.r(t),i.d(t,{ProjectContext:function(){return n},ProjectProvider:function(){return r}});var l=i(9268),a=i(6006),s=i(6539);let n=(0,a.createContext)({hcxProject:{name:""},setHcxProject:()=>{}});function r(e){let{children:t}=e,[i,r]=(0,a.useState)(!1),[o,c]=(0,a.useState)({name:"",vcenters:[{...s.T.VCENTER,serviceMeshes:[{...s.T.SERVICE_MESH}]}]});return(0,a.useEffect)(()=>{r(!0);let e=localStorage.getItem("hcxProject");e&&c(JSON.parse(e))},[]),(0,a.useEffect)(()=>{i&&localStorage.setItem("hcxProject",JSON.stringify(o))},[o,i]),(0,l.jsx)(n.Provider,{value:{hcxProject:o,setHcxProject:c},children:t})}},6539:function(e,t,i){"use strict";i.d(t,{E:function(){return a},T:function(){return l}});let l={VCENTER:{vcenter_name:"",vcenter_sso_url:"",vcenter_version:"",vcenter_url:"",vcenter_clusters:[],hcx_manager_name:"",hcx_cluster:"",hcx_datastore:"",hcx_resource_pool:"",hcx_ip:"",hcx_network:"",hcx_network_prefix:"",hcx_gateway:"",hcx_dns_servers:[],hcx_ntp_servers:[],serviceMeshes:[]},SERVICE_MESH:{name:"",vcenter_name:"",clusters_services:[],clusters_deployments:[],storage:[],pool:[],management:{network:"",ip:[],prefix:"",gateway:"",dns_servers:[]},vmotion_type:"management",replication_type:"management",uplink_type:"management",vMotion:null,replication:null,uplink:null,distributed_switches:[],wo_enabled:!1}},a={IP_ADDRESS:/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,URL:/^https?:\/\/.+/,VERSION:/^\d+\.\d+(\.\d+)?$/,NETWORK_PREFIX:/^([1-9]|[1-2][0-9]|3[0-2])$/}},8671:function(e,t,i){"use strict";i.d(t,{V:function(){return s},a:function(){return n}});var l=i(9268),a=i(6006);let s=(0,a.createContext)({}),n=e=>{let{children:t}=e,[i,n]=(0,a.useState)({ripple:!1,inputStyle:"outlined",menuMode:"static",colorScheme:"light",theme:"lara-light-indigo",scale:14}),[r,o]=(0,a.useState)({staticMenuDesktopInactive:!1,overlayMenuActive:!1,profileSidebarVisible:!1,configSidebarVisible:!1,staticMenuMobileActive:!1,menuHoverActive:!1}),c=()=>"overlay"===i.menuMode,u=()=>window.innerWidth>991;return(0,l.jsx)(s.Provider,{value:{layoutConfig:i,setLayoutConfig:n,layoutState:r,setLayoutState:o,onMenuToggle:()=>{c()&&o(e=>({...e,overlayMenuActive:!e.overlayMenuActive})),u()?o(e=>({...e,staticMenuDesktopInactive:!e.staticMenuDesktopInactive})):o(e=>({...e,staticMenuMobileActive:!e.staticMenuMobileActive}))},showProfileSidebar:()=>{o(e=>({...e,profileSidebarVisible:!e.profileSidebarVisible}))}},children:t})}},5587:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return g}});var l=i(9268),a=i(465),s=i(6006),n=i(5942),r=i(8671),o=()=>{let{layoutConfig:e}=(0,s.useContext)(r.V);return(0,l.jsxs)("div",{className:"layout-footer",children:[(0,l.jsx)("img",{src:"/layout/images/logo-".concat("light"===e.colorScheme?"dark":"white",".svg"),alt:"Logo",height:"20",className:"mr-2"}),(0,l.jsx)("span",{className:"font-medium ml-2",children:"HCX Builder v0.1"})]})},c=i(5846),u=i.n(c),m=i(9347),d=i(562);let p=(0,s.createContext)({}),v=e=>{let{children:t}=e,[i,a]=(0,s.useState)("");return(0,l.jsx)(p.Provider,{value:{activeMenu:i,setActiveMenu:a},children:t})};var x=i(6008);let h=e=>{let t=(0,x.usePathname)(),i=(0,x.useSearchParams)(),{activeMenu:a,setActiveMenu:r}=(0,s.useContext)(p),o=e.item,c=e.parentKey?e.parentKey+"-"+e.index:String(e.index),v=o.to&&t===o.to,b=a===c||a.startsWith(c+"-"),y=e=>{o.to&&o.to===e&&r(c)};(0,s.useEffect)(()=>{y(t)},[t,i]);let f=t=>{if(o.disabled){t.preventDefault();return}o.command&&o.command({originalEvent:t,item:o}),o.items?r(b?e.parentKey:c):r(c)},g=o.items&&!1!==o.visible&&(0,l.jsx)(d.Z,{timeout:{enter:1e3,exit:450},classNames:"layout-submenu",in:!!e.root||b,children:(0,l.jsx)("ul",{children:o.items.map((e,t)=>(0,l.jsx)(h,{item:e,index:t,className:e.badgeClass,parentKey:c},e.label))})},o.label);return(0,l.jsxs)("li",{className:(0,n.AK)({"layout-root-menuitem":e.root,"active-menuitem":b}),children:[e.root&&!1!==o.visible&&(0,l.jsx)("div",{className:"layout-menuitem-root-text",children:o.label}),(!o.to||o.items)&&!1!==o.visible?(0,l.jsxs)("a",{href:o.url,onClick:e=>f(e),className:(0,n.AK)(o.class,"p-ripple"),target:o.target,tabIndex:0,children:[(0,l.jsx)("i",{className:(0,n.AK)("layout-menuitem-icon",o.icon)}),(0,l.jsx)("span",{className:"layout-menuitem-text",children:o.label}),o.items&&(0,l.jsx)("i",{className:"pi pi-fw pi-angle-down layout-submenu-toggler"}),(0,l.jsx)(m.H,{})]}):null,o.to&&!o.items&&!1!==o.visible?(0,l.jsxs)(u(),{href:o.to,replace:o.replaceUrl,target:o.target,onClick:e=>f(e),className:(0,n.AK)(o.class,"p-ripple",{"active-route":v}),tabIndex:0,children:[(0,l.jsx)("i",{className:(0,n.AK)("layout-menuitem-icon",o.icon)}),(0,l.jsx)("span",{className:"layout-menuitem-text",children:o.label}),o.items&&(0,l.jsx)("i",{className:"pi pi-fw pi-angle-down layout-submenu-toggler"}),(0,l.jsx)(m.H,{})]}):null,g]})};var b=()=>{let{layoutConfig:e}=(0,s.useContext)(r.V);return(0,l.jsx)(v,{children:(0,l.jsx)("ul",{className:"layout-menu",children:[{label:"HCX Builder",items:[{label:"Home",icon:"pi pi-fw pi-home",to:"/"},{label:"Wizard",icon:"pi pi-fw pi-id-card",to:"/hcx/builder"},{label:"Schema",icon:"pi pi-fw pi-mobile",to:"/hcx/tree"},{label:"Import",icon:"pi pi-fw pi-table",to:"/hcx/import"},{label:"Export",icon:"pi pi-fw pi-list",to:"/hcx/export"}]}].map((e,t)=>(null==e?void 0:e.seperator)?(0,l.jsx)("li",{className:"menu-separator"}):(0,l.jsx)(h,{item:e,root:!0,index:t},e.label))})})},y=()=>(0,l.jsx)(b,{}),f=i(3142),g=e=>{let{children:t}=e,{layoutConfig:i,layoutState:c,setLayoutState:u}=(0,s.useContext)(r.V),{setRipple:m}=(0,s.useContext)(f.Ou),d=(0,s.useRef)(null),[p,v]=(0,a.OR)({type:"click",listener:e=>{var t,i;let l=!((null===(t=d.current)||void 0===t?void 0:t.isSameNode(e.target))||(null===(i=d.current)||void 0===i?void 0:i.contains(e.target)));l&&g()}}),h=(0,x.usePathname)(),b=(0,x.useSearchParams)();(0,s.useEffect)(()=>{g()},[h,b]);let g=()=>{u(e=>({...e,overlayMenuActive:!1,staticMenuMobileActive:!1,menuHoverActive:!1})),v(),_()},j=()=>{document.body.classList?document.body.classList.add("blocked-scroll"):document.body.className+=" blocked-scroll"},_=()=>{document.body.classList?document.body.classList.remove("blocked-scroll"):document.body.className=document.body.className.replace(RegExp("(^|\\b)"+"blocked-scroll".split(" ").join("|")+"(\\b|$)","gi")," ")};(0,s.useEffect)(()=>{(c.overlayMenuActive||c.staticMenuMobileActive)&&p(),c.staticMenuMobileActive&&j()},[c.overlayMenuActive,c.staticMenuMobileActive]),(0,a.zq)(()=>{v()});let M=(0,n.AK)("layout-wrapper",{"layout-overlay":"overlay"===i.menuMode,"layout-static":"static"===i.menuMode,"layout-static-inactive":c.staticMenuDesktopInactive&&"static"===i.menuMode,"layout-overlay-active":c.overlayMenuActive,"layout-mobile-active":c.staticMenuMobileActive,"p-input-filled":"filled"===i.inputStyle,"p-ripple-disabled":!i.ripple});return(0,l.jsx)(s.Fragment,{children:(0,l.jsxs)("div",{className:M,style:{paddingTop:0},children:[(0,l.jsx)("div",{ref:d,className:"layout-sidebar",style:{top:0,marginTop:"2rem"},children:(0,l.jsx)(y,{})}),(0,l.jsxs)("div",{className:"layout-main-container",style:{paddingTop:0,marginTop:"2rem"},children:[(0,l.jsx)("div",{className:"layout-main",children:t}),(0,l.jsx)(o,{})]}),(0,l.jsx)("div",{className:"layout-mask"})]})})}}},function(e){e.O(0,[434,347,562,487,253,769,744],function(){return e(e.s=124)}),_N_E=e.O()}]);