"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7897],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=i(a),k=s,N=c["".concat(o,".").concat(k)]||c[k]||d[k]||r;return a?n.createElement(N,p(p({ref:t},m),{},{components:a})):n.createElement(N,p({ref:t},m))}));function k(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,p=new Array(r);p[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,p[1]=l;for(var i=2;i<r;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6752:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var n=a(7462),s=(a(7294),a(3905));const r={id:"glyphs",title:"Glyphs",sidebar_label:"Glyphs",slug:"/text/glyphs"},p=void 0,l={unversionedId:"text/glyphs",id:"text/glyphs",title:"Glyphs",description:"This component draws a run of glyphs, at corresponding positions, in a given font.",source:"@site/docs/text/glyphs.md",sourceDirName:"text",slug:"/text/glyphs",permalink:"/react-native-skia/docs/text/glyphs",draft:!1,editUrl:"https://github.com/shopify/react-native-skia/edit/main/docs/docs/text/glyphs.md",tags:[],version:"current",frontMatter:{id:"glyphs",title:"Glyphs",sidebar_label:"Glyphs",slug:"/text/glyphs"},sidebar:"tutorialSidebar",previous:{title:"Text",permalink:"/react-native-skia/docs/text/text"},next:{title:"Text Path",permalink:"/react-native-skia/docs/text/path"}},o={},i=[{value:"Draw text vertically",id:"draw-text-vertically",level:2}],m={toc:i};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This component draws a run of glyphs, at corresponding positions, in a given font."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"glyphs"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"Glyph[]")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Glyphs to draw")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"x?"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"number"),"."),(0,s.kt)("td",{parentName:"tr",align:"left"},"x coordinate of the origin of the entire run. Default is 0")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"y?"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"number"),"."),(0,s.kt)("td",{parentName:"tr",align:"left"},"y coordinate of the origin of the entire run. Default is 0")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"font"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"SkFont")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Font to use")))),(0,s.kt)("h2",{id:"draw-text-vertically"},"Draw text vertically"),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FC<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,s.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Glyphs: ({ x, y, ...props }: SkiaDefaultProps<GlyphsProps, "x" | "y">) => JSX.Element\nimport Glyphs'},"Glyphs")),(0,s.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const vec: (x?: number, y?: number) => SkPoint\nimport vec"},"vec")),(0,s.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const useFont: (font: DataSourceParam, size?: number, onError?: ((err: Error) => void) | undefined) => SkFont | null\nimport useFont"},"useFont"),"} "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"@shopify/react-native-skia"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"export"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const HelloWorld: () => JSX.Element | null"},"HelloWorld")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const fontSize: 32"},"fontSize")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"32"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont | null"},"font")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) useFont(font: DataSourceParam, size?: number | undefined, onError?: ((err: Error) => void) | undefined): SkFont | null\nimport useFont"},"useFont")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"var require: NodeRequire\n(id: string) => any"},"require")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"./my-font.otf"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},")"),(0,s.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.kt)("data-lsp",{parentName:"span",lsp:"const fontSize: 32"},"fontSize"),");")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"if"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (",(0,s.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont | null"},"font")," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"==="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"null"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},") {")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"null"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const glyphs: {\n    id: number;\n    pos: SkPoint;\n}[]"},"glyphs")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont"},"font"))),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},".",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(method) SkFont.getGlyphIDs(str: string, numCodePoints?: number | undefined): number[]"},"getGlyphIDs")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"Hello World!"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},")")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},".",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(method) Array<number>.map<{\n    id: number;\n    pos: SkPoint;\n}>(callbackfn: (value: number, index: number, array: number[]) => {\n    id: number;\n    pos: SkPoint;\n}, thisArg?: any): {\n    id: number;\n    pos: SkPoint;\n}[]"},"map")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"((",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(parameter) id: number"},"id")),(0,s.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(parameter) i: number"},"i"),") "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ({ ",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(property) id: number"},"id")),(0,s.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(property) pos: SkPoint"},"pos")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) vec(x?: number, y?: number | undefined): SkPoint\nimport vec"},"vec")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"0"),(0,s.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(parameter) i: number"},"i")," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"+"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"1"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},") "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"*"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.kt)("data-lsp",{parentName:"span",lsp:"const fontSize: 32"},"fontSize"),") }));")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FC<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(property) ViewProps.style?: StyleProp<ViewStyle>"},"style")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{{ ",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"1"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," }}>")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Glyphs: ({ x, y, ...props }: SkiaDefaultProps<GlyphsProps, "x" | "y">) => JSX.Element\nimport Glyphs'},"Glyphs"))),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(property) font: AnimatedProp<SkFont | null, any>"},"font")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,s.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont"},"font"),"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(property) glyphs: AnimatedProp<Glyph[], any>"},"glyphs")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,s.kt)("data-lsp",{parentName:"span",lsp:"const glyphs: {\n    id: number;\n    pos: SkPoint;\n}[]"},"glyphs"),"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      />")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FC<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,s.kt)("pre",{parentName:"div",className:"shiki nord twoslash lsp",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FC<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Glyphs: ({ x, y, ...props }: SkiaDefaultProps<GlyphsProps, "x" | "y">) => JSX.Element\nimport Glyphs'},"Glyphs")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const vec: (x?: number, y?: number) => SkPoint\nimport vec"},"vec")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const useFont: (font: DataSourceParam, size?: number, onError?: ((err: Error) => void) | undefined) => SkFont | null\nimport useFont"},"useFont")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@shopify/react-native-skia"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"export"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const HelloWorld: () => JSX.Element | null"},"HelloWorld")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const fontSize: 32"},"fontSize")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"32"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont | null"},"font")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) useFont(font: DataSourceParam, size?: number | undefined, onError?: ((err: Error) => void) | undefined): SkFont | null\nimport useFont"},"useFont")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"var require: NodeRequire\n(id: string) => any"},"require")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"./my-font.otf"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const fontSize: 32"},"fontSize")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"if"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ("),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont | null"},"font")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"==="),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"null"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},") "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"null;")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const glyphs: {\n    id: number;\n    pos: SkPoint;\n}[]"},"glyphs")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont"},"font"))),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,s.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(method) SkFont.getGlyphIDs(str: string, numCodePoints?: number | undefined): number[]"},"getGlyphIDs")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"Hello World!"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,s.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(method) Array<number>.map<{\n    id: number;\n    pos: SkPoint;\n}>(callbackfn: (value: number, index: number, array: number[]) => {\n    id: number;\n    pos: SkPoint;\n}, thisArg?: any): {\n    id: number;\n    pos: SkPoint;\n}[]"},"map")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(parameter) id: number"},"id")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(parameter) i: number"},"i")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},")"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ("),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(property) id: number"},"id")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(property) pos: SkPoint"},"pos")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) vec(x?: number, y?: number | undefined): SkPoint\nimport vec"},"vec")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"0"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ("),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(parameter) i: number"},"i")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"+"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"1"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},") "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"*"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const fontSize: 32"},"fontSize")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},") "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"))"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," (")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FC<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(property) ViewProps.style?: StyleProp<ViewStyle>"},"style")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"1"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}>")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Glyphs: ({ x, y, ...props }: SkiaDefaultProps<GlyphsProps, "x" | "y">) => JSX.Element\nimport Glyphs'},"Glyphs"))),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(property) font: AnimatedProp<SkFont | null, any>"},"font")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont"},"font")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(property) glyphs: AnimatedProp<Glyph[], any>"},"glyphs")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const glyphs: {\n    id: number;\n    pos: SkPoint;\n}[]"},"glyphs")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FC<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  )"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")))))),(0,s.kt)("img",{src:a(9850).Z,width:"256",height:"256"}))}d.isMDXComponent=!0},9850:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hello-world-vertical-7e5428aaf04726357f290b09e2a8c19c.png"}}]);