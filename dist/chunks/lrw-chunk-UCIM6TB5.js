import{b as A,c as I}from"./lrw-chunk-MRWQ3ZUN.js";import{a as F}from"./lrw-chunk-VAWVKNJM.js";import{a as R}from"./lrw-chunk-F7OPYQTH.js";import{b as P}from"./lrw-chunk-C5GMONBA.js";import{c as U}from"./lrw-chunk-NDNCB4TR.js";import{a as w,e as B,f as L,g as _,h as z}from"./lrw-chunk-O62MWAW2.js";import{a as T,e as l,f as D,g as y,h as S,j as h,p as f,q as b,r as p,t as c}from"./lrw-chunk-4BK7C6F4.js";y();var o=l(S());y();var d=l(S());var t=l(h()),W=({data:E,tabIndex:u})=>{let[e,C]=(0,d.useState)(),s=(0,d.useRef)(null);(0,d.useEffect)(()=>{let r=R(s.current);if(s.current){let i=U(E).map(a=>({name:a.name,value:a.downloads+a.views+a.outlinks,views:a.views,downloads:a.downloads,outlinks:a.outlinks,conversions:a.conversions}));C(i[0]);let x={tooltip:{trigger:"item"},series:[{name:"Eventos totales del pa\xEDs",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!0,itemStyle:{borderRadius:10},label:{show:!0,position:"outer",alignTo:"edge",edgeDistance:0,width:"100",overflow:"truncate",ellipsis:"...",fontWeight:"bold",color:"#395182"},emphasis:{label:{show:!0,fontSize:14,fontWeight:"bold"}},labelLine:{show:!0},data:i}]},g=()=>{r&&r.resize()};return window.addEventListener("resize",g),x&&r.setOption(x),m(r),()=>{window.removeEventListener("resize",g),r.dispose()}}},[u]);let m=r=>{r.on("mouseover",i=>{C(i.data)})};return(0,t.jsxs)(c,{mt:0,children:[(0,t.jsx)(c,{id:"pie-chart",ref:s,height:"400px"}),(0,t.jsxs)(b,{gridTemplateColumns:"repeat(1,1fr)",gap:"2",children:[(0,t.jsx)(f,{display:"flex",alignItems:"center",justifyContent:"center",p:"2",variant:"filled",children:(0,t.jsx)(p,{as:"span",fontWeight:"bold",children:e==null?void 0:e.name})}),(0,t.jsxs)(b,{gridTemplateColumns:"repeat(2,1fr)",gap:"2",children:[(0,t.jsx)(f,{display:"flex",justifyContent:"center",p:"2",variant:"filled",children:(0,t.jsxs)(p,{as:"span",fontSize:"14px",fontWeight:"500",ml:"1rem",children:["Vistas: ",e==null?void 0:e.views]})}),(0,t.jsx)(f,{display:"flex",justifyContent:"center",p:"2",variant:"filled",children:(0,t.jsxs)(p,{as:"span",fontSize:"14px",fontWeight:"500",ml:"1rem",children:["Descargas: ",e==null?void 0:e.downloads]})}),(0,t.jsx)(f,{display:"flex",justifyContent:"center",p:"2",variant:"filled",children:(0,t.jsxs)(p,{as:"span",fontSize:"14px",fontWeight:"500",ml:"1rem",children:["Enlaces: ",e==null?void 0:e.outlinks]})}),(0,t.jsx)(f,{display:"flex",justifyContent:"center",p:"2",variant:"filled",children:(0,t.jsxs)(p,{as:"span",fontSize:"14px",fontWeight:"500",ml:"1rem",children:["Conversiones: ",e==null?void 0:e.conversions]})})]})]})]})};var n=l(h()),N=o.default.lazy(()=>import("./lrw-chunk-HT5VGV37.js")),M=({tabIndex:E,startDate:u})=>{let[e,C]=(0,o.useState)(),[s,m]=(0,o.useState)(!1),[r,i]=(0,o.useState)(!1),g=window[w],a=()=>D(void 0,null,function*(){m(!0);let k=P(g);try{let v=yield I(A,k,B,u||L,_,z);v.country&&C(v),m(!1)}catch(v){console.log("Error fetching data:",v),i(!0),m(!1)}});return(0,o.useEffect)(()=>{a()},[u]),(0,n.jsxs)(n.Fragment,{children:[s&&(0,n.jsx)(F,{}),!s&&!r&&e&&(0,n.jsx)(N,T({},e)),!s&&!r&&e&&(0,n.jsx)(W,{data:e,tabIndex:E}),r&&(0,n.jsx)(c,{children:"Error fetching data"})]})},$=M;export{$ as default};