(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h}),a.d(t,"blogListQuery",function(){return g});var r=a(6),n=a.n(r),i=a(0),s=a.n(i),l=a(186),o=a.n(l),c=a(223),d=a(206),u=a(209),f=a(204),m=a.n(f),p=function(e){return e<3?"/":"/page/"+(e-1)},h=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.pageContext,t=e.currentPage,a=e.numPages,r=this.props.data.allMarkdownRemark.edges;return s.a.createElement(d.a,null,s.a.createElement(u.a,{home:!0,img:this.props.data.stubImage.childImageSharp.fluid}),s.a.createElement("section",{className:o.a.blogs},s.a.createElement("div",{className:o.a.center},r.map(function(e,t){return s.a.createElement(c.a,{edge:e,key:t})})),s.a.createElement("div",{className:o.a.meta},s.a.createElement("div",{style:{float:"left"}},s.a.createElement(m.a,{to:p(t),fade:!0,className:"btn-primary"},"Newer Posts")),s.a.createElement("div",{style:{float:"right"}},t<a&&s.a.createElement(m.a,{to:"page/"+(t+1),fade:!0,className:"btn-primary"},"Older Posts")))))},t}(s.a.Component),g="775660033"},206:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(204),s=a.n(i),l=a(182),o=a.n(l),c=a(205),d=[{path:"",text:"home"},{path:"posts",text:"archive"},{path:"categories",text:"categories"},{path:"about",text:"about"},{path:"index.xml",text:"rss"}],u=a(210),f=[{icon:n.a.createElement(c.c,null),url:"mailto:contact@rishabh1403.com"},{icon:n.a.createElement(c.d,null),url:"#"},{icon:n.a.createElement(c.g,null),url:"https://www.twitter.com/rishabhjain1403"},{icon:n.a.createElement(u.a,null),url:"https://www.youtube.com/rishabh1403"},{icon:n.a.createElement(c.e,null),url:"https://www.github.com/rishabh1403"},{icon:n.a.createElement(c.f,null),url:"https://rishabh1403.com/index.xml"}],m=a(207),p=Object(m.a)(function(e){var t=e.title,a=e.subtitle,r=e.className;return n.a.createElement("div",{className:r},n.a.createElement("h5",null,n.a.createElement("span",{className:"title"},t),n.a.createElement("span",null,a)))}).withConfig({displayName:"Logo",componentId:"sc-4d8j14-0"})(["text-transform:uppercase;font-size:1.7rem;h5{letter-spacing:5px;color:var(--primaryColor);margin-bottom:0;margin-top:8px;}.title{color:var(--mainBlack);}span{display:block;}@media (min-width:576px){span{display:inline-block;margin:0 0.35rem;}}"]),h=function(){var e=Object(r.useState)(),t=e[0],a=e[1];return n.a.createElement("nav",{className:o.a.navbar},n.a.createElement("div",{className:o.a.navCenter},n.a.createElement("div",{className:o.a.navHeader},n.a.createElement(p,{title:"Rishabh",subtitle:"Jain"}),n.a.createElement("button",{type:"button",className:o.a.logoBtn,onClick:function(){a(function(e){return!e})}},n.a.createElement(c.a,{className:o.a.logoIcon}))),n.a.createElement("ul",{className:t?o.a.navLinks+" "+o.a.showNav:""+o.a.navLinks},d.map(function(e,t){return n.a.createElement("li",{key:t},n.a.createElement(s.a,{fade:!0,to:"/"+e.path},e.text))})),n.a.createElement("div",{className:o.a.navSocialLinks},f.map(function(e,t){return n.a.createElement("a",{key:t,href:e.url,target:"_blank",rel:"noopener noreferrer"},e.icon)}))))},g=a(183),b=a.n(g),E=function(){return n.a.createElement("footer",{className:b.a.footer},n.a.createElement("div",{className:b.a.links},d.map(function(e,t){return n.a.createElement(s.a,{fade:!0,key:t,to:"/"+e.path},e.text)})),n.a.createElement("div",{className:b.a.icons},f.map(function(e,t){return n.a.createElement("a",{key:t,href:e.url,target:"_blank",rel:"noopener noreferrer"},e.icon)})),n.a.createElement("div",{className:b.a.copyright},"copyright © Rishabh Jain ",(new Date).getFullYear()," all rights reserved",n.a.createElement("div",null,"Made with Gatsby and Love")))};a(184),t.a=function(e){var t=e.children;return n.a.createElement("main",null,n.a.createElement(h,null),t,n.a.createElement(E,null))}},208:function(e,t,a){"use strict";var r=a(4);t.__esModule=!0,t.default=void 0;var n,i=r(a(6)),s=r(a(22)),l=r(a(20)),o=r(a(10)),c=r(a(0)),d=r(a(1)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t},f=Object.create({}),m=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,g=h&&window.IntersectionObserver,b=new WeakMap;var E=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},v=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+l+o+a+n+t+s+i+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:n},f,{onLoad:s,onError:d,ref:t,loading:u,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var w=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&m(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!p&&g&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=E(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,h=e.fixed,g=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,w=e.itemProp,S=e.loading,N=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,o.default)({opacity:N?1:0,transition:L?"opacity "+b+"ms":"none"},l),k="boolean"==typeof g?"lightgray":g,x={transitionDelay:b+"ms"},R=(0,o.default)({opacity:this.state.imgLoaded?0:1},L&&x,l,f),O={title:t,alt:this.state.isVisible?"":a,style:R,className:m};if(p){var z=p;return c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),k&&c.default.createElement(E,{title:t,style:(0,o.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&x)}),z.base64&&c.default.createElement(y,(0,o.default)({src:z.base64},O)),z.tracedSVG&&c.default.createElement(y,(0,o.default)({src:z.tracedSVG},O)),this.state.isVisible&&c.default.createElement("picture",null,z.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),c.default.createElement(y,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,o.default)({alt:a,title:t,loading:S},z))}}))}if(h){var C=h,j=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},i);return"inherit"===i.display&&delete j.display,c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(C.srcSet)},k&&c.default.createElement(E,{title:t,style:(0,o.default)({backgroundColor:k,width:C.width,opacity:this.state.imgLoaded?0:1,height:C.height},L&&x)}),C.base64&&c.default.createElement(y,(0,o.default)({src:C.base64},O)),C.tracedSVG&&c.default.createElement(y,(0,o.default)({src:C.tracedSVG},O)),this.state.isVisible&&c.default.createElement("picture",null,C.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),c.default.createElement(y,{alt:a,title:t,width:C.width,height:C.height,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,o.default)({alt:a,title:t,loading:S},C))}}))}return null},t}(c.default.Component);w.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var S=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),N=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});w.propTypes={resolutions:S,sizes:N,fixed:S,fluid:N,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"])};var L=w;t.default=L},209:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(207),s=a(208),l=a.n(s);t.a=Object(i.a)(function(e){var t=e.img,a=e.className,r=e.children;e.home,e.gradient;return n.a.createElement(l.a,{className:a,fluid:t},r)}).withConfig({displayName:"StyledHero",componentId:"sc-1x7e6lr-0"})(["max-height:calc(100vh - 71px);"])},223:function(e,t,a){"use strict";a(224);var r=a(0),n=a.n(r),i=a(187),s=a.n(i),l=a(208),o=a.n(l),c=a(204),d=a.n(c),u=a(205);t.a=function(e){return n.a.createElement("article",{className:s.a.blog},n.a.createElement("div",{className:s.a.imgContainer},n.a.createElement(o.a,{className:s.a.img,fluid:e.edge.node.frontmatter.image.childImageSharp.fluid}),n.a.createElement(d.a,{to:"/"+e.edge.node.frontmatter.path,fade:!0,className:s.a.link},"Read More"),n.a.createElement("h6",{className:s.a.date},e.edge.node.frontmatter.date)),n.a.createElement("div",{className:s.a.footer},n.a.createElement("h3",null,e.edge.node.frontmatter.title),n.a.createElement("div",{className:s.a.info},n.a.createElement("h4",{className:s.a.details},e.edge.node.frontmatter.description),n.a.createElement("div",{className:s.a.meta},n.a.createElement("div",{className:s.a.readingTime},n.a.createElement(u.b,null),e.edge.node.fields.readingTime.text),n.a.createElement("div",{className:s.a.categories},e.edge.node.frontmatter.categories&&e.edge.node.frontmatter.categories.map(function(e,t){return n.a.createElement(d.a,{key:t,fade:!0,to:"/categories/"+e},"#",e)}))))))}},224:function(e,t,a){"use strict";a(225)("link",function(e){return function(t){return e(this,"a","href",t)}})},225:function(e,t,a){var r=a(13),n=a(21),i=a(25),s=/"/g,l=function(e,t,a,r){var n=String(i(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-8cee257cc04c999d0560.js.map