(this.webpackJsonpcrochet=this.webpackJsonpcrochet||[]).push([[0],{256:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(84),o=n.n(l),c=n(7),s=n(15),u=function(e,t){for(var n={rows:[]},r=0;r<e;r++){for(var a={cells:[]},l=0;l<t;l++){a.cells.push({color:"white"})}n.rows.push(a)}return n},m=function(e,t){var n=t.rows;return n.forEach((function(t){return t.cells[e]={color:"white"}})),{rows:n}},i=function(e,t){var n=t;return n.rows[e].cells.forEach((function(e){return e.color="white"})),n},w={currentColor:"red",xSym:!0,ySym:!0,numberColumns:10,numberRows:10,pattern:u(10,10)},p=function(e){var t=e.appState,n=e.rowIndex,r=e.cell,l=e.cellIndex,o=(e.pattern,Object(s.a)(t,2)),u=o[0],m=o[1],i=function(){var e=u.pattern.rows,t=u.currentColor;if(e[n].cells[l].color=t,u.xSym&&!u.ySym){var r=e[n].cells.length-1-l;e[n].cells[r].color=t}else if(u.ySym&&!u.xSym){e[e.length-1-n].cells[l].color=t}else if(u.xSym&&u.ySym){var a=e.length-1-n,o=e[n].cells.length-1-l;e[n].cells[o].color=t,e[a].cells[l].color=t,e[a].cells[o].color=t}m(Object(c.a)({},u,{pattern:{rows:e}})),console.log(u)};return a.a.createElement("div",{className:"h2 w2 ba",style:{backgroundColor:r.color},onMouseOver:function(e){1===e.buttons&&i()},onMouseDown:i})},f=function(e){var t=e.state,n=e.cells,r=e.pattern,l=e.rowIndex;return a.a.createElement("div",{className:"flex"},n.map((function(e,n){return a.a.createElement(p,{appState:t,cell:e,rowIndex:l,cellIndex:n,pattern:r})})))},v=function(e){var t=e.pattern,n=e.state,r=Object(s.a)(n,2),l=r[0],o=r[1];return a.a.createElement("div",{className:"no-select"},a.a.createElement("div",{className:"flex"},a.a.createElement("button",{className:"f7 w2",onClick:function(){return o(Object(c.a)({},l,{pattern:u(l.numberRows,l.numberColumns)}))}}," x all "),t.rows[0].cells.map((function(e,t){return a.a.createElement("div",null,a.a.createElement("button",{className:"h2 w2 ma0 pa0",onClick:function(){return o(Object(c.a)({},l,{pattern:m(t,l.pattern)}))}}," x "))}))),t.rows.map((function(e,r){return a.a.createElement("div",{className:"flex"},a.a.createElement("button",{className:"w2",onClick:function(){return o(Object(c.a)({},l,{pattern:i(r,l.pattern)}))}}," x "),a.a.createElement(f,{state:n,cells:e.cells,rowIndex:r,pattern:t}))})))},h=n(85),b=function(){var e=Object(r.useState)(w),t=Object(s.a)(e,2),n=t[0],l=t[1];return a.a.createElement("div",{className:"app"},a.a.createElement("div",{className:"flex no-select"},a.a.createElement("div",null,a.a.createElement(h.CompactPicker,{color:n.currentColor,onChange:function(e){return l(Object(c.a)({},n,{currentColor:e.hex}))}})),a.a.createElement("div",null,a.a.createElement("div",{className:"tc h2 no-select",onClick:function(){return l(Object(c.a)({},n,{xSym:!n.xSym}))},style:{backgroundColor:"".concat(n.xSym?"lightgreen":"")}}," X Symmetry "),a.a.createElement("div",{className:"tc h2 no-select",onClick:function(){return l(Object(c.a)({},n,{ySym:!n.ySym}))},style:{backgroundColor:"".concat(n.ySym?"lightgreen":"")}}," Y Symmetry "),a.a.createElement("div",{className:"flex flex-column w4"},a.a.createElement("div",null,"Columns: "),a.a.createElement("input",{value:n.numberColumns,className:"w3 ml1",min:"2",type:"number",onChange:function(e){var t=Number.parseInt(e.target.value),r=function(e,t){for(var n={rows:[]},r=0;r<t.rows.length;r++){for(var a={cells:[]},l=0;l<e;l++){var o=void 0;o=l<t.rows[r].cells.length?t.rows[r].cells[l]:{color:"white"},a.cells.push(o)}n.rows.push(a)}return n}(t,n.pattern);l(Object(c.a)({},n,{pattern:r,numberColumns:t}))}})),a.a.createElement("div",null,"Rows: "),a.a.createElement("input",{value:n.numberRows,className:"w3 ml1",min:"2",type:"number",onChange:function(e){var t=Number.parseInt(e.target.value),r=function(e,t){for(var n={rows:[]},r=0;r<e;r++){var a=void 0;if(r<t.rows.length)a=t.rows[r];else{a={cells:[]};for(var l=0;l<t.rows[0].cells.length;l++){a.cells.push({color:"white"})}}n.rows.push(a)}return n}(t,n.pattern);l(Object(c.a)({},n,{pattern:r,numberRows:t}))}}))),a.a.createElement(v,{state:[n,l],pattern:n.pattern}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t,n){e.exports=n(256)}},[[86,1,2]]]);
//# sourceMappingURL=main.3f072038.chunk.js.map