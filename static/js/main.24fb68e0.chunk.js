(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,a){e.exports=a(38)},20:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),l=a.n(r),o=(a(20),a(2)),i=a(13),s=a.n(i),m=a(14);function u(e){var t=e.image;return c.a.createElement("img",{className:"single-photo",src:t.urls.thumb,alt:""})}function h(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(1),i=Object(o.a)(l,2),h=i[0],d=i[1],g=Object(n.useState)(30),p=Object(o.a)(g,2),f=p[0];p[1];Object(n.useEffect)((function(){s.a.get("https://imageseeker.herokuapp.com/api/photos/?per_page=".concat(f,"&page=").concat(h)).then((function(e){console.log(e.data),r(a.concat(e.data))})).catch((function(e){return console.log(e)}))}),[h]);return c.a.createElement("div",{className:"images"},c.a.createElement(m.a,{dataLength:a.length,next:function(){return d(h+1)},hasMore:!0,loader:c.a.createElement("h4",null,"Loading...")},a.map((function(e){return c.a.createElement(u,{key:e.id,image:e})}))))}var d=function(){return c.a.createElement("div",{id:"root"},c.a.createElement("div",{className:"hero is-fullheight is-bold is-info"},c.a.createElement("div",{className:"hero-body"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"header content"},c.a.createElement("h2",{className:"subtitle is-6"},"Keep Scrolling"),c.a.createElement("h1",{className:"title is-1"},"Infinite Image Scroll")),c.a.createElement(h,null)))))};l.a.render(c.a.createElement(d,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.24fb68e0.chunk.js.map