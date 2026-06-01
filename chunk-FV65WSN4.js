import{$ as Na,A as ya,B as Ca,C as wa,D as At,E as Ma,F as ka,G as Ue,H as $e,I as Ze,J as Aa,K as Xe,L as Je,M as et,N as se,O as St,P as we,Q as tt,R as Sa,S as xa,T as Ea,U as Va,V as Ia,W as Pa,X as Oa,Y as Fa,Z as Ta,_ as Ra,a as pa,aa as La,b as ze,ba as Ya,c as ua,ca as Ba,d as S,da as za,e as He,f as We,fa as Ha,g as je,ga as Wa,h as qe,ha as ja,i as De,j as ha,k as oe,l as ye,m as Ke,n as ae,o as wt,p as Ge,q as ga,r as Mt,s as kt,t as fa,u as ba,v as Ce,w as Qe,x as va,y as Da}from"./chunk-ZQHXCVUX.js";import{$ as X,Aa as y,Ba as p,Ca as u,D as Ve,E as Zt,Ea as Pe,Eb as la,Fa as Oe,Fb as ca,Ga as h,Ha as l,Ia as s,J as ht,Ja as _,K as H,Ka as E,Kb as ma,L as T,La as V,M as W,Ma as na,N as Xt,Na as Fe,O as c,Oa as q,Ob as _a,Pa as ee,Pb as Ct,Q as w,Qa as C,R as M,Ra as ia,S as j,Sa as f,T as fe,Ta as vt,U as Ie,Ua as Dt,V as Jt,Va as ra,W as g,Wa as L,X as _t,Xa as I,Ya as P,Z as v,a as ge,aa as ea,ab as Te,b as qt,ba as J,bb as K,cb as k,d as F,db as ne,eb as m,f as N,fb as ie,gb as re,hb as yt,ia as d,ib as Re,j as z,ja as gt,jb as Ne,kb as Le,l as Kt,ma as ft,mb as Ye,oa as ta,pa as aa,pb as oa,q as Gt,qb as sa,r as Ee,ra as D,s as Qt,sa as R,ta as be,tb as da,u as Ut,ua as bt,va as ve,w as $t,xb as Y,yb as te,zb as Be}from"./chunk-Z7HOR6IY.js";var xt=new W("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>c(sa)}),de="Method not implemented",A=class{locale;_localeChanges=new N;localeChanges=this._localeChanges;setTime(r,e,t,a){throw new Error(de)}getHours(r){throw new Error(de)}getMinutes(r){throw new Error(de)}getSeconds(r){throw new Error(de)}parseTime(r,e){throw new Error(de)}addSeconds(r,e){throw new Error(de)}getValidDateOrNull(r){return this.isDateInstance(r)&&this.isValid(r)?r:null}deserialize(r){return r==null||this.isDateInstance(r)&&this.isValid(r)?r:this.invalid()}setLocale(r){this.locale=r,this._localeChanges.next()}compareDate(r,e){return this.getYear(r)-this.getYear(e)||this.getMonth(r)-this.getMonth(e)||this.getDate(r)-this.getDate(e)}compareTime(r,e){return this.getHours(r)-this.getHours(e)||this.getMinutes(r)-this.getMinutes(e)||this.getSeconds(r)-this.getSeconds(e)}sameDate(r,e){if(r&&e){let t=this.isValid(r),a=this.isValid(e);return t&&a?!this.compareDate(r,e):t==a}return r==e}sameTime(r,e){if(r&&e){let t=this.isValid(r),a=this.isValid(e);return t&&a?!this.compareTime(r,e):t==a}return r==e}clampDate(r,e,t){return e&&this.compareDate(r,e)<0?e:t&&this.compareDate(r,t)>0?t:r}},G=new W("mat-date-formats");var gn=["mat-calendar-body",""];function fn(n,r){return this._trackRow(r)}var Xa=(n,r)=>r.id;function bn(n,r){if(n&1&&(E(0,"tr",0)(1,"td",3),m(2),V()()),n&2){let e=f();d(),K("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),y("colspan",e.numCols),d(),re(" ",e.label," ")}}function vn(n,r){if(n&1&&(E(0,"td",3),m(1),V()),n&2){let e=f(2);K("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),y("colspan",e._firstRowOffset),d(),re(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function Dn(n,r){if(n&1){let e=q();E(0,"td",6)(1,"button",7),ia("click",function(a){let i=w(e).$implicit,o=f(2);return M(o._cellClicked(i,a))})("focus",function(a){let i=w(e).$implicit,o=f(2);return M(o._emitActiveDateChange(i,a))}),E(2,"span",8),m(3),V(),na(4,"span",9),V()()}if(n&2){let e=r.$implicit,t=r.$index,a=f().$index,i=f();K("width",i._cellWidth)("padding-top",i._cellPadding)("padding-bottom",i._cellPadding),y("data-mat-row",a)("data-mat-col",t),d(),ne(e.cssClasses),k("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",i._isActiveCell(a,t))("mat-calendar-body-range-start",i._isRangeStart(e.compareValue))("mat-calendar-body-range-end",i._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",i._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",i._isComparisonBridgeStart(e.compareValue,a,t))("mat-calendar-body-comparison-bridge-end",i._isComparisonBridgeEnd(e.compareValue,a,t))("mat-calendar-body-comparison-start",i._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",i._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",i._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",i._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",i._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",i._isInPreview(e.compareValue)),ee("tabIndex",i._isActiveCell(a,t)?0:-1),y("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",i._isSelected(e.compareValue))("aria-current",i.todayValue===e.compareValue?"date":null)("aria-describedby",i._getDescribedby(e.compareValue)),d(),k("mat-calendar-body-selected",i._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",i._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",i.todayValue===e.compareValue),d(),re(" ",e.displayValue," ")}}function yn(n,r){if(n&1&&(E(0,"tr",1),p(1,vn,2,6,"td",4),Pe(2,Dn,5,49,"td",5,Xa),V()),n&2){let e=r.$implicit,t=r.$index,a=f();d(),u(t===0&&a._firstRowOffset?1:-1),d(),Oe(e)}}function Cn(n,r){if(n&1&&(l(0,"th",2)(1,"span",6),m(2),s(),l(3,"span",3),m(4),s()()),n&2){let e=r.$implicit;d(2),ie(e.long),d(2),ie(e.narrow)}}var wn=["*"];function Mn(n,r){}function kn(n,r){if(n&1){let e=q();l(0,"mat-month-view",4),Le("activeDateChange",function(a){w(e);let i=f();return Ne(i.activeDate,a)||(i.activeDate=a),M(a)}),C("_userSelection",function(a){w(e);let i=f();return M(i._dateSelected(a))})("dragStarted",function(a){w(e);let i=f();return M(i._dragStarted(a))})("dragEnded",function(a){w(e);let i=f();return M(i._dragEnded(a))}),s()}if(n&2){let e=f();Re("activeDate",e.activeDate),h("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function An(n,r){if(n&1){let e=q();l(0,"mat-year-view",5),Le("activeDateChange",function(a){w(e);let i=f();return Ne(i.activeDate,a)||(i.activeDate=a),M(a)}),C("monthSelected",function(a){w(e);let i=f();return M(i._monthSelectedInYearView(a))})("selectedChange",function(a){w(e);let i=f();return M(i._goToDateInView(a,"month"))}),s()}if(n&2){let e=f();Re("activeDate",e.activeDate),h("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function Sn(n,r){if(n&1){let e=q();l(0,"mat-multi-year-view",6),Le("activeDateChange",function(a){w(e);let i=f();return Ne(i.activeDate,a)||(i.activeDate=a),M(a)}),C("yearSelected",function(a){w(e);let i=f();return M(i._yearSelectedInMultiYearView(a))})("selectedChange",function(a){w(e);let i=f();return M(i._goToDateInView(a,"year"))}),s()}if(n&2){let e=f();Re("activeDate",e.activeDate),h("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function xn(n,r){}var En=["button"],Vn=[[["","matDatepickerToggleIcon",""]]],In=["[matDatepickerToggleIcon]"];function Pn(n,r){n&1&&(j(),l(0,"svg",2),_(1,"path",3),s())}var ue=(()=>{class n{changes=new N;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=H({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),On=0,Ae=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=On++;cssClasses;constructor(r,e,t,a,i,o=r,b){this.value=r,this.displayValue=e,this.ariaLabel=t,this.enabled=a,this.compareValue=o,this.rawValue=b,this.cssClasses=i instanceof Set?Array.from(i):i}},Fn={passive:!1,capture:!0},at={passive:!0,capture:!0},qa={passive:!0},pe=(()=>{class n{_elementRef=c(J);_ngZone=c(_t);_platform=c(ga);_intl=c(ue);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new g;previewChange=new g;activeDateChange=new g;dragStarted=new g;dragEnded=new g;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=c(Ie);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=c(ft),t=c(Ke);this._startDateLabelId=t.getId("mat-calendar-body-start-"),this._endDateLabelId=t.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=t.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=t.getId("mat-calendar-body-comparison-end-"),c(Ce).load(ya),this._ngZone.runOutsideAngular(()=>{let a=this._elementRef.nativeElement,i=[e.listen(a,"touchmove",this._touchmoveHandler,Fn),e.listen(a,"mouseenter",this._enterHandler,at),e.listen(a,"focus",this._enterHandler,at),e.listen(a,"mouseleave",this._leaveHandler,at),e.listen(a,"blur",this._leaveHandler,at),e.listen(a,"mousedown",this._mousedownHandler,qa),e.listen(a,"touchstart",this._mousedownHandler,qa)];this._platform.isBrowser&&i.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=i})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:a,numCols:i}=this;(e.rows||t)&&(this._firstRowOffset=a&&a.length&&a[0].length?i-a[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/i}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/i}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let a=e*this.numCols+t;return e&&(a-=this._firstRowOffset),a==this.activeCell}_focusActiveCell(e=!0){gt(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return It(e,this.startValue,this.endValue)}_isRangeEnd(e){return Pt(e,this.startValue,this.endValue)}_isInRange(e){return Ot(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return It(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,a){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let i=this.rows[t][a-1];if(!i){let o=this.rows[t-1];i=o&&o[o.length-1]}return i&&!this._isRangeEnd(i.compareValue)}_isComparisonBridgeEnd(e,t,a){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let i=this.rows[t][a+1];if(!i){let o=this.rows[t+1];i=o&&o[0]}return i&&!this._isRangeStart(i.compareValue)}_isComparisonEnd(e){return Pt(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return Ot(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return It(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return Pt(e,this.previewStart,this.previewEnd)}_isInPreview(e){return Ot(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=Ka(e),a=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),Vt(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:a?.enabled?a:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=Vt(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let a=this._getCellFromElement(t);this.dragEnded.emit({value:a?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=Ka(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=Vt(e);if(t){let a=t.getAttribute("data-mat-row"),i=t.getAttribute("data-mat-col");if(a&&i)return this.rows[parseInt(a)]?.[parseInt(i)]||null}return null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[X],attrs:gn,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(t,a){t&1&&(p(0,bn,3,6,"tr",0),Pe(1,yn,4,1,"tr",1,fn,!0),E(3,"span",2),m(4),V(),E(5,"span",2),m(6),V(),E(7,"span",2),m(8),V(),E(9,"span",2),m(10),V()),t&2&&(u(a._firstRowOffset<a.labelMinRequiredCells?0:-1),d(),Oe(a.rows),d(2),ee("id",a._startDateLabelId),d(),re(" ",a.startDateAccessibleName,`
`),d(),ee("id",a._endDateLabelId),d(),re(" ",a.endDateAccessibleName,`
`),d(),ee("id",a._comparisonStartDateLabelId),d(),yt(" ",a.comparisonDateAccessibleName," ",a.startDateAccessibleName,`
`),d(),ee("id",a._comparisonEndDateLabelId),d(),yt(" ",a.comparisonDateAccessibleName," ",a.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function Et(n){return n?.nodeName==="TD"}function Vt(n){let r;return Et(n)?r=n:Et(n.parentNode)?r=n.parentNode:Et(n.parentNode?.parentNode)&&(r=n.parentNode.parentNode),r?.getAttribute("data-mat-row")!=null?r:null}function It(n,r,e){return e!==null&&r!==e&&n<e&&n===r}function Pt(n,r,e){return r!==null&&r!==e&&n>=r&&n===e}function Ot(n,r,e,t){return t&&r!==null&&e!==null&&r!==e&&n>=r&&n<=e}function Ka(n){let r=n.changedTouches[0];return document.elementFromPoint(r.clientX,r.clientY)}var O=class{start;end;_disableStructuralEquivalency;constructor(r,e){this.start=r,this.end=e}},Se=(()=>{class n{selection;_adapter;_selectionChanged=new N;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let a=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:a})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(t){ta()};static \u0275prov=H({token:n,factory:n.\u0275fac})}return n})(),Tn=(()=>{class n extends Se{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new n(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(t){return new(t||n)(Xt(A))};static \u0275prov=H({token:n,factory:n.\u0275fac})}return n})();var Ja={provide:Se,useFactory:()=>c(Se,{optional:!0,skipSelf:!0})||new Tn(c(A))};var en=new W("MAT_DATE_RANGE_SELECTION_STRATEGY");var Ft=7,Rn=0,Ga=(()=>{class n{_changeDetectorRef=c(Y);_dateFormats=c(G,{optional:!0});_dateAdapter=c(A,{optional:!0});_dir=c(ye,{optional:!0});_rangeStrategy=c(en,{optional:!0});_rerenderSubscription=F.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof O?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new g;_userSelection=new g;dragStarted=new g;dragEnded=new g;activeDateChange=new g;_matCalendarBody;_monthLabel=v("");_weeks=v([]);_firstWeekOffset=v(0);_rangeStart=v(null);_rangeEnd=v(null);_comparisonRangeStart=v(null);_comparisonRangeEnd=v(null);_previewStart=v(null);_previewEnd=v(null);_isRange=v(!1);_todayDate=v(null);_weekdays=v([]);constructor(){c(Ce).load(Qe),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Ve(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,a=this._getDateFromDayOfMonth(t),i,o;this._selected instanceof O?(i=this._getDateInCurrentMonth(this._selected.start),o=this._getDateInCurrentMonth(this._selected.end)):i=o=this._getDateInCurrentMonth(this._selected),(i!==t||o!==t)&&this.selectedChange.emit(a),this._userSelection.emit({value:a,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!ae(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((Ft+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%Ft),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let a=t?t.rawValue:null,i=this._rangeStrategy.createPreview(a,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(i.start)),this._previewEnd.set(this._getCellCompareValue(i.end)),this.activeDrag&&a){let o=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,a,e);o&&(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames("narrow"),i=this._dateAdapter.getDayOfWeekNames("long").map((o,b)=>({long:o,narrow:t[b],id:Rn++}));this._weekdays.set(i.slice(e).concat(i.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),a=[[]];for(let i=0,o=this._firstWeekOffset();i<e;i++,o++){o==Ft&&(a.push([]),o=0);let b=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),i+1),Q=this._shouldEnableDate(b),U=this._dateAdapter.format(b,this._dateFormats.display.dateA11yLabel),$=this.dateClass?this.dateClass(b,"month"):void 0;a[a.length-1].push(new Ae(i+1,t[i],U,Q,$,this._getCellCompareValue(b),b))}this._weeks.set(a)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),a=this._dateAdapter.getMonth(e),i=this._dateAdapter.getDate(e);return new Date(t,a,i).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof O?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-month-view"]],viewQuery:function(t,a){if(t&1&&L(pe,5),t&2){let i;I(i=P())&&(a._matCalendarBody=i.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[X],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(t,a){t&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),Pe(3,Cn,5,2,"th",2,Xa),s(),l(5,"tr",3),_(6,"th",4),s()(),l(7,"tbody",5),C("selectedValueChange",function(o){return a._dateSelected(o)})("activeDateChange",function(o){return a._updateActiveDate(o)})("previewChange",function(o){return a._previewChanged(o)})("dragStarted",function(o){return a.dragStarted.emit(o)})("dragEnded",function(o){return a._dragEnded(o)})("keyup",function(o){return a._handleCalendarBodyKeyup(o)})("keydown",function(o){return a._handleCalendarBodyKeydown(o)}),s()()),t&2&&(d(3),Oe(a._weekdays()),d(4),h("label",a._monthLabel())("rows",a._weeks())("todayValue",a._todayDate())("startValue",a._rangeStart())("endValue",a._rangeEnd())("comparisonStart",a._comparisonRangeStart())("comparisonEnd",a._comparisonRangeEnd())("previewStart",a._previewStart())("previewEnd",a._previewEnd())("isRange",a._isRange())("labelMinRequiredCells",3)("activeCell",a._dateAdapter.getDate(a.activeDate)-1)("startDateAccessibleName",a.startDateAccessibleName)("endDateAccessibleName",a.endDateAccessibleName))},dependencies:[pe],encapsulation:2,changeDetection:0})}return n})(),x=24,Tt=4,Qa=(()=>{class n{_changeDetectorRef=c(Y);_dateAdapter=c(A,{optional:!0});_dir=c(ye,{optional:!0});_rerenderSubscription=F.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),tn(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof O?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new g;yearSelected=new g;activeDateChange=new g;_matCalendarBody;_years=v([]);_todayYear=v(0);_selectedYear=v(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Ve(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-Me(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),a=[];for(let i=0,o=[];i<x;i++)o.push(t+i),o.length==Tt&&(a.push(o.map(b=>this._createCellForYear(b))),o=[]);this._years.set(a),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,a=this._dateAdapter.createDate(t,0,1),i=this._getDateFromYear(t);this.yearSelected.emit(a),this.selectedChange.emit(i)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Tt);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Tt);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Me(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,x-Me(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-x*10:-x);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?x*10:x);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return Me(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),a=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),a=this._dateAdapter.getYearName(t),i=this.dateClass?this.dateClass(t,"multi-year"):void 0;return new Ae(e,a,a,this._shouldEnableYear(e),i)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let a=t;this._dateAdapter.getYear(a)==e;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof O){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-multi-year-view"]],viewQuery:function(t,a){if(t&1&&L(pe,5),t&2){let i;I(i=P())&&(a._matCalendarBody=i.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(t,a){t&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),_(3,"th",2),s()(),l(4,"tbody",3),C("selectedValueChange",function(o){return a._yearSelected(o)})("activeDateChange",function(o){return a._updateActiveDate(o)})("keyup",function(o){return a._handleCalendarBodyKeyup(o)})("keydown",function(o){return a._handleCalendarBodyKeydown(o)}),s()()),t&2&&(d(4),h("rows",a._years())("todayValue",a._todayYear())("startValue",a._selectedYear())("endValue",a._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",a._getActiveCell()))},dependencies:[pe],encapsulation:2,changeDetection:0})}return n})();function tn(n,r,e,t,a){let i=n.getYear(r),o=n.getYear(e),b=an(n,t,a);return Math.floor((i-b)/x)===Math.floor((o-b)/x)}function Me(n,r,e,t){let a=n.getYear(r);return Nn(a-an(n,e,t),x)}function an(n,r,e){let t=0;return e?t=n.getYear(e)-x+1:r&&(t=n.getYear(r)),t}function Nn(n,r){return(n%r+r)%r}var Ua=(()=>{class n{_changeDetectorRef=c(Y);_dateFormats=c(G,{optional:!0});_dateAdapter=c(A,{optional:!0});_dir=c(ye,{optional:!0});_rerenderSubscription=F.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof O?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new g;monthSelected=new g;activeDateChange=new g;_matCalendarBody;_months=v([]);_yearLabel=v("");_todayMonth=v(null);_selectedMonth=v(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Ve(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(a);let i=this._getDateFromMonth(t);this.selectedChange.emit(i)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(a=>this._createCellForMonth(a,e[a])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),a=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForMonth(e,t){let a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),i=this._dateAdapter.format(a,this._dateFormats.display.monthYearA11yLabel),o=this.dateClass?this.dateClass(a,"year"):void 0;return new Ae(e,t.toLocaleUpperCase(),i,this._shouldEnableMonth(e),o)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let a=this._dateAdapter.createDate(t,e,1);for(let i=a;this._dateAdapter.getMonth(i)==e;i=this._dateAdapter.addCalendarDays(i,1))if(this.dateFilter(i))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let a=this._dateAdapter.getYear(this.maxDate),i=this._dateAdapter.getMonth(this.maxDate);return e>a||e===a&&t>i}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let a=this._dateAdapter.getYear(this.minDate),i=this._dateAdapter.getMonth(this.minDate);return e<a||e===a&&t<i}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof O?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-year-view"]],viewQuery:function(t,a){if(t&1&&L(pe,5),t&2){let i;I(i=P())&&(a._matCalendarBody=i.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(t,a){t&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),_(3,"th",2),s()(),l(4,"tbody",3),C("selectedValueChange",function(o){return a._monthSelected(o)})("activeDateChange",function(o){return a._updateActiveDate(o)})("keyup",function(o){return a._handleCalendarBodyKeyup(o)})("keydown",function(o){return a._handleCalendarBodyKeydown(o)}),s()()),t&2&&(d(4),h("label",a._yearLabel())("rows",a._months())("todayValue",a._todayMonth())("startValue",a._selectedMonth())("endValue",a._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",a._dateAdapter.getMonth(a.activeDate)))},dependencies:[pe],encapsulation:2,changeDetection:0})}return n})(),nn=(()=>{class n{_intl=c(ue);calendar=c(Rt);_dateAdapter=c(A,{optional:!0});_dateFormats=c(G,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){c(Ce).load(Qe);let e=c(Y);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-x))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:x))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,a=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=a.getYearName(e.activeDate),this._periodButtonDescription=a.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):tn(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-Me(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),a=t+x-1,i=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),o=this._dateAdapter.getYearName(this._dateAdapter.createDate(a,0,1));return[i,o]}_periodButtonLabelId=c(Ke).getId("mat-calendar-period-label-");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:wn,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(t,a){t&1&&(vt(),l(0,"div",0)(1,"div",1)(2,"span",2),m(3),s(),l(4,"button",3),C("click",function(){return a.currentPeriodClicked()}),l(5,"span",4),m(6),s(),j(),l(7,"svg",5),_(8,"polygon",6),s()(),fe(),_(9,"div",7),Dt(10),l(11,"button",8),C("click",function(){return a.previousClicked()}),j(),l(12,"svg",9),_(13,"path",10),s()(),fe(),l(14,"button",11),C("click",function(){return a.nextClicked()}),j(),l(15,"svg",9),_(16,"path",12),s()()()()),t&2&&(d(2),h("id",a._periodButtonLabelId),d(),ie(a.periodButtonDescription),d(),y("aria-label",a.periodButtonLabel)("aria-describedby",a._periodButtonLabelId),d(2),ie(a.periodButtonText),d(),k("mat-calendar-invert",a.calendar.currentView!=="month"),d(4),h("disabled",!a.previousEnabled())("matTooltip",a.prevButtonLabel),y("aria-label",a.prevButtonLabel),d(3),h("disabled",!a.nextEnabled())("matTooltip",a.nextButtonLabel),y("aria-label",a.nextButtonLabel))},dependencies:[we,St,ja],encapsulation:2,changeDetection:0})}return n})(),Rt=(()=>{class n{_dateAdapter=c(A,{optional:!0});_dateFormats=c(G,{optional:!0});_changeDetectorRef=c(Y);_elementRef=c(J);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof O?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new g;yearSelected=new g;monthSelected=new g;viewChanged=new g(!0);_userSelection=new g;_userDragDrop=new g;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new N;constructor(){this._intlChanges=c(ue).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new Mt(this.headerComponent||nn),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,a=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,i=t||a||e.dateFilter;if(i&&!i.firstChange){let o=this._getCurrentViewComponent();o&&(this._elementRef.nativeElement.contains(wt())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),o._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof O||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-calendar"]],viewQuery:function(t,a){if(t&1&&L(Ga,5)(Ua,5)(Qa,5),t&2){let i;I(i=P())&&(a.monthView=i.first),I(i=P())&&(a.yearView=i.first),I(i=P())&&(a.multiYearView=i.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[Ye([Ja]),X],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(t,a){if(t&1&&(ve(0,Mn,0,0,"ng-template",0),l(1,"div",1),p(2,kn,1,11,"mat-month-view",2)(3,An,1,6,"mat-year-view",3)(4,Sn,1,6,"mat-multi-year-view",3),s()),t&2){let i;h("cdkPortalOutlet",a._calendarHeaderPortal),d(2),u((i=a.currentView)==="month"?2:i==="year"?3:i==="multi-year"?4:-1)}},dependencies:[kt,ba,Ga,Ua,Qa],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})(),Ln=new W("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let n=c(Ie);return()=>Ea(n)}}),rn=(()=>{class n{_elementRef=c(J);_animationsDisabled=At();_changeDetectorRef=c(Y);_globalModel=c(Se);_dateAdapter=c(A);_ngZone=c(_t);_rangeSelectionStrategy=c(en,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new N;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(c(Ce).load(Qe),this._closeButtonText=c(ue).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=c(ft);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"animationstart",this._handleAnimationEvent),t.listen(e,"animationend",this._handleAnimationEvent),t.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,a=e.value,i=t instanceof O;if(i&&this._rangeSelectionStrategy){let o=this._rangeSelectionStrategy.selectionFinished(a,t,e.event);this._model.updateSelection(o,this)}else a&&(i||!this._dateAdapter.sameDate(a,t))&&this._model.add(a);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",t.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-datepicker-content"]],viewQuery:function(t,a){if(t&1&&L(Rt,5),t&2){let i;I(i=P())&&(a._calendar=i.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(t,a){t&2&&(ne(a.color?"mat-"+a.color:""),k("mat-datepicker-content-touch",a.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!a._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(t,a){t&1&&(l(0,"div",0)(1,"mat-calendar",1),C("yearSelected",function(o){return a.datepicker._selectYear(o)})("monthSelected",function(o){return a.datepicker._selectMonth(o)})("viewChanged",function(o){return a.datepicker._viewChanged(o)})("_userSelection",function(o){return a._handleUserSelection(o)})("_userDragDrop",function(o){return a._handleUserDragDrop(o)}),s(),ve(2,xn,0,0,"ng-template",2),l(3,"button",3),C("focus",function(){return a._closeButtonFocused=!0})("blur",function(){return a._closeButtonFocused=!1})("click",function(){return a.datepicker.close()}),m(4),s()()),t&2&&(k("mat-datepicker-content-container-with-custom-header",a.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",a._actionsPortal),y("aria-modal",!0)("aria-labelledby",a._dialogLabelId??void 0),d(),ne(a.datepicker.panelClass),h("id",a.datepicker.id)("startAt",a.datepicker.startAt)("startView",a.datepicker.startView)("minDate",a.datepicker._getMinDate())("maxDate",a.datepicker._getMaxDate())("dateFilter",a.datepicker._getDateFilter())("headerComponent",a.datepicker.calendarHeaderComponent)("selected",a._getSelected())("dateClass",a.datepicker.dateClass)("comparisonStart",a.comparisonStart)("comparisonEnd",a.comparisonEnd)("startDateAccessibleName",a.startDateAccessibleName)("endDateAccessibleName",a.endDateAccessibleName),d(),h("cdkPortalOutlet",a._actionsPortal),d(),k("cdk-visually-hidden",!a._closeButtonFocused),h("color",a.color||"primary"),d(),ie(a._closeButtonText))},dependencies:[va,Rt,kt,we],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
  min-height: fit-content;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2,changeDetection:0})}return n})(),$a=(()=>{class n{_injector=c(Ie);_viewContainerRef=c(aa);_dateAdapter=c(A,{optional:!0});_dir=c(ye,{optional:!0});_model=c(Se);_animationsDisabled=At();_scrollStrategy=c(Ln);_inputStateChanges=F.EMPTY;_document=c(Jt);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition="start";yPosition="below";restoreFocus=!0;yearSelected=new g;monthSelected=new g;viewChanged=new g(!0);dateClass;openedStream=new g;closedStream=new g;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=Ca(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=c(Ke).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new N;_changeDetectorRef=c(Y);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;a instanceof Pa&&(this._setConnectedPositions(a),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=wt(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",t=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:a,location:i}=this._componentRef;a._animationDone.pipe($t(1)).subscribe(()=>{let o=this._document.activeElement;e&&(!o||o===this._document.activeElement||i.nativeElement.contains(o))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),a._startExitAnimation()}e?setTimeout(t):t()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,t=new Mt(rn,this._viewContainerRef),a=this._overlayRef=Fa(this._injector,new Va({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:e?xa(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(a).subscribe(i=>{i&&i.preventDefault(),this.close()}),a.keydownEvents().subscribe(i=>{let o=i.keyCode;(o===38||o===40||o===37||o===39||o===33||o===34)&&i.preventDefault()}),this._componentRef=a.attach(t),this._forwardContentValues(this._componentRef.instance),e||gt(()=>{a.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return Oa(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=Ia(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition==="end"?"end":"start",a=t==="start"?"end":"start",i=this.yPosition==="above"?"bottom":"top",o=i==="top"?"bottom":"top";return e.withPositions([{originX:t,originY:o,overlayX:t,overlayY:i},{originX:t,originY:i,overlayX:t,overlayY:o},{originX:a,originY:o,overlayX:a,overlayY:i},{originX:a,originY:i,overlayX:a,overlayY:o}])}_getCloseStream(e){let t=["ctrlKey","shiftKey","metaKey"];return Ee(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(Qt(a=>a.keyCode===27&&!ae(a)||this.datepickerInput&&ae(a,"altKey")&&a.keyCode===38&&t.every(i=>!ae(a,i)))))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=be({type:n,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",te],disabled:[2,"disabled","disabled",te],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",te],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",te]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[X]})}return n})(),on=(()=>{class n extends $a{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ea(n)))(a||n)}})();static \u0275cmp=D({type:n,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[Ye([Ja,{provide:$a,useExisting:n}]),bt],decls:0,vars:0,template:function(t,a){},encapsulation:2,changeDetection:0})}return n})(),le=class{target;targetElement;value=null;constructor(r,e){this.target=r,this.targetElement=e,this.value=this.target.value}},Yn=(()=>{class n{_elementRef=c(J);_dateAdapter=c(A,{optional:!0});_dateFormats=c(G,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let t=e,a=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&a.blur&&a.blur()}_disabled;dateChange=new g;dateInput=new g;stateChanges=new N;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=F.EMPTY;_localeSubscription=F.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!t||this._matchesFilter(t)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMinDate();return!a||!t||this._dateAdapter.compareDate(a,t)<=0?null:{matDatepickerMin:{min:a,actual:t}}};_maxValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMaxDate();return!a||!t||this._dateAdapter.compareDate(a,t)>=0?null:{matDatepickerMax:{max:a,actual:t}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){let a=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(a),this._cvaOnChange(a),this._onTouched(),this._formatValue(a),this.dateInput.emit(new le(this,this._elementRef.nativeElement)),this.dateChange.emit(new le(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){Bn(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){let t=["ctrlKey","shiftKey","metaKey"];ae(e,"altKey")&&e.keyCode===40&&t.every(i=>!ae(e,i))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let t=e.target.value,a=this._lastValueValid,i=this._dateAdapter.parse(t,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(i),i=this._dateAdapter.getValidDateOrNull(i);let o=!this._dateAdapter.sameDate(i,this.value);!i||o?this._cvaOnChange(i):(t&&!this.value&&this._cvaOnChange(i),a!==this._lastValueValid&&this._validatorOnChange()),o&&(this._assignValue(i),this.dateInput.emit(new le(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new le(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):""}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,t){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),t&&this._formatValue(e)}_matchesFilter(e){let t=this._getDateFilter();return!t||t(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=be({type:n,inputs:{value:"value",disabled:[2,"disabled","disabled",te]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[X]})}return n})();function Bn(n,r){let e=Object.keys(n);for(let t of e){let{previousValue:a,currentValue:i}=n[t];if(r.isDateInstance(a)&&r.isDateInstance(i)){if(!r.sameDate(a,i))return!0}else return!0}return!1}var zn={provide:pa,useExisting:ht(()=>st),multi:!0},Hn={provide:ua,useExisting:ht(()=>st),multi:!0},st=(()=>{class n extends Yn{_formField=c(Aa,{optional:!0});_closedSubscription=F.EMPTY;_openedSubscription=F.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=v(null);get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=S.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static \u0275fac=function(t){return new(t||n)};static \u0275dir=be({type:n,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(t,a){t&1&&C("input",function(o){return a._onInput(o)})("change",function(){return a._onChange()})("blur",function(){return a._onBlur()})("keydown",function(o){return a._onKeydown(o)}),t&2&&(ee("disabled",a.disabled),y("aria-haspopup",a._datepicker?"dialog":null)("aria-owns",a._ariaOwns())("min",a.min?a._dateAdapter.toIso8601(a.min):null)("max",a.max?a._dateAdapter.toIso8601(a.max):null)("data-mat-calendar",a._datepicker?a._datepicker.id:null))},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[Ye([zn,Hn,{provide:ka,useExisting:n}]),bt]})}return n})(),Wn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=be({type:n,selectors:[["","matDatepickerToggleIcon",""]]})}return n})(),Yt=(()=>{class n{_intl=c(ue);_changeDetectorRef=c(Y);_stateChanges=F.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=c(new da("tabindex"),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:z(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:z(),a=this.datepicker?Ee(this.datepicker.openedStream,this.datepicker.closedStream):z();this._stateChanges.unsubscribe(),this._stateChanges=Ee(this._intl.changes,e,t,a).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-datepicker-toggle"]],contentQueries:function(t,a,i){if(t&1&&ra(i,Wn,5),t&2){let o;I(o=P())&&(a._customIcon=o.first)}},viewQuery:function(t,a){if(t&1&&L(En,5),t&2){let i;I(i=P())&&(a._button=i.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(t,a){t&1&&C("click",function(o){return a._open(o)}),t&2&&(y("tabindex",null)("data-mat-calendar",a.datepicker?a.datepicker.id:null),k("mat-datepicker-toggle-active",a.datepicker&&a.datepicker.opened)("mat-accent",a.datepicker&&a.datepicker.color==="accent")("mat-warn",a.datepicker&&a.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",te],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[X],ngContentSelectors:In,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(t,a){t&1&&(vt(Vn),l(0,"button",1,0),p(2,Pn,2,0,":svg:svg",2),Dt(3),s()),t&2&&(h("tabIndex",a.disabled?-1:a.tabIndex)("disabled",a.disabled)("disableRipple",a.disableRipple),y("aria-haspopup",a.datepicker?"dialog":null)("aria-label",a.ariaLabel||a._intl.openCalendarLabel)("aria-expanded",a.datepicker?a.datepicker.opened:null),d(2),u(a._customIcon?-1:2))},dependencies:[St],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var sn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=T({providers:[ue],imports:[tt,Ta,Da,fa,rn,Yt,nn,Ge,Sa]})}return n})();var qn=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,Kn=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function Bt(n,r){let e=Array(n);for(let t=0;t<n;t++)e[t]=r(t);return e}var Gn=(()=>{class n extends A{_matDateLocale=c(xt,{optional:!0});constructor(){super();let e=c(xt,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return Bt(12,a=>this._format(t,new Date(2017,a,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return Bt(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return Bt(7,a=>this._format(t,new Date(2017,0,a+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,a){let i=this._createDateWithOverflow(e,t,a);return i.getMonth()!=t,i}today(){return new Date}parse(e,t){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let a=new Intl.DateTimeFormat(this.locale,qt(ge({},t),{timeZone:"utc"}));return this._format(a,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let a=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(a)!=((this.getMonth(e)+t)%12+12)%12&&(a=this._createDateWithOverflow(this.getYear(a),this.getMonth(a),0)),a}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(qn.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,a,i){let o=this.clone(e);return o.setHours(t,a,i,0),o}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let a=e.trim();if(a.length===0)return null;let i=this._parseTimeString(a);if(i===null){let o=a.replace(/[^0-9:(AM|PM)]/gi,"").trim();o.length>0&&(i=this._parseTimeString(o))}return i||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,a){let i=new Date;return i.setFullYear(e,t,a),i.setHours(0,0,0,0),i}_2digit(e){return("00"+e).slice(-2)}_format(e,t){let a=new Date;return a.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),a.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(a)}_parseTimeString(e){let t=e.toUpperCase().match(Kn);if(t){let a=parseInt(t[1]),i=parseInt(t[2]),o=t[3]==null?void 0:parseInt(t[3]),b=t[4];if(a===12?a=b==="AM"?0:a:b==="PM"&&(a+=12),zt(a,0,23)&&zt(i,0,59)&&(o==null||zt(o,0,59)))return this.setTime(this.today(),a,i,o||0)}return null}static \u0275fac=function(t){return new(t||n)};static \u0275prov=H({token:n,factory:n.\u0275fac})}return n})();function zt(n,r,e){return!isNaN(n)&&n>=r&&n<=e}var Qn={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};var dn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=T({providers:[Un()]})}return n})();function Un(n=Qn){return[{provide:A,useClass:Gn},{provide:G,useValue:n}]}function Xn(n,r){n&1&&(l(0,"mat-error"),m(1,"First Name is required."),s())}function Jn(n,r){n&1&&(l(0,"mat-error"),m(1,"First Name cannot contain only whitespace."),s())}function ei(n,r){n&1&&(l(0,"mat-error"),m(1,"Last Name is required."),s())}function ti(n,r){n&1&&(l(0,"mat-error"),m(1,"Last Name cannot contain only whitespace."),s())}function ai(n,r){n&1&&(l(0,"mat-error"),m(1,"NIK is required."),s())}function ni(n,r){n&1&&(l(0,"mat-error"),m(1,"NIK must be at least 16 characters."),s())}function ii(n,r){n&1&&(l(0,"mat-error"),m(1,"NIK format is invalid."),s())}function ri(n,r){n&1&&(l(0,"mat-error"),m(1,"Gender is required."),s())}function oi(n,r){n&1&&(l(0,"mat-error"),m(1,"Birth Date is required."),s())}function si(n,r){n&1&&(l(0,"mat-error"),m(1,"Phone is required."),s())}var dt=class n{form;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-step-personal"]],inputs:{form:"form"},decls:42,vars:13,consts:[["picker",""],[1,"step-personal-form",3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","firstName","placeholder","Enter your first name"],["matInput","","formControlName","lastName","placeholder","Enter your last name"],["matInput","","formControlName","nik","placeholder","Enter 16 digit NIK"],["formControlName","gender"],["value","male"],["value","female"],["matInput","","formControlName","birthDate","placeholder","Choose a date",3,"matDatepicker"],["matIconSuffix","",3,"for"],["matInput","","formControlName","phone","placeholder","Enter phone number"]],template:function(e,t){if(e&1&&(l(0,"form",1)(1,"mat-form-field",2)(2,"mat-label"),m(3,"First Name"),s(),_(4,"input",3),p(5,Xn,2,0,"mat-error"),p(6,Jn,2,0,"mat-error"),s(),l(7,"mat-form-field",2)(8,"mat-label"),m(9,"Last Name"),s(),_(10,"input",4),p(11,ei,2,0,"mat-error"),p(12,ti,2,0,"mat-error"),s(),l(13,"mat-form-field",2)(14,"mat-label"),m(15,"NIK"),s(),_(16,"input",5),p(17,ai,2,0,"mat-error"),p(18,ni,2,0,"mat-error"),p(19,ii,2,0,"mat-error"),s(),l(20,"mat-form-field",2)(21,"mat-label"),m(22,"Gender"),s(),l(23,"mat-select",6)(24,"mat-option",7),m(25,"Male"),s(),l(26,"mat-option",8),m(27,"Female"),s()(),p(28,ri,2,0,"mat-error"),s(),l(29,"mat-form-field",2)(30,"mat-label"),m(31,"Birth Date"),s(),_(32,"input",9)(33,"mat-datepicker-toggle",10)(34,"mat-datepicker",null,0),p(36,oi,2,0,"mat-error"),s(),l(37,"mat-form-field",2)(38,"mat-label"),m(39,"Phone"),s(),_(40,"input",11),p(41,si,2,0,"mat-error"),s()()),e&2){let a,i,o,b,Q,U,$,_e,Z,Wt,jt=Te(35);h("formGroup",t.form),d(5),u((a=t.form.get("firstName"))!=null&&a.hasError("required")?5:-1),d(),u((i=t.form.get("firstName"))!=null&&i.hasError("whitespaceOnly")?6:-1),d(5),u((o=t.form.get("lastName"))!=null&&o.hasError("required")?11:-1),d(),u((b=t.form.get("lastName"))!=null&&b.hasError("whitespaceOnly")?12:-1),d(5),u((Q=t.form.get("nik"))!=null&&Q.hasError("required")?17:-1),d(),u((U=t.form.get("nik"))!=null&&U.hasError("minlength")?18:-1),d(),u(($=t.form.get("nik"))!=null&&$.hasError("invalidNik")?19:-1),d(9),u((_e=t.form.get("gender"))!=null&&_e.hasError("required")?28:-1),d(4),h("matDatepicker",jt),d(),h("for",jt),d(3),u((Z=t.form.get("birthDate"))!=null&&Z.hasError("required")?36:-1),d(5),u((Wt=t.form.get("phone"))!=null&&Wt.hasError("required")?41:-1)}},dependencies:[oe,je,ze,He,We,De,qe,Je,Xe,Ue,$e,Ze,se,et,La,Na,Ra,sn,on,st,Yt,dn],styles:[".step-personal-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem;width:100%;margin:0 auto}.step-personal-form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:100%;margin-bottom:.5rem}.step-personal-form[_ngcontent-%COMP%]   .full-width.mat-form-field-focused[_ngcontent-%COMP%]     .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading, .step-personal-form[_ngcontent-%COMP%]   .full-width.mat-form-field-focused[_ngcontent-%COMP%]     .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch, .step-personal-form[_ngcontent-%COMP%]   .full-width.mat-form-field-focused[_ngcontent-%COMP%]     .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#0056b3!important;border-width:2px!important}.step-personal-form[_ngcontent-%COMP%]   .full-width.mat-form-field-focused[_ngcontent-%COMP%]     .mdc-floating-label{color:#0056b3!important}.step-personal-form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]     .mat-datepicker-toggle{color:#1e293b8a}.step-personal-form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]     .mat-datepicker-toggle.mat-datepicker-toggle-active{color:#0056b3!important}@media(min-width:600px){.step-personal-form[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;column-gap:1.25rem;row-gap:.25rem}.step-personal-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]:nth-child(3), .step-personal-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]:nth-child(6){grid-column:span 2}}  .mat-mdc-form-field-subscript-wrapper{margin-bottom:.25rem}"]})};var di=["determinateSpinner"];function li(n,r){if(n&1&&(j(),l(0,"svg",11),_(1,"circle",12),s()),n&2){let e=f();y("viewBox",e._viewBox()),d(),K("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),y("r",e._circleRadius())}}var ci=new W("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:ln})}),ln=100,mi=10,cn=(()=>{class n{_elementRef=c(J);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=c(ci),t=wa(),a=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=a.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&a.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=ln;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-mi)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,a){if(t&1&&L(di,5),t&2){let i;I(i=P())&&(a._determinateCircle=i.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,a){t&2&&(y("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",a.mode==="determinate"?a.value:null)("mode",a.mode),ne("mat-"+a.color),K("width",a.diameter,"px")("height",a.diameter,"px")("--mat-progress-spinner-size",a.diameter+"px")("--mat-progress-spinner-active-indicator-width",a.diameter+"px"),k("_mat-animation-noopable",a._noopAnimations)("mdc-circular-progress--indeterminate",a.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",Be],diameter:[2,"diameter","diameter",Be],strokeWidth:[2,"strokeWidth","strokeWidth",Be]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,a){if(t&1&&(ve(0,li,2,8,"ng-template",null,0,oa),l(2,"div",2,1),j(),l(4,"svg",3),_(5,"circle",4),s()(),fe(),l(6,"div",5)(7,"div",6)(8,"div",7),Fe(9,8),s(),l(10,"div",9),Fe(11,8),s(),l(12,"div",10),Fe(13,8),s()()()),t&2){let i=Te(1);d(4),y("viewBox",a._viewBox()),d(),K("stroke-dasharray",a._strokeCircumference(),"px")("stroke-dashoffset",a._strokeDashOffset(),"px")("stroke-width",a._circleStrokeWidth(),"%"),y("r",a._circleRadius()),d(4),h("ngTemplateOutlet",i),d(2),h("ngTemplateOutlet",i),d(2),h("ngTemplateOutlet",i)}},dependencies:[la],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var mn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=T({imports:[Ge]})}return n})();function ui(n,r){n&1&&_(0,"mat-spinner",3)}function hi(n,r){n&1&&(l(0,"mat-error"),m(1,"Username is required."),s())}function _i(n,r){n&1&&(l(0,"mat-error"),m(1,"Username is already taken."),s())}function gi(n,r){n&1&&(l(0,"mat-error"),m(1,"Email is required."),s())}function fi(n,r){n&1&&(l(0,"mat-error"),m(1,"Invalid email format."),s())}function bi(n,r){n&1&&(l(0,"mat-error"),m(1,"Password is required."),s())}function vi(n,r){n&1&&(l(0,"mat-error"),m(1,"Password must be at least 8 characters long."),s())}function Di(n,r){n&1&&(l(0,"mat-error"),m(1,"Please confirm your password."),s())}function yi(n,r){n&1&&(l(0,"mat-error"),m(1,"Passwords do not match."),s())}function Ci(n,r){n&1&&(l(0,"mat-error",9),m(1," You must agree to the terms to proceed. "),s())}var lt=class n{form;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-step-account"]],inputs:{form:"form"},decls:30,vars:11,consts:[[1,"step-account-form",3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","username","placeholder","Choose a username"],["matSuffix","","diameter","20"],["matInput","","type","email","formControlName","email","placeholder","Enter your email"],["matInput","","type","password","formControlName","password","placeholder","Create a password"],["matInput","","type","password","formControlName","confirmPassword","placeholder","Confirm your password"],[1,"terms-container"],["formControlName","agreeTerms"],[1,"error-text",2,"font-size","12px","margin-top","4px","display","block"]],template:function(e,t){if(e&1&&(l(0,"form",0)(1,"mat-form-field",1)(2,"mat-label"),m(3,"Username"),s(),_(4,"input",2),p(5,ui,1,0,"mat-spinner",3),p(6,hi,2,0,"mat-error"),p(7,_i,2,0,"mat-error"),s(),l(8,"mat-form-field",1)(9,"mat-label"),m(10,"Email"),s(),_(11,"input",4),p(12,gi,2,0,"mat-error"),p(13,fi,2,0,"mat-error"),s(),l(14,"mat-form-field",1)(15,"mat-label"),m(16,"Password"),s(),_(17,"input",5),p(18,bi,2,0,"mat-error"),p(19,vi,2,0,"mat-error"),s(),l(20,"mat-form-field",1)(21,"mat-label"),m(22,"Confirm Password"),s(),_(23,"input",6),p(24,Di,2,0,"mat-error"),p(25,yi,2,0,"mat-error"),s(),l(26,"div",7)(27,"mat-checkbox",8),m(28," I agree to the Terms and Conditions "),s(),p(29,Ci,2,0,"mat-error",9),s()()),e&2){let a,i,o,b,Q,U,$,_e,Z;h("formGroup",t.form),d(5),u((a=t.form.get("username"))!=null&&a.pending?5:-1),d(),u((i=t.form.get("username"))!=null&&i.hasError("required")?6:-1),d(),u((o=t.form.get("username"))!=null&&o.hasError("usernameTaken")?7:-1),d(5),u((b=t.form.get("email"))!=null&&b.hasError("required")?12:-1),d(),u((Q=t.form.get("email"))!=null&&Q.hasError("email")?13:-1),d(5),u((U=t.form.get("password"))!=null&&U.hasError("required")?18:-1),d(),u(($=t.form.get("password"))!=null&&$.hasError("minlength")?19:-1),d(5),u((_e=t.form.get("confirmPassword"))!=null&&_e.hasError("required")?24:-1),d(),u(t.form.hasError("passwordMismatch")?25:-1),d(4),u((Z=t.form.get("agreeTerms"))!=null&&Z.touched&&((Z=t.form.get("agreeTerms"))!=null&&Z.invalid)?29:-1)}},dependencies:[oe,je,ze,He,We,De,qe,Je,Xe,Ue,$e,Ze,se,et,mn,cn,Ba,Ya],styles:[".step-account-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem;width:100%;margin:0 auto}.step-account-form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:100%;margin-bottom:.5rem}.step-account-form[_ngcontent-%COMP%]   .full-width.mat-form-field-focused[_ngcontent-%COMP%]     .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading, .step-account-form[_ngcontent-%COMP%]   .full-width.mat-form-field-focused[_ngcontent-%COMP%]     .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch, .step-account-form[_ngcontent-%COMP%]   .full-width.mat-form-field-focused[_ngcontent-%COMP%]     .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#0056b3!important;border-width:2px!important}.step-account-form[_ngcontent-%COMP%]   .full-width.mat-form-field-focused[_ngcontent-%COMP%]     .mdc-floating-label{color:#0056b3!important}.step-account-form[_ngcontent-%COMP%]   mat-spinner[matSuffix][_ngcontent-%COMP%]{display:inline-block;margin-right:8px}.step-account-form[_ngcontent-%COMP%]   mat-spinner[matSuffix][_ngcontent-%COMP%]     circle{stroke:#0056b3!important}.step-account-form[_ngcontent-%COMP%]   .terms-container[_ngcontent-%COMP%]{margin-top:1rem;padding:1rem;background-color:#f0f7ff;border-radius:8px;border:1px solid rgba(0,86,179,.15);display:flex;flex-direction:column;gap:4px}.step-account-form[_ngcontent-%COMP%]   .terms-container[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{color:#1e293b;font-size:.95rem;font-weight:500}.step-account-form[_ngcontent-%COMP%]   .terms-container[_ngcontent-%COMP%]   mat-checkbox.mat-mdc-checkbox-checked[_ngcontent-%COMP%]     .mdc-checkbox__background{background-color:#0056b3!important;border-color:#0056b3!important}.step-account-form[_ngcontent-%COMP%]   .terms-container[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]     .mat-mdc-checkbox-ripple .mdc-ripple-surface:before{background-color:#0056b31a!important}.step-account-form[_ngcontent-%COMP%]   .terms-container[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%]{color:#f44336;font-weight:500;font-size:.8rem!important;padding-left:2.3rem;margin-top:2px;display:block}  .mat-mdc-form-field-subscript-wrapper{margin-bottom:.25rem}"]})};var ct=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-step-review"]],decls:2,vars:0,template:function(e,t){e&1&&(E(0,"p"),m(1,"step-review works!"),V())},encapsulation:2})};function pn(){return n=>{let r=n.value||"";if(!r)return null;let e={};return/[A-Z]/.test(r)||(e.noUppercase=!0),/[a-z]/.test(r)||(e.noLowercase=!0),/[0-9]/.test(r)||(e.noNumber=!0),/[!@#$%^&*]/.test(r)||(e.noSymbol=!0),r.length<8&&(e.tooShort=!0),Object.keys(e).length?e:null}}function un(n="password",r="confirmPassword"){return e=>{let t=e.get(n)?.value,a=e.get(r)?.value;return!t||!a||t===a?null:{passwordMismatch:!0}}}function hn(){return n=>{let r=(n.value||"").replace(/\s/g,"");return r?/^\d{16}$/.test(r)?null:{invalidNik:!0}:null}}function mt(){return n=>n.value&&n.value.trim().length===0?{whitespaceOnly:!0}:null}var pt=class n{http=c(ma);taken=["admin","user","test","root","politeknik"];checkAvailability(){return r=>!r.value||r.value.length<3?z(null):Gt(600).pipe(Zt(()=>{let e=this.taken.includes(r.value.toLowerCase());return z(e)}),Kt(e=>e?{usernameTaken:!0}:null),Ut(()=>z(null)))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=H({token:n,factory:n.\u0275fac,providedIn:"root"})};function wi(n,r){n&1&&m(0," \u2713 ")}function Mi(n,r){n&1&&m(0," 1 ")}function ki(n,r){n&1&&m(0," \u2713 ")}function Ai(n,r){n&1&&m(0," 2 ")}function Si(n,r){if(n&1&&_(0,"app-step-personal",9),n&2){let e=f();h("form",e.personalForm)}}function xi(n,r){if(n&1&&_(0,"app-step-account",9),n&2){let e=f();h("form",e.accountForm)}}function Ei(n,r){n&1&&_(0,"app-step-review")}function Vi(n,r){if(n&1){let e=q();l(0,"button",14),C("click",function(){w(e);let a=f();return M(a.nextStep())}),m(1,"Next"),s()}}function Ii(n,r){n&1&&m(0," Memproses... ")}function Pi(n,r){n&1&&m(0," Submit Registrasi ")}function Oi(n,r){if(n&1){let e=q();l(0,"button",15),C("click",function(){w(e);let a=f();return M(a.onSubmit())}),p(1,Ii,1,0)(2,Pi,1,0),s()}if(n&2){let e=f();h("disabled",e.isSubmitting),d(),u(e.isSubmitting?1:2)}}var he=class n{currentStep=0;isSubmitting=!1;personalForm;accountForm;fb=c(ha);router=c(_a);snackBar=c(za);usernameAsyncValidator=c(pt);ngOnInit(){this.personalForm=this.fb.group({firstName:["",[S.required,mt()]],lastName:["",[S.required,mt()]],nik:["",[S.required,hn()]],gender:["",S.required],birthDate:["",S.required],phone:["",S.required]}),this.accountForm=this.fb.group({username:["",[S.required,mt()],[this.usernameAsyncValidator.checkAvailability()]],email:["",[S.required,S.email]],password:["",[S.required,pn()]],confirmPassword:["",S.required],agreeTerms:[!1,S.requiredTrue]},{validators:un("password","confirmPassword")})}get fName(){return this.personalForm.get("firstName")}get fNik(){return this.personalForm.get("nik")}get fPhone(){return this.personalForm.get("phone")}get aUser(){return this.accountForm.get("username")}get aEmail(){return this.accountForm.get("email")}get aPwd(){return this.accountForm.get("password")}get aConfirm(){return this.accountForm.get("confirmPassword")}nextStep(){if(this.currentStep===0){if(this.personalForm.invalid){this.personalForm.markAllAsTouched();return}}else if(this.currentStep===1&&this.accountForm.invalid){this.accountForm.markAllAsTouched();return}this.currentStep++}prevStep(){this.currentStep>0&&this.currentStep--}get allValues(){return ge(ge({},this.personalForm.value),this.accountForm.value)}onSubmit(){if(this.personalForm.invalid||this.accountForm.invalid){this.personalForm.markAllAsTouched(),this.accountForm.markAllAsTouched();return}this.isSubmitting=!0,setTimeout(()=>{this.isSubmitting=!1,this.snackBar.open("Registrasi Berhasil!","Tutup",{duration:3e3}),this.router.navigate(["/login"])},2e3)}hasUnsavedChanges(){return this.personalForm.dirty||this.accountForm.dirty}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-register-wizard"]],decls:36,vars:20,consts:[[1,"wizard-container"],[1,"wizard-header"],[1,"step-indicators-container"],[1,"step-badge"],[1,"badge-number"],[1,"badge-label"],[1,"step-connector"],["mode","determinate",3,"value"],[1,"step-content"],[3,"form"],[1,"wizard-actions"],["mat-button","",3,"click","disabled"],["mat-raised-button","","color","primary"],["mat-raised-button","","color","primary",3,"disabled"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(e,t){if(e&1&&(l(0,"div",0)(1,"div",1)(2,"h2"),m(3,"Praktikum 1: Form Registrasi Multi-Step"),s(),l(4,"p"),m(5,"Desain dan Pemrograman Web \u2014 Politeknik Negeri Malang"),s()(),l(6,"div",2)(7,"div",3)(8,"span",4),p(9,wi,1,0)(10,Mi,1,0),s(),l(11,"span",5),m(12,"Data Pribadi"),s()(),_(13,"div",6),l(14,"div",3)(15,"span",4),p(16,ki,1,0)(17,Ai,1,0),s(),l(18,"span",5),m(19,"Akun"),s()(),_(20,"div",6),l(21,"div",3)(22,"span",4),m(23,"3"),s(),l(24,"span",5),m(25,"Review"),s()()(),_(26,"mat-progress-bar",7),l(27,"div",8),p(28,Si,1,1,"app-step-personal",9)(29,xi,1,1,"app-step-account",9)(30,Ei,1,0,"app-step-review"),s(),l(31,"div",10)(32,"button",11),C("click",function(){return t.prevStep()}),m(33,"Back"),s(),p(34,Vi,2,0,"button",12)(35,Oi,3,2,"button",13),s()()),e&2){let a;d(7),k("active",t.currentStep===0)("completed",t.currentStep>0),d(2),u(t.currentStep>0?9:10),d(4),k("active",t.currentStep>0),d(),k("active",t.currentStep===1)("completed",t.currentStep>1),d(2),u(t.currentStep>1?16:17),d(4),k("active",t.currentStep>1),d(),k("active",t.currentStep===2),d(5),h("value",t.currentStep/2*100),d(2),u((a=t.currentStep)===0?28:a===1?29:a===2?30:-1),d(4),h("disabled",t.currentStep===0),d(2),u(t.currentStep<2?34:35)}},dependencies:[oe,Ma,se,tt,we,Wa,Ha,dt,lt,ct],styles:[".wizard-container[_ngcontent-%COMP%]{max-width:680px;margin:3rem auto;background-color:#fff;border-radius:14px;box-shadow:0 20px 25px -5px #0000000d,0 10px 10px -5px #00000005;border:1px solid rgba(203,213,225,.7);overflow:hidden;display:flex;flex-direction:column;transition:all .4s cubic-bezier(.4,0,.2,1)}.wizard-container[_ngcontent-%COMP%]   .wizard-header[_ngcontent-%COMP%]{padding:1.75rem 2rem 1.25rem;background:linear-gradient(135deg,#fff,#f0f7ff);border-bottom:1px solid rgba(203,213,225,.4);text-align:center}.wizard-container[_ngcontent-%COMP%]   .wizard-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#0056b3;margin:0;font-size:1.4rem;font-weight:700;letter-spacing:-.5px}.wizard-container[_ngcontent-%COMP%]   .wizard-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 0;color:#64748b;font-size:.85rem;font-weight:500}.wizard-container[_ngcontent-%COMP%]   .step-indicators-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:1.25rem 2.5rem;background-color:#fff;border-bottom:1px solid rgba(203,213,225,.3)}.wizard-container[_ngcontent-%COMP%]   .step-indicators-container[_ngcontent-%COMP%]   .step-badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.wizard-container[_ngcontent-%COMP%]   .step-indicators-container[_ngcontent-%COMP%]   .step-badge[_ngcontent-%COMP%]   .badge-number[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:50%;border:2px solid #e2e8f0;background-color:#fff;color:#94a3b8;font-weight:600;font-size:.85rem;transition:all .3s ease}.wizard-container[_ngcontent-%COMP%]   .step-indicators-container[_ngcontent-%COMP%]   .step-badge[_ngcontent-%COMP%]   .badge-label[_ngcontent-%COMP%]{font-size:.9rem;font-weight:500;color:#94a3b8;transition:all .3s ease}.wizard-container[_ngcontent-%COMP%]   .step-indicators-container[_ngcontent-%COMP%]   .step-badge.active[_ngcontent-%COMP%]   .badge-number[_ngcontent-%COMP%]{border-color:#0056b3;background-color:#0056b3;color:#fff;box-shadow:0 0 0 4px #0056b32e}.wizard-container[_ngcontent-%COMP%]   .step-indicators-container[_ngcontent-%COMP%]   .step-badge.active[_ngcontent-%COMP%]   .badge-label[_ngcontent-%COMP%]{color:#0056b3;font-weight:600}.wizard-container[_ngcontent-%COMP%]   .step-indicators-container[_ngcontent-%COMP%]   .step-badge.completed[_ngcontent-%COMP%]   .badge-number[_ngcontent-%COMP%]{border-color:#10b981;background-color:#10b981;color:#fff}.wizard-container[_ngcontent-%COMP%]   .step-indicators-container[_ngcontent-%COMP%]   .step-badge.completed[_ngcontent-%COMP%]   .badge-label[_ngcontent-%COMP%]{color:#1e293b;font-weight:500}.wizard-container[_ngcontent-%COMP%]   .step-indicators-container[_ngcontent-%COMP%]   .step-connector[_ngcontent-%COMP%]{flex:1;height:2px;background-color:#e2e8f0;margin:0 1rem;transition:all .4s ease}.wizard-container[_ngcontent-%COMP%]   .step-indicators-container[_ngcontent-%COMP%]   .step-connector.active[_ngcontent-%COMP%]{background-color:#0056b3}.wizard-container[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{height:5px}.wizard-container[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]     .mdc-linear-progress__bar-inner{border-color:#0056b3!important}.wizard-container[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]     .mdc-linear-progress__buffer-bar{background-color:#f0f7ff!important}.wizard-container[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]{padding:2.5rem 2rem;min-height:320px;color:#1e293b}.wizard-container[_ngcontent-%COMP%]   .wizard-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:1.25rem 2rem;background-color:#f0f7ff;border-top:1px solid rgba(203,213,225,.4)}.wizard-container[_ngcontent-%COMP%]   .wizard-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:.6rem 2rem;font-weight:600;border-radius:8px;letter-spacing:.3px;transition:all .2s ease-in-out}.wizard-container[_ngcontent-%COMP%]   .wizard-actions[_ngcontent-%COMP%]   button[mat-button][_ngcontent-%COMP%]{color:#0056b3}.wizard-container[_ngcontent-%COMP%]   .wizard-actions[_ngcontent-%COMP%]   button[mat-button][_ngcontent-%COMP%]:hover:not([disabled]){background-color:#0056b314}.wizard-container[_ngcontent-%COMP%]   .wizard-actions[_ngcontent-%COMP%]   button[mat-button][disabled][_ngcontent-%COMP%]{color:#cbd5e1}.wizard-container[_ngcontent-%COMP%]   .wizard-actions[_ngcontent-%COMP%]   button[mat-raised-button][_ngcontent-%COMP%]{background-color:#0056b3!important;color:#fff!important}.wizard-container[_ngcontent-%COMP%]   .wizard-actions[_ngcontent-%COMP%]   button[mat-raised-button][_ngcontent-%COMP%]:hover:not([disabled]){background-color:#004085!important;box-shadow:0 4px 12px #0056b333}.wizard-container[_ngcontent-%COMP%]   .wizard-actions[_ngcontent-%COMP%]   button[mat-raised-button][disabled][_ngcontent-%COMP%]{background-color:#e2e8f0!important;color:#94a3b8!important;box-shadow:none!important}@media(max-width:580px){.wizard-container[_ngcontent-%COMP%]{margin:1rem;border-radius:8px}.wizard-container[_ngcontent-%COMP%]   .wizard-header[_ngcontent-%COMP%]{padding:1.25rem 1rem}.wizard-container[_ngcontent-%COMP%]   .wizard-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.2rem}.wizard-container[_ngcontent-%COMP%]   .step-indicators-container[_ngcontent-%COMP%]{padding:1rem}.wizard-container[_ngcontent-%COMP%]   .step-indicators-container[_ngcontent-%COMP%]   .badge-label[_ngcontent-%COMP%]{display:none}.wizard-container[_ngcontent-%COMP%]   .step-indicators-container[_ngcontent-%COMP%]   .step-connector[_ngcontent-%COMP%]{margin:0 .5rem}.wizard-container[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]{padding:1.5rem 1rem}.wizard-container[_ngcontent-%COMP%]   .wizard-actions[_ngcontent-%COMP%]{padding:1rem}}"]})};var Fi=[{path:"",component:he}],ut=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=R({type:n});static \u0275inj=T({imports:[Ct.forChild(Fi),Ct]})};var _n=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=R({type:n});static \u0275inj=T({imports:[ca,ut,he]})};export{_n as RegisterModule};
