import{a as x}from"./lrw-chunk-C5GMONBA.js";import{e as l,g as f,h as C,j as v,q as u,r as d,s as i,t as g}from"./lrw-chunk-4BK7C6F4.js";f();var L=l(C());f();var S=l(C()),t=l(v()),k=({data:o,scopeLabels:a,eventLabels:r,activeScope:n})=>{let[m,p]=(0,S.useState)(o.level.buckets.filter(e=>e.key===n));return(0,S.useEffect)(()=>{let e=[{key:"ALL",doc_count:0,views:{value:o.views.value},outlinks:{value:o.outlinks.value},downloads:{value:o.downloads.value},conversions:{value:o.conversions.value}}],y=o.level.buckets.filter(c=>c.key===n);p(n==="ALL"?e:y)},[n]),(0,t.jsx)(u,{templateColumns:"repeat(12, 1fr)",children:m.map((e,y)=>(0,t.jsx)(i,{colSpan:12,children:(0,t.jsxs)(u,{templateColumns:"repeat(12,1fr)",mt:"1rem",children:[(0,t.jsxs)(i,{colSpan:5,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:"1rem",fontWeight:"bold",borderRadius:"6px 0px 0px 0px",bgColor:x(e.key,e.key,"filtered"),children:[(0,t.jsx)(d,{as:"span",fontSize:"12px",children:a[e.key].charAt(0).toUpperCase()+a[e.key].slice(1)}),(0,t.jsx)(d,{fontSize:"12px",children:(e.downloads.value+e.views.value+e.outlinks.value).toLocaleString()})]}),(0,t.jsx)(i,{colSpan:7,children:(0,t.jsx)(u,{templateColumns:"repeat(12,1fr)",templateRows:"repeat(3,1fr)",children:["views","downloads","outlinks"].map((c,b)=>(0,t.jsx)(i,{fontWeight:"bold",fontSize:"12px",display:"flex",padding:"0.3rem",alignItems:"center",justifyContent:"center",bgColor:x(e.key,c,"filtered"),borderRadius:b===0?"0px 6px 0px 0px":"0px",colSpan:12,rowSpan:1,children:(0,t.jsx)(g,{children:(0,t.jsx)(d,{as:"span",children:`${r[c]}: ${e[c].value}`})})},b))})}),(0,t.jsx)(i,{colSpan:12,display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold",fontSize:"12px",padding:"0.3rem",borderRadius:"0px 0px 6px 6px",bgColor:x(e.key,"conversions","filtered"),children:(0,t.jsx)(d,{as:"span",textAlign:"center",children:`${r.conversions}: ${e.conversions.value}`})})]})},y))})};var s=l(v()),h=L.default.lazy(()=>import("./lrw-chunk-NZWZFSAO.js")),w=L.default.lazy(()=>import("./lrw-chunk-XRFHAQM5.js")),G=({data:o,scopeLabels:a,eventLabels:r,tabIndex:n,activeScope:m,setActiveScope:p})=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h,{data:o,scopeLabels:a,eventLabels:r,setActiveScope:p,tabIndex:n}),(0,s.jsx)(w,{data:o,scopeLabels:a,eventLabels:r,activeScope:m,setActiveScope:p}),(0,s.jsx)(k,{data:o,scopeLabels:a,eventLabels:r,activeScope:m})]}),E=G;export{E as default};
