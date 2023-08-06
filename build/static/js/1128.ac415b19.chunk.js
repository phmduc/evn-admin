"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[1128,9773],{85213:function(t,e,o){o.r(e);var a=o(1413),n=o(45987),r=o(93393),i=o(47313),l=o(78142),s=o(46417),c=["type","height","width","scales","labels","id","datasets","tooltip","layout","legend","elements","option"];function d(t){var e=t.type,o=t.height,d=t.width,u=t.scales,p=t.labels,h=t.id,f=t.datasets,b=t.tooltip,y=t.layout,g=t.legend,m=t.elements,x=t.option,v=(0,n.Z)(t,c);return(0,i.useEffect)((function(){var t=null,o=!1;return o||(t=new r.kL(document.getElementById(h).getContext("2d"),{type:e,data:{labels:p,datasets:f},options:(0,a.Z)({responsive:!0,maintainAspectRatio:!0,layout:y,hover:{mode:"index",intersect:!1},plugins:{legend:g,tooltip:(0,a.Z)({yAlign:"bottom",xAlign:"right",mode:"index",intersect:!1,backgroundColor:"#ffffff",boxShadow:"0 8px 5px #ADB5D915",position:"nearest",titleColor:"#ADB5D9",color:"#ADB5D9",titleFontSize:12,titleSpacing:10,bodyColor:"#525768",bodyFontSize:11,bodyFontStyle:"normal",bodyFontFamily:"'Jost', sans-serif",borderColor:"#F1F2F6",usePointStyle:!0,borderWidth:1,bodySpacing:10,padding:{x:10,y:8},z:999999,enabled:!1,external:l.customTooltips},b)},elements:m,scales:u},x)})),function(){t.destroy(),o=!0}}),[e,f,p,h,y,g,m,u,b,x]),(0,s.jsx)("canvas",(0,a.Z)({width:d,height:o,id:h},v))}r.kL.register(r.qi,r.jn,r.ZL,r.od,r.vn,r.N0,r.jI,r.ST,r.tt,r.CV,r.Xi,r.ho,r.uw,r.f$,r.WV,r.l7,r.FB,r.RM,r.WY,r.Gu,r.De,r.Dx,r.u,r.DK),d.defaultProps={height:479,type:"line",width:null,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],borderColor:"#001737",borderWidth:1,fill:!1},{data:[10,40,30,40,60,55,45,35,30,20,15,20],borderColor:"#1ce1ac",borderWidth:1,fill:!1}],layout:{},legend:{display:!1,labels:{display:!1,position:"center"}},id:"myChart",elements:{line:{tension:.6,borderCapStyle:"round",borderJoinStyle:"round",capBezierPoints:!0},point:{radius:0,z:5}},scales:{y:{beginAtZero:!0,grid:{color:"#485e9029",borderDash:[3,3],zeroLineColor:"#485e9029",zeroLineWidth:1},ticks:{beginAtZero:!0,fontSize:14,fontFamily:"Jost",color:"#8C90A4",max:80,stepStartValue:5,stepSize:20,padding:10,callback:function(t){return"".concat(t,"k")}}},x:{grid:{display:!1,drawBorder:!1,zeroLineWidth:0,color:"transparent",z:1},ticks:{beginAtZero:!0,fontSize:14,fontFamily:"Jost",color:"#8C90A4"}}},tooltip:{callbacks:{label:function(t){var e=t.dataset.label,o=t.formattedValue;return"  ".concat(o," ").concat(e)},labelColor:function(t){return{backgroundColor:t.dataset.backgroundColor,borderColor:"transparent"}}}},option:{}},e.default=d},78142:function(t,e,o){o.r(e),o.d(e,{chartLinearGradient:function(){return n},customTooltips:function(){return r},textRefactor:function(){return a}});var a=function(t,e){return"".concat(t.split(" ").slice(0,e).join(" "),"...")},n=function(t,e,o){var a=t.getContext("2d").createLinearGradient(0,0,0,e);return a.addColorStop(0,"".concat(o.start)),a.addColorStop(1,"".concat(o.end)),a},r=function(t){var e=document.querySelector(".chartjs-tooltip"),o=this._chart.canvas.closest(".ninjadash-chart-container");if(o&&!o.contains(e)&&((e=document.createElement("div")).className="chartjs-tooltip",e.innerHTML="<table></table>",document.querySelectorAll(".ninjadash-chart-container").forEach((function(t){t.contains(e)&&e.remove()})),o.appendChild(e)),null!==e){var a=t.tooltip;if(0===a.opacity)return void(e.style.opacity=0);if(e.classList.remove("above","below","no-transform"),a.yAlign?e.classList.add(a.yAlign):e.classList.add("no-transform"),a.body){var n=a.title||[],r=a.body.map((function(t){return t.lines})),i="<thead>";n.forEach((function(t){i+="<div class='tooltip-title'>".concat(t,"</div>")})),i+="</thead><tbody>",r.forEach((function(t,e){var o=a.labelColors[e],n="background:".concat(o.backgroundColor);n+="; border-color:".concat(o.borderColor),n+="; border-width: 2px";var r='<span class="chartjs-tooltip-key" style="'.concat(n+="; border-radius: 30px",'"></span>');i+="<tr><td>".concat(r).concat(t,"</td></tr>")})),i+="</tbody>",e.querySelector("table").innerHTML=i}var l=this._chart.canvas.offsetTop,s=this._chart.canvas.offsetLeft,c=document.querySelector(".chartjs-tooltip").clientHeight;e.style.opacity=1,e.style.left="".concat(s+a.caretX,"px"),e.style.top="".concat(l+a.caretY-(a.caretY>10?c>100?c+5:c+15:70),"px"),e.style.fontFamily=a.options.bodyFontFamily,e.style.fontSize="".concat(a.options.bodyFontSize,"px"),e.style.fontStyle=a.options.bodyFontStyle,e.style.padding="".concat(a.yPadding,"px ").concat(a.xPadding,"px")}}},31128:function(t,e,o){o.r(e);var a=o(27554),n=o(36974),r=o(68197),i=o(59624),l=o(47313),s=o(54987),c=o(85213),d=o(48949),u=o(83154),p=o(46417),h=l.memo((function(){return(0,p.jsx)(r.Z,{gutter:25,children:u.map((function(t,e){return(0,p.jsx)(i.Z,{xs:24,children:(0,p.jsx)(d.TotalChartStyleWrap,{children:(0,p.jsx)("div",{className:"ninjaDash-total-chart ninjadash-total-earning",children:(0,p.jsx)(d.ChartContainer,{children:(0,p.jsx)(s.Cards,{title:(0,p.jsxs)("div",{className:"ninjadash-card-title-wrap",children:[(0,p.jsxs)("span",{className:"ninjadash-card-title-text",children:["Total ",t.title,(0,p.jsxs)("span",{className:"ninjadash-card-subtitile",children:["(Last)",t.period]})]}),(0,p.jsxs)("span",{className:"ninjadash-card-title-extra-text",children:[(0,p.jsx)("span",{className:"ninjadash-total-chart-total",children:"$8550"}),(0,p.jsxs)("span",{className:"down"===t.status?"ninjadash-total-chart-status ninjadash-total-chart-status-down":"ninjadash-total-chart-status ninjadash-total-chart-status-growth",children:["growth"===t.status?(0,p.jsx)(n.Z,{}):(0,p.jsx)(a.Z,{}),"25.36%"]})]})]}),children:(0,p.jsx)("div",{className:"ninjadash-chart-container",children:(0,p.jsx)(c.default,{type:"line",id:"totalEarning",labels:t.labels,datasets:[{data:t.data,borderColor:t.lineColor,borderWidth:3,fill:!1,pointBackgroundColor:"#8231D3",pointBorderColor:"#fff",pointHoverBorderColor:"#fff",pointBorderWidth:0,pointHoverBorderWidth:0,pointHoverRadius:0,z:5}],elements:{line:{tension:.3,borderCapStyle:"round",borderJoinStyle:"round",capBezierPoints:!0},point:{radius:0,z:5}},height:window.innerWidth<=575?280:200,tooltip:{custom:function(t){t&&(t.displayColors=!1)},callbacks:{title:function(t){var e=t[0].label;return"".concat(e)},label:function(e){var o=e.formattedValue;return"".concat(t.title,": $").concat(o,"k")},labelColor:function(){return{backgroundColor:t.lineColor,borderColor:"transparent"}}}}})})})})})})},e)}))})}));e.default=h},27554:function(t,e,o){var a=o(1413),n=o(45987),r=o(61962),i=o(75192),l=o.n(i),s=["color","size"],c=function(t){var e=t.color,o=t.size,i=(0,n.Z)(t,s);return r.createElement("svg",(0,a.Z)({xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:e},i),r.createElement("path",{d:"M17.71,11.29a1,1,0,0,0-1.42,0L13,14.59V7a1,1,0,0,0-2,0v7.59l-3.29-3.3a1,1,0,0,0-1.42,1.42l5,5a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l5-5A1,1,0,0,0,17.71,11.29Z"}))};c.propTypes={color:l().string,size:l().oneOfType([l().string,l().number])},c.defaultProps={color:"currentColor",size:"24"},e.Z=c},36974:function(t,e,o){var a=o(1413),n=o(45987),r=o(61962),i=o(75192),l=o.n(i),s=["color","size"],c=function(t){var e=t.color,o=t.size,i=(0,n.Z)(t,s);return r.createElement("svg",(0,a.Z)({xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:e},i),r.createElement("path",{d:"M17.71,11.29l-5-5a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-5,5a1,1,0,0,0,1.42,1.42L11,9.41V17a1,1,0,0,0,2,0V9.41l3.29,3.3a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,11.29Z"}))};c.propTypes={color:l().string,size:l().oneOfType([l().string,l().number])},c.defaultProps={color:"currentColor",size:"24"},e.Z=c},83154:function(t){t.exports=JSON.parse('[{"title":"Earning","labels":["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct"],"data":[20,38,30,45,35,60,55,70,60,80],"lineColor":"#8231D3","period":"10 Months","total":"8,550","status":"growth","statusRate":"25.36"}]')}}]);