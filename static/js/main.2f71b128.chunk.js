(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),i=c(5),r=c.n(i),a=(c(13),c(3)),l=(c(14),c.p+"static/media/logo.d4deb895.png"),j=c(1),o=function(e){var t=e.setValue;return Object(j.jsx)("header",{children:Object(j.jsxs)("div",{className:"menu",children:[Object(j.jsxs)("div",{className:"logo",children:[Object(j.jsx)("img",{src:l,alt:"logo"}),Object(j.jsx)("div",{className:"logo-article",children:"statistic"})]}),Object(j.jsx)("div",{className:"search",children:Object(j.jsx)("input",{onChange:function(e){return t(e.target.value)},type:"text",placeholder:"Search..."})})]})})},d=function(e){var t=e.id,c=e.id_item,n=e.country,s=e.total,i=e.currentCountry,r=e.item;return Object(j.jsxs)("tr",{onClick:function(){i(r)},className:"item",children:[Object(j.jsx)("td",{className:"id-item",children:t}),Object(j.jsx)("td",{className:"country",children:n}),Object(j.jsx)("td",{className:"total",children:s})]},c)},u=(c(16),c(6)),b=c(7),h=c(8),O=function(e){var t=e.current,c=e.clearCurrent;return Object(j.jsx)(j.Fragment,{children:t?Object(j.jsx)("div",{className:"modal",children:Object(j.jsxs)("div",{className:"modal-info",children:[Object(j.jsx)("h3",{className:"name",children:t.Country}),Object(j.jsxs)("div",{className:"totalCon",children:[Object(j.jsxs)("div",{className:"icon",children:[Object(j.jsx)(u.a,{})," ",Object(j.jsx)("p",{children:"Total Confirmed:"})]}),Object(j.jsx)("p",{children:t.TotalConfirmed})]}),Object(j.jsxs)("div",{className:"totalDeahs",children:[Object(j.jsxs)("div",{className:"icon",children:[Object(j.jsx)(b.a,{})," ",Object(j.jsx)("p",{children:"Total Deaths:"})]}),Object(j.jsx)("p",{children:t.TotalDeaths})]}),Object(j.jsxs)("div",{className:"totalRec",children:[Object(j.jsxs)("div",{className:"icon",children:[Object(j.jsx)(h.a,{})," ",Object(j.jsx)("p",{children:"Total Recovered:"})]}),Object(j.jsx)("p",{children:t.TotalRecovered})]}),Object(j.jsx)("button",{onClick:c,children:"ok"})]})}):""})};c(17);var x=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(null),r=Object(a.a)(i,2),l=r[0],u=r[1],b=Object(n.useState)(""),h=Object(a.a)(b,2),x=h[0],m=h[1];Object(n.useEffect)((function(){f()}),[]),Object(n.useEffect)((function(){var e=document.querySelector("body");e.style.overflow=l?"hidden":"scroll"}),[l]);var f=function(){fetch("https://api.covid19api.com/summary").then((function(e){return e.json()})).then((function(e){s(e.Countries)}))},v=function(e){u(e)},p=c&&c.filter((function(e){return e.Country.toLowerCase().includes(x.toLowerCase())}));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o,{setValue:m}),l?Object(j.jsx)(O,{clearCurrent:function(){u("")},current:l}):"",Object(j.jsx)("div",{className:"table-info",children:Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"\u2116"}),Object(j.jsx)("th",{children:"Country"}),Object(j.jsx)("th",{children:"Total Confirmed"})]})}),Object(j.jsx)("tbody",{children:c?p.map((function(e,t){return Object(j.jsx)(d,{id:t+1,id_item:e.ID,modalInfo:e,total:e.TotalConfirmed,country:e.Country,currentCountry:v,current:l,item:e},e.ID)})):Object(j.jsx)("div",{children:"Loading..."})})]})})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),m()}],[[18,1,2]]]);
//# sourceMappingURL=main.2f71b128.chunk.js.map