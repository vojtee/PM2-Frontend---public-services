(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[205],{1827:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/issue-map",function(){return i(6609)}])},6609:function(e,t,i){"use strict";i.r(t);var s=i(5893),n=i(9008),l=i.n(n),a=i(7357),o=i(5582),r=i(5861),c=i(8334),d=i(7054),u=i(1323),h=i(7294),g=i(6822);let p={lat:49.82724,lng:18.259763},x="green",j=()=>{let[e,t]=(0,h.useState)(!1),i=(0,g.Z)(),[n,c]=(0,h.useState)(null),[j,y]=(0,h.useState)(!0),[_,f]=(0,h.useState)([]),m=(e,t)=>{f(i=>{let s=[...i];return s[e]=t,s})},v=async()=>{try{let e=await i.get("/api/v1/issues/square?min_longitude=18.119173&min_latitude=49.893346&max_longitude=18.480007&max_latitude=49.746067");console.log(e);let t=e.data.map(e=>({id:e.id,coordinates:{latitude:e.coordinates.latitude,longitude:e.coordinates.longitude},title:e.title,categoryId:e.categoryId,status:e.status}));c(t),console.log(t),console.log(t[0]),console.log(t[0].coordinates),console.log(t[0].coordinates.latitude)}catch(e){console.error("Error fetching issues:",e)}finally{y(!1)}},{isLoaded:w}=(0,d.Db)({googleMapsApiKey:"AIzaSyC6-kPQq0Hv7gacfZ_1NenpyS_a1ahV910",libraries:["places"]}),[C,S]=(0,h.useState)(null);return(0,h.useEffect)(()=>{let e=async()=>{await v(),f(Array(n.length).fill(!1))};e()},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l(),{children:(0,s.jsx)("title",{children:"Issue map | A Better City"})}),(0,s.jsx)(a.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,s.jsxs)(o.Z,{maxWidth:"lg",children:[(0,s.jsx)(r.Z,{variant:"h4",children:"Issue map"}),j?(0,s.jsx)("p",{children:"Loading..."}):(0,s.jsx)(u.un,{apiKey:"AIzaSyC6-kPQq0Hv7gacfZ_1NenpyS_a1ahV910",children:(0,s.jsx)("div",{style:{height:"70vh",width:"100%",position:"relative"},children:(0,s.jsx)(u.D5,{zoom:12,center:p,mapId:"8682b82c7c8bf444",children:(0,s.jsx)("div",{children:n.map((e,t)=>(0,s.jsxs)("div",{children:[(0,s.jsx)(u._Q,{position:{lat:e.coordinates.latitude,lng:e.coordinates.longitude},onClick:()=>m(t,!0),children:(0,s.jsx)(u.lO,{background:"LightCoral",borderColor:x,glyphColor:x})}),_[t]&&(0,s.jsxs)(u.nx,{position:{lat:e.coordinates.latitude,lng:e.coordinates.longitude},onCloseClick:()=>m(t,!1),children:[(0,s.jsx)("h4",{children:e.title}),(0,s.jsxs)("p",{children:["ID: ",e.id]}),(0,s.jsxs)("p",{children:["Status: ",e.status]}),(0,s.jsxs)("p",{children:["Category ID: ",e.categoryId]}),(0,s.jsx)("a",{href:"issues/"+e.id,children:"See detail"})]}),C&&(0,s.jsx)(d.Jx,{position:C})]},t))})})})})]})})]})};j.getLayout=e=>(0,s.jsx)(c.A,{children:e}),t.default=j},6822:function(e,t,i){"use strict";var s=i(5121);let n=()=>{let e=s.Z.create({baseURL:"https://bettercity.mikita.dev",timeout:8e3,headers:{Authorization:"Bearer "+window.sessionStorage.getItem("token")}});return e};t.Z=n}},function(e){e.O(0,[255,60,230,410,121,735,334,774,888,179],function(){return e(e.s=1827)}),_N_E=e.O()}]);