(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),l=n(11),i=n.n(l),a=(n(39),n(7)),s=(n.p,n(40),n(13)),o=n(34),j=n(9),d=n.n(j),h=n(1),u=function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)(s.a,{onSubmit:function(t){t.preventDefault();var n=document.getElementById("formBasicUsername").value,c=document.getElementById("formBasicPassword").value;console.log(n,c),d.a.post("/api/admin/login",{username:n,password:c}).then((function(e){return e.data})).then((function(t){console.log(t),"Valid"==t.type&&"Success"==t.status&&e.handleClose()}))},children:[Object(h.jsxs)(s.a.Group,{controlId:"formBasicUsername",children:[Object(h.jsx)(s.a.Label,{children:"Username"}),Object(h.jsx)(s.a.Control,{type:"username",placeholder:"Enter username"})]}),Object(h.jsxs)(s.a.Group,{controlId:"formBasicPassword",children:[Object(h.jsx)(s.a.Label,{children:"Password"}),Object(h.jsx)(s.a.Control,{type:"password",placeholder:"Password"})]}),Object(h.jsx)(o.a,{variant:"primary",type:"submit",children:"Submit"})]})})},b=n(69),O=(n(63),n(14)),x=n(12),p=n(68),f=(n(64),n(15)),m=n(67),g=function(e){var t=Object(c.useState)([]),n=Object(a.a)(t,2),r=n[0],l=n[1],i=Object(c.useState)(e.children.others||[]),j=Object(a.a)(i,2),u=j[0],O=j[1],g=Object(c.useState)({key:"",value:""}),y=Object(a.a)(g,2),v=y[0],C=y[1];Object(c.useEffect)((function(){console.log(e.children.category),d.a.get("/api/category/all").then((function(e){return e.data})).then((function(e){"Valid"===e.type?l(e.data):l([])}))}),[]);var k=Object(c.useState)(null),B=Object(a.a)(k,2),w=B[0],S=B[1];return Object(h.jsxs)(s.a,{style:{width:"100%"},onSubmit:function(t){t.preventDefault();var n={sku:document.getElementById("formBasicSku").value,name:document.getElementById("formBasicBookname").value,oldprice:document.getElementById("formBasicOldPrice").value||0,newprice:document.getElementById("formBasicNewPrice").value||0,imageurl:document.getElementById("formBasicUrlImage").value,description:document.getElementById("formBasicDescription").value,quantity:document.getElementById("formBasicQuantity").value||0,category:document.getElementById("formBasicCategory").value||0,others:u};d.a.post("/api/book/push",{_id:e.children._id,book:n}).then((function(e){return e.data})).then((function(t){"Valid"==t.type?t.err?S(t.err):(e.updateBook(Object(f.a)({_id:e.children._id},n)),e.handleClose()):S(["L\u1ed7i form c\xe1c gi\xe1 tr\u1ecb"])}))},children:[Object(h.jsxs)(b.a,{onHide:function(){return S(null)},show:!!w,children:[Object(h.jsx)(b.a.Header,{closeButton:!0,children:"L\u1ed7i"}),Object(h.jsx)(b.a.Body,{children:w&&w.map((function(e){return Object(h.jsx)("p",{style:{color:"#ff0000"},children:e})}))})]}),Object(h.jsxs)(s.a.Group,{controlId:"formBasicSku",children:[Object(h.jsx)(s.a.Label,{children:"M\xe3 v\u1ea1ch"}),Object(h.jsx)(s.a.Control,{required:!0,defaultValue:e.children.sku,type:"number",placeholder:"Nh\u1eadp m\xe3 v\u1ea1ch"})]}),Object(h.jsxs)(s.a.Group,{controlId:"formBasicBookname",children:[Object(h.jsx)(s.a.Label,{children:"T\xean s\xe1ch"}),Object(h.jsx)(s.a.Control,{required:!0,defaultValue:e.children.name,type:"text",placeholder:"Nh\u1eadp t\xean s\xe1ch"})]}),Object(h.jsxs)(s.a.Group,{controlId:"formBasicCategory",children:[Object(h.jsx)(s.a.Label,{children:"Th\u1ec3 lo\u1ea1i"}),Object(h.jsx)(s.a.Control,{required:!0,value:e.children.category,as:"select",placeholder:"Ch\u1ecdn th\u1ec3 lo\u1ea1i",children:r.map((function(e){return Object(h.jsx)("option",{value:e._id,children:e.name})}))})]}),Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"row",width:"100%"},children:[Object(h.jsxs)(s.a.Group,{controlId:"formBasicOldPrice",children:[Object(h.jsx)(s.a.Label,{children:"Gi\xe1 c\u0169 (\u0111)"}),Object(h.jsx)(s.a.Control,{required:!0,defaultValue:e.children.oldprice||0,type:"number",placeholder:"Nh\u1eadp gi\xe1",step:1e3})]}),Object(h.jsxs)(s.a.Group,{controlId:"formBasicNewPrice",children:[Object(h.jsx)(s.a.Label,{children:"Gi\xe1 m\u1edbi(\u0111)"}),Object(h.jsx)(s.a.Control,{required:!0,defaultValue:e.children.newprice||0,type:"number",placeholder:"Nh\u1eadp gi\xe1",step:1e3})]}),Object(h.jsxs)(s.a.Group,{controlId:"formBasicQuantity",children:[Object(h.jsx)(s.a.Label,{children:"S\u1ed1 l\u01b0\u1ee3ng "}),Object(h.jsx)(s.a.Control,{defaultValue:e.children.quantity,type:"number",placeholder:"Nh\u1eadp s\u1ed1 l\u01b0\u1ee3ng"})]})]}),Object(h.jsxs)(s.a.Group,{controlId:"formBasicUrlImage",children:[Object(h.jsx)(s.a.Label,{children:"\u0110\u01b0\u1eddng d\u1eabn h\xecnh \u1ea3nh"}),Object(h.jsx)(s.a.Control,{defaultValue:e.children.imageurl,placeholder:"Nh\u1eadp \u0111\u01b0\u1eddng d\u1eabn h\xecnh \u1ea3nh"}),Object(h.jsx)(m.a,{src:e.children.imageurl})]}),Object(h.jsxs)(s.a.Group,{controlId:"formBasicDescription",children:[Object(h.jsx)(s.a.Label,{children:"M\xf4 t\u1ea3"}),Object(h.jsx)(s.a.Control,{as:"textarea",rows:10,defaultValue:e.children.description,type:"text",placeholder:"M\xf4 t\u1ea3"})]}),Object(h.jsx)(s.a.Label,{children:"Th\xf4ng tin s\u1ea3n ph\u1ea9m"}),Object(h.jsxs)(p.a,{striped:!0,bordered:!0,hover:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:"Th\xf4ng tin"}),Object(h.jsx)("th",{children:"M\xf4 t\u1ea3"}),Object(h.jsx)("th",{children:"H\xe0nh \u0111\u1ed9ng"})]})}),Object(h.jsxs)("tbody",{children:[u&&u.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t+1}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{value:u[t].key,onChange:function(e){var n=Object(x.a)(u);n[t].key=e.target.value,O(n)}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{value:u[t].value,onChange:function(e){var n=Object(x.a)(u);n[t].value=e.target.value,O(n)}})}),Object(h.jsx)("td",{children:Object(h.jsx)(o.a,{variant:"danger",onClick:function(e){var t=Object(x.a)(u);t.splice(e,1),O(t)},children:"X\xf3a"})})]},t)})),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:u&&u.length}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{placeholder:"V\xed d\u1ee5: n\u0103m xu\u1ea5t b\u1ea3n",value:v.key,onChange:function(e){C(Object(f.a)(Object(f.a)({},v),{},{key:e.target.value}))}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{placeholder:"V\xed d\u1ee5: n\u0103m 2021",value:v.value,onChange:function(e){C(Object(f.a)(Object(f.a)({},v),{},{value:e.target.value}))}})}),Object(h.jsx)("td",{children:Object(h.jsx)(o.a,{onClick:function(){var e=Object(x.a)(u);e.push(v),C({key:"",value:""}),O(e)},children:"Th\xeam"})})]})]})]}),Object(h.jsxs)(o.a,{style:{float:"right"},variant:"primary",type:"submit",children:[e.children._id?"C\u1eadp nh\u1eadt":"Th\xeam"," s\xe1ch"]}),Object(h.jsx)(o.a,{variant:"secondary",onClick:function(){return e.handleClose()},children:"Tho\xe1t"})]})};var y=function(e){var t=Object(c.useState)(null),n=Object(a.a)(t,2),r=n[0],l=n[1],i=Object(c.useState)(null),j=Object(a.a)(i,2),u=j[0],b=j[1];return Object(h.jsxs)(s.a,{style:{width:"100%"},onSubmit:function(t){t.preventDefault(),console.log(r),d.a.post("/api/category/create",{name:r,description:u}).then((function(e){return e.data})).then((function(t){"Valid"===t.type?e.handleClose():alert("L\u1ed7i"+t.err)}))},children:[Object(h.jsxs)(s.a.Group,{children:[Object(h.jsx)(s.a.Label,{children:"T\xean th\u1ec3 lo\u1ea1i"}),Object(h.jsx)(s.a.Control,{type:"text",required:!0,onChange:function(e){l(e.target.value)}})]}),Object(h.jsxs)(s.a.Group,{children:[Object(h.jsx)(s.a.Label,{children:"M\xf4 t\u1ea3"}),Object(h.jsx)(s.a.Control,{as:"textarea",rows:5,onChange:function(e){b(e.target.value)}})]}),Object(h.jsxs)(s.a.Group,{style:{display:"flex",justifyContent:"space-between"},children:[Object(h.jsx)(o.a,{variant:"danger",onClick:e.handleClose,children:"Hu\u1ef7"}),Object(h.jsx)(o.a,{variant:"primary",type:"submit",children:"Th\xeam"})]})]})},v=function(e){var t=Object(c.useState)(1),n=Object(a.a)(t,2),r=n[0],l=n[1],i=Object(c.useState)([]),s=Object(a.a)(i,2),j=s[0],u=s[1],f=Object(c.useState)(null),m=Object(a.a)(f,2),v=m[0],C=m[1];var k=Object(c.useState)(null),B=Object(a.a)(k,2),w=B[0],S=B[1],I=Object(c.useState)(null),L=Object(a.a)(I,2),T=L[0],E=L[1];Object(c.useEffect)((function(){d.a.get("/api/book/query",{params:{limit:30,page:r}}).then((function(e){return e.data})).then((function(e){console.log(e),"Valid"==e.type?u(e.data):u([])}))}),[r]);return Object(h.jsxs)("div",{className:"modal-container",children:[Object(h.jsxs)(b.a,{show:!!w,onHide:function(){return S(null)},backdrop:"static",dialogClassName:"modal-90w",children:[Object(h.jsx)(b.a.Header,{closeButton:!0,children:Object(h.jsxs)(b.a.Title,{children:[w&&w._id?"Edit":"Add"," book"]})}),Object(h.jsx)(b.a.Body,{children:w&&Object(h.jsx)(g,{updateBook:function(e){for(var t=Object(x.a)(j),n=0;n<t.length;n++)if(t[n]._id==e._id)return t[n]=e,void u(t);t.unshift(e),u(t)},handleClose:function(){return S(null)},children:w})})]}),Object(h.jsxs)(b.a,{show:!!v,onHide:function(){return C(null)},backdrop:"static",children:[Object(h.jsx)(b.a.Header,{closeButton:!0,children:Object(h.jsx)(b.a.Title,{children:v&&v.title})}),Object(h.jsx)(b.a.Body,{children:v&&v.message}),Object(h.jsx)(b.a.Footer,{children:v&&v.button&&v.button.map((function(e){return Object(h.jsx)(o.a,{onClick:function(){e.action()},variant:e.style,children:e.title},e.title)}))})]}),Object(h.jsxs)(b.a,{show:!!T,onHide:function(){return E(null)},backdrop:"static",children:[Object(h.jsx)(b.a.Header,{closeButton:!0,children:Object(h.jsx)(b.a.Title,{children:"Th\xeam th\u1ec3 lo\u1ea1i s\xe1ch"})}),Object(h.jsx)(b.a.Body,{children:T&&Object(h.jsx)(y,{handleClose:function(){return E(null)}})})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Qu\u1ea3n l\xed s\xe1ch"}),Object(h.jsxs)("div",{className:"all-btn",children:[Object(h.jsx)(o.a,{className:"btn-new-book",onClick:function(){return S({_id:null})},children:"Th\xeam s\xe1ch"}),Object(h.jsx)(o.a,{className:"btn-new-category",onClick:function(){return E(!0)},children:"Th\xeam Th\u1ec3 lo\u1ea1i"})]})]}),Object(h.jsxs)(p.a,{responsive:!0,className:"table",striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:"Sku"}),Object(h.jsx)("th",{children:"T\xean"}),Object(h.jsx)("th",{children:"Gi\xe1 c\u0169"}),Object(h.jsx)("th",{children:"Gi\xe1 m\u1edbi"}),Object(h.jsx)("th",{children:"S\u1ed1 l\u01b0\u1ee3ng"}),Object(h.jsx)("th",{children:"M\xf4 t\u1ea3"}),Object(h.jsx)("th",{children:"Kh\xe1c"}),Object(h.jsx)("th",{children:"H\xe0nh \u0111\u1ed9ng"})]})}),Object(h.jsx)("tbody",{children:0!=j.length?j.map((function(e,t){var n;return Object(h.jsxs)("tr",{style:{cursor:"pointer"},children:[Object(h.jsx)("td",{children:t+1}),Object(h.jsx)("td",{children:e.sku}),Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{children:e.oldprice}),Object(h.jsx)("td",{children:e.newprice}),Object(h.jsx)("td",{children:e.quantity}),Object(h.jsx)("td",{children:e.description?e.description.substr(0,40)+"...":""}),Object(h.jsxs)("td",{onClick:function(){return S(e)},children:[e.others&&e.others.slice(0,3).map((function(e){return Object(h.jsx)("p",{style:{fontSize:14,margin:0},children:e.key+": "+e.value})})),e.others&&e.others.length>3&&Object(h.jsx)("p",{children:"..."})]}),Object(h.jsxs)("td",{children:[Object(h.jsx)(o.a,{onClick:function(){return S(e)},variant:"secondary",children:"S\u1eeda"}),Object(h.jsx)(o.a,(n={style:{zIndex:1},onClick:function(){C({title:"X\xf3a",message:"B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n x\xf3a s\xe1ch "+e.name,button:[{title:"H\u1ee7y",action:function(){return C(null)}},{title:"X\xf3a",style:"danger",action:function(){var t;console.log(e),t=e._id,d.a.post("/api/book/delete",{_id:t}).then((function(e){return e.data})).then((function(e){if("Valid"==e.type){console.log(e),C(null);for(var n=Object(x.a)(j),c=0;c<n.length;c++)if(n[c]._id==t)return n.splice(c,1),void u(n)}}))}}]})}},Object(O.a)(n,"style",{marginLeft:10}),Object(O.a)(n,"variant","danger"),Object(O.a)(n,"children","X\xf3a"),n))]})]},e._id)})):Object(h.jsx)("tr",{children:"Kh\xf4ng c\xf3 d\u1eef li\u1ec7u"})})]}),Object(h.jsxs)("ul",{className:"btn-page",children:[Object(h.jsx)("li",{children:r>3&&Object(h.jsx)("p",{children:"..."})}),Object(h.jsxs)("li",{onClick:function(){return l(r-2)},children:[r-2>0&&Object(h.jsx)("p",{children:r-2})," "]}),Object(h.jsxs)("li",{onClick:function(){return l(r-1)},children:[r-1>0&&Object(h.jsx)("p",{children:r-1})," "]}),Object(h.jsx)("li",{style:{backgroundColor:"#ff0000"},children:Object(h.jsx)("p",{children:r})}),Object(h.jsx)("li",{onClick:function(){return l(r+1)},children:Object(h.jsx)("p",{children:r+1})}),Object(h.jsx)("li",{onClick:function(){return l(r+2)},children:Object(h.jsx)("p",{children:r+2})}),Object(h.jsxs)("li",{children:[" ",Object(h.jsx)("p",{children:"..."})]})]})]})};var C=function(){console.log(document.cookie.split(";")),Object(c.useEffect)((function(){(function(){var e={};return document.cookie.split(/\s*;\s*/).forEach((function(t){t=t.split(/\s*=\s*/),e[t[0]]=t.splice(1).join("=")})),!!e.admin})()||l()}),[]);var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1],l=function(){return r(!0)};return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)(b.a,{show:n,backdrop:"static",keyboard:!1,children:[Object(h.jsx)(b.a.Header,{children:Object(h.jsx)(b.a.Title,{children:"Login"})}),Object(h.jsx)(b.a.Body,{children:Object(h.jsx)(u,{handleClose:function(){return r(!1)}})})]}),Object(h.jsx)(v,{})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,l=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),l(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root")),k()}},[[65,1,2]]]);
//# sourceMappingURL=main.52485b27.chunk.js.map