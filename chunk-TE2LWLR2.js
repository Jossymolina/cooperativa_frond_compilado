import{$ as he,D as dt,E as ce,Ea as we,F as tt,Fa as H,G as ue,H as pe,Ha as z,Ia as jt,Ja as Z,Ka as ot,La as _,Ma as Se,N as be,R as It,U as et,Y as Vt,aa as ge,ca as Ht,fa as fe,ja as ct,k as le,la as me,ma as ut,n as ae,o as de,oa as ye,ra as Et,s as q,sa as Tt,ta as nt,ua as ve,va as Ce,w as J,x as zt}from"./chunk-3RS5R7K4.js";import{Ab as St,Ac as Lt,Bb as Jt,Bc as re,Db as te,Fc as h,Gb as ee,Gc as se,Hb as N,Ib as Y,Jb as K,Kb as st,Mb as lt,Na as w,Nb as at,Ob as At,Pb as ne,Rb as oe,Sa as vt,Sb as xt,T as E,Ta as Kt,Tb as ie,U as A,Ub as k,Vb as kt,W as B,Wb as _t,Xa as Ct,Y as d,Ya as Pt,a as p,b as ht,bb as F,c as Zt,cb as O,cc as S,da as gt,db as I,ea as Xt,fa as ft,fb as v,fc as Ot,gb as L,hb as G,ka as mt,nb as Q,oa as Yt,pa as g,ra as X,sb as f,tb as Bt,ub as Nt,va as yt,vb as rt,wb as Ft,wc as $,xb as $t,xc as T,yb as Mt,zb as wt,zc as m}from"./chunk-D2PW6A4I.js";function j(...o){if(o){let s=[];for(let t=0;t<o.length;t++){let e=o[t];if(!e)continue;let n=typeof e;if(n==="string"||n==="number")s.push(e);else if(n==="object"){let i=Array.isArray(e)?[j(...e)]:Object.entries(e).map(([r,l])=>l?r:void 0);s=i.length?s.concat(i.filter(r=>!!r)):s}}return s.join(" ").trim()}}var Ke=Object.defineProperty,xe=Object.getOwnPropertySymbols,Je=Object.prototype.hasOwnProperty,tn=Object.prototype.propertyIsEnumerable,ke=(o,s,t)=>s in o?Ke(o,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[s]=t,_e=(o,s)=>{for(var t in s||(s={}))Je.call(s,t)&&ke(o,t,s[t]);if(xe)for(var t of xe(s))tn.call(s,t)&&ke(o,t,s[t]);return o};function Ie(...o){if(o){let s=[];for(let t=0;t<o.length;t++){let e=o[t];if(!e)continue;let n=typeof e;if(n==="string"||n==="number")s.push(e);else if(n==="object"){let i=Array.isArray(e)?[Ie(...e)]:Object.entries(e).map(([r,l])=>l?r:void 0);s=i.length?s.concat(i.filter(r=>!!r)):s}}return s.join(" ").trim()}}function en(o){return typeof o=="function"&&"call"in o&&"apply"in o}function nn({skipUndefined:o=!1},...s){return s?.reduce((t,e={})=>{for(let n in e){let i=e[n];if(!(o&&i===void 0))if(n==="style")t.style=_e(_e({},t.style),e.style);else if(n==="class"||n==="className")t[n]=Ie(t[n],e[n]);else if(en(i)){let r=t[n];t[n]=r?(...l)=>{r(...l),i(...l)}:i}else t[n]=i}return t},{})}function Wt(...o){return nn({skipUndefined:!1},...o)}var Dt={};function pt(o="pui_id_"){return Object.hasOwn(Dt,o)||(Dt[o]=0),Dt[o]++,`${o}${Dt[o]}`}var Ee=(()=>{class o extends _{name="common";static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(o)))(n||o)}})();static \u0275prov=E({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),M=new B("PARENT_INSTANCE"),x=(()=>{class o{document=d(ft);platformId=d(yt);el=d(X);injector=d(Xt);cd=d(re);renderer=d(Ct);config=d(Se);$parentInstance=d(M,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=d(Ee);baseStyle=d(_);scopedStyleEl;parent=this.$params.parent;cn=j;_themeScopedListener;dt=m();unstyled=m();pt=m();ptOptions=m();$attrSelector=pt("pc");get $name(){return this.componentName||this.constructor?.name?.replace(/^_/,"")||"UnknownComponent"}get $hostName(){return this.hostName}$unstyled=$(()=>this.unstyled()!==void 0?this.unstyled():this.config?.unstyled()||!1);$pt=$(()=>Et(this.pt()||this.directivePT(),this.$params));directivePT=mt(void 0);get $globalPT(){return this._getPT(this.config?.pt(),void 0,t=>Et(t,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,t=>this._getOptionValue(t,this.$hostName||this.$name,this.$params)||Et(t,this.$params))}get $style(){return p(p({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let t=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:t}}}onInit(){}onChanges(t){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){T(t=>{this.document&&!zt(this.platformId)&&(z.off("theme:change",this._themeScopedListener),this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener(this._themeScopedListener)):this._unloadScopedThemeStyles()),t(()=>{z.off("theme:change",this._themeScopedListener)})}),T(t=>{this.document&&!zt(this.platformId)&&(z.off("theme:change",this._loadCoreStyles),this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))),t(()=>{z.off("theme:change",this._loadCoreStyles)})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(t){this.onChanges(t),this._hook("onChanges",t)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.el?.nativeElement?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(t,...e){return me(t)?t(...e):Wt(...e)}_getHostInstance(t){return t?this.$hostName?this.$name===this.$hostName?t:this._getHostInstance(t.$parentInstance):t.$parentInstance:void 0}_getPropValue(t){return this[t]||this._getHostInstance(this)?.[t]}_getOptionValue(t,e="",n={}){return ve(t,e,n)}_hook(t,...e){if(!this.$hostName){let n=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${t}`),i=this._useDefaultPT(this._getOptionValue,`hooks.${t}`);n?.(...e),i?.(...e)}}_load(){ot.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),ot.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener(()=>this._load())}_loadGlobalStyles(){let t=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);ut(t)&&this.baseStyle.load(t,p({name:"global"},this.$styleOptions))}_loadCoreStyles(){!ot.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),ot.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!Z.isStyleNameLoaded("common")){let{primitive:t,semantic:e,global:n,style:i}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,p({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(e?.css,p({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(n?.css,p({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(p({name:"global-style"},this.$styleOptions),i),Z.setLoadedStyleName("common")}if(!Z.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:t,style:e}=this.$style?.getComponentTheme?.()||{};this.$style?.load(t,p({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(p({name:`${this.$style?.name}-style`},this.$styleOptions),e),Z.setLoadedStyleName(this.$style?.name)}if(!Z.isStyleNameLoaded("layer-order")){let t=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,p({name:"layer-order",first:!0},this.$styleOptions)),Z.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(t){let{css:e}=this.$style?.getPresetTheme?.(t,`[${this.$attrSelector}]`)||{},n=this.$style?.load(e,p({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=n?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){ot.clearLoadedStyleNames(),z.on("theme:change",t.bind(this))}_removeThemeListeners(){z.off("theme:change",this._loadCoreStyles),z.off("theme:change",this._load),z.off("theme:change",this._themeScopedListener)}_getPTValue(t={},e="",n={},i=!0){let r=/./g.test(e)&&!!n[e.split(".")[0]],{mergeSections:l=!0,mergeProps:a=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},u=i?r?this._useGlobalPT(this._getPTClassValue,e,n):this._useDefaultPT(this._getPTClassValue,e,n):void 0,c=r?void 0:this._usePT(this._getPT(t,this.$hostName||this.$name),this._getPTClassValue,e,ht(p({},n),{global:u||{}})),b=this._getPTDatasets(e);return l||!l&&c?a?this._mergeProps(a,u,c,b):p(p(p({},u),c),b):p(p({},c),b)}_getPTDatasets(t=""){let e="data-pc-",n=t==="root"&&ut(this.$pt()?.["data-pc-section"]);return t!=="transition"&&ht(p({},t==="root"&&ht(p({[`${e}name`]:nt(n?this.$pt()?.["data-pc-section"]:this.$name)},n&&{[`${e}extend`]:nt(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${e}section`]:nt(t.includes(".")?t.split(".").at(-1)??"":t)})}_getPTClassValue(t,e,n){let i=this._getOptionValue(t,e,n);return Tt(i)||Ce(i)?{class:i}:i}_getPT(t,e="",n){let i=(r,l=!1)=>{let a=n?n(r):r,u=nt(e),c=nt(this.$hostName||this.$name);return(l?u!==c?a?.[u]:void 0:a?.[u])??a};return t?.hasOwnProperty("_usept")?{_usept:t._usept,originalValue:i(t.originalValue),value:i(t.value)}:i(t,!0)}_usePT(t,e,n,i){let r=l=>e?.call(this,l,n,i);if(t?.hasOwnProperty("_usept")){let{mergeSections:l=!0,mergeProps:a=!1}=t._usept||this.config?.ptOptions()||{},u=r(t.originalValue),c=r(t.value);return u===void 0&&c===void 0?void 0:Tt(c)?c:Tt(u)?u:l||!l&&c?a?this._mergeProps(a,u,c):p(p({},u),c):c}return r(t)}_useGlobalPT(t,e,n){return this._usePT(this.$globalPT,t,e,n)}_useDefaultPT(t,e,n){return this._usePT(this.$defaultPT,t,e,n)}ptm(t="",e={}){return this._getPTValue(this.$pt(),t,p(p({},this.$params),e))}ptms(t,e={}){return t.reduce((n,i)=>(n=Wt(n,this.ptm(i,e))||{},n),{})}ptmo(t={},e="",n={}){return this._getPTValue(t,e,p({instance:this},n),!1)}cx(t,e={}){return this.$unstyled()?void 0:j(this._getOptionValue(this.$style.classes,t,p(p({},this.$params),e)))}sx(t="",e=!0,n={}){if(e){let i=this._getOptionValue(this.$style.inlineStyles,t,p(p({},this.$params),n)),r=this._getOptionValue(this.baseComponentStyle.inlineStyles,t,p(p({},this.$params),n));return p(p({},r),i)}}static \u0275fac=function(e){return new(e||o)};static \u0275dir=I({type:o,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[S([Ee,_]),Yt]})}return o})();var y=(()=>{class o{el;renderer;pBind=m(void 0);_attrs=mt(void 0);attrs=$(()=>this._attrs()||this.pBind());styles=$(()=>this.attrs()?.style);classes=$(()=>j(this.attrs()?.class));listeners=[];constructor(t,e){this.el=t,this.renderer=e,T(()=>{let l=this.attrs()||{},{style:n,class:i}=l,r=Zt(l,["style","class"]);for(let[a,u]of Object.entries(r))if(a.startsWith("on")&&typeof u=="function"){let c=a.slice(2).toLowerCase();if(!this.listeners.some(b=>b.eventName===c)){let b=this.renderer.listen(this.el.nativeElement,c,u);this.listeners.push({eventName:c,unlisten:b})}}else u==null?this.renderer.removeAttribute(this.el.nativeElement,a):(this.renderer.setAttribute(this.el.nativeElement,a,u.toString()),a in this.el.nativeElement&&(this.el.nativeElement[a]=u))})}ngOnDestroy(){this.clearListeners()}setAttrs(t){ye(this._attrs(),t)||this._attrs.set(t)}clearListeners(){this.listeners.forEach(({unlisten:t})=>t()),this.listeners=[]}static \u0275fac=function(e){return new(e||o)(Pt(X),Pt(Ct))};static \u0275dir=I({type:o,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(e,n){e&2&&(ie(n.styles()),k(n.classes()))},inputs:{pBind:[1,"pBind"]}})}return o})(),Te=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=O({type:o});static \u0275inj=A({})}return o})();var De=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var on=`
    ${De}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,rn={root:({instance:o})=>{let s=typeof o.value=="function"?o.value():o.value,t=typeof o.size=="function"?o.size():o.size,e=typeof o.badgeSize=="function"?o.badgeSize():o.badgeSize,n=typeof o.severity=="function"?o.severity():o.severity;return["p-badge p-component",{"p-badge-circle":ut(s)&&String(s).length===1,"p-badge-dot":ct(s),"p-badge-sm":t==="small"||e==="small","p-badge-lg":t==="large"||e==="large","p-badge-xl":t==="xlarge"||e==="xlarge","p-badge-info":n==="info","p-badge-success":n==="success","p-badge-warn":n==="warn","p-badge-danger":n==="danger","p-badge-secondary":n==="secondary","p-badge-contrast":n==="contrast"}]}},Pe=(()=>{class o extends _{name="badge";style=on;classes=rn;static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(o)))(n||o)}})();static \u0275prov=E({token:o,factory:o.\u0275fac})}return o})();var Be=new B("BADGE_INSTANCE");var Ut=(()=>{class o extends x{$pcBadge=d(Be,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(y,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=m();badgeSize=m();size=m();severity=m();value=m();badgeDisabled=m(!1,{transform:h});_componentStyle=d(Pe);static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(o)))(n||o)}})();static \u0275cmp=F({type:o,selectors:[["p-badge"]],hostVars:4,hostBindings:function(e,n){e&2&&(k(n.cn(n.cx("root"),n.styleClass())),oe("display",n.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[S([Pe,{provide:Be,useExisting:o},{provide:M,useExisting:o}]),L([y]),v],decls:1,vars:1,template:function(e,n){e&1&&kt(0),e&2&&_t(n.value())},dependencies:[q,H,Te],encapsulation:2,changeDetection:0})}return o})(),Ne=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=O({type:o});static \u0275inj=A({imports:[Ut,H,H]})}return o})();var Gt=(()=>{class o{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,e){t&&e&&(t.classList?t.classList.add(e):t.className+=" "+e)}static addMultipleClasses(t,e){if(t&&e)if(t.classList){let n=e.trim().split(" ");for(let i=0;i<n.length;i++)t.classList.add(n[i])}else{let n=e.split(" ");for(let i=0;i<n.length;i++)t.className+=" "+n[i]}}static removeClass(t,e){t&&e&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,e){t&&e&&[e].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(i=>this.removeClass(t,i)))}static hasClass(t,e){return t&&e?t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}static find(t,e){return Array.from(t.querySelectorAll(e))}static findSingle(t,e){return this.isElement(t)?t.querySelector(e):null}static index(t){let e=t.parentNode.childNodes,n=0;for(var i=0;i<e.length;i++){if(e[i]==t)return n;e[i].nodeType==1&&n++}return-1}static indexWithinGroup(t,e){let n=t.parentNode?t.parentNode.childNodes:[],i=0;for(var r=0;r<n.length;r++){if(n[r]==t)return i;n[r].attributes&&n[r].attributes[e]&&n[r].nodeType==1&&i++}return-1}static appendOverlay(t,e,n="self"){n!=="self"&&t&&e&&this.appendChild(t,e)}static alignOverlay(t,e,n="self",i=!0){t&&e&&(i&&(t.style.minWidth=`${o.getOuterWidth(e)}px`),n==="self"?this.relativePosition(t,e):this.absolutePosition(t,e))}static relativePosition(t,e,n=!0){let i=U=>{if(U)return getComputedStyle(U).getPropertyValue("position")==="relative"?U:i(U.parentElement)},r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),l=e.offsetHeight,a=e.getBoundingClientRect(),u=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),b=this.getViewport(),C=i(t)?.getBoundingClientRect()||{top:-1*u,left:-1*c},P,V,bt="top";a.top+l+r.height>b.height?(P=a.top-C.top-r.height,bt="bottom",a.top+P<0&&(P=-1*a.top)):(P=l+a.top-C.top,bt="top");let qt=a.left+r.width-b.width,Ye=a.left-C.left;if(r.width>b.width?V=(a.left-C.left)*-1:qt>0?V=Ye-qt:V=a.left-C.left,t.style.top=P+"px",t.style.left=V+"px",t.style.transformOrigin=bt,n){let U=pe(/-anchor-gutter$/)?.value;t.style.marginTop=bt==="bottom"?`calc(${U??"2px"} * -1)`:U??""}}static absolutePosition(t,e,n=!0){let i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),r=i.height,l=i.width,a=e.offsetHeight,u=e.offsetWidth,c=e.getBoundingClientRect(),b=this.getWindowScrollTop(),D=this.getWindowScrollLeft(),C=this.getViewport(),P,V;c.top+a+r>C.height?(P=c.top+b-r,t.style.transformOrigin="bottom",P<0&&(P=b)):(P=a+c.top+b,t.style.transformOrigin="top"),c.left+l>C.width?V=Math.max(0,c.left+D+u-l):V=c.left+D,t.style.top=P+"px",t.style.left=V+"px",n&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,e=[]){return t.parentNode===null?e:this.getParents(t.parentNode,e.concat([t.parentNode]))}static getScrollableParents(t){let e=[];if(t){let n=this.getParents(t),i=/(auto|scroll)/,r=l=>{let a=window.getComputedStyle(l,null);return i.test(a.getPropertyValue("overflow"))||i.test(a.getPropertyValue("overflowX"))||i.test(a.getPropertyValue("overflowY"))};for(let l of n){let a=l.nodeType===1&&l.dataset.scrollselectors;if(a){let u=a.split(",");for(let c of u){let b=this.findSingle(l,c);b&&r(b)&&e.push(b)}}l.nodeType!==9&&r(l)&&e.push(l)}}return e}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementDimensions(t){let e={};return t.style.visibility="hidden",t.style.display="block",e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",e}static scrollInView(t,e){let n=getComputedStyle(t).getPropertyValue("borderTopWidth"),i=n?parseFloat(n):0,r=getComputedStyle(t).getPropertyValue("paddingTop"),l=r?parseFloat(r):0,a=t.getBoundingClientRect(),c=e.getBoundingClientRect().top+document.body.scrollTop-(a.top+document.body.scrollTop)-i-l,b=t.scrollTop,D=t.clientHeight,C=this.getOuterHeight(e);c<0?t.scrollTop=b+c:c+C>D&&(t.scrollTop=b+c-D+C)}static fadeIn(t,e){t.style.opacity=0;let n=+new Date,i=0,r=function(){i=+t.style.opacity.replace(",",".")+(new Date().getTime()-n)/e,t.style.opacity=i,n=+new Date,+i<1&&(window.requestAnimationFrame?window.requestAnimationFrame(r):setTimeout(r,16))};r()}static fadeOut(t,e){var n=1,i=50,r=e,l=i/r;let a=setInterval(()=>{n=n-l,n<=0&&(n=0,clearInterval(a)),t.style.opacity=n},i)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,e){var n=Element.prototype,i=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(r){return[].indexOf.call(document.querySelectorAll(r),this)!==-1};return i.call(t,e)}static getOuterWidth(t,e){let n=t.offsetWidth;if(e){let i=getComputedStyle(t);n+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return n}static getHorizontalPadding(t){let e=getComputedStyle(t);return parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)}static getHorizontalMargin(t){let e=getComputedStyle(t);return parseFloat(e.marginLeft)+parseFloat(e.marginRight)}static innerWidth(t){let e=t.offsetWidth,n=getComputedStyle(t);return e+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),e}static width(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),e}static getInnerHeight(t){let e=t.offsetHeight,n=getComputedStyle(t);return e+=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),e}static getOuterHeight(t,e){let n=t.offsetHeight;if(e){let i=getComputedStyle(t);n+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}static getHeight(t){let e=t.offsetHeight,n=getComputedStyle(t);return e-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),e}static getWidth(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),e}static getViewport(){let t=window,e=document,n=e.documentElement,i=e.getElementsByTagName("body")[0],r=t.innerWidth||n.clientWidth||i.clientWidth,l=t.innerHeight||n.clientHeight||i.clientHeight;return{width:r,height:l}}static getOffset(t){var e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,e){let n=t.parentNode;if(!n)throw"Can't replace element";return n.replaceChild(e,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return!0;var n=t.indexOf("Trident/");if(n>0){var i=t.indexOf("rv:");return!0}var r=t.indexOf("Edge/");return r>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,e){if(this.isElement(e))e.appendChild(t);else if(e&&e.el&&e.el.nativeElement)e.el.nativeElement.appendChild(t);else throw"Cannot append "+e+" to "+t}static removeChild(t,e){if(this.isElement(e))e.removeChild(t);else if(e.el&&e.el.nativeElement)e.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+e}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode?.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let e=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(e.borderLeftWidth)-parseFloat(e.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let e=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=e,e}static invokeElementMethod(t,e,n){t[e].apply(t,n)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),e=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:e[1]||"",version:e[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,e){t&&document.activeElement!==t&&t.focus(e)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,e=""){let n=this.find(t,this.getFocusableSelectorString(e)),i=[];for(let r of n){let l=getComputedStyle(r);this.isVisible(r)&&l.display!="none"&&l.visibility!="hidden"&&i.push(r)}return i}static getFocusableElement(t,e=""){let n=this.findSingle(t,this.getFocusableSelectorString(e));if(n){let i=getComputedStyle(n);if(this.isVisible(n)&&i.display!="none"&&i.visibility!="hidden")return n}return null}static getFirstFocusableElement(t,e=""){let n=this.getFocusableElements(t,e);return n.length>0?n[0]:null}static getLastFocusableElement(t,e){let n=this.getFocusableElements(t,e);return n.length>0?n[n.length-1]:null}static getNextFocusableElement(t,e=!1){let n=o.getFocusableElements(t),i=0;if(n&&n.length>0){let r=n.indexOf(n[0].ownerDocument.activeElement);e?r==-1||r===0?i=n.length-1:i=r-1:r!=-1&&r!==n.length-1&&(i=r+1)}return n[i]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,e){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return e?.nextElementSibling;case"@prev":return e?.previousElementSibling;case"@parent":return e?.parentElement;case"@grandparent":return e?.parentElement?.parentElement;default:let n=typeof t;if(n==="string")return document.querySelector(t);if(n==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let r=(l=>!!(l&&l.constructor&&l.call&&l.apply))(t)?t():t;return r&&r.nodeType===9||this.isExist(r)?r:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,e){if(t){let n=t.getAttribute(e);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,e={},...n){if(t){let i=document.createElement(t);return this.setAttributes(i,e),i.append(...n),i}}static setAttribute(t,e="",n){this.isElement(t)&&n!==null&&n!==void 0&&t.setAttribute(e,n)}static setAttributes(t,e={}){if(this.isElement(t)){let n=(i,r)=>{let l=t?.$attrs?.[i]?[t?.$attrs?.[i]]:[];return[r].flat().reduce((a,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")a.push(u);else if(c==="object"){let b=Array.isArray(u)?n(i,u):Object.entries(u).map(([D,C])=>i==="style"&&(C||C===0)?`${D.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${C}`:C?D:void 0);a=b.length?a.concat(b.filter(D=>!!D)):a}}return a},l)};Object.entries(e).forEach(([i,r])=>{if(r!=null){let l=i.match(/^on(.+)/);l?t.addEventListener(l[1].toLowerCase(),r):i==="pBind"?this.setAttributes(t,r):(r=i==="class"?[...new Set(n("class",r))].join(" ").trim():i==="style"?n("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=r),t.setAttribute(i,r))}})}}static isFocusableElement(t,e=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`):!1}}return o})();function yo(){ce({variableName:jt("scrollbar.width").name})}function vo(){ue({variableName:jt("scrollbar.width").name})}var Fe=class{element;listener;scrollableParents;constructor(s,t=()=>{}){this.element=s,this.listener=t}bindScrollListener(){this.scrollableParents=Gt.getScrollableParents(this.element);for(let s=0;s<this.scrollableParents.length;s++)this.scrollableParents[s].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let s=0;s<this.scrollableParents.length;s++)this.scrollableParents[s].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var $e=(()=>{class o extends x{autofocus=!1;focused=!1;platformId=d(yt);document=d(ft);host=d(X);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){J(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=Gt.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(o)))(n||o)}})();static \u0275dir=I({type:o,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[v]})}return o})();var ln=["*"],an={root:"p-fluid"},Me=(()=>{class o extends _{name="fluid";classes=an;static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(o)))(n||o)}})();static \u0275prov=E({token:o,factory:o.\u0275fac})}return o})();var Ae=new B("FLUID_INSTANCE"),Qt=(()=>{class o extends x{$pcFluid=d(Ae,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(y,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=d(Me);static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(o)))(n||o)}})();static \u0275cmp=F({type:o,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(e,n){e&2&&k(n.cx("root"))},features:[S([Me,{provide:Ae,useExisting:o},{provide:M,useExisting:o}]),L([y]),v],ngContentSelectors:ln,decls:1,vars:0,template:function(e,n){e&1&&(Y(),K(0))},dependencies:[q],encapsulation:2,changeDetection:0})}return o})();var dn=["*"],cn=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Oe=(()=>{class o extends _{name="baseicon";css=cn;static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(o)))(n||o)}})();static \u0275prov=E({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Le=(()=>{class o extends x{spin=!1;_componentStyle=d(Oe);getClassNames(){return j("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(o)))(n||o)}})();static \u0275cmp=F({type:o,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(e,n){e&2&&k(n.getClassNames())},inputs:{spin:[2,"spin","spin",h]},features:[S([Oe]),v],ngContentSelectors:dn,decls:1,vars:0,template:function(e,n){e&1&&(Y(),K(0))},encapsulation:2,changeDetection:0})}return o})();var un=["data-p-icon","spinner"],ze=(()=>{class o extends Le{pathId;onInit(){this.pathId="url(#"+pt()+")"}static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(o)))(n||o)}})();static \u0275cmp=F({type:o,selectors:[["","data-p-icon","spinner"]],features:[v],attrs:un,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(e,n){e&1&&(gt(),Ft(0,"g"),Mt(1,"path",0),$t(),Ft(2,"defs")(3,"clipPath",1),Mt(4,"rect",2),$t()()),e&2&&(Q("clip-path",n.pathId),w(3),te("id",n.pathId))},encapsulation:2})}return o})();var Ve=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var pn=`
    ${Ve}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,bn={root:"p-ink"},He=(()=>{class o extends _{name="ripple";style=pn;classes=bn;static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(o)))(n||o)}})();static \u0275prov=E({token:o,factory:o.\u0275fac})}return o})();var je=(()=>{class o extends x{zone=d(Kt);_componentStyle=d(He);animationListener;mouseDownListener;timeout;constructor(){super(),T(()=>{J(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(t){let e=this.getInk();if(!e||this.document.defaultView?.getComputedStyle(e,null).display==="none")return;if(tt(e,"p-ink-active"),!Vt(e)&&!Ht(e)){let l=Math.max(be(this.el.nativeElement),ge(this.el.nativeElement));e.style.height=l+"px",e.style.width=l+"px"}let n=he(this.el.nativeElement),i=t.pageX-n.left+this.document.body.scrollTop-Ht(e)/2,r=t.pageY-n.top+this.document.body.scrollLeft-Vt(e)/2;this.renderer.setStyle(e,"top",r+"px"),this.renderer.setStyle(e,"left",i+"px"),dt(e,"p-ink-active"),this.timeout=setTimeout(()=>{let l=this.getInk();l&&tt(l,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let e=0;e<t.length;e++)if(typeof t[e].className=="string"&&t[e].className.indexOf("p-ink")!==-1)return t[e];return null}resetInk(){let t=this.getInk();t&&tt(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),tt(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,fe(t))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(e){return new(e||o)};static \u0275dir=I({type:o,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[S([He]),v]})}return o})();var We=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var hn=["content"],gn=["loadingicon"],fn=["icon"],mn=["*"],Xe=(o,s)=>({class:o,pt:s});function yn(o,s){o&1&&Jt(0)}function vn(o,s){if(o&1&&rt(0,"span",7),o&2){let t=N(3);k(t.cn(t.cx("loadingIcon"),"pi-spin",t.loadingIcon)),f("pBind",t.ptm("loadingIcon")),Q("aria-hidden",!0)}}function Cn(o,s){if(o&1&&(gt(),rt(0,"svg",8)),o&2){let t=N(3);k(t.cn(t.cx("loadingIcon"),t.spinnerIconClass())),f("pBind",t.ptm("loadingIcon"))("spin",!0),Q("aria-hidden",!0)}}function wn(o,s){if(o&1&&(wt(0),G(1,vn,1,4,"span",3)(2,Cn,1,5,"svg",6),St()),o&2){let t=N(2);w(),f("ngIf",t.loadingIcon),w(),f("ngIf",!t.loadingIcon)}}function Sn(o,s){}function xn(o,s){if(o&1&&G(0,Sn,0,0,"ng-template",9),o&2){let t=N(2);f("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function kn(o,s){if(o&1&&(wt(0),G(1,wn,3,2,"ng-container",2)(2,xn,1,1,null,5),St()),o&2){let t=N();w(),f("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),w(),f("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",Ot(3,Xe,t.cx("loadingIcon"),t.ptm("loadingIcon")))}}function _n(o,s){if(o&1&&rt(0,"span",7),o&2){let t=N(2);k(t.cn("icon",t.iconClass())),f("pBind",t.ptm("icon"))}}function In(o,s){}function En(o,s){if(o&1&&G(0,In,0,0,"ng-template",9),o&2){let t=N(2);f("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function Tn(o,s){if(o&1&&(wt(0),G(1,_n,1,3,"span",3)(2,En,1,1,null,5),St()),o&2){let t=N();w(),f("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),w(),f("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",Ot(3,Xe,t.cx("icon"),t.ptm("icon")))}}function Dn(o,s){if(o&1&&(Bt(0,"span",7),kt(1),Nt()),o&2){let t=N();k(t.cx("label")),f("pBind",t.ptm("label")),Q("aria-hidden",t.icon&&!t.label),w(),_t(t.label)}}function Pn(o,s){if(o&1&&rt(0,"p-badge",10),o&2){let t=N();f("value",t.badge)("severity",t.badgeSeverity)("pt",t.ptm("pcBadge"))}}var Bn={root:({instance:o})=>["p-button p-component",{"p-button-icon-only":(o.icon||o.buttonProps?.icon||o.iconTemplate||o._iconTemplate||o.loadingIcon||o.loadingIconTemplate||o._loadingIconTemplate)&&!o.label&&!o.buttonProps?.label,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading||o.buttonProps?.loading,"p-button-link":o.link||o.buttonProps?.link,[`p-button-${o.severity||o.buttonProps?.severity}`]:o.severity||o.buttonProps?.severity,"p-button-raised":o.raised||o.buttonProps?.raised,"p-button-rounded":o.rounded||o.buttonProps?.rounded,"p-button-text":o.text||o.variant==="text"||o.buttonProps?.text||o.buttonProps?.variant==="text","p-button-outlined":o.outlined||o.variant==="outlined"||o.buttonProps?.outlined||o.buttonProps?.variant==="outlined","p-button-sm":o.size==="small"||o.buttonProps?.size==="small","p-button-lg":o.size==="large"||o.buttonProps?.size==="large","p-button-plain":o.plain||o.buttonProps?.plain,"p-button-fluid":o.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:o})=>["p-button-icon",{[`p-button-icon-${o.iconPos||o.buttonProps?.iconPos}`]:o.label||o.buttonProps?.label,"p-button-icon-left":(o.iconPos==="left"||o.buttonProps?.iconPos==="left")&&o.label||o.buttonProps?.label,"p-button-icon-right":(o.iconPos==="right"||o.buttonProps?.iconPos==="right")&&o.label||o.buttonProps?.label},o.icon,o.buttonProps?.icon],spinnerIcon:({instance:o})=>Object.entries(o.iconClass()).filter(([,s])=>!!s).reduce((s,[t])=>s+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},it=(()=>{class o extends _{name="button";style=We;classes=Bn;static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(o)))(n||o)}})();static \u0275prov=E({token:o,factory:o.\u0275fac})}return o})();var Re=new B("BUTTON_INSTANCE"),Ue=new B("BUTTON_DIRECTIVE_INSTANCE"),Ge=new B("BUTTON_LABEL_INSTANCE"),Qe=new B("BUTTON_ICON_INSTANCE"),R={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},qe=(()=>{class o extends x{ptButtonLabel=m();$pcButtonLabel=d(Ge,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(y,{self:!0});constructor(){super(),T(()=>{this.ptButtonLabel()&&this.directivePT.set(this.ptButtonLabel())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(e){return new(e||o)};static \u0275dir=I({type:o,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(e,n){e&2&&xt("p-button-label",!0)},inputs:{ptButtonLabel:[1,"ptButtonLabel"]},features:[S([it,{provide:Ge,useExisting:o},{provide:M,useExisting:o}]),L([y]),v]})}return o})(),Ze=(()=>{class o extends x{ptButtonIcon=m();$pcButtonIcon=d(Qe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(y,{self:!0});constructor(){super(),T(()=>{this.ptButtonIcon()&&this.directivePT.set(this.ptButtonIcon())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(e){return new(e||o)};static \u0275dir=I({type:o,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(e,n){e&2&&xt("p-button-icon",!0)},inputs:{ptButtonIcon:[1,"ptButtonIcon"]},features:[S([it,{provide:Qe,useExisting:o},{provide:M,useExisting:o}]),L([y]),v]})}return o})(),Ai=(()=>{class o extends x{$pcButtonDirective=d(Ue,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(y,{self:!0});_componentStyle=d(it);ptButtonDirective=m();hostName="";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}constructor(){super(),T(()=>{this.ptButtonDirective()&&this.directivePT.set(this.ptButtonDirective())})}text=!1;plain=!1;raised=!1;size;outlined=!1;rounded=!1;iconPos="left";loadingIcon;fluid=m(void 0,{transform:h});iconSignal=Lt(Ze);labelSignal=Lt(qe);isIconOnly=$(()=>!!(!this.labelSignal()&&this.iconSignal()));_label;_icon;_loading=!1;_severity;_buttonProps;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(R);pcFluid=d(Qt,{optional:!0,host:!0,skipSelf:!0});isTextButton=$(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}set label(t){this._label=t,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}get icon(){return this._icon}set icon(t){this._icon=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(t){this._loading=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([e,n])=>this[`_${e}`]!==n&&(this[`_${e}`]=n))}get severity(){return this._severity}set severity(t){this._severity=t,this.initialized&&this.setStyleClass()}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;onAfterViewInit(){dt(this.htmlElement,this.getStyleClass().join(" ")),J(this.platformId)&&(this.createIcon(),this.createLabel(),this.initialized=!0)}getStyleClass(){let t=[R.button,R.component];return this.icon&&!this.label&&ct(this.htmlElement.textContent)&&t.push(R.iconOnly),this.loading&&(t.push(R.disabled,R.loading),!this.icon&&this.label&&t.push(R.labelOnly),this.icon&&!this.label&&!ct(this.htmlElement.textContent)&&t.push(R.iconOnly)),this.text&&t.push("p-button-text"),this.severity&&t.push(`p-button-${this.severity}`),this.plain&&t.push("p-button-plain"),this.raised&&t.push("p-button-raised"),this.size&&t.push(`p-button-${this.size}`),this.outlined&&t.push("p-button-outlined"),this.rounded&&t.push("p-button-rounded"),this.size==="small"&&t.push("p-button-sm"),this.size==="large"&&t.push("p-button-lg"),this.hasFluid&&t.push("p-button-fluid"),t}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let t=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...t)}removeExistingSeverityClass(){let t=["success","info","warn","danger","help","primary","secondary","contrast"],e=this.htmlElement.classList.value.split(" ").find(n=>t.some(i=>n===`p-button-${i}`));e&&this.htmlElement.classList.remove(e)}createLabel(){if(!et(this.htmlElement,".p-button-label")&&this.label){let e=It("span",{class:this.cx("label"),"p-bind":this.ptm("label"),"aria-hidden":this.icon&&!this.label?"true":null});e.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(e)}}createIcon(){if(!et(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let e=this.label?"p-button-icon-"+this.iconPos:null,n=this.getIconClass(),i=It("span",{class:this.cn(this.cx("icon"),e,n),"aria-hidden":"true","p-bind":this.ptm("icon")});!this.loadingIcon&&this.loading&&(i.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(i,this.htmlElement.firstChild)}}updateLabel(){let t=et(this.htmlElement,".p-button-label");if(!this.label){t&&this.htmlElement.removeChild(t);return}t?t.textContent=this.label:this.createLabel()}updateIcon(){let t=et(this.htmlElement,".p-button-icon"),e=et(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&t?t.innerHTML=this.spinnerIcon:t?.innerHTML&&(t.innerHTML=""),t?this.iconPos?t.className="p-button-icon "+(e?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():t.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}onDestroy(){this.initialized=!1}static \u0275fac=function(e){return new(e||o)};static \u0275dir=I({type:o,selectors:[["","pButton",""]],contentQueries:function(e,n,i){e&1&&(At(i,n.iconSignal,Ze,5),At(i,n.labelSignal,qe,5)),e&2&&ne(2)},hostVars:4,hostBindings:function(e,n){e&2&&xt("p-button-icon-only",n.isIconOnly())("p-button-text",n.isTextButton())},inputs:{ptButtonDirective:[1,"ptButtonDirective"],hostName:"hostName",text:[2,"text","text",h],plain:[2,"plain","plain",h],raised:[2,"raised","raised",h],size:"size",outlined:[2,"outlined","outlined",h],rounded:[2,"rounded","rounded",h],iconPos:"iconPos",loadingIcon:"loadingIcon",fluid:[1,"fluid"],label:"label",icon:"icon",loading:"loading",buttonProps:"buttonProps",severity:"severity"},features:[S([it,{provide:Ue,useExisting:o},{provide:M,useExisting:o}]),L([y]),v]})}return o})(),Nn=(()=>{class o extends x{hostName="";$pcButton=d(Re,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(y,{self:!0});_componentStyle=d(it);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=m(void 0,{transform:h});onClick=new vt;onFocus=new vt;onBlur=new vt;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=d(Qt,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[e])=>t+` ${e}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,[this.icon]:!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(o)))(n||o)}})();static \u0275cmp=F({type:o,selectors:[["p-button"]],contentQueries:function(e,n,i){if(e&1&&(st(i,hn,5),st(i,gn,5),st(i,fn,5),st(i,we,4)),e&2){let r;lt(r=at())&&(n.contentTemplate=r.first),lt(r=at())&&(n.loadingIconTemplate=r.first),lt(r=at())&&(n.iconTemplate=r.first),lt(r=at())&&(n.templates=r)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",h],raised:[2,"raised","raised",h],rounded:[2,"rounded","rounded",h],text:[2,"text","text",h],plain:[2,"plain","plain",h],outlined:[2,"outlined","outlined",h],link:[2,"link","link",h],tabindex:[2,"tabindex","tabindex",se],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",h],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",h],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[S([it,{provide:Re,useExisting:o},{provide:M,useExisting:o}]),L([y]),v],ngContentSelectors:mn,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt"]],template:function(e,n){e&1&&(Y(),Bt(0,"button",0),ee("click",function(r){return n.onClick.emit(r)})("focus",function(r){return n.onFocus.emit(r)})("blur",function(r){return n.onBlur.emit(r)}),K(1),G(2,yn,1,0,"ng-container",1)(3,kn,3,6,"ng-container",2)(4,Tn,3,6,"ng-container",2)(5,Dn,2,5,"span",3)(6,Pn,1,3,"p-badge",4),Nt()),e&2&&(k(n.cn(n.cx("root"),n.styleClass,n.buttonProps==null?null:n.buttonProps.styleClass)),f("ngStyle",n.style||(n.buttonProps==null?null:n.buttonProps.style))("disabled",n.disabled||n.loading||(n.buttonProps==null?null:n.buttonProps.disabled))("pAutoFocus",n.autofocus||(n.buttonProps==null?null:n.buttonProps.autofocus))("pBind",n.ptm("root")),Q("type",n.type||(n.buttonProps==null?null:n.buttonProps.type))("aria-label",n.ariaLabel||(n.buttonProps==null?null:n.buttonProps.ariaLabel))("tabindex",n.tabindex||(n.buttonProps==null?null:n.buttonProps.tabindex)),w(2),f("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),w(),f("ngIf",n.loading),w(),f("ngIf",!n.loading),w(),f("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.label),w(),f("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.badge))},dependencies:[q,le,de,ae,je,$e,ze,Ne,Ut,H,y],encapsulation:2,changeDetection:0})}return o})(),Oi=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=O({type:o});static \u0275inj=A({imports:[q,Nn,H,H]})}return o})();export{pt as a,M as b,x as c,Gt as d,yo as e,vo as f,Fe as g,$e as h,y as i,Te as j,Ut as k,Ne as l,Qt as m,Le as n,ze as o,je as p,Ai as q,Nn as r,Oi as s};
