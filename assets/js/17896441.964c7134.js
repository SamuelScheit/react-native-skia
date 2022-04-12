"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7918],{9255:function(e,t,n){n.r(t),n.d(t,{default:function(){return _e}});var a=n(7294),r=n(6010),l=n(3117),i=n(1614),c=n(8746);function o(e){var t=e.permalink,n=e.title,r=e.subLabel;return a.createElement(c.Z,{className:"pagination-nav__link",to:t},r&&a.createElement("div",{className:"pagination-nav__sublabel"},r),a.createElement("div",{className:"pagination-nav__label"},n))}function s(e){var t=e.previous,n=e.next;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},a.createElement("div",{className:"pagination-nav__item"},t&&a.createElement(o,(0,l.Z)({},t,{subLabel:a.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&a.createElement(o,(0,l.Z)({},n,{subLabel:a.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var m=n(6832),d=n(5601),u=n(4325);var p={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=p[e.versionMetadata.banner];return a.createElement(t,e)}function b(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(c.Z,{to:n,onClick:r},a.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function f(e){var t,n=e.className,l=e.versionMetadata,i=(0,m.Z)().siteConfig.title,c=(0,d.gA)({failfast:!0}).pluginId,o=(0,u.J)(c).savePreferredVersionName,s=(0,d.Jo)(c),p=s.latestDocSuggestion,f=s.latestVersionSuggestion,h=null!=p?p:(t=f).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,r.Z)(n,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(v,{siteTitle:i,versionMetadata:l})),a.createElement("div",{className:"margin-top--md"},a.createElement(b,{versionLabel:f.label,to:h.path,onClick:function(){return o(f.name)}})))}function h(e){var t=e.className,n=(0,u.E6)();return n.banner?a.createElement(f,{className:t,versionMetadata:n}):null}function E(e){var t=e.className,n=(0,u.E6)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},a.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function g(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function y(e){var t=e.lastUpdatedBy;return a.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function N(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement("span",{className:u.kM.common.lastUpdated},a.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(y,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var k=n(102),Z="iconEdit_dcUD",_=["className"];function L(e){var t=e.className,n=(0,k.Z)(e,_);return a.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(Z,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function T(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},a.createElement(L,null),a.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var C="tag_hD8n",O="tagRegular_D6E_",w="tagWithCount_i0QQ";function x(e){var t=e.permalink,n=e.name,l=e.count;return a.createElement(c.Z,{href:t,className:(0,r.Z)(C,l?w:O)},n,l&&a.createElement("span",null,l))}var U="tags_XVD_",A="tag_JSN8";function M(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(U,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return a.createElement("li",{key:n,className:A},a.createElement(x,{name:t,permalink:n}))}))))}var S="lastUpdated_foO9";function P(e){return a.createElement("div",{className:(0,r.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(M,e)))}function j(e){var t=e.editUrl,n=e.lastUpdatedAt,l=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return a.createElement("div",{className:(0,r.Z)(u.kM.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(T,{editUrl:t})),a.createElement("div",{className:(0,r.Z)("col",S)},(n||l)&&a.createElement(N,{lastUpdatedAt:n,formattedLastUpdatedAt:i,lastUpdatedBy:l})))}function B(e){var t=e.content.metadata,n=t.editUrl,l=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,c=t.lastUpdatedBy,o=t.tags,s=o.length>0,m=!!(n||l||c);return s||m?a.createElement("footer",{className:(0,r.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},s&&a.createElement(P,{tags:o}),m&&a.createElement(j,{editUrl:n,lastUpdatedAt:l,lastUpdatedBy:c,formattedLastUpdatedAt:i})):null}var H=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function D(e){var t=e.toc,n=e.className,r=e.linkClassName,l=e.isChild;return t.length?a.createElement("ul",{className:l?void 0:n},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(D,{isChild:!0,toc:e.children,className:n,linkClassName:r}))}))):null}function I(e){var t=e.toc,n=e.className,r=void 0===n?"table-of-contents table-of-contents__left-border":n,i=e.linkClassName,c=void 0===i?"table-of-contents__link":i,o=e.linkActiveClassName,s=void 0===o?void 0:o,m=e.minHeadingLevel,d=e.maxHeadingLevel,p=(0,k.Z)(e,H),v=(0,u.LU)(),b=null!=m?m:v.tableOfContents.minHeadingLevel,f=null!=d?d:v.tableOfContents.maxHeadingLevel,h=(0,u.b9)({toc:t,minHeadingLevel:b,maxHeadingLevel:f}),E=(0,a.useMemo)((function(){if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:b,maxHeadingLevel:f}}),[c,s,b,f]);return(0,u.Si)(E),a.createElement(D,(0,l.Z)({toc:h,className:r,linkClassName:c},p))}var V="tableOfContents_cNA8",R=["className"];function F(e){var t=e.className,n=(0,k.Z)(e,R);return a.createElement("div",{className:(0,r.Z)(V,"thin-scrollbar",t)},a.createElement(I,(0,l.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}var z="tocCollapsible_jdIR",q="tocCollapsibleButton_Fzxq",X="tocCollapsibleContent_MpvI",J="tocCollapsibleExpanded_laf4";function Q(e){var t=e.toc,n=e.className,l=e.minHeadingLevel,c=e.maxHeadingLevel,o=(0,u.uR)({initialState:!0}),s=o.collapsed,m=o.toggleCollapsed;return a.createElement("div",{className:(0,r.Z)(z,!s&&J,n)},a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",q),onClick:m},a.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),a.createElement(u.zF,{lazy:!0,className:X,collapsed:s},a.createElement(I,{toc:t,minHeadingLevel:l,maxHeadingLevel:c})))}var W="anchorWithStickyNavbar_mojV",G="anchorWithHideOnScrollNavbar_R0VQ",K=["as","id"],Y=["as"];function $(e){var t=e.as,n=e.id,c=(0,k.Z)(e,K),o=(0,u.LU)().navbar.hideOnScroll;return n?a.createElement(t,(0,l.Z)({},c,{className:(0,r.Z)("anchor",o?G:W),id:n}),c.children,a.createElement("a",{className:"hash-link",href:"#"+n,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,c)}function ee(e){var t=e.as,n=(0,k.Z)(e,Y);return"h1"===t?a.createElement("h1",(0,l.Z)({},n,{id:void 0}),n.children):a.createElement($,(0,l.Z)({as:t},n))}var te="docItemContainer_vinB",ne="docItemCol_DM6M",ae="tocMobile_TmEX",re={breadcrumbsContainer:"breadcrumbsContainer_Xlws"},le=n(1402);function ie(e){var t=e.children,n=e.href,r="breadcrumbs__link";return n?a.createElement(c.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r,itemProp:"item name"},t)}function ce(e){var t=e.children,n=e.active,l=e.index;return a.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})},t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function oe(){var e=(0,le.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(c.Z,{className:(0,r.Z)("breadcrumbs__link",re.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function se(){var e=(0,u.s1)(),t=(0,u.Ns)();return e?a.createElement("nav",{className:(0,r.Z)(u.kM.docs.docBreadcrumbs,re.breadcrumbsContainer),"aria-label":"breadcrumbs"},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(oe,null),e.map((function(t,n){return a.createElement(ce,{key:n,active:n===e.length-1,index:n},a.createElement(ie,{href:n<e.length-1?t.href:void 0},t.label))})))):null}var me=n(3905);var de=["children"],ue=function(e){var t=e.children,n=(0,k.Z)(e,de),r=(0,a.useRef)(null),c=(0,a.useState)(!1),o=c[0],s=c[1];return a.createElement("pre",(0,l.Z)({},n,{ref:r}),t,a.createElement("button",{type:"button","aria-label":(0,i.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:"copy-button",onClick:function(){r.current&&function(e,t){var n=(void 0===t?{}:t).target,a=void 0===n?document.body:n,r=document.createElement("textarea"),l=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var i=document.getSelection(),c=!1;i.rangeCount>0&&(c=i.getRangeAt(0)),a.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var o=!1;try{o=document.execCommand("copy")}catch(s){}r.remove(),c&&(i.removeAllRanges(),i.addRange(c)),l&&l.focus()}(Array.from(r.current.querySelectorAll("code div.line")).map((function(e){return e.textContent})).join("\n")),s(!0),setTimeout((function(){return s(!1)}),2e3)}},o?a.createElement(i.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(i.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy")))},pe=n(2411),ve=["mdxType","originalType"];var be="details_BAp3";function fe(e){var t=Object.assign({},e);return a.createElement(u.PO,(0,l.Z)({},t,{className:(0,r.Z)("alert alert--info",be,t.className)}))}function he(e){return a.createElement(ee,e)}var Ee="img_E7b_";var ge={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,l=(r.mdxType,r.originalType,(0,k.Z)(r,ve));return a.createElement(e.props.originalType,l)}return e}(e)}));return a.createElement(pe.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props.mdxType)}))?a.createElement("code",e):a.createElement(ue,e)},a:function(e){return a.createElement(c.Z,e)},pre:function(e){var t;return a.createElement(ue,(0,a.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(fe,(0,l.Z)({},e,{summary:n}),r)},ul:function(e){return a.createElement("ul",(0,l.Z)({},e,{className:(t=e.className,(0,r.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"contains-task-list_tsSF"))}));var t},img:function(e){return a.createElement("img",(0,l.Z)({loading:"lazy"},e,{className:(t=e.className,(0,r.Z)(t,Ee))}));var t},h1:function(e){return a.createElement(he,(0,l.Z)({as:"h1"},e))},h2:function(e){return a.createElement(he,(0,l.Z)({as:"h2"},e))},h3:function(e){return a.createElement(he,(0,l.Z)({as:"h3"},e))},h4:function(e){return a.createElement(he,(0,l.Z)({as:"h4"},e))},h5:function(e){return a.createElement(he,(0,l.Z)({as:"h5"},e))},h6:function(e){return a.createElement(he,(0,l.Z)({as:"h6"},e))}},ye=Object.assign({},ge,{div:function(e){return"shiki-twoslash-fragment"===e.className?a.createElement(a.Fragment,null,e.children):a.createElement("div",e)},pre:function(e){return a.createElement(ue,e)},code:function(e){return a.createElement("code",e)}});function Ne(e){var t=e.children;return a.createElement(me.Zo,{components:ye},t)}function ke(e){var t,n=e.content,r=n.metadata,l=n.frontMatter,i=n.assets,c=l.keywords,o=r.description,s=r.title,m=null!=(t=i.image)?t:l.image;return a.createElement(u.d,{title:s,description:o,keywords:c,image:m})}function Ze(e){var t=e.content,n=t.metadata,l=t.frontMatter,i=l.hide_title,c=l.hide_table_of_contents,o=l.toc_min_heading_level,m=l.toc_max_heading_level,d=n.title,p=!i&&void 0===t.contentTitle,v=(0,u.iP)(),b=!c&&t.toc&&t.toc.length>0,f=b&&("desktop"===v||"ssr"===v);return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,r.Z)("col",!c&&ne)},a.createElement(h,null),a.createElement("div",{className:te},a.createElement("article",null,a.createElement(se,null),a.createElement(E,null),b&&a.createElement(Q,{toc:t.toc,minHeadingLevel:o,maxHeadingLevel:m,className:(0,r.Z)(u.kM.docs.docTocMobile,ae)}),a.createElement("div",{className:(0,r.Z)(u.kM.docs.docMarkdown,"markdown")},p&&a.createElement("header",null,a.createElement(ee,{as:"h1"},d)),a.createElement(Ne,null,a.createElement(t,null))),a.createElement(B,e)),a.createElement(s,{previous:n.previous,next:n.next}))),f&&a.createElement("div",{className:"col col--3"},a.createElement(F,{toc:t.toc,minHeadingLevel:o,maxHeadingLevel:m,className:u.kM.docs.docTocDesktop})))}function _e(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return a.createElement(u.FG,{className:t},a.createElement(ke,e),a.createElement(Ze,e))}},3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,v=u["".concat(o,".").concat(p)]||u[p]||d[p]||l;return n?a.createElement(v,i(i({ref:t},m),{},{components:n})):a.createElement(v,i({ref:t},m))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);