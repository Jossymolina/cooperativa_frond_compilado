import{a as se}from"./chunk-LLCE37YS.js";import{a as ne,c as te}from"./chunk-VBL47H4M.js";import{b as ae,i as f,j as de,n as V}from"./chunk-TE2LWLR2.js";import{Ea as ce,Fa as M,La as re,i as J,k as W,o as Y,oa as oe,pa as ie,s as ee}from"./chunk-3RS5R7K4.js";import{Ab as D,Cb as R,Fc as m,Gb as q,Gc as Z,Hb as b,Kb as N,Lb as G,Mb as w,Na as d,Nb as B,S as L,Sa as _,T as A,Tb as P,U as O,Ub as h,W as Q,Y as g,ba as C,bb as p,ca as v,cb as j,cc as K,da as s,fb as u,fc as X,gb as H,hb as x,ka as $,nb as T,pa as l,sb as c,tb as E,ub as F,vb as y,wc as U,yb as I,zb as S,zc as z}from"./chunk-D2PW6A4I.js";var me=["data-p-icon","check"],he=(()=>{class e extends V{static \u0275fac=(()=>{let n;return function(t){return(n||(n=l(e)))(t||e)}})();static \u0275cmp=p({type:e,selectors:[["","data-p-icon","check"]],features:[u],attrs:me,decls:1,vars:0,consts:[["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(o,t){o&1&&(s(),I(0,"path",0))},encapsulation:2})}return e})();var fe=["data-p-icon","minus"],pe=(()=>{class e extends V{static \u0275fac=(()=>{let n;return function(t){return(n||(n=l(e)))(t||e)}})();static \u0275cmp=p({type:e,selectors:[["","data-p-icon","minus"]],features:[u],attrs:fe,decls:1,vars:0,consts:[["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(o,t){o&1&&(s(),I(0,"path",0))},encapsulation:2})}return e})();var ue=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`;var ge=["icon"],Ce=["input"],ve=(e,a)=>({checked:e,class:a});function _e(e,a){if(e&1&&y(0,"span",8),e&2){let n=b(3);h(n.cx("icon")),c("ngClass",n.checkboxIcon)("pBind",n.ptm("icon"))}}function ye(e,a){if(e&1&&(s(),y(0,"svg",9)),e&2){let n=b(3);h(n.cx("icon")),c("pBind",n.ptm("icon"))}}function Ie(e,a){if(e&1&&(S(0),x(1,_e,1,4,"span",6)(2,ye,1,3,"svg",7),D()),e&2){let n=b(2);d(),c("ngIf",n.checkboxIcon),d(),c("ngIf",!n.checkboxIcon)}}function we(e,a){if(e&1&&(s(),y(0,"svg",10)),e&2){let n=b(2);h(n.cx("icon")),c("pBind",n.ptm("icon"))}}function Be(e,a){if(e&1&&(S(0),x(1,Ie,3,2,"ng-container",3)(2,we,1,3,"svg",5),D()),e&2){let n=b();d(),c("ngIf",n.checked),d(),c("ngIf",n._indeterminate())}}function Me(e,a){}function Ve(e,a){e&1&&x(0,Me,0,0,"ng-template")}var Te=`
    ${ue}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`,Ee={root:({instance:e})=>["p-checkbox p-component",{"p-checkbox-checked p-highlight":e.checked,"p-disabled":e.$disabled(),"p-invalid":e.invalid(),"p-variant-filled":e.$variant()==="filled","p-checkbox-sm p-inputfield-sm":e.size()==="small","p-checkbox-lg p-inputfield-lg":e.size()==="large"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},be=(()=>{class e extends re{name="checkbox";style=Te;classes=Ee;static \u0275fac=(()=>{let n;return function(t){return(n||(n=l(e)))(t||e)}})();static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})();var ke=new Q("CHECKBOX_INSTANCE"),Fe={provide:ne,useExisting:L(()=>xe),multi:!0},xe=(()=>{class e extends se{hostName="";value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=z();size=z();onChange=new _;onFocus=new _;onBlur=new _;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:ie(this.value,this.modelValue())}_indeterminate=$(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=g(be);bindDirectiveInstance=g(f,{self:!0});$pcCheckbox=g(ke,{optional:!0,skipSelf:!0})??void 0;$variant=U(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onAfterContentInit(){this.templates?.forEach(n=>{switch(n.getType()){case"icon":this._checkboxIconTemplate=n.template;break;case"checkboxicon":this._checkboxIconTemplate=n.template;break}})}onChanges(n){n.indeterminate&&this._indeterminate.set(n.indeterminate.currentValue)}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}updateModel(n){let o,t=this.injector.get(te,null,{optional:!0,self:!0}),i=t&&!this.formControl?t.value:this.modelValue();this.binary?(o=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(o),this.onModelChange(o)):(this.checked||this._indeterminate()?o=i.filter(r=>!oe(r,this.value)):o=i?[...i,this.value]:[this.value],this.onModelChange(o),this.writeModelValue(o),this.formControl&&this.formControl.setValue(o)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:o,originalEvent:n})}handleChange(n){this.readonly||this.updateModel(n)}onInputFocus(n){this.focused=!0,this.onFocus.emit(n)}onInputBlur(n){this.focused=!1,this.onBlur.emit(n),this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeControlValue(n,o){o(n),this.cd.markForCheck()}static \u0275fac=(()=>{let n;return function(t){return(n||(n=l(e)))(t||e)}})();static \u0275cmp=p({type:e,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(o,t,i){if(o&1&&(N(i,ge,4),N(i,ce,4)),o&2){let r;w(r=B())&&(t.checkboxIconTemplate=r.first),w(r=B())&&(t.templates=r)}},viewQuery:function(o,t){if(o&1&&G(Ce,5),o&2){let i;w(i=B())&&(t.inputViewChild=i.first)}},hostVars:5,hostBindings:function(o,t){o&2&&(T("data-p-highlight",t.checked)("data-p-checked",t.checked)("data-p-disabled",t.$disabled()),h(t.cn(t.cx("root"),t.styleClass)))},inputs:{hostName:"hostName",value:"value",binary:[2,"binary","binary",m],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",Z],inputId:"inputId",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",m],formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",m],autofocus:[2,"autofocus","autofocus",m],trueValue:"trueValue",falseValue:"falseValue",variant:[1,"variant"],size:[1,"size"]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[K([Fe,be,{provide:ke,useExisting:e},{provide:ae,useExisting:e}]),H([f]),u],decls:5,vars:24,consts:[["input",""],["type","checkbox",3,"focus","blur","change","checked","pBind"],[3,"pBind"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus",3,"class","pBind",4,"ngIf"],[3,"class","ngClass","pBind",4,"ngIf"],["data-p-icon","check",3,"class","pBind",4,"ngIf"],[3,"ngClass","pBind"],["data-p-icon","check",3,"pBind"],["data-p-icon","minus",3,"pBind"]],template:function(o,t){if(o&1){let i=R();E(0,"input",1,0),q("focus",function(k){return C(i),v(t.onInputFocus(k))})("blur",function(k){return C(i),v(t.onInputBlur(k))})("change",function(k){return C(i),v(t.handleChange(k))}),F(),E(2,"div",2),x(3,Be,3,2,"ng-container",3)(4,Ve,1,0,null,4),F()}o&2&&(P(t.inputStyle),h(t.cn(t.cx("input"),t.inputClass)),c("checked",t.checked)("pBind",t.ptm("input")),T("id",t.inputId)("value",t.value)("name",t.name())("tabindex",t.tabindex)("required",t.required()?"":void 0)("readonly",t.readonly?"":void 0)("disabled",t.$disabled()?"":void 0)("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel),d(2),h(t.cx("box")),c("pBind",t.ptm("box")),d(),c("ngIf",!t.checkboxIconTemplate&&!t._checkboxIconTemplate),d(),c("ngTemplateOutlet",t.checkboxIconTemplate||t._checkboxIconTemplate)("ngTemplateOutletContext",X(21,ve,t.checked,t.cx("icon"))))},dependencies:[ee,J,W,Y,M,he,pe,de,f],encapsulation:2,changeDetection:0})}return e})(),dn=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=j({type:e});static \u0275inj=O({imports:[xe,M,M]})}return e})();export{he as a,xe as b,dn as c};
