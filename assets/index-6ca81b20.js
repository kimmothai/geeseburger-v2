(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();var I,f,ce,C,J,ue,B,A={},se=[],be=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,z=Array.isArray;function w(_,e){for(var t in e)_[t]=e[t];return _}function fe(_){var e=_.parentNode;e&&e.removeChild(_)}function ke(_,e,t){var r,i,n,l={};for(n in e)n=="key"?r=e[n]:n=="ref"?i=e[n]:l[n]=e[n];if(arguments.length>2&&(l.children=arguments.length>3?I.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(n in _.defaultProps)l[n]===void 0&&(l[n]=_.defaultProps[n]);return D(_,l,r,i,null)}function D(_,e,t,r,i){var n={type:_,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++ce};return i==null&&f.vnode!=null&&f.vnode(n),n}function W(_){return _.children}function U(_,e){this.props=_,this.context=e}function O(_,e){if(e==null)return _.__?O(_.__,_.__.__k.indexOf(_)+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?O(_):null}function ae(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return ae(_)}}function Q(_){(!_.__d&&(_.__d=!0)&&C.push(_)&&!R.__r++||J!==f.debounceRendering)&&((J=f.debounceRendering)||ue)(R)}function R(){var _,e,t,r,i,n,l,c,s;for(C.sort(B);_=C.shift();)_.__d&&(e=C.length,r=void 0,i=void 0,n=void 0,c=(l=(t=_).__v).__e,(s=t.__P)&&(r=[],i=[],(n=w({},l)).__v=l.__v+1,K(s,l,n,t.__n,s.ownerSVGElement!==void 0,l.__h!=null?[c]:null,r,c??O(l),l.__h,i),ve(r,l,i),l.__e!=c&&ae(l)),C.length>e&&C.sort(B));R.__r=0}function pe(_,e,t,r,i,n,l,c,s,m,d){var o,h,p,u,a,x,v,y,$,P,k=0,S=r&&r.__k||se,H=S.length,E=H,b=e.length;for(t.__k=[],o=0;o<b;o++)(u=t.__k[o]=(u=e[o])==null||typeof u=="boolean"||typeof u=="function"?null:typeof u=="string"||typeof u=="number"||typeof u=="bigint"?D(null,u,null,null,u):z(u)?D(W,{children:u},null,null,null):u.__b>0?D(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):u)!=null&&(u.__=t,u.__b=t.__b+1,(y=Se(u,S,v=o+k,E))===-1?p=A:(p=S[y]||A,S[y]=void 0,E--),K(_,u,p,i,n,l,c,s,m,d),a=u.__e,(h=u.ref)&&p.ref!=h&&(p.ref&&Y(p.ref,null,u),d.push(h,u.__c||a,u)),a!=null&&(x==null&&(x=a),P=!($=p===A||p.__v===null)&&y===v,$?y==-1&&k--:y!==v&&(y===v+1?(k++,P=!0):y>v?E>b-v?(k+=y-v,P=!0):k--:k=y<v&&y==v-1?y-v:0),v=o+k,P=P||y==o&&!$,typeof u.type!="function"||y===v&&p.__k!==u.__k?typeof u.type=="function"||P?u.__d!==void 0?(s=u.__d,u.__d=void 0):s=a.nextSibling:s=he(_,a,s):s=de(u,s,_),typeof t.type=="function"&&(t.__d=s)));for(t.__e=x,o=H;o--;)S[o]!=null&&(typeof t.type=="function"&&S[o].__e!=null&&S[o].__e==t.__d&&(t.__d=S[o].__e.nextSibling),me(S[o],S[o]))}function de(_,e,t){for(var r,i=_.__k,n=0;i&&n<i.length;n++)(r=i[n])&&(r.__=_,e=typeof r.type=="function"?de(r,e,t):he(t,r.__e,e));return e}function he(_,e,t){return t==null||t.parentNode!==_?_.insertBefore(e,null):e==t&&e.parentNode!=null||_.insertBefore(e,t),e.nextSibling}function Se(_,e,t,r){var i=_.key,n=_.type,l=t-1,c=t+1,s=e[t];if(s===null||s&&i==s.key&&n===s.type)return t;if(r>(s!=null?1:0))for(;l>=0||c<e.length;){if(l>=0){if((s=e[l])&&i==s.key&&n===s.type)return l;l--}if(c<e.length){if((s=e[c])&&i==s.key&&n===s.type)return c;c++}}return-1}function $e(_,e,t,r,i){var n;for(n in t)n==="children"||n==="key"||n in e||M(_,n,null,t[n],r);for(n in e)i&&typeof e[n]!="function"||n==="children"||n==="key"||n==="value"||n==="checked"||t[n]===e[n]||M(_,n,e[n],t[n],r)}function X(_,e,t){e[0]==="-"?_.setProperty(e,t??""):_[e]=t==null?"":typeof t!="number"||be.test(e)?t:t+"px"}function M(_,e,t,r,i){var n;e:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof r=="string"&&(_.style.cssText=r=""),r)for(e in r)t&&e in t||X(_.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||X(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")n=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in _?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+n]=t,t?r||_.addEventListener(e,n?ee:Z,n):_.removeEventListener(e,n?ee:Z,n);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in _)try{_[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?_.removeAttribute(e):_.setAttribute(e,t))}}function Z(_){return this.l[_.type+!1](f.event?f.event(_):_)}function ee(_){return this.l[_.type+!0](f.event?f.event(_):_)}function K(_,e,t,r,i,n,l,c,s,m){var d,o,h,p,u,a,x,v,y,$,P,k,S,H,E,b=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(s=t.__h,c=e.__e=t.__e,e.__h=null,n=[c]),(d=f.__b)&&d(e);try{e:if(typeof b=="function"){if(v=e.props,y=(d=b.contextType)&&r[d.__c],$=d?y?y.props.value:d.__:r,t.__c?x=(o=e.__c=t.__c).__=o.__E:("prototype"in b&&b.prototype.render?e.__c=o=new b(v,$):(e.__c=o=new U(v,$),o.constructor=b,o.render=Pe),y&&y.sub(o),o.props=v,o.state||(o.state={}),o.context=$,o.__n=r,h=o.__d=!0,o.__h=[],o._sb=[]),o.__s==null&&(o.__s=o.state),b.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=w({},o.__s)),w(o.__s,b.getDerivedStateFromProps(v,o.__s))),p=o.props,u=o.state,o.__v=e,h)b.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(b.getDerivedStateFromProps==null&&v!==p&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(v,$),!o.__e&&(o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(v,o.__s,$)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(o.props=v,o.state=o.__s,o.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(T){T&&(T.__=e)}),P=0;P<o._sb.length;P++)o.__h.push(o._sb[P]);o._sb=[],o.__h.length&&l.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(v,o.__s,$),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(p,u,a)})}if(o.context=$,o.props=v,o.__P=_,o.__e=!1,k=f.__r,S=0,"prototype"in b&&b.prototype.render){for(o.state=o.__s,o.__d=!1,k&&k(e),d=o.render(o.props,o.state,o.context),H=0;H<o._sb.length;H++)o.__h.push(o._sb[H]);o._sb=[]}else do o.__d=!1,k&&k(e),d=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++S<25);o.state=o.__s,o.getChildContext!=null&&(r=w(w({},r),o.getChildContext())),h||o.getSnapshotBeforeUpdate==null||(a=o.getSnapshotBeforeUpdate(p,u)),pe(_,z(E=d!=null&&d.type===W&&d.key==null?d.props.children:d)?E:[E],e,t,r,i,n,l,c,s,m),o.base=e.__e,e.__h=null,o.__h.length&&l.push(o),x&&(o.__E=o.__=null)}else n==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=Ne(t.__e,e,t,r,i,n,l,s,m);(d=f.diffed)&&d(e)}catch(T){e.__v=null,(s||n!=null)&&(e.__e=c,e.__h=!!s,n[n.indexOf(c)]=null),f.__e(T,e,t)}}function ve(_,e,t){for(var r=0;r<t.length;r++)Y(t[r],t[++r],t[++r]);f.__c&&f.__c(e,_),_.some(function(i){try{_=i.__h,i.__h=[],_.some(function(n){n.call(i)})}catch(n){f.__e(n,i.__v)}})}function Ne(_,e,t,r,i,n,l,c,s){var m,d,o,h=t.props,p=e.props,u=e.type,a=0;if(u==="svg"&&(i=!0),n!=null){for(;a<n.length;a++)if((m=n[a])&&"setAttribute"in m==!!u&&(u?m.localName===u:m.nodeType===3)){_=m,n[a]=null;break}}if(_==null){if(u===null)return document.createTextNode(p);_=i?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,p.is&&p),n=null,c=!1}if(u===null)h===p||c&&_.data===p||(_.data=p);else{if(n=n&&I.call(_.childNodes),d=(h=t.props||A).dangerouslySetInnerHTML,o=p.dangerouslySetInnerHTML,!c){if(n!=null)for(h={},a=0;a<_.attributes.length;a++)h[_.attributes[a].name]=_.attributes[a].value;(o||d)&&(o&&(d&&o.__html==d.__html||o.__html===_.innerHTML)||(_.innerHTML=o&&o.__html||""))}if($e(_,p,h,i,c),o)e.__k=[];else if(pe(_,z(a=e.props.children)?a:[a],e,t,r,i&&u!=="foreignObject",n,l,n?n[0]:t.__k&&O(t,0),c,s),n!=null)for(a=n.length;a--;)n[a]!=null&&fe(n[a]);c||("value"in p&&(a=p.value)!==void 0&&(a!==_.value||u==="progress"&&!a||u==="option"&&a!==h.value)&&M(_,"value",a,h.value,!1),"checked"in p&&(a=p.checked)!==void 0&&a!==_.checked&&M(_,"checked",a,h.checked,!1))}return _}function Y(_,e,t){try{typeof _=="function"?_(e):_.current=e}catch(r){f.__e(r,t)}}function me(_,e,t){var r,i;if(f.unmount&&f.unmount(_),(r=_.ref)&&(r.current&&r.current!==_.__e||Y(r,null,e)),(r=_.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){f.__e(n,e)}r.base=r.__P=null,_.__c=void 0}if(r=_.__k)for(i=0;i<r.length;i++)r[i]&&me(r[i],e,t||typeof _.type!="function");t||_.__e==null||fe(_.__e),_.__=_.__e=_.__d=void 0}function Pe(_,e,t){return this.constructor(_,t)}function we(_,e,t){var r,i,n,l;f.__&&f.__(_,e),i=(r=typeof t=="function")?null:t&&t.__k||e.__k,n=[],l=[],K(e,_=(!r&&t||e).__k=ke(W,null,[_]),i||A,A,e.ownerSVGElement!==void 0,!r&&t?[t]:i?null:e.firstChild?I.call(e.childNodes):null,n,!r&&t?t:i?i.__e:e.firstChild,r,l),ve(n,_,l)}I=se.slice,f={__e:function(_,e,t,r){for(var i,n,l;e=e.__;)if((i=e.__c)&&!i.__)try{if((n=i.constructor)&&n.getDerivedStateFromError!=null&&(i.setState(n.getDerivedStateFromError(_)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(_,r||{}),l=i.__d),l)return i.__E=i}catch(c){_=c}throw _}},ce=0,U.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof _=="function"&&(_=_(w({},t),this.props)),_&&w(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),Q(this))},U.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),Q(this))},U.prototype.render=W,C=[],ue=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,B=function(_,e){return _.__v.__b-e.__v.__b},R.__r=0;var q,g,V,_e,j=0,ye=[],L=[],te=f.__b,ne=f.__r,oe=f.diffed,re=f.__c,ie=f.unmount;function He(_,e){f.__h&&f.__h(g,_,j||e),j=0;var t=g.__H||(g.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({__V:L}),t.__[_]}function Ee(_){return j=1,Ce(ge,_)}function Ce(_,e,t){var r=He(q++,2);if(r.t=_,!r.__c&&(r.__=[t?t(e):ge(void 0,e),function(c){var s=r.__N?r.__N[0]:r.__[0],m=r.t(s,c);s!==m&&(r.__N=[m,r.__[1]],r.__c.setState({}))}],r.__c=g,!g.u)){var i=function(c,s,m){if(!r.__c.__H)return!0;var d=r.__c.__H.__.filter(function(h){return h.__c});if(d.every(function(h){return!h.__N}))return!n||n.call(this,c,s,m);var o=!1;return d.forEach(function(h){if(h.__N){var p=h.__[0];h.__=h.__N,h.__N=void 0,p!==h.__[0]&&(o=!0)}}),!(!o&&r.__c.props===c)&&(!n||n.call(this,c,s,m))};g.u=!0;var n=g.shouldComponentUpdate,l=g.componentWillUpdate;g.componentWillUpdate=function(c,s,m){if(this.__e){var d=n;n=void 0,i(c,s,m),n=d}l&&l.call(this,c,s,m)},g.shouldComponentUpdate=i}return r.__N||r.__}function xe(){for(var _;_=ye.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(F),_.__H.__h.forEach(G),_.__H.__h=[]}catch(e){_.__H.__h=[],f.__e(e,_.__v)}}f.__b=function(_){g=null,te&&te(_)},f.__r=function(_){ne&&ne(_),q=0;var e=(g=_.__c).__H;e&&(V===g?(e.__h=[],g.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=L,t.__N=t.i=void 0})):(e.__h.forEach(F),e.__h.forEach(G),e.__h=[],q=0)),V=g},f.diffed=function(_){oe&&oe(_);var e=_.__c;e&&e.__H&&(e.__H.__h.length&&(ye.push(e)!==1&&_e===f.requestAnimationFrame||((_e=f.requestAnimationFrame)||Ae)(xe)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==L&&(t.__=t.__V),t.i=void 0,t.__V=L})),V=g=null},f.__c=function(_,e){e.some(function(t){try{t.__h.forEach(F),t.__h=t.__h.filter(function(r){return!r.__||G(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],f.__e(r,t.__v)}}),re&&re(_,e)},f.unmount=function(_){ie&&ie(_);var e,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{F(r)}catch(i){e=i}}),t.__H=void 0,e&&f.__e(e,t.__v))};var le=typeof requestAnimationFrame=="function";function Ae(_){var e,t=function(){clearTimeout(r),le&&cancelAnimationFrame(e),setTimeout(_)},r=setTimeout(t,100);le&&(e=requestAnimationFrame(t))}function F(_){var e=g,t=_.__c;typeof t=="function"&&(_.__c=void 0,t()),g=e}function G(_){var e=g;_.__c=_.__(),g=e}function ge(_,e){return typeof e=="function"?e(_):e}var Te=0;function N(_,e,t,r,i,n){var l,c,s={};for(c in e)c=="ref"?l=e[c]:s[c]=e[c];var m={type:_,props:s,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Te,__source:i,__self:n};if(typeof _=="function"&&(l=_.defaultProps))for(c in l)s[c]===void 0&&(s[c]=l[c]);return f.vnode&&f.vnode(m),m}const De="sounds/",Ue="ogg";function Le(_){return _.trim().replace(" ","-").toLowerCase()}function Fe(_){return`${De}${_}.${Ue}`}function Oe(_,e,t){const{name:r,file:i}=_,n=Fe(i),l=e%2!==0?e-1:e;return N("button",{class:"play button",onClick:()=>{const c=new Audio(n);c.volume=t/100,c.play()},id:Le(r),style:{"--i":l},children:N("div",{class:"button-text",children:r},`${r}-${i}`)},`${r}-${i}`)}function Re(){const _=[{name:"Come on",file:"comeon"},{name:"Deadly Rave",file:"deadlyrave"},{name:"Die yabo",file:"dieyabo"},{name:"Double Reppuuken",file:"double"},{name:"I will stain my hams",file:"stainmyhound"},{name:"Jaeiken",file:"jaeiken"},{name:"K.O.",file:"lego"},{name:"Pathetic",file:"pathetic"},{name:"Predictabo",file:"predictable"},{name:"Raging Storm",file:"raising"},{name:"Reppuuken",file:"reppuuken"},{name:"Shippuuken",file:"shippuuken"},{name:"Too easy!",file:"tooeasy"},{name:"You are weak",file:"youareweak"},{name:"You cannot escape",file:"youcannot"}],[e,t]=Ee(100);function r({volume:i}){return N("div",{className:"volume",children:[N("div",{id:"volume-down",children:"🌊"}),N("input",{type:"range",min:0,max:100,step:10,value:i,onChange:l=>{const{target:c}=l;c&&t(c.valueAsNumber)}}),N("div",{id:"volume-up",children:"🌊"})]})}return N("div",{className:"main",children:[N("h1",{children:["Geese Howard Soundboard ",N("span",{id:"rare",children:"(ULTRA RARE)"})]}),N(r,{volume:e}),N("div",{id:"buttons",class:"container",children:_.map((i,n)=>Oe(i,n,e))})]})}we(N(Re,{}),document.getElementById("app"));