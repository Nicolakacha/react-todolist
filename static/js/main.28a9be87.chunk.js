(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{22:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var r=t(1),o=t(0),i=t(12),c=t.n(i),a=t(3),u=(t(22),t(2));function d(){var n=Object(a.a)(["\n  background: #255E69;\n  color: whitesmoke;\n"]);return d=function(){return n},n}function l(){var n=Object(a.a)(["\n  margin: 5px 0 0 10px;\n  transition: all 0.1s linear;\n"]);return l=function(){return n},n}function s(){var n=Object(a.a)([""]);return s=function(){return n},n}function b(){var n=Object(a.a)(["\n  color: ",";\n  font-size: 16px;\n  word-break: break-word;\n  width: 68%;\n  "," {\n    font-size: 20px;\n  }\n\n  "," {\n    font-size: 22px;\n  }\n\n  ","\n"]);return b=function(){return n},n}function f(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 20px;\n  margin-top: 20px;\n  word-break: break-word;\n  width: 95%;\n  border-bottom: 0.5px solid ",";\n  & + & {\n    margin-top: 5px;\n  }\n  & button {\n    opacity: 0;\n  }\n  &:hover button {\n    opacity: 1;\n  }\n"]);return f=function(){return n},n}var p=u.b.div(f(),(function(n){return n.theme.colors.primary_4})),j=u.b.div(b(),(function(n){return n.theme.colors.primary_5}),"@media screen and (min-width: 768px)","@media screen and (min-width: 1000px)",(function(n){return n.$isDone&&"\n    text-decoration: line-through;\n  "})),h=u.b.div(s()),m=u.b.button(l()),x=Object(u.b)(m)(d());function g(n){var e=n.todo,t=n.deleteTodo,o=(n.editTodo,n.toggleIsDone);return Object(r.jsxs)(p,{"data-id":e.id,children:[Object(r.jsx)(j,{$isDone:e.isDone,children:e.content}),Object(r.jsxs)(h,{children:[Object(r.jsx)(m,{onClick:function(){return o(e.id)},children:e.isDone?"\u672a\u5b8c\u6210":"\u5df2\u5b8c\u6210"}),Object(r.jsx)(x,{onClick:function(){return t(e.id)},children:"\u522a\u9664"})]})]})}var O=t(11),v=t(16),w=t(5);function k(){var n=Object(o.useRef)(1),e=function(){var n=Object(o.useState)(""),e=Object(w.a)(n,2),t=e[0],r=e[1];return{value:t,setValue:r,handleChange:function(n){return r(n.target.value)}}}(),t=e.value,r=e.setValue,i=e.handleChange,c=Object(o.useState)(""),a=Object(w.a)(c,2),u=a[0],d=a[1],l=Object(o.useState)((function(){var e=JSON.parse(window.localStorage.getItem("todos"));return e&&void 0!==e[0]?(n.current=e[0].id+1,e):[]})),s=Object(w.a)(l,2),b=s[0],f=s[1];Object(o.useEffect)((function(){!function(n){window.localStorage.setItem("todos",JSON.stringify(n))}(b)}),[b]);var p={id:n.current,content:t,isDone:!1};return{todos:b,filter:u,value:t,setValue:r,handleChange:i,handleSubmit:function(e){""!==t.trim()&&"Enter"===e.key&&(f([p].concat(Object(v.a)(b))),r(""),n.current++)},deleteTodo:function(n){return f(b.filter((function(e){return e.id!==n})))},toggleIsDone:function(n){f(b.map((function(e){return e.id!==n?e:Object(O.a)(Object(O.a)({},e),{},{isDone:!e.isDone})})))},showAll:function(){return d("")},showCompleted:function(){return d("completed")},showUncompleted:function(){return d("uncompleted")},clearAll:function(n){return f(b.filter((function(e){return e.id===n})))}}}function y(){var n=Object(a.a)(["\n  margin: 40px auto;\n  padding: 30px;\n  max-width: 700px;\n  background-color: #D1E2E5;\n  font-family: 'Josefin Sans', sans-serif;\n}\n"]);return y=function(){return n},n}function C(){var n=Object(a.a)(["\n  padding: 10px 10px;\n  width: calc(100% - 20px);\n  background-color: #6a959d;\n  color: whitesmoke;\n  font-size: 20px;\n  vertical-align: middle;\n"]);return C=function(){return n},n}function D(){var n=Object(a.a)(["\n  background: #255e69;\n  color: whitesmoke;\n"]);return D=function(){return n},n}function E(){var n=Object(a.a)(["\n  margin-left: 10px;\n"]);return E=function(){return n},n}var S=u.b.button(E()),T=Object(u.b)(S)(D()),I=u.b.input(C()),_=u.b.div(y());var A=function(){var n=k(),e=n.todos,t=n.filter,o=n.value,i=n.handleChange,c=n.handleSubmit,a=n.deleteTodo,u=n.toggleIsDone,d=n.showAll,l=n.showCompleted,s=n.showUncompleted,b=n.clearAll;return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(_,{children:[Object(r.jsx)("h1",{children:"React Todo List"}),Object(r.jsxs)("div",{style:{marginBottom:"30px"},children:[Object(r.jsx)(S,{onClick:d,children:"\u5168\u90e8"}),Object(r.jsx)(S,{onClick:l,children:"\u5df2\u5b8c\u6210"}),Object(r.jsx)(S,{onClick:s,children:"\u672a\u5b8c\u6210"}),Object(r.jsx)(T,{onClick:b,children:"\u6e05\u7a7a"})]}),Object(r.jsx)(I,{type:"text",placeholder:"Type something and press enter",value:o,onChange:i,onKeyPress:c}),e.filter((function(n){return""===t?n:"completed"===t?!0===n.isDone:"uncompleted"===t?!1===n.isDone:void 0})).map((function(n){return Object(r.jsx)(g,{todo:n,deleteTodo:a,toggleIsDone:u},n.id)}))]})})},B=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),r(n),o(n),i(n),c(n)}))};c.a.render(Object(r.jsx)(u.a,{theme:{colors:{primary_1:"#6A959D",primary_2:"#D1E2E5",primary_3:"#9EBEC4",primary_4:"#467B85",primary_5:"#255E69"}},children:Object(r.jsx)(A,{})}),document.getElementById("root")),B()}},[[25,1,2]]]);
//# sourceMappingURL=main.28a9be87.chunk.js.map