import{a as C,b as f,c as u}from"./lrw-chunk-TK4XOMQF.js";import"./lrw-chunk-J4SUMSNR.js";import{e as a,g as l,h as y,j as p,p as s,q as d,r as n,t as m}from"./lrw-chunk-4BK7C6F4.js";l();var i=a(y()),c=a(C());var e=a(p());c.default.registerLocale(f);var T=x=>{let r=u(x),w=(0,i.useMemo)(()=>r.reduce((t,o)=>t+o.downloads+o.views+o.outlinks,0),[r]),v=(0,i.useMemo)(()=>r.map(t=>({country:t.name,total:t.downloads+t.views+t.outlinks,conversions:t.downloads})).sort((t,o)=>o.total-t.total).slice(0,3),[r]);return(0,e.jsxs)(m,{children:[(0,e.jsx)(s,{mb:"3",px:"4",p:"3",variant:"filled",children:(0,e.jsx)(n,{as:"span",fontWeight:"bold",fontSize:"1rem",textAlign:"center",children:`Eventos totales: ${w}`})}),(0,e.jsx)(d,{templateColumns:"repeat(3, 1fr)",gap:3,children:v.map((t,o)=>(0,e.jsxs)(s,{px:"4",py:"2",variant:"filled",display:"grid",placeContent:"center",children:[(0,e.jsx)(n,{as:"span",fontWeight:"700",fontSize:"0.8rem",overflow:"hidden",whiteSpace:"nowrap",isTruncated:!0,children:t.country}),(0,e.jsx)(n,{as:"span",fontWeight:"500",fontSize:"12px",children:`Total: ${t.total}`})]},o))})]})},k=T;export{k as default};