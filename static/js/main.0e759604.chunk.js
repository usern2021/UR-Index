(this["webpackJsonpweb-uindex"]=this["webpackJsonpweb-uindex"]||[]).push([[0],{12:function(e,t,i){},13:function(e,t,i){},15:function(e,t,i){"use strict";i.r(t);var c=i(1),s=i.n(c),n=i(6),l=i.n(n),a=(i(12),i(13),i(3)),r=i(7),j=i(0),o=function(){var e=Object(c.useState)([{id:0,imp:"1",cit:"0",nath:"1",place:"2",type:"0",role:"first"}]),t=Object(r.a)(e,2),i=t[0],s=t[1],n=function(e,t,c){var n=Object(a.a)(i),l=n.findIndex((function(e){return e.id===t}));console.log(l,t);var r=n[parseInt(l)];console.log(r),r[c.toString()]=e.target.value,n.splice(l,1,r),s(n)},l=function(e,t,i,c,s,n){var l=parseFloat(e),a=parseInt(t),r=parseInt(i);"first"!==n&&"coress"!==n&&"last"!==n||(r=1);var j=1;return r<100?("first"!==n&&"coress"!==n&&"last"!==n||(j=1),"co"===n&&(j=parseInt(c))):("first"!==n&&"coress"!==n&&"last"!==n||(j=1),"co"===n&&(j=99)),function(e){var t=.1;switch(parseInt(e)){case 0:case 1:case 2:case 3:case 4:case 5:t=.2;break;case 10:case 11:case 12:case 13:case 14:case 15:case 16:default:t=.1}return t}(s)+function(e){return.1/(1+Math.log10(parseInt(e)))}(r)+function(e){return.2/(1+Math.log10(parseInt(e)))}(j)+function(e){return.2*e/(1.6+e)}(l)+function(e){return.3*e/(50+e)}(a)},o=i.map((function(e){var t=!1;return"first"!==e.role&&"coress"!==e.role&&"last"!==e.role||(t=!1),"co"===e.role&&(t=!0),Object(j.jsxs)("li",{children:[Object(j.jsx)("div",{className:"listitem listitem-imp",children:Object(j.jsx)("input",{value:e.imp,onChange:function(t){return n(t,e.id,"imp")}})}),Object(j.jsx)("div",{className:"listitem listitem-cit",children:Object(j.jsx)("input",{value:e.cit,onChange:function(t){return n(t,e.id,"cit")}})}),Object(j.jsx)("div",{className:"listitem listitem-nath",children:Object(j.jsx)("input",{value:e.nath,onChange:function(t){return n(t,e.id,"nath")}})}),Object(j.jsx)("div",{className:"listitem listitem-role",children:Object(j.jsxs)("select",{value:e.role,onChange:function(t){return n(t,e.id,"role")},children:[Object(j.jsx)("option",{value:"first",children:"1st author"}),Object(j.jsx)("option",{value:"coress",children:"Correspondence"}),Object(j.jsx)("option",{value:"co",children:"Co-author"}),Object(j.jsx)("option",{value:"last",children:"Last author"})]})}),Object(j.jsx)("div",{className:"listitem listitem-place",children:Object(j.jsx)("input",{value:e.place,onChange:function(t){return n(t,e.id,"place")},disabled:!t,type:"number",min:2})}),Object(j.jsx)("div",{className:"listitem listitem-type",children:Object(j.jsxs)("select",{value:e.type,onChange:function(t){return n(t,e.id,"type")},children:[Object(j.jsx)("option",{value:"0",children:"Original\u200c Article"}),Object(j.jsx)("option",{value:"1",children:"Review Article"}),Object(j.jsx)("option",{value:"2",children:"Book Chapter"}),Object(j.jsx)("option",{value:"3",children:"Book"}),Object(j.jsx)("option",{value:"4",children:"Data Paper"}),Object(j.jsx)("option",{value:"5",children:"Short Survey"}),Object(j.jsx)("option",{value:"11",children:"Letter"}),Object(j.jsx)("option",{value:"10",children:"Editorial"}),Object(j.jsx)("option",{value:"13",children:"Case Report"}),Object(j.jsx)("option",{value:"12",children:"Short Report"}),Object(j.jsx)("option",{value:"15",children:"Note"}),Object(j.jsx)("option",{value:"14",children:"Meta-analysis"}),Object(j.jsx)("option",{value:"16",children:"Conference Paper"})]})}),Object(j.jsx)("div",{className:"listitem listitem-tools",children:Object(j.jsx)("div",{className:"delete-item",onClick:function(){return function(e){var t=Object(a.a)(i).filter((function(t){return t.id!==e}));s(t)}(e.id)},children:"\xd7"})})]},e.id)}));return Object(j.jsxs)("div",{className:"content",children:[Object(j.jsxs)("div",{className:"list",children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("div",{className:"listitem listitem-imp listitem-header",children:"Impact Factor"}),Object(j.jsx)("div",{className:"listitem listitem-cit listitem-header",children:"Number Of Citation"}),Object(j.jsx)("div",{className:"listitem listitem-nath listitem-header",children:"Number Of Authors"}),Object(j.jsx)("div",{className:"listitem listitem-role listitem-header",children:"Role"}),Object(j.jsx)("div",{className:"listitem listitem-place listitem-header",children:"Place Of Author"}),Object(j.jsx)("div",{className:"listitem listitem-type listitem-header",children:"Article Type"}),Object(j.jsx)("div",{className:"listitem listitem-tools listitem-header"})]}),o,Object(j.jsx)("div",{className:"add-item",children:Object(j.jsx)("div",{className:"add-btn",onClick:function(){var e=Object(a.a)(i),t=0;e[e.length-1]&&(t=e[e.length-1].id+1);var c=[].concat(Object(a.a)(e),[{id:t,imp:"1",cit:"0",nath:"1",place:"2",type:"0",role:"first"}]);s(c)},children:"+"})})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{className:"calc",onClick:function(){var e=0,t=0;i.forEach((function(i){e+=l(i.imp,i.cit,i.nath,i.place,i.type,i.role),t+=1})),console.log(e);var c=e/t,s=e*c;document.getElementById("result").innerHTML=parseFloat(s),document.getElementById("mean").innerHTML=parseFloat(c)},children:"Calculate UR-Index"}),Object(j.jsx)("div",{className:"result",children:Object(j.jsxs)("span",{children:["Result: ",Object(j.jsx)("b",{id:"result"}),Object(j.jsx)("br",{}),"Mean : ",Object(j.jsx)("b",{id:"mean"})]})})]})},d=function(){return Object(j.jsxs)("div",{className:"startup",children:[Object(j.jsx)("div",{className:"startupLogo",children:Object(j.jsx)("span",{})}),Object(j.jsxs)("div",{className:"startupText",children:[Object(j.jsx)("span",{children:"U"}),Object(j.jsx)("span",{children:"R"}),Object(j.jsx)("span",{children:"-"}),Object(j.jsx)("span",{children:"I"}),Object(j.jsx)("span",{children:"n"}),Object(j.jsx)("span",{children:"d"}),Object(j.jsx)("span",{children:"e"}),Object(j.jsx)("span",{children:"x"}),Object(j.jsx)("span",{children:" "}),Object(j.jsx)("span",{children:"C"}),Object(j.jsx)("span",{children:"a"}),Object(j.jsx)("span",{children:"l"}),Object(j.jsx)("span",{children:"c"}),Object(j.jsx)("span",{children:"u"}),Object(j.jsx)("span",{children:"l"}),Object(j.jsx)("span",{children:"a"}),Object(j.jsx)("span",{children:"t"}),Object(j.jsx)("span",{children:"o"}),Object(j.jsx)("span",{children:"r"})]})]})},h=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{}),Object(j.jsx)(o,{})]})};var u=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(h,{})})},b=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,16)).then((function(t){var i=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;i(e),c(e),s(e),n(e),l(e)}))};l.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.0e759604.chunk.js.map