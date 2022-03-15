import{S as z,i as J,s as K,e as E,k as O,w as q,c as w,a as y,d as $,m as S,x as G,I as M,b as u,g as U,G as m,y as A,q as j,o as D,B,t as L,h as Q,j as W,p as X,N as Y,O as Z,n as ee}from"../../chunks/vendor-477b6a38.js";import{p as te}from"../../chunks/stores-ac614c1c.js";import{T as P}from"../../chunks/Translate-60b4bbcd.js";import{S as se}from"../../chunks/SEO-889d28d2.js";import"../../chunks/index-050b6b02.js";import"../../chunks/util-fe57f684.js";function N(c,s,o){const a=c.slice();return a[2]=s[o].slug,a[3]=s[o].meta,a}function R(c){let s,o,a,i,f,b,d,g,h,I,x,p,k,v,_;return h=new P({props:{text:c[3].title}}),p=new P({props:{text:c[3].desc||""}}),{c(){s=E("a"),o=E("figure"),a=E("img"),b=O(),d=E("div"),g=E("h2"),q(h.$$.fragment),I=O(),x=E("p"),q(p.$$.fragment),k=O(),this.h()},l(n){s=w(n,"A",{class:!0,href:!0});var t=y(s);o=w(t,"FIGURE",{class:!0});var C=y(o);a=w(C,"IMG",{src:!0,class:!0,alt:!0}),C.forEach($),b=S(t),d=w(t,"DIV",{class:!0});var e=y(d);g=w(e,"H2",{class:!0});var l=y(g);G(h.$$.fragment,l),l.forEach($),I=S(e),x=w(e,"P",{class:!0});var r=y(x);G(p.$$.fragment,r),r.forEach($),e.forEach($),k=S(t),t.forEach($),this.h()},h(){M(a.src,i=`/images/components/${c[2]}.jpg`)||u(a,"src",i),u(a,"class","border-base-content bg-base-300 rounded-lg border border-opacity-5"),u(a,"alt",f=c[3].title),u(o,"class","px-4 pt-4"),u(g,"class","card-title"),u(x,"class","text-xs opacity-60"),u(d,"class","card-body"),u(s,"class","card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1"),u(s,"href",v=`${c[1].url.pathname.replace(/\/$/,"")}/${c[2]}`)},m(n,t){U(n,s,t),m(s,o),m(o,a),m(s,b),m(s,d),m(d,g),A(h,g,null),m(d,I),m(d,x),A(p,x,null),m(s,k),_=!0},p(n,t){(!_||t&1&&!M(a.src,i=`/images/components/${n[2]}.jpg`))&&u(a,"src",i),(!_||t&1&&f!==(f=n[3].title))&&u(a,"alt",f);const C={};t&1&&(C.text=n[3].title),h.$set(C);const e={};t&1&&(e.text=n[3].desc||""),p.$set(e),(!_||t&3&&v!==(v=`${n[1].url.pathname.replace(/\/$/,"")}/${n[2]}`))&&u(s,"href",v)},i(n){_||(j(h.$$.fragment,n),j(p.$$.fragment,n),_=!0)},o(n){D(h.$$.fragment,n),D(p.$$.fragment,n),_=!1},d(n){n&&$(s),B(h),B(p)}}}function ae(c){let s,o,a,i,f,b,d,g,h=Object.keys(c[0]).length+"",I,x,p,k,v,_;s=new se({props:{title:"Components",desc:"Components"}}),b=new P({props:{text:"All daisyUI components"}}),p=new P({props:{text:"components"}});let n=c[0],t=[];for(let e=0;e<n.length;e+=1)t[e]=R(N(c,n,e));const C=e=>D(t[e],1,1,()=>{t[e]=null});return{c(){q(s.$$.fragment),o=O(),a=E("div"),i=E("div"),f=E("h1"),q(b.$$.fragment),d=O(),g=E("p"),I=L(h),x=O(),q(p.$$.fragment),k=O(),v=E("div");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){G(s.$$.fragment,e),o=S(e),a=w(e,"DIV",{class:!0});var l=y(a);i=w(l,"DIV",{class:!0});var r=y(i);f=w(r,"H1",{});var V=y(f);G(b.$$.fragment,V),V.forEach($),d=S(r),g=w(r,"P",{});var H=y(g);I=Q(H,h),x=S(H),G(p.$$.fragment,H),H.forEach($),r.forEach($),k=S(l),v=w(l,"DIV",{class:!0});var F=y(v);for(let T=0;T<t.length;T+=1)t[T].l(F);F.forEach($),l.forEach($),this.h()},h(){u(i,"class","prose max-w-4xl flex-grow"),u(v,"class","not-prose grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"),u(a,"class","flex flex-col gap-6")},m(e,l){A(s,e,l),U(e,o,l),U(e,a,l),m(a,i),m(i,f),A(b,f,null),m(i,d),m(i,g),m(g,I),m(g,x),A(p,g,null),m(a,k),m(a,v);for(let r=0;r<t.length;r+=1)t[r].m(v,null);_=!0},p(e,[l]){if((!_||l&1)&&h!==(h=Object.keys(e[0]).length+"")&&W(I,h),l&3){n=e[0];let r;for(r=0;r<n.length;r+=1){const V=N(e,n,r);t[r]?(t[r].p(V,l),j(t[r],1)):(t[r]=R(V),t[r].c(),j(t[r],1),t[r].m(v,null))}for(ee(),r=n.length;r<t.length;r+=1)C(r);X()}},i(e){if(!_){j(s.$$.fragment,e),j(b.$$.fragment,e),j(p.$$.fragment,e);for(let l=0;l<n.length;l+=1)j(t[l]);_=!0}},o(e){D(s.$$.fragment,e),D(b.$$.fragment,e),D(p.$$.fragment,e),t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)D(t[l]);_=!1},d(e){B(s,e),e&&$(o),e&&$(a),B(b),B(p),Y(t,e)}}}async function pe({fetch:c}){return{props:{posts:await c("/api/components.json").then(o=>o.json())}}}function re(c,s,o){let a;Z(c,te,f=>o(1,a=f));let{posts:i}=s;return i.forEach(f=>{console.log(f.meta.desc)}),c.$$set=f=>{"posts"in f&&o(0,i=f.posts)},[i,a]}class me extends z{constructor(s){super();J(this,s,re,ae,K,{posts:0})}}export{me as default,pe as load};
