(this.webpackJsonpfilter=this.webpackJsonpfilter||[]).push([[0],{15:function(e,t,s){},22:function(e,t,s){"use strict";s.r(t);var r=s(1),o=s.n(r),a=s(10),n=s.n(a),i=(s(15),s(2)),c=s(3),l=s(6),g=s(5),m=s(4),u=s(7),h=s(0),p=function(e){Object(g.a)(s,e);var t=Object(m.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){var e=this,t=this.props.filters.map((function(t,s){var r=e.props.selected===t?"btn-info":"btn-outline-secondary";return Object(h.jsx)("button",{style:{margin:"10px"},type:"button",className:"btn ".concat(r),value:t,onClick:e.props.onSelectFilter,children:t},Object(u.uuid)())}));return Object(h.jsx)("div",{className:"tool",children:t})}}]),s}(r.Component),d=function(e){Object(g.a)(s,e);var t=Object(m.a)(s);function s(e){return Object(i.a)(this,s),t.call(this,e)}return Object(c.a)(s,[{key:"render",value:function(){var e=this.props.data.map((function(e){return Object(h.jsx)("div",{className:"col-lg-3 col-md-6 mb-2",name:e.category,children:Object(h.jsx)("img",{style:{width:"400px"},className:"img-fluid mb-4",src:e.img})},Object(u.uuid)())}));return Object(h.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:Object(h.jsx)("div",{className:"row",children:e})})}}]),s}(r.Component),b=[{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",category:"Business Cards"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",category:"Business Cards"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",category:"Business Cards"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",category:"Flayers"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",category:"Business Cards"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",category:"Business Cards"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",category:"Flayers"}],j=(s(9),function(e){Object(g.a)(s,e);var t=Object(m.a)(s);function s(e){var r;return Object(i.a)(this,s),(r=t.call(this,e)).filters=["All","Websites","Flayers","Business Cards"],r.state={selected:"All",filters:["All","Websites","Flayers","Business Cards"],projects:b},r.handleClick=r.handleClick.bind(Object(l.a)(r)),r}return Object(c.a)(s,[{key:"handleClick",value:function(e){var t=e.target.value;if(this.setState({selected:t}),"All"!==t){var s=b.filter((function(e){return e.category===t}));this.setState({projects:s})}else this.setState({projects:b})}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"app",style:{display:"flex",flexWrap:"wrap"},children:[Object(h.jsx)(p,{filters:this.state.filters,selected:this.state.selected,onSelectFilter:this.handleClick}),Object(h.jsx)(d,{data:this.state.projects,selected:this.state.selected})]})}}]),s}(r.Component));var y=function(){return Object(h.jsx)("div",{className:"bigApp",children:Object(h.jsx)(j,{})})},f=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,23)).then((function(t){var s=t.getCLS,r=t.getFID,o=t.getFCP,a=t.getLCP,n=t.getTTFB;s(e),r(e),o(e),a(e),n(e)}))};n.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root")),f()},9:function(e,t,s){}},[[22,1,2]]]);
//# sourceMappingURL=main.a6625eea.chunk.js.map