(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{3321:function(e,t,a){"use strict";a.d(t,{Z:function(){return C}});var o=a(3366),r=a(7462),n=a(7294),i=a(6010),l=a(7925),s=a(4780),d=a(1796),c=a(948),u=a(1657),p=a(2607),h=a(8216),x=a(1588),m=a(4867);function v(e){return(0,m.Z)("MuiButton",e)}let b=(0,x.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),g=n.createContext({});var f=a(5893);let Z=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=e=>{let{color:t,disableElevation:a,fullWidth:o,size:n,variant:i,classes:l}=e,d={root:["root",i,`${i}${(0,h.Z)(t)}`,`size${(0,h.Z)(n)}`,`${i}Size${(0,h.Z)(n)}`,"inherit"===t&&"colorInherit",a&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,h.Z)(n)}`],endIcon:["endIcon",`iconSize${(0,h.Z)(n)}`]},c=(0,s.Z)(d,v,l);return(0,r.Z)({},l,c)},y=e=>(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),z=(0,c.ZP)(p.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,t[a.variant],t[`${a.variant}${(0,h.Z)(a.color)}`],t[`size${(0,h.Z)(a.size)}`],t[`${a.variant}Size${(0,h.Z)(a.size)}`],"inherit"===a.color&&t.colorInherit,a.disableElevation&&t.disableElevation,a.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var a,o;return(0,r.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${b.focusVisible}`]:(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${b.disabled}`]:(0,r.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(a=(o=e.palette).getContrastText)?void 0:a.call(o,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${b.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${b.disabled}`]:{boxShadow:"none"}}),w=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.startIcon,t[`iconSize${(0,h.Z)(a.size)}`]]}})(({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},y(e))),k=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.endIcon,t[`iconSize${(0,h.Z)(a.size)}`]]}})(({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},y(e))),$=n.forwardRef(function(e,t){let a=n.useContext(g),s=(0,l.Z)(a,e),d=(0,u.Z)({props:s,name:"MuiButton"}),{children:c,color:p="primary",component:h="button",className:x,disabled:m=!1,disableElevation:v=!1,disableFocusRipple:b=!1,endIcon:y,focusVisibleClassName:$,fullWidth:C=!1,size:R="medium",startIcon:I,type:W,variant:j="text"}=d,E=(0,o.Z)(d,Z),M=(0,r.Z)({},d,{color:p,component:h,disabled:m,disableElevation:v,disableFocusRipple:b,fullWidth:C,size:R,type:W,variant:j}),N=S(M),P=I&&(0,f.jsx)(w,{className:N.startIcon,ownerState:M,children:I}),T=y&&(0,f.jsx)(k,{className:N.endIcon,ownerState:M,children:y});return(0,f.jsxs)(z,(0,r.Z)({ownerState:M,className:(0,i.Z)(a.className,N.root,x),component:h,disabled:m,focusRipple:!b,focusVisibleClassName:(0,i.Z)(N.focusVisible,$),ref:t,type:W},E,{classes:N,children:[P,c,T]}))});var C=$},5582:function(e,t,a){"use strict";a.d(t,{Z:function(){return z}});var o=a(3366),r=a(7462),n=a(7294),i=a(6010),l=a(4142),s=a(4867),d=a(4780),c=a(9628),u=a(3264),p=a(6500),h=a(5893);let x=["className","component","disableGutters","fixed","maxWidth","classes"],m=(0,p.Z)(),v=(0,u.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,t[`maxWidth${(0,l.Z)(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),b=e=>(0,c.Z)({props:e,name:"MuiContainer",defaultTheme:m}),g=(e,t)=>{let a=e=>(0,s.Z)(t,e),{classes:o,fixed:r,disableGutters:n,maxWidth:i}=e,c={root:["root",i&&`maxWidth${(0,l.Z)(String(i))}`,r&&"fixed",n&&"disableGutters"]};return(0,d.Z)(c,a,o)};var f=a(8216),Z=a(948),S=a(1657);let y=function(e={}){let{createStyledComponent:t=v,useThemeProps:a=b,componentName:l="MuiContainer"}=e,s=t(({theme:e,ownerState:t})=>(0,r.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,a)=>{let o=e.breakpoints.values[a];return 0!==o&&(t[e.breakpoints.up(a)]={maxWidth:`${o}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>(0,r.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})),d=n.forwardRef(function(e,t){let n=a(e),{className:d,component:c="div",disableGutters:u=!1,fixed:p=!1,maxWidth:m="lg"}=n,v=(0,o.Z)(n,x),b=(0,r.Z)({},n,{component:c,disableGutters:u,fixed:p,maxWidth:m}),f=g(b,l);return(0,h.jsx)(s,(0,r.Z)({as:c,ownerState:b,className:(0,i.Z)(f.root,d),ref:t},v))});return d}({createStyledComponent:(0,Z.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,t[`maxWidth${(0,f.Z)(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,S.Z)({props:e,name:"MuiContainer"})});var z=y},3264:function(e,t,a){"use strict";var o=a(182);let r=(0,o.ZP)();t.Z=r},394:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return a(352)}])},352:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return v}});var o=a(5893),r=a(9008),n=a.n(r),i=a(1664),l=a.n(i),s=a(7294);let d=s.forwardRef(function({title:e,titleId:t,...a},o){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},a),e?s.createElement("title",{id:t},e):null,s.createElement("path",{fillRule:"evenodd",d:"M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z",clipRule:"evenodd"}))});var c=a(7357),u=a(5582),p=a(5861),h=a(3321),x=a(3219);let m=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n(),{children:(0,o.jsx)("title",{children:"404 | Devias Kit"})}),(0,o.jsx)(c.Z,{component:"main",sx:{alignItems:"center",display:"flex",flexGrow:1,minHeight:"100%"},children:(0,o.jsx)(u.Z,{maxWidth:"md",children:(0,o.jsxs)(c.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column"},children:[(0,o.jsx)(c.Z,{sx:{mb:3,textAlign:"center"},children:(0,o.jsx)("img",{alt:"Under development",src:"/assets/errors/error-404.png",style:{display:"inline-block",maxWidth:"100%",width:400}})}),(0,o.jsx)(p.Z,{align:"center",sx:{mb:3},variant:"h3",children:"404: The page you are looking for isn’t here"}),(0,o.jsx)(p.Z,{align:"center",color:"text.secondary",variant:"body1",children:"You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation"}),(0,o.jsx)(h.Z,{component:l(),href:"/",startIcon:(0,o.jsx)(x.Z,{fontSize:"small",children:(0,o.jsx)(d,{})}),sx:{mt:3},variant:"contained",children:"Go back to dashboard"})]})})})]});var v=m}},function(e){e.O(0,[60,774,888,179],function(){return e(e.s=394)}),_N_E=e.O()}]);