(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[5],{211:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(193),o=n(98),i=n(21);n(97);t.default=function(){return r.a.createElement(c.a,{lg:!0,className:"article"},r.a.createElement("div",{className:"flex-container"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("h1",{className:"my-brand"},i.a.heading),r.a.createElement("div",null,r.a.createElement(o.a,{src:"intro.md"}))),r.a.createElement("div",{className:"col-md-4 justify-center"},r.a.createElement("img",{className:"my-frame",src:"/portfolio/assets/images/graduation.png"}))))}},90:function(e,t,n){},91:function(e,t,n){var a={"./genetic-music.md":92,"./intro.md":93,"./ray-tracer.md":94,"./structure-from-motion.md":95,"./triolingo.md":96};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=91},92:function(e,t,n){e.exports=n.p+"static/media/genetic-music.d41d8cd9.md"},93:function(e,t,n){e.exports=n.p+"static/media/intro.90d5e709.md"},94:function(e,t,n){e.exports=n.p+"static/media/ray-tracer.e0b4c9f0.md"},95:function(e,t,n){e.exports=n.p+"static/media/structure-from-motion.3eafce2b.md"},96:function(e,t,n){e.exports=n.p+"static/media/triolingo.c7384a43.md"},97:function(e,t,n){},98:function(e,t,n){"use strict";var a=n(72),r=n(73),c=n(75),o=n(74),i=n(0),s=n.n(i),u=n(76),m=n.n(u),l=n(89),d=n(113),f=n.n(d),p=n(115);var v=function(e){var t=Object(l.a)(Object(l.a)({},e),{},{plugins:[p.a],renderers:Object(l.a)(Object(l.a)({},e.renderers),{},{math:function(e){return s.a.createElement(f.a.Node,{formula:e.value})},inlineMath:function(e){return s.a.createElement(f.a.Node,{inline:!0,formula:e.value})}})});return s.a.createElement(f.a.Provider,{input:"tex"},s.a.createElement(m.a,Object.assign({escapeHtml:!1},t)))},h=(n(90),function(e){Object(c.a)(i,e);var t=Object(o.a)(i);function i(){var e;return Object(a.a)(this,i),(e=t.call(this)).state={markdown:""},e}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var e=this;fetch(n(91)("./".concat(this.props.src))).then((function(e){return e.text()})).then((function(t){return e.setState({markdown:t})}))}},{key:"render",value:function(){console.log(this.props.source);var e=this.state.markdown;return console.log(e),s.a.createElement(v,null,e)}}]),i}(i.Component));t.a=h}}]);
//# sourceMappingURL=5.88953ce7.chunk.js.map