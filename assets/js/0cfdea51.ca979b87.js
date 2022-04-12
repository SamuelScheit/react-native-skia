"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7897],{6355:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return d}});var n=a(3117),r=a(102),s=(a(7294),a(3905)),p=["components"],l={id:"glyphs",title:"Glyphs",sidebar_label:"Glyphs",slug:"/text/glyphs"},o=void 0,i={unversionedId:"text/glyphs",id:"text/glyphs",title:"Glyphs",description:"This component draws a run of glyphs, at corresponding positions, in a given font.",source:"@site/docs/text/glyphs.md",sourceDirName:"text",slug:"/text/glyphs",permalink:"/react-native-skia/docs/text/glyphs",editUrl:"https://github.com/shopify/react-native-skia/edit/main/docs/docs/text/glyphs.md",tags:[],version:"current",frontMatter:{id:"glyphs",title:"Glyphs",sidebar_label:"Glyphs",slug:"/text/glyphs"},sidebar:"tutorialSidebar",previous:{title:"Text",permalink:"/react-native-skia/docs/text/text"},next:{title:"Text Path",permalink:"/react-native-skia/docs/text/path"}},m={},d=[{value:"Draw text vertically",id:"draw-text-vertically",level:2}],c={toc:d};function k(e){var t=e.components,a=(0,r.Z)(e,p);return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This component draws a run of glyphs, at corresponding positions, in a given font."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"glyphs"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"Glyph[]")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Glyphs to draw")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"x?"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"number"),"."),(0,s.kt)("td",{parentName:"tr",align:"left"},"x coordinate of the origin of the entire run. Default is 0")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"y?"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"number"),"."),(0,s.kt)("td",{parentName:"tr",align:"left"},"y coordinate of the origin of the entire run. Default is 0")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"font"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"Font")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Font to use (see ",(0,s.kt)("a",{parentName:"td",href:"/docs/text/fonts"},"Fonts"),")")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"familyName?"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Font family name to use  (see ",(0,s.kt)("a",{parentName:"td",href:"/docs/text/fonts"},"Fonts"),")")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"size?"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"number")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Font size if ",(0,s.kt)("inlineCode",{parentName:"td"},"familyName")," is provided")))),(0,s.kt)("h2",{id:"draw-text-vertically"},"Draw text vertically"),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | ... 47 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,s.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Glyphs: {\n    (props: AnimatedProps<GlyphsProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n    };\n}\nimport Glyphs"},"Glyphs")),(0,s.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const vec: (x?: number | undefined, y?: number | undefined) => {\n    x: number;\n    y: number;\n}\nimport vec"},"vec")),(0,s.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const useFont: (font: DataSource, size?: number | undefined) => SkFont | null\nimport useFont"},"useFont"),"} "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"@shopify/react-native-skia"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"export"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const HelloWorld: () => JSX.Element | null"},"HelloWorld")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont | null"},"font")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) useFont(font: DataSource, size?: number | undefined): SkFont | null\nimport useFont"},"useFont")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"var require: NodeRequire\n(id: string) => any"},"require")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"./my-font.otf"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},")"),(0,s.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"16"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},");")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"if"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (",(0,s.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont | null"},"font")," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"==="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"null"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},") {")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"null"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const glyphs: {\n    id: number;\n    pos: {\n        x: number;\n        y: number;\n    };\n}[]"},"glyphs")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont"},"font"))),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},".",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(method) SkFont.getGlyphIDs(str: string, numCodePoints?: number | undefined): number[]"},"getGlyphIDs")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"Hello World!"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},")")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},".",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(method) Array<number>.map<{\n    id: number;\n    pos: {\n        x: number;\n        y: number;\n    };\n}>(callbackfn: (value: number, index: number, array: number[]) => {\n    id: number;\n    pos: {\n        x: number;\n        y: number;\n    };\n}, thisArg?: any): {\n    id: number;\n    pos: {\n        x: number;\n        y: number;\n    };\n}[]"},"map")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"((",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(parameter) id: number"},"id")),(0,s.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(parameter) i: number"},"i"),") "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ({ ",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(property) id: number"},"id")),(0,s.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(property) pos: {\n    x: number;\n    y: number;\n}"},"pos")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) vec(x?: number | undefined, y?: number | undefined): {\n    x: number;\n    y: number;\n}\nimport vec"},"vec")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"0"),(0,s.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(parameter) i: number"},"i")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"*"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"32"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},") }));")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | ... 47 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) style?: StyleProp<ViewStyle>"},"style")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{{ ",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"1"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," }}>")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Glyphs: {\n    (props: AnimatedProps<GlyphsProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n    };\n}\nimport Glyphs"},"Glyphs"))),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) font: SkFont | SkiaReadonlyValue<SkFont>"},"font")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,s.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont"},"font"),"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) glyphs: {\n    id: number;\n    pos: {\n        x: number;\n        y: number;\n    };\n}[]"},"glyphs")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,s.kt)("data-lsp",{parentName:"span",lsp:"const glyphs: {\n    id: number;\n    pos: {\n        x: number;\n        y: number;\n    };\n}[]"},"glyphs"),"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      />")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | ... 47 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,s.kt)("pre",{parentName:"div",className:"shiki nord twoslash lsp",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | ... 47 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Glyphs: {\n    (props: AnimatedProps<GlyphsProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n    };\n}\nimport Glyphs"},"Glyphs")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const vec: (x?: number | undefined, y?: number | undefined) => {\n    x: number;\n    y: number;\n}\nimport vec"},"vec")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const useFont: (font: DataSource, size?: number | undefined) => SkFont | null\nimport useFont"},"useFont")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@shopify/react-native-skia"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"export"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const HelloWorld: () => JSX.Element | null"},"HelloWorld")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont | null"},"font")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) useFont(font: DataSource, size?: number | undefined): SkFont | null\nimport useFont"},"useFont")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"var require: NodeRequire\n(id: string) => any"},"require")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"./my-font.otf"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"16"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"if"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ("),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont | null"},"font")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"==="),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"null"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},") "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"null;")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const glyphs: {\n    id: number;\n    pos: {\n        x: number;\n        y: number;\n    };\n}[]"},"glyphs")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont"},"font"))),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,s.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(method) SkFont.getGlyphIDs(str: string, numCodePoints?: number | undefined): number[]"},"getGlyphIDs")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"Hello World!"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,s.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(method) Array<number>.map<{\n    id: number;\n    pos: {\n        x: number;\n        y: number;\n    };\n}>(callbackfn: (value: number, index: number, array: number[]) => {\n    id: number;\n    pos: {\n        x: number;\n        y: number;\n    };\n}, thisArg?: any): {\n    id: number;\n    pos: {\n        x: number;\n        y: number;\n    };\n}[]"},"map")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(parameter) id: number"},"id")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(parameter) i: number"},"i")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},")"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ("),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(property) id: number"},"id")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(property) pos: {\n    x: number;\n    y: number;\n}"},"pos")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) vec(x?: number | undefined, y?: number | undefined): {\n    x: number;\n    y: number;\n}\nimport vec"},"vec")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"0"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(parameter) i: number"},"i")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"*"),(0,s.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"32"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},") "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"))"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," (")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | ... 47 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) style?: StyleProp<ViewStyle>"},"style")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"1"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}>")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Glyphs: {\n    (props: AnimatedProps<GlyphsProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n    };\n}\nimport Glyphs"},"Glyphs"))),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) font: SkFont | SkiaReadonlyValue<SkFont>"},"font")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont"},"font")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) glyphs: {\n    id: number;\n    pos: {\n        x: number;\n        y: number;\n    };\n}[]"},"glyphs")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const glyphs: {\n    id: number;\n    pos: {\n        x: number;\n        y: number;\n    };\n}[]"},"glyphs")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | ... 47 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  )"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")))))))}k.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=i(a),k=r,N=c["".concat(o,".").concat(k)]||c[k]||d[k]||s;return a?n.createElement(N,p(p({ref:t},m),{},{components:a})):n.createElement(N,p({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,p=new Array(s);p[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var i=2;i<s;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);