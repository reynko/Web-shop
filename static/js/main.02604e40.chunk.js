(this.webpackJsonpwebshop=this.webpackJsonpwebshop||[]).push([[0],{102:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n(0),c=n(22),i=n.n(c),s=n(16),o=n.n(s),d=n(21),l=n(35),u=n(47),j=new(n.n(u).a)("pk_210350539df5401ceeef038dd2d4afd9d47ca3084dbfb",!0),b=n(118),p=n(119),m=n(120),h=n(121),x=n(122),f=n(123),O=n.p+"static/media/icon.0ab1ab26.png",g=n(19),v=n(116),y=n(10),w=Object(v.a)((function(t){return{appBar:Object(g.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},t.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(g.a)({marginRight:t.spacing(2)},t.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(g.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(y.b)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(y.b)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(g.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}})),C=n(8),k=n(20),N=function(t){var e=t.totalItems,n=w(),r=Object(C.f)();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(b.a,{position:"fixed",className:n.appBar,color:"inherit",children:Object(a.jsxs)(p.a,{children:[Object(a.jsxs)(m.a,{component:k.b,to:"/",variant:"h6",className:n.title,color:"inherit",children:[Object(a.jsx)("img",{src:O,alt:"Soy_Flames",height:"25px",className:n.image}),"Soy_Flames"]}),Object(a.jsx)("div",{className:n.grow}),"/"===r.pathname&&Object(a.jsx)("div",{className:n.button,children:Object(a.jsx)(h.a,{component:k.b,to:"/cart","aria-label":"Show cart items",color:"inherit",children:Object(a.jsx)(x.a,{badgeContent:e,color:"secondary",children:Object(a.jsx)(f.a,{})})})})]})})})},_=n(129),B=n(124),R=n(125),S=n(126),A=n(127),I=n(128),T=Object(v.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardAction:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),F=function(t){var e=t.product,n=t.onAddToCart,r=T();return Object(a.jsxs)(B.a,{className:r.root,children:[Object(a.jsx)(R.a,{className:r.media,image:e.media.source,title:"candle"}),Object(a.jsxs)(S.a,{children:[Object(a.jsxs)("div",{className:r.cardContent,children:[Object(a.jsx)(m.a,{variant:"h5",gutterBottom:!0,children:e.name}),Object(a.jsx)(m.a,{variant:"h5",gutterBottom:!0,children:e.price.formatted_with_symbol})]}),Object(a.jsx)(m.a,{dangerouslySetInnerHTML:{__html:e.description},variant:"body2",color:"textSecondary"})]}),Object(a.jsx)(A.a,{disableSpacing:!0,className:r.cardAction,children:Object(a.jsx)(h.a,{"aria-label":"Add to Cart",onClick:function(){return n(e.id,1)},children:Object(a.jsx)(I.a,{})})})]})},E=Object(v.a)((function(t){return{toolbar:t.mixins.toolbar,content:{flexGrow:1,backgroundColor:t.palette.background.default,padding:t.spacing(3)},root:{flexGrow:1}}})),L=function(t){var e=t.products,n=t.onAddToCart,r=E();return Object(a.jsxs)("main",{className:r.content,children:[Object(a.jsx)("div",{className:r.toolbar}),Object(a.jsx)(_.a,{container:!0,justify:"center",spacing:4,children:e.map((function(t){return Object(a.jsx)(_.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(a.jsx)(F,{product:t,onAddToCart:n})},t.id)}))})]})},q=n(130),D=n(131),G=Object(v.a)((function(t){var e;return{toolbar:t.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(e={minWidth:"150px"},Object(g.a)(e,t.breakpoints.down("xs"),{marginBottom:"5px"}),Object(g.a)(e,t.breakpoints.up("xs"),{marginRight:"20px"}),e),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"}}})),Q=Object(v.a)((function(){return{media:{height:260},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),U=function(t){var e=t.item,n=t.onRemoveFromCart,r=t.onUpdateCartQuantity,c=Q();return Object(a.jsxs)(B.a,{children:[Object(a.jsx)(R.a,{image:e.media.source,alt:e.name,className:c.media}),Object(a.jsxs)(S.a,{className:c.cardContent,children:[Object(a.jsx)(m.a,{variant:"h4",children:e.name}),Object(a.jsx)(m.a,{variant:"h4",children:e.line_total.formatted_with_symbols})]}),Object(a.jsxs)(A.a,{className:c.cardActions,children:[Object(a.jsxs)("div",{className:c.buttons,children:[Object(a.jsx)(q.a,{type:"button",size:"small",onClick:function(){return r(e.id,e.quantity-1)},children:"-"}),Object(a.jsx)(m.a,{children:e.quantity}),Object(a.jsx)(q.a,{type:"button",size:"small",onClick:function(){return r(e.id,e.quantity+1)},children:"+"})]}),Object(a.jsx)(q.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return n(e.id)},children:"Remove"})]})]})},z=function(t){var e=t.cart,n=t.handleEmptyCart,r=t.handleRemoveFromCart,c=t.handleUpdateCartQuantity,i=G(),s=function(){return Object(a.jsxs)(m.a,{variant:"subtitle1",children:["You have no items in your shopping cart,",Object(a.jsx)(k.b,{to:"/",className:i.link,children:"start adding some"})]})},o=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(_.a,{container:!0,spacing:3,children:e.line_items.map((function(t){return Object(a.jsx)(_.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(U,{item:t,onUpdateCartQuantity:c,onRemoveFromCart:r})},t.id)}))}),Object(a.jsxs)("div",{className:i.cardDetails,children:[Object(a.jsxs)(m.a,{variant:"h4",children:["SubTotal: ",e.subtotal.formatted_with_symbol]}),Object(a.jsx)("div",{children:Object(a.jsx)(q.a,{className:i.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:n,children:"Empty Cart"})})]})]})};return e.line_items?Object(a.jsxs)(D.a,{children:[Object(a.jsx)("div",{className:i.toolbar}),Object(a.jsx)(m.a,{className:i.title,variant:"h3",gutterBottom:!0,children:"Your Shopping Cart "}),e.line_items.length?Object(a.jsx)(o,{}):Object(a.jsx)(s,{})]}):"Loading..."},W=function(){var t=Object(r.useState)([]),e=Object(l.a)(t,2),n=e[0],c=e[1],i=Object(r.useState)({}),s=Object(l.a)(i,2),u=s[0],b=s[1],p=function(){var t=Object(d.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.products.list();case 2:e=t.sent,n=e.data,c(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(d.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=b,t.next=3,j.cart.retrieve();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(d.a)(o.a.mark((function t(e,n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.cart.add(e,n);case 2:a=t.sent,b(a.cart);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),x=function(){var t=Object(d.a)(o.a.mark((function t(e,n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.cart.update(e,{quantity:n});case 2:a=t.sent,b(a.cart);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),f=function(){var t=Object(d.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.cart.remove(e);case 2:n=t.sent,b(n.cart);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(d.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.cart.empty();case 2:e=t.sent,b(e.cart);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){p(),m()}),[]),Object(a.jsx)(k.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)(N,{totalItems:u.total_items}),Object(a.jsxs)(C.c,{children:[Object(a.jsx)(C.a,{exact:!0,path:"/",children:Object(a.jsx)(L,{products:n,onAddToCart:h})}),Object(a.jsx)(C.a,{exact:!0,path:"/cart",children:Object(a.jsx)(z,{cart:u,handleUpdateCartQuantity:x,handleRemoveFromCart:f,handleEmptyCart:O})})]})]})})};i.a.render(Object(a.jsx)(W,{}),document.getElementById("root"))}},[[102,1,2]]]);
//# sourceMappingURL=main.02604e40.chunk.js.map