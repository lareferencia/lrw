import{a as T}from"./lrw-chunk-F7OPYQTH.js";import{a as h}from"./lrw-chunk-6LD7LOUS.js";import{j as v,l as k,m}from"./lrw-chunk-J4SUMSNR.js";import{e as L,g as u,h as _,j as w,t as E}from"./lrw-chunk-4BK7C6F4.js";u();var x=L(_());u();var b=(n,a)=>{let l=[];return typeof a=="string"?(n.time.buckets.map(i=>{var f,p,S;let t=i.level.buckets.find(y=>y.key===a),o=((f=t==null?void 0:t.views)==null?void 0:f.value)||0,e=((p=t==null?void 0:t.downloads)==null?void 0:p.value)||0,c=((S=t==null?void 0:t.outlinks)==null?void 0:S.value)||0;l.push(o+e+c)}),l):(n.time.buckets.map(i=>{var e;let t=i.level.buckets.find(c=>c.key===a.scope),o=((e=t==null?void 0:t[a.event])==null?void 0:e.value)||0;l.push(o)}),l)};var D=L(w()),z=({data:n,scopeLabels:a,eventLabels:l,activeScope:i})=>{let t=(0,x.useRef)(null);return(0,x.useEffect)(()=>{let o=T(t.current);if(t.current){let e=[];i==="ALL"?v.map(r=>{a[r]!=="Eventos totales"&&e.push({name:`${a[r]} - Eventos totales`,type:"bar",stack:"total",itemStyle:{color:h(r,"ALL")},data:b(n,r)})}):k.map(s=>({scope:i,event:s})).forEach(s=>{e.push({name:`${a[s.scope]} - ${l[s.event]}`,type:`${s.event===m.C?"line":"bar"}`,yAxisIndex:`${s.event===m.C?1:0}`,stack:`${s.event===m.C?"":"total"}`,itemStyle:{color:h(s.scope,s.event)},data:b(n,s)})});let c=n.time.buckets.map(r=>r.key_as_string.toString().slice(0,7)),f=Math.max(...e[0].data),p=Math.max(...e[1].data),S=Math.max(...e[2].data),y=f+p+S,d={tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{show:!1},grid:{left:"2%",top:"0%",right:"2%",bottom:"20%",containLabel:!1},yAxis:[{type:"value",max:y,name:"Total Access",nameTextStyle:{fontWeight:"bold",fontSize:13},show:!1},{type:"value",max:y,name:m.C,nameTextStyle:{fontWeight:"bold",fontSize:13},show:!1,alignTicks:!1,axisLine:{show:!0,lineStyle:{color:"#6e9ef1"}},axisLabel:{formatter:"{value}"}}],xAxis:{type:"category",data:c},series:e},g=()=>{o&&o.resize()};return window.addEventListener("resize",g),d&&o.setOption(d),()=>{window.removeEventListener("resize",g),o.dispose()}}},[i]),(0,D.jsx)(E,{id:"bar-chart",ref:t,height:"180px"})},U=z;export{U as default};
