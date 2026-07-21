import{c as It,d as xt,e as vt,f as Oe,g as Be,i as _e}from"./chunk-LQN25BJ6.js";import{a as Pt}from"./chunk-HX4QZFPO.js";import{a as St}from"./chunk-QZEUH3GS.js";import{a as Ve,b as Ie}from"./chunk-WMVSSRLU.js";import{c as ae}from"./chunk-7NAGBASY.js";import{c as Bt,d as Ue,f as Ge,h as We}from"./chunk-36JN3LZY.js";import{a as De,b as ge,c as J,d as kt,g as wt,i as y,j as he,k as Ae,l as X,n as Lt,p as Fe,q as Et,s as Ot}from"./chunk-TE2LWLR2.js";import{Ba as Mt,Ea as fe,Fa as E,L as yt,La as be,O as Ct,T as ve,U as q,V as D,ea as ye,i as ht,j as Pe,ja as Ce,k as W,ma as Y,n as Ee,o as de,qa as Qe,ra as Ze,s as K,w as $,xa as Tt}from"./chunk-3RS5R7K4.js";import{A as at,Ab as F,B as rt,Bb as N,Bc as gt,Cb as L,Db as _t,E as st,Fc as R,Gb as T,Gc as G,Hb as s,Ib as ke,Jb as we,Ka as le,Kb as S,La as me,Lb as ue,Mb as I,Na as m,Nb as x,Qb as P,S as lt,Sa as C,T as te,Tb as Z,U as re,Ub as p,Vb as O,W as se,Wb as ne,Xa as pt,Xb as ft,Y as M,Ya as w,a as nt,b as it,ba as g,bb as B,ca as h,cb as ce,cc as ie,da as j,dc as Le,eb as ut,ec as oe,fa as mt,fb as z,fc as U,gb as pe,hb as c,ka as Q,l as ot,mc as $e,nb as _,nc as qe,pa as H,qc as V,ra as ct,sb as r,tb as d,ub as u,va as Me,vb as f,wc as je,xc as bt,yb as dt,zb as A,zc as Se}from"./chunk-D2PW6A4I.js";var Jt=["data-p-icon","bars"],Dt=(()=>{class n extends Lt{static \u0275fac=(()=>{let e;return function(i){return(e||(e=H(n)))(i||n)}})();static \u0275cmp=B({type:n,selectors:[["","data-p-icon","bars"]],features:[z],attrs:Jt,decls:1,vars:0,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z","fill","currentColor"]],template:function(t,i){t&1&&(j(),dt(0,"path",0))},encapsulation:2})}return n})();var At=`
    .p-menubar {
        display: flex;
        align-items: center;
        background: dt('menubar.background');
        border: 1px solid dt('menubar.border.color');
        border-radius: dt('menubar.border.radius');
        color: dt('menubar.color');
        padding: dt('menubar.padding');
        gap: dt('menubar.gap');
    }

    .p-menubar-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-menubar-root-list,
    .p-menubar-submenu {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
    }

    .p-menubar-root-list {
        align-items: center;
        flex-wrap: wrap;
        gap: dt('menubar.gap');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
        border-radius: dt('menubar.base.item.border.radius');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.base.item.padding');
    }

    .p-menubar-item-content {
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration');
        border-radius: dt('menubar.item.border.radius');
        color: dt('menubar.item.color');
    }

    .p-menubar-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menubar.item.padding');
        gap: dt('menubar.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menubar-item-label {
        line-height: 1;
    }

    .p-menubar-item-icon {
        color: dt('menubar.item.icon.color');
    }

    .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.color');
        margin-left: auto;
        font-size: dt('menubar.submenu.icon.size');
        width: dt('menubar.submenu.icon.size');
        height: dt('menubar.submenu.icon.size');
    }

    .p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-item.p-focus > .p-menubar-item-content {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item-active > .p-menubar-item-content {
        color: dt('menubar.item.active.color');
        background: dt('menubar.item.active.background');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.active.color');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.active.color');
    }

    .p-menubar-submenu {
        display: none;
        position: absolute;
        min-width: 12.5rem;
        z-index: 1;
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        border-radius: dt('menubar.submenu.border.radius');
        box-shadow: dt('menubar.submenu.shadow');
        color: dt('menubar.submenu.color');
        flex-direction: column;
        padding: dt('menubar.submenu.padding');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-submenu .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-submenu .p-menubar-item {
        position: relative;
    }

    .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-menubar-end {
        margin-left: auto;
        align-self: center;
    }

    .p-menubar-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('menubar.mobile.button.size');
        height: dt('menubar.mobile.button.size');
        position: relative;
        color: dt('menubar.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('menubar.mobile.button.border.radius');
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration'),
            outline-color dt('menubar.transition.duration');
        outline-color: transparent;
    }

    .p-menubar-button:hover {
        color: dt('menubar.mobile.button.hover.color');
        background: dt('menubar.mobile.button.hover.background');
    }

    .p-menubar-button:focus-visible {
        box-shadow: dt('menubar.mobile.button.focus.ring.shadow');
        outline: dt('menubar.mobile.button.focus.ring.width') dt('menubar.mobile.button.focus.ring.style') dt('menubar.mobile.button.focus.ring.color');
        outline-offset: dt('menubar.mobile.button.focus.ring.offset');
    }

    .p-menubar-mobile {
        position: relative;
    }

    .p-menubar-mobile .p-menubar-button {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list {
        position: absolute;
        display: none;
        width: 100%;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        padding: dt('menubar.submenu.padding');
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        box-shadow: dt('menubar.submenu.shadow');
        border-radius: dt('menubar.submenu.border.radius');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-mobile .p-menubar-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.item.padding');
    }

    .p-menubar-mobile-active .p-menubar-root-list {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-item {
        width: 100%;
        position: static;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),
    .p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-90deg);
    }

    .p-menubar-mobile .p-menubar-submenu {
        width: 100%;
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('menubar.submenu.mobile.indent');
        padding-inline-end: 0;
    }
`;var zt=(n,l)=>({instance:n,processedItem:l}),tn=()=>({exact:!1}),nn=(n,l)=>({$implicit:n,root:l});function on(n,l){if(n&1&&f(0,"li",6),n&2){let e=s().$implicit,t=s();Z(t.getItemProp(e,"style")),p(t.cn(t.cx("separator"),e==null?null:e.styleClass)),r("pBind",t.ptm("separator")),_("id",t.getItemId(e))}}function an(n,l){if(n&1&&f(0,"span",17),n&2){let e=s(4),t=e.$implicit,i=e.index,o=s();p(o.cn(o.cx("itemIcon"),o.getItemProp(t,"icon"),o.getItemProp(t,"iconClass"))),r("ngStyle",o.getItemProp(t,"iconStyle"))("pBind",o.getPTOptions(t,i,"itemIcon")),_("tabindex",-1)}}function rn(n,l){if(n&1&&(d(0,"span",18),O(1),u()),n&2){let e=s(4),t=e.$implicit,i=e.index,o=s();p(o.cx("itemLabel")),r("id",o.getItemLabelId(t))("pBind",o.getPTOptions(t,i,"itemLabel")),m(),ft(" ",o.getItemLabel(t)," ")}}function sn(n,l){if(n&1&&f(0,"span",19),n&2){let e=s(4),t=e.$implicit,i=e.index,o=s();p(o.cx("itemLabel")),r("innerHTML",o.getItemLabel(t),le)("id",o.getItemLabelId(t))("pBind",o.getPTOptions(t,i,"itemLabel"))}}function ln(n,l){if(n&1&&f(0,"p-badge",20),n&2){let e=s(4),t=e.$implicit,i=e.index,o=s();p(o.getItemProp(t,"badgeStyleClass")),r("value",o.getItemProp(t,"badge"))("pt",o.getPTOptions(t,i,"pcBadge"))}}function mn(n,l){if(n&1&&(j(),f(0,"svg",24)),n&2){let e=s(6),t=e.$implicit,i=e.index,o=s();p(o.cx("submenuIcon")),r("pBind",o.getPTOptions(t,i,"submenuIcon"))}}function cn(n,l){if(n&1&&(j(),f(0,"svg",25)),n&2){let e=s(6),t=e.$implicit,i=e.index,o=s();p(o.cx("submenuIcon")),r("pBind",o.getPTOptions(t,i,"submenuIcon"))}}function pn(n,l){if(n&1&&(A(0),c(1,mn,1,3,"svg",22)(2,cn,1,3,"svg",23),F()),n&2){let e=s(6);m(),r("ngIf",e.root),m(),r("ngIf",!e.root)}}function un(n,l){}function dn(n,l){n&1&&c(0,un,0,0,"ng-template")}function _n(n,l){if(n&1&&(A(0),c(1,pn,3,2,"ng-container",9)(2,dn,1,0,null,21),F()),n&2){let e=s(5);m(),r("ngIf",!e.submenuiconTemplate),m(),r("ngTemplateOutlet",e.submenuiconTemplate)}}function fn(n,l){if(n&1&&(d(0,"a",13),c(1,an,1,5,"span",14)(2,rn,2,5,"span",15)(3,sn,1,5,"ng-template",null,1,V)(5,ln,1,4,"p-badge",16)(6,_n,3,2,"ng-container",9),u()),n&2){let e=P(4),t=s(3),i=t.$implicit,o=t.index,a=s();p(a.cx("itemLink")),r("pBind",a.getPTOptions(i,o,"itemLink")),_("href",a.getItemProp(i,"url"),me)("data-automationid",a.getItemProp(i,"automationId"))("title",a.getItemProp(i,"title"))("target",a.getItemProp(i,"target"))("tabindex",-1),m(),r("ngIf",a.getItemProp(i,"icon")),m(),r("ngIf",a.getItemProp(i,"escape"))("ngIfElse",e),m(3),r("ngIf",a.getItemProp(i,"badge")),m(),r("ngIf",a.isItemGroup(i))}}function bn(n,l){if(n&1&&f(0,"span",17),n&2){let e=s(4),t=e.$implicit,i=e.index,o=s();p(o.cn(o.cx("itemIcon"),o.getItemProp(t,"icon"),o.getItemProp(t,"iconClass"))),r("ngStyle",o.getItemProp(t,"iconStyle"))("pBind",o.getPTOptions(t,i,"itemIcon")),_("tabindex",-1)}}function gn(n,l){if(n&1&&(d(0,"span",28),O(1),u()),n&2){let e=s(4),t=e.$implicit,i=e.index,o=s();p(o.cx("itemLabel")),r("pBind",o.getPTOptions(t,i,"itemLabel")),m(),ne(o.getItemLabel(t))}}function hn(n,l){if(n&1&&f(0,"span",29),n&2){let e=s(4),t=e.$implicit,i=e.index,o=s();p(o.cx("itemLabel")),r("innerHTML",o.getItemLabel(t),le)("pBind",o.getPTOptions(t,i,"itemLabel"))}}function In(n,l){if(n&1&&f(0,"p-badge",20),n&2){let e=s(4),t=e.$implicit,i=e.index,o=s();p(o.getItemProp(t,"badgeStyleClass")),r("value",o.getItemProp(t,"badge"))("pt",o.getPTOptions(t,i,"pcBadge"))}}function xn(n,l){if(n&1&&(j(),f(0,"svg",24)),n&2){let e=s(6),t=e.$implicit,i=e.index,o=s();p(o.cx("submenuIcon")),r("pBind",o.getPTOptions(t,i,"submenuIcon"))}}function vn(n,l){if(n&1&&(j(),f(0,"svg",25)),n&2){let e=s(6),t=e.$implicit,i=e.index,o=s();p(o.cx("submenuIcon")),r("pBind",o.getPTOptions(t,i,"submenuIcon"))}}function yn(n,l){if(n&1&&(A(0),c(1,xn,1,3,"svg",22)(2,vn,1,3,"svg",23),F()),n&2){let e=s(6);m(),r("ngIf",e.root),m(),r("ngIf",!e.root)}}function Cn(n,l){}function Tn(n,l){n&1&&c(0,Cn,0,0,"ng-template")}function Mn(n,l){if(n&1&&(A(0),c(1,yn,3,2,"ng-container",9)(2,Tn,1,0,null,21),F()),n&2){let e=s(5);m(),r("ngIf",!e.submenuiconTemplate),m(),r("ngTemplateOutlet",e.submenuiconTemplate)}}function kn(n,l){if(n&1&&(d(0,"a",26),c(1,bn,1,5,"span",14)(2,gn,2,4,"span",27)(3,hn,1,4,"ng-template",null,2,V)(5,In,1,4,"p-badge",16)(6,Mn,3,2,"ng-container",9),u()),n&2){let e=P(4),t=s(3),i=t.$implicit,o=t.index,a=s();p(a.cx("itemLink")),r("routerLink",a.getItemProp(i,"routerLink"))("queryParams",a.getItemProp(i,"queryParams"))("routerLinkActive","p-menubar-item-link-active")("routerLinkActiveOptions",a.getItemProp(i,"routerLinkActiveOptions")||Le(22,tn))("target",a.getItemProp(i,"target"))("fragment",a.getItemProp(i,"fragment"))("queryParamsHandling",a.getItemProp(i,"queryParamsHandling"))("preserveFragment",a.getItemProp(i,"preserveFragment"))("skipLocationChange",a.getItemProp(i,"skipLocationChange"))("replaceUrl",a.getItemProp(i,"replaceUrl"))("state",a.getItemProp(i,"state"))("pBind",a.getPTOptions(i,o,"itemLink")),_("data-automationid",a.getItemProp(i,"automationId"))("title",a.getItemProp(i,"title"))("tabindex",-1),m(),r("ngIf",a.getItemProp(i,"icon")),m(),r("ngIf",a.getItemProp(i,"escape"))("ngIfElse",e),m(3),r("ngIf",a.getItemProp(i,"badge")),m(),r("ngIf",a.isItemGroup(i))}}function wn(n,l){if(n&1&&(A(0),c(1,fn,7,13,"a",11)(2,kn,7,23,"a",12),F()),n&2){let e=s(2).$implicit,t=s();m(),r("ngIf",!t.getItemProp(e,"routerLink")),m(),r("ngIf",t.getItemProp(e,"routerLink"))}}function Ln(n,l){}function Sn(n,l){n&1&&c(0,Ln,0,0,"ng-template")}function Pn(n,l){if(n&1&&(A(0),c(1,Sn,1,0,null,30),F()),n&2){let e=s(2).$implicit,t=s();m(),r("ngTemplateOutlet",t.itemTemplate)("ngTemplateOutletContext",U(2,nn,e.item,t.root))}}function En(n,l){if(n&1){let e=L();d(0,"ul",31),T("itemClick",function(i){g(e);let o=s(3);return h(o.itemClick.emit(i))})("itemMouseEnter",function(i){g(e);let o=s(3);return h(o.onItemMouseEnter(i))}),u()}if(n&2){let e=s(2).$implicit,t=s();r("itemTemplate",t.itemTemplate)("items",e.items)("mobileActive",t.mobileActive)("autoDisplay",t.autoDisplay)("menuId",t.menuId)("activeItemPath",t.activeItemPath)("focusedItemId",t.focusedItemId)("level",t.level+1)("inlineStyles",t.sx("submenu",!0,U(12,zt,t,e)))("pt",t.pt())("pBind",t.ptm("submenu")),_("aria-labelledby",t.getItemLabelId(e))}}function On(n,l){if(n&1){let e=L();d(0,"li",7,0)(2,"div",8),T("click",function(i){g(e);let o=s().$implicit,a=s();return h(a.onItemClick(i,o))})("mouseenter",function(i){g(e);let o=s().$implicit,a=s();return h(a.onItemMouseEnter({$event:i,processedItem:o}))}),c(3,wn,3,2,"ng-container",9)(4,Pn,2,5,"ng-container",9),u(),c(5,En,1,15,"ul",10),u()}if(n&2){let e=s(),t=e.$implicit,i=e.index,o=s();Z(o.getItemProp(t,"style")),p(o.cn(o.cx("item",U(22,zt,o,t)),o.getItemProp(t,"styleClass"))),r("pBind",o.getPTOptions(t,i,"item"))("tooltipOptions",o.getItemProp(t,"tooltipOptions")),_("id",o.getItemId(t))("data-p-highlight",o.isItemActive(t))("data-p-focused",o.isItemFocused(t))("data-p-disabled",o.isItemDisabled(t))("aria-label",o.getItemLabel(t))("aria-disabled",o.isItemDisabled(t)||void 0)("aria-haspopup",o.isItemGroup(t)&&!o.getItemProp(t,"to")?"menu":void 0)("aria-expanded",o.isItemGroup(t)?o.isItemActive(t):void 0)("aria-setsize",o.getAriaSetSize())("aria-posinset",o.getAriaPosInset(i)),m(2),p(o.cx("itemContent")),r("pBind",o.getPTOptions(t,i,"itemContent")),m(),r("ngIf",!o.itemTemplate),m(),r("ngIf",o.itemTemplate),m(),r("ngIf",o.isItemVisible(t)&&o.isItemGroup(t))}}function Bn(n,l){if(n&1&&c(0,on,1,6,"li",4)(1,On,6,25,"li",5),n&2){let e=l.$implicit,t=s();r("ngIf",t.isItemVisible(e)&&t.getItemProp(e,"separator")),m(),r("ngIf",t.isItemVisible(e)&&!t.getItemProp(e,"separator"))}}var Dn=["start"],An=["end"],Fn=["item"],Vn=["menuicon"],Rn=["submenuicon"],Hn=["menubutton"],zn=["rootmenu"],Kn=["*"];function Nn(n,l){n&1&&N(0)}function $n(n,l){if(n&1&&(d(0,"div",7),c(1,Nn,1,0,"ng-container",8),u()),n&2){let e=s();p(e.cx("start")),r("pBind",e.ptm("start")),m(),r("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function qn(n,l){if(n&1&&(j(),f(0,"svg",11)),n&2){let e=s(2);r("pBind",e.ptm("buttonIcon"))}}function jn(n,l){}function Qn(n,l){n&1&&c(0,jn,0,0,"ng-template")}function Zn(n,l){if(n&1){let e=L();d(0,"a",9,2),T("click",function(i){g(e);let o=s();return h(o.menuButtonClick(i))})("keydown",function(i){g(e);let o=s();return h(o.menuButtonKeydown(i))}),c(2,qn,1,1,"svg",10)(3,Qn,1,0,null,8),u()}if(n&2){let e=s();p(e.cx("button")),r("pBind",e.ptm("button")),_("aria-haspopup",!!(e.model.length&&e.model.length>0))("aria-expanded",e.mobileActive)("aria-controls",e.id)("aria-label",e.config.translation.aria.navigation),m(2),r("ngIf",!e.menuIconTemplate&&!e._menuIconTemplate),m(),r("ngTemplateOutlet",e.menuIconTemplate||e._menuIconTemplate)}}function Un(n,l){n&1&&N(0)}function Gn(n,l){if(n&1&&(d(0,"div",7),c(1,Un,1,0,"ng-container",8),u()),n&2){let e=s();p(e.cx("end")),r("pBind",e.ptm("end")),m(),r("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}function Wn(n,l){if(n&1&&(d(0,"div"),we(1),u()),n&2){let e=s();p(e.cx("end"))}}var Yn={submenu:({instance:n,processedItem:l})=>({display:n.isItemActive(l)?"flex":"none"})},Jn={root:({instance:n})=>["p-menubar p-component",{"p-menubar-mobile":n.queryMatches(),"p-menubar-mobile-active":n.mobileActive}],start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:({instance:n,processedItem:l})=>["p-menubar-item",{"p-menubar-item-active":n.isItemActive(l),"p-focus":n.isItemFocused(l),"p-disabled":n.isItemDisabled(l)}],itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},Ye=(()=>{class n extends be{name="menubar";style=At;classes=Jn;inlineStyles=Yn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=H(n)))(i||n)}})();static \u0275prov=te({token:n,factory:n.\u0275fac})}return n})();var Ft=new se("MENUBAR_INSTANCE"),Je=(()=>{class n{autoHide;autoHideDelay;mouseLeaves=new ot;mouseLeft$=this.mouseLeaves.pipe(st(()=>at(this.autoHideDelay)),rt(e=>this.autoHide&&e));static \u0275fac=function(t){return new(t||n)};static \u0275prov=te({token:n,factory:n.\u0275fac})}return n})(),Xn=(()=>{class n extends J{items;itemTemplate;root=!1;autoZIndex=!0;baseZIndex=0;mobileActive;autoDisplay;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;activeItemPath;inlineStyles;submenuiconTemplate;itemClick=new C;itemMouseEnter=new C;menuFocus=new C;menuBlur=new C;menuKeydown=new C;mouseLeaveSubscriber;menubarService=M(Je);_componentStyle=M(Ye);hostName="Menubar";onInit(){this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.cd.markForCheck()})}onItemClick(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.itemClick.emit({originalEvent:e,processedItem:t,isFocus:!0})}getItemProp(e,t,i=null){return e&&e.item?Ze(e.item[t],i):void 0}getItemId(e){return e.item&&e.item?.id?e.item.id:`${this.menuId}_${e.key}`}getItemLabelId(e){return`${this.menuId}_${e.key}_label`}getItemLabel(e){return this.getItemProp(e,"label")}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemActive(e){return this.activeItemPath?this.activeItemPath.some(t=>t.key===e.key):!1}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return Y(e.items)}getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-this.items.slice(0,e).filter(t=>this.isItemVisible(t)&&this.getItemProp(t,"separator")).length+1}onItemMouseEnter(e){if(this.autoDisplay){let{event:t,processedItem:i}=e;this.itemMouseEnter.emit({originalEvent:t,processedItem:i})}}getPTOptions(e,t,i){return this.ptm(i,{context:{item:e.item,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e),level:this.level}})}onDestroy(){this.mouseLeaveSubscriber?.unsubscribe()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=H(n)))(i||n)}})();static \u0275cmp=B({type:n,selectors:[["p-menubarSub"],["p-menubarsub"],["","pMenubarSub",""]],hostAttrs:["role","menubar"],hostVars:6,hostBindings:function(t,i){t&2&&(_t("id",i.root?i.menuId:null),_("aria-activedescendant",i.focusedItemId),Z(i.inlineStyles),p(i.level===0?i.cx("rootList"):i.cx("submenu")))},inputs:{items:"items",itemTemplate:"itemTemplate",root:[2,"root","root",R],autoZIndex:[2,"autoZIndex","autoZIndex",R],baseZIndex:[2,"baseZIndex","baseZIndex",G],mobileActive:[2,"mobileActive","mobileActive",R],autoDisplay:[2,"autoDisplay","autoDisplay",R],menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",G],focusedItemId:"focusedItemId",activeItemPath:"activeItemPath",inlineStyles:"inlineStyles",submenuiconTemplate:"submenuiconTemplate"},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},features:[z],decls:1,vars:1,consts:[["listItem",""],["htmlLabel",""],["htmlRouteLabel",""],["ngFor","",3,"ngForOf"],["role","separator",3,"style","class","pBind",4,"ngIf"],["role","menuitem","pTooltip","",3,"style","class","pBind","tooltipOptions",4,"ngIf"],["role","separator",3,"pBind"],["role","menuitem","pTooltip","",3,"pBind","tooltipOptions"],[3,"click","mouseenter","pBind"],[4,"ngIf"],["pMenubarSub","",3,"itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","inlineStyles","pt","pBind","itemClick","itemMouseEnter",4,"ngIf"],["pRipple","",3,"class","pBind",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","class","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind",4,"ngIf"],["pRipple","",3,"pBind"],[3,"class","ngStyle","pBind",4,"ngIf"],[3,"class","id","pBind",4,"ngIf","ngIfElse"],[3,"class","value","pt",4,"ngIf"],[3,"ngStyle","pBind"],[3,"id","pBind"],[3,"innerHTML","id","pBind"],[3,"value","pt"],[4,"ngTemplateOutlet"],["data-p-icon","angle-down",3,"class","pBind",4,"ngIf"],["data-p-icon","angle-right",3,"class","pBind",4,"ngIf"],["data-p-icon","angle-down",3,"pBind"],["data-p-icon","angle-right",3,"pBind"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind"],[3,"class","pBind",4,"ngIf","ngIfElse"],[3,"pBind"],[3,"innerHTML","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pMenubarSub","",3,"itemClick","itemMouseEnter","itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","inlineStyles","pt","pBind"]],template:function(t,i){t&1&&c(0,Bn,2,2,"ng-template",3),t&2&&r("ngForOf",i.items)},dependencies:[n,K,Pe,W,de,Ee,_e,Oe,Be,Fe,Ie,Ve,y,St,Pt,X,Ae,E,he],encapsulation:2})}return n})(),Xe=(()=>{class n extends J{document;platformId;el;renderer;cd;menubarService;$pcMenubar=M(Ft,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=M(y,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}set model(e){this._model=e,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}styleClass;autoZIndex=!0;baseZIndex=0;autoDisplay=!0;autoHide;breakpoint="960px";autoHideDelay=100;id;ariaLabel;ariaLabelledBy;onFocus=new C;onBlur=new C;menubutton;rootmenu;mobileActive;matchMediaListener;query;queryMatches=Q(!1);outsideClickListener;resizeListener;mouseLeaveSubscriber;dirty=!1;focused=!1;activeItemPath=Q([]);number=Q(0);focusedItemInfo=Q({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_componentStyle=M(Ye);_model;get visibleItems(){let e=this.activeItemPath().find(t=>t.key===this.focusedItemInfo().parentKey);return e?e.items:this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let e=this.focusedItemInfo();return e.item&&e.item?.id?e.item.id:e.index!==-1?`${this.id}${Y(e.parentKey)?"_"+e.parentKey:""}_${e.index}`:null}constructor(e,t,i,o,a,b){super(),this.document=e,this.platformId=t,this.el=i,this.renderer=o,this.cd=a,this.menubarService=b,bt(()=>{let v=this.activeItemPath();Y(v)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}onInit(){this.bindMatchMediaListener(),this.menubarService.autoHide=this.autoHide,this.menubarService.autoHideDelay=this.autoHideDelay,this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.hide()}),this.id=this.id||De("pn_id_")}startTemplate;endTemplate;itemTemplate;menuIconTemplate;submenuIconTemplate;templates;_startTemplate;_endTemplate;_itemTemplate;_menuIconTemplate;_submenuIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"menuicon":this._menuIconTemplate=e.template;break;case"submenuicon":this._submenuIconTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}createProcessedItems(e,t=0,i={},o=""){let a=[];return e&&e.forEach((b,v)=>{let k=(o!==""?o+"_":"")+v,ee={item:b,index:v,level:t,key:k,parent:i,parentKey:o};ee.items=this.createProcessedItems(b.items,t+1,ee,k),a.push(ee)}),a}bindMatchMediaListener(){if($(this.platformId)&&!this.matchMediaListener){let e=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=e,this.queryMatches.set(e.matches),this.matchMediaListener=()=>{this.queryMatches.set(e.matches),this.mobileActive=!1,this.cd.markForCheck()},e.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}getItemProp(e,t){return e?Ze(e[t]):void 0}menuButtonClick(e){this.toggle(e)}menuButtonKeydown(e){(e.code==="Enter"||e.code==="Space")&&this.menuButtonClick(e)}onItemClick(e){let{originalEvent:t,processedItem:i}=e,o=this.isProcessedItemGroup(i),a=Ce(i.parent);if(this.isSelected(i)){let{index:v,key:k,level:ee,parentKey:Ne,item:Te}=i;this.activeItemPath.set(this.activeItemPath().filter(xe=>k!==xe.key&&k.startsWith(xe.key))),this.focusedItemInfo.set({index:v,level:ee,parentKey:Ne,item:Te}),this.dirty=!a,D(this.rootmenu?.el.nativeElement)}else if(o)this.onItemChange(e);else{let v=a?i:this.activeItemPath().find(k=>k.parentKey==="");this.hide(t),this.changeFocusedItemIndex(t,v?v.index:-1),this.mobileActive=!1,D(this.rootmenu?.el.nativeElement)}}onItemMouseEnter(e){ye()?this.onItemChange({event:e,processedItem:e.processedItem,focus:this.autoDisplay},"hover"):this.dirty&&this.onItemChange(e,"hover")}onMouseLeave(e){let t=this.menubarService.autoHide,i=this.menubarService.autoHideDelay;t&&setTimeout(()=>{this.menubarService.mouseLeaves.next(!0)},i)}changeFocusedItemIndex(e,t){let i=this.findVisibleItem(t);if(this.focusedItemInfo().index!==t){let o=this.focusedItemInfo();this.focusedItemInfo.set(it(nt({},o),{item:i.item,index:t})),this.scrollInView()}}scrollInView(e=-1){let t=e!==-1?`${this.id}_${e}`:this.focusedItemId,i=q(this.rootmenu?.el.nativeElement,`li[id="${t}"]`);i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"})}onItemChange(e,t){let{processedItem:i,isFocus:o}=e;if(Ce(i))return;let{index:a,key:b,level:v,parentKey:k,items:ee,item:Ne}=i,Te=Y(ee),xe=this.activeItemPath().filter(tt=>tt.parentKey!==k&&tt.parentKey!==b);Te&&xe.push(i),this.focusedItemInfo.set({index:a,level:v,parentKey:k,item:Ne}),Te&&(this.dirty=!0),o&&D(this.rootmenu?.el.nativeElement),!(t==="hover"&&this.queryMatches())&&this.activeItemPath.set(xe)}toggle(e){this.mobileActive?(this.mobileActive=!1,ae.clear(this.rootmenu?.el.nativeElement),this.hide()):(this.mobileActive=!0,ae.set("menu",this.rootmenu?.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()}hide(e,t){this.mobileActive&&setTimeout(()=>{D(this.menubutton?.nativeElement)},0),this.activeItemPath.set([]),this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),t&&D(this.rootmenu?.el.nativeElement),this.dirty=!1}show(){let e=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:e?.item}),D(this.rootmenu?.el.nativeElement)}onMenuFocus(e){this.focused=!0;let t=e.relatedTarget;if((!t||!this.el.nativeElement.contains(t))&&this.focusedItemInfo().index===-1&&!this.activeItemPath().length&&!this.dirty){let o=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:o?.item})}this.onFocus.emit(e)}onMenuBlur(e){let t=e.relatedTarget;t&&this.el.nativeElement.contains(t)||setTimeout(()=>{let i=this.document.activeElement;i&&this.el.nativeElement.contains(i)||(this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1,this.onBlur.emit(e))})}onMenuMouseDown(e){this.dirty=!0}onKeyDown(e){let t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&Tt(e.key)&&this.searchItems(e,e.key);break}}findVisibleItem(e){return Y(this.visibleItems)?this.visibleItems[e]:null}findFirstFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e}findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))}findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))}isProcessedItemGroup(e){return e&&Y(e.items)}isSelected(e){return this.activeItemPath().some(t=>t.key===e.key)}isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemSeparator(e){return this.getItemProp(e,"separator")}isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(e){return e&&Y(e.items)}searchItems(e,t){this.searchValue=(this.searchValue||"")+t;let i=-1,o=!1;return this.focusedItemInfo().index!==-1?(i=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(a=>this.isItemMatched(a)),i=i===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(a=>this.isItemMatched(a)):i+this.focusedItemInfo().index):i=this.visibleItems.findIndex(a=>this.isItemMatched(a)),i!==-1&&(o=!0),i===-1&&this.focusedItemInfo().index===-1&&(i=this.findFirstFocusedItemIndex()),i!==-1&&this.changeFocusedItemIndex(e,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),o}getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0}getItemLabel(e){return this.getItemProp(e,"label")}onArrowDownKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(t?Ce(t.parent):null)this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item}),this.onArrowRightKey(e));else{let o=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,o),e.preventDefault()}}onArrowRightKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(t?this.activeItemPath().find(o=>o.key===t.parentKey):null)this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item}),this.onArrowDownKey(e));else{let o=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,o),e.preventDefault()}}onArrowUpKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(Ce(t.parent)){if(this.isProccessedItemGroup(t)){this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item});let a=this.findLastItemIndex();this.changeFocusedItemIndex(e,a)}}else{let o=this.activeItemPath().find(a=>a.key===t.parentKey);if(this.focusedItemInfo().index===0){this.focusedItemInfo.set({index:-1,parentKey:o?o.parentKey:"",item:t.item}),this.searchValue="",this.onArrowLeftKey(e);let a=this.activeItemPath().filter(b=>b.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(a)}else{let a=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,a)}}e.preventDefault()}onArrowLeftKey(e){let t=this.visibleItems[this.focusedItemInfo().index],i=t?this.activeItemPath().find(o=>o.key===t.parentKey):null;if(i){this.onItemChange({originalEvent:e,processedItem:i});let o=this.activeItemPath().filter(a=>a.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(o),e.preventDefault()}else{let o=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,o),e.preventDefault()}}onHomeKey(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()}onEndKey(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){this.hide(e,!0),this.focusedItemInfo().index=this.findFirstFocusedItemIndex(),e.preventDefault()}onTabKey(e){if(this.focusedItemInfo().index!==-1){let t=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()}onEnterKey(e){if(this.focusedItemInfo().index!==-1){let t=q(this.rootmenu?.el.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),i=t&&(q(t,'[data-pc-section="itemlink"]')||q(t,"a,button"));i?i.click():t&&t.click()}e.preventDefault()}findLastFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e}findLastItemIndex(){return Qe(this.visibleItems,e=>this.isValidItem(e))}findPrevItemIndex(e){let t=e>0?Qe(this.visibleItems.slice(0,e),i=>this.isValidItem(i)):-1;return t>-1?t:e}findNextItemIndex(e){let t=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(i=>this.isValidItem(i)):-1;return t>-1?t+e+1:e}bindResizeListener(){$(this.platformId)&&(this.resizeListener||(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{ye()||this.hide(e,!0),this.mobileActive=!1})))}bindOutsideClickListener(){$(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",e=>{let t=this.rootmenu?.el.nativeElement!==e.target&&!this.rootmenu?.el.nativeElement?.contains(e.target),i=this.mobileActive&&this.menubutton?.nativeElement!==e.target&&!this.menubutton?.nativeElement?.contains(e.target);t&&(i?this.mobileActive=!1:this.hide())})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}onDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()}static \u0275fac=function(t){return new(t||n)(w(mt),w(Me),w(ct),w(pt),w(gt),w(Je))};static \u0275cmp=B({type:n,selectors:[["p-menubar"]],contentQueries:function(t,i,o){if(t&1&&(S(o,Dn,4),S(o,An,4),S(o,Fn,4),S(o,Vn,4),S(o,Rn,4),S(o,fe,4)),t&2){let a;I(a=x())&&(i.startTemplate=a.first),I(a=x())&&(i.endTemplate=a.first),I(a=x())&&(i.itemTemplate=a.first),I(a=x())&&(i.menuIconTemplate=a.first),I(a=x())&&(i.submenuIconTemplate=a.first),I(a=x())&&(i.templates=a)}},viewQuery:function(t,i){if(t&1&&(ue(Hn,5),ue(zn,5)),t&2){let o;I(o=x())&&(i.menubutton=o.first),I(o=x())&&(i.rootmenu=o.first)}},hostVars:2,hostBindings:function(t,i){t&2&&p(i.cn(i.cx("root"),i.styleClass))},inputs:{model:"model",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",R],baseZIndex:[2,"baseZIndex","baseZIndex",G],autoDisplay:[2,"autoDisplay","autoDisplay",R],autoHide:[2,"autoHide","autoHide",R],breakpoint:"breakpoint",autoHideDelay:[2,"autoHideDelay","autoHideDelay",G],id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onFocus:"onFocus",onBlur:"onBlur"},features:[ie([Je,Ye,{provide:Ft,useExisting:n},{provide:ge,useExisting:n}]),pe([y]),z],ngContentSelectors:Kn,decls:7,vars:19,consts:[["rootmenu",""],["legacy",""],["menubutton",""],[3,"class","pBind",4,"ngIf"],["tabindex","0","role","button",3,"class","pBind","click","keydown",4,"ngIf"],["pMenubarSub","","tabindex","0",3,"itemClick","focus","blur","keydown","itemMouseEnter","mouseleave","mousedown","items","itemTemplate","menuId","root","baseZIndex","autoZIndex","mobileActive","autoDisplay","focusedItemId","submenuiconTemplate","activeItemPath","pt","pBind"],[3,"class","pBind",4,"ngIf","ngIfElse"],[3,"pBind"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",3,"click","keydown","pBind"],["data-p-icon","bars",3,"pBind",4,"ngIf"],["data-p-icon","bars",3,"pBind"]],template:function(t,i){if(t&1){let o=L();ke(),c(0,$n,2,4,"div",3)(1,Zn,4,9,"a",4),d(2,"ul",5,0),T("itemClick",function(b){return g(o),h(i.onItemClick(b))})("focus",function(b){return g(o),h(i.onMenuFocus(b))})("blur",function(b){return g(o),h(i.onMenuBlur(b))})("keydown",function(b){return g(o),h(i.onKeyDown(b))})("itemMouseEnter",function(b){return g(o),h(i.onItemMouseEnter(b))})("mouseleave",function(b){return g(o),h(i.onMouseLeave(b))})("mousedown",function(b){return g(o),h(i.onMenuMouseDown(b))}),u(),c(4,Gn,2,4,"div",6)(5,Wn,2,2,"ng-template",null,1,V)}if(t&2){let o=P(6);r("ngIf",i.startTemplate||i._startTemplate),m(),r("ngIf",i.model&&i.model.length>0),m(),r("items",i.processedItems)("itemTemplate",i.itemTemplate)("menuId",i.id)("root",!0)("baseZIndex",i.baseZIndex)("autoZIndex",i.autoZIndex)("mobileActive",i.mobileActive)("autoDisplay",i.autoDisplay)("focusedItemId",i.focused?i.focusedItemId:void 0)("submenuiconTemplate",i.submenuIconTemplate||i._submenuIconTemplate)("activeItemPath",i.activeItemPath())("pt",i.pt())("pBind",i.ptm("rootList")),_("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy),m(2),r("ngIf",i.endTemplate||i._endTemplate)("ngIfElse",o)}},dependencies:[K,W,de,_e,Xn,Ie,y,Dt,X,E,he],encapsulation:2,changeDetection:0})}return n})(),Kt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ce({type:n});static \u0275inj=re({imports:[Xe,E,E]})}return n})();var Nt=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`;var ti=["*"];function ni(n,l){if(n&1&&(d(0,"span",3),O(1),u()),n&2){let e=s();p(e.cx("label")),r("pBind",e.ptm("label")),m(),ne(e.label)}}function ii(n,l){if(n&1&&f(0,"span",5),n&2){let e=s(2);p(e.icon),r("pBind",e.ptm("icon"))("ngClass",e.cx("icon"))}}function oi(n,l){if(n&1&&c(0,ii,1,4,"span",4),n&2){let e=s(),t=P(5);r("ngIf",e.icon)("ngIfElse",t)}}function ai(n,l){if(n&1){let e=L();d(0,"img",7),T("error",function(i){g(e);let o=s(2);return h(o.imageError(i))}),u()}if(n&2){let e=s(2);r("pBind",e.ptm("image"))("src",e.image,me),_("aria-label",e.ariaLabel)}}function ri(n,l){if(n&1&&c(0,ai,1,3,"img",6),n&2){let e=s();r("ngIf",e.image)}}var si={root:({instance:n})=>["p-avatar p-component",{"p-avatar-image":n.image!=null,"p-avatar-circle":n.shape==="circle","p-avatar-lg":n.size==="large","p-avatar-xl":n.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},$t=(()=>{class n extends be{name="avatar";style=Nt;classes=si;static \u0275fac=(()=>{let e;return function(i){return(e||(e=H(n)))(i||n)}})();static \u0275prov=te({token:n,factory:n.\u0275fac})}return n})();var qt=new se("AVATAR_INSTANCE"),et=(()=>{class n extends J{$pcAvatar=M(qt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=M(y,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}label;icon;image;size="normal";shape="square";styleClass;ariaLabel;ariaLabelledBy;onImageError=new C;_componentStyle=M($t);imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=H(n)))(i||n)}})();static \u0275cmp=B({type:n,selectors:[["p-avatar"]],hostVars:4,hostBindings:function(t,i){t&2&&(_("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy),p(i.cn(i.cx("root"),i.styleClass)))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[ie([$t,{provide:qt,useExisting:n},{provide:ge,useExisting:n}]),pe([y]),z],ngContentSelectors:ti,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],[3,"pBind","class",4,"ngIf","ngIfElse"],[3,"pBind"],[3,"pBind","class","ngClass",4,"ngIf","ngIfElse"],[3,"pBind","ngClass"],[3,"pBind","src","error",4,"ngIf"],[3,"error","pBind","src"]],template:function(t,i){if(t&1&&(ke(),we(0),c(1,ni,2,4,"span",2)(2,oi,1,2,"ng-template",null,0,V)(4,ri,1,1,"ng-template",null,1,V)),t&2){let o=P(3);m(),r("ngIf",i.label)("ngIfElse",o)}},dependencies:[K,ht,W,E,y],encapsulation:2,changeDetection:0})}return n})(),jt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ce({type:n});static \u0275inj=re({imports:[et,E,E]})}return n})();var Qt=`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
        overflow: hidden;
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        line-height: 1;
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
    }

    .p-menu-item.p-focus .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`;var ci=["pMenuItemContent",""],ze=n=>({$implicit:n}),pi=()=>({exact:!1}),ui=n=>({item:n});function di(n,l){n&1&&N(0)}function _i(n,l){if(n&1&&(d(0,"a",6),c(1,di,1,0,"ng-container",7),u()),n&2){let e=s(2),t=P(4);p(e.cx("itemLink")),r("target",e.item.target)("pBind",e.getPTOptions("itemLink")),_("title",e.item.title)("href",e.item.url||null,me)("data-automationid",e.item.automationId)("tabindex",-1),m(),r("ngTemplateOutlet",t)("ngTemplateOutletContext",oe(10,ze,e.item))}}function fi(n,l){n&1&&N(0)}function bi(n,l){if(n&1&&(d(0,"a",8),c(1,fi,1,0,"ng-container",7),u()),n&2){let e=s(2),t=P(4);p(e.cx("itemLink")),r("routerLink",e.item.routerLink)("queryParams",e.item.queryParams)("routerLinkActiveOptions",e.item.routerLinkActiveOptions||Le(18,pi))("target",e.item.target)("fragment",e.item.fragment)("queryParamsHandling",e.item.queryParamsHandling)("preserveFragment",e.item.preserveFragment)("skipLocationChange",e.item.skipLocationChange)("replaceUrl",e.item.replaceUrl)("state",e.item.state)("pBind",e.getPTOptions("itemLink")),_("data-automationid",e.item.automationId)("tabindex",-1)("title",e.item.title),m(),r("ngTemplateOutlet",t)("ngTemplateOutletContext",oe(19,ze,e.item))}}function gi(n,l){if(n&1&&(A(0),c(1,_i,2,12,"a",4)(2,bi,2,21,"a",5),F()),n&2){let e=s();m(),r("ngIf",!(e.item!=null&&e.item.routerLink)),m(),r("ngIf",e.item==null?null:e.item.routerLink)}}function hi(n,l){}function Ii(n,l){n&1&&c(0,hi,0,0,"ng-template")}function xi(n,l){if(n&1&&(A(0),c(1,Ii,1,0,null,7),F()),n&2){let e=s();m(),r("ngTemplateOutlet",e.itemTemplate)("ngTemplateOutletContext",oe(2,ze,e.item))}}function vi(n,l){if(n&1&&f(0,"span",12),n&2){let e=s(2);Z(e.item.iconStyle),p(e.cn(e.cx("itemIcon",oe(6,ui,e.item)),e.item.iconClass)),r("pBind",e.getPTOptions("itemIcon")),_("data-pc-section","itemicon")}}function yi(n,l){if(n&1&&(d(0,"span",12),O(1),u()),n&2){let e=s(2);p(e.cx("itemLabel")),r("pBind",e.getPTOptions("itemLabel")),_("data-pc-section","itemlabel"),m(),ne(e.item.label)}}function Ci(n,l){if(n&1&&(f(0,"span",13),$e(1,"safeHtml")),n&2){let e=s(2);r("innerHTML",qe(1,3,e.item.label),le)("pBind",e.getPTOptions("itemLabel")),_("data-pc-section","itemlabel")}}function Ti(n,l){if(n&1&&f(0,"p-badge",14),n&2){let e=s(2);r("styleClass",e.item.badgeStyleClass)("value",e.item.badge)("pt",e.getPTOptions("pcBadge"))}}function Mi(n,l){if(n&1&&c(0,vi,1,8,"span",9)(1,yi,2,5,"span",10)(2,Ci,2,5,"ng-template",null,1,V)(4,Ti,1,3,"p-badge",11),n&2){let e=P(3),t=s();r("ngIf",t.item.icon),m(),r("ngIf",t.item.escape!==!1)("ngIfElse",e),m(3),r("ngIf",t.item.badge)}}var ki=["start"],wi=["end"],Li=["header"],Si=["item"],Pi=["submenuheader"],Ei=["list"],Oi=["container"],Bi=(n,l)=>({showTransitionParams:n,hideTransitionParams:l}),Di=n=>({value:"visible",params:n}),Ut=(n,l)=>({item:n,id:l});function Ai(n,l){n&1&&N(0)}function Fi(n,l){if(n&1&&(d(0,"div",8),c(1,Ai,1,0,"ng-container",9),u()),n&2){let e=s(2);p(e.cx("start")),r("pBind",e.ptm("start")),_("data-pc-section","start"),m(),r("ngTemplateOutlet",e.startTemplate??e._startTemplate)}}function Vi(n,l){if(n&1&&f(0,"li",13),n&2){let e=s(4);p(e.cx("separator")),r("pBind",e.ptm("separator")),_("data-pc-section","separator")}}function Ri(n,l){if(n&1&&(d(0,"span"),O(1),u()),n&2){let e=s(3).$implicit;m(),ne(e.label)}}function Hi(n,l){if(n&1&&(f(0,"span",17),$e(1,"safeHtml")),n&2){let e=s(3).$implicit;r("innerHTML",qe(1,1,e.label),le)}}function zi(n,l){if(n&1&&(A(0),c(1,Ri,2,1,"span",16)(2,Hi,2,3,"ng-template",null,2,V),F()),n&2){let e=P(3),t=s(2).$implicit;m(),r("ngIf",t.escape!==!1)("ngIfElse",e)}}function Ki(n,l){n&1&&N(0)}function Ni(n,l){if(n&1&&(d(0,"li",14),c(1,zi,4,2,"ng-container",7)(2,Ki,1,0,"ng-container",15),u()),n&2){let e=s(),t=e.$implicit,i=e.index,o=s(3);p(o.cx("submenuLabel")),r("pBind",o.ptm("submenuLabel"))("tooltipOptions",t.tooltipOptions),_("data-automationid",t.automationId)("id",o.menuitemId(t,o.id,i))("data-pc-section","submenulabel"),m(),r("ngIf",!o.submenuHeaderTemplate&&!o._submenuHeaderTemplate),m(),r("ngTemplateOutlet",o.submenuHeaderTemplate??o._submenuHeaderTemplate)("ngTemplateOutletContext",oe(10,ze,t))}}function $i(n,l){if(n&1&&f(0,"li",13),n&2){let e=s(5);p(e.cx("separator")),r("pBind",e.ptm("separator")),_("data-pc-section","separator")}}function qi(n,l){if(n&1){let e=L();d(0,"li",19),T("onMenuItemClick",function(i){g(e);let o=s(),a=o.$implicit,b=o.index,v=s().index,k=s(3);return h(k.itemClick(i,k.menuitemId(a,k.id,v,b)))}),u()}if(n&2){let e=s(),t=e.$implicit,i=e.index,o=s().index,a=s(3);Z(t.style),p(a.cn(a.cx("item",U(15,Ut,t,a.menuitemId(t,a.id,o,i))),t==null?null:t.styleClass)),r("pMenuItemContent",t)("itemTemplate",a.itemTemplate??a._itemTemplate)("idx",i)("menuitemId",a.menuitemId(t,a.id,o,i))("tooltipOptions",t.tooltipOptions),_("data-pc-section","menuitem")("aria-label",a.label(t.label))("data-p-focused",a.isItemFocused(a.menuitemId(t,a.id,o,i)))("data-p-disabled",a.disabled(t.disabled))("aria-disabled",a.disabled(t.disabled))("id",a.menuitemId(t,a.id,o,i))}}function ji(n,l){if(n&1&&c(0,$i,1,4,"li",11)(1,qi,1,18,"li",18),n&2){let e=l.$implicit,t=s().$implicit;r("ngIf",e.separator&&(e.visible!==!1||t.visible!==!1)),m(),r("ngIf",!e.separator&&e.visible!==!1&&(e.visible!==void 0||t.visible!==!1))}}function Qi(n,l){if(n&1&&c(0,Vi,1,4,"li",11)(1,Ni,3,12,"li",12)(2,ji,2,2,"ng-template",10),n&2){let e=l.$implicit;r("ngIf",e.separator&&e.visible!==!1),m(),r("ngIf",!e.separator),m(),r("ngForOf",e.items)}}function Zi(n,l){if(n&1&&c(0,Qi,3,3,"ng-template",10),n&2){let e=s(2);r("ngForOf",e.model)}}function Ui(n,l){if(n&1&&f(0,"li",13),n&2){let e=s(4);p(e.cx("separator")),r("pBind",e.ptm("separator")),_("data-pc-section","separator")}}function Gi(n,l){if(n&1){let e=L();d(0,"li",21),T("onMenuItemClick",function(i){g(e);let o=s(),a=o.$implicit,b=o.index,v=s(3);return h(v.itemClick(i,v.menuitemId(a,v.id,b)))}),u()}if(n&2){let e=s(),t=e.$implicit,i=e.index,o=s(3);p(o.cn(o.cx("item",U(14,Ut,t,o.menuitemId(t,o.id,i))),t==null?null:t.styleClass)),r("pMenuItemContent",t)("itemTemplate",o.itemTemplate??o._itemTemplate)("idx",i)("menuitemId",o.menuitemId(t,o.id,i))("ngStyle",t.style)("tooltipOptions",t.tooltipOptions),_("data-pc-section","menuitem")("aria-label",o.label(t.label))("data-p-focused",o.isItemFocused(o.menuitemId(t,o.id,i)))("data-p-disabled",o.disabled(t.disabled))("aria-disabled",o.disabled(t.disabled))("id",o.menuitemId(t,o.id,i))}}function Wi(n,l){if(n&1&&c(0,Ui,1,4,"li",11)(1,Gi,1,17,"li",20),n&2){let e=l.$implicit;r("ngIf",e.separator&&e.visible!==!1),m(),r("ngIf",!e.separator&&e.visible!==!1)}}function Yi(n,l){if(n&1&&c(0,Wi,2,2,"ng-template",10),n&2){let e=s(2);r("ngForOf",e.model)}}function Ji(n,l){n&1&&N(0)}function Xi(n,l){if(n&1&&(d(0,"div",8),c(1,Ji,1,0,"ng-container",9),u()),n&2){let e=s(2);p(e.cx("end")),r("pBind",e.ptm("end")),_("data-pc-section","end"),m(),r("ngTemplateOutlet",e.endTemplate??e._endTemplate)}}function eo(n,l){if(n&1){let e=L();d(0,"div",4,0),T("click",function(i){g(e);let o=s();return h(o.onOverlayClick(i))})("@overlayAnimation.start",function(i){g(e);let o=s();return h(o.onOverlayAnimationStart(i))})("@overlayAnimation.done",function(i){g(e);let o=s();return h(o.onOverlayAnimationEnd(i))}),c(2,Fi,2,5,"div",5),d(3,"ul",6,1),T("focus",function(i){g(e);let o=s();return h(o.onListFocus(i))})("blur",function(i){g(e);let o=s();return h(o.onListBlur(i))})("keydown",function(i){g(e);let o=s();return h(o.onListKeyDown(i))}),c(5,Zi,1,1,null,7)(6,Yi,1,1,null,7),u(),c(7,Xi,2,5,"div",5),u()}if(n&2){let e=s();Z(e.sx("root")),p(e.cn(e.cx("root"),e.styleClass)),r("ngStyle",e.style)("@overlayAnimation",oe(26,Di,U(23,Bi,e.showTransitionOptions,e.hideTransitionOptions)))("@.disabled",e.popup!==!0)("pBind",e.ptm("root")),_("data-pc-name","menu")("id",e.id),m(2),r("ngIf",e.startTemplate??e._startTemplate),m(),p(e.cx("list")),r("pBind",e.ptm("list")),_("id",e.id+"_list")("tabindex",e.getTabIndexValue())("data-pc-section","menu")("aria-activedescendant",e.activedescendant())("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),m(2),r("ngIf",e.hasSubMenu()),m(),r("ngIf",!e.hasSubMenu()),m(),r("ngIf",e.endTemplate??e._endTemplate)}}var to={root:({instance:n})=>({position:n.popup?"absolute":"relative"})},no={root:({instance:n})=>["p-menu p-component",{"p-menu-overlay":n.popup}],start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:({instance:n,item:l,id:e})=>["p-menu-item",{"p-focus":n.focusedOptionId()&&e===n.focusedOptionId(),"p-disabled":n.disabled(l.disabled)},l.styleClass],itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:({item:n})=>["p-menu-item-icon",n.icon,n.iconClass],itemLabel:"p-menu-item-label"},He=(()=>{class n extends be{name="menu";style=Qt;classes=no;inlineStyles=to;static \u0275fac=(()=>{let e;return function(i){return(e||(e=H(n)))(i||n)}})();static \u0275prov=te({token:n,factory:n.\u0275fac})}return n})();var Zt=new se("MENU_INSTANCE"),Gt=(()=>{class n{platformId;sanitizer;constructor(e,t){this.platformId=e,this.sanitizer=t}transform(e){return!e||!$(this.platformId)?e:this.sanitizer.bypassSecurityTrustHtml(e)}static \u0275fac=function(t){return new(t||n)(w(Me,16),w(It,16))};static \u0275pipe=ut({name:"safeHtml",type:n,pure:!0})}return n})(),io=(()=>{class n extends J{item;itemTemplate;menuitemId=Se("");idx=Se(0);onMenuItemClick=new C;menu;_componentStyle=M(He);hostName="Menu";constructor(e){super(),this.menu=e}onItemClick(e,t){this.onMenuItemClick.emit({originalEvent:e,item:t})}getPTOptions(e){return this.menu.getPTOptions(e,this.item,this.idx(),this.menuitemId())}static \u0275fac=function(t){return new(t||n)(w(lt(()=>Ke)))};static \u0275cmp=B({type:n,selectors:[["","pMenuItemContent",""]],inputs:{item:[0,"pMenuItemContent","item"],itemTemplate:"itemTemplate",menuitemId:[1,"menuitemId"],idx:[1,"idx"]},outputs:{onMenuItemClick:"onMenuItemClick"},features:[ie([He]),z],attrs:ci,decls:5,vars:6,consts:[["itemContent",""],["htmlLabel",""],[3,"click","pBind"],[4,"ngIf"],["pRipple","",3,"class","target","pBind",4,"ngIf"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","class","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind",4,"ngIf"],["pRipple","",3,"target","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind"],[3,"class","pBind","style",4,"ngIf"],[3,"class","pBind",4,"ngIf","ngIfElse"],[3,"styleClass","value","pt",4,"ngIf"],[3,"pBind"],[1,"p-menu-item-label",3,"innerHTML","pBind"],[3,"styleClass","value","pt"]],template:function(t,i){if(t&1){let o=L();d(0,"div",2),T("click",function(b){return g(o),h(i.onItemClick(b,i.item))}),c(1,gi,3,2,"ng-container",3)(2,xi,2,4,"ng-container",3)(3,Mi,5,4,"ng-template",null,0,V),u()}t&2&&(p(i.cx("itemContent")),r("pBind",i.getPTOptions("itemContent")),_("data-pc-section","content"),m(),r("ngIf",!i.itemTemplate),m(),r("ngIf",i.itemTemplate))},dependencies:[K,W,de,_e,Oe,Be,Fe,Ie,y,X,Ae,E,he,Gt],encapsulation:2})}return n})(),Ke=(()=>{class n extends J{overlayService;model;popup;style;styleClass;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";ariaLabel;ariaLabelledBy;id;tabindex=0;appendTo=Se(void 0);onShow=new C;onHide=new C;onBlur=new C;onFocus=new C;listViewChild;containerViewChild;$appendTo=je(()=>this.appendTo()||this.config.overlayAppendTo());container;scrollHandler;documentClickListener;documentResizeListener;preventDocumentDefault;target;visible;focusedOptionId=je(()=>this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null);focusedOptionIndex=Q(-1);selectedOptionIndex=Q(-1);focused=!1;overlayVisible=!1;relativeAlign;$pcMenu=M(Zt,{optional:!0,skipSelf:!0})??void 0;_componentStyle=M(He);bindDirectiveInstance=M(y,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}constructor(e){super(),this.overlayService=e,this.id=this.id||De("pn_id_")}getPTOptions(e,t,i,o){return this.ptm(e,{context:{item:t,index:i,focused:this.isItemFocused(o),disabled:this.disabled(t.disabled)}})}toggle(e){this.visible?this.hide():this.show(e),this.preventDocumentDefault=!0}show(e){this.target=e.currentTarget,this.relativeAlign=e.relativeAlign,this.visible=!0,this.preventDocumentDefault=!0,this.overlayVisible=!0,this.cd.markForCheck()}onInit(){this.popup||this.bindDocumentClickListener()}startTemplate;_startTemplate;endTemplate;_endTemplate;headerTemplate;_headerTemplate;itemTemplate;_itemTemplate;submenuHeaderTemplate;_submenuHeaderTemplate;templates;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"submenuheader":this._submenuHeaderTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}getTabIndexValue(){return this.tabindex!==void 0?this.tabindex.toString():null}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.popup&&(this.container=e.element,this.moveOnTop(),this.onShow.emit({}),this.$attrSelector&&this.container?.setAttribute(this.$attrSelector,""),this.appendOverlay(),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),D(this.listViewChild?.nativeElement));break;case"void":this.onOverlayHide(),this.onHide.emit({});break}}onOverlayAnimationEnd(e){e.toState==="void"&&this.autoZIndex&&ae.clear(e.element)}alignOverlay(){this.relativeAlign?Ct(this.container,this.target):yt(this.container,this.target)}appendOverlay(){kt.appendOverlay(this.container,this.$appendTo()==="body"?this.document.body:this.$appendTo(),this.$appendTo())}restoreOverlayAppend(){this.container&&this.$appendTo()!=="self"&&this.renderer.appendChild(this.el.nativeElement,this.container)}moveOnTop(){this.autoZIndex&&ae.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu)}hide(){this.visible=!1,this.relativeAlign=!1,this.cd.markForCheck()}onWindowResize(){this.visible&&!ye()&&this.hide()}menuitemId(e,t,i,o){return e?.id??`${t}_${i}${o!==void 0?"_"+o:""}`}isItemFocused(e){return this.focusedOptionId()===e}label(e){return typeof e=="function"?e():e}disabled(e){return typeof e=="function"?e():typeof e>"u"?!1:e}activedescendant(){return this.focused?this.focusedOptionId():void 0}onListFocus(e){this.focused||(this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.onFocus.emit(e))}onListBlur(e){this.focused&&(this.focused=!1,this.changeFocusedOptionIndex(-1),this.selectedOptionIndex.set(-1),this.focusedOptionIndex.set(-1),this.onBlur.emit(e))}onListKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":this.onEnterKey(e);break;case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":case"Tab":this.popup&&(D(this.target),this.hide()),this.overlayVisible&&this.hide();break;default:break}}onArrowDownKey(e){let t=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(t),e.preventDefault()}onArrowUpKey(e){if(e.altKey&&this.popup)D(this.target),this.hide(),e.preventDefault();else{let t=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(t),e.preventDefault()}}onHomeKey(e){this.changeFocusedOptionIndex(0),e.preventDefault()}onEndKey(e){this.changeFocusedOptionIndex(ve(this.containerViewChild?.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1),e.preventDefault()}onEnterKey(e){let t=q(this.containerViewChild?.nativeElement,`li[id="${`${this.focusedOptionIndex()}`}"]`),i=t&&(q(t,'[data-pc-section="itemlink"]')||q(t,"a,button"));this.popup&&D(this.target),i?i.click():t&&t.click(),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}findNextOptionIndex(e){let i=[...ve(this.containerViewChild?.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(o=>o.id===e);return i>-1?i+1:0}findPrevOptionIndex(e){let i=[...ve(this.containerViewChild?.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(o=>o.id===e);return i>-1?i-1:0}changeFocusedOptionIndex(e){let t=ve(this.containerViewChild?.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]');if(t.length>0){let i=e>=t.length?t.length-1:e<0?0:e;i>-1&&this.focusedOptionIndex.set(t[i].getAttribute("id"))}}itemClick(e,t){let{originalEvent:i,item:o}=e;if(this.focused||(this.focused=!0,this.onFocus.emit()),o.disabled){i.preventDefault();return}!o.url&&!o.routerLink&&i.preventDefault(),o.command&&o.command({originalEvent:i,item:o}),this.popup&&this.hide(),!this.popup&&this.focusedOptionIndex()!==t&&this.focusedOptionIndex.set(t)}onOverlayClick(e){this.popup&&this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.preventDocumentDefault=!0}bindDocumentClickListener(){if(!this.documentClickListener&&$(this.platformId)){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",t=>{let i=this.containerViewChild?.nativeElement&&!this.containerViewChild?.nativeElement.contains(t.target),o=!(this.target&&(this.target===t.target||this.target.contains(t.target)));!this.popup&&i&&o&&this.onListBlur(t),this.preventDocumentDefault&&this.overlayVisible&&i&&o&&(this.hide(),this.preventDocumentDefault=!1)})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){if(!this.documentResizeListener&&$(this.platformId)){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){!this.scrollHandler&&$(this.platformId)&&(this.scrollHandler=new wt(this.target,()=>{this.visible&&this.hide()})),this.scrollHandler?.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&(this.scrollHandler.unbindScrollListener(),this.scrollHandler=null)}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.preventDocumentDefault=!1,this.cd.destroyed||(this.target=null)}onDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&ae.clear(this.container),this.restoreOverlayAppend(),this.onOverlayHide()),this.popup||this.unbindDocumentClickListener()}hasSubMenu(){return this.model?.some(e=>e.items)??!1}isItemHidden(e){return e.separator?e.visible===!1||e.items&&e.items.some(t=>t.visible!==!1):e.visible===!1}static \u0275fac=function(t){return new(t||n)(w(Mt))};static \u0275cmp=B({type:n,selectors:[["p-menu"]],contentQueries:function(t,i,o){if(t&1&&(S(o,ki,4),S(o,wi,4),S(o,Li,4),S(o,Si,4),S(o,Pi,4),S(o,fe,4)),t&2){let a;I(a=x())&&(i.startTemplate=a.first),I(a=x())&&(i.endTemplate=a.first),I(a=x())&&(i.headerTemplate=a.first),I(a=x())&&(i.itemTemplate=a.first),I(a=x())&&(i.submenuHeaderTemplate=a.first),I(a=x())&&(i.templates=a)}},viewQuery:function(t,i){if(t&1&&(ue(Ei,5),ue(Oi,5)),t&2){let o;I(o=x())&&(i.listViewChild=o.first),I(o=x())&&(i.containerViewChild=o.first)}},inputs:{model:"model",popup:[2,"popup","popup",R],style:"style",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",R],baseZIndex:[2,"baseZIndex","baseZIndex",G],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",id:"id",tabindex:[2,"tabindex","tabindex",G],appendTo:[1,"appendTo"]},outputs:{onShow:"onShow",onHide:"onHide",onBlur:"onBlur",onFocus:"onFocus"},features:[ie([He,{provide:Zt,useExisting:n},{provide:ge,useExisting:n}]),pe([y]),z],decls:1,vars:1,consts:[["container",""],["list",""],["htmlSubmenuLabel",""],[3,"class","style","ngStyle","pBind","click",4,"ngIf"],[3,"click","ngStyle","pBind"],[3,"class","pBind",4,"ngIf"],["role","menu",3,"focus","blur","keydown","pBind"],[4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"],["ngFor","",3,"ngForOf"],["role","separator",3,"class","pBind",4,"ngIf"],["pTooltip","","role","none",3,"class","pBind","tooltipOptions",4,"ngIf"],["role","separator",3,"pBind"],["pTooltip","","role","none",3,"pBind","tooltipOptions"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"innerHTML"],["pTooltip","","role","menuitem",3,"class","pMenuItemContent","itemTemplate","idx","menuitemId","style","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pMenuItemContent","itemTemplate","idx","menuitemId","tooltipOptions"],["pTooltip","","role","menuitem",3,"class","pMenuItemContent","itemTemplate","idx","menuitemId","ngStyle","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pMenuItemContent","itemTemplate","idx","menuitemId","ngStyle","tooltipOptions"]],template:function(t,i){t&1&&c(0,eo,8,28,"div",3),t&2&&r("ngIf",!i.popup||i.visible)},dependencies:[K,Pe,W,de,Ee,_e,io,Ie,Ve,y,X,E,he,Gt],encapsulation:2,data:{animation:[Bt("overlayAnimation",[We(":enter",[Ge({opacity:0,transform:"scaleY(0.8)"}),Ue("{{showTransitionParams}}")]),We(":leave",[Ue("{{hideTransitionParams}}",Ge({opacity:0}))])])]},changeDetection:0})}return n})(),Wt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ce({type:n});static \u0275inj=re({imports:[Ke,E,E]})}return n})();function ao(n,l){n&1&&(d(0,"div",7)(1,"div",8),f(2,"i",9),u(),d(3,"div",10)(4,"span",11),O(5," LA BITACORA "),u(),d(6,"span",12),O(7," Cooperativa Naval "),u()()())}function ro(n,l){if(n&1){let e=L();d(0,"div",13)(1,"div",14),f(2,"i",15)(3,"input",16),u(),f(4,"button",17),d(5,"div",18)(6,"button",19),T("click",function(i){g(e);let o=P(8);return h(o.toggle(i))}),u(),f(7,"p-menu",20,0),u(),d(9,"div",21),f(10,"p-avatar",22),d(11,"div",23)(12,"span",24),O(13," Admin User "),u(),d(14,"span",25),O(15," Super Administrador "),u()()(),d(16,"button",26),T("click",function(){g(e);let i=s();return h(i.logout())}),u()()}if(n&2){let e=s();m(7),r("popup",!0)("model",e.settingsMenu)}}var Yt=class n{constructor(l){this.router=l}router;items=[];settingsMenu=[];ngOnInit(){this.items=[{label:"Productos",icon:"pi pi-users",items:[{label:"Crear producto financiero",icon:"pi pi-user",command:()=>{this.irRuta("admin-producto-financiero")}},{label:"Listar productos",icon:"pi pi-building",command:()=>{this.irRuta("listar-producto-financiero")}}]},{label:"Afiliados",icon:"pi pi-list",items:[{label:"Listar Afiliados",icon:"pi pi-id-card",command:()=>{this.irRuta("listar-afiliados")}},{label:"Crear afiliado",icon:"pi pi-file-plus",command:()=>{this.irRuta("crear-afiliados")}},{label:"Contratar producto",icon:"pi pi-file-edit",command:()=>{this.irRuta("enlazar-producto-afiliados")}},{label:"Planilla SEDENA",icon:"pi pi-chart-bar",command:()=>{this.irRuta("lista-cobros-sedena")}}]},{label:"Usuarios",icon:"pi pi-user",items:[{label:"Crear Persona",icon:"pi pi-id-card",command:()=>{this.irRuta("administrar-perosonas")}},{label:"Crear Usuario",icon:"pi pi-user-plus",command:()=>{this.irRuta("administrar-usuario")}},{label:"Movimientos",icon:"pi pi-chart-line",items:[{label:"Diarios",icon:"pi pi-calendar"},{label:"Mensuales",icon:"pi pi-chart-bar"}]}]},{label:"Aprobacion",icon:"pi pi-shield",items:[{label:"Aprobar prestamos",icon:"pi pi-user-edit",command:()=>{this.irRuta("aprobar-prestamos-afiliados")}},{label:"Roles",icon:"pi pi-lock"},{label:"Bit\xE1cora",icon:"pi pi-history"}]},{label:"Caja",icon:"pi pi-chart-pie",items:[{label:"Desembolsos",icon:"pi pi-dollar",command:()=>{this.irRuta("desembolsos-prestamos-afiliados")}},{label:"Estados de cuenta",icon:"pi pi-chart-bar",command:()=>{this.irRuta("estado-cuenta-afiliados")}},{label:"Prestamos",icon:"pi pi-wallet",items:[{label:"Pagar Cuota",icon:"pi pi-paypal",command:()=>{this.irRuta("afiliado-pago-cuenta")}},{label:"Abono a Capital",icon:"pi pi-receipt",command:()=>{this.irRuta("afiliado-pago-capital")}},,{label:"Pagar capital completo",icon:"pi pi-face-smile",command:()=>{this.irRuta("afiliado-pago-completo-capital")}}]},{label:"Ahorros",icon:"pi pi-briefcase",items:[{label:"Aministrar CTA-H",icon:"pi pi-briefcase",command:()=>{this.irRuta("afiliado-cuenta-ahorro")}}]},{label:"Carga de Archivos",icon:"pi pi-briefcase",items:[{label:"Leer Archivo",icon:"pi pi-briefcase",command:()=>{this.irRuta("leer-archivo-excel-sedena")}}]}]}],this.settingsMenu=[{label:"Mi perfil",icon:"pi pi-user"},{label:"Seguridad",icon:"pi pi-shield"},{label:"Apariencia",icon:"pi pi-palette"},{label:"Idioma",icon:"pi pi-globe"},{separator:!0},{label:"Ayuda",icon:"pi pi-question-circle"},{label:"Cerrar sesi\xF3n",icon:"pi pi-sign-out",styleClass:"logout-item"}]}logout(){localStorage.clear(),this.router.navigate(["/login"])}irRuta(l){console.log(l),this.router.navigate(["/dashboard",l])}static \u0275fac=function(e){return new(e||n)(w(vt))};static \u0275cmp=B({type:n,selectors:[["app-dashboard"]],decls:8,vars:1,consts:[["settings",""],[1,"layout-wrapper"],["styleClass","custom-menubar",3,"model"],["pTemplate","start"],["pTemplate","end"],[1,"content-area"],[1,"welcome-card"],[1,"logo-section"],[1,"logo-icon"],[1,"pi","pi-building-columns"],[1,"logo-text"],[1,"title"],[1,"subtitle"],[1,"right-menu"],[1,"search-box"],[1,"pi","pi-search"],["type","text","placeholder","Buscar..."],["pButton","","type","button","icon","pi pi-bell",1,"notification-btn","p-button-rounded","p-button-text"],[1,"settings-wrapper"],["pButton","","type","button","icon","pi pi-cog",1,"notification-btn","p-button-rounded","p-button-text",3,"click"],["styleClass","custom-settings-menu",3,"popup","model"],[1,"user-section"],["image","https://i.pravatar.cc/300","shape","circle","size","large"],[1,"user-info"],[1,"name"],[1,"role"],["pButton","","label","Salir","icon","pi pi-sign-out",1,"logout-btn",2,"color","red",3,"click"]],template:function(e,t){e&1&&(d(0,"div",1)(1,"p-menubar",2),c(2,ao,8,0,"ng-template",3)(3,ro,17,2,"ng-template",4),u(),d(4,"div",5)(5,"div",6)(6,"div"),f(7,"router-outlet"),u()()()()),e&2&&(m(),r("model",t.items))},dependencies:[K,Kt,Xe,fe,jt,et,Ot,Et,X,Wt,Ke,xt],styles:["[_ngcontent-%COMP%]:root{--primary: #2563eb;--primary-hover: #1d4ed8;--bg: #f1f5f9;--sidebar: #0f172a;--text: #0f172a;--text-light: #64748b;--border: #e2e8f0;--white: #ffffff}body[_ngcontent-%COMP%]{margin:0;font-family:Inter,sans-serif}.layout-wrapper[_ngcontent-%COMP%]{min-height:100vh;background:var(--bg)}  .custom-menubar{height:75px;border:none!important;border-radius:0!important;background:#fff!important;padding:0 25px!important;box-shadow:0 2px 20px #0000000d}  .p-menubar-root-list{gap:10px}  .p-menuitem-link{border-radius:12px!important;transition:.2s;margin:0 3px}  .p-menuitem-link:hover{background:#eff6ff!important}  .p-menuitem-text{color:var(--text)!important;font-weight:500}  .p-menuitem-icon{color:var(--primary)!important}  .p-submenu-list{border-radius:18px!important;overflow:hidden;border:1px solid var(--border);box-shadow:0 15px 40px #00000014;padding:10px}.logo-section[_ngcontent-%COMP%]{display:flex;align-items:center;gap:15px;margin-right:25px}.logo-icon[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:16px;background:linear-gradient(135deg,#2563eb,#1d4ed8);display:flex;align-items:center;justify-content:center;color:#fff;font-size:22px}.logo-text[_ngcontent-%COMP%]{display:flex;flex-direction:column}.title[_ngcontent-%COMP%]{font-size:20px;font-weight:700;color:var(--text)}.subtitle[_ngcontent-%COMP%]{font-size:12px;color:var(--text-light)}.right-menu[_ngcontent-%COMP%]{display:flex;align-items:center;gap:15px}.search-box[_ngcontent-%COMP%]{width:260px;height:42px;border-radius:14px;background:#f8fafc;border:1px solid var(--border);display:flex;align-items:center;padding:0 15px;gap:10px}.search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--text-light)}.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;outline:none;background:transparent;width:100%}.notification-btn[_ngcontent-%COMP%]{width:42px!important;height:42px!important;border-radius:14px!important;background:#f8fafc!important;color:var(--text)!important}.notification-btn[_ngcontent-%COMP%]:hover{background:#eff6ff!important;color:var(--primary)!important}.user-section[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:0 10px}.user-info[_ngcontent-%COMP%]{display:flex;flex-direction:column}.name[_ngcontent-%COMP%]{font-size:14px;font-weight:600;color:var(--text)}.role[_ngcontent-%COMP%]{font-size:12px;color:var(--text-light)}.logout-btn[_ngcontent-%COMP%]{border-radius:14px!important;background:var(--primary)!important;border:none!important}.logout-btn[_ngcontent-%COMP%]:hover{background:var(--primary-hover)!important}.content-area[_ngcontent-%COMP%]{padding:30px}.welcome-card[_ngcontent-%COMP%]{background:#fff;border-radius:24px;padding:40px;box-shadow:0 4px 30px #0000000a}.welcome-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;color:var(--text)}.welcome-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-light);margin-top:10px}@media(max-width:1200px){.search-box[_ngcontent-%COMP%]{display:none}}@media(max-width:992px){.user-info[_ngcontent-%COMP%], .logout-btn[_ngcontent-%COMP%]{display:none!important}}  .custom-settings-menu{width:270px;border-radius:22px!important;border:1px solid #e2e8f0!important;overflow:hidden;padding:10px!important;box-shadow:0 20px 50px #0000001f}  .custom-settings-menu .p-menuitem-link{height:55px;border-radius:14px!important;transition:.2s;margin-bottom:5px}  .custom-settings-menu .p-menuitem-link:hover{background:#eff6ff!important}  .custom-settings-menu .p-menuitem-icon{color:#2563eb!important;font-size:18px}  .custom-settings-menu .p-menuitem-text{color:#0f172a!important;font-weight:500}  .logout-item .p-menuitem-link{background:#fff1f2!important}  .logout-item .p-menuitem-link:hover{background:#ffe4e6!important}  .logout-item .p-menuitem-icon,   .logout-item .p-menuitem-text{color:#e11d48!important}"]})};export{Yt as Dashboard};
