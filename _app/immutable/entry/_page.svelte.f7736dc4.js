import{S as B,i as T,s as V,k as g,a as S,q as I,l as v,m as $,c as P,r as N,h as f,C as O,n as m,b as y,D as d,u as q,E,K as M,L as x,M as W,N as X,O as Y,y as G,z as K,A as R,d as D,f as H,g as w,B as J,v as Q,P as Z}from"../chunks/index.615f2cfc.js";import{b as U}from"../chunks/paths.8e40ad16.js";function ee(o){let e,r,l,t,n,a,i=o[0].title+"",s,_,u,c=o[0].type+"",h,b;return{c(){e=g("a"),r=g("div"),l=g("img"),n=S(),a=g("p"),s=I(i),_=S(),u=g("p"),h=I(c),this.h()},l(p){e=v(p,"A",{href:!0});var k=$(e);r=v(k,"DIV",{class:!0});var C=$(r);l=v(C,"IMG",{src:!0,alt:!0,class:!0}),n=P(C),a=v(C,"P",{});var F=$(a);s=N(F,i),F.forEach(f),_=P(C),u=v(C,"P",{});var L=$(u);h=N(L,c),L.forEach(f),C.forEach(f),k.forEach(f),this.h()},h(){O(l.src,t=o[0].image)||m(l,"src",t),m(l,"alt","poster"),m(l,"class","w-full h-full object-cover"),m(r,"class","w-[200px] h-[270px] my-1"),m(e,"href",b=`${U}/details/${o[0]._id}`)},m(p,k){y(p,e,k),d(e,r),d(r,l),d(r,n),d(r,a),d(a,s),d(r,_),d(r,u),d(u,h)},p(p,[k]){k&1&&!O(l.src,t=p[0].image)&&m(l,"src",t),k&1&&i!==(i=p[0].title+"")&&q(s,i),k&1&&c!==(c=p[0].type+"")&&q(h,c),k&1&&b!==(b=`${U}/details/${p[0]._id}`)&&m(e,"href",b)},i:E,o:E,d(p){p&&f(e)}}}function te(o,e,r){let{anime:l}=e;return o.$$set=t=>{"anime"in t&&r(0,l=t.anime)},[l]}class re extends B{constructor(e){super(),T(this,e,te,ee,V,{anime:0})}}function j(o){let e,r,l,t;return{c(){e=g("button"),r=I("Clear"),this.h()},l(n){e=v(n,"BUTTON",{class:!0});var a=$(e);r=N(a,"Clear"),a.forEach(f),this.h()},h(){m(e,"class","ml-[10px] w-[100px] h-[30px] border rounded bg-gray-200 border-gray-200")},m(n,a){y(n,e,a),d(e,r),l||(t=x(e,"click",o[2]),l=!0)},p:E,d(n){n&&f(e),l=!1,t()}}}function le(o){let e,r,l,t,n,a,i,s=o[0].trim().length>0,_,u,c=s&&j(o);return{c(){e=g("div"),r=g("form"),l=g("input"),t=S(),n=g("button"),a=I("Search"),i=S(),c&&c.c(),this.h()},l(h){e=v(h,"DIV",{class:!0});var b=$(e);r=v(b,"FORM",{});var p=$(r);l=v(p,"INPUT",{type:!0,name:!0,class:!0,placeholder:!0}),t=P(p),n=v(p,"BUTTON",{class:!0,type:!0});var k=$(n);a=N(k,"Search"),k.forEach(f),i=P(p),c&&c.l(p),p.forEach(f),b.forEach(f),this.h()},h(){m(l,"type","text"),m(l,"name","input"),m(l,"class","w-[200px] h-[30px] border border-black rounded"),m(l,"placeholder","Search"),m(n,"class","ml-[10px] w-[100px] h-[30px] border border-black rounded bg-black text-white cursor-pointer"),m(n,"type","submit"),m(e,"class","flex items-center mt-2 ml-4")},m(h,b){y(h,e,b),d(e,r),d(r,l),M(l,o[0]),d(r,t),d(r,n),d(n,a),d(r,i),c&&c.m(r,null),_||(u=[x(l,"input",o[3]),x(r,"submit",W(o[1]))],_=!0)},p(h,[b]){b&1&&l.value!==h[0]&&M(l,h[0]),b&1&&(s=h[0].trim().length>0),s?c?c.p(h,b):(c=j(h),c.c(),c.m(r,null)):c&&(c.d(1),c=null)},i:E,o:E,d(h){h&&f(e),c&&c.d(),_=!1,X(u)}}}function ae(o,e,r){const l=Y();let t="";const n=()=>{l("search-select",t)},a=()=>{r(0,t=""),l("clear-select")};function i(){t=this.value,r(0,t)}return[t,n,a,i]}class ne extends B{constructor(e){super(),T(this,e,ae,le,V,{})}}function A(o,e,r){const l=o.slice();return l[6]=e[r],l[8]=r,l}function se(o){let e,r;return{c(){e=g("p"),r=I("Not Found")},l(l){e=v(l,"P",{});var t=$(e);r=N(t,"Not Found"),t.forEach(f)},m(l,t){y(l,e,t),d(e,r)},p:E,i:E,o:E,d(l){l&&f(e)}}}function oe(o){let e,r,l=o[0],t=[];for(let a=0;a<l.length;a+=1)t[a]=z(A(o,l,a));const n=a=>D(t[a],1,1,()=>{t[a]=null});return{c(){e=g("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=v(a,"DIV",{class:!0});var i=$(e);for(let s=0;s<t.length;s+=1)t[s].l(i);i.forEach(f),this.h()},h(){m(e,"class","my-6 flex flex-wrap justify-around py-1 flex-row")},m(a,i){y(a,e,i);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null);r=!0},p(a,i){if(i&1){l=a[0];let s;for(s=0;s<l.length;s+=1){const _=A(a,l,s);t[s]?(t[s].p(_,i),w(t[s],1)):(t[s]=z(_),t[s].c(),w(t[s],1),t[s].m(e,null))}for(Q(),s=l.length;s<t.length;s+=1)n(s);H()}},i(a){if(!r){for(let i=0;i<l.length;i+=1)w(t[i]);r=!0}},o(a){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)D(t[i]);r=!1},d(a){a&&f(e),Z(t,a)}}}function ie(o){let e,r;return{c(){e=g("p"),r=I("En cours de chargement...")},l(l){e=v(l,"P",{});var t=$(e);r=N(t,"En cours de chargement..."),t.forEach(f)},m(l,t){y(l,e,t),d(e,r)},p:E,i:E,o:E,d(l){l&&f(e)}}}function z(o){let e,r,l,t;return r=new re({props:{anime:o[6]}}),{c(){e=g("div"),G(r.$$.fragment),l=S(),this.h()},l(n){e=v(n,"DIV",{class:!0,key:!0});var a=$(e);K(r.$$.fragment,a),l=P(a),a.forEach(f),this.h()},h(){m(e,"class","my-10"),m(e,"key",o[8])},m(n,a){y(n,e,a),R(r,e,null),d(e,l),t=!0},p(n,a){const i={};a&1&&(i.anime=n[6]),r.$set(i)},i(n){t||(w(r.$$.fragment,n),t=!0)},o(n){D(r.$$.fragment,n),t=!1},d(n){n&&f(e),J(r)}}}function ce(o){let e,r,l,t,n,a;r=new ne({}),r.$on("clear-select",o[3]),r.$on("search-select",o[2]);const i=[ie,oe,se],s=[];function _(u,c){return u[1]?0:u[0].length>0?1:2}return t=_(o),n=s[t]=i[t](o),{c(){e=g("div"),G(r.$$.fragment),l=S(),n.c()},l(u){e=v(u,"DIV",{});var c=$(e);K(r.$$.fragment,c),l=P(c),n.l(c),c.forEach(f)},m(u,c){y(u,e,c),R(r,e,null),d(e,l),s[t].m(e,null),a=!0},p(u,[c]){let h=t;t=_(u),t===h?s[t].p(u,c):(Q(),D(s[h],1,1,()=>{s[h]=null}),H(),n=s[t],n?n.p(u,c):(n=s[t]=i[t](u),n.c()),w(n,1),n.m(e,null))},i(u){a||(w(r.$$.fragment,u),w(n),a=!0)},o(u){D(r.$$.fragment,u),D(n),a=!1},d(u){u&&f(e),J(r),s[t].d()}}}function ue(o,e,r){let{data:l}=e,t,n,a;t=l.animes,a=l.animes,n=l.loading;const i=_=>{const u=a.filter(c=>c.title.toLowerCase().includes(_.detail.toLowerCase()));r(0,t=u)},s=()=>{r(0,t=l.animes)};return o.$$set=_=>{"data"in _&&r(4,l=_.data)},[t,n,i,s,l]}class de extends B{constructor(e){super(),T(this,e,ue,ce,V,{data:4})}}export{de as default};