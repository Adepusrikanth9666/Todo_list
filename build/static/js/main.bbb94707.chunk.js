(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],{40:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),o=n(6),a=n.n(o),r=(n(40),n(41)),d=n(42),l=n(50),s=n(48),u=n(14),b="ADD_TODO",j="TOGGLE_TODO",O="SET_FILTER",p=0,f=(n(64),n(99)),v=n(100),h=n(8),y=function(t){Object(l.a)(n,t);var e=Object(s.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).updateInput=function(t){c.setState({input:t})},c.handleAddTodo=function(){console.log(c.state.input),c.state.input?c.props.addTodo(c.state.input):alert("Enter the task Todo"),c.setState({input:""})},c.state={input:""},c}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{className:"add-todo-list",children:[Object(h.jsx)(f.a,{label:"Name",margin:"dense",fullWidth:!0,required:!0,value:this.state.input,onChange:function(e){return t.updateInput(e.target.value)},variant:"outlined"}),Object(h.jsx)(v.a,{variant:"contained",color:"primary",onClick:this.handleAddTodo,children:"Add Todo"})]})}}]),n}(i.a.Component),m=Object(u.b)(null,{addTodo:function(t){return{type:b,payload:{id:++p,content:t}}}})(y),I=n(32),T=n.n(I),g=Object(u.b)(null,{toggleTodo:function(t){return{type:j,payload:{id:t}}}})((function(t){var e=t.todo,n=t.toggleTodo;return Object(h.jsxs)("li",{className:"todo-item",onClick:function(){return n(e.id)},children:[e&&e.completed?"\ud83d\udc4c":"\ud83d\udc4b"," ",Object(h.jsx)("span",{className:T()("todo-item__text",e&&e.completed&&"todo-item__text--completed"),children:e.content})]})})),x=n(12),L={ALL:"All",COMPLETED:"Completed",INCOMPLETE:"Incomplete"},C=function(t){return t.todos},E=function(t){return function(t){return C(t)?C(t).allIds:[]}(t).map((function(e){return function(t,e){return C(t)?Object(x.a)(Object(x.a)({},C(t).byIds[e]),{},{id:e}):{}}(t,e)}))},F=Object(u.b)((function(t){return{todos:function(t,e){var n=E(t);switch(e){case L.COMPLETED:return n.filter((function(t){return t.completed}));case L.INCOMPLETE:return n.filter((function(t){return!t.completed}));case L.ALL:default:return n}}(t,t.visibilityFilter)}}))((function(t){var e=t.todos;return Object(h.jsx)("ul",{className:"todo-list",children:e&&e.length?e.map((function(t,e){return Object(h.jsx)(g,{todo:t},"todo-".concat(t.id))})):"No todos, yay!"})})),N=Object(u.b)((function(t){return{activeFilter:t.visibilityFilter}}),{setFilter:function(t){return{type:O,payload:{filter:t}}}})((function(t){var e=t.activeFilter,n=t.setFilter;return Object(h.jsx)("div",{className:"visibility-filters",children:Object.keys(L).map((function(t){var c=L[t];return Object(h.jsx)("span",{className:T()("filter",c===e&&"filter--active"),onClick:function(){n(c)},children:c},"visibility-filter-".concat(c))}))})}));function _(){return Object(h.jsxs)("div",{className:"todo-app",children:[Object(h.jsx)("h1",{children:"Todo List "}),Object(h.jsx)(m,{}),Object(h.jsx)(F,{}),Object(h.jsx)(N,{})]})}var k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,102)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),o(t),a(t)}))},A=n(22),D=L.ALL,P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return e.payload.filter;default:return t}},w=n(29),M=n(49),S={allIds:[],byIds:{}},B=Object(A.b)({todos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:var n=e.payload,c=n.id,i=n.content;return Object(x.a)(Object(x.a)({},t),{},{allIds:[].concat(Object(M.a)(t.allIds),[c]),byIds:Object(x.a)(Object(x.a)({},t.byIds),{},Object(w.a)({},c,{content:i,completed:!1}))});case j:var o=e.payload.id;return Object(x.a)(Object(x.a)({},t),{},{byIds:Object(x.a)(Object(x.a)({},t.byIds),{},Object(w.a)({},o,Object(x.a)(Object(x.a)({},t.byIds[o]),{},{completed:!t.byIds[o].completed})))});default:return t}},visibilityFilter:P}),G=Object(A.c)(B);a.a.render(Object(h.jsxs)(u.a,{store:G,children:[Object(h.jsx)(_,{}),","]}),document.getElementById("root")),k()}},[[66,1,2]]]);
//# sourceMappingURL=main.bbb94707.chunk.js.map