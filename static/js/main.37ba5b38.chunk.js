(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){"use strict";n.d(e,"f",(function(){return j})),n.d(e,"d",(function(){return O})),n.d(e,"e",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return h}));var c=n(2),r=(n(30),n(17)),a=n.n(r),u=n(23),o=n(19),i=n.n(o);i.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var s=function(t){i.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){i.a.defaults.headers.common.Authorization=""},j=function(t){return function(){var e=Object(u.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(c.k)()),e.prev=1,e.next=4,i.a.post("/users/signup",t);case 4:r=e.sent,s(r.data.token),n(Object(c.l)(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(c.j)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},O=function(t){return function(){var e=Object(u.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(c.e)()),e.prev=1,e.next=4,i.a.post("/users/login",t);case 4:r=e.sent,s(r.data.token),n(Object(c.f)(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(c.d)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},f=function(){return function(){var t=Object(u.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(c.h)()),t.prev=1,t.next=4,i.a.post("/users/logout");case 4:b(),e(Object(c.i)()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(Object(c.g)(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},d=function(){return function(){var t=Object(u.a)(a.a.mark((function t(e,n){var r,u,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),u=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return s(u),e(Object(c.b)()),t.prev=5,t.next=8,i.a.get("/users/current");case 8:o=t.sent,e(Object(c.c)(o.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(Object(c.a)(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()},l=function(t){return t.auth.isLoggedIn},h=function(t){return t.auth.user.name}},2:function(t,e,n){"use strict";n.d(e,"k",(function(){return r})),n.d(e,"l",(function(){return a})),n.d(e,"j",(function(){return u})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return j})),n.d(e,"g",(function(){return O})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return l}));var c=n(4),r=Object(c.b)("auth/registerRequest"),a=Object(c.b)("auth/registerSuccess"),u=Object(c.b)("auth/registerError"),o=Object(c.b)("auth/loginRequest"),i=Object(c.b)("auth/loginSuccess"),s=Object(c.b)("auth/loginError"),b=Object(c.b)("auth/logoutRequest"),j=Object(c.b)("auth/logoutSuccess"),O=Object(c.b)("auth/logoutError"),f=Object(c.b)("auth/getCurrentUserRequest"),d=Object(c.b)("auth/getCurrentUserSuccess"),l=Object(c.b)("auth/getCurrentUserError")},26:function(t,e,n){t.exports={navLink:"AuthNav_navLink__1ETUO",activeNavLink:"AuthNav_activeNavLink__1eyQn"}},27:function(t,e,n){t.exports={navLink:"Navigation_navLink__2U8pw",activeNavLink:"Navigation_activeNavLink__1M6Zj"}},30:function(t,e,n){"use strict";var c,r,a,u,o=n(3),i=n(7),s=n(4),b=n(2),j={name:null,email:null},O=Object(s.c)(j,(c={},Object(o.a)(c,b.l,(function(t,e){return e.payload.user})),Object(o.a)(c,b.f,(function(t,e){return e.payload.user})),Object(o.a)(c,b.i,(function(){return j})),Object(o.a)(c,b.c,(function(t,e){return e.payload})),c)),f=Object(s.c)(null,(r={},Object(o.a)(r,b.l,(function(t,e){return e.payload.token})),Object(o.a)(r,b.f,(function(t,e){return e.payload.token})),Object(o.a)(r,b.i,(function(){return null})),r)),d=function(t,e){return e.payload},l=Object(s.c)(null,(a={},Object(o.a)(a,b.j,d),Object(o.a)(a,b.d,d),Object(o.a)(a,b.g,d),Object(o.a)(a,b.a,d),a)),h=Object(s.c)(!1,(u={},Object(o.a)(u,b.l,(function(){return!0})),Object(o.a)(u,b.f,(function(){return!0})),Object(o.a)(u,b.c,(function(){return!0})),Object(o.a)(u,b.j,(function(){return!1})),Object(o.a)(u,b.d,(function(){return!1})),Object(o.a)(u,b.a,(function(){return!1})),Object(o.a)(u,b.i,(function(){return!1})),u));e.a=Object(i.c)({user:O,isLoggedIn:h,token:f,error:l})},32:function(t,e,n){t.exports={usermenuCont:"UserMenu_usermenuCont__1fk9A",avatarImg:"UserMenu_avatarImg__heyLK",userName:"UserMenu_userName__18tEX",button:"UserMenu_button__3mTE-"}},50:function(t,e,n){t.exports={header:"AppBar_header__1Yk8v"}},8:function(t,e,n){"use strict";n.d(e,"i",(function(){return r})),n.d(e,"j",(function(){return a})),n.d(e,"h",(function(){return u})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return b})),n.d(e,"g",(function(){return j})),n.d(e,"e",(function(){return O})),n.d(e,"d",(function(){return f}));var c=n(4),r=Object(c.b)("contacts/fetchContactsRequest"),a=Object(c.b)("contacts/fetchContactsSuccess"),u=Object(c.b)("contacts/fetchContactsError"),o=Object(c.b)("contacts/addContactRequest"),i=Object(c.b)("contacts/addContactSuccess"),s=Object(c.b)("contacts/addContactError"),b=Object(c.b)("contacts/deleteContactRequest"),j=Object(c.b)("contacts/deleteContactSuccess"),O=Object(c.b)("contacts/deleteContactError"),f=(Object(c.b)("phonebook/delete"),Object(c.b)("phonebook/changeFilter"))},86:function(t,e,n){},89:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(28),u=n.n(a),o=n(9),i=n(16),s=n(26),b=n(1);function j(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(i.b,{to:"/register",exact:!0,className:s.navLink,activeClassName:s.activeNavLink,children:"Sign up"}),Object(b.jsx)(i.b,{to:"/login",exact:!0,className:s.navLink,activeClassName:s.activeNavLink,children:"Sign in"})]})}var O=n(27),f=n(12);function d(){var t=Object(o.c)(f.b);return Object(b.jsxs)("div",{children:[Object(b.jsx)(i.b,{to:"/",exact:!0,className:O.navLink,activeClassName:O.activeNavLink,children:"Home"}),t&&Object(b.jsx)(i.b,{to:"/contacts",exact:!0,className:O.navLink,activeClassName:O.activeNavLink,children:"Contacts"})]})}var l=n(32);function h(){var t=Object(o.b)(),e=Object(o.c)(f.c),n=Object(c.useCallback)((function(){t(Object(f.e)())}),[t]);return Object(b.jsxs)("div",{className:l.usermenuCont,children:[Object(b.jsxs)("span",{className:l.userName,children:[e,", welcome to The Phonebook! "]}),Object(b.jsx)("button",{type:"button",onClick:n,className:l.button,children:"Log out"})]})}var p=n(50);function v(){var t=Object(o.c)(f.b);return Object(b.jsxs)("header",{className:p.header,children:[Object(b.jsx)(d,{}),t?Object(b.jsx)(h,{}):Object(b.jsx)(j,{})]})}var g=n(6),x=n(21),k=n(31);function m(t){var e=t.redirectTo,n=t.children,c=Object(k.a)(t,["redirectTo","children"]),r=Object(o.c)(f.b);return Object(b.jsx)(g.b,Object(x.a)(Object(x.a)({},c),{},{children:r?n:Object(b.jsx)(g.a,{to:e})}))}function N(t){var e=t.children,n=t.redirectTo,c=Object(k.a)(t,["children","redirectTo"]),r=Object(o.c)(f.b);return Object(b.jsx)(g.b,Object(x.a)(Object(x.a)({},c),{},{children:r&&c.restricted?Object(b.jsx)(g.a,{to:n}):e}))}var _=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,117))})),y=Object(c.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,120))})),C=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,118))})),L=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,119))}));function w(){var t=Object(o.b)();return Object(c.useEffect)((function(){return t(Object(f.a)())}),[t]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(v,{}),Object(b.jsx)(c.Suspense,{fallback:Object(b.jsx)("p",{children:"Loading..."}),children:Object(b.jsxs)(g.d,{children:[Object(b.jsx)(N,{exact:!0,path:"/",component:_}),Object(b.jsx)(m,{path:"/contacts",component:y,redirectTo:"/login"}),Object(b.jsx)(N,{path:"/register",restricted:!0,component:C,redirectTo:"/contacts"}),Object(b.jsx)(N,{path:"/login",restricted:!0,component:L,redirectTo:"/contacts"})]})})]})}n(86);var E,S,T,U=n(25),R=n(4),q=n(18),z=n(51),A=n.n(z),M=n(30),I=n(3),B=n(7),F=n(8),J=Object(R.c)([],(E={},Object(I.a)(E,F.j,(function(t,e){return e.payload})),Object(I.a)(E,F.c,(function(t,e){var n=e.payload;return[].concat(Object(U.a)(t),[n])})),Object(I.a)(E,F.g,(function(t,e){var n=e.payload;return Object(U.a)(t.filter((function(t){return t.id!==n})))})),E)),P=Object(R.c)("",Object(I.a)({},F.d,(function(t,e){return e.payload}))),H=Object(R.c)(!1,(S={},Object(I.a)(S,F.i,(function(){return!0})),Object(I.a)(S,F.j,(function(){return!1})),Object(I.a)(S,F.h,(function(){return!1})),Object(I.a)(S,F.b,(function(){return!0})),Object(I.a)(S,F.c,(function(){return!1})),Object(I.a)(S,F.a,(function(){return!1})),Object(I.a)(S,F.f,(function(){return!0})),Object(I.a)(S,F.g,(function(){return!1})),Object(I.a)(S,F.e,(function(){return!1})),S)),K=Object(R.c)(null,(T={},Object(I.a)(T,F.i,(function(){return null})),Object(I.a)(T,F.h,(function(t,e){return e.payload})),Object(I.a)(T,F.b,(function(){return null})),T)),Q=Object(B.c)({items:J,filter:P,loading:H,error:K}),X=Object(U.a)(Object(R.d)({serializableCheck:{ignoredActions:[q.a,q.f,q.b,q.c,q.d,q.e]}})),Y={key:"auth",storage:A.a,whitelist:["token"]},Z=Object(R.a)({reducer:{auth:Object(q.g)(Y,M.a),contacts:Q},middleware:X}),D=Object(q.h)(Z),G=n(52);u.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(o.a,{store:Z,children:Object(b.jsx)(G.a,{loading:null,persistor:D,children:Object(b.jsx)(i.a,{children:Object(b.jsx)(w,{})})})})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.37ba5b38.chunk.js.map