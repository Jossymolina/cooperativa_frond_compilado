import{a as rt,b as lt}from"./chunk-L2L5TWUE.js";import{a as nt,b as it,c as ot,d as at,e as st}from"./chunk-6GVFMZKC.js";import{a as ct,b as dt}from"./chunk-XQ32RW4K.js";import"./chunk-HX4QZFPO.js";import"./chunk-4LJKNFNU.js";import"./chunk-QZEUH3GS.js";import{c as Ye,d as Ke,e as Ze,f as et,l as tt}from"./chunk-O4G6PXPT.js";import"./chunk-BJYT2CJ3.js";import"./chunk-4VQS5TEJ.js";import"./chunk-LLCE37YS.js";import{a as Le}from"./chunk-XB5PEPE4.js";import{a as qe,b as Ge}from"./chunk-Z6NSDJAK.js";import"./chunk-YAKGL43X.js";import{b as Oe,d as ke,e as Ie,f as Fe,g as Ve,h as Ne,m as ze,p as Be,r as We,s as $e,t as He,u as C,w as Ue}from"./chunk-VBL47H4M.js";import"./chunk-WMVSSRLU.js";import"./chunk-7NAGBASY.js";import{c as Je,d as te,f as ne,h as ie}from"./chunk-36JN3LZY.js";import{b as De,c as Re,i as N,p as je,r as Xe,s as Qe}from"./chunk-TE2LWLR2.js";import{Ea as G,Fa as W,La as Ae,i as Se,j as Ee,k as Q,o as Pe,p as Me,q as Te,s as q}from"./chunk-3RS5R7K4.js";import{$b as j,Bb as R,Cb as w,Fc as ee,Gb as _,Hb as g,Ib as xe,Jb as Ce,Ka as ge,Kb as V,Lb as Y,Mb as S,Na as l,Nb as E,Qb as P,Sa as ue,T as le,Tb as K,U as ce,Ub as M,Vb as r,W as de,Wb as T,Xb as x,Y as A,Ya as fe,_b as L,ac as X,ba as u,bb as D,ca as f,cb as _e,cc as ve,da as me,dc as O,ec as Z,f as re,fb as be,fc as ye,gb as he,hb as h,ka as pe,mc as k,nb as J,ob as v,oc as I,pa as U,pb as y,qc as we,sb as d,tb as n,ub as o,vb as m}from"./chunk-D2PW6A4I.js";var mt=`
    .p-message {
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
        height: 100%;
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-enter-from {
        opacity: 0;
    }

    .p-message-enter-active {
        transition: opacity 0.3s;
    }

    .p-message.p-message-leave-from {
        max-height: 1000px;
    }

    .p-message.p-message-leave-to {
        max-height: 0;
        opacity: 0;
        margin: 0;
    }

    .p-message-leave-active {
        overflow: hidden;
        transition:
            max-height 0.45s cubic-bezier(0, 1, 0, 1),
            opacity 0.3s,
            margin 0.3s;
    }

    .p-message-leave-active .p-message-close-button {
        opacity: 0;
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }
`;var wt=["container"],St=["icon"],Et=["closeicon"],Pt=["*"],Mt=(t,a)=>({showTransitionParams:t,hideTransitionParams:a}),Tt=t=>({value:"visible()",params:t}),Ot=t=>({closeCallback:t});function kt(t,a){t&1&&R(0)}function It(t,a){if(t&1&&h(0,kt,1,0,"ng-container",4),t&2){let e=g(2);d("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)}}function Ft(t,a){if(t&1&&m(0,"i",2),t&2){let e=g(2);M(e.cn(e.cx("icon"),e.icon)),d("pBind",e.ptm("icon"))}}function Vt(t,a){t&1&&R(0)}function Nt(t,a){if(t&1&&h(0,Vt,1,0,"ng-container",5),t&2){let e=g(2);d("ngTemplateOutlet",e.containerTemplate||e._containerTemplate)("ngTemplateOutletContext",Z(2,Ot,e.closeCallback))}}function zt(t,a){if(t&1&&m(0,"span",9),t&2){let e=g(4);d("pBind",e.ptm("text"))("ngClass",e.cx("text"))("innerHTML",e.text,ge)}}function Bt(t,a){if(t&1&&(n(0,"div"),h(1,zt,1,3,"span",8),o()),t&2){let e=g(3);l(),d("ngIf",!e.escape)}}function At(t,a){if(t&1&&(n(0,"span",7),r(1),o()),t&2){let e=g(4);d("pBind",e.ptm("text"))("ngClass",e.cx("text")),l(),T(e.text)}}function Dt(t,a){if(t&1&&h(0,At,2,3,"span",10),t&2){let e=g(3);d("ngIf",e.escape&&e.text)}}function Rt(t,a){if(t&1&&(h(0,Bt,2,1,"div",6)(1,Dt,1,1,"ng-template",null,0,we),n(3,"span",7),Ce(4),o()),t&2){let e=P(2),i=g(2);d("ngIf",!i.escape)("ngIfElse",e),l(3),d("pBind",i.ptm("text"))("ngClass",i.cx("text"))}}function Lt(t,a){if(t&1&&m(0,"i",7),t&2){let e=g(3);M(e.cn(e.cx("closeIcon"),e.closeIcon)),d("pBind",e.ptm("closeIcon"))("ngClass",e.closeIcon)}}function jt(t,a){t&1&&R(0)}function Xt(t,a){if(t&1&&h(0,jt,1,0,"ng-container",4),t&2){let e=g(3);d("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function Qt(t,a){if(t&1&&(me(),m(0,"svg",14)),t&2){let e=g(3);M(e.cx("closeIcon")),d("pBind",e.ptm("closeIcon"))}}function qt(t,a){if(t&1){let e=w();n(0,"button",11),_("click",function(s){u(e);let p=g(2);return f(p.close(s))}),v(1,Lt,1,4,"i",12),v(2,Xt,1,1,"ng-container"),v(3,Qt,1,3,":svg:svg",13),o()}if(t&2){let e=g(2);M(e.cx("closeButton")),d("pBind",e.ptm("closeButton")),J("aria-label",e.closeAriaLabel),l(),y(e.closeIcon?1:-1),l(),y(e.closeIconTemplate||e._closeIconTemplate?2:-1),l(),y(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}function Gt(t,a){if(t&1&&(n(0,"div",2)(1,"div",2),v(2,It,1,1,"ng-container"),v(3,Ft,1,3,"i",1),v(4,Nt,1,4,"ng-container")(5,Rt,5,4),v(6,qt,4,7,"button",3),o()()),t&2){let e=g();M(e.cn(e.cx("root"),e.styleClass)),d("pBind",e.ptm("root"))("@messageAnimation",Z(16,Tt,ye(13,Mt,e.showTransitionOptions,e.hideTransitionOptions))),J("aria-live","polite")("role","alert"),l(),M(e.cx("content")),d("pBind",e.ptm("content")),l(),y(e.iconTemplate||e._iconTemplate?2:-1),l(),y(e.icon?3:-1),l(),y(e.containerTemplate||e._containerTemplate?4:5),l(2),y(e.closable?6:-1)}}var Wt={root:({instance:t})=>["p-message p-component p-message-"+t.severity,"p-message-"+t.variant,{"p-message-sm":t.size==="small","p-message-lg":t.size==="large"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},pt=(()=>{class t extends Ae{name="message";style=mt;classes=Wt;static \u0275fac=(()=>{let e;return function(s){return(e||(e=U(t)))(s||t)}})();static \u0275prov=le({token:t,factory:t.\u0275fac})}return t})();var gt=new de("MESSAGE_INSTANCE"),oe=(()=>{class t extends Re{_componentStyle=A(pt);bindDirectiveInstance=A(N,{self:!0});$pcMessage=A(gt,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new ue;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}visible=pe(!0);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;closeCallback=e=>{this.close(e)};onInit(){this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"container":this._containerTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}static \u0275fac=(()=>{let e;return function(s){return(e||(e=U(t)))(s||t)}})();static \u0275cmp=D({type:t,selectors:[["p-message"]],contentQueries:function(i,s,p){if(i&1&&(V(p,wt,4),V(p,St,4),V(p,Et,4),V(p,G,4)),i&2){let c;S(c=E())&&(s.containerTemplate=c.first),S(c=E())&&(s.iconTemplate=c.first),S(c=E())&&(s.closeIconTemplate=c.first),S(c=E())&&(s.templates=c)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",ee],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",ee],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[ve([pt,{provide:gt,useExisting:t},{provide:De,useExisting:t}]),he([N]),be],ngContentSelectors:Pt,decls:1,vars:1,consts:[["escapeOut",""],[3,"pBind","class"],[3,"pBind"],["pRipple","","type","button",3,"pBind","class"],[4,"ngTemplateOutlet"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","ngClass"],[3,"pBind","ngClass","innerHTML",4,"ngIf"],[3,"pBind","ngClass","innerHTML"],[3,"pBind","ngClass",4,"ngIf"],["pRipple","","type","button",3,"click","pBind"],[3,"pBind","class","ngClass"],["data-p-icon","times",3,"pBind","class"],["data-p-icon","times",3,"pBind"]],template:function(i,s){i&1&&(xe(),v(0,Gt,7,18,"div",1)),i&2&&y(s.visible()?0:-1)},dependencies:[q,Se,Q,Pe,Le,je,W,N],encapsulation:2,data:{animation:[Je("messageAnimation",[ie(":enter",[ne({opacity:0,transform:"translateY(-25%)"}),te("{{showTransitionParams}}")]),ie(":leave",[te("{{hideTransitionParams}}",ne({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return t})(),ut=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=_e({type:t});static \u0275inj=ce({imports:[oe,W,W]})}return t})();var Ht=["propiedadFile"],Ut=["formBuscarPlanilla"],Jt=()=>[100,250,500,1e3],Yt=()=>["identidad","nombre"],Kt=()=>({width:"80vw"}),Zt=()=>[20,50,100],en=()=>["nombre","identidad","estado","observacion","monto"],tn=()=>({width:"650px"});function nn(t,a){if(t&1){let e=w();n(0,"p-button",63),_("onClick",function(){u(e);let s=g();return f(s.obtenerCuotasMesAfiliados())}),o()}if(t&2){let e=g();d("loading",e.loading)}}function on(t,a){if(t&1){let e=w();n(0,"p-button",64),_("onClick",function(){u(e);let s=g();return f(s.subirArchivo())}),o()}if(t&2){let e=g();d("loading",e.loading)}}function an(t,a){if(t&1&&(n(0,"li"),r(1),o()),t&2){let e=a.$implicit;l(),x(" ",e," ")}}function sn(t,a){if(t&1&&(n(0,"div",65),m(1,"p-message",66),n(2,"ul"),h(3,an,2,1,"li",67),o()()),t&2){let e=g();l(3),d("ngForOf",e.errores)}}function rn(t,a){t&1&&(n(0,"tr")(1,"th",68),r(2,"Identidad"),o(),n(3,"th"),r(4,"Nombre"),o(),n(5,"th",69),r(6,"Monto"),o(),n(7,"th",69),r(8,"Cuota Esperada"),o(),n(9,"th",70),r(10,"Diferencia"),o()())}function ln(t,a){if(t&1&&(n(0,"tr")(1,"td")(2,"strong"),r(3),o()(),n(4,"td"),r(5),o(),n(6,"td",71),r(7),k(8,"number"),o(),n(9,"td",71),r(10),k(11,"number"),o(),n(12,"td",72),m(13,"p-tag",73),k(14,"number"),o()()),t&2){let e=a.$implicit;l(3),T(e.identidad),l(2),x(" ",e.nombre," "),l(2),x(" L. ",I(8,6,e.monto,"1.2-2")," "),l(3),x(" L. ",I(11,9,e.cuota_esperada,"1.2-2")," "),l(3),d("value",I(14,12,e.diferencia,"1.2-2"))("severity",e.diferencia<0?"danger":e.diferencia>0?"info":"success")}}function cn(t,a){t&1&&(n(0,"tr")(1,"td",74),m(2,"i",75),n(3,"div"),r(4," No hay registros para mostrar "),o()()())}function dn(t,a){if(t&1){let e=w();n(0,"div",76)(1,"div")(2,"h3",77),r(3," Resultados de Validaci\xF3n "),o(),n(4,"small"),r(5),o()(),n(6,"span",78),m(7,"i",28),n(8,"input",79,5),_("input",function(){u(e);let s=P(9);g();let p=P(63);return f(p.filterGlobal(s.value,"contains"))}),o()()()}if(t&2){let e=g();l(5),x(" Registros encontrados: ",(e.registros==null?null:e.registros.length)||0," ")}}function mn(t,a){t&1&&(n(0,"tr")(1,"th",80),r(2," ID "),m(3,"p-sortIcon",81),o(),n(4,"th",82),r(5," Nombre "),m(6,"p-sortIcon",83),o(),n(7,"th",84),r(8," Identidad "),m(9,"p-sortIcon",85),o(),n(10,"th",86),r(11," Monto "),m(12,"p-sortIcon",87),o(),n(13,"th",88),r(14," Fecha "),m(15,"p-sortIcon",89),o(),n(16,"th",90),r(17," Estado "),m(18,"p-sortIcon",91),o(),n(19,"th"),r(20," Observaci\xF3n "),o()(),n(21,"tr")(22,"th"),m(23,"p-columnFilter",92),o(),n(24,"th"),m(25,"p-columnFilter",93),o(),n(26,"th"),m(27,"p-columnFilter",94),o(),n(28,"th"),m(29,"p-columnFilter",95),o(),n(30,"th"),m(31,"p-columnFilter",96),o(),n(32,"th"),m(33,"p-columnFilter",97),o(),n(34,"th"),m(35,"p-columnFilter",98),o()())}function pn(t,a){if(t&1&&(n(0,"tr")(1,"td")(2,"strong"),r(3),o()(),n(4,"td"),r(5),o(),n(6,"td"),r(7),o(),n(8,"td",71),r(9),k(10,"number"),o(),n(11,"td"),r(12),k(13,"date"),o(),n(14,"td"),m(15,"p-tag",73),o(),n(16,"td"),r(17),o()()),t&2){let e=a.$implicit;l(3),x("#",e.iddetalle),l(2),x(" ",e.nombre," "),l(2),x(" ",e.identidad," "),l(2),x(" L. ",I(10,8,e.monto,"1.2-2")," "),l(3),x(" ",I(13,11,e.fecha,"dd/MM/yyyy")," "),l(3),d("value",e.estado)("severity",e.estado==="ERROR"?"danger":"success"),l(2),x(" ",e.observacion," ")}}function gn(t,a){t&1&&(n(0,"tr")(1,"td",99),m(2,"i",100),n(3,"div",101),r(4," No se encontraron registros. "),o()()())}function un(t,a){if(t&1){let e=w();n(0,"p-button",102),_("onClick",function(){u(e);let s=g();return f(s.visibleModalPlanilla=!1)}),o(),n(1,"p-button",103),_("onClick",function(){u(e);let s=g();return f(s.ejecutarPlanilla())}),o()}}function fn(t,a){if(t&1){let e=w();n(0,"p-button",102),_("onClick",function(){u(e);let s=g();return f(s.mostrarConfirmacion=!1)}),o(),n(1,"p-button",104),_("onClick",function(){u(e);let s=g();return f(s.confirmarProcesamiento())}),o()}}var ft=class t{constructor(a){this._Api=a}_Api;empleados=[];errores=[];loading=!1;visibleModalPlanilla=!1;pasosValidacion=0;archivoSeleccionado;seleccionarArchivo(a){this.errores=[],this.empleados=[];let e=a.target.files[0];if(!e)return;this.archivoSeleccionado=e;let i=new FileReader;i.onload=s=>{try{let p=$e(s.target.result,{type:"binary"}),c=p.SheetNames[0],b=p.Sheets[c],$=C.sheet_to_json(b,{defval:"",raw:!1});if(!$.length){this.errores.push("El archivo no contiene registros.");return}if(this.validarColumnas($[0]),this.errores.length>0)return;let ae=[];if($.forEach((z,_t)=>{let F=_t+2,B=String(z.Identidad).trim(),bt=!1,se=String(z.Nombre).trim(),ht=String(z.Monto).replace(/,/g,"").trim(),H=Number(ht),xt=0,Ct=0;B||this.errores.push(`Fila ${F}: Identidad vac\xEDa`),/^\d{13}$/.test(B)||this.errores.push(`Fila ${F}: La identidad "${B}" debe tener exactamente 13 d\xEDgitos`),se||this.errores.push(`Fila ${F}: Nombre vac\xEDo`),isNaN(H)&&this.errores.push(`Fila ${F}: El monto "${z.Monto}" no es v\xE1lido`),H<=0&&this.errores.push(`Fila ${F}: El monto debe ser mayor que cero`),ae.push({identidad:B,nombre:se,monto:H,cuota_esperada:xt,diferencia:Ct,existe:bt})}),this.errores.length>0)return;this.empleados=ae,this.pasosValidacion=1,console.log("Datos v\xE1lidos"),console.table(this.empleados)}catch(p){console.error(p),this.errores.push("Ocurri\xF3 un error al leer el archivo Excel.")}},i.readAsBinaryString(e)}validarColumnas(a){["Identidad","Nombre","Monto"].forEach(i=>{i in a||this.errores.push(`No existe la columna "${i}" en el archivo.`)})}obtenerCuotasMesAfiliados(){this.loading=!0,this._Api.obtenerCuotasMesAfiliados().subscribe({next:a=>{if(this.loading=!1,!a.ok)return this._Api.msj_info(a.msg);let e=new Map;a.data.forEach(i=>{e.set(String(i.identidad),{cuota:Number(i.total_cuotas_mes),existe:!0})}),this.empleados.forEach(i=>{let s=e.get(String(i.identidad));i.existe=s?.existe??!1,i.cuota_esperada=s?.cuota??0,i.diferencia=Number(i.monto)-i.cuota_esperada}),this.pasosValidacion=2,console.log(this.empleados),this.exportarValidacionCuotas()},error:()=>{this.loading=!1}})}exportarValidacionCuotas(){let a=this.empleados.filter(b=>!b.existe),e=this.empleados.filter(b=>b.existe&&b.diferencia<0),i=this.empleados.filter(b=>b.existe&&b.diferencia===0),s=this.empleados.filter(b=>b.existe&&b.diferencia>0),p=C.book_new(),c=[{total_registros:this.empleados.length,no_se_encuentran:a.length,no_cumplen:e.length,cumplen:i.length,exceden:s.length}];C.book_append_sheet(p,C.json_to_sheet(c),"RESUMEN"),C.book_append_sheet(p,C.json_to_sheet(a),"NO SE ENCUENTRAN"),C.book_append_sheet(p,C.json_to_sheet(e),"NO CUMPLEN"),C.book_append_sheet(p,C.json_to_sheet(i),"CUMPLEN"),C.book_append_sheet(p,C.json_to_sheet(s),"EXCEDEN"),He(p,"Validacion_Cuotas.xlsx")}registrarCuotasExcel(){let a=[],e=this.empleados.filter(s=>s.diferencia===0),i=this.empleados.filter(s=>s.diferencia>0);a.push(...e),a.push(...i),console.log(a.length)}subirArchivo(){return re(this,null,function*(){let a=yield this._Api.seleccionarMes();if(console.log(a),!a||!this.archivoSeleccionado)return;let e=new FormData;e.append("archivo",this.archivoSeleccionado),e.append("usuario",JSON.stringify(this._Api.usuario_login()));let i={fecha:a};e.append("generales",JSON.stringify(i)),this.loading=!0,this._Api.cargarPlanilla(e).subscribe({next:s=>{if(console.log(s),this.loading=!1,!s.ok)return this._Api.msj_warning(s.respuesta.msg);this.empleados=[],this.pasosValidacion=0,this.propiedadFile.nativeElement.value=""},error:s=>{this.loading=!1}})})}propiedadFile;mostrarModal(){this.visibleModalPlanilla=!0}registros=[];planillaseleccionada=null;formBuscarPlanilla;sacarPlanillasGuardadas(a){console.log(a.value),this.registros=[],this.planillaseleccionada=null;let i={fecha:a.value.fecha.getFullYear()+"-"+(a.value.fecha.getMonth()+1)+"-1"};console.log(i),this._Api.sacarPlanillaGuardada(i).subscribe({next:s=>{console.log(s),this.registros=s.data,this.planillaseleccionada=this.registros[0]},error:s=>{}})}codigoConfirmacion="";codigoIngresado="";mostrarConfirmacion=!1;totalValidos=0;totalErrores=0;ejecutarPlanilla(){if(this.planillaseleccionada.estado_planilla!=="PENDIENTE")return this.visibleModalPlanilla=!1,this._Api.msj_warning("Esta planilla ya fue procesada.");let a=this.registros.filter(i=>i.estado==="VALIDADO"),e=this.registros.filter(i=>i.estado==="ERROR");this.totalValidos=a.length,this.totalErrores=e.length,this.codigoConfirmacion=Math.floor(1e5+Math.random()*9e5).toString(),this.codigoIngresado="",this.mostrarConfirmacion=!0}confirmarProcesamiento(){if(this.visibleModalPlanilla=!1,this.mostrarConfirmacion=!1,this.codigoIngresado.trim()!==this.codigoConfirmacion){this._Api.msj_warning("C\xF3digo incorrecto");return}let a={idplanilla:this.planillaseleccionada.idplanilla,idusuario:10};console.log(a),this.procesarplanillaCargado(a),this.mostrarConfirmacion=!1}procesarplanillaCargado(a){this.loading=!0,this._Api.procesarplanillaCargado(a).subscribe({next:e=>{this.loading=!1,console.log(e),this.sacarPlanillasGuardadas(this.formBuscarPlanilla),this._Api.msj_success("Procesado con exito")},error:()=>{this.loading=!1,this._Api.msj_serverError()}})}static \u0275fac=function(e){return new(e||t)(fe(Ue))};static \u0275cmp=D({type:t,selectors:[["app-cargar-excel-pagos-sedena"]],viewQuery:function(e,i){if(e&1&&(Y(Ht,5),Y(Ut,5)),e&2){let s;S(s=E())&&(i.propiedadFile=s.first),S(s=E())&&(i.formBuscarPlanilla=s.first)}},decls:99,vars:40,consts:[["propiedadFile",""],["tabla",""],["formBuscarPlanilla","ngForm"],["fecha","ngModel"],["dt",""],["filtro",""],["mensaje","Verificando tus credenciales",3,"visible"],[1,"validacion-container"],[1,"header-card"],[1,"header-info"],[1,"pi","pi-check-circle"],[1,"header-actions"],["label","Valida","icon","pi pi-search","severity","danger","styleClass","btn-shadow",3,"loading"],["label","Registrar","icon","pi pi-upload","severity","success","styleClass","btn-shadow",3,"loading"],["label","Ver Planilla","icon","pi pi-eye","severity","info","styleClass","btn-shadow",3,"onClick","loading"],[1,"grid","mb-4"],[1,"col-12","md:col-8"],[1,"card-panel"],[1,"campo-label"],["type","file","accept",".xlsx,.xls",1,"archivo-input",3,"change"],[1,"col-12","md:col-4"],[1,"stats-card"],[1,"pi","pi-users","stats-icon"],[1,"stats-number"],[1,"stats-label"],["class","error-panel",4,"ngIf"],[1,"search-card"],["iconPosition","left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Buscar por identidad o nombre...",1,"w-full",3,"input"],[1,"table-card"],["currentPageReportTemplate","Mostrando {first} - {last} de {totalRecords} registros","responsiveLayout","scroll","styleClass","p-datatable-sm p-datatable-gridlines tabla-elegante",3,"value","paginator","rows","rowsPerPageOptions","showCurrentPageReport","globalFilterFields"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["header","Carga Masiva de Deducciones",3,"visibleChange","visible","modal","maximizable","draggable","resizable"],[1,"planilla-container"],[1,"planilla-header"],[1,"pi","pi-folder-open"],[1,"estado-box"],["severity","info",3,"value"],[1,"filtros-card"],[1,"grid"],["name","fecha","ngModel","","required","","appendTo","body","placeholder","Seleccione un per\xEDodo","view","month","dateFormat","mm/yy","styleClass","w-full",3,"onSelect","showIcon"],[1,"tabla-card"],["responsiveLayout","scroll","styleClass","tabla-planillas p-datatable-sm",3,"value","paginator","rows","rowsPerPageOptions","globalFilterFields"],["pTemplate","caption"],["pTemplate","footer"],["header","Confirmaci\xF3n de Procesamiento",3,"visibleChange","visible","modal"],[1,"resumen-container"],[1,"titulo-confirmacion"],[1,"subtitulo-confirmacion"],[1,"estadisticas"],[1,"estadistica"],[1,"label"],[1,"valor"],[1,"estadistica","valido"],[1,"estadistica","error"],[1,"codigo-section"],[1,"mensaje-codigo"],[1,"codigo-confirmacion",3,"copy","cut","contextmenu"],[1,"mt-4"],["pInputText","","placeholder","Ingrese el c\xF3digo mostrado arriba",1,"w-full",2,"width","100%",3,"ngModelChange","ngModel"],["label","Valida","icon","pi pi-search","severity","danger","styleClass","btn-shadow",3,"onClick","loading"],["label","Registrar","icon","pi pi-upload","severity","success","styleClass","btn-shadow",3,"onClick","loading"],[1,"error-panel"],["severity","error","text","Se encontraron errores durante la validaci\xF3n"],[4,"ngFor","ngForOf"],[2,"width","180px"],[1,"text-right",2,"width","150px"],[1,"text-center",2,"width","150px"],[1,"text-right"],[1,"text-center"],[3,"value","severity"],["colspan","5",1,"text-center","p-5"],[1,"pi","pi-inbox","text-4xl","text-400","mb-3"],[1,"caption-bar"],[1,"m-0"],[1,"p-input-icon-left"],["pInputText","","type","text","placeholder","Buscar registro...",3,"input"],["pSortableColumn","iddetalle"],["field","iddetalle"],["pSortableColumn","nombre"],["field","nombre"],["pSortableColumn","identidad"],["field","identidad"],["pSortableColumn","monto"],["field","monto"],["pSortableColumn","fecha"],["field","fecha"],["pSortableColumn","estado"],["field","estado"],["field","iddetalle","type","numeric"],["field","nombre","type","text"],["field","identidad","type","text"],["field","monto","type","numeric"],["field","fecha","type","date"],["field","estado","type","text"],["field","observacion","type","text"],["colspan","7",1,"text-center","p-5"],[1,"pi","pi-inbox","text-5xl","text-400"],[1,"mt-3"],["label","Cancelar","severity","secondary",3,"onClick"],["label","Guardar","icon","pi pi-check",3,"onClick"],["label","Procesar","icon","pi pi-check",3,"onClick"]],template:function(e,i){if(e&1){let s=w();m(0,"app-loading",6),n(1,"div",7)(2,"div",8)(3,"div",9)(4,"h2"),m(5,"i",10),r(6," Validaci\xF3n de Cuotas de Afiliados "),o(),n(7,"span"),r(8," Comparaci\xF3n de cuotas contra archivo Excel "),o()(),n(9,"div",11),v(10,nn,1,1,"p-button",12)(11,on,1,1,"p-button",13),n(12,"p-button",14),_("onClick",function(){return u(s),f(i.mostrarModal())}),o()()(),n(13,"div",15)(14,"div",16)(15,"div",17)(16,"label",18),r(17," Archivo Excel "),o(),n(18,"input",19,0),_("change",function(c){return u(s),f(i.seleccionarArchivo(c))}),o()()(),n(20,"div",20)(21,"div",21),m(22,"i",22),n(23,"div",23),r(24),o(),n(25,"div",24),r(26," Registros Encontrados "),o()()()(),h(27,sn,4,1,"div",25),n(28,"div",26)(29,"p-iconField",27)(30,"p-inputIcon"),m(31,"i",28),o(),n(32,"input",29),_("input",function(c){u(s);let b=P(35);return f(b.filterGlobal(c.target.value,"contains"))}),o()()(),n(33,"div",30)(34,"p-table",31,1),h(36,rn,11,0,"ng-template",32)(37,ln,15,15,"ng-template",33)(38,cn,5,0,"ng-template",34),o()()(),n(39,"p-dialog",35),X("visibleChange",function(c){return u(s),j(i.visibleModalPlanilla,c)||(i.visibleModalPlanilla=c),f(c)}),n(40,"div",36)(41,"div",37)(42,"div")(43,"h2"),m(44,"i",38),r(45," Planillas Procesadas "),o(),n(46,"span"),r(47," Consulta y validaci\xF3n de cargas realizadas "),o()(),n(48,"div",39)(49,"small"),r(50,"Estado Actual"),o(),m(51,"p-tag",40),o()(),n(52,"div",41)(53,"form",null,2)(55,"div",42)(56,"div",20)(57,"label",18),r(58," Periodo de Planilla "),o(),n(59,"p-datepicker",43,3),_("onSelect",function(){u(s);let c=P(54);return f(i.sacarPlanillasGuardadas(c))}),o()()()()(),n(61,"div",44)(62,"p-table",45,4),h(64,dn,10,1,"ng-template",46)(65,mn,36,0,"ng-template",32)(66,pn,18,14,"ng-template",33)(67,gn,5,0,"ng-template",34),o()()(),h(68,un,2,0,"ng-template",47),o(),n(69,"p-dialog",48),X("visibleChange",function(c){return u(s),j(i.mostrarConfirmacion,c)||(i.mostrarConfirmacion=c),f(c)}),n(70,"div",49)(71,"h2",50),r(72," Confirmaci\xF3n de Procesamiento "),o(),n(73,"p",51),r(74," Revise la informaci\xF3n antes de continuar. "),o(),n(75,"div",52)(76,"div",53)(77,"span",54),r(78,"Registros"),o(),n(79,"span",55),r(80),o()(),n(81,"div",56)(82,"span",54),r(83,"V\xE1lidos"),o(),n(84,"span",55),r(85),o()(),n(86,"div",57)(87,"span",54),r(88,"Errores"),o(),n(89,"span",55),r(90),o()()(),n(91,"div",58)(92,"p",59),r(93," Para continuar escriba el siguiente c\xF3digo de validaci\xF3n: "),o(),n(94,"div",60),_("copy",function(c){return u(s),f(c.preventDefault())})("cut",function(c){return u(s),f(c.preventDefault())})("contextmenu",function(c){return u(s),f(c.preventDefault())}),r(95),o()(),n(96,"div",61)(97,"input",62),X("ngModelChange",function(c){return u(s),j(i.codigoIngresado,c)||(i.codigoIngresado=c),f(c)}),o()()(),h(98,fn,2,0,"ng-template",47),o()}e&2&&(d("visible",i.loading),l(10),y(i.pasosValidacion===1?10:i.pasosValidacion===2?11:-1),l(2),d("loading",i.loading),l(12),x(" ",i.empleados.length," "),l(3),d("ngIf",i.errores.length>0),l(7),d("value",i.empleados)("paginator",!0)("rows",500)("rowsPerPageOptions",O(34,Jt))("showCurrentPageReport",!0)("globalFilterFields",O(35,Yt)),l(5),K(O(36,Kt)),L("visible",i.visibleModalPlanilla),d("modal",!0)("maximizable",!0)("draggable",!1)("resizable",!1),l(12),d("value",(i.planillaseleccionada==null?null:i.planillaseleccionada.estado_planilla)||"SIN DATOS"),l(8),d("showIcon",!0),l(3),d("value",i.registros)("paginator",!0)("rows",20)("rowsPerPageOptions",O(37,Zt))("globalFilterFields",O(38,en)),l(7),K(O(39,tn)),L("visible",i.mostrarConfirmacion),d("modal",!0),l(11),T(i.registros.length),l(5),T(i.totalValidos),l(5),T(i.totalErrores),l(5),x(" ",i.codigoConfirmacion," "),l(2),L("ngModel",i.codigoIngresado))},dependencies:[Be,Ne,Oe,ke,Ie,ze,Ve,Fe,q,Ee,Q,st,nt,G,it,ot,at,We,Qe,Xe,lt,rt,Ge,qe,Ke,Ye,et,Ze,ut,oe,dt,ct,tt,Te,Me],styles:["[_nghost-%COMP%]{display:block;padding:1rem}.surface-card[_ngcontent-%COMP%]{background:#fff}.p-datatable[_ngcontent-%COMP%]   .p-datatable-header[_ngcontent-%COMP%]{border:none}.p-datatable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background:#f8fafc}.text-right[_ngcontent-%COMP%]{text-align:right}.text-center[_ngcontent-%COMP%]{text-align:center}.p-tag[_ngcontent-%COMP%]{min-width:90px;justify-content:center}h2[_ngcontent-%COMP%]{font-weight:600}.resumen-container[_ngcontent-%COMP%]{padding:.5rem}.titulo-confirmacion[_ngcontent-%COMP%]{margin:0;text-align:center;font-size:1.5rem;font-weight:700;color:#1f2937}.subtitulo-confirmacion[_ngcontent-%COMP%]{text-align:center;color:#6b7280;margin-bottom:1.5rem}.estadisticas[_ngcontent-%COMP%]{display:flex;gap:1rem;margin-bottom:2rem}.estadistica[_ngcontent-%COMP%]{flex:1;background:#f8fafc;border:1px solid #e5e7eb;border-radius:12px;padding:1rem;text-align:center}.estadistica.valido[_ngcontent-%COMP%]{border-left:5px solid #22c55e}.estadistica.error[_ngcontent-%COMP%]{border-left:5px solid #ef4444}.label[_ngcontent-%COMP%]{display:block;font-size:.85rem;color:#6b7280;margin-bottom:.5rem}.valor[_ngcontent-%COMP%]{display:block;font-size:1.8rem;font-weight:700;color:#111827}.codigo-section[_ngcontent-%COMP%]{margin-top:1rem}.mensaje-codigo[_ngcontent-%COMP%]{font-weight:600;margin-bottom:1rem;text-align:center}.codigo-confirmacion[_ngcontent-%COMP%]{background:linear-gradient(135deg,#1e293b,#334155);color:#fff;font-size:2rem;font-weight:800;letter-spacing:10px;text-align:center;padding:1.2rem;border-radius:14px;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;cursor:default}.validacion-container[_ngcontent-%COMP%]{padding:1rem;background:#f5f7fb}.header-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#1e3a8a,#2563eb);color:#fff;border-radius:16px;padding:1.5rem;margin-bottom:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;box-shadow:0 10px 30px #00000026}.header-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:1.7rem;font-weight:700}.header-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{opacity:.9}.header-actions[_ngcontent-%COMP%]{display:flex;gap:.75rem;flex-wrap:wrap}.btn-shadow[_ngcontent-%COMP%]{box-shadow:0 4px 12px #0000002e}.card-panel[_ngcontent-%COMP%], .search-card[_ngcontent-%COMP%], .table-card[_ngcontent-%COMP%]{background:#fff;border-radius:14px;padding:1.25rem;box-shadow:0 2px 15px #0000000f}.campo-label[_ngcontent-%COMP%]{display:block;margin-bottom:.75rem;font-weight:600;color:#374151}.archivo-input[_ngcontent-%COMP%]{width:100%;padding:.9rem;border:2px dashed #d1d5db;border-radius:10px;background:#fafafa}.stats-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#fff,#f8fafc);border-radius:16px;padding:1.5rem;text-align:center;height:100%;box-shadow:0 2px 15px #0000000f}.stats-icon[_ngcontent-%COMP%]{font-size:2rem;color:#2563eb;margin-bottom:.75rem}.stats-number[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#1e3a8a}.stats-label[_ngcontent-%COMP%]{color:#64748b;font-size:.9rem}.error-panel[_ngcontent-%COMP%]{background:#fff1f2;border-left:5px solid #ef4444;padding:1rem;border-radius:10px;margin-bottom:1rem}.search-card[_ngcontent-%COMP%]{margin-bottom:1rem}.tabla-elegante[_ngcontent-%COMP%]   .p-datatable-thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{background:#1e293b!important;color:#fff!important;font-weight:600;border:none!important}.tabla-elegante[_ngcontent-%COMP%]   .p-datatable-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover{background:#f8fafc!important;transition:.2s}.tabla-elegante[_ngcontent-%COMP%]   .p-datatable-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:nth-child(2n){background:#fafafa}.tabla-elegante[_ngcontent-%COMP%]   .p-paginator[_ngcontent-%COMP%]{border-top:1px solid #e5e7eb}.planilla-container[_ngcontent-%COMP%]{padding:1rem;background:#f5f7fb}.planilla-header[_ngcontent-%COMP%]{background:linear-gradient(135deg,#0f172a,#1e3a8a);color:#fff;padding:1.5rem;border-radius:16px;margin-bottom:1rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;box-shadow:0 10px 25px #00000026}.planilla-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:1.6rem;font-weight:700}.planilla-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{opacity:.85}.estado-box[_ngcontent-%COMP%]{text-align:right}.estado-box[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;opacity:.85}.filtros-card[_ngcontent-%COMP%], .tabla-card[_ngcontent-%COMP%]{background:#fff;border-radius:14px;padding:1.25rem;margin-bottom:1rem;box-shadow:0 2px 15px #0000000f}.campo-label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;font-weight:600;color:#374151}.caption-bar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap}.tabla-planillas[_ngcontent-%COMP%]   .p-datatable-thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:first-child > th[_ngcontent-%COMP%]{background:#1e293b!important;color:#fff!important;border:none!important;font-weight:600}.tabla-planillas[_ngcontent-%COMP%]   .p-datatable-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover{background:#f8fafc!important;transition:all .2s}.tabla-planillas[_ngcontent-%COMP%]   .p-datatable-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:nth-child(2n){background:#fafafa}.tabla-planillas[_ngcontent-%COMP%]   .p-column-filter[_ngcontent-%COMP%]{width:100%}.tabla-planillas[_ngcontent-%COMP%]   .p-paginator[_ngcontent-%COMP%]{border-top:1px solid #e5e7eb}.p-column-filter-menu-button[_ngcontent-%COMP%]{color:#2563eb}.p-datepicker[_ngcontent-%COMP%]{width:100%}"]})};export{ft as CargarExcelPagosSedena};
