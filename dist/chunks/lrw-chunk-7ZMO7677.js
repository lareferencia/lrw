import{a as y}from"./lrw-chunk-F7OPYQTH.js";import{a as m}from"./lrw-chunk-6LD7LOUS.js";import{m as p}from"./lrw-chunk-J4SUMSNR.js";import{e as v,g as o,h as D,j as x,r as d,t as a}from"./lrw-chunk-4BK7C6F4.js";o();var c=v(D());o();var S=(e,t)=>{for(let r in e)if(e.hasOwnProperty(r)&&e[r]===t)return r;return"ALL"};o();o();var w=(e,t)=>[{value:e.downloads.value,name:t.downloads,itemStyle:{color:m(e.key,p.D)}},{value:e.views.value,name:t.views,itemStyle:{color:m(e.key,p.V)}},{value:e.outlinks.value,name:t.outlinks,itemStyle:{color:m(e.key,p.O)}}];o();var T=e=>e.level.buckets.reduce((t,r)=>t+r.downloads.value+r.views.value+r.outlinks.value,0);var n=v(x()),k=({data:e,scopeLabels:t,eventLabels:r,setActiveScope:h,tabIndex:b})=>{let u=(0,c.useRef)(null);(0,c.useEffect)(()=>{let s=y(u.current);if(u.current){let i=[];e.level.buckets.map((E,g)=>{i.push({name:t[E.key],type:"pie",animation:!1,selectedMode:!1,radius:[`${43+18*g}%`,`${58+18*g}%`],label:{show:!1},data:w(E,r)})});let l={tooltip:{trigger:"item"},legend:{show:!1},grid:{containLabel:!1},series:i},L=()=>{s&&s.resize()};return window.addEventListener("resize",L),l&&s.setOption(l),B(s),()=>{window.removeEventListener("resize",L),s.dispose()}}},[b]);let B=s=>{s.on("mouseover",({seriesName:i})=>{let l=S(t,i);h(l)}),s.on("mouseout",()=>{h("ALL")})};return(0,n.jsxs)(a,{position:"relative",height:"300px",children:[(0,n.jsx)(a,{position:"absolute",top:"50%",left:"50%",transform:"translate(-45%, -50%)",children:(0,n.jsxs)(a,{display:"flex",flexDir:"column",children:[(0,n.jsx)(d,{as:"span",fontWeight:"bold",textAlign:"center",children:"Total"}),(0,n.jsx)(d,{as:"span",fontWeight:"bold",textAlign:"center",children:T(e)})]})}),(0,n.jsx)(a,{id:"ring-chart",ref:u,height:"100%"})]})},U=k;export{U as default};
