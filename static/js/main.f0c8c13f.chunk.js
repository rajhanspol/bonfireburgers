(this.webpackJsonpbonfirefinal=this.webpackJsonpbonfirefinal||[]).push([[0],{55:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(7),r=n.n(c),s=n(47),a=n.n(s),i=n(17),j=n(16),u=(n(55),n(13)),o=n(2);var l=function(e){var t=Object(j.g)(),n=Object(c.useState)(""),r=Object(u.a)(n,2),s=r[0],a=r[1],i=Object(c.useRef)(),l=Object(c.useRef)(),d=Object(c.useRef)(),b=e.items.map((function(e){return{name:e.name,qty:e.qty}}));return Object(o.jsx)("div",{className:"chkOutFormContainer",children:Object(o.jsxs)("form",{className:"signinForm",onSubmit:function(e){return e.preventDefault()},children:[s&&s,Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Name: "}),Object(o.jsx)("input",{type:"text",ref:i,required:!0})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Delivery Location: "}),Object(o.jsx)("input",{type:"text",ref:l,required:!0})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Contact Number: "}),Object(o.jsx)("input",{type:"text",ref:d,required:!0})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"signInFormBtn",type:"submit",onClick:function(){var n={name:i.current.value,location:l.current.value,contact:d.current.value,items:b,subTotal:e.totalAmount,orderAccepted:!1,orderRejected:!1,uid:e.uid};if(""===i.current.value||""===l.current.value||""===d.current.value)return a("Please enter missing fields");e.onPlaceOrder(n),t.push("/")},children:"Place Order"})})]})})},d=n(50),b=(n(62),n(66),d.a.initializeApp({apiKey:"AIzaSyAE9Kc0NMr_9_Gkm3Tvy40Jg341RC2ksfA",authDomain:"bonfire-online.firebaseapp.com",projectId:"bonfire-online",storageBucket:"bonfire-online.appspot.com",messagingSenderId:"864523840218",appId:"1:864523840218:web:624767addde5c320de53e3"})),O=b.auth(),h=b.firestore(),x=r.a.createContext();function m(e){var t=Object(c.useState)(),n=Object(u.a)(t,2),r=n[0],s=n[1];return Object(c.useEffect)((function(){return O.onAuthStateChanged((function(e){s(e)}))}),[]),Object(o.jsx)(x.Provider,{value:{currentUser:r,signUp:function(e,t){return O.createUserWithEmailAndPassword(e,t)},logIn:function(e,t){return O.signInWithEmailAndPassword(e,t)},logOut:function(){return O.signOut()}},children:e.children})}var p=n(0),f=n.n(p),v=n(1);var g=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useContext)(x),i=Object(j.g)();function l(){return(l=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(""),e.prev=1,e.next=4,a.logOut();case 4:i.push("/"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),s("Failed to LogOut"),console.log(n);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(o.jsxs)(r.a.Fragment,{children:[n&&n,Object(o.jsx)("button",{onClick:function(){return l.apply(this,arguments)},style:{display:a.currentUser?"block":"none"},children:"Log Out"})]})};var y=function(){var e=Object(c.useContext)(x);return Object(o.jsxs)("div",{className:"navigation",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Bonfire Burgers"}),Object(o.jsxs)("h4",{style:{display:e.currentUser&&"admin@bonfire.com"!==e.currentUser.email?"block":"none"},children:["Logged in as: ",e.currentUser&&e.currentUser.email]})]}),Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("button",{children:"Home"})}),Object(o.jsx)(i.b,{to:"/orderonline",children:Object(o.jsx)("button",{children:"Order online"})}),Object(o.jsx)(i.b,{to:"/login",style:{display:e.currentUser?"none":"block"},children:Object(o.jsx)("button",{children:"Log In"})}),Object(o.jsx)(i.b,{to:"/signin",style:{display:e.currentUser?"none":"block"},children:Object(o.jsx)("button",{children:"Sign In"})}),Object(o.jsx)(i.b,{to:"/adminpage",style:{display:e.currentUser&&"admin@bonfire.com"===e.currentUser.email?"block":"none"},children:Object(o.jsx)("button",{children:"Admin Dashboard"})}),Object(o.jsx)(i.b,{to:"/vieworders",style:{display:e.currentUser&&"admin@bonfire.com"!==e.currentUser.email?"block":"none"},children:Object(o.jsx)("button",{children:"View Orders"})}),Object(o.jsx)(g,{})]})},C=n(23),k=n(29),N=r.a.createContext(),I={items:[],totalAmount:0};function S(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.price*t.item.qty,r=e.items.findIndex((function(e){return e.name===t.item.name})),s=e.items[r];if(s){var a=Object(k.a)(Object(k.a)({},s),{},{qty:s.qty+t.item.qty,amount:s.amount+t.item.price});(n=Object(C.a)(e.items))[r]=a}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var i,j=e.items.findIndex((function(e){return e.name===t.name})),u=e.items[j],o=e.totalAmount-u.price;if(1===u.qty)i=e.items.filter((function(e){return e.name!==t.name}));else{var l=Object(k.a)(Object(k.a)({},u),{},{qty:u.qty-1,amount:u.amount-u.price});(i=Object(C.a)(e.items))[j]=l}return{items:i,totalAmount:o}}return"REFRESH"===t.type?{items:[],totalAmount:0}:I}function A(e){var t=Object(c.useReducer)(S,I),n=Object(u.a)(t,2),r=n[0],s=n[1];function a(){s({type:"REFRESH"})}var i=Object(c.useState)([]),j=Object(u.a)(i,2),l=j[0],d=j[1],b=h.collection("menu"),O=h.collection("orders");function x(){return(x=Object(v.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,O.add(t);case 3:a();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){return b.onSnapshot((function(e){d(e.docs.map((function(e){return Object(k.a)(Object(k.a)({},e.data()),{},{id:e.id})})))}))}),[]),Object(o.jsx)(N.Provider,{value:{orderMenu:l,addItemToCart:function(e){s({type:"ADD",item:e})},cartState:r,removeItemFromCart:function(e){s({type:"REMOVE",name:e})},placeOrder:function(e){return x.apply(this,arguments)}},children:e.children})}var w=function(e){var t=Object(j.g)();return Object(o.jsxs)("div",{className:"checkoutCart",children:[Object(o.jsx)("button",{onClick:function(){t.push("/orderonline")},children:"< Back to Menu"}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("h2",{children:["Cart: ",e.totalItems," items"]}),Object(o.jsxs)("p",{children:["Sub Total: ",e.totalAmount]}),Object(o.jsxs)("p",{children:["CGST: ",e.gst]}),Object(o.jsxs)("p",{children:["SGST: ",e.gst]}),Object(o.jsxs)("p",{children:["Delivery Charges: ",e.deliveryCharge]}),Object(o.jsxs)("h2",{children:["Total: ",e.total]})]})]})};var R=function(){var e=Object(c.useContext)(x),t=Object(c.useContext)(N),n=t.cartState.items.map((function(e){return e.qty})).reduce((function(e,t){return e+t}),0),r=2.5*t.cartState.totalAmount/100,s=t.cartState.totalAmount+r+r+30,a=Math.round(s);return Object(o.jsxs)("div",{children:[e.currentUser?null:Object(o.jsx)(j.a,{to:"/login"}),Object(o.jsx)(y,{}),Object(o.jsx)(w,{totalItems:n,totalAmount:t.cartState.totalAmount,gst:r,deliveryCharge:30,total:a}),Object(o.jsx)(l,{items:t.cartState.items,totalAmount:t.cartState.totalAmount,total:a,deliveryCharge:30,uid:e.currentUser.uid,onPlaceOrder:t.placeOrder})]})},q=n.p+"static/media/landingpagebrgr1.8cda51b4.jpg",D=n.p+"static/media/landingpagebrgr2.b4611614.jpg",M=n.p+"static/media/landingpagebrgr3.f91a85f3.jpg",F=n.p+"static/media/landingpagebrgr4.47689221.jpg";var U=function(){var e=Object(c.useState)(0),t=Object(u.a)(e,2),n=t[0],r=t[1],s=[q,D,M,F];return Object(o.jsxs)("div",{className:"carousel",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){r(n>0?function(e){return e-1}:3)},children:Object(o.jsx)("i",{className:"fas fa-chevron-left"})}),Object(o.jsx)("button",{onClick:function(){r(n<3?function(e){return e+1}:0)},children:Object(o.jsx)("i",{className:"fas fa-chevron-right"})})]}),Object(o.jsx)("img",{src:s[n],alt:"failed to load img"})]})};var P=function(){return Object(o.jsxs)("div",{className:"description",children:[Object(o.jsx)("h1",{children:"Juicy Burgers Delivered Fresh & Hot!"}),Object(o.jsx)("p",{children:"Along with crispy fries, shakes and more..."}),Object(o.jsx)("button",{children:"Order Now"})]})};var E=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:Object(o.jsx)("i",{className:"fas fa-phone-alt"})}),Object(o.jsx)("h2",{children:"+91 9372396525"}),Object(o.jsx)("h3",{children:"Call Us"})]})};var B=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:Object(o.jsx)("i",{className:"fas fa-map-marker-alt"})}),Object(o.jsx)("h2",{children:"Location"}),Object(o.jsx)("h3",{children:"Worli, Mumbai"})]})};var T=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:Object(o.jsx)("i",{className:"fas fa-clock"})}),Object(o.jsx)("h2",{children:"Timings"}),Object(o.jsx)("h3",{children:"Open from 11AM to 2AM"})]})};var L=function(){return Object(o.jsxs)("div",{className:"details",children:[Object(o.jsx)(T,{}),Object(o.jsx)(B,{}),Object(o.jsx)(E,{})]})};var V=function(){return Object(o.jsxs)("div",{className:"homePage",children:[Object(o.jsx)(y,{}),Object(o.jsxs)("div",{className:"homepageContent",children:[Object(o.jsx)(P,{}),Object(o.jsx)(U,{}),Object(o.jsx)(L,{})]})]})};var G=function(){var e=Object(c.useContext)(x),t=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useState)(""),s=Object(u.a)(r,2),a=s[0],l=s[1],d=Object(c.useState)(!1),b=Object(u.a)(d,2),O=b[0],h=b[1],m=Object(j.g)();function p(){return(p=Object(v.a)(f.a.mark((function c(r){return f.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r.preventDefault(),c.prev=1,l(""),h(!0),c.next=6,e.logIn(t.current.value,n.current.value);case 6:h(!1),m.push("/"),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),l("Failed to Log In");case 13:case"end":return c.stop()}}),c,null,[[1,10]])})))).apply(this,arguments)}function g(){return(g=Object(v.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,l(""),h(!0),t.next=6,e.logIn("test@bonfire.com","test12345");case 6:h(!1),m.push("/"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),l("Failed to Log In");case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}function C(){return(C=Object(v.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,l(""),h(!0),t.next=6,e.logIn("admin@bonfire.com","admin12345");case 6:h(!1),m.push("/"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),l("Failed to Log In");case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}return Object(o.jsxs)("div",{className:"logInPage",children:[Object(o.jsx)(y,{}),Object(o.jsx)("h2",{className:"signinTitle",children:"Log In"}),Object(o.jsx)("h4",{children:"You need to be logged in to place orders"}),Object(o.jsx)("button",{className:"gstAccBtn",onClick:function(e){return g.apply(this,arguments)},children:"Use Guest Account"}),Object(o.jsx)("button",{className:"gstAccBtn",onClick:function(e){return C.apply(this,arguments)},children:"Use Test - Admin Account"}),Object(o.jsx)("h3",{children:a}),Object(o.jsxs)("form",{className:"signinForm",onSubmit:function(e){return p.apply(this,arguments)},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Email: "}),Object(o.jsx)("input",{type:"text",ref:t,required:!0})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Password: "}),Object(o.jsx)("input",{type:"text",ref:n,required:!0})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{disabled:O,className:"signInFormBtn",type:"submit",children:"Log In"})})]}),Object(o.jsxs)("h3",{className:"alreadyAcc",children:["Don't have an account?",Object(o.jsx)(i.b,{to:"/signin",children:Object(o.jsx)("button",{children:"Sign Up"})})]})]})};var _=function(e){var t={name:e.name,price:e.price,qty:1,amount:e.price};return Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:e.name}),Object(o.jsx)("p",{children:e.amount}),Object(o.jsx)("button",{onClick:function(){return e.removeItem(e.name)},children:"-"}),Object(o.jsx)("p",{children:e.qty}),Object(o.jsx)("button",{onClick:function(){return e.addItem(t)},children:"+"})]})};var H=function(e){return Object(o.jsxs)("div",{className:"cartDetails",children:[Object(o.jsxs)("p",{children:["Sub Total: ",e.amount]}),Object(o.jsx)(i.b,{to:"/checkoutpage",children:Object(o.jsx)("button",{disabled:e.amount<=0,children:"Check Out"})})]})};var J=function(){var e=Object(c.useContext)(N),t=e.cartState.items.map((function(t){return Object(o.jsx)(_,{name:t.name,price:t.price,qty:t.qty,amount:t.amount,addItem:e.addItemToCart,removeItem:e.removeItemFromCart},t.name)}));return Object(o.jsxs)("div",{className:"cartContainer",children:[Object(o.jsx)("div",{className:"cartItemContainer",children:t}),Object(o.jsx)(H,{amount:e.cartState.totalAmount})]})};var W=function(e){var t=Object(c.useContext)(N),n={name:e.name,price:e.price,qty:1,amount:e.price};return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsxs)("h4",{children:[Object(o.jsx)("i",{className:"fas fa-rupee-sign rupee"}),e.price]}),Object(o.jsx)("button",{onClick:function(){return t.addItemToCart(n)},children:"ADD"}),Object(o.jsx)("p",{children:e.description})]})};var z=function(e){return Object(o.jsxs)("div",{className:"itemHeader",children:[Object(o.jsx)("h3",{children:e.title}),Object(o.jsx)("div",{className:"itemContentCards",children:e.children})]})};var K=function(){for(var e=Object(c.useContext)(N),t=[],n=[],r=0;r<e.orderMenu.length;r++)for(var s=0;s<e.orderMenu.length;s++)e.orderMenu[r].group===e.orderMenu[s].group&&(t.includes(e.orderMenu[r].group)||t.push(e.orderMenu[r].group));for(var a=0;a<t.length;a++)n.push({group_name:t[a],items:[]});for(var i=0;i<n.length;i++)for(var j=0;j<e.orderMenu.length;j++)n[i].group_name===e.orderMenu[j].group&&n[i].items.push(e.orderMenu[j]);var u=n.map((function(e){return Object(o.jsx)(z,{title:e.group_name,content:e.items,children:e.items.map((function(e){return Object(o.jsx)(W,{name:e.name,price:e.value,description:e.description},e.name)}))},e.group_name)}));return Object(o.jsx)("div",{className:"menuContainer",children:u})};var Y=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(y,{}),Object(o.jsxs)("div",{className:"menuandCart",children:[Object(o.jsx)(K,{}),Object(o.jsx)(J,{})]})]})};var Q=function(){var e=Object(c.useContext)(x),t=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useRef)(),s=Object(c.useState)(""),a=Object(u.a)(s,2),l=a[0],d=a[1],b=Object(c.useState)(!1),O=Object(u.a)(b,2),h=O[0],m=O[1],p=Object(j.g)();function g(){return(g=Object(v.a)(f.a.mark((function c(s){return f.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(s.preventDefault(),n.current.value===r.current.value){c.next=3;break}return c.abrupt("return",d("Passwords do not match"));case 3:return c.prev=3,d(""),m(!0),c.next=8,e.signUp(t.current.value,n.current.value);case 8:p.push("/"),m(!1),c.next=15;break;case 12:c.prev=12,c.t0=c.catch(3),d("Failed to create account");case 15:case"end":return c.stop()}}),c,null,[[3,12]])})))).apply(this,arguments)}return Object(o.jsxs)("div",{children:[Object(o.jsx)(y,{}),Object(o.jsx)("h2",{className:"signinTitle",children:"Sign Up"}),Object(o.jsx)("h3",{children:l}),Object(o.jsxs)("form",{className:"signinForm",onSubmit:function(e){return g.apply(this,arguments)},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Email: "}),Object(o.jsx)("input",{type:"text",ref:t,required:!0})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Password: "}),Object(o.jsx)("input",{type:"text",ref:n,required:!0})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Confirm Password: "}),Object(o.jsx)("input",{type:"text",ref:r,required:!0})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{disabled:h,className:"signInFormBtn",type:"submit",children:"Sign Up"})})]}),Object(o.jsxs)("h3",{className:"alreadyAcc",children:["Already have an account?",Object(o.jsx)(i.b,{to:"/login",children:Object(o.jsx)("button",{className:"logInFormBtn",children:"Log In"})})]})]})};var X=function(e){var t=2.5*e.subtotal/100,n=e.subtotal+t+t+30,c=Math.round(n),r=e.items.map((function(e,t){return Object(o.jsxs)("p",{children:[e.name," x ",e.qty]},t)}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("h4",{children:["Contact: ",e.contact]}),Object(o.jsxs)("h3",{children:["Delivery Location:  ",e.location]}),r,Object(o.jsxs)("h5",{children:["Total: ",c]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{disabled:e.accepted,style:{backgroundColor:e.accepted?"grey":"rgb(248, 107, 88)"},children:"Pending"}),Object(o.jsx)("button",{disabled:!e.accepted,style:{backgroundColor:e.accepted?"rgb(50, 223, 58)":"grey"},children:"Accepted"})]})]})};var Z=function(){var e=Object(c.useContext)(x),t=Object(c.useState)([]),n=Object(u.a)(t,2),r=n[0],s=n[1],a=h.collection("orders");Object(c.useEffect)((function(){a.where("uid","==",e.currentUser.uid).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),s(t)}))}),[]);var i=r.map((function(e,t){return Object(o.jsx)(X,{name:e.name,location:e.location,contact:e.contact,subtotal:e.subTotal,items:e.items,accepted:e.orderAccepted},t)}));return Object(o.jsxs)("div",{className:"homePage",children:[Object(o.jsx)(y,{}),Object(o.jsx)("div",{className:"currentorderContainer",children:i})]})};var $=function(e){var t=2.5*e.subtotal/100,n=e.subtotal+t+t+30,c=Math.round(n),r=e.items.map((function(e,t){return Object(o.jsxs)("p",{children:[e.name," x ",e.qty]},t)}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("h4",{children:["Contact: ",e.contact]}),Object(o.jsxs)("h3",{children:["Delivery Location:  ",e.location]}),r,Object(o.jsxs)("h5",{children:["Total: ",c]}),Object(o.jsx)("div",{children:e.accepted||e.rejected?Object(o.jsxs)("h3",{children:["Order ",e.accepted?"Accepted":"Rejected"]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{onClick:function(){e.onAcceptOrder(e.orderId)},children:"Accept"}),Object(o.jsx)("button",{onClick:function(){e.onRejectOrder(e.orderId)},children:"Reject"})]})})]})};var ee=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!0),a=Object(u.a)(s,2),i=a[0],j=a[1],l=h.collection("orders");function d(e){l.doc(e).update({orderAccepted:!0}),j(!1)}function b(e){l.doc(e).update({orderRejected:!0}),j(!1)}Object(c.useEffect)((function(){l.onSnapshot((function(e){r(e.docs.map((function(e){return Object(k.a)(Object(k.a)({},e.data()),{},{id:e.id})})))}))}),[]);var O=n.map((function(e,t){return Object(o.jsx)($,{name:e.name,location:e.location,contact:e.contact,subtotal:e.subTotal,items:e.items,accepted:e.orderAccepted,rejected:e.orderRejected,orderId:e.id,onAcceptOrder:d,onRejectOrder:b,toggleButton:i},t)}));return Object(o.jsx)("div",{className:"currentorderContainer",children:O})};var te=function(e){return Object(o.jsxs)("div",{className:"sideBar",children:[Object(o.jsx)("button",{className:"ordrBtn",onClick:function(){e.displayOrderPage(!0),e.displayMenuPage(!1)},children:"Orders"}),Object(o.jsx)("button",{onClick:function(){e.displayOrderPage(!1),e.displayMenuPage(!0)},children:"Menu"})]})};var ne=function(e){var t=Object(c.useState)(!1),n=Object(u.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)(""),i=Object(u.a)(a,2),j=i[0],l=i[1],d=Object(c.useRef)(),b=Object(c.useRef)(),O=Object(c.useRef)(),x=Object(c.useRef)(),m=h.collection("menu");function p(){return(p=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),t={group:d.current.value,name:b.current.value,description:O.current.value,value:parseInt(x.current.value)},e.next=4,m.add(t);case 4:l("".concat(b.current.value," has been added to group ").concat(d.current.value)),d.current.value=null,b.current.value=null,O.current.value=null,x.current.value=null,s(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.jsxs)("div",{className:"addItemsContainer",style:{display:e.display?"block":"none"},children:[Object(o.jsx)("h4",{children:j}),Object(o.jsxs)("form",{className:"signinForm",onSubmit:function(e){e.preventDefault()},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Group(case sensitive): "}),Object(o.jsx)("input",{type:"text",ref:d,required:!0})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Name: "}),Object(o.jsx)("input",{type:"text",ref:b,required:!0})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Description: "}),Object(o.jsx)("input",{type:"text",ref:O,required:!0})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Value: "}),Object(o.jsx)("input",{type:"text",ref:x,required:!0})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{disabled:r,className:"signInFormBtn",onClick:function(){!function(){p.apply(this,arguments)}()},type:"submit",children:"Add Item to Menu"})})]})]})};var ce=function(e){var t=Object(c.useContext)(N).orderMenu,n=Object(c.useState)(""),r=Object(u.a)(n,2),s=r[0],a=r[1],i=Object(c.useState)(!1),j=Object(u.a)(i,2),l=j[0],d=j[1],b=Object(c.useState)(""),O=Object(u.a)(b,2),x=O[0],m=O[1],p=h.collection("menu"),g=Object(c.useRef)(),y=Object(c.useRef)(),C=Object(c.useRef)(),k=Object(c.useRef)();function I(){return(I=Object(v.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),n={group:g.current.value,name:y.current.value,description:C.current.value,value:parseInt(k.current.value),id:t},e.next=4,p.doc(t).update(n);case 4:m("Item ".concat(y.current.value," has been updated.")),d(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=t.map((function(e){return Object(o.jsx)("option",{value:e.id,children:e.name},e.id)})),A=t.filter((function(e){return e.id===s})).map((function(e){return Object(o.jsxs)("form",{className:"signinForm",onSubmit:function(e){e.preventDefault()},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Group(case sensitive): "}),Object(o.jsx)("input",{type:"text",ref:g,defaultValue:e.group})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Name: "}),Object(o.jsx)("input",{type:"text",ref:y,defaultValue:e.name})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Description: "}),Object(o.jsx)("input",{type:"text",ref:C,defaultValue:e.description})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Value: "}),Object(o.jsx)("input",{type:"text",ref:k,defaultValue:e.value})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{disabled:l,className:"signInFormBtn",type:"submit",onClick:function(){!function(e){I.apply(this,arguments)}(e.id)},children:"Edit Item"})})]},e.id)}));return Object(o.jsxs)("div",{style:{display:e.display?"none":"block"},className:"editItemsContainer",children:[Object(o.jsx)("select",{onChange:function(e){a(e.target.value)},children:S}),Object(o.jsx)("h4",{children:x}),A]})};var re=function(){var e=Object(c.useState)(!0),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(o.jsxs)("div",{className:"menuEditContainer",children:[Object(o.jsxs)("div",{className:"navBtn",children:[Object(o.jsx)("button",{onClick:function(){r(!0)},children:"Add Item"}),Object(o.jsx)("button",{onClick:function(){r(!1)},children:"Edit Item"})]}),Object(o.jsx)(ne,{display:n}),Object(o.jsx)(ce,{display:n})]})};var se=function(){var e=Object(c.useState)(!0),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),a=Object(u.a)(s,2),i=a[0],j=a[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(y,{}),Object(o.jsxs)("div",{className:"adminPageContainer",children:[Object(o.jsx)(te,{displayOrderPage:r,displayMenuPage:j}),Object(o.jsx)("div",{className:"adminDetails",style:{display:n?"block":"none"},children:Object(o.jsx)(ee,{})}),Object(o.jsx)("div",{className:"adminDetails",style:{display:i?"block":"none"},children:Object(o.jsx)(re,{})})]})]})};var ae=function(){return Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsx)(j.d,{children:Object(o.jsx)(j.b,{exact:!0,path:"/",children:Object(o.jsx)(V,{})})}),Object(o.jsx)(j.d,{children:Object(o.jsx)(j.b,{path:"/orderonline",children:Object(o.jsx)(Y,{})})}),Object(o.jsx)(j.d,{children:Object(o.jsx)(j.b,{path:"/signin",children:Object(o.jsx)(Q,{})})}),Object(o.jsx)(j.d,{children:Object(o.jsx)(j.b,{path:"/login",children:Object(o.jsx)(G,{})})}),Object(o.jsx)(j.d,{children:Object(o.jsx)(j.b,{path:"/checkoutpage",children:Object(o.jsx)(R,{})})}),Object(o.jsx)(j.d,{children:Object(o.jsx)(j.b,{path:"/vieworders",children:Object(o.jsx)(Z,{})})}),Object(o.jsx)(j.d,{children:Object(o.jsx)(j.b,{path:"/adminpage",children:Object(o.jsx)(se,{})})})]})};a.a.render(Object(o.jsx)(m,{children:Object(o.jsx)(A,{children:Object(o.jsx)(i.a,{basename:"/bonfireburgers",children:Object(o.jsx)(ae,{})})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.f0c8c13f.chunk.js.map