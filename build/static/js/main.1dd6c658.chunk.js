(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{28:function(t,e,c){},33:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),r=c(10),o=c.n(r),i=c(3),s=c(17),l=(c(28),c(6)),j=c.n(l),b=c(0);var u=function(t){var e=t.title,c=t.children;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("section",{className:j.a.decor,children:[Object(b.jsx)("div",{className:j.a.leftDecor}),Object(b.jsx)("div",{className:j.a.rightDecor}),Object(b.jsx)("div",{className:j.a.circleDecor}),Object(b.jsxs)("div",{className:j.a.innerDecor,children:[Object(b.jsx)("h3",{className:j.a.titleDecor,children:e}),c]})]})})},O=c(16),d=c(4),f=c(35),h={ADD:Object(d.b)("contacts/add",(function(t,e){return{payload:{id:Object(f.a)(),name:t,tel:e}}})),DELETE:Object(d.b)("contacts/delete"),FILTER:Object(d.b)("contacts/filter"),UNIQNAME:Object(d.b)("contacts/uniqName")},m=function(t){return t.contacts.items},p=function(t){return t.contacts.items.filter((function(e){return e.name.toLowerCase().includes(t.contacts.filter.toLowerCase())}))},x=function(t){return t.contacts.filter};var _=function(){var t=Object(n.useState)(""),e=Object(O.a)(t,2),c=e[0],a=e[1],r=Object(n.useState)(""),o=Object(O.a)(r,2),s=o[0],l=o[1],j=Object(i.c)(m),u=Object(i.b)(),d=function(){a(""),l("")};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),function(t){return j.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))?(alert("".concat(t," is already in contacts")),d(),!1):t&&s?u(h.UNIQNAME(t)):(alert("Empty field"),!1)}(c)){var e=function(t){var e=t.split("");return"+38 (".concat(e[0]).concat(e[1]).concat(e[2],") ").concat(e[3]).concat(e[4]).concat(e[5],"-").concat(e[6]).concat(e[7],"-").concat(e[8]).concat(e[9])}(s);!function(t,e){u(h.ADD(t,e))}(c,e),d()}},autoComplete:"off",children:[Object(b.jsx)("input",{type:"text",name:"name",value:c,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",onChange:function(t){a(t.target.value)}}),Object(b.jsx)("input",{type:"tel",name:"tel",value:s,pattern:"[0-9]{10}",placeholder:"067 123 45 67",minLength:"10",maxLength:"10",onChange:function(t){l(t.target.value)}}),Object(b.jsx)("input",{type:"submit",value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})})},D=c(7),v=c.n(D);var C=function(){var t=Object(i.c)(p),e=Object(i.b)();return Object(b.jsxs)(b.Fragment,{children:[t.length<1&&Object(b.jsx)("p",{className:v.a.text,children:"\u041d\u0435\u0442 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432"}),Object(b.jsx)("ul",{className:v.a.contactsList,children:t.length>0&&t.map((function(t){var c=t.id,n=t.name,a=t.tel;return Object(b.jsxs)("li",{className:v.a.contact,children:[Object(b.jsx)("span",{className:v.a.name,children:n}),Object(b.jsx)("span",{className:v.a.phone,children:Object(b.jsx)("a",{href:"tel:+".concat(a.toString().replace(/[^\d;]/g,"")),children:a})}),Object(b.jsx)("button",{className:v.a.btnDeleteContact,type:"button",onClick:function(){return function(t){return e(h.DELETE(t))}(c)},children:"x"})]},c)}))})]})};var g=function(){var t=Object(i.c)(x),e=Object(i.b)();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("input",{type:"text",name:"filter",value:t,placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0438\u043c\u0435\u043d\u0438 ...",onChange:function(t){return e(h.FILTER(t.target.value))},autoComplete:"off"})})};var L,N=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u,{title:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430\u044f \u043a\u043d\u0438\u0433\u0430",children:Object(b.jsx)(_,{})}),Object(b.jsxs)(u,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432",children:[Object(b.jsx)(g,{}),Object(b.jsx)(C,{})]})]})},E=c(12),y=c(9),w=c(2),A=Object(d.c)([],(L={},Object(y.a)(L,h.ADD,(function(t,e){var c=e.payload;return[].concat(Object(E.a)(t),[c])})),Object(y.a)(L,h.DELETE,(function(t,e){var c=e.payload;return t.filter((function(t){return t.id!==c}))})),Object(y.a)(L,h.UNIQNAME,(function(t){return t})),L)),T=Object(d.c)("",Object(y.a)({},h.FILTER,(function(t,e){return e.payload}))),k=Object(w.b)({items:A,filter:T}),F=c(18),I=c.n(F),S=c(5),M=c(19),z=c.n(M),Q=[].concat(Object(E.a)(Object(d.d)({serializableCheck:{ignoredActions:[S.a,S.f,S.b,S.c,S.d,S.e]}})),[I.a]),R={key:"contacts",storage:z.a,blacklist:["filter","_persist"]},U=Object(d.a)({reducer:{contacts:Object(S.g)(R,k)},devTools:!1,middleware:Q}),B={store:U,persistor:Object(S.h)(U)};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(i.a,{store:B.store,children:Object(b.jsx)(s.a,{loading:null,persistor:B.persistor,children:Object(b.jsx)(N,{})})})}),document.getElementById("root"))},6:function(t,e,c){t.exports={decor:"DecorContainer_decor__38Tnb",leftDecor:"DecorContainer_leftDecor__EnyAy",rightDecor:"DecorContainer_rightDecor__1uL4z",circleDecor:"DecorContainer_circleDecor__7tz4-",innerDecor:"DecorContainer_innerDecor__2j7Ie",titleDecor:"DecorContainer_titleDecor__SYnVL"}},7:function(t,e,c){t.exports={text:"ContactsList_text__2Ch36",contactsList:"ContactsList_contactsList__p7rMB",contact:"ContactsList_contact__1_OCA",name:"ContactsList_name__3hPY8",phone:"ContactsList_phone__2bmT7",btnDeleteContact:"ContactsList_btnDeleteContact__2uwXb"}}},[[33,1,2]]]);
//# sourceMappingURL=main.1dd6c658.chunk.js.map