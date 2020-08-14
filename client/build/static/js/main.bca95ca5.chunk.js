(this["webpackJsonptodo-front"]=this["webpackJsonptodo-front"]||[]).push([[0],{29:function(e,t,a){e.exports=a(59)},34:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),c=a.n(o),s=(a(34),a(2)),u=a.n(s),l=a(6),i=a(1),m=a(3),d=a(5),p=Object(n.createContext)(null),b=a(7),f=a.n(b);function h(){var e=Object(n.useContext)(p),t=e.userData,a=e.setUserData,o=Object(m.f)();return r.a.createElement("nav",{className:"auth-options"},t.user?r.a.createElement("button",{onClick:function(){a({token:void 0,user:void 0}),localStorage.setItem("lastVisited",""),localStorage.setItem("auth-token",""),o.push("/login")}},"Log out"):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return o.push("/register")}},"Register"),r.a.createElement("button",{onClick:function(){return o.push("/login")}},"Log in")))}function E(){var e=Object(n.useContext)(p).userData;return r.a.createElement("header",{id:"header"},r.a.createElement(d.b,{to:"/"},e.user?r.a.createElement("h1",{className:"title"},e.user.displayName,"'s Todos!"):r.a.createElement("h1",{className:"title"},"Simple Todos!")),r.a.createElement(h,null))}function v(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=(t[0],t[1],Object(n.useState)()),o=Object(i.a)(a,2),c=(o[0],o[1],Object(n.useContext)(p).userData),s=Object(m.f)();return Object(n.useEffect)((function(){c.user||s.push("/login")})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Todo Options"),r.a.createElement(d.b,{to:"/gettodos"},r.a.createElement("button",{className:"type-button",value:"GetTodos"},"Get Todo's")),r.a.createElement(d.b,{to:"/searchtodos"},r.a.createElement("button",{className:"type-button",value:"SearchTodos"},"Search Todo's")),r.a.createElement(d.b,{to:"/createtodos"},r.a.createElement("button",{className:"type-button",value:"CreateTodos"},"Create Todo")))))}var g=function(){var e=Object(n.useContext)(p).userData,t=Object(m.f)();return Object(n.useEffect)((function(){localStorage.setItem("lastVisited",""),e.user||t.push("/login")})),r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null))};function O(e){return r.a.createElement("div",{className:"error-notice"},r.a.createElement("span",null,e.message),r.a.createElement("button",{onClick:e.clearError},"X"))}function j(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(),s=Object(i.a)(c,2),d=s[0],b=s[1],h=Object(n.useState)(),E=Object(i.a)(h,2),v=E[0],g=E[1],j=Object(n.useContext)(p),S=j.userData,y=j.setUserData,k=Object(m.f)();Object(n.useEffect)((function(){var e=localStorage.getItem("lastVisited");S.user&&k.push(e)}));var x=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={email:a,password:d},e.next=5,f.a.post("/api/users/login",n);case 5:r=e.sent,y({token:r.data.token,user:r.data.user}),localStorage.setItem("auth-token",r.data.token),k.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),e.t0.response.data.msg&&g(e.t0.response.data.msg);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Login"),v&&r.a.createElement(O,{message:v,clearError:function(){return g(void 0)}}),r.a.createElement("form",{className:"form",onSubmit:x},r.a.createElement("label",{htmlFor:"login-email"},"Email"),r.a.createElement("input",{id:"login-email",type:"email",onChange:function(e){return o(e.target.value)}}),r.a.createElement("label",{htmlFor:"login-password"},"Password"),r.a.createElement("input",{id:"login-password",type:"password",onChange:function(e){return b(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Log in"}))))}function S(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(),s=Object(i.a)(c,2),d=s[0],b=s[1],h=Object(n.useState)(),E=Object(i.a)(h,2),v=E[0],g=E[1],j=Object(n.useState)(),S=Object(i.a)(j,2),y=S[0],k=S[1],x=Object(n.useState)(),w=Object(i.a)(x,2),N=w[0],C=w[1],T=Object(n.useContext)(p).setUserData,D=Object(m.f)(),F=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={email:a,password:d,passwordCheck:v,displayName:y},e.next=5,f.a.post("/api/users/register",n);case 5:return e.next=7,f.a.post("/api/users/login",{email:a,password:d});case 7:r=e.sent,T({token:r.data.token,user:r.data.user}),localStorage.setItem("auth-token",r.data.token),D.push("/"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),e.t0.response.data.msg&&C(e.t0.response.data.msg);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Register"),N&&r.a.createElement(O,{message:N,clearError:function(){return C(void 0)}}),r.a.createElement("form",{className:"form",onSubmit:F},r.a.createElement("label",{htmlFor:"register-email"},"Email"),r.a.createElement("input",{id:"register-email",type:"email",onChange:function(e){return o(e.target.value)}}),r.a.createElement("label",{htmlFor:"register-password"},"Password"),r.a.createElement("input",{id:"register-password",type:"password",onChange:function(e){return b(e.target.value)}}),r.a.createElement("input",{type:"password",placeholder:"Verify password",onChange:function(e){return g(e.target.value)}}),r.a.createElement("label",{htmlFor:"register-display-name"},"Display name"),r.a.createElement("input",{id:"register-display-name",type:"text",onChange:function(e){return k(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Register"}))))}var y=function(e){return f.a.get("api/todos/all",{headers:{"x-auth-token":e}})},k=function(e,t){return f.a.delete("/api/todos/"+t,{headers:{"x-auth-token":e}})},x=function(e,t){var a=e.title,n=e.youTubeUrl,r=e.description;return f.a.post("/api/todos/",{title:a,youTubeUrl:n,description:r},{headers:{"x-auth-token":t}})},w=function(e,t,a){var n=e.title,r=e.youTubeUrl,o=e.description;return f.a.put("/api/todos/"+a,{title:n,youTubeUrl:r,description:o},{headers:{"x-auth-token":t}})};function N(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"success-notice"},r.a.createElement("span",null,e.message),r.a.createElement("button",{onClick:e.clearSuccess},"X")))}function C(e){var t=e.props.todoList,a=t._id,o=t.title,c=t.youTubeUrl,s=t.description,m=Object(n.useState)(),d=Object(i.a)(m,2),b=d[0],f=d[1],h=Object(n.useState)(),E=Object(i.a)(h,2),v=E[0],g=E[1],j=Object(n.useState)(),S=Object(i.a)(j,2),y=S[0],k=S[1],x=Object(n.useState)(),C=Object(i.a)(x,2),T=C[0],D=C[1],F=Object(n.useContext)(p).userData,I=function(){var t=Object(l.a)(u.a.mark((function t(n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,r={title:b||s,youTubeUrl:v||c,description:y||s},t.next=5,w(r,F.token,a).then((function(t){return e.setTodoSuccess("Success, ".concat(F.user.displayName,"!  Your Todo has been saved."))})).catch((function(e){return e.response.data.msg&&D(e.response.data.msg)}));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},T&&r.a.createElement(O,{message:T,clearError:function(){return D(void 0)}}),e.todoSuccess&&r.a.createElement(N,{message:e.todoSuccess,clearSuccess:function(){e.setTodoSuccess(void 0)}}),r.a.createElement("form",{className:"form",onSubmit:I},r.a.createElement("label",{htmlFor:"todo-title"},"Title"),r.a.createElement("input",{id:"todo-title",type:"text",defaultValue:o,onChange:function(e){return f(e.target.value)}}),r.a.createElement("label",{htmlFor:"todo-youtubeurl"},"YouTube URL"),r.a.createElement("input",{id:"todo-youtubeurl",type:"url",defaultValue:c,onChange:function(e){return g(e.target.value)}}),r.a.createElement("label",{htmlFor:"todo-description"},"Description"),r.a.createElement("textarea",{id:"todo-description",name:"todo-description",defaultValue:s,onChange:function(e){return k(e.target.value)}}),r.a.createElement("div",{className:"buttons-div"},r.a.createElement("input",{type:"submit",value:"Submit"}),r.a.createElement("input",{type:"reset",value:"Clear"})))))}function T(e){var t=Object(n.useState)(),a=Object(i.a)(t,2),o=a[0],c=a[1],s=e.show?"modal display-block":"modal display-none";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"myModal",className:s},r.a.createElement("div",{className:"modal-main"},r.a.createElement(C,{props:e,todoSuccess:o,setTodoSuccess:c}),r.a.createElement("button",{className:"close",onClick:function(){e.handleClose(),e.getTodos(),c(void 0)}},"close"))))}function D(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),o=(a[0],a[1],Object(n.useState)(!1)),c=Object(i.a)(o,2),s=c[0],u=c[1],l=e.todoList.youTubeUrl,m=l.split(l.charAt(l.length-12)),d=m[m.length-1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title"},e.todoList.title),r.a.createElement("p",{className:"card-description"},e.todoList.description),r.a.createElement("div",{className:"video",style:{position:"relative",paddingBottom:"56.25%",paddingTop:25,height:0,color:"red"}},r.a.createElement("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:"https://www.youtube.com/embed/".concat(d),frameBorder:"0"})),r.a.createElement("div",{className:"buttons-div"},r.a.createElement(T,{show:s,handleClose:function(){u(!1)},todoList:e.todoList,getTodos:e.getTodos}),r.a.createElement("button",{className:"todo-card-button",onClick:function(){u(!0)}},"Edit"),r.a.createElement("button",{className:"todo-card-button",onClick:function(){return e.deleteTodos(e.todoList._id)}},"Delete"))))}function F(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(),s=Object(i.a)(c,2),d=s[0],b=s[1],f=Object(n.useState)(),h=Object(i.a)(f,2),E=h[0],v=h[1],g=Object(n.useState)(),j=Object(i.a)(g,2),S=j[0],y=j[1],k=Object(n.useState)(),w=Object(i.a)(k,2),C=w[0],T=w[1],D=Object(n.useContext)(p).userData,F=Object(m.f)();localStorage.setItem("lastVisited","createtodos"),Object(n.useEffect)((function(){D.user||F.push("/login")}),[]);var I=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={title:a,youTubeUrl:d,description:E},e.next=5,x(n,D.token).then((function(e){return T("Success, ".concat(D.user.displayName,"!  Your Todo has been saved."))})).catch((function(e){return e.response.data.msg&&y(e.response.data.msg)}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log("Something when wrong");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"CreateTodos"),S&&r.a.createElement(O,{message:S,clearError:function(){return y(void 0)}}),C&&r.a.createElement(N,{message:C,clearSuccess:function(){T(void 0)}}),r.a.createElement("form",{className:"form",onSubmit:I},r.a.createElement("label",{htmlFor:"todo-title"},"Title"),r.a.createElement("input",{id:"todo-title",type:"text",onChange:function(e){return o(e.target.value)}}),r.a.createElement("label",{htmlFor:"todo-youtubeurl"},"YouTube URL"),r.a.createElement("input",{id:"todo-youtubeurl",type:"url",onChange:function(e){return b(e.target.value)}}),r.a.createElement("label",{htmlFor:"todo-description"},"Description"),r.a.createElement("textarea",{id:"todo-description",name:"todo-description",onChange:function(e){return v(e.target.value)}}),r.a.createElement("div",{className:"buttons-div"},r.a.createElement("input",{type:"submit",value:"Submit"}),r.a.createElement("input",{type:"reset",value:"Clear",onClick:function(){T(void 0),y(void 0),o(""),b(""),v("")}}))),r.a.createElement("button",{className:"type-button",onClick:function(){F.push("/"),T(void 0)},value:"Home"},"Home")))}function I(){var e=Object(n.useContext)(p).userData,t=Object(n.useState)([]),a=Object(i.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(),b=Object(i.a)(s,2),f=b[0],h=b[1],E=Object(m.f)();localStorage.setItem("lastVisited","gettodos"),Object(n.useEffect)((function(){e.user||E.push("/login")})),Object(n.useEffect)((function(){y(e.token).then((function(e){c(e.data)})).catch((function(e){return e.response.data.msg&&h(e.response.data.msg)&&console.log(e)}))}),[]);var v=function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y(e.token).then((function(e){return c(e.data)})).catch((function(e){return e.response.data.msg&&h(e.response.data.msg)}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=Object(l.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k(e.token,a).then(Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e.token).then((function(e){c(e.data)})).catch((function(e){o.length>=1&&(c([]),e.response.data.msg&&h(e.response.data.msg))}));case 2:case"end":return t.stop()}}),t)})))).catch((function(e){return e.response.data.msg&&h(e.response.data.msg)}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Get Todo's"),f&&r.a.createElement(O,{message:f,clearError:function(){return h(void 0)}}),r.a.createElement("div",{className:"card-container"},o.length?o.map((function(e){return r.a.createElement(D,{id:e._id,todoList:e,key:e._id,deleteTodos:g,getTodos:v})})):r.a.createElement("p",null)),r.a.createElement(d.b,{to:"/"},r.a.createElement("button",{className:"type-button",value:"Home"},"Home"))))}function L(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=(t[0],t[1]),o=Object(n.useState)(),c=Object(i.a)(o,2),s=(c[0],c[1]),b=Object(n.useContext)(p).userData,f=Object(m.f)();localStorage.setItem("lastVisited","searchtodos"),Object(n.useEffect)((function(){b.user||f.push("/login")}));var h=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t.preventDefault()}catch(n){n.response.data.msg&&a(n.response.data.msg)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Search Todos"),r.a.createElement("form",{className:"form",onSubmit:h},r.a.createElement("label",{htmlFor:"search-term"},"Search:"),r.a.createElement("input",{id:"todo-search",type:"text",placeholder:"Search your todos",onChange:function(e){return s(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Search"})),r.a.createElement(d.b,{to:"/"},r.a.createElement("button",{className:"type-button",value:"Home"},"Home"))))}a(58);var U=function(){var e=Object(n.useState)({token:void 0,user:void 0}),t=Object(i.a)(e,2),a=t[0],o=t[1];return Object(m.f)(),Object(n.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(t=localStorage.getItem("auth-token"))){e.next=6;break}return localStorage.setItem("lastVisited",""),localStorage.setItem("auth-token",""),t="",e.abrupt("return");case 6:return e.next=8,f.a.post("/api/users/tokenIsValid",null,{headers:{"x-auth-token":t}});case 8:if(!e.sent.data){e.next=14;break}return e.next=12,f.a.get("/api/users/",{headers:{"x-auth-token":t}});case 12:a=e.sent,o({token:t,user:a.data});case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(p.Provider,{value:{userData:a,setUserData:o}},r.a.createElement(E,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:g}),r.a.createElement(m.a,{path:"/login",component:j}),r.a.createElement(m.a,{path:"/register",component:S}),r.a.createElement(m.a,{path:"/createtodos",component:F}),r.a.createElement(m.a,{path:"/gettodos",component:I}),r.a.createElement(m.a,{path:"/searchtodos",component:L})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.bca95ca5.chunk.js.map