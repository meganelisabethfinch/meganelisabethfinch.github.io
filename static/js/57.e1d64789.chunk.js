(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[57],{4057:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return R}});var n=r(1413),i=r(2791),c=r(2677),o=r(7462),a=r(3366),s=r(1694),u=r.n(s),f=r(162),l=r(6543),p=function(t){return i.forwardRef((function(e,r){return i.createElement("div",(0,o.Z)({},e,{ref:r,className:u()(e.className,t)}))}))},d=r(7338),m=["bsPrefix","className","variant","as"],b=i.forwardRef((function(t,e){var r=t.bsPrefix,n=t.className,c=t.variant,s=t.as,l=void 0===s?"img":s,p=(0,a.Z)(t,m),d=(0,f.vE)(r,"card-img");return i.createElement(l,(0,o.Z)({ref:e,className:u()(c?d+"-"+c:d,n)},p))}));b.displayName="CardImg",b.defaultProps={variant:null};var g=b,x=["bsPrefix","className","bg","text","border","body","children","as"],v=p("h5"),y=p("h6"),h=(0,l.Z)("card-body"),j=(0,l.Z)("card-title",{Component:v}),Z=(0,l.Z)("card-subtitle",{Component:y}),O=(0,l.Z)("card-link",{Component:"a"}),N=(0,l.Z)("card-text",{Component:"p"}),P=(0,l.Z)("card-header"),w=(0,l.Z)("card-footer"),E=(0,l.Z)("card-img-overlay"),S=i.forwardRef((function(t,e){var r=t.bsPrefix,n=t.className,c=t.bg,s=t.text,l=t.border,p=t.body,m=t.children,b=t.as,g=void 0===b?"div":b,v=(0,a.Z)(t,x),y=(0,f.vE)(r,"card"),j=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return i.createElement(d.Z.Provider,{value:j},i.createElement(g,(0,o.Z)({ref:e},v,{className:u()(n,y,c&&"bg-"+c,s&&"text-"+s,l&&"border-"+l)}),p?i.createElement(h,null,m):m))}));S.displayName="Card",S.defaultProps={body:!1},S.Img=g,S.Title=j,S.Subtitle=Z,S.Body=h,S.Link=O,S.Text=N,S.Header=P,S.Footer=w,S.ImgOverlay=E;var k=S,C=r(1523),D=r(184),T=function(t){return(0,D.jsx)("li",{class:"cards_item",children:(0,D.jsx)(k,{className:"blogCard card border-0",children:(0,D.jsxs)(C.rU,{className:"unstyled-link",to:{pathname:"/blog/".concat(t.link)},children:[(0,D.jsx)(k.Img,{className:"blogCardImg",variant:"top",src:r(1134)("./".concat(t.img))}),(0,D.jsxs)(k.Body,{children:[(0,D.jsx)(k.Title,{children:(0,D.jsx)("b",{children:t.title})}),(0,D.jsx)(k.Text,{children:t.text}),(0,D.jsxs)(k.Subtitle,{className:"mb-2 text-muted d-flex justify-content-between",children:[(0,D.jsx)("div",{children:t.type}),(0,D.jsx)("div",{children:t.date.toLocaleDateString()})]})]})]})})})},I=r(2082),R=function(){return(0,D.jsx)(c.Z,{children:(0,D.jsx)("ul",{class:"cards",children:I.qm.filter((function(t){return t.display})).map((function(t){return(0,D.jsx)(T,(0,n.Z)({link:t.id},t.card),t.id)}))})})}},2677:function(t,e,r){"use strict";var n=r(7462),i=r(3366),c=r(1694),o=r.n(c),a=r(2791),s=r(162),u=["bsPrefix","className","as"],f=["xl","lg","md","sm","xs"],l=a.forwardRef((function(t,e){var r=t.bsPrefix,c=t.className,l=t.as,p=void 0===l?"div":l,d=(0,i.Z)(t,u),m=(0,s.vE)(r,"col"),b=[],g=[];return f.forEach((function(t){var e,r,n,i=d[t];if(delete d[t],"object"===typeof i&&null!=i){var c=i.span;e=void 0===c||c,r=i.offset,n=i.order}else e=i;var o="xs"!==t?"-"+t:"";e&&b.push(!0===e?""+m+o:""+m+o+"-"+e),null!=n&&g.push("order"+o+"-"+n),null!=r&&g.push("offset"+o+"-"+r)})),b.length||b.push(m),a.createElement(p,(0,n.Z)({},d,{ref:e,className:o().apply(void 0,[c].concat(b,g))}))}));l.displayName="Col",e.Z=l},1134:function(t,e,r){var n={"./cosmic-taxi.jpg":512,"./cosmic-taxi.png":1584,"./profile.png":3121,"./ray-tracer.png":1728,"./sfm-thumb.png":6189,"./structure-from-motion-thumb.png":2497,"./structure-from-motion/complex-pipeline.png":9552,"./structure-from-motion/midpoint.png":772,"./structure-from-motion/newnham-matches.png":5940,"./structure-from-motion/simple-pipeline.png":4664,"./structure-from-motion/triangulation.png":33,"./test.png":3363,"./triolingo.png":2232};function i(t){var e=c(t);return r(e)}function c(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=c,t.exports=i,i.id=1134},512:function(t,e,r){"use strict";t.exports=r.p+"static/media/cosmic-taxi.3274a024c2f15c190a79.jpg"},1584:function(t,e,r){"use strict";t.exports=r.p+"static/media/cosmic-taxi.3946e980dc915cc5acaa.png"},3121:function(t,e,r){"use strict";t.exports=r.p+"static/media/profile.22132bd9011aa0a1f531.png"},1728:function(t,e,r){"use strict";t.exports=r.p+"static/media/ray-tracer.bcf34d9073a991273c27.png"},6189:function(t,e,r){"use strict";t.exports=r.p+"static/media/sfm-thumb.743ff7479ba80dda4db2.png"},2497:function(t,e,r){"use strict";t.exports=r.p+"static/media/structure-from-motion-thumb.6657527e6eb99d344f6e.png"},9552:function(t,e,r){"use strict";t.exports=r.p+"static/media/complex-pipeline.71e35e7379adcaa27589.png"},772:function(t,e,r){"use strict";t.exports=r.p+"static/media/midpoint.63f78947a3f92ec86f00.png"},5940:function(t,e,r){"use strict";t.exports=r.p+"static/media/newnham-matches.a94cf2c73a6f00a824c8.png"},4664:function(t,e,r){"use strict";t.exports=r.p+"static/media/simple-pipeline.06afc9532b975d8922ae.png"},33:function(t,e,r){"use strict";t.exports=r.p+"static/media/triangulation.7aa312b99ac69ad66de3.png"},3363:function(t,e,r){"use strict";t.exports=r.p+"static/media/test.bcf34d9073a991273c27.png"},2232:function(t,e,r){"use strict";t.exports=r.p+"static/media/triolingo.4ce50cb6bd2a6cb02942.png"},4942:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n=r(9142);function i(t,e,r){return(e=(0,n.Z)(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},1413:function(t,e,r){"use strict";r.d(e,{Z:function(){return c}});var n=r(4942);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},9142:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n=r(1002);function i(t){var e=function(t,e){if("object"!==(0,n.Z)(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!==(0,n.Z)(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===(0,n.Z)(e)?e:String(e)}},1002:function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}r.d(e,{Z:function(){return n}})}}]);
//# sourceMappingURL=57.e1d64789.chunk.js.map