import{S as B,i as G,s as M,a as b,l as u,u as k,K as R,h as _,c as y,m as f,p as v,v as w,q as g,b as j,G as m,n as q,L as S,M as I}from"../chunks/index-0e2a1c76.js";function D(r,a,t){const o=r.slice();return o[1]=a[t],o}function V(r){let a,t,o,n,i,c,d;return{c(){a=u("div"),t=u("img"),n=b(),i=u("p"),c=k("read more"),d=b(),this.h()},l(s){a=f(s,"DIV",{class:!0});var e=v(a);t=f(e,"IMG",{src:!0,alt:!0,class:!0}),n=y(e),i=f(e,"P",{class:!0});var h=v(i);c=w(h,"read more"),h.forEach(_),d=y(e),e.forEach(_),this.h()},h(){I(t.src,o=r[1])||g(t,"src",o),g(t,"alt","random dog"),g(t,"class","svelte-1ji538a"),g(i,"class","readmore svelte-1ji538a"),g(a,"class","post svelte-1ji538a")},m(s,e){j(s,a,e),m(a,t),m(a,n),m(a,i),m(i,c),m(a,d)},p(s,e){e&1&&!I(t.src,o=s[1])&&g(t,"src",o)},d(s){s&&_(a)}}}function C(r){let a,t,o,n,i,c,d=r[0].message,s=[];for(let e=0;e<d.length;e+=1)s[e]=V(D(r,d,e));return{c(){a=b(),t=u("div"),o=u("h1"),n=k("Random dog images"),i=b(),c=u("div");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){R('[data-svelte="svelte-hfp9t8"]',document.head).forEach(_),a=y(e),t=f(e,"DIV",{class:!0});var l=v(t);o=f(l,"H1",{});var p=v(o);n=w(p,"Random dog images"),p.forEach(_),i=y(l),c=f(l,"DIV",{class:!0});var x=v(c);for(let E=0;E<s.length;E+=1)s[E].l(x);x.forEach(_),l.forEach(_),this.h()},h(){document.title="Blog",g(c,"class","blogposts svelte-1ji538a"),g(t,"class","container")},m(e,h){j(e,a,h),j(e,t,h),m(t,o),m(o,n),m(t,i),m(t,c);for(let l=0;l<s.length;l+=1)s[l].m(c,null)},p(e,[h]){if(h&1){d=e[0].message;let l;for(l=0;l<d.length;l+=1){const p=D(e,d,l);s[l]?s[l].p(p,h):(s[l]=V(p),s[l].c(),s[l].m(c,null))}for(;l<s.length;l+=1)s[l].d(1);s.length=d.length}},i:q,o:q,d(e){e&&_(a),e&&_(t),S(s,e)}}}const L=async({fetch:r})=>{const t=await(await r("https://dog.ceo/api/breeds/image/random/6")).json();return console.log(t),{props:{blogposts:t}}};function H(r,a,t){let{blogposts:o}=a;return r.$$set=n=>{"blogposts"in n&&t(0,o=n.blogposts)},[o]}class P extends B{constructor(a){super(),G(this,a,H,C,M,{blogposts:0})}}export{P as default,L as load};
