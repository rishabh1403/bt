(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{191:function(e,t,a){"use strict";a.r(t),a.d(t,"categoryImageQuery",function(){return u});a(277);var r=a(0),i=a.n(r),n=a(192),s=a.n(n),l=a(206),o=a(209),c=a(204),d=a.n(c),u="1740619792";t.default=function(e){var t=e.data,a=e.pageContext;return i.a.createElement(l.a,null,i.a.createElement(o.a,{home:!0,img:t.stubImage.childImageSharp.fluid}),i.a.createElement("section",{className:s.a.blogs},i.a.createElement("div",{className:s.a.center},a.categories.map(function(e,t){return i.a.createElement(d.a,{fade:!0,className:s.a.title,key:t,to:"/categories/"+e.name},e.name,i.a.createElement("span",{className:s.a.count},"(",e.count,")"))}))))}},206:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(204),s=a.n(n),l=a(182),o=a.n(l),c=a(205),d=[{path:"",text:"home"},{path:"posts",text:"archive"},{path:"categories",text:"categories"},{path:"about",text:"about"},{path:"index.xml",text:"rss"}],u=a(210),f=[{icon:i.a.createElement(c.c,null),url:"mailto:contact@rishabh1403.com"},{icon:i.a.createElement(c.d,null),url:"#"},{icon:i.a.createElement(c.g,null),url:"https://www.twitter.com/rishabhjain1403"},{icon:i.a.createElement(u.a,null),url:"https://www.youtube.com/rishabh1403"},{icon:i.a.createElement(c.e,null),url:"https://www.github.com/rishabh1403"},{icon:i.a.createElement(c.f,null),url:"https://rishabh1403.com/index.xml"}],m=a(207),p=Object(m.a)(function(e){var t=e.title,a=e.subtitle,r=e.className;return i.a.createElement("div",{className:r},i.a.createElement("h5",null,i.a.createElement("span",{className:"title"},t),i.a.createElement("span",null,a)))}).withConfig({displayName:"Logo",componentId:"sc-4d8j14-0"})(["text-transform:uppercase;font-size:1.7rem;h5{letter-spacing:5px;color:var(--primaryColor);margin-bottom:0;margin-top:8px;}.title{color:var(--mainBlack);}span{display:block;}@media (min-width:576px){span{display:inline-block;margin:0 0.35rem;}}"]),h=function(){var e=Object(r.useState)(),t=e[0],a=e[1];return i.a.createElement("nav",{className:o.a.navbar},i.a.createElement("div",{className:o.a.navCenter},i.a.createElement("div",{className:o.a.navHeader},i.a.createElement(p,{title:"Rishabh",subtitle:"Jain"}),i.a.createElement("button",{type:"button",className:o.a.logoBtn,onClick:function(){a(function(e){return!e})}},i.a.createElement(c.a,{className:o.a.logoIcon}))),i.a.createElement("ul",{className:t?o.a.navLinks+" "+o.a.showNav:""+o.a.navLinks},d.map(function(e,t){return i.a.createElement("li",{key:t},i.a.createElement(s.a,{fade:!0,to:"/"+e.path},e.text))})),i.a.createElement("div",{className:o.a.navSocialLinks},f.map(function(e,t){return i.a.createElement("a",{key:t,href:e.url,target:"_blank",rel:"noopener noreferrer"},e.icon)}))))},g=a(183),b=a.n(g),y=function(){return i.a.createElement("footer",{className:b.a.footer},i.a.createElement("div",{className:b.a.links},d.map(function(e,t){return i.a.createElement(s.a,{fade:!0,key:t,to:"/"+e.path},e.text)})),i.a.createElement("div",{className:b.a.icons},f.map(function(e,t){return i.a.createElement("a",{key:t,href:e.url,target:"_blank",rel:"noopener noreferrer"},e.icon)})),i.a.createElement("div",{className:b.a.copyright},"copyright © Rishabh Jain ",(new Date).getFullYear()," all rights reserved",i.a.createElement("div",null,"Made with Gatsby and Love")))};a(184),t.a=function(e){var t=e.children;return i.a.createElement("main",null,i.a.createElement(h,null),t,i.a.createElement(y,null))}},208:function(e,t,a){"use strict";var r=a(4);t.__esModule=!0,t.default=void 0;var i,n=r(a(6)),s=r(a(22)),l=r(a(20)),o=r(a(10)),c=r(a(0)),d=r(a(1)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t},f=Object.create({}),m=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,g=h&&window.IntersectionObserver,b=new WeakMap;var y=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},v=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+l+o+a+i+t+s+n+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},E=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},f,{onLoad:s,onError:d,ref:t,loading:u,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});E.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var w=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&m(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!p&&g&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=y(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,h=e.fixed,g=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,w=e.itemProp,S=e.loading,L=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,o.default)({opacity:L?1:0,transition:N?"opacity "+b+"ms":"none"},l),x="boolean"==typeof g?"lightgray":g,k={transitionDelay:b+"ms"},R=(0,o.default)({opacity:this.state.imgLoaded?0:1},N&&k,l,f),O={title:t,alt:this.state.isVisible?"":a,style:R,className:m};if(p){var z=p;return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),x&&c.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&k)}),z.base64&&c.default.createElement(E,(0,o.default)({src:z.base64},O)),z.tracedSVG&&c.default.createElement(E,(0,o.default)({src:z.tracedSVG},O)),this.state.isVisible&&c.default.createElement("picture",null,z.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),c.default.createElement(E,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,o.default)({alt:a,title:t,loading:S},z))}}))}if(h){var C=h,j=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},n);return"inherit"===n.display&&delete j.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(C.srcSet)},x&&c.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:x,width:C.width,opacity:this.state.imgLoaded?0:1,height:C.height},N&&k)}),C.base64&&c.default.createElement(E,(0,o.default)({src:C.base64},O)),C.tracedSVG&&c.default.createElement(E,(0,o.default)({src:C.tracedSVG},O)),this.state.isVisible&&c.default.createElement("picture",null,C.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),c.default.createElement(E,{alt:a,title:t,width:C.width,height:C.height,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,o.default)({alt:a,title:t,loading:S},C))}}))}return null},t}(c.default.Component);w.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var S=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),L=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});w.propTypes={resolutions:S,sizes:L,fixed:S,fluid:L,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"])};var N=w;t.default=N},209:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(207),s=a(208),l=a.n(s);t.a=Object(n.a)(function(e){var t=e.img,a=e.className,r=e.children;e.home,e.gradient;return i.a.createElement(l.a,{className:a,fluid:t},r)}).withConfig({displayName:"StyledHero",componentId:"sc-1x7e6lr-0"})(["max-height:calc(100vh - 71px);"])},277:function(e,t,a){var r=a(34).f,i=Function.prototype,n=/^\s*function ([^ (]*)/;"name"in i||a(26)&&r(i,"name",{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-templates-categories-js-cbe1cae2bdea0e066be7.js.map