(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[344],{1426:function(e,r,n){"use strict";n.d(r,{Z:function(){return B}});var i=n(7462),t=n(3366),a=n(7294),l=n(6010),o=n(4780),s=n(4867),u=n(3264),c=n(9628),d=n(6682),p=n(9707),f=n(6500);function m(e){return e.level>0&&e.container}function v(e){return function(r){return`var(--Grid-${r}Spacing${e.level||""})`}}function g(e){return function(r){return 0===e.level?`var(--Grid-${r}Spacing)`:`var(--Grid-${r}Spacing${e.level-1||""})`}}let x=(e,r)=>e.filter(e=>r.includes(e)),h=(e,r,n)=>{let i=e.keys[0];if(Array.isArray(r))r.forEach((r,i)=>{n((r,n)=>{i<=e.keys.length-1&&(0===i?Object.assign(r,n):r[e.up(e.keys[i])]=n)},r)});else if(r&&"object"==typeof r){let t=Object.keys(r).length>e.keys.length?e.keys:x(e.keys,Object.keys(r));t.forEach(t=>{if(-1!==e.keys.indexOf(t)){let a=r[t];void 0!==a&&n((r,n)=>{i===t?Object.assign(r,n):r[e.up(t)]=n},a)}})}else("number"==typeof r||"string"==typeof r)&&n((e,r)=>{Object.assign(e,r)},r)},b=({theme:e,ownerState:r})=>{let n=v(r),i={};return h(e.breakpoints,r.gridSize,(e,t)=>{let a={};!0===t&&(a={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===t&&(a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"==typeof t&&(a={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${t} / var(--Grid-columns)${m(r)?` + ${n("column")}`:""})`}),e(i,a)}),i},w=({theme:e,ownerState:r})=>{let n={};return h(e.breakpoints,r.gridOffset,(e,r)=>{let i={};"auto"===r&&(i={marginLeft:"auto"}),"number"==typeof r&&(i={marginLeft:0===r?"0px":`calc(100% * ${r} / var(--Grid-columns))`}),e(n,i)}),n},y=({theme:e,ownerState:r})=>{if(!r.container)return{};let n={"--Grid-columns":12};return h(e.breakpoints,r.columns,(e,r)=>{e(n,{"--Grid-columns":r})}),n},j=({theme:e,ownerState:r})=>{if(!r.container)return{};let n=g(r),i=m(r)?{[`--Grid-rowSpacing${r.level||""}`]:n("row")}:{};return h(e.breakpoints,r.rowSpacing,(n,t)=>{var a;n(i,{[`--Grid-rowSpacing${r.level||""}`]:"string"==typeof t?t:null==(a=e.spacing)?void 0:a.call(e,t)})}),i},S=({theme:e,ownerState:r})=>{if(!r.container)return{};let n=g(r),i=m(r)?{[`--Grid-columnSpacing${r.level||""}`]:n("column")}:{};return h(e.breakpoints,r.columnSpacing,(n,t)=>{var a;n(i,{[`--Grid-columnSpacing${r.level||""}`]:"string"==typeof t?t:null==(a=e.spacing)?void 0:a.call(e,t)})}),i},Z=({theme:e,ownerState:r})=>{if(!r.container)return{};let n={};return h(e.breakpoints,r.direction,(e,r)=>{e(n,{flexDirection:r})}),n},$=({ownerState:e})=>{let r=v(e),n=g(e);return(0,i.Z)({minWidth:0,boxSizing:"border-box"},e.container&&(0,i.Z)({display:"flex",flexWrap:"wrap"},e.wrap&&"wrap"!==e.wrap&&{flexWrap:e.wrap},{margin:`calc(${r("row")} / -2) calc(${r("column")} / -2)`},e.disableEqualOverflow&&{margin:`calc(${r("row")} * -1) 0px 0px calc(${r("column")} * -1)`}),(!e.container||m(e))&&(0,i.Z)({padding:`calc(${n("row")} / 2) calc(${n("column")} / 2)`},(e.disableEqualOverflow||e.parentDisableEqualOverflow)&&{padding:`${n("row")} 0px 0px ${n("column")}`}))},k=e=>{let r=[];return Object.entries(e).forEach(([e,n])=>{!1!==n&&void 0!==n&&r.push(`grid-${e}-${String(n)}`)}),r},O=(e,r="xs")=>{function n(e){return void 0!==e&&("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e&&e>0)}if(n(e))return[`spacing-${r}-${String(e)}`];if("object"==typeof e&&!Array.isArray(e)){let r=[];return Object.entries(e).forEach(([e,i])=>{n(i)&&r.push(`spacing-${e}-${String(i)}`)}),r}return[]},E=e=>void 0===e?[]:"object"==typeof e?Object.entries(e).map(([e,r])=>`direction-${e}-${r}`):[`direction-xs-${String(e)}`];var G=n(5893);let C=["className","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow"],_=(0,f.Z)(),q=(0,u.Z)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,r)=>r.root});function N(e){return(0,c.Z)({props:e,name:"MuiGrid",defaultTheme:_})}var P=n(948),W=n(1657);let A=function(e={}){let{createStyledComponent:r=q,useThemeProps:n=N,componentName:u="MuiGrid"}=e,c=a.createContext(0),f=a.createContext(void 0),m=(e,r)=>{let{container:n,direction:i,spacing:t,wrap:a,gridSize:l}=e,c={root:["root",n&&"container","wrap"!==a&&`wrap-xs-${String(a)}`,...E(i),...k(l),...n?O(t,r.breakpoints.keys[0]):[]]};return(0,o.Z)(c,e=>(0,s.Z)(u,e),{})},v=r(y,S,j,b,Z,$,w),g=a.forwardRef(function(e,r){var o,s,u,g,x,h,b,w;let y=(0,d.Z)(),j=n(e),S=(0,p.Z)(j),Z=a.useContext(c),$=a.useContext(f),{className:k,columns:O=12,container:E=!1,component:_="div",direction:q="row",wrap:N="wrap",spacing:P=0,rowSpacing:W=P,columnSpacing:A=P,disableEqualOverflow:B}=S,M=(0,t.Z)(S,C),R=B;Z&&void 0!==B&&(R=e.disableEqualOverflow);let T={},L={},z={};Object.entries(M).forEach(([e,r])=>{void 0!==y.breakpoints.values[e]?T[e]=r:void 0!==y.breakpoints.values[e.replace("Offset","")]?L[e.replace("Offset","")]=r:z[e]=r});let D=null!=(o=e.columns)?o:Z?void 0:O,V=null!=(s=e.spacing)?s:Z?void 0:P,I=null!=(u=null!=(g=e.rowSpacing)?g:e.spacing)?u:Z?void 0:W,X=null!=(x=null!=(h=e.columnSpacing)?h:e.spacing)?x:Z?void 0:A,F=(0,i.Z)({},S,{level:Z,columns:D,container:E,direction:q,wrap:N,spacing:V,rowSpacing:I,columnSpacing:X,gridSize:T,gridOffset:L,disableEqualOverflow:null!=(b=null!=(w=R)?w:$)&&b,parentDisableEqualOverflow:$}),H=m(F,y),J=(0,G.jsx)(v,(0,i.Z)({ref:r,as:_,ownerState:F,className:(0,l.Z)(H.root,k)},z));return E&&(J=(0,G.jsx)(c.Provider,{value:Z+1,children:J})),void 0!==R&&R!==(null!=$&&$)&&(J=(0,G.jsx)(f.Provider,{value:R,children:J})),J});return g}({createStyledComponent:(0,P.ZP)("div",{name:"MuiGrid2",overridesResolver:(e,r)=>r.root}),componentName:"MuiGrid2",useThemeProps:e=>(0,W.Z)({props:e,name:"MuiGrid2"})});var B=A},3264:function(e,r,n){"use strict";var i=n(182);let t=(0,i.ZP)();r.Z=t},2505:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login",function(){return n(8388)}])},2540:function(e,r,n){"use strict";n(5893)},2662:function(e,r,n){"use strict";n.d(r,{a:function(){return a}});var i=n(7294),t=n(6300);let a=()=>(0,i.useContext)(t.Vo)},8354:function(e,r,n){"use strict";n.d(r,{A:function(){return s}});var i=n(5893),t=n(5697),a=n.n(t);n(1664);var l=n(7357),o=n(1426);n(2540);let s=e=>{let{children:r}=e;return(0,i.jsx)(l.Z,{component:"main",sx:{display:"flex",flex:"1 1 auto"},children:(0,i.jsx)(o.Z,{container:!0,sx:{flex:"1 1 auto"},children:r})})};s.prototypes={children:a().node}},8388:function(e,r,n){"use strict";n.r(r);var i=n(5893),t=n(7294),a=n(9008),l=n.n(a);n(1664);var o=n(9332),s=n(8482),u=n(6310),c=n(7357),d=n(6447),p=n(5861),f=n(135),m=n(3321),v=n(2662),g=n(8354);let x=()=>{let e=(0,o.useRouter)(),r=(0,v.a)(),[n,a]=(0,t.useState)("email"),g=(0,s.TA)({initialValues:{email:"testemployee@gmail.com",password:"12345678",submit:null},validationSchema:u.Ry({email:u.Z_().email("Must be a valid email").max(255).required("Email is required"),password:u.Z_().max(255).required("Password is required")}),onSubmit:async(n,i)=>{try{await r.signIn(n.email,n.password),e.push("/")}catch(e){i.setStatus({success:!1}),i.setErrors({submit:e.message}),i.setSubmitting(!1)}}});return(0,t.useCallback)((e,r)=>{a(r)},[]),(0,t.useCallback)(()=>{r.skip(),e.push("/")},[r,e]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l(),{children:(0,i.jsx)("title",{children:"Login | Public service"})}),(0,i.jsx)(c.Z,{sx:{backgroundColor:"background.paper",flex:"1 1 auto",alignItems:"center",display:"flex",justifyContent:"center"},children:(0,i.jsx)(c.Z,{sx:{maxWidth:550,px:3,py:"100px",width:"100%"},children:(0,i.jsxs)("div",{children:[(0,i.jsx)(d.Z,{spacing:1,sx:{mb:3},children:(0,i.jsx)(p.Z,{variant:"h4",children:"Login | Public service"})}),"email"===n&&(0,i.jsxs)("form",{noValidate:!0,onSubmit:g.handleSubmit,children:[(0,i.jsxs)(d.Z,{spacing:3,children:[(0,i.jsx)(f.Z,{error:!!(g.touched.email&&g.errors.email),fullWidth:!0,helperText:g.touched.email&&g.errors.email,label:"Email Address",name:"email",onBlur:g.handleBlur,onChange:g.handleChange,type:"email",value:g.values.email}),(0,i.jsx)(f.Z,{error:!!(g.touched.password&&g.errors.password),fullWidth:!0,helperText:g.touched.password&&g.errors.password,label:"Password",name:"password",onBlur:g.handleBlur,onChange:g.handleChange,type:"password",value:g.values.password})]}),g.errors.submit&&(0,i.jsx)(p.Z,{color:"error",sx:{mt:3},variant:"body2",children:g.errors.submit}),(0,i.jsx)(m.Z,{fullWidth:!0,size:"large",sx:{mt:3},type:"submit",variant:"contained",children:"Continue"})]})]})})})]})};x.getLayout=e=>(0,i.jsx)(g.A,{children:e}),r.default=x}},function(e){e.O(0,[60,230,703,28,333,774,888,179],function(){return e(e.s=2505)}),_N_E=e.O()}]);