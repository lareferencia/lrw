import{b as z,c as A}from"./lrw-chunk-Q352CUHL.js";import{a as F}from"./lrw-chunk-N3ITIQMS.js";import{a as R}from"./lrw-chunk-7XEW52Y5.js";import{b as P}from"./lrw-chunk-6Y63XLFP.js";import{c as U}from"./lrw-chunk-MXCVHLNP.js";import{a as B,e as T,f as L,g as _,h as I}from"./lrw-chunk-ATRLTEVT.js";import{a as D,e as d,f as S,g as b,h as w,k as v,r as m,s as x,t as f,v as u}from"./lrw-chunk-T2H7O5GR.js";b();var n=d(w());b();var p=d(w());var t=d(v()),W=({data:h,tabIndex:C})=>{let[e,g]=(0,p.useState)(),s=(0,p.useRef)(null);(0,p.useEffect)(()=>{let r=R(s.current);if(s.current){let i=U(h).map(a=>({name:a.name,value:a.downloads+a.views+a.outlinks,views:a.views,downloads:a.downloads,outlinks:a.outlinks,conversions:a.conversions}));g(i[0]);let E={tooltip:{trigger:"item"},series:[{name:"Eventos totales del pa\xEDs",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!0,itemStyle:{borderRadius:10},label:{show:!0,position:"outer",alignTo:"edge",edgeDistance:0,width:"100",overflow:"truncate",ellipsis:"...",fontWeight:"bold",color:"#395182"},emphasis:{label:{show:!0,fontSize:14,fontWeight:"bold"}},labelLine:{show:!0},data:i}]},l=()=>{r&&r.resize()};return window.addEventListener("resize",l),E&&r.setOption(E),c(r),()=>{window.removeEventListener("resize",l),r.dispose()}}},[C]);let c=r=>{r.on("mouseover",i=>{g(i.data)})};return(0,t.jsxs)(u,{mt:0,children:[(0,t.jsx)(u,{id:"pie-chart",ref:s,height:"400px"}),(0,t.jsxs)(x,{gridTemplateColumns:"repeat(1,1fr)",gap:"2",children:[(0,t.jsx)(m,{display:"flex",alignItems:"center",justifyContent:"center",p:"2",variant:"filled",children:(0,t.jsx)(f,{as:"span",fontWeight:"bold",children:e==null?void 0:e.name})}),(0,t.jsxs)(x,{gridTemplateColumns:"repeat(2,1fr)",gap:"2",children:[(0,t.jsx)(m,{display:"flex",justifyContent:"center",p:"2",variant:"filled",children:(0,t.jsxs)(f,{as:"span",fontSize:"12px",fontWeight:"semibold",ml:"1rem",children:["Vistas: ",e==null?void 0:e.views]})}),(0,t.jsx)(m,{display:"flex",justifyContent:"center",p:"2",variant:"filled",children:(0,t.jsxs)(f,{as:"span",fontSize:"12px",fontWeight:"semibold",ml:"1rem",children:["Descargas: ",e==null?void 0:e.downloads]})}),(0,t.jsx)(m,{display:"flex",justifyContent:"center",p:"2",variant:"filled",children:(0,t.jsxs)(f,{as:"span",fontSize:"12px",fontWeight:"semibold",ml:"1rem",children:["Enlaces: ",e==null?void 0:e.outlinks]})}),(0,t.jsx)(m,{display:"flex",justifyContent:"center",p:"2",variant:"filled",children:(0,t.jsxs)(f,{as:"span",fontSize:"12px",fontWeight:"semibold",ml:"1rem",children:["Conversiones: ",e==null?void 0:e.conversions]})})]})]})]})};var o=d(v()),M=n.default.lazy(()=>import("./lrw-chunk-GVNVSGIA.js")),O=({tabIndex:h,startDate:C})=>{let[e,g]=(0,n.useState)(),[s,c]=(0,n.useState)(!1),[r,i]=(0,n.useState)(!1),l=window[B],a=l&&l.parameters.repository_source||T,k=()=>S(void 0,null,function*(){c(!0);let N=P(l);try{let y=yield A(z,N,a||T,C||L,_,I);y.country&&g(y),c(!1)}catch(y){console.log("Error fetching data:",y),i(!0),c(!1)}});return(0,n.useEffect)(()=>{k()},[C]),(0,o.jsxs)(o.Fragment,{children:[s&&(0,o.jsx)(F,{}),!s&&!r&&e&&(0,o.jsx)(M,D({},e)),!s&&!r&&e&&(0,o.jsx)(W,{data:e,tabIndex:h}),r&&(0,o.jsx)(u,{children:"Error fetching data"})]})},ee=O;export{ee as default};
