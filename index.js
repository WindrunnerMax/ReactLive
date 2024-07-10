    import {createRequire as CREATE_REQUIRE_NAME} from "module";
    const require = CREATE_REQUIRE_NAME(import.meta.url);
  `,interopRequireWildcard:`
    function interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
  `,interopRequireDefault:`
    function interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  `,createNamedExportFrom:`
    function createNamedExportFrom(obj, localName, importedName) {
      Object.defineProperty(exports, localName, {enumerable: true, configurable: true, get: () => obj[importedName]});
    }
  `,createStarExport:`
    function createStarExport(obj) {
      Object.keys(obj)
        .filter((key) => key !== "default" && key !== "__esModule")
        .forEach((key) => {
          if (exports.hasOwnProperty(key)) {
            return;
          }
          Object.defineProperty(exports, key, {enumerable: true, configurable: true, get: () => obj[key]});
        });
    }
  `,nullishCoalesce:`
    function nullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return rhsFn();
      }
    }
  `,asyncNullishCoalesce:`
    async function asyncNullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return await rhsFn();
      }
    }
  `,optionalChain:`
    function optionalChain(ops) {
      let lastAccessLHS = undefined;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
          return undefined;
        }
        if (op === 'access' || op === 'optionalAccess') {
          lastAccessLHS = value;
          value = fn(value);
        } else if (op === 'call' || op === 'optionalCall') {
          value = fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = undefined;
        }
      }
      return value;
    }
  `,asyncOptionalChain:`
    async function asyncOptionalChain(ops) {
      let lastAccessLHS = undefined;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
          return undefined;
        }
        if (op === 'access' || op === 'optionalAccess') {
          lastAccessLHS = value;
          value = await fn(value);
        } else if (op === 'call' || op === 'optionalCall') {
          value = await fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = undefined;
        }
      }
      return value;
    }
  `,optionalChainDelete:`
    function optionalChainDelete(ops) {
      const result = OPTIONAL_CHAIN_NAME(ops);
      return result == null ? true : result;
    }
  `,asyncOptionalChainDelete:`
    async function asyncOptionalChainDelete(ops) {
      const result = await ASYNC_OPTIONAL_CHAIN_NAME(ops);
      return result == null ? true : result;
    }
      (function () {
        var enterModule = require('react-hot-loader').enterModule;
        enterModule && enterModule(module);
      })();`.replace(/\s+/g," ").trim()}getSuffixCode(){let e=new Set;for(let t of this.tokens.tokens)!t.isType&&(0,r.isTopLevelDeclaration)(t)&&t.identifierRole!==r.IdentifierRole.ImportDeclaration&&e.add(this.tokens.identifierNameForToken(t));let t=Array.from(e).map(e=>({variableName:e,uniqueLocalName:e}));return this.extractedDefaultExportName&&t.push({variableName:this.extractedDefaultExportName,uniqueLocalName:"default"}),`
;(function () {
  var reactHotLoader = require('react-hot-loader').default;
  var leaveModule = require('react-hot-loader').leaveModule;
  if (!reactHotLoader) {
    return;
  }
${t.map(({variableName:e,uniqueLocalName:t})=>`  reactHotLoader.register(${e}, "${t}", ${JSON.stringify(this.filePath||"")});`).join("\n")}
  leaveModule(module);
    <Button className="button-component">
      <div className="div-child"></div>
    </Button>
    `;return"<div>"+Array(1e3).fill(e).join("")+"</div>"},c=()=>(0,o.jsxs)(r.default,{size:"small",children:[(0,o.jsx)(i.default,{type:"primary",onClick:()=>{console.time("babel");let e=l();(0,a.compileWithBabel)(e),console.timeEnd("babel")},children:"Babel"}),(0,o.jsx)(i.default,{type:"primary",onClick:async()=>{console.time("swc-with-prepare"),await (0,u.prepare)(),console.time("swc");let e=l();(0,u.compileWithSWC)(e),console.timeEnd("swc"),console.timeEnd("swc-with-prepare")},children:"SWC"}),(0,o.jsx)(i.default,{type:"primary",onClick:()=>{console.time("sucrase");let e=l();(0,s.compileWithSucrase)(e),console.timeEnd("sucrase")},children:"Sucrase"})]})},7408:function(e,t,n){"use strict";n.r(t);var r=n("52393"),i=n("75240");n("21936");var o=n("56144"),a=n.n(o),s=n("48362"),u=n.n(s),l=n("94115"),c=n("59378"),f=n("54108"),p=n("21290"),d=n("78955");let{Input:h,Typography:m,Grid:y}=l,v=`
<Space size='large' style={{ marginTop: 20 }}>
  <Button type='primary'>Primary</Button>
  <Button type='secondary'>Secondary</Button>
  <Button type='dashed'>Dashed</Button>
</Space>
<Card style={{ width: 360, marginTop: 20 }} title='Arco Card' extra={<Link>More</Link>} >
  ByteDance's core product, Toutiao ('Headlines'), is a content platform in China and around
  the world. Toutiao started out as a news recommendation engine and gradually evolved into a
  platform delivering content in various formats.
</Card>
`;u.render((0,r.jsx)(()=>{let e=(0,o.useRef)(null),[t,n]=(0,o.useState)(v),s=t=>{try{if(e.current){let n=e.current,r=(0,p.withSandbox)({React:a,console,alert,...l}),i=(0,f.compileWithSucrase)("<div>"+t+"</div>"),o=(0,d.renderWithDependency)(i,r);u.render(o,n)}}catch(e){console.log("Transform Code Error",e)}};return(0,o.useEffect)(()=>{s(t)},[t]),(0,r.jsxs)("div",{className:i.body,children:[(0,r.jsx)(m.Title,{heading:3,children:"Playground"}),(0,r.jsx)(m.Paragraph,{children:"支持Arco Design组件的实时预览。"}),(0,r.jsxs)(y.Row,{align:"stretch",className:i.row,children:[(0,r.jsx)(y.Col,{span:12,children:(0,r.jsx)("div",{className:i.container,children:(0,r.jsx)("div",{ref:e})})}),(0,r.jsx)(y.Col,{span:12,children:(0,r.jsx)(h.TextArea,{autoSize:!0,className:i.textarea,value:t,onChange:n})})]}),(0,r.jsx)(m.Title,{heading:3,children:"Benchmark"}),(0,r.jsx)(m.Paragraph,{children:"打开控制台查看执行速度。"}),(0,r.jsx)(c.BenchMark,{})]})},{}),document.getElementById("root"))},11433:function(e,t,n){"use strict";n.r(t),n.d(t,{compileWithBabel:function(){return o}});var r=n("14139"),i=n("27027");let o=function(e,t){let n=(0,i.transform)(e,{...r.DEFAULT_BABEL_OPTION,...t});return n.code}},54108:function(e,t,n){"use strict";n.r(t),n.d(t,{compileWithSucrase:function(){return o}});var r=n("14139"),i=n("24803");let o=(e,t)=>{let n=(0,i.transform)(e,{...r.DEFAULT_SUCRASE_OPTIONS,...t});return n.code}},49037:function(e,t,n){"use strict";n.r(t),n.d(t,{prepare:function(){return a},compileWithSWC:function(){return s}});var r=n("14139");let i=!1,o=null,a=async()=>{(!i||!o)&&await n.el("72558").then(n.bind(n,"72558")).then(e=>{o=e;let t=e.default;return t()}),i=!0},s=async(e,t)=>{if((!i||!o)&&await a(),o){let n=o.transformSync(e,{...r.DEFAULT_SWC_OPTIONS,...t});return n.code}return""}},78955:function(e,t,n){"use strict";n.r(t),n.d(t,{renderWithDependency:function(){return r.renderWithDependency}});var r=n("2269")},2269:function(e,t,n){"use strict";n.r(t),n.d(t,{renderWithDependency:function(){return i}});var r=n("16371");let i=(e,t)=>{let n=(0,r.getUniqueId)();t.___BRIDGE___={};let i=Function("dependency",`with(dependency) { 
      function fn(){  "use strict"; return (${e.trim()}); };
      ___BRIDGE___["${n}"] = fn.call(null);
    }
    `);return i.call(null,t),t.___BRIDGE___[n]}},14139:function(e,t,n){"use strict";n.r(t),n.d(t,{DEFAULT_BABEL_OPTION:function(){return r},DEFAULT_SWC_OPTIONS:function(){return i},DEFAULT_SUCRASE_OPTIONS:function(){return o},BUILD_IN_SANDBOX_KEY:function(){return a}});let r={presets:["stage-3","react","es2015"],plugins:[]},i={jsc:{parser:{syntax:"ecmascript",jsx:!0}}},o={transforms:["jsx"],production:!0},a=["___BRIDGE___"]},21290:function(e,t,n){"use strict";n.r(t),n.d(t,{withSandbox:function(){return o}});var r=n("16371"),i=n("14139");let o=e=>{let t="undefined"==typeof window?n.g:window,o=[...Object.keys(e),...i.BUILD_IN_SANDBOX_KEY],a=new Proxy(e,{has:()=>!0,get(n,i){if(!(o.indexOf(i)>-1))return null;{let n=e[i];return(0,r.isFunction)(n)&&!n.prototype?n.bind(t):e[i]}},set:(t,n,r)=>(o.indexOf(n)>-1&&(e[n]=r),!0)});return a}}},c={};function f(e){var t=c[e];if(void 0!==t)return t.exports;var n=c[e]={id:e,loaded:!1,exports:{}};return l[e](n,n.exports,f),n.loaded=!0,n.exports}f.m=l,e={72558:["vendors~node_modules_pnpm_swc_wasm-web_1_6_7_node_modules_swc_wasm-web_wasm_js"]},f.el=function(t){var n=e[t];return void 0===n?Promise.resolve():n.length>1?Promise.all(n.map(f.e)):f.e(n[0])},f.f={},f.e=function(e){return Promise.all(Object.keys(f.f).reduce(function(t,n){return f.f[n](e,t),t},[]))},!function(){self.importScripts&&(e=self.location+"");var e,t=self.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),f.p=e}(),f.u=function(e){return({"vendors~node_modules_pnpm_swc_wasm-web_1_6_7_node_modules_swc_wasm-web_wasm_js":"vendors~node_modules_pnpm_swc_wasm-web_1_6_7_node_modules_swc_wasm-web_wasm_js.js"})[e]},f.k=function(e){return({"vendors~node_modules_pnpm_swc_wasm-web_1_6_7_node_modules_swc_wasm-web_wasm_js":"vendors~node_modules_pnpm_swc_wasm-web_1_6_7_node_modules_swc_wasm-web_wasm_js.css"})[e]},t={},f.l=function(e,n,r,i){if(t[e]){t[e].push(n);return}if(void 0!==r){for(var o,a,s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var l=s[u];if(l.getAttribute("src")==e){o=l;break}}}!o&&(a=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,o.src=e),t[e]=[n];var c=function(n,r){o.onerror=o.onload=null,clearTimeout(f);var i=t[e];if(delete t[e],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach(function(e){return e(r)}),n)return n(r)},f=setTimeout(c.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=c.bind(null,o.onerror),o.onload=c.bind(null,o.onload),a&&document.head.appendChild(o)},f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.d=function(e,t){for(var n in t)f.o(t,n)&&!f.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.n=function(e){return e&&e.__esModule?e.default:e},f.nmd=function(e){return e.paths=[],!e.children&&(e.children=[]),e},n={index:0},r="webpack",i="data-webpack-loading",o=function(e,t,n,o){var a,s,u="chunk-"+e;if(!o){for(var l=document.getElementsByTagName("link"),c=0;c<l.length;c++){var p=l[c],d=p.getAttribute("href")||p.href;if(d&&!d.startsWith(f.p)&&(d=f.p+(d.startsWith("/")?d.slice(1):d)),"stylesheet"==p.rel&&(d&&d.startsWith(t)||p.getAttribute("data-webpack")==r+":"+u)){a=p;break}}if(!n)return a}!a&&(s=!0,(a=document.createElement("link")).setAttribute("data-webpack",r+":"+u),a.setAttribute(i,1),a.rel="stylesheet",a.href=t);var h=function(e,t){if(a.onerror=a.onload=null,a.removeAttribute(i),clearTimeout(m),t&&"load"!=t.type&&a.parentNode.removeChild(a),n(t),e)return e(t)};if(a.getAttribute(i)){var m=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload)}else h(void 0,{type:"load",target:a});return o?o.parentNode.insertBefore(a,o):s&&document.head.appendChild(a),a},f.f.css=function(e,t){var r=f.o(n,e)?n[e]:void 0;if(0!==r){if(r)t.push(r[2]);else if([].indexOf(e)>-1){var i=new Promise(function(t,i){r=n[e]=[t,i]});t.push(r[2]=i);var a=f.p+f.k(e),s=Error();o(e,a,function(t){if(f.o(n,e)&&(0!==(r=n[e])&&(n[e]=void 0),r)){if("load"!==t.type){var i=t&&t.type,o=t&&t.target&&t.target.src;s.message="Loading css chunk "+e+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,r[1](s)}else r[0]()}})}else n[e]=0}},f.b=document.baseURI||self.location.href,a={index:0},f.f.j=function(e,t){var n=f.o(a,e)?a[e]:void 0;if(0!==n){if(n)t.push(n[2]);else if(e){var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var i=f.p+f.u(e),o=Error();f.l(i,function(t){if(f.o(a,e)&&(0!==(n=a[e])&&(a[e]=void 0),n)){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",o.name="ChunkLoadError",o.type=r,o.request=i,n[1](o)}},"chunk-"+e,e)}else a[e]=0}},s=function(e,t){var n=t[0],r=t[1],i=t[2],o,s,u=0;if(n.some(function(e){return 0!==a[e]})){for(o in r)f.o(r,o)&&(f.m[o]=r[o]);i&&i(f)}for(e&&e(t);u<n.length;u++)s=n[u],f.o(a,s)&&a[s]&&a[s][0](),a[s]=0},u=self.webpackChunkreact_live_runtime=self.webpackChunkreact_live_runtime||[],u.forEach(s.bind(null,0)),u.push=s.bind(null,u.push.bind(u)),f("7408")}();
//# sourceMappingURL=index.js.map