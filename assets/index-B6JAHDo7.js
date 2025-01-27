(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Wa={FIREBASE_API_KEY:'"AIzaSyB1dlHRhLA71PxCgVLjOieUcUF22DWx6zY"',FIREBASE_AUTH_DOMAIN:'"autonomy-heroes.firebaseapp.com"',FIREBASE_PROJECT_ID:'"autonomy-heroes"',FIREBASE_STORAGE_BUCKET:'"autonomy-heroes.firebasestorage.app"',FIREBASE_MESSAGING_SENDER_ID:'"266526530869"',FIREBASE_APP_ID:'"1:266526530869:web:ea95143735be497ca8007c"',FIREBASE_MEASUREMENT_ID:'"G-70PG5B4S39"'};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},sd=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],a=r[t++],c=r[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[t++],a=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},hc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],a=s+1<r.length,c=a?r[s+1]:0,l=s+2<r.length,d=l?r[s+2]:0,p=i>>2,y=(i&3)<<4|c>>4;let A=(c&15)<<2|d>>6,S=d&63;l||(S=64,a||(A=64)),n.push(t[p],t[y],t[A],t[S])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(lc(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):sd(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],c=s<r.length?t[r.charAt(s)]:0;++s;const d=s<r.length?t[r.charAt(s)]:64;++s;const y=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||c==null||d==null||y==null)throw new id;const A=i<<2|c>>4;if(n.push(A),d!==64){const S=c<<4&240|d>>2;if(n.push(S),y!==64){const P=d<<6&192|y;n.push(P)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class id extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const od=function(r){const e=lc(r);return hc.encodeByteArray(e,!0)},Jr=function(r){return od(r).replace(/\./g,"")},dc=function(r){try{return hc.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=()=>ad().__FIREBASE_DEFAULTS__,cd=()=>{if(typeof process>"u"||typeof Wa>"u")return;const r=Wa.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ld=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&dc(r[1]);return e&&JSON.parse(e)},ms=()=>{try{return ud()||cd()||ld()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},fc=r=>{var e,t;return(t=(e=ms())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},hd=r=>{const e=fc(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},pc=()=>{var r;return(r=ms())===null||r===void 0?void 0:r.config},mc=r=>{var e;return(e=ms())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Jr(JSON.stringify(t)),Jr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function md(){var r;const e=(r=ms())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _d(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function yd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ed(){const r=Te();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function vd(){return!md()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Td(){try{return typeof indexedDB=="object"}catch{return!1}}function Id(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="FirebaseError";class nt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=wd,Object.setPrototypeOf(this,nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nr.prototype.create)}}class nr{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Ad(i,n):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new nt(s,c,n)}}function Ad(r,e){return r.replace(Rd,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const Rd=/\{\$([^}]+)}/g;function Sd(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Xr(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],a=e[s];if($a(i)&&$a(a)){if(!Xr(i,a))return!1}else if(i!==a)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function $a(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Ln(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,i]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Mn(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function bd(r,e){const t=new Cd(r,e);return t.subscribe.bind(t)}class Cd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Pd(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=ui),s.error===void 0&&(s.error=ui),s.complete===void 0&&(s.complete=ui);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pd(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function ui(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(r){return r&&r._delegate?r._delegate:r}class Lt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new dd;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Nd(e))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=Vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vt){return this.instances.has(e)}getOptions(e=Vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);n===c&&a.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Dd(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Vt){return this.component?this.component.multipleInstances?e:Vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dd(r){return r===Vt?void 0:r}function Nd(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new kd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(B||(B={}));const Od={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Ld=B.INFO,Md={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},xd=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=Md[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hi{constructor(e){this.name=e,this._logLevel=Ld,this._logHandler=xd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Od[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const Fd=(r,e)=>e.some(t=>r instanceof t);let za,Ha;function Ud(){return za||(za=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bd(){return Ha||(Ha=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gc=new WeakMap,Ti=new WeakMap,_c=new WeakMap,ci=new WeakMap,Gi=new WeakMap;function qd(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{t(pt(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&gc.set(t,r)}).catch(()=>{}),Gi.set(e,r),e}function jd(r){if(Ti.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",a),r.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",a),r.addEventListener("abort",a)});Ti.set(r,e)}let Ii={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Ti.get(r);if(e==="objectStoreNames")return r.objectStoreNames||_c.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return pt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Wd(r){Ii=r(Ii)}function $d(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(li(this),e,...t);return _c.set(n,e.sort?e.sort():[e]),pt(n)}:Bd().includes(r)?function(...e){return r.apply(li(this),e),pt(gc.get(this))}:function(...e){return pt(r.apply(li(this),e))}}function zd(r){return typeof r=="function"?$d(r):(r instanceof IDBTransaction&&jd(r),Fd(r,Ud())?new Proxy(r,Ii):r)}function pt(r){if(r instanceof IDBRequest)return qd(r);if(ci.has(r))return ci.get(r);const e=zd(r);return e!==r&&(ci.set(r,e),Gi.set(e,r)),e}const li=r=>Gi.get(r);function Hd(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(r,e),c=pt(a);return n&&a.addEventListener("upgradeneeded",l=>{n(pt(a.result),l.oldVersion,l.newVersion,pt(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Gd=["get","getKey","getAll","getAllKeys","count"],Kd=["put","add","delete","clear"],hi=new Map;function Ga(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(hi.get(e))return hi.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=Kd.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Gd.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return n&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&l.done]))[0]};return hi.set(e,i),i}Wd(r=>({...r,get:(e,t,n)=>Ga(e,t)||r.get(e,t,n),has:(e,t)=>!!Ga(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Yd(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Yd(r){const e=r.getComponent();return e?.type==="VERSION"}const wi="@firebase/app",Ka="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=new Hi("@firebase/app"),Jd="@firebase/app-compat",Xd="@firebase/analytics-compat",Zd="@firebase/analytics",ef="@firebase/app-check-compat",tf="@firebase/app-check",nf="@firebase/auth",rf="@firebase/auth-compat",sf="@firebase/database",of="@firebase/data-connect",af="@firebase/database-compat",uf="@firebase/functions",cf="@firebase/functions-compat",lf="@firebase/installations",hf="@firebase/installations-compat",df="@firebase/messaging",ff="@firebase/messaging-compat",pf="@firebase/performance",mf="@firebase/performance-compat",gf="@firebase/remote-config",_f="@firebase/remote-config-compat",yf="@firebase/storage",Ef="@firebase/storage-compat",vf="@firebase/firestore",Tf="@firebase/vertexai",If="@firebase/firestore-compat",wf="firebase",Af="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="[DEFAULT]",Rf={[wi]:"fire-core",[Jd]:"fire-core-compat",[Zd]:"fire-analytics",[Xd]:"fire-analytics-compat",[tf]:"fire-app-check",[ef]:"fire-app-check-compat",[nf]:"fire-auth",[rf]:"fire-auth-compat",[sf]:"fire-rtdb",[of]:"fire-data-connect",[af]:"fire-rtdb-compat",[uf]:"fire-fn",[cf]:"fire-fn-compat",[lf]:"fire-iid",[hf]:"fire-iid-compat",[df]:"fire-fcm",[ff]:"fire-fcm-compat",[pf]:"fire-perf",[mf]:"fire-perf-compat",[gf]:"fire-rc",[_f]:"fire-rc-compat",[yf]:"fire-gcs",[Ef]:"fire-gcs-compat",[vf]:"fire-fst",[If]:"fire-fst-compat",[Tf]:"fire-vertex","fire-js":"fire-js",[wf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=new Map,Sf=new Map,Ri=new Map;function Qa(r,e){try{r.container.addComponent(e)}catch(t){Xe.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function rn(r){const e=r.name;if(Ri.has(e))return Xe.debug(`There were multiple attempts to register component ${e}.`),!1;Ri.set(e,r);for(const t of Zr.values())Qa(t,r);for(const t of Sf.values())Qa(t,r);return!0}function Ki(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function xe(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mt=new nr("app","Firebase",bf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=Af;function yc(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ai,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw mt.create("bad-app-name",{appName:String(s)});if(t||(t=pc()),!t)throw mt.create("no-options");const i=Zr.get(s);if(i){if(Xr(t,i.options)&&Xr(n,i.config))return i;throw mt.create("duplicate-app",{appName:s})}const a=new Vd(s);for(const l of Ri.values())a.addComponent(l);const c=new Cf(t,n,a);return Zr.set(s,c),c}function Ec(r=Ai){const e=Zr.get(r);if(!e&&r===Ai&&pc())return yc();if(!e)throw mt.create("no-app",{appName:r});return e}function gt(r,e,t){var n;let s=(n=Rf[r])!==null&&n!==void 0?n:r;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xe.warn(c.join(" "));return}rn(new Lt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf="firebase-heartbeat-database",kf=1,Gn="firebase-heartbeat-store";let di=null;function vc(){return di||(di=Hd(Pf,kf,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Gn)}catch(t){console.warn(t)}}}}).catch(r=>{throw mt.create("idb-open",{originalErrorMessage:r.message})})),di}async function Df(r){try{const t=(await vc()).transaction(Gn),n=await t.objectStore(Gn).get(Tc(r));return await t.done,n}catch(e){if(e instanceof nt)Xe.warn(e.message);else{const t=mt.create("idb-get",{originalErrorMessage:e?.message});Xe.warn(t.message)}}}async function Ya(r,e){try{const n=(await vc()).transaction(Gn,"readwrite");await n.objectStore(Gn).put(e,Tc(r)),await n.done}catch(t){if(t instanceof nt)Xe.warn(t.message);else{const n=mt.create("idb-set",{originalErrorMessage:t?.message});Xe.warn(n.message)}}}function Tc(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=1024,Vf=30*24*60*60*1e3;class Of{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Mf(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ja();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Vf}),this._storage.overwrite(this._heartbeatsCache))}catch(n){Xe.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ja(),{heartbeatsToSend:n,unsentEntries:s}=Lf(this._heartbeatsCache.heartbeats),i=Jr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Xe.warn(t),""}}}function Ja(){return new Date().toISOString().substring(0,10)}function Lf(r,e=Nf){const t=[];let n=r.slice();for(const s of r){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Xa(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Xa(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Mf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Td()?Id().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Df(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ya(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ya(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Xa(r){return Jr(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(r){rn(new Lt("platform-logger",e=>new Qd(e),"PRIVATE")),rn(new Lt("heartbeat",e=>new Of(e),"PRIVATE")),gt(wi,Ka,r),gt(wi,Ka,"esm2017"),gt("fire-js","")}xf("");var Ff="firebase",Uf="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gt(Ff,Uf,"app");function Qi(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(t[n[s]]=r[n[s]]);return t}function Ic(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bf=Ic,wc=new nr("auth","Firebase",Ic());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new Hi("@firebase/auth");function qf(r,...e){es.logLevel<=B.WARN&&es.warn(`Auth (${dn}): ${r}`,...e)}function Br(r,...e){es.logLevel<=B.ERROR&&es.error(`Auth (${dn}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(r,...e){throw Yi(r,...e)}function Fe(r,...e){return Yi(r,...e)}function Ac(r,e,t){const n=Object.assign(Object.assign({},Bf()),{[e]:t});return new nr("auth","Firebase",n).create(e,{appName:r.name})}function Ye(r){return Ac(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yi(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return wc.create(r,...e)}function M(r,e,...t){if(!r)throw Yi(e,...t)}function Ge(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Br(e),new Error(e)}function Ze(r,e){r||Ge(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function jf(){return Za()==="http:"||Za()==="https:"}function Za(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jf()||_d()||"connection"in navigator)?navigator.onLine:!0}function $f(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ze(t>e,"Short delay should be less than long delay!"),this.isMobile=pd()||yd()}get(){return Wf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(r,e){Ze(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=new sr(3e4,6e4);function Rt(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function St(r,e,t,n,s={}){return Sc(r,s,async()=>{let i={},a={};n&&(e==="GET"?a=n:i={body:JSON.stringify(n)});const c=rr(Object.assign({key:r.config.apiKey},a)).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const d=Object.assign({method:e,headers:l},i);return gd()||(d.referrerPolicy="no-referrer"),Rc.fetch()(bc(r,r.config.apiHost,t,c),d)})}async function Sc(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},zf),e);try{const s=new Kf(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Or(r,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Or(r,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Or(r,"email-already-in-use",a);if(l==="USER_DISABLED")throw Or(r,"user-disabled",a);const p=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Ac(r,p,d);Ve(r,p)}}catch(s){if(s instanceof nt)throw s;Ve(r,"network-request-failed",{message:String(s)})}}async function ir(r,e,t,n,s={}){const i=await St(r,e,t,n,s);return"mfaPendingCredential"in i&&Ve(r,"multi-factor-auth-required",{_serverResponse:i}),i}function bc(r,e,t,n){const s=`${e}${t}?${n}`;return r.config.emulator?Ji(r.config,s):`${r.config.apiScheme}://${s}`}function Gf(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Kf{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Fe(this.auth,"network-request-failed")),Hf.get())})}}function Or(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=Fe(r,e,n);return s.customData._tokenResponse=t,s}function eu(r){return r!==void 0&&r.enterprise!==void 0}class Qf{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Gf(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Yf(r,e){return St(r,"GET","/v2/recaptchaConfig",Rt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jf(r,e){return St(r,"POST","/v1/accounts:delete",e)}async function Cc(r,e){return St(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xf(r,e=!1){const t=oe(r),n=await t.getIdToken(e),s=Xi(n);M(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:n,authTime:qn(fi(s.auth_time)),issuedAtTime:qn(fi(s.iat)),expirationTime:qn(fi(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function fi(r){return Number(r)*1e3}function Xi(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Br("JWT malformed, contained fewer than 3 sections"),null;try{const s=dc(t);return s?JSON.parse(s):(Br("Failed to decode base64 JWT payload"),null)}catch(s){return Br("Caught error parsing JWT payload as JSON",s?.toString()),null}}function tu(r){const e=Xi(r);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kn(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof nt&&Zf(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Zf({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qn(this.lastLoginAt),this.creationTime=qn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(r){var e;const t=r.auth,n=await r.getIdToken(),s=await Kn(r,Cc(t,{idToken:n}));M(s?.users.length,t,"internal-error");const i=s.users[0];r._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Pc(i.providerUserInfo):[],c=np(r.providerData,a),l=r.isAnonymous,d=!(r.email&&i.passwordHash)&&!c?.length,p=l?d:!1,y={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new bi(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(r,y)}async function tp(r){const e=oe(r);await ts(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function np(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function Pc(r){return r.map(e=>{var{providerId:t}=e,n=Qi(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rp(r,e){const t=await Sc(r,{},async()=>{const n=rr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,a=bc(r,s,"/v1/token",`key=${i}`),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Rc.fetch()(a,{method:"POST",headers:c,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function sp(r,e){return St(r,"POST","/v2/accounts:revokeToken",Rt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,"internal-error");const t=tu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await rp(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,a=new Zt;return n&&(M(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),s&&(M(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(M(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zt,this.toJSON())}_performRefresh(){return Ge("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(r,e){M(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Ke{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,i=Qi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ep(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new bi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Kn(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Xf(this,e)}reload(){return tp(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ke(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ts(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xe(this.auth.app))return Promise.reject(Ye(this.auth));const e=await this.getIdToken();return await Kn(this,Jf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,i,a,c,l,d,p;const y=(n=t.displayName)!==null&&n!==void 0?n:void 0,A=(s=t.email)!==null&&s!==void 0?s:void 0,S=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,P=(a=t.photoURL)!==null&&a!==void 0?a:void 0,O=(c=t.tenantId)!==null&&c!==void 0?c:void 0,D=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,W=(d=t.createdAt)!==null&&d!==void 0?d:void 0,G=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:K,emailVerified:te,isAnonymous:ke,providerData:ne,stsTokenManager:v}=t;M(K&&v,e,"internal-error");const m=Zt.fromJSON(this.name,v);M(typeof K=="string",e,"internal-error"),at(y,e.name),at(A,e.name),M(typeof te=="boolean",e,"internal-error"),M(typeof ke=="boolean",e,"internal-error"),at(S,e.name),at(P,e.name),at(O,e.name),at(D,e.name),at(W,e.name),at(G,e.name);const _=new Ke({uid:K,auth:e,email:A,emailVerified:te,displayName:y,isAnonymous:ke,photoURL:P,phoneNumber:S,tenantId:O,stsTokenManager:m,createdAt:W,lastLoginAt:G});return ne&&Array.isArray(ne)&&(_.providerData=ne.map(E=>Object.assign({},E))),D&&(_._redirectEventId=D),_}static async _fromIdTokenResponse(e,t,n=!1){const s=new Zt;s.updateFromServerResponse(t);const i=new Ke({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await ts(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];M(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Pc(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,c=new Zt;c.updateFromIdToken(n);const l=new Ke({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new bi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=new Map;function Qe(r){Ze(r instanceof Function,"Expected a class definition");let e=nu.get(r);return e?(Ze(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,nu.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}kc.type="NONE";const ru=kc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(r,e,t){return`firebase:${r}:${e}:${t}`}class en{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=qr(this.userKey,s.apiKey,i),this.fullPersistenceKey=qr("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ke._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new en(Qe(ru),e,n);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Qe(ru);const a=qr(n,e.config.apiKey,e.name);let c=null;for(const d of t)try{const p=await d._get(a);if(p){const y=Ke._fromJSON(e,p);d!==i&&(c=y),i=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new en(i,e,n):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new en(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Oc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mc(e))return"Blackberry";if(xc(e))return"Webos";if(Nc(e))return"Safari";if((e.includes("chrome/")||Vc(e))&&!e.includes("edge/"))return"Chrome";if(Lc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if(n?.length===2)return n[1]}return"Other"}function Dc(r=Te()){return/firefox\//i.test(r)}function Nc(r=Te()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vc(r=Te()){return/crios\//i.test(r)}function Oc(r=Te()){return/iemobile/i.test(r)}function Lc(r=Te()){return/android/i.test(r)}function Mc(r=Te()){return/blackberry/i.test(r)}function xc(r=Te()){return/webos/i.test(r)}function Zi(r=Te()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function ip(r=Te()){var e;return Zi(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function op(){return Ed()&&document.documentMode===10}function Fc(r=Te()){return Zi(r)||Lc(r)||xc(r)||Mc(r)||/windows phone/i.test(r)||Oc(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(r,e=[]){let t;switch(r){case"Browser":t=su(Te());break;case"Worker":t=`${su(Te())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${dn}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function up(r,e={}){return St(r,"GET","/v2/passwordPolicy",Rt(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp=6;class lp{constructor(e){var t,n,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:cp,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(n=l.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iu(this),this.idTokenSubscription=new iu(this),this.beforeStateQueue=new ap(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Qe(t)),this._initializationPromise=this.queue(async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await en.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Cc(this,{idToken:e}),n=await Ke._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(xe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&l?.user&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ts(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$f()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xe(this.app))return Promise.reject(Ye(this));const t=e?oe(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xe(this.app)?Promise.reject(Ye(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xe(this.app)?Promise.reject(Ye(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await up(this),t=new lp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new nr("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await sp(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Qe(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await en.create(this,[Qe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&qf(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Ut(r){return oe(r)}class iu{constructor(e){this.auth=e,this.observer=null,this.addObserver=bd(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dp(r){gs=r}function Bc(r){return gs.loadJS(r)}function fp(){return gs.recaptchaEnterpriseScript}function pp(){return gs.gapiScript}function mp(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class gp{constructor(){this.enterprise=new _p}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class _p{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const yp="recaptcha-enterprise",qc="NO_RECAPTCHA";class Ep{constructor(e){this.type=yp,this.auth=Ut(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{Yf(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Qf(l);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(l=>{c(l)})})}function s(i,a,c){const l=window.grecaptcha;eu(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(qc)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new gp().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{n(this.auth).then(c=>{if(!t&&eu(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=fp();l.length!==0&&(l+=c),Bc(l).then(()=>{s(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function ou(r,e,t,n=!1,s=!1){const i=new Ep(r);let a;if(s)a=qc;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return n?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Ci(r,e,t,n,s){var i;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await ou(r,e,t,t==="getOobCode");return n(r,a)}else return n(r,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await ou(r,e,t,t==="getOobCode");return n(r,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(r,e){const t=Ki(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Xr(i,e??{}))return s;Ve(s,"already-initialized")}return t.initialize({options:e})}function Tp(r,e){const t=e?.persistence||[],n=(Array.isArray(t)?t:[t]).map(Qe);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e?.popupRedirectResolver)}function Ip(r,e,t){const n=Ut(r);M(n._canInitEmulator,n,"emulator-config-failed"),M(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=jc(e),{host:a,port:c}=wp(e),l=c===null?"":`:${c}`;n.config.emulator={url:`${i}//${a}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Ap()}function jc(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function wp(r){const e=jc(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:au(n.substr(i.length+1))}}else{const[i,a]=n.split(":");return{host:i,port:au(a)}}}function au(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Ap(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ge("not implemented")}_getIdTokenResponse(e){return Ge("not implemented")}_linkToIdToken(e,t){return Ge("not implemented")}_getReauthenticationResolver(e){return Ge("not implemented")}}async function Rp(r,e){return St(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sp(r,e){return ir(r,"POST","/v1/accounts:signInWithPassword",Rt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bp(r,e){return ir(r,"POST","/v1/accounts:signInWithEmailLink",Rt(r,e))}async function Cp(r,e){return ir(r,"POST","/v1/accounts:signInWithEmailLink",Rt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends eo{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Qn(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Qn(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ci(e,t,"signInWithPassword",Sp);case"emailLink":return bp(e,{email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ci(e,n,"signUpPassword",Rp);case"emailLink":return Cp(e,{idToken:t,email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(r,e){return ir(r,"POST","/v1/accounts:signInWithIdp",Rt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="http://localhost";class Mt extends eo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Mt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ve("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,i=Qi(t,["providerId","signInMethod"]);if(!n||!s)return null;const a=new Mt(n,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return tn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,tn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,tn(e,t)}buildRequest(){const e={requestUri:Pp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=rr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Dp(r){const e=Ln(Mn(r)).link,t=e?Ln(Mn(e)).deep_link_id:null,n=Ln(Mn(r)).deep_link_id;return(n?Ln(Mn(n)).link:null)||n||t||e||r}class to{constructor(e){var t,n,s,i,a,c;const l=Ln(Mn(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,p=(n=l.oobCode)!==null&&n!==void 0?n:null,y=kp((s=l.mode)!==null&&s!==void 0?s:null);M(d&&p&&y,"argument-error"),this.apiKey=d,this.operation=y,this.code=p,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Dp(e);try{return new to(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this.providerId=fn.PROVIDER_ID}static credential(e,t){return Qn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=to.parseLink(t);return M(n,"argument-error"),Qn._fromEmailAndCode(e,n.code,n.tenantId)}}fn.PROVIDER_ID="password";fn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Wc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends or{constructor(){super("facebook.com")}static credential(e){return Mt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ut.credential(e.oauthAccessToken)}catch{return null}}}ut.FACEBOOK_SIGN_IN_METHOD="facebook.com";ut.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends or{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Mt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ct.credential(t,n)}catch{return null}}}ct.GOOGLE_SIGN_IN_METHOD="google.com";ct.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends or{constructor(){super("github.com")}static credential(e){return Mt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.GITHUB_SIGN_IN_METHOD="github.com";lt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends or{constructor(){super("twitter.com")}static credential(e,t){return Mt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ht.credential(t,n)}catch{return null}}}ht.TWITTER_SIGN_IN_METHOD="twitter.com";ht.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Np(r,e){return ir(r,"POST","/v1/accounts:signUp",Rt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await Ke._fromIdTokenResponse(e,n,s),a=uu(n);return new xt({user:i,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=uu(n);return new xt({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function uu(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends nt{constructor(e,t,n,s){var i;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,ns.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new ns(e,t,n,s)}}function $c(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ns._fromErrorAndOperation(r,i,e,n):i})}async function Vp(r,e,t=!1){const n=await Kn(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return xt._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Op(r,e,t=!1){const{auth:n}=r;if(xe(n.app))return Promise.reject(Ye(n));const s="reauthenticate";try{const i=await Kn(r,$c(n,s,e,r),t);M(i.idToken,n,"internal-error");const a=Xi(i.idToken);M(a,n,"internal-error");const{sub:c}=a;return M(r.uid===c,n,"user-mismatch"),xt._forOperation(r,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Ve(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zc(r,e,t=!1){if(xe(r.app))return Promise.reject(Ye(r));const n="signIn",s=await $c(r,n,e),i=await xt._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}async function Lp(r,e){return zc(Ut(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hc(r){const e=Ut(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Mp(r,e,t){if(xe(r.app))return Promise.reject(Ye(r));const n=Ut(r),a=await Ci(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Np).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Hc(r),l}),c=await xt._fromIdTokenResponse(n,"signIn",a);return await n._updateCurrentUser(c.user),c}function xp(r,e,t){return xe(r.app)?Promise.reject(Ye(r)):Lp(oe(r),fn.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Hc(r),n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(r,e){return oe(r).setPersistence(e)}function Up(r,e,t,n){return oe(r).onIdTokenChanged(e,t,n)}function Bp(r,e,t){return oe(r).beforeAuthStateChanged(e,t)}function qp(r){return oe(r).signOut()}const rs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(rs,"1"),this.storage.removeItem(rs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=1e3,Wp=10;class Kc extends Gc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},i=this.storage.getItem(n);op()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Wp):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},jp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kc.type="LOCAL";const Qc=Kc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc extends Gc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Yc.type="SESSION";const Jc=Yc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new _s(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),l=await $p(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_s.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const d=no("",20);s.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},n);a={messageChannel:s,onMessage(y){const A=y;if(A.data.eventId===d)switch(A.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(A.data.response);break;default:clearTimeout(p),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(){return window}function Hp(r){Ue().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(){return typeof Ue().WorkerGlobalScope<"u"&&typeof Ue().importScripts=="function"}async function Gp(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kp(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function Qp(){return Xc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="firebaseLocalStorageDb",Yp=1,ss="firebaseLocalStorage",el="fbase_key";class ar{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ys(r,e){return r.transaction([ss],e?"readwrite":"readonly").objectStore(ss)}function Jp(){const r=indexedDB.deleteDatabase(Zc);return new ar(r).toPromise()}function Pi(){const r=indexedDB.open(Zc,Yp);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(ss,{keyPath:el})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(ss)?e(n):(n.close(),await Jp(),e(await Pi()))})})}async function cu(r,e,t){const n=ys(r,!0).put({[el]:e,value:t});return new ar(n).toPromise()}async function Xp(r,e){const t=ys(r,!1).get(e),n=await new ar(t).toPromise();return n===void 0?null:n.value}function lu(r,e){const t=ys(r,!0).delete(e);return new ar(t).toPromise()}const Zp=800,em=3;class tl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>em)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_s._getInstance(Qp()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Gp(),!this.activeServiceWorker)return;this.sender=new zp(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pi();return await cu(e,rs,"1"),await lu(e,rs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>cu(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Xp(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>lu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ys(s,!1).getAll();return new ar(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tl.type="LOCAL";const tm=tl;new sr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(r,e){return e?Qe(e):(M(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends eo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return tn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return tn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function rm(r){return zc(r.auth,new ro(r),r.bypassAuthState)}function sm(r){const{auth:e,user:t}=r;return M(t,e,"internal-error"),Op(t,new ro(r),r.bypassAuthState)}async function im(r){const{auth:e,user:t}=r;return M(t,e,"internal-error"),Vp(t,new ro(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rm;case"linkViaPopup":case"linkViaRedirect":return im;case"reauthViaPopup":case"reauthViaRedirect":return sm;default:Ve(this.auth,"internal-error")}}resolve(e){Ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=new sr(2e3,1e4);class Jt extends nl{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,Jt.currentPopupAction&&Jt.currentPopupAction.cancel(),Jt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){Ze(this.filter.length===1,"Popup operations only handle one event");const e=no();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,om.get())};e()}}Jt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="pendingRedirect",jr=new Map;class um extends nl{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=jr.get(this.auth._key());if(!e){try{const n=await cm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}jr.set(this.auth._key(),e)}return this.bypassAuthState||jr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cm(r,e){const t=dm(e),n=hm(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function lm(r,e){jr.set(r._key(),e)}function hm(r){return Qe(r._redirectPersistence)}function dm(r){return qr(am,r.config.apiKey,r.name)}async function fm(r,e,t=!1){if(xe(r.app))return Promise.reject(Ye(r));const n=Ut(r),s=nm(n,e),a=await new um(n,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm=10*60*1e3;class mm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!rl(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Fe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pm&&this.cachedEventUids.clear(),this.cachedEventUids.has(hu(e))}saveEventToCache(e){this.cachedEventUids.add(hu(e)),this.lastProcessedEventTime=Date.now()}}function hu(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function rl({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function gm(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rl(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _m(r,e={}){return St(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Em=/^https?/;async function vm(r){if(r.config.emulator)return;const{authorizedDomains:e}=await _m(r);for(const t of e)try{if(Tm(t))return}catch{}Ve(r,"unauthorized-domain")}function Tm(r){const e=Si(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const a=new URL(r);return a.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!Em.test(t))return!1;if(ym.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=new sr(3e4,6e4);function du(){const r=Ue().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function wm(r){return new Promise((e,t)=>{var n,s,i;function a(){du(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{du(),t(Fe(r,"network-request-failed"))},timeout:Im.get()})}if(!((s=(n=Ue().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ue().gapi)===null||i===void 0)&&i.load)a();else{const c=mp("iframefcb");return Ue()[c]=()=>{gapi.load?a():t(Fe(r,"network-request-failed"))},Bc(`${pp()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Wr=null,e})}let Wr=null;function Am(r){return Wr=Wr||wm(r),Wr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=new sr(5e3,15e3),Sm="__/auth/iframe",bm="emulator/auth/iframe",Cm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Pm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function km(r){const e=r.config;M(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Ji(e,bm):`https://${r.config.authDomain}/${Sm}`,n={apiKey:e.apiKey,appName:r.name,v:dn},s=Pm.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${rr(n).slice(1)}`}async function Dm(r){const e=await Am(r),t=Ue().gapi;return M(t,r,"internal-error"),e.open({where:document.body,url:km(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Cm,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const a=Fe(r,"network-request-failed"),c=Ue().setTimeout(()=>{i(a)},Rm.get());function l(){Ue().clearTimeout(c),s(n)}n.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vm=500,Om=600,Lm="_blank",Mm="http://localhost";class fu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xm(r,e,t,n=Vm,s=Om){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Nm),{width:n.toString(),height:s.toString(),top:i,left:a}),d=Te().toLowerCase();t&&(c=Vc(d)?Lm:t),Dc(d)&&(e=e||Mm,l.scrollbars="yes");const p=Object.entries(l).reduce((A,[S,P])=>`${A}${S}=${P},`,"");if(ip(d)&&c!=="_self")return Fm(e||"",c),new fu(null);const y=window.open(e||"",c,p);M(y,r,"popup-blocked");try{y.focus()}catch{}return new fu(y)}function Fm(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um="__/auth/handler",Bm="emulator/auth/handler",qm=encodeURIComponent("fac");async function pu(r,e,t,n,s,i){M(r.config.authDomain,r,"auth-domain-config-required"),M(r.config.apiKey,r,"invalid-api-key");const a={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:dn,eventId:s};if(e instanceof Wc){e.setDefaultLanguage(r.languageCode),a.providerId=e.providerId||"",Sd(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,y]of Object.entries({}))a[p]=y}if(e instanceof or){const p=e.getScopes().filter(y=>y!=="");p.length>0&&(a.scopes=p.join(","))}r.tenantId&&(a.tid=r.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const l=await r._getAppCheckToken(),d=l?`#${qm}=${encodeURIComponent(l)}`:"";return`${jm(r)}?${rr(c).slice(1)}${d}`}function jm({config:r}){return r.emulator?Ji(r,Bm):`https://${r.authDomain}/${Um}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi="webStorageSupport";class Wm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jc,this._completeRedirectFn=fm,this._overrideRedirectResult=lm}async _openPopup(e,t,n,s){var i;Ze((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await pu(e,t,n,Si(),s);return xm(e,a,no())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await pu(e,t,n,Si(),s);return Hp(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Ze(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Dm(e),n=new mm(e);return t.register("authEvent",s=>(M(s?.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(pi,{type:pi},s=>{var i;const a=(i=s?.[0])===null||i===void 0?void 0:i[pi];a!==void 0&&t(!!a),Ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fc()||Nc()||Zi()}}const $m=Wm;var mu="@firebase/auth",gu="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e(n?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Gm(r){rn(new Lt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=n.options;M(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:a,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uc(r)},d=new hp(n,s,i,l);return Tp(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),rn(new Lt("auth-internal",e=>{const t=Ut(e.getProvider("auth").getImmediate());return(n=>new zm(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gt(mu,gu,Hm(r)),gt(mu,gu,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=5*60,Qm=mc("authIdTokenMaxAge")||Km;let _u=null;const Ym=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Qm)return;const s=t?.token;_u!==s&&(_u=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Jm(r=Ec()){const e=Ki(r,"auth");if(e.isInitialized())return e.getImmediate();const t=vp(r,{popupRedirectResolver:$m,persistence:[tm,Qc,Jc]}),n=mc("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const a=Ym(i.toString());Bp(t,a,()=>a(t.currentUser)),Up(t,c=>a(c))}}const s=fc("auth");return s&&Ip(t,`http://${s}`),t}function Xm(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}dp({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=Fe("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",Xm().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Gm("Browser");var yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _t,sl;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,m){function _(){}_.prototype=m.prototype,v.D=m.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(E,T,w){for(var g=Array(arguments.length-2),We=2;We<arguments.length;We++)g[We-2]=arguments[We];return m.prototype[T].apply(E,g)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,m,_){_||(_=0);var E=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)E[T]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(T=0;16>T;++T)E[T]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=v.g[0],_=v.g[1],T=v.g[2];var w=v.g[3],g=m+(w^_&(T^w))+E[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=w+(T^m&(_^T))+E[1]+3905402710&4294967295,w=m+(g<<12&4294967295|g>>>20),g=T+(_^w&(m^_))+E[2]+606105819&4294967295,T=w+(g<<17&4294967295|g>>>15),g=_+(m^T&(w^m))+E[3]+3250441966&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(w^_&(T^w))+E[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(T^m&(_^T))+E[5]+1200080426&4294967295,w=m+(g<<12&4294967295|g>>>20),g=T+(_^w&(m^_))+E[6]+2821735955&4294967295,T=w+(g<<17&4294967295|g>>>15),g=_+(m^T&(w^m))+E[7]+4249261313&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(w^_&(T^w))+E[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(T^m&(_^T))+E[9]+2336552879&4294967295,w=m+(g<<12&4294967295|g>>>20),g=T+(_^w&(m^_))+E[10]+4294925233&4294967295,T=w+(g<<17&4294967295|g>>>15),g=_+(m^T&(w^m))+E[11]+2304563134&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(w^_&(T^w))+E[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(T^m&(_^T))+E[13]+4254626195&4294967295,w=m+(g<<12&4294967295|g>>>20),g=T+(_^w&(m^_))+E[14]+2792965006&4294967295,T=w+(g<<17&4294967295|g>>>15),g=_+(m^T&(w^m))+E[15]+1236535329&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(T^w&(_^T))+E[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^T&(m^_))+E[6]+3225465664&4294967295,w=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(w^m))+E[11]+643717713&4294967295,T=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(T^w))+E[0]+3921069994&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^w&(_^T))+E[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^T&(m^_))+E[10]+38016083&4294967295,w=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(w^m))+E[15]+3634488961&4294967295,T=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(T^w))+E[4]+3889429448&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^w&(_^T))+E[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^T&(m^_))+E[14]+3275163606&4294967295,w=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(w^m))+E[3]+4107603335&4294967295,T=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(T^w))+E[8]+1163531501&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^w&(_^T))+E[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^T&(m^_))+E[2]+4243563512&4294967295,w=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(w^m))+E[7]+1735328473&4294967295,T=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(T^w))+E[12]+2368359562&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(_^T^w)+E[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^T)+E[8]+2272392833&4294967295,w=m+(g<<11&4294967295|g>>>21),g=T+(w^m^_)+E[11]+1839030562&4294967295,T=w+(g<<16&4294967295|g>>>16),g=_+(T^w^m)+E[14]+4259657740&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^w)+E[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^T)+E[4]+1272893353&4294967295,w=m+(g<<11&4294967295|g>>>21),g=T+(w^m^_)+E[7]+4139469664&4294967295,T=w+(g<<16&4294967295|g>>>16),g=_+(T^w^m)+E[10]+3200236656&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^w)+E[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^T)+E[0]+3936430074&4294967295,w=m+(g<<11&4294967295|g>>>21),g=T+(w^m^_)+E[3]+3572445317&4294967295,T=w+(g<<16&4294967295|g>>>16),g=_+(T^w^m)+E[6]+76029189&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^w)+E[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^T)+E[12]+3873151461&4294967295,w=m+(g<<11&4294967295|g>>>21),g=T+(w^m^_)+E[15]+530742520&4294967295,T=w+(g<<16&4294967295|g>>>16),g=_+(T^w^m)+E[2]+3299628645&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(T^(_|~w))+E[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~T))+E[7]+1126891415&4294967295,w=m+(g<<10&4294967295|g>>>22),g=T+(m^(w|~_))+E[14]+2878612391&4294967295,T=w+(g<<15&4294967295|g>>>17),g=_+(w^(T|~m))+E[5]+4237533241&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~w))+E[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~T))+E[3]+2399980690&4294967295,w=m+(g<<10&4294967295|g>>>22),g=T+(m^(w|~_))+E[10]+4293915773&4294967295,T=w+(g<<15&4294967295|g>>>17),g=_+(w^(T|~m))+E[1]+2240044497&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~w))+E[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~T))+E[15]+4264355552&4294967295,w=m+(g<<10&4294967295|g>>>22),g=T+(m^(w|~_))+E[6]+2734768916&4294967295,T=w+(g<<15&4294967295|g>>>17),g=_+(w^(T|~m))+E[13]+1309151649&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~w))+E[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~T))+E[11]+3174756917&4294967295,w=m+(g<<10&4294967295|g>>>22),g=T+(m^(w|~_))+E[2]+718787259&4294967295,T=w+(g<<15&4294967295|g>>>17),g=_+(w^(T|~m))+E[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+T&4294967295,v.g[3]=v.g[3]+w&4294967295}n.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var _=m-this.blockSize,E=this.B,T=this.h,w=0;w<m;){if(T==0)for(;w<=_;)s(this,v,w),w+=this.blockSize;if(typeof v=="string"){for(;w<m;)if(E[T++]=v.charCodeAt(w++),T==this.blockSize){s(this,E),T=0;break}}else for(;w<m;)if(E[T++]=v[w++],T==this.blockSize){s(this,E),T=0;break}}this.h=T,this.o+=m},n.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var _=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=_&255,_/=256;for(this.u(v),v=Array(16),m=_=0;4>m;++m)for(var E=0;32>E;E+=8)v[_++]=this.g[m]>>>E&255;return v};function i(v,m){var _=c;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=m(v)}function a(v,m){this.h=m;for(var _=[],E=!0,T=v.length-1;0<=T;T--){var w=v[T]|0;E&&w==m||(_[T]=w,E=!1)}this.g=_}var c={};function l(v){return-128<=v&&128>v?i(v,function(m){return new a([m|0],0>m?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return y;if(0>v)return D(d(-v));for(var m=[],_=1,E=0;v>=_;E++)m[E]=v/_|0,_*=4294967296;return new a(m,0)}function p(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return D(p(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),E=y,T=0;T<v.length;T+=8){var w=Math.min(8,v.length-T),g=parseInt(v.substring(T,T+w),m);8>w?(w=d(Math.pow(m,w)),E=E.j(w).add(d(g))):(E=E.j(_),E=E.add(d(g)))}return E}var y=l(0),A=l(1),S=l(16777216);r=a.prototype,r.m=function(){if(O(this))return-D(this).m();for(var v=0,m=1,_=0;_<this.g.length;_++){var E=this.i(_);v+=(0<=E?E:4294967296+E)*m,m*=4294967296}return v},r.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(P(this))return"0";if(O(this))return"-"+D(this).toString(v);for(var m=d(Math.pow(v,6)),_=this,E="";;){var T=te(_,m).g;_=W(_,T.j(m));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=T,P(_))return w+E;for(;6>w.length;)w="0"+w;E=w+E}},r.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function P(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function O(v){return v.h==-1}r.l=function(v){return v=W(this,v),O(v)?-1:P(v)?0:1};function D(v){for(var m=v.g.length,_=[],E=0;E<m;E++)_[E]=~v.g[E];return new a(_,~v.h).add(A)}r.abs=function(){return O(this)?D(this):this},r.add=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],E=0,T=0;T<=m;T++){var w=E+(this.i(T)&65535)+(v.i(T)&65535),g=(w>>>16)+(this.i(T)>>>16)+(v.i(T)>>>16);E=g>>>16,w&=65535,g&=65535,_[T]=g<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function W(v,m){return v.add(D(m))}r.j=function(v){if(P(this)||P(v))return y;if(O(this))return O(v)?D(this).j(D(v)):D(D(this).j(v));if(O(v))return D(this.j(D(v)));if(0>this.l(S)&&0>v.l(S))return d(this.m()*v.m());for(var m=this.g.length+v.g.length,_=[],E=0;E<2*m;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<v.g.length;T++){var w=this.i(E)>>>16,g=this.i(E)&65535,We=v.i(T)>>>16,yn=v.i(T)&65535;_[2*E+2*T]+=g*yn,G(_,2*E+2*T),_[2*E+2*T+1]+=w*yn,G(_,2*E+2*T+1),_[2*E+2*T+1]+=g*We,G(_,2*E+2*T+1),_[2*E+2*T+2]+=w*We,G(_,2*E+2*T+2)}for(E=0;E<m;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=m;E<2*m;E++)_[E]=0;return new a(_,0)};function G(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function K(v,m){this.g=v,this.h=m}function te(v,m){if(P(m))throw Error("division by zero");if(P(v))return new K(y,y);if(O(v))return m=te(D(v),m),new K(D(m.g),D(m.h));if(O(m))return m=te(v,D(m)),new K(D(m.g),m.h);if(30<v.g.length){if(O(v)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var _=A,E=m;0>=E.l(v);)_=ke(_),E=ke(E);var T=ne(_,1),w=ne(E,1);for(E=ne(E,2),_=ne(_,2);!P(E);){var g=w.add(E);0>=g.l(v)&&(T=T.add(_),w=g),E=ne(E,1),_=ne(_,1)}return m=W(v,T.j(m)),new K(T,m)}for(T=y;0<=v.l(m);){for(_=Math.max(1,Math.floor(v.m()/m.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),w=d(_),g=w.j(m);O(g)||0<g.l(v);)_-=E,w=d(_),g=w.j(m);P(w)&&(w=A),T=T.add(w),v=W(v,g)}return new K(T,v)}r.A=function(v){return te(this,v).h},r.and=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)&v.i(E);return new a(_,this.h&v.h)},r.or=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)|v.i(E);return new a(_,this.h|v.h)},r.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)^v.i(E);return new a(_,this.h^v.h)};function ke(v){for(var m=v.g.length+1,_=[],E=0;E<m;E++)_[E]=v.i(E)<<1|v.i(E-1)>>>31;return new a(_,v.h)}function ne(v,m){var _=m>>5;m%=32;for(var E=v.g.length-_,T=[],w=0;w<E;w++)T[w]=0<m?v.i(w+_)>>>m|v.i(w+_+1)<<32-m:v.i(w+_);return new a(T,v.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,sl=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,_t=a}).apply(typeof yu<"u"?yu:typeof self<"u"?self:typeof window<"u"?window:{});var Lr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var il,xn,ol,$r,ki,al,ul,cl;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Lr=="object"&&Lr];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=t(this);function s(o,u){if(u)e:{var h=n;o=o.split(".");for(var f=0;f<o.length-1;f++){var I=o[f];if(!(I in h))break e;h=h[I]}o=o[o.length-1],f=h[o],u=u(f),u!=f&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var h=0,f=!1,I={next:function(){if(!f&&h<o.length){var R=h++;return{value:u(R,o[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function d(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function p(o,u,h){return o.call.apply(o.bind,arguments)}function y(o,u,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),o.apply(u,I)}}return function(){return o.apply(u,arguments)}}function A(o,u,h){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:y,A.apply(null,arguments)}function S(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function P(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,I,R){for(var k=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)k[Y-2]=arguments[Y];return u.prototype[I].apply(f,k)}}function O(o){const u=o.length;if(0<u){const h=Array(u);for(let f=0;f<u;f++)h[f]=o[f];return h}return[]}function D(o,u){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(l(f)){const I=o.length||0,R=f.length||0;o.length=I+R;for(let k=0;k<R;k++)o[I+k]=f[k]}else o.push(f)}}class W{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function G(o){return/^[\s\xa0]*$/.test(o)}function K(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function te(o){return te[" "](o),o}te[" "]=function(){};var ke=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function ne(o,u,h){for(const f in o)u.call(h,o[f],f,o)}function v(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function m(o){const u={};for(const h in o)u[h]=o[h];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,u){let h,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(h in f)o[h]=f[h];for(let R=0;R<_.length;R++)h=_[R],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function T(o){var u=1;o=o.split(":");const h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function w(o){c.setTimeout(()=>{throw o},0)}function g(){var o=Fs;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class We{constructor(){this.h=this.g=null}add(u,h){const f=yn.get();f.set(u,h),this.h?this.h.next=f:this.g=f,this.h=f}}var yn=new W(()=>new wh,o=>o.reset());class wh{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let En,vn=!1,Fs=new We,Wo=()=>{const o=c.Promise.resolve(void 0);En=()=>{o.then(Ah)}};var Ah=()=>{for(var o;o=g();){try{o.h.call(o.g)}catch(h){w(h)}var u=yn;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}vn=!1};function rt(){this.s=this.s,this.C=this.C}rt.prototype.s=!1,rt.prototype.ma=function(){this.s||(this.s=!0,this.N())},rt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Rh=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return o}();function Tn(o,u){if(pe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ke){e:{try{te(u.nodeName);var I=!0;break e}catch{}I=!1}I||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Sh[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Tn.aa.h.call(this)}}P(Tn,pe);var Sh={2:"touch",3:"pen",4:"mouse"};Tn.prototype.h=function(){Tn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var mr="closure_listenable_"+(1e6*Math.random()|0),bh=0;function Ch(o,u,h,f,I){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!f,this.ha=I,this.key=++bh,this.da=this.fa=!1}function gr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function _r(o){this.src=o,this.g={},this.h=0}_r.prototype.add=function(o,u,h,f,I){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var k=Bs(o,u,f,I);return-1<k?(u=o[k],h||(u.fa=!1)):(u=new Ch(u,this.src,R,!!f,I),u.fa=h,o.push(u)),u};function Us(o,u){var h=u.type;if(h in o.g){var f=o.g[h],I=Array.prototype.indexOf.call(f,u,void 0),R;(R=0<=I)&&Array.prototype.splice.call(f,I,1),R&&(gr(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Bs(o,u,h,f){for(var I=0;I<o.length;++I){var R=o[I];if(!R.da&&R.listener==u&&R.capture==!!h&&R.ha==f)return I}return-1}var qs="closure_lm_"+(1e6*Math.random()|0),js={};function $o(o,u,h,f,I){if(Array.isArray(u)){for(var R=0;R<u.length;R++)$o(o,u[R],h,f,I);return null}return h=Go(h),o&&o[mr]?o.K(u,h,d(f)?!!f.capture:!1,I):Ph(o,u,h,!1,f,I)}function Ph(o,u,h,f,I,R){if(!u)throw Error("Invalid event type");var k=d(I)?!!I.capture:!!I,Y=$s(o);if(Y||(o[qs]=Y=new _r(o)),h=Y.add(u,h,f,k,R),h.proxy)return h;if(f=kh(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)Rh||(I=k),I===void 0&&(I=!1),o.addEventListener(u.toString(),f,I);else if(o.attachEvent)o.attachEvent(Ho(u.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function kh(){function o(h){return u.call(o.src,o.listener,h)}const u=Dh;return o}function zo(o,u,h,f,I){if(Array.isArray(u))for(var R=0;R<u.length;R++)zo(o,u[R],h,f,I);else f=d(f)?!!f.capture:!!f,h=Go(h),o&&o[mr]?(o=o.i,u=String(u).toString(),u in o.g&&(R=o.g[u],h=Bs(R,h,f,I),-1<h&&(gr(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete o.g[u],o.h--)))):o&&(o=$s(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Bs(u,h,f,I)),(h=-1<o?u[o]:null)&&Ws(h))}function Ws(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[mr])Us(u.i,o);else{var h=o.type,f=o.proxy;u.removeEventListener?u.removeEventListener(h,f,o.capture):u.detachEvent?u.detachEvent(Ho(h),f):u.addListener&&u.removeListener&&u.removeListener(f),(h=$s(u))?(Us(h,o),h.h==0&&(h.src=null,u[qs]=null)):gr(o)}}}function Ho(o){return o in js?js[o]:js[o]="on"+o}function Dh(o,u){if(o.da)o=!0;else{u=new Tn(u,this);var h=o.listener,f=o.ha||o.src;o.fa&&Ws(o),o=h.call(f,u)}return o}function $s(o){return o=o[qs],o instanceof _r?o:null}var zs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Go(o){return typeof o=="function"?o:(o[zs]||(o[zs]=function(u){return o.handleEvent(u)}),o[zs])}function me(){rt.call(this),this.i=new _r(this),this.M=this,this.F=null}P(me,rt),me.prototype[mr]=!0,me.prototype.removeEventListener=function(o,u,h,f){zo(this,o,u,h,f)};function Ie(o,u){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=u.type||u,typeof u=="string")u=new pe(u,o);else if(u instanceof pe)u.target=u.target||o;else{var I=u;u=new pe(f,o),E(u,I)}if(I=!0,h)for(var R=h.length-1;0<=R;R--){var k=u.g=h[R];I=yr(k,f,!0,u)&&I}if(k=u.g=o,I=yr(k,f,!0,u)&&I,I=yr(k,f,!1,u)&&I,h)for(R=0;R<h.length;R++)k=u.g=h[R],I=yr(k,f,!1,u)&&I}me.prototype.N=function(){if(me.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],f=0;f<h.length;f++)gr(h[f]);delete o.g[u],o.h--}}this.F=null},me.prototype.K=function(o,u,h,f){return this.i.add(String(o),u,!1,h,f)},me.prototype.L=function(o,u,h,f){return this.i.add(String(o),u,!0,h,f)};function yr(o,u,h,f){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var I=!0,R=0;R<u.length;++R){var k=u[R];if(k&&!k.da&&k.capture==h){var Y=k.listener,le=k.ha||k.src;k.fa&&Us(o.i,k),I=Y.call(le,f)!==!1&&I}}return I&&!f.defaultPrevented}function Ko(o,u,h){if(typeof o=="function")h&&(o=A(o,h));else if(o&&typeof o.handleEvent=="function")o=A(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Qo(o){o.g=Ko(()=>{o.g=null,o.i&&(o.i=!1,Qo(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Nh extends rt{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Qo(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function In(o){rt.call(this),this.h=o,this.g={}}P(In,rt);var Yo=[];function Jo(o){ne(o.g,function(u,h){this.g.hasOwnProperty(h)&&Ws(u)},o),o.g={}}In.prototype.N=function(){In.aa.N.call(this),Jo(this)},In.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hs=c.JSON.stringify,Vh=c.JSON.parse,Oh=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Gs(){}Gs.prototype.h=null;function Xo(o){return o.h||(o.h=o.i())}function Zo(){}var wn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ks(){pe.call(this,"d")}P(Ks,pe);function Qs(){pe.call(this,"c")}P(Qs,pe);var Pt={},ea=null;function Er(){return ea=ea||new me}Pt.La="serverreachability";function ta(o){pe.call(this,Pt.La,o)}P(ta,pe);function An(o){const u=Er();Ie(u,new ta(u))}Pt.STAT_EVENT="statevent";function na(o,u){pe.call(this,Pt.STAT_EVENT,o),this.stat=u}P(na,pe);function we(o){const u=Er();Ie(u,new na(u,o))}Pt.Ma="timingevent";function ra(o,u){pe.call(this,Pt.Ma,o),this.size=u}P(ra,pe);function Rn(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function Sn(){this.g=!0}Sn.prototype.xa=function(){this.g=!1};function Lh(o,u,h,f,I,R){o.info(function(){if(o.g)if(R)for(var k="",Y=R.split("&"),le=0;le<Y.length;le++){var z=Y[le].split("=");if(1<z.length){var ge=z[0];z=z[1];var _e=ge.split("_");k=2<=_e.length&&_e[1]=="type"?k+(ge+"="+z+"&"):k+(ge+"=redacted&")}}else k=null;else k=R;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+u+`
`+h+`
`+k})}function Mh(o,u,h,f,I,R,k){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+u+`
`+h+`
`+R+" "+k})}function Wt(o,u,h,f){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Fh(o,h)+(f?" "+f:"")})}function xh(o,u){o.info(function(){return"TIMEOUT: "+u})}Sn.prototype.info=function(){};function Fh(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var k=1;k<I.length;k++)I[k]=""}}}}return Hs(h)}catch{return u}}var vr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},sa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ys;function Tr(){}P(Tr,Gs),Tr.prototype.g=function(){return new XMLHttpRequest},Tr.prototype.i=function(){return{}},Ys=new Tr;function st(o,u,h,f){this.j=o,this.i=u,this.l=h,this.R=f||1,this.U=new In(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ia}function ia(){this.i=null,this.g="",this.h=!1}var oa={},Js={};function Xs(o,u,h){o.L=1,o.v=Rr($e(u)),o.m=h,o.P=!0,aa(o,null)}function aa(o,u){o.F=Date.now(),Ir(o),o.A=$e(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),Ta(h.i,"t",f),o.C=0,h=o.j.J,o.h=new ia,o.g=Ua(o.j,h?u:null,!o.m),0<o.O&&(o.M=new Nh(A(o.Y,o,o.g),o.O)),u=o.U,h=o.g,f=o.ca;var I="readystatechange";Array.isArray(I)||(I&&(Yo[0]=I.toString()),I=Yo);for(var R=0;R<I.length;R++){var k=$o(h,I[R],f||u.handleEvent,!1,u.h||u);if(!k)break;u.g[k.key]=k}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),An(),Lh(o.i,o.u,o.A,o.l,o.R,o.m)}st.prototype.ca=function(o){o=o.target;const u=this.M;u&&ze(o)==3?u.j():this.Y(o)},st.prototype.Y=function(o){try{if(o==this.g)e:{const _e=ze(this.g);var u=this.g.Ba();const Ht=this.g.Z();if(!(3>_e)&&(_e!=3||this.g&&(this.h.h||this.g.oa()||Ca(this.g)))){this.J||_e!=4||u==7||(u==8||0>=Ht?An(3):An(2)),Zs(this);var h=this.g.Z();this.X=h;t:if(ua(this)){var f=Ca(this.g);o="";var I=f.length,R=ze(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kt(this),bn(this);var k="";break t}this.h.i=new c.TextDecoder}for(u=0;u<I;u++)this.h.h=!0,o+=this.h.i.decode(f[u],{stream:!(R&&u==I-1)});f.length=0,this.h.g+=o,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=h==200,Mh(this.i,this.u,this.A,this.l,this.R,_e,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Y,le=this.g;if((Y=le.g?le.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(Y)){var z=Y;break t}}z=null}if(h=z)Wt(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ei(this,h);else{this.o=!1,this.s=3,we(12),kt(this),bn(this);break e}}if(this.P){h=!0;let Ne;for(;!this.J&&this.C<k.length;)if(Ne=Uh(this,k),Ne==Js){_e==4&&(this.s=4,we(14),h=!1),Wt(this.i,this.l,null,"[Incomplete Response]");break}else if(Ne==oa){this.s=4,we(15),Wt(this.i,this.l,k,"[Invalid Chunk]"),h=!1;break}else Wt(this.i,this.l,Ne,null),ei(this,Ne);if(ua(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||k.length!=0||this.h.h||(this.s=1,we(16),h=!1),this.o=this.o&&h,!h)Wt(this.i,this.l,k,"[Invalid Chunked Response]"),kt(this),bn(this);else if(0<k.length&&!this.W){this.W=!0;var ge=this.j;ge.g==this&&ge.ba&&!ge.M&&(ge.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),oi(ge),ge.M=!0,we(11))}}else Wt(this.i,this.l,k,null),ei(this,k);_e==4&&kt(this),this.o&&!this.J&&(_e==4?La(this.j,this):(this.o=!1,Ir(this)))}else nd(this.g),h==400&&0<k.indexOf("Unknown SID")?(this.s=3,we(12)):(this.s=0,we(13)),kt(this),bn(this)}}}catch{}finally{}};function ua(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Uh(o,u){var h=o.C,f=u.indexOf(`
`,h);return f==-1?Js:(h=Number(u.substring(h,f)),isNaN(h)?oa:(f+=1,f+h>u.length?Js:(u=u.slice(f,f+h),o.C=f+h,u)))}st.prototype.cancel=function(){this.J=!0,kt(this)};function Ir(o){o.S=Date.now()+o.I,ca(o,o.I)}function ca(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Rn(A(o.ba,o),u)}function Zs(o){o.B&&(c.clearTimeout(o.B),o.B=null)}st.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(xh(this.i,this.A),this.L!=2&&(An(),we(17)),kt(this),this.s=2,bn(this)):ca(this,this.S-o)};function bn(o){o.j.G==0||o.J||La(o.j,o)}function kt(o){Zs(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Jo(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function ei(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||ti(h.h,o))){if(!o.K&&ti(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Dr(h),Pr(h);else break e;ii(h),we(18)}}else h.za=I[1],0<h.za-h.T&&37500>I[2]&&h.F&&h.v==0&&!h.C&&(h.C=Rn(A(h.Za,h),6e3));if(1>=da(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Nt(h,11)}else if((o.K||h.g==o)&&Dr(h),!G(u))for(I=h.Da.g.parse(u),u=0;u<I.length;u++){let z=I[u];if(h.T=z[0],z=z[1],h.G==2)if(z[0]=="c"){h.K=z[1],h.ia=z[2];const ge=z[3];ge!=null&&(h.la=ge,h.j.info("VER="+h.la));const _e=z[4];_e!=null&&(h.Aa=_e,h.j.info("SVER="+h.Aa));const Ht=z[5];Ht!=null&&typeof Ht=="number"&&0<Ht&&(f=1.5*Ht,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Ne=o.g;if(Ne){const Vr=Ne.g?Ne.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vr){var R=f.h;R.g||Vr.indexOf("spdy")==-1&&Vr.indexOf("quic")==-1&&Vr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ni(R,R.h),R.h=null))}if(f.D){const ai=Ne.g?Ne.g.getResponseHeader("X-HTTP-Session-Id"):null;ai&&(f.ya=ai,J(f.I,f.D,ai))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var k=o;if(f.qa=Fa(f,f.J?f.ia:null,f.W),k.K){fa(f.h,k);var Y=k,le=f.L;le&&(Y.I=le),Y.B&&(Zs(Y),Ir(Y)),f.g=k}else Va(f);0<h.i.length&&kr(h)}else z[0]!="stop"&&z[0]!="close"||Nt(h,7);else h.G==3&&(z[0]=="stop"||z[0]=="close"?z[0]=="stop"?Nt(h,7):si(h):z[0]!="noop"&&h.l&&h.l.ta(z),h.v=0)}}An(4)}catch{}}var Bh=class{constructor(o,u){this.g=o,this.map=u}};function la(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ha(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function da(o){return o.h?1:o.g?o.g.size:0}function ti(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ni(o,u){o.g?o.g.add(u):o.h=u}function fa(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}la.prototype.cancel=function(){if(this.i=pa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function pa(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.D);return u}return O(o.i)}function qh(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],h=o.length,f=0;f<h;f++)u.push(o[f]);return u}u=[],h=0;for(f in o)u[h++]=o[f];return u}function jh(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(const f in o)u[h++]=f;return u}}}function ma(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=jh(o),f=qh(o),I=f.length,R=0;R<I;R++)u.call(void 0,f[R],h&&h[R],o)}var ga=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wh(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),I=null;if(0<=f){var R=o[h].substring(0,f);I=o[h].substring(f+1)}else R=o[h];u(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function Dt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Dt){this.h=o.h,wr(this,o.j),this.o=o.o,this.g=o.g,Ar(this,o.s),this.l=o.l;var u=o.i,h=new kn;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),_a(this,h),this.m=o.m}else o&&(u=String(o).match(ga))?(this.h=!1,wr(this,u[1]||"",!0),this.o=Cn(u[2]||""),this.g=Cn(u[3]||"",!0),Ar(this,u[4]),this.l=Cn(u[5]||"",!0),_a(this,u[6]||"",!0),this.m=Cn(u[7]||"")):(this.h=!1,this.i=new kn(null,this.h))}Dt.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Pn(u,ya,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Pn(u,ya,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Pn(h,h.charAt(0)=="/"?Hh:zh,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Pn(h,Kh)),o.join("")};function $e(o){return new Dt(o)}function wr(o,u,h){o.j=h?Cn(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ar(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function _a(o,u,h){u instanceof kn?(o.i=u,Qh(o.i,o.h)):(h||(u=Pn(u,Gh)),o.i=new kn(u,o.h))}function J(o,u,h){o.i.set(u,h)}function Rr(o){return J(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Cn(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Pn(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,$h),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function $h(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ya=/[#\/\?@]/g,zh=/[#\?:]/g,Hh=/[#\?]/g,Gh=/[#\?@]/g,Kh=/#/g;function kn(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function it(o){o.g||(o.g=new Map,o.h=0,o.i&&Wh(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}r=kn.prototype,r.add=function(o,u){it(this),this.i=null,o=$t(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function Ea(o,u){it(o),u=$t(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function va(o,u){return it(o),u=$t(o,u),o.g.has(u)}r.forEach=function(o,u){it(this),this.g.forEach(function(h,f){h.forEach(function(I){o.call(u,I,f,this)},this)},this)},r.na=function(){it(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let f=0;f<u.length;f++){const I=o[f];for(let R=0;R<I.length;R++)h.push(u[f])}return h},r.V=function(o){it(this);let u=[];if(typeof o=="string")va(this,o)&&(u=u.concat(this.g.get($t(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},r.set=function(o,u){return it(this),this.i=null,o=$t(this,o),va(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},r.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Ta(o,u,h){Ea(o,u),0<h.length&&(o.i=null,o.g.set($t(o,u),O(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var f=u[h];const R=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var I=R;k[f]!==""&&(I+="="+encodeURIComponent(String(k[f]))),o.push(I)}}return this.i=o.join("&")};function $t(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Qh(o,u){u&&!o.j&&(it(o),o.i=null,o.g.forEach(function(h,f){var I=f.toLowerCase();f!=I&&(Ea(this,f),Ta(this,I,h))},o)),o.j=u}function Yh(o,u){const h=new Sn;if(c.Image){const f=new Image;f.onload=S(ot,h,"TestLoadImage: loaded",!0,u,f),f.onerror=S(ot,h,"TestLoadImage: error",!1,u,f),f.onabort=S(ot,h,"TestLoadImage: abort",!1,u,f),f.ontimeout=S(ot,h,"TestLoadImage: timeout",!1,u,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else u(!1)}function Jh(o,u){const h=new Sn,f=new AbortController,I=setTimeout(()=>{f.abort(),ot(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:f.signal}).then(R=>{clearTimeout(I),R.ok?ot(h,"TestPingServer: ok",!0,u):ot(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(I),ot(h,"TestPingServer: error",!1,u)})}function ot(o,u,h,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(h)}catch{}}function Xh(){this.g=new Oh}function Zh(o,u,h){const f=h||"";try{ma(o,function(I,R){let k=I;d(I)&&(k=Hs(I)),u.push(f+R+"="+encodeURIComponent(k))})}catch(I){throw u.push(f+"type="+encodeURIComponent("_badmap")),I}}function Sr(o){this.l=o.Ub||null,this.j=o.eb||!1}P(Sr,Gs),Sr.prototype.g=function(){return new br(this.l,this.j)},Sr.prototype.i=function(o){return function(){return o}}({});function br(o,u){me.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(br,me),r=br.prototype,r.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Nn(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dn(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Nn(this)),this.g&&(this.readyState=3,Nn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ia(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ia(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Dn(this):Nn(this),this.readyState==3&&Ia(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,Dn(this))},r.Qa=function(o){this.g&&(this.response=o,Dn(this))},r.ga=function(){this.g&&Dn(this)};function Dn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Nn(o)}r.setRequestHeader=function(o,u){this.u.append(o,u)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function Nn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(br.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function wa(o){let u="";return ne(o,function(h,f){u+=f,u+=":",u+=h,u+=`\r
`}),u}function ri(o,u,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=wa(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):J(o,u,h))}function ee(o){me.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(ee,me);var ed=/^https?$/i,td=["POST","PUT"];r=ee.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,u,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ys.g(),this.v=this.o?Xo(this.o):Xo(Ys),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(R){Aa(this,R);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)h.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())h.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),I=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(td,u,void 0))||f||I||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,k]of h)this.g.setRequestHeader(R,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ba(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){Aa(this,R)}};function Aa(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Ra(o),Cr(o)}function Ra(o){o.A||(o.A=!0,Ie(o,"complete"),Ie(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ie(this,"complete"),Ie(this,"abort"),Cr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cr(this,!0)),ee.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Sa(this):this.bb())},r.bb=function(){Sa(this)};function Sa(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ze(o)!=4||o.Z()!=2)){if(o.u&&ze(o)==4)Ko(o.Ea,0,o);else if(Ie(o,"readystatechange"),ze(o)==4){o.h=!1;try{const k=o.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var f;if(f=k===0){var I=String(o.D).match(ga)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),f=!ed.test(I?I.toLowerCase():"")}h=f}if(h)Ie(o,"complete"),Ie(o,"success");else{o.m=6;try{var R=2<ze(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",Ra(o)}}finally{Cr(o)}}}}function Cr(o,u){if(o.g){ba(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Ie(o,"ready");try{h.onreadystatechange=f}catch{}}}function ba(o){o.I&&(c.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function ze(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<ze(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Vh(u)}};function Ca(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function nd(o){const u={};o=(o.g&&2<=ze(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(G(o[f]))continue;var h=T(o[f]);const I=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=u[I]||[];u[I]=R,R.push(h)}v(u,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vn(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function Pa(o){this.Aa=0,this.i=[],this.j=new Sn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vn("baseRetryDelayMs",5e3,o),this.cb=Vn("retryDelaySeedMs",1e4,o),this.Wa=Vn("forwardChannelMaxRetries",2,o),this.wa=Vn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new la(o&&o.concurrentRequestLimit),this.Da=new Xh,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Pa.prototype,r.la=8,r.G=1,r.connect=function(o,u,h,f){we(0),this.W=o,this.H=u||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Fa(this,null,this.W),kr(this)};function si(o){if(ka(o),o.G==3){var u=o.U++,h=$e(o.I);if(J(h,"SID",o.K),J(h,"RID",u),J(h,"TYPE","terminate"),On(o,h),u=new st(o,o.j,u),u.L=2,u.v=Rr($e(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=Ua(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ir(u)}xa(o)}function Pr(o){o.g&&(oi(o),o.g.cancel(),o.g=null)}function ka(o){Pr(o),o.u&&(c.clearTimeout(o.u),o.u=null),Dr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function kr(o){if(!ha(o.h)&&!o.s){o.s=!0;var u=o.Ga;En||Wo(),vn||(En(),vn=!0),Fs.add(u,o),o.B=0}}function rd(o,u){return da(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Rn(A(o.Ga,o,u),Ma(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const I=new st(this,this.j,o);let R=this.o;if(this.S&&(R?(R=m(R),E(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=Na(this,I,u),h=$e(this.I),J(h,"RID",o),J(h,"CVER",22),this.D&&J(h,"X-HTTP-Session-Id",this.D),On(this,h),R&&(this.O?u="headers="+encodeURIComponent(String(wa(R)))+"&"+u:this.m&&ri(h,this.m,R)),ni(this.h,I),this.Ua&&J(h,"TYPE","init"),this.P?(J(h,"$req",u),J(h,"SID","null"),I.T=!0,Xs(I,h,null)):Xs(I,h,u),this.G=2}}else this.G==3&&(o?Da(this,o):this.i.length==0||ha(this.h)||Da(this))};function Da(o,u){var h;u?h=u.l:h=o.U++;const f=$e(o.I);J(f,"SID",o.K),J(f,"RID",h),J(f,"AID",o.T),On(o,f),o.m&&o.o&&ri(f,o.m,o.o),h=new st(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Na(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ni(o.h,h),Xs(h,f,u)}function On(o,u){o.H&&ne(o.H,function(h,f){J(u,f,h)}),o.l&&ma({},function(h,f){J(u,f,h)})}function Na(o,u,h){h=Math.min(o.i.length,h);var f=o.l?A(o.l.Na,o.l,o):null;e:{var I=o.i;let R=-1;for(;;){const k=["count="+h];R==-1?0<h?(R=I[0].g,k.push("ofs="+R)):R=0:k.push("ofs="+R);let Y=!0;for(let le=0;le<h;le++){let z=I[le].g;const ge=I[le].map;if(z-=R,0>z)R=Math.max(0,I[le].g-100),Y=!1;else try{Zh(ge,k,"req"+z+"_")}catch{f&&f(ge)}}if(Y){f=k.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,f}function Va(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;En||Wo(),vn||(En(),vn=!0),Fs.add(u,o),o.v=0}}function ii(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Rn(A(o.Fa,o),Ma(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,Oa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Rn(A(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,we(10),Pr(this),Oa(this))};function oi(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Oa(o){o.g=new st(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=$e(o.qa);J(u,"RID","rpc"),J(u,"SID",o.K),J(u,"AID",o.T),J(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&J(u,"TO",o.ja),J(u,"TYPE","xmlhttp"),On(o,u),o.m&&o.o&&ri(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Rr($e(u)),h.m=null,h.P=!0,aa(h,o)}r.Za=function(){this.C!=null&&(this.C=null,Pr(this),ii(this),we(19))};function Dr(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function La(o,u){var h=null;if(o.g==u){Dr(o),oi(o),o.g=null;var f=2}else if(ti(o.h,u))h=u.D,fa(o.h,u),f=1;else return;if(o.G!=0){if(u.o)if(f==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var I=o.B;f=Er(),Ie(f,new ra(f,h)),kr(o)}else Va(o);else if(I=u.s,I==3||I==0&&0<u.X||!(f==1&&rd(o,u)||f==2&&ii(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),I){case 1:Nt(o,5);break;case 4:Nt(o,10);break;case 3:Nt(o,6);break;default:Nt(o,2)}}}function Ma(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function Nt(o,u){if(o.j.info("Error code "+u),u==2){var h=A(o.fb,o),f=o.Xa;const I=!f;f=new Dt(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||wr(f,"https"),Rr(f),I?Yh(f.toString(),h):Jh(f.toString(),h)}else we(2);o.G=0,o.l&&o.l.sa(u),xa(o),ka(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),we(2)):(this.j.info("Failed to ping google.com"),we(1))};function xa(o){if(o.G=0,o.ka=[],o.l){const u=pa(o.h);(u.length!=0||o.i.length!=0)&&(D(o.ka,u),D(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function Fa(o,u,h){var f=h instanceof Dt?$e(h):new Dt(h);if(f.g!="")u&&(f.g=u+"."+f.g),Ar(f,f.s);else{var I=c.location;f=I.protocol,u=u?u+"."+I.hostname:I.hostname,I=+I.port;var R=new Dt(null);f&&wr(R,f),u&&(R.g=u),I&&Ar(R,I),h&&(R.l=h),f=R}return h=o.D,u=o.ya,h&&u&&J(f,h,u),J(f,"VER",o.la),On(o,f),f}function Ua(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new ee(new Sr({eb:h})):new ee(o.pa),u.Ha(o.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ba(){}r=Ba.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Nr(){}Nr.prototype.g=function(o,u){return new be(o,u)};function be(o,u){me.call(this),this.g=new Pa(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!G(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!G(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new zt(this)}P(be,me),be.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},be.prototype.close=function(){si(this.g)},be.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Hs(o),o=h);u.i.push(new Bh(u.Ya++,o)),u.G==3&&kr(u)},be.prototype.N=function(){this.g.l=null,delete this.j,si(this.g),delete this.g,be.aa.N.call(this)};function qa(o){Ks.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}P(qa,Ks);function ja(){Qs.call(this),this.status=1}P(ja,Qs);function zt(o){this.g=o}P(zt,Ba),zt.prototype.ua=function(){Ie(this.g,"a")},zt.prototype.ta=function(o){Ie(this.g,new qa(o))},zt.prototype.sa=function(o){Ie(this.g,new ja)},zt.prototype.ra=function(){Ie(this.g,"b")},Nr.prototype.createWebChannel=Nr.prototype.g,be.prototype.send=be.prototype.o,be.prototype.open=be.prototype.m,be.prototype.close=be.prototype.close,cl=function(){return new Nr},ul=function(){return Er()},al=Pt,ki={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vr.NO_ERROR=0,vr.TIMEOUT=8,vr.HTTP_ERROR=6,$r=vr,sa.COMPLETE="complete",ol=sa,Zo.EventType=wn,wn.OPEN="a",wn.CLOSE="b",wn.ERROR="c",wn.MESSAGE="d",me.prototype.listen=me.prototype.K,xn=Zo,ee.prototype.listenOnce=ee.prototype.L,ee.prototype.getLastError=ee.prototype.Ka,ee.prototype.getLastErrorCode=ee.prototype.Ba,ee.prototype.getStatus=ee.prototype.Z,ee.prototype.getResponseJson=ee.prototype.Oa,ee.prototype.getResponseText=ee.prototype.oa,ee.prototype.send=ee.prototype.ea,ee.prototype.setWithCredentials=ee.prototype.Ha,il=ee}).apply(typeof Lr<"u"?Lr:typeof self<"u"?self:typeof window<"u"?window:{});const Eu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ee.UNAUTHENTICATED=new Ee(null),Ee.GOOGLE_CREDENTIALS=new Ee("google-credentials-uid"),Ee.FIRST_PARTY=new Ee("first-party-uid"),Ee.MOCK_USER=new Ee("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new Hi("@firebase/firestore");function Gt(){return Ft.logLevel}function N(r,...e){if(Ft.logLevel<=B.DEBUG){const t=e.map(so);Ft.debug(`Firestore (${pn}): ${r}`,...t)}}function et(r,...e){if(Ft.logLevel<=B.ERROR){const t=e.map(so);Ft.error(`Firestore (${pn}): ${r}`,...t)}}function sn(r,...e){if(Ft.logLevel<=B.WARN){const t=e.map(so);Ft.warn(`Firestore (${pn}): ${r}`,...t)}}function so(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(r="Unexpected state"){const e=`FIRESTORE (${pn}) INTERNAL ASSERTION FAILED: `+r;throw et(e),new Error(e)}function Q(r,e){r||x()}function U(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends nt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Zm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ee.UNAUTHENTICATED))}shutdown(){}}class eg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class tg{constructor(e){this.t=e,this.currentUser=Ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.o===void 0);let n=this.i;const s=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let i=new Je;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Je,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Je)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Q(typeof n.accessToken=="string"),new ll(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string"),new Ee(e)}}class ng{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Ee.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class rg{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new ng(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ig{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Q(this.o===void 0);const n=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Q(typeof t.token=="string"),this.R=t.token,new sg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const s=og(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%e.length))}return n}}function j(r,e){return r<e?-1:r>e?1:0}function on(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ae(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new V(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static fromTimestamp(e){return new F(e)}static min(){return new F(new ae(0,0))}static max(){return new F(new ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t,n){t===void 0?t=0:t>e.length&&x(),n===void 0?n=e.length-t:n>e.length-t&&x(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Me.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Me?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=Me.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return Math.sign(e.length-t.length)}static compareSegments(e,t){const n=Me.isNumericId(e),s=Me.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?Me.extractNumericId(e).compare(Me.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _t.fromString(e.substring(4,e.length-2))}}class X extends Me{construct(e,t,n){return new X(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new V(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new X(t)}static emptyPath(){return new X([])}}const ag=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class de extends Me{construct(e,t,n){return new de(e,t,n)}static isValidIdentifier(e){return ag.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),de.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new de(["__name__"])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new V(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new V(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(n+=c,s++):(i(),s++)}if(i(),a)throw new V(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new de(t)}static emptyPath(){return new de([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(X.fromString(e))}static fromName(e){return new L(X.fromString(e).popFirst(5))}static empty(){return new L(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&X.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return X.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new X(e.slice()))}}function ug(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=F.fromTimestamp(n===1e9?new ae(t+1,0):new ae(t,n));return new Et(s,L.empty(),e)}function cg(r){return new Et(r.readTime,r.key,-1)}class Et{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Et(F.min(),L.empty(),-1)}static max(){return new Et(F.max(),L.empty(),-1)}}function lg(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(r.documentKey,e.documentKey),t!==0?t:j(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(r){if(r.code!==b.FAILED_PRECONDITION||r.message!==hg)throw r;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):C.reject(t)}static resolve(e){return new C((t,n)=>{t(e)})}static reject(e){return new C((t,n)=>{n(e)})}static waitFor(e){return new C((t,n)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},l=>n(l))}),a=!0,i===s&&t()})}static or(e){let t=C.resolve(!1);for(const n of e)t=t.next(s=>s?C.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new C((n,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const d=l;t(e[d]).next(p=>{a[d]=p,++c,c===i&&n(a)},p=>s(p))}})}static doWhile(e,t){return new C((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}function fg(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function gn(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Es.oe=-1;function vs(r){return r==null}function is(r){return r===0&&1/r==-1/0}function pg(r){return typeof r=="number"&&Number.isInteger(r)&&!is(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=vu(e)),e=gg(r.get(t),e);return vu(e)}function gg(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function vu(r){return r+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function bt(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function dl(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t){this.comparator=e,this.root=t||he.EMPTY}insert(e,t){return new Z(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,he.BLACK,null,null))}remove(e){return new Z(this.comparator,this.root.remove(e,this.comparator).copy(null,null,he.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mr(this.root,e,this.comparator,!0)}}class Mr{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class he{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??he.RED,this.left=s??he.EMPTY,this.right=i??he.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new he(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return he.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return he.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const e=this.left.check();if(e!==this.right.check())throw x();return e+(this.isRed()?0:1)}}he.EMPTY=null,he.RED=!0,he.BLACK=!1;he.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(e,t,n,s,i){return this}insert(e,t,n){return new he(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.comparator=e,this.data=new Z(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Iu(this.data.getIterator())}getIteratorFrom(e){return new Iu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ue)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ue(this.comparator);return t.data=e,t}}class Iu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.fields=e,e.sort(de.comparator)}static empty(){return new Ce([])}unionWith(e){let t=new ue(de.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ce(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return on(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new fl("Invalid base64 string: "+i):i}}(e);return new fe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new fe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}fe.EMPTY_BYTE_STRING=new fe("");const _g=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vt(r){if(Q(!!r),typeof r=="string"){let e=0;const t=_g.exec(r);if(Q(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:re(r.seconds),nanos:re(r.nanos)}}function re(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Tt(r){return typeof r=="string"?fe.fromBase64String(r):fe.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(r){var e,t;return((t=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ts(r){const e=r.mapValue.fields.__previous_value__;return io(e)?Ts(e):e}function Yn(r){const e=vt(r.mapValue.fields.__local_write_time__.timestampValue);return new ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,t,n,s,i,a,c,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d}}class Jn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Jn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Jn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function It(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?io(r)?4:vg(r)?9007199254740991:Eg(r)?10:11:x()}function je(r,e){if(r===e)return!0;const t=It(r);if(t!==It(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Yn(r).isEqual(Yn(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=vt(s.timestampValue),c=vt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,i){return Tt(s.bytesValue).isEqual(Tt(i.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,i){return re(s.geoPointValue.latitude)===re(i.geoPointValue.latitude)&&re(s.geoPointValue.longitude)===re(i.geoPointValue.longitude)}(r,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return re(s.integerValue)===re(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=re(s.doubleValue),c=re(i.doubleValue);return a===c?is(a)===is(c):isNaN(a)&&isNaN(c)}return!1}(r,e);case 9:return on(r.arrayValue.values||[],e.arrayValue.values||[],je);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Tu(a)!==Tu(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!je(a[l],c[l])))return!1;return!0}(r,e);default:return x()}}function Xn(r,e){return(r.values||[]).find(t=>je(t,e))!==void 0}function an(r,e){if(r===e)return 0;const t=It(r),n=It(e);if(t!==n)return j(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return j(r.booleanValue,e.booleanValue);case 2:return function(i,a){const c=re(i.integerValue||i.doubleValue),l=re(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(r,e);case 3:return wu(r.timestampValue,e.timestampValue);case 4:return wu(Yn(r),Yn(e));case 5:return j(r.stringValue,e.stringValue);case 6:return function(i,a){const c=Tt(i),l=Tt(a);return c.compareTo(l)}(r.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let d=0;d<c.length&&d<l.length;d++){const p=j(c[d],l[d]);if(p!==0)return p}return j(c.length,l.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,a){const c=j(re(i.latitude),re(a.latitude));return c!==0?c:j(re(i.longitude),re(a.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Au(r.arrayValue,e.arrayValue);case 10:return function(i,a){var c,l,d,p;const y=i.fields||{},A=a.fields||{},S=(c=y.value)===null||c===void 0?void 0:c.arrayValue,P=(l=A.value)===null||l===void 0?void 0:l.arrayValue,O=j(((d=S?.values)===null||d===void 0?void 0:d.length)||0,((p=P?.values)===null||p===void 0?void 0:p.length)||0);return O!==0?O:Au(S,P)}(r.mapValue,e.mapValue);case 11:return function(i,a){if(i===xr.mapValue&&a===xr.mapValue)return 0;if(i===xr.mapValue)return 1;if(a===xr.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),d=a.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let y=0;y<l.length&&y<p.length;++y){const A=j(l[y],p[y]);if(A!==0)return A;const S=an(c[l[y]],d[p[y]]);if(S!==0)return S}return j(l.length,p.length)}(r.mapValue,e.mapValue);default:throw x()}}function wu(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return j(r,e);const t=vt(r),n=vt(e),s=j(t.seconds,n.seconds);return s!==0?s:j(t.nanos,n.nanos)}function Au(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=an(t[s],n[s]);if(i)return i}return j(t.length,n.length)}function un(r){return Di(r)}function Di(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=vt(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Tt(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return L.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=Di(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${Di(t.fields[a])}`;return s+"}"}(r.mapValue):x()}function zr(r){switch(It(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ts(r);return e?16+zr(e):16;case 5:return 2*r.stringValue.length;case 6:return Tt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+zr(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return bt(n.fields,(i,a)=>{s+=i.length+zr(a)}),s}(r.mapValue);default:throw x()}}function Ru(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Ni(r){return!!r&&"integerValue"in r}function oo(r){return!!r&&"arrayValue"in r}function Su(r){return!!r&&"nullValue"in r}function bu(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Hr(r){return!!r&&"mapValue"in r}function Eg(r){var e,t;return((t=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function jn(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return bt(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=jn(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=jn(r.arrayValue.values[t]);return e}return Object.assign({},r)}function vg(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.value=e}static empty(){return new Se({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Hr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=jn(t)}setAll(e){let t=de.emptyPath(),n={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,n,s),n={},s=[],t=c.popLast()}a?n[c.lastSegment()]=jn(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());Hr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return je(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Hr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){bt(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new Se(jn(this.value))}}function pl(r){const e=[];return bt(r.fields,(t,n)=>{const s=new de([t]);if(Hr(n)){const i=pl(n.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ce(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t,n,s,i,a,c){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ve(e,0,F.min(),F.min(),F.min(),Se.empty(),0)}static newFoundDocument(e,t,n,s){return new ve(e,1,t,F.min(),n,s,0)}static newNoDocument(e,t){return new ve(e,2,t,F.min(),F.min(),Se.empty(),0)}static newUnknownDocument(e,t){return new ve(e,3,t,F.min(),F.min(),Se.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Se.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Se.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,t){this.position=e,this.inclusive=t}}function Cu(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],a=r.position[s];if(i.field.isKeyField()?n=L.comparator(L.fromName(a.referenceValue),t.key):n=an(a,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Pu(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!je(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t="asc"){this.field=e,this.dir=t}}function Tg(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{}class ie extends ml{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new wg(e,t,n):t==="array-contains"?new Sg(e,n):t==="in"?new bg(e,n):t==="not-in"?new Cg(e,n):t==="array-contains-any"?new Pg(e,n):new ie(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Ag(e,n):new Rg(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(an(t,this.value)):t!==null&&It(this.value)===It(t)&&this.matchesComparison(an(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Oe extends ml{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Oe(e,t)}matches(e){return gl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function gl(r){return r.op==="and"}function _l(r){return Ig(r)&&gl(r)}function Ig(r){for(const e of r.filters)if(e instanceof Oe)return!1;return!0}function Vi(r){if(r instanceof ie)return r.field.canonicalString()+r.op.toString()+un(r.value);if(_l(r))return r.filters.map(e=>Vi(e)).join(",");{const e=r.filters.map(t=>Vi(t)).join(",");return`${r.op}(${e})`}}function yl(r,e){return r instanceof ie?function(n,s){return s instanceof ie&&n.op===s.op&&n.field.isEqual(s.field)&&je(n.value,s.value)}(r,e):r instanceof Oe?function(n,s){return s instanceof Oe&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,a,c)=>i&&yl(a,s.filters[c]),!0):!1}(r,e):void x()}function El(r){return r instanceof ie?function(t){return`${t.field.canonicalString()} ${t.op} ${un(t.value)}`}(r):r instanceof Oe?function(t){return t.op.toString()+" {"+t.getFilters().map(El).join(" ,")+"}"}(r):"Filter"}class wg extends ie{constructor(e,t,n){super(e,t,n),this.key=L.fromName(n.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ag extends ie{constructor(e,t){super(e,"in",t),this.keys=vl("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Rg extends ie{constructor(e,t){super(e,"not-in",t),this.keys=vl("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function vl(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>L.fromName(n.referenceValue))}class Sg extends ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return oo(t)&&Xn(t.arrayValue,this.value)}}class bg extends ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Xn(this.value.arrayValue,t)}}class Cg extends ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(Xn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Xn(this.value.arrayValue,t)}}class Pg extends ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!oo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Xn(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,t=null,n=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function ku(r,e=null,t=[],n=[],s=null,i=null,a=null){return new kg(r,e,t,n,s,i,a)}function ao(r){const e=U(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Vi(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),vs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>un(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>un(n)).join(",")),e.ue=t}return e.ue}function uo(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!Tg(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!yl(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Pu(r.startAt,e.startAt)&&Pu(r.endAt,e.endAt)}function Oi(r){return L.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,t=null,n=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Dg(r,e,t,n,s,i,a,c){return new ur(r,e,t,n,s,i,a,c)}function Is(r){return new ur(r)}function Du(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Tl(r){return r.collectionGroup!==null}function Wn(r){const e=U(r);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ue(de.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new as(i,n))}),t.has(de.keyField().canonicalString())||e.ce.push(new as(de.keyField(),n))}return e.ce}function Be(r){const e=U(r);return e.le||(e.le=Ng(e,Wn(r))),e.le}function Ng(r,e){if(r.limitType==="F")return ku(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new as(s.field,i)});const t=r.endAt?new os(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new os(r.startAt.position,r.startAt.inclusive):null;return ku(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Li(r,e){const t=r.filters.concat([e]);return new ur(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Mi(r,e,t){return new ur(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function ws(r,e){return uo(Be(r),Be(e))&&r.limitType===e.limitType}function Il(r){return`${ao(Be(r))}|lt:${r.limitType}`}function Kt(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>El(s)).join(", ")}]`),vs(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>un(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>un(s)).join(",")),`Target(${n})`}(Be(r))}; limitType=${r.limitType})`}function As(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):L.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of Wn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(a,c,l){const d=Cu(a,c,l);return a.inclusive?d<=0:d<0}(n.startAt,Wn(n),s)||n.endAt&&!function(a,c,l){const d=Cu(a,c,l);return a.inclusive?d>=0:d>0}(n.endAt,Wn(n),s))}(r,e)}function Vg(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function wl(r){return(e,t)=>{let n=!1;for(const s of Wn(r)){const i=Og(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function Og(r,e,t){const n=r.field.isKeyField()?L.comparator(e.key,t.key):function(i,a,c){const l=a.data.field(i),d=c.data.field(i);return l!==null&&d!==null?an(l,d):x()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return x()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){bt(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return dl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=new Z(L.comparator);function tt(){return Lg}const Al=new Z(L.comparator);function Fn(...r){let e=Al;for(const t of r)e=e.insert(t.key,t);return e}function Rl(r){let e=Al;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Ot(){return $n()}function Sl(){return $n()}function $n(){return new Bt(r=>r.toString(),(r,e)=>r.isEqual(e))}const Mg=new Z(L.comparator),xg=new ue(L.comparator);function q(...r){let e=xg;for(const t of r)e=e.add(t);return e}const Fg=new ue(j);function Ug(){return Fg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:is(e)?"-0":e}}function bl(r){return{integerValue:""+r}}function Bg(r,e){return pg(e)?bl(e):co(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this._=void 0}}function qg(r,e,t){return r instanceof Zn?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&io(i)&&(i=Ts(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):r instanceof er?Pl(r,e):r instanceof tr?kl(r,e):function(s,i){const a=Cl(s,i),c=Nu(a)+Nu(s.Pe);return Ni(a)&&Ni(s.Pe)?bl(c):co(s.serializer,c)}(r,e)}function jg(r,e,t){return r instanceof er?Pl(r,e):r instanceof tr?kl(r,e):t}function Cl(r,e){return r instanceof us?function(n){return Ni(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class Zn extends Rs{}class er extends Rs{constructor(e){super(),this.elements=e}}function Pl(r,e){const t=Dl(e);for(const n of r.elements)t.some(s=>je(s,n))||t.push(n);return{arrayValue:{values:t}}}class tr extends Rs{constructor(e){super(),this.elements=e}}function kl(r,e){let t=Dl(e);for(const n of r.elements)t=t.filter(s=>!je(s,n));return{arrayValue:{values:t}}}class us extends Rs{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Nu(r){return re(r.integerValue||r.doubleValue)}function Dl(r){return oo(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,t){this.field=e,this.transform=t}}function $g(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof er&&s instanceof er||n instanceof tr&&s instanceof tr?on(n.elements,s.elements,je):n instanceof us&&s instanceof us?je(n.Pe,s.Pe):n instanceof Zn&&s instanceof Zn}(r.transform,e.transform)}class zg{constructor(e,t){this.version=e,this.transformResults=t}}class Pe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Pe}static exists(e){return new Pe(void 0,e)}static updateTime(e){return new Pe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gr(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Ss{}function Nl(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new lo(r.key,Pe.none()):new cr(r.key,r.data,Pe.none());{const t=r.data,n=Se.empty();let s=new ue(de.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new Ct(r.key,n,new Ce(s.toArray()),Pe.none())}}function Hg(r,e,t){r instanceof cr?function(s,i,a){const c=s.value.clone(),l=Ou(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,e,t):r instanceof Ct?function(s,i,a){if(!Gr(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Ou(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Vl(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(r,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function zn(r,e,t,n){return r instanceof cr?function(i,a,c,l){if(!Gr(i.precondition,a))return c;const d=i.value.clone(),p=Lu(i.fieldTransforms,l,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,e,t,n):r instanceof Ct?function(i,a,c,l){if(!Gr(i.precondition,a))return c;const d=Lu(i.fieldTransforms,l,a),p=a.data;return p.setAll(Vl(i)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(y=>y.field))}(r,e,t,n):function(i,a,c){return Gr(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(r,e,t)}function Gg(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=Cl(n.transform,s||null);i!=null&&(t===null&&(t=Se.empty()),t.set(n.field,i))}return t||null}function Vu(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&on(n,s,(i,a)=>$g(i,a))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class cr extends Ss{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ct extends Ss{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Vl(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Ou(r,e,t){const n=new Map;Q(r.length===t.length);for(let s=0;s<t.length;s++){const i=r[s],a=i.transform,c=e.data.field(i.field);n.set(i.field,jg(a,c,t[s]))}return n}function Lu(r,e,t){const n=new Map;for(const s of r){const i=s.transform,a=t.data.field(s.field);n.set(s.field,qg(i,a,e))}return n}class lo extends Ss{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Kg extends Ss{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Hg(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=zn(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=zn(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Sl();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=Nl(a,c);l!==null&&n.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(F.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),q())}isEqual(e){return this.batchId===e.batchId&&on(this.mutations,e.mutations,(t,n)=>Vu(t,n))&&on(this.baseMutations,e.baseMutations,(t,n)=>Vu(t,n))}}class ho{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){Q(e.mutations.length===n.length);let s=function(){return Mg}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new ho(e,t,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se,$;function Xg(r){switch(r){default:return x();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Ol(r){if(r===void 0)return et("GRPC error has no .code"),b.UNKNOWN;switch(r){case se.OK:return b.OK;case se.CANCELLED:return b.CANCELLED;case se.UNKNOWN:return b.UNKNOWN;case se.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case se.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case se.INTERNAL:return b.INTERNAL;case se.UNAVAILABLE:return b.UNAVAILABLE;case se.UNAUTHENTICATED:return b.UNAUTHENTICATED;case se.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case se.NOT_FOUND:return b.NOT_FOUND;case se.ALREADY_EXISTS:return b.ALREADY_EXISTS;case se.PERMISSION_DENIED:return b.PERMISSION_DENIED;case se.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case se.ABORTED:return b.ABORTED;case se.OUT_OF_RANGE:return b.OUT_OF_RANGE;case se.UNIMPLEMENTED:return b.UNIMPLEMENTED;case se.DATA_LOSS:return b.DATA_LOSS;default:return x()}}($=se||(se={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=new _t([4294967295,4294967295],0);function Mu(r){const e=Zg().encode(r),t=new sl;return t.update(e),new Uint8Array(t.digest())}function xu(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new _t([t,n],0),new _t([s,i],0)]}class fo{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Un(`Invalid padding: ${t}`);if(n<0)throw new Un(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Un(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Un(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=_t.fromNumber(this.Te)}de(e,t,n){let s=e.add(t.multiply(_t.fromNumber(n)));return s.compare(e_)===1&&(s=new _t([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Mu(e),[n,s]=xu(t);for(let i=0;i<this.hashCount;i++){const a=this.de(n,s,i);if(!this.Ee(a))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new fo(i,s,t);return n.forEach(c=>a.insert(c)),a}insert(e){if(this.Te===0)return;const t=Mu(e),[n,s]=xu(t);for(let i=0;i<this.hashCount;i++){const a=this.de(n,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Un extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,lr.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new bs(F.min(),s,new Z(j),tt(),q())}}class lr{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new lr(n,t,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t,n,s){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=s}}class Ll{constructor(e,t){this.targetId=e,this.me=t}}class Ml{constructor(e,t,n=fe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Fu{constructor(){this.fe=0,this.ge=Uu(),this.pe=fe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=q(),t=q(),n=q();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:x()}}),new lr(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=Uu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class t_{constructor(e){this.Be=e,this.Le=new Map,this.ke=tt(),this.qe=Fr(),this.Qe=Fr(),this.Ke=new Z(j)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.je(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.De(e.resumeToken));break;default:x()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((n,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,n=e.me.count,s=this.Ye(t);if(s){const i=s.target;if(Oi(i))if(n===0){const a=new L(i.path);this.We(t,a,ve.newNoDocument(a,F.min()))}else Q(n===1);else{const a=this.Ze(t);if(a!==n){const c=this.Xe(e),l=c?this.et(c,e,a):1;if(l!==0){this.He(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,d)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Tt(n).toUint8Array()}catch(l){if(l instanceof fl)return sn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new fo(a,s,i)}catch(l){return sn(l instanceof Un?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Te===0?null:c}et(e,t,n){return t.me.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){const n=this.Be.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const a=this.Be.nt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.We(t,i,null),s++)}),s}it(e){const t=new Map;this.Le.forEach((i,a)=>{const c=this.Ye(a);if(c){if(i.current&&Oi(c.target)){const l=new L(c.target.path);this.st(l).has(a)||this.ot(a,l)||this.We(a,l,ve.newNoDocument(l,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let n=q();this.Qe.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const d=this.Ye(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new bs(e,t,this.Ke,this.ke,n);return this.ke=tt(),this.qe=Fr(),this.Qe=Fr(),this.Ke=new Z(j),s}Ue(e,t){if(!this.je(e))return;const n=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,n){if(!this.je(e))return;const s=this.ze(e);this.ot(e,t)?s.Fe(t,1):s.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new Fu,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new ue(j),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ue(j),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new Fu),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function Fr(){return new Z(L.comparator)}function Uu(){return new Z(L.comparator)}const n_={asc:"ASCENDING",desc:"DESCENDING"},r_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},s_={and:"AND",or:"OR"};class i_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function xi(r,e){return r.useProto3Json||vs(e)?e:{value:e}}function cs(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xl(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function o_(r,e){return cs(r,e.toTimestamp())}function qe(r){return Q(!!r),F.fromTimestamp(function(t){const n=vt(t);return new ae(n.seconds,n.nanos)}(r))}function po(r,e){return Fi(r,e).canonicalString()}function Fi(r,e){const t=function(s){return new X(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function Fl(r){const e=X.fromString(r);return Q(Wl(e)),e}function Ui(r,e){return po(r.databaseId,e.path)}function mi(r,e){const t=Fl(e);if(t.get(1)!==r.databaseId.projectId)throw new V(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new V(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new L(Bl(t))}function Ul(r,e){return po(r.databaseId,e)}function a_(r){const e=Fl(r);return e.length===4?X.emptyPath():Bl(e)}function Bi(r){return new X(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Bl(r){return Q(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Bu(r,e,t){return{name:Ui(r,e),fields:t.value.mapValue.fields}}function u_(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:x()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,p){return d.useProto3Json?(Q(p===void 0||typeof p=="string"),fe.fromBase64String(p||"")):(Q(p===void 0||p instanceof Buffer||p instanceof Uint8Array),fe.fromUint8Array(p||new Uint8Array))}(r,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const p=d.code===void 0?b.UNKNOWN:Ol(d.code);return new V(p,d.message||"")}(a);t=new Ml(n,s,i,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=mi(r,n.document.name),i=qe(n.document.updateTime),a=n.document.createTime?qe(n.document.createTime):F.min(),c=new Se({mapValue:{fields:n.document.fields}}),l=ve.newFoundDocument(s,i,a,c),d=n.targetIds||[],p=n.removedTargetIds||[];t=new Kr(d,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=mi(r,n.document),i=n.readTime?qe(n.readTime):F.min(),a=ve.newNoDocument(s,i),c=n.removedTargetIds||[];t=new Kr([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=mi(r,n.document),i=n.removedTargetIds||[];t=new Kr([],i,s,null)}else{if(!("filter"in e))return x();{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new Jg(s,i),c=n.targetId;t=new Ll(c,a)}}return t}function c_(r,e){let t;if(e instanceof cr)t={update:Bu(r,e.key,e.value)};else if(e instanceof lo)t={delete:Ui(r,e.key)};else if(e instanceof Ct)t={update:Bu(r,e.key,e.data),updateMask:y_(e.fieldMask)};else{if(!(e instanceof Kg))return x();t={verify:Ui(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,a){const c=a.transform;if(c instanceof Zn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof er)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof tr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof us)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw x()}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:o_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:x()}(r,e.precondition)),t}function l_(r,e){return r&&r.length>0?(Q(e!==void 0),r.map(t=>function(s,i){let a=s.updateTime?qe(s.updateTime):qe(i);return a.isEqual(F.min())&&(a=qe(i)),new zg(a,s.transformResults||[])}(t,e))):[]}function h_(r,e){return{documents:[Ul(r,e.path)]}}function d_(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Ul(r,s);const i=function(d){if(d.length!==0)return jl(Oe.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(p=>function(A){return{field:Qt(A.field),direction:m_(A.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=xi(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ct:t,parent:s}}function f_(r){let e=a_(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){Q(n===1);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(y){const A=ql(y);return A instanceof Oe&&_l(A)?A.getFilters():[A]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(A=>function(P){return new as(Yt(P.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(A))}(t.orderBy));let c=null;t.limit&&(c=function(y){let A;return A=typeof y=="object"?y.value:y,vs(A)?null:A}(t.limit));let l=null;t.startAt&&(l=function(y){const A=!!y.before,S=y.values||[];return new os(S,A)}(t.startAt));let d=null;return t.endAt&&(d=function(y){const A=!y.before,S=y.values||[];return new os(S,A)}(t.endAt)),Dg(e,s,a,i,c,"F",l,d)}function p_(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ql(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Yt(t.unaryFilter.field);return ie.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Yt(t.unaryFilter.field);return ie.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yt(t.unaryFilter.field);return ie.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Yt(t.unaryFilter.field);return ie.create(a,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(r):r.fieldFilter!==void 0?function(t){return ie.create(Yt(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return Oe.create(t.compositeFilter.filters.map(n=>ql(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x()}}(t.compositeFilter.op))}(r):x()}function m_(r){return n_[r]}function g_(r){return r_[r]}function __(r){return s_[r]}function Qt(r){return{fieldPath:r.canonicalString()}}function Yt(r){return de.fromServerFormat(r.fieldPath)}function jl(r){return r instanceof ie?function(t){if(t.op==="=="){if(bu(t.value))return{unaryFilter:{field:Qt(t.field),op:"IS_NAN"}};if(Su(t.value))return{unaryFilter:{field:Qt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(bu(t.value))return{unaryFilter:{field:Qt(t.field),op:"IS_NOT_NAN"}};if(Su(t.value))return{unaryFilter:{field:Qt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qt(t.field),op:g_(t.op),value:t.value}}}(r):r instanceof Oe?function(t){const n=t.getFilters().map(s=>jl(s));return n.length===1?n[0]:{compositeFilter:{op:__(t.op),filters:n}}}(r):x()}function y_(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Wl(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t,n,s,i=F.min(),a=F.min(),c=fe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new ft(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){this.ht=e}}function v_(r){const e=f_({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Mi(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(){this.ln=new I_}addToCollectionParentIndex(e,t){return this.ln.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(Et.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(Et.min())}updateCollectionGroup(e,t,n){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class I_{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new ue(X.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new ue(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Re{static withCacheSize(e){return new Re(e,Re.DEFAULT_COLLECTION_PERCENTILE,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Re.DEFAULT_COLLECTION_PERCENTILE=10,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Re.DEFAULT=new Re(41943040,Re.DEFAULT_COLLECTION_PERCENTILE,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Re.DISABLED=new Re(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new cn(0)}static Qn(){return new cn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju([r,e],[t,n]){const s=j(r,t);return s===0?j(e,n):s}class w_{constructor(e){this.Gn=e,this.buffer=new ue(ju),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();ju(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class A_{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){N("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){gn(t)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await mn(t)}await this.Yn(3e5)})}}class R_{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return C.resolve(Es.oe);const n=new w_(t);return this.Zn.forEachTarget(e,s=>n.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>n.Hn(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Zn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(qu)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qu):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let n,s,i,a,c,l,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(e,s))).next(y=>(n=y,c=Date.now(),this.removeTargets(e,n,t))).next(y=>(i=y,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(y=>(d=Date.now(),Gt()<=B.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${y} documents in `+(d-l)+`ms
Total Duration: ${d-p}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:y})))}}function S_(r,e){return new R_(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(){this.changes=new Bt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ve.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?C.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&zn(n.mutation,s,Ce.empty(),ae.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,q()).next(()=>n))}getLocalViewOfDocuments(e,t,n=q()){const s=Ot();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let a=Fn();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const n=Ot();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,q()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,n,s){let i=tt();const a=$n(),c=function(){return $n()}();return t.forEach((l,d)=>{const p=n.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof Ct)?i=i.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),zn(p.mutation,d,p.mutation.getFieldMask(),ae.now())):a.set(d.key,Ce.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var y;return c.set(d,new C_(p,(y=a.get(d))!==null&&y!==void 0?y:null))}),c))}recalculateAndSaveOverlays(e,t){const n=$n();let s=new Z((a,c)=>a-c),i=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let p=n.get(l)||Ce.empty();p=c.applyToLocalView(d,p),n.set(l,p);const y=(s.get(c.batchId)||q()).add(l);s=s.insert(c.batchId,y)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,p=l.value,y=Sl();p.forEach(A=>{if(!i.has(A)){const S=Nl(t.get(A),n.get(A));S!==null&&y.set(A,S),i=i.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return C.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Tl(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):C.resolve(Ot());let c=-1,l=i;return a.next(d=>C.forEach(d,(p,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),i.get(p)?C.resolve():this.remoteDocumentCache.getEntry(e,p).next(A=>{l=l.insert(p,A)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,l,d,q())).next(p=>({batchId:c,changes:Rl(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(n=>{let s=Fn();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let a=Fn();return this.indexManager.getCollectionParents(e,i).next(c=>C.forEach(c,l=>{const d=function(y,A){return new ur(A,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,n,s).next(p=>{p.forEach((y,A)=>{a=a.insert(y,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(a=>{i.forEach((l,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,ve.newInvalidDocument(p)))});let c=Fn();return a.forEach((l,d)=>{const p=i.get(l);p!==void 0&&zn(p.mutation,d,Ce.empty(),ae.now()),As(t,d)&&(c=c.insert(l,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return C.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:qe(s.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(s){return{name:s.name,query:v_(s.bundledQuery),readTime:qe(s.readTime)}}(t)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(){this.overlays=new Z(L.comparator),this.dr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Ot();return C.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.Tt(e,t,i)}),C.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.dr.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.dr.delete(n)),C.resolve()}getOverlaysForCollection(e,t,n){const s=Ot(),i=t.length+1,a=new L(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return C.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new Z((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>n){let p=i.get(d.largestBatchId);p===null&&(p=Ot(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=Ot(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=s)););return C.resolve(c)}Tt(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.dr.get(s.largestBatchId).delete(n.key);this.dr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Yg(t,n));let i=this.dr.get(t);i===void 0&&(i=q(),this.dr.set(t,i)),this.dr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(){this.sessionToken=fe.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.Er=new ue(ce.Ar),this.Rr=new ue(ce.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const n=new ce(e,t);this.Er=this.Er.add(n),this.Rr=this.Rr.add(n)}mr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.gr(new ce(e,t))}pr(e,t){e.forEach(n=>this.removeReference(n,t))}yr(e){const t=new L(new X([])),n=new ce(t,e),s=new ce(t,e+1),i=[];return this.Rr.forEachInRange([n,s],a=>{this.gr(a),i.push(a.key)}),i}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new L(new X([])),n=new ce(t,e),s=new ce(t,e+1);let i=q();return this.Rr.forEachInRange([n,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ce(e,0),n=this.Er.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class ce{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return L.comparator(e.key,t.key)||j(e.br,t.br)}static Vr(e,t){return j(e.br,t.br)||L.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new ue(ce.Ar)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Qg(i,t,n,s);this.mutationQueue.push(a);for(const c of s)this.vr=this.vr.add(new ce(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.Fr(n),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ce(t,0),s=new ce(t,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([n,s],a=>{const c=this.Cr(a.br);i.push(c)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ue(j);return t.forEach(s=>{const i=new ce(s,0),a=new ce(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,a],c=>{n=n.add(c.br)})}),C.resolve(this.Mr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;L.isDocumentKey(i)||(i=i.child(""));const a=new ce(new L(i),0);let c=new ue(j);return this.vr.forEachWhile(l=>{const d=l.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(c=c.add(l.br)),!0)},a),C.resolve(this.Mr(c))}Mr(e){const t=[];return e.forEach(n=>{const s=this.Cr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Q(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.vr;return C.forEach(t.mutations,s=>{const i=new ce(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=n})}Bn(e){}containsKey(e,t){const n=new ce(t,0),s=this.vr.firstAfterOrEqual(n);return C.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e){this.Nr=e,this.docs=function(){return new Z(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,a=this.Nr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return C.resolve(n?n.document.mutableCopy():ve.newInvalidDocument(t))}getEntries(e,t){let n=tt();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ve.newInvalidDocument(s))}),C.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=tt();const a=t.path,c=new L(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:p}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||lg(cg(p),n)<=0||(s.has(p.key)||As(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,t,n,s){x()}Br(e,t){return C.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new L_(this)}getSize(e){return C.resolve(this.size)}}class L_ extends b_{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.hr.addEntry(e,s)):this.hr.removeEntry(n)}),C.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e){this.persistence=e,this.Lr=new Bt(t=>ao(t),uo),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.kr=0,this.qr=new mo,this.targetCount=0,this.Qr=cn.qn()}forEachTarget(e,t){return this.Lr.forEach((n,s)=>t(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.kr&&(this.kr=t),C.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new cn(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.Un(t),C.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.Lr.forEach((a,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.Lr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),C.waitFor(i).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const n=this.Lr.get(t)||null;return C.resolve(n)}addMatchingKeys(e,t,n){return this.qr.mr(t,n),C.resolve()}removeMatchingKeys(e,t,n){this.qr.pr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const n=this.qr.Sr(t);return C.resolve(n)}containsKey(e,t){return C.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Es(0),this.Ur=!1,this.Ur=!0,this.Wr=new N_,this.referenceDelegate=e(this),this.Gr=new M_(this),this.indexManager=new T_,this.remoteDocumentCache=function(s){return new O_(s)}(n=>this.referenceDelegate.zr(n)),this.serializer=new E_(t),this.jr=new k_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new D_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Kr[e.toKey()];return n||(n=new V_(t,this.referenceDelegate),this.Kr[e.toKey()]=n),n}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,n){N("MemoryPersistence","Starting transaction:",e);const s=new x_(this.$r.next());return this.referenceDelegate.Hr(),n(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,t){return C.or(Object.values(this.Kr).map(n=>()=>n.containsKey(e,t)))}}class x_ extends dg{constructor(e){super(),this.currentSequenceNumber=e}}class go{constructor(e){this.persistence=e,this.Zr=new mo,this.Xr=null}static ei(e){return new go(e)}get ti(){if(this.Xr)return this.Xr;throw x()}addReference(e,t,n){return this.Zr.addReference(n,t),this.ti.delete(n.toString()),C.resolve()}removeReference(e,t,n){return this.Zr.removeReference(n,t),this.ti.add(n.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),C.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(s=>this.ti.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.ti,n=>{const s=L.fromPath(n);return this.ni(e,s).next(i=>{i||t.removeEntry(s,F.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(n=>{n?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return C.or([()=>C.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class ls{constructor(e,t){this.persistence=e,this.ri=new Bt(n=>mg(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=S_(this,t)}static ei(e,t){return new ls(e,t)}Hr(){}Jr(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}nr(e){let t=0;return this.er(e,n=>{t++}).next(()=>t)}er(e,t){return C.forEach(this.ri,(n,s)=>this.ir(e,n,s).next(i=>i?C.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Br(e,a=>this.ir(e,a,t).next(c=>{c||(n++,i.removeEntry(a,F.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.ri.set(n,e.currentSequenceNumber),C.resolve()}removeReference(e,t,n){return this.ri.set(n,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),C.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=zr(e.data.value)),t}ir(e,t,n){return C.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.ri.get(t);return C.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Wi=n,this.Gi=s}static zi(e,t){let n=q(),s=q();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new _o(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return vd()?8:fg(Te())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.Xi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.es(e,t,s,n).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new F_;return this.ts(e,t,a).next(c=>{if(i.result=c,this.Hi)return this.ns(e,t,a,c.size)})}).next(()=>i.result)}ns(e,t,n,s){return n.documentReadCount<this.Ji?(Gt()<=B.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Kt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),C.resolve()):(Gt()<=B.DEBUG&&N("QueryEngine","Query:",Kt(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Yi*s?(Gt()<=B.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Kt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Be(t))):C.resolve())}Xi(e,t){if(Du(t))return C.resolve(null);let n=Be(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Mi(t,null,"F"),n=Be(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const a=q(...i);return this.Zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,n).next(l=>{const d=this.rs(t,c);return this.ss(t,d,a,l.readTime)?this.Xi(e,Mi(t,null,"F")):this.os(e,d,t,l)}))})))}es(e,t,n,s){return Du(t)||s.isEqual(F.min())?C.resolve(null):this.Zi.getDocuments(e,n).next(i=>{const a=this.rs(t,i);return this.ss(t,a,n,s)?C.resolve(null):(Gt()<=B.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Kt(t)),this.os(e,a,t,ug(s,-1)).next(c=>c))})}rs(e,t){let n=new ue(wl(e));return t.forEach((s,i)=>{As(e,i)&&(n=n.add(i))}),n}ss(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,t,n){return Gt()<=B.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Kt(t)),this.Zi.getDocumentsMatchingQuery(e,t,Et.min(),n)}os(e,t,n,s){return this.Zi.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,t,n,s){this.persistence=e,this._s=t,this.serializer=s,this.us=new Z(j),this.cs=new Bt(i=>ao(i),uo),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(n)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new P_(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function q_(r,e,t,n){return new B_(r,e,t,n)}async function zl(r,e){const t=U(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.Ps(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const a=[],c=[];let l=q();for(const d of s){a.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}for(const d of i){c.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(n,l).next(d=>({Ts:d,removedBatchIds:a,addedBatchIds:c}))})})}function j_(r,e){const t=U(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.hs.newChangeBuffer({trackRemovals:!0});return function(c,l,d,p){const y=d.batch,A=y.keys();let S=C.resolve();return A.forEach(P=>{S=S.next(()=>p.getEntry(l,P)).next(O=>{const D=d.docVersions.get(P);Q(D!==null),O.version.compareTo(D)<0&&(y.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),p.addEntry(O)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(l,y))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let l=q();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function Hl(r){const e=U(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function W_(r,e){const t=U(r),n=e.snapshotVersion;let s=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.hs.newChangeBuffer({trackRemovals:!0});s=t.us;const c=[];e.targetChanges.forEach((p,y)=>{const A=s.get(y);if(!A)return;c.push(t.Gr.removeMatchingKeys(i,p.removedDocuments,y).next(()=>t.Gr.addMatchingKeys(i,p.addedDocuments,y)));let S=A.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?S=S.withResumeToken(fe.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,n)),s=s.insert(y,S),function(O,D,W){return O.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(A,S,p)&&c.push(t.Gr.updateTargetData(i,S))});let l=tt(),d=q();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),c.push($_(i,a,e.documentUpdates).next(p=>{l=p.Is,d=p.ds})),!n.isEqual(F.min())){const p=t.Gr.getLastRemoteSnapshotVersion(i).next(y=>t.Gr.setTargetsMetadata(i,i.currentSequenceNumber,n));c.push(p)}return C.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(t.us=s,i))}function $_(r,e,t){let n=q(),s=q();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let a=tt();return t.forEach((c,l)=>{const d=i.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(F.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):N("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Is:a,ds:s}})}function z_(r,e){const t=U(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function H_(r,e){const t=U(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.Gr.getTargetData(n,e).next(i=>i?(s=i,C.resolve(s)):t.Gr.allocateTargetId(n).next(a=>(s=new ft(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.Gr.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.us.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.us=t.us.insert(n.targetId,n),t.cs.set(e,n.targetId)),n})}async function qi(r,e,t){const n=U(r),s=n.us.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!gn(a))throw a;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}n.us=n.us.remove(e),n.cs.delete(s.target)}function Wu(r,e,t){const n=U(r);let s=F.min(),i=q();return n.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,p){const y=U(l),A=y.cs.get(p);return A!==void 0?C.resolve(y.us.get(A)):y.Gr.getTargetData(d,p)}(n,a,Be(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.Gr.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>n._s.getDocumentsMatchingQuery(a,e,t?s:F.min(),t?i:q())).next(c=>(G_(n,Vg(e),c),{documents:c,Es:i})))}function G_(r,e,t){let n=r.ls.get(e)||F.min();t.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.ls.set(e,n)}class $u{constructor(){this.activeTargetIds=Ug()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class K_{constructor(){this._o=new $u,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,n){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new $u,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ur=null;function gi(){return Ur===null?Ur=function(){return 268435456+Math.round(2147483648*Math.random())}():Ur++,"0x"+Ur.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="WebChannelConnection";class X_ extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=n+"://"+t.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(t,n,s,i,a){const c=gi(),l=this.No(t,n.toUriEncodedString());N("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const d={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(d,i,a),this.Lo(t,l,d,s).then(p=>(N("RestConnection",`Received RPC '${t}' ${c}: `,p),p),p=>{throw sn("RestConnection",`RPC '${t}' ${c} failed with error: `,p,"url: ",l,"request:",s),p})}ko(t,n,s,i,a,c){return this.Oo(t,n,s,i,a)}Bo(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+pn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}No(t,n){const s=Y_[t];return`${this.Fo}/v1/${n}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,n,s){const i=gi();return new Promise((a,c)=>{const l=new il;l.setWithCredentials(!0),l.listenOnce(ol.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case $r.NO_ERROR:const p=l.getResponseJson();N(ye,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),a(p);break;case $r.TIMEOUT:N(ye,`RPC '${e}' ${i} timed out`),c(new V(b.DEADLINE_EXCEEDED,"Request time out"));break;case $r.HTTP_ERROR:const y=l.getStatus();if(N(ye,`RPC '${e}' ${i} failed with status:`,y,"response text:",l.getResponseText()),y>0){let A=l.getResponseJson();Array.isArray(A)&&(A=A[0]);const S=A?.error;if(S&&S.status&&S.message){const P=function(D){const W=D.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(W)>=0?W:b.UNKNOWN}(S.status);c(new V(P,S.message))}else c(new V(b.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new V(b.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{N(ye,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);N(ye,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",d,n,15)})}qo(e,t,n){const s=gi(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=cl(),c=ul(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Bo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const p=i.join("");N(ye,`Creating RPC '${e}' stream ${s}: ${p}`,l);const y=a.createWebChannel(p,l);let A=!1,S=!1;const P=new J_({Eo:D=>{S?N(ye,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(A||(N(ye,`Opening RPC '${e}' stream ${s} transport.`),y.open(),A=!0),N(ye,`RPC '${e}' stream ${s} sending:`,D),y.send(D))},Ao:()=>y.close()}),O=(D,W,G)=>{D.listen(W,K=>{try{G(K)}catch(te){setTimeout(()=>{throw te},0)}})};return O(y,xn.EventType.OPEN,()=>{S||(N(ye,`RPC '${e}' stream ${s} transport opened.`),P.So())}),O(y,xn.EventType.CLOSE,()=>{S||(S=!0,N(ye,`RPC '${e}' stream ${s} transport closed`),P.Do())}),O(y,xn.EventType.ERROR,D=>{S||(S=!0,sn(ye,`RPC '${e}' stream ${s} transport errored:`,D),P.Do(new V(b.UNAVAILABLE,"The operation could not be completed")))}),O(y,xn.EventType.MESSAGE,D=>{var W;if(!S){const G=D.data[0];Q(!!G);const K=G,te=K?.error||((W=K[0])===null||W===void 0?void 0:W.error);if(te){N(ye,`RPC '${e}' stream ${s} received error:`,te);const ke=te.status;let ne=function(_){const E=se[_];if(E!==void 0)return Ol(E)}(ke),v=te.message;ne===void 0&&(ne=b.INTERNAL,v="Unknown error status: "+ke+" with message "+te.message),S=!0,P.Do(new V(ne,v)),y.close()}else N(ye,`RPC '${e}' stream ${s} received:`,G),P.vo(G)}}),O(c,al.STAT_EVENT,D=>{D.stat===ki.PROXY?N(ye,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===ki.NOPROXY&&N(ye,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.bo()},0),P}}function _i(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(r){return new i_(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,t,n=1e3,s=1.5,i=6e4){this.li=e,this.timerId=t,this.Qo=n,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),n=Math.max(0,Date.now()-this.Go),s=Math.max(0,t-n);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,t,n,s,i,a,c,l){this.li=e,this.Yo=n,this.Zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Gl(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(et(t.toString()),et("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Xo===t&&this.I_(n,s)},n=>{e(()=>{const s=new V(b.UNKNOWN,"Fetching auth token failed: "+n.message);return this.d_(s)})})}I_(e,t){const n=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{n(()=>this.listener.Ro())}),this.stream.mo(()=>{n(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{n(()=>this.d_(s))}),this.stream.onMessage(s=>{n(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Z_ extends Kl{constructor(e,t,n,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,a),this.serializer=i}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=u_(this.serializer,e),n=function(i){if(!("targetChange"in i))return F.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?qe(a.readTime):F.min()}(e);return this.listener.R_(t,n)}V_(e){const t={};t.database=Bi(this.serializer),t.addTarget=function(i,a){let c;const l=a.target;if(c=Oi(l)?{documents:h_(i,l)}:{query:d_(i,l).ct},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=xl(i,a.resumeToken);const d=xi(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){c.readTime=cs(i,a.snapshotVersion.toTimestamp());const d=xi(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const n=p_(this.serializer,e);n&&(t.labels=n),this.c_(t)}m_(e){const t={};t.database=Bi(this.serializer),t.removeTarget=e,this.c_(t)}}class ey extends Kl{constructor(e,t,n,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,a),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Q(!!e.streamToken),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=l_(e.writeResults,e.commitTime),n=qe(e.commitTime);return this.listener.y_(n,t)}w_(){const e={};e.database=Bi(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>c_(this.serializer,n))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty extends class{}{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new V(b.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,n,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Oo(e,Fi(t,n),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(b.UNKNOWN,i.toString())})}ko(e,t,n,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.ko(e,Fi(t,n),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(b.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class ny{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(et(t),this.C_=!1):N("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(a=>{n.enqueueAndForget(async()=>{qt(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=U(l);d.k_.add(4),await hr(d),d.K_.set("Unknown"),d.k_.delete(4),await Ps(d)}(this))})}),this.K_=new ny(n,s)}}async function Ps(r){if(qt(r))for(const e of r.q_)await e(!0)}async function hr(r){for(const e of r.q_)await e(!1)}function Ql(r,e){const t=U(r);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),To(t)?vo(t):_n(t).s_()&&Eo(t,e))}function yo(r,e){const t=U(r),n=_n(t);t.L_.delete(e),n.s_()&&Yl(t,e),t.L_.size===0&&(n.s_()?n.a_():qt(t)&&t.K_.set("Unknown"))}function Eo(r,e){if(r.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}_n(r).V_(e)}function Yl(r,e){r.U_.xe(e),_n(r).m_(e)}function vo(r){r.U_=new t_({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>r.L_.get(e)||null,nt:()=>r.datastore.serializer.databaseId}),_n(r).start(),r.K_.F_()}function To(r){return qt(r)&&!_n(r).i_()&&r.L_.size>0}function qt(r){return U(r).k_.size===0}function Jl(r){r.U_=void 0}async function sy(r){r.K_.set("Online")}async function iy(r){r.L_.forEach((e,t)=>{Eo(r,e)})}async function oy(r,e){Jl(r),To(r)?(r.K_.O_(e),vo(r)):r.K_.set("Unknown")}async function ay(r,e,t){if(r.K_.set("Online"),e instanceof Ml&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.L_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.L_.delete(c),s.U_.removeTarget(c))}(r,e)}catch(n){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await hs(r,n)}else if(e instanceof Kr?r.U_.$e(e):e instanceof Ll?r.U_.Je(e):r.U_.Ge(e),!t.isEqual(F.min()))try{const n=await Hl(r.localStore);t.compareTo(n)>=0&&await function(i,a){const c=i.U_.it(a);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const p=i.L_.get(d);p&&i.L_.set(d,p.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,d)=>{const p=i.L_.get(l);if(!p)return;i.L_.set(l,p.withResumeToken(fe.EMPTY_BYTE_STRING,p.snapshotVersion)),Yl(i,l);const y=new ft(p.target,l,d,p.sequenceNumber);Eo(i,y)}),i.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){N("RemoteStore","Failed to raise snapshot:",n),await hs(r,n)}}async function hs(r,e,t){if(!gn(e))throw e;r.k_.add(1),await hr(r),r.K_.set("Offline"),t||(t=()=>Hl(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await t(),r.k_.delete(1),await Ps(r)})}function Xl(r,e){return e().catch(t=>hs(r,t,e))}async function ks(r){const e=U(r),t=wt(e);let n=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;uy(e);)try{const s=await z_(e.localStore,n);if(s===null){e.B_.length===0&&t.a_();break}n=s.batchId,cy(e,s)}catch(s){await hs(e,s)}Zl(e)&&eh(e)}function uy(r){return qt(r)&&r.B_.length<10}function cy(r,e){r.B_.push(e);const t=wt(r);t.s_()&&t.f_&&t.g_(e.mutations)}function Zl(r){return qt(r)&&!wt(r).i_()&&r.B_.length>0}function eh(r){wt(r).start()}async function ly(r){wt(r).w_()}async function hy(r){const e=wt(r);for(const t of r.B_)e.g_(t.mutations)}async function dy(r,e,t){const n=r.B_.shift(),s=ho.from(n,e,t);await Xl(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await ks(r)}async function fy(r,e){e&&wt(r).f_&&await async function(n,s){if(function(a){return Xg(a)&&a!==b.ABORTED}(s.code)){const i=n.B_.shift();wt(n).__(),await Xl(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ks(n)}}(r,e),Zl(r)&&eh(r)}async function Hu(r,e){const t=U(r);t.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const n=qt(t);t.k_.add(3),await hr(t),n&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Ps(t)}async function py(r,e){const t=U(r);e?(t.k_.delete(2),await Ps(t)):e||(t.k_.add(2),await hr(t),t.K_.set("Unknown"))}function _n(r){return r.W_||(r.W_=function(t,n,s){const i=U(t);return i.b_(),new Z_(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Ro:sy.bind(null,r),mo:iy.bind(null,r),po:oy.bind(null,r),R_:ay.bind(null,r)}),r.q_.push(async e=>{e?(r.W_.__(),To(r)?vo(r):r.K_.set("Unknown")):(await r.W_.stop(),Jl(r))})),r.W_}function wt(r){return r.G_||(r.G_=function(t,n,s){const i=U(t);return i.b_(),new ey(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Ro:()=>Promise.resolve(),mo:ly.bind(null,r),po:fy.bind(null,r),p_:hy.bind(null,r),y_:dy.bind(null,r)}),r.q_.push(async e=>{e?(r.G_.__(),await ks(r)):(await r.G_.stop(),r.B_.length>0&&(N("RemoteStore",`Stopping write stream with ${r.B_.length} pending writes`),r.B_=[]))})),r.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Je,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const a=Date.now()+n,c=new Io(e,t,a,s,i);return c.start(n),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wo(r,e){if(et("AsyncQueue",`${e}: ${r}`),gn(r))return new V(b.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{static emptySet(e){return new nn(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||L.comparator(t.key,n.key):(t,n)=>L.comparator(t.key,n.key),this.keyedMap=Fn(),this.sortedSet=new Z(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof nn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new nn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(){this.z_=new Z(L.comparator)}track(e){const t=e.doc.key,n=this.z_.get(t);n?e.type!==0&&n.type===3?this.z_=this.z_.insert(t,e):e.type===3&&n.type!==1?this.z_=this.z_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.z_=this.z_.remove(t):e.type===1&&n.type===2?this.z_=this.z_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):x():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,n)=>{e.push(n)}),e}}class ln{constructor(e,t,n,s,i,a,c,l,d){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,n,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new ln(e,t,nn.emptySet(t),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ws(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class gy{constructor(){this.queries=Ku(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,n){const s=U(t),i=s.queries;s.queries=Ku(),i.forEach((a,c)=>{for(const l of c.J_)l.onError(n)})})(this,new V(b.ABORTED,"Firestore shutting down"))}}function Ku(){return new Bt(r=>Il(r),ws)}async function Ao(r,e){const t=U(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.Y_()&&e.Z_()&&(n=2):(i=new my,n=e.Z_()?0:1);try{switch(n){case 0:i.H_=await t.onListen(s,!0);break;case 1:i.H_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=wo(a,`Initialization of query '${Kt(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.J_.push(e),e.ea(t.onlineState),i.H_&&e.ta(i.H_)&&So(t)}async function Ro(r,e){const t=U(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const a=i.J_.indexOf(e);a>=0&&(i.J_.splice(a,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function _y(r,e){const t=U(r);let n=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.J_)c.ta(s)&&(n=!0);a.H_=s}}n&&So(t)}function yy(r,e,t){const n=U(r),s=n.queries.get(e);if(s)for(const i of s.J_)i.onError(t);n.queries.delete(e)}function So(r){r.X_.forEach(e=>{e.next()})}var ji,Qu;(Qu=ji||(ji={})).na="default",Qu.Cache="cache";class bo{constructor(e,t,n){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=n||{}}ta(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new ln(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const n=t!=="Offline";return(!this.options.ua||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=ln.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==ji.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e){this.key=e}}class nh{constructor(e){this.key=e}}class Ey{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=q(),this.mutatedKeys=q(),this.Va=wl(e),this.ma=new nn(this.Va)}get fa(){return this.Ea}ga(e,t){const n=t?t.pa:new Gu,s=t?t.ma:this.ma;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,y)=>{const A=s.get(p),S=As(this.query,y)?y:null,P=!!A&&this.mutatedKeys.has(A.key),O=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;A&&S?A.data.isEqual(S.data)?P!==O&&(n.track({type:3,doc:S}),D=!0):this.ya(A,S)||(n.track({type:2,doc:S}),D=!0,(l&&this.Va(S,l)>0||d&&this.Va(S,d)<0)&&(c=!0)):!A&&S?(n.track({type:0,doc:S}),D=!0):A&&!S&&(n.track({type:1,doc:A}),D=!0,(l||d)&&(c=!0)),D&&(S?(a=a.add(S),i=O?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),n.track({type:1,doc:p})}return{ma:a,pa:n,ss:c,mutatedKeys:i}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const a=e.pa.j_();a.sort((p,y)=>function(S,P){const O=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return O(S)-O(P)}(p.type,y.type)||this.Va(p.doc,y.doc)),this.wa(n),s=s!=null&&s;const c=t&&!s?this.Sa():[],l=this.Ra.size===0&&this.current&&!s?1:0,d=l!==this.Aa;return this.Aa=l,a.length!==0||d?{snapshot:new ln(this.query,e.ma,i,a,e.mutatedKeys,l===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Gu,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=q(),this.ma.forEach(n=>{this.Da(n.key)&&(this.Ra=this.Ra.add(n.key))});const t=[];return e.forEach(n=>{this.Ra.has(n)||t.push(new nh(n))}),this.Ra.forEach(n=>{e.has(n)||t.push(new th(n))}),t}va(e){this.Ea=e.Es,this.Ra=q();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return ln.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class vy{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Ty{constructor(e){this.key=e,this.Fa=!1}}class Iy{constructor(e,t,n,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new Bt(c=>Il(c),ws),this.Oa=new Map,this.Na=new Set,this.Ba=new Z(L.comparator),this.La=new Map,this.ka=new mo,this.qa={},this.Qa=new Map,this.Ka=cn.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function wy(r,e,t=!0){const n=uh(r);let s;const i=n.xa.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await rh(n,e,t,!0),s}async function Ay(r,e){const t=uh(r);await rh(t,e,!0,!1)}async function rh(r,e,t,n){const s=await H_(r.localStore,Be(e)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,t);let c;return n&&(c=await Ry(r,e,i,a==="current",s.resumeToken)),r.isPrimaryClient&&t&&Ql(r.remoteStore,s),c}async function Ry(r,e,t,n,s){r.Ua=(y,A,S)=>async function(O,D,W,G){let K=D.view.ga(W);K.ss&&(K=await Wu(O.localStore,D.query,!1).then(({documents:v})=>D.view.ga(v,K)));const te=G&&G.targetChanges.get(D.targetId),ke=G&&G.targetMismatches.get(D.targetId)!=null,ne=D.view.applyChanges(K,O.isPrimaryClient,te,ke);return Ju(O,D.targetId,ne.ba),ne.snapshot}(r,y,A,S);const i=await Wu(r.localStore,e,!0),a=new Ey(e,i.Es),c=a.ga(i.documents),l=lr.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),d=a.applyChanges(c,r.isPrimaryClient,l);Ju(r,t,d.ba);const p=new vy(e,t,a);return r.xa.set(e,p),r.Oa.has(t)?r.Oa.get(t).push(e):r.Oa.set(t,[e]),d.snapshot}async function Sy(r,e,t){const n=U(r),s=n.xa.get(e),i=n.Oa.get(s.targetId);if(i.length>1)return n.Oa.set(s.targetId,i.filter(a=>!ws(a,e))),void n.xa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await qi(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&yo(n.remoteStore,s.targetId),Wi(n,s.targetId)}).catch(mn)):(Wi(n,s.targetId),await qi(n.localStore,s.targetId,!0))}async function by(r,e){const t=U(r),n=t.xa.get(e),s=t.Oa.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),yo(t.remoteStore,n.targetId))}async function Cy(r,e,t){const n=Ly(r);try{const s=await function(a,c){const l=U(a),d=ae.now(),p=c.reduce((S,P)=>S.add(P.key),q());let y,A;return l.persistence.runTransaction("Locally write mutations","readwrite",S=>{let P=tt(),O=q();return l.hs.getEntries(S,p).next(D=>{P=D,P.forEach((W,G)=>{G.isValidDocument()||(O=O.add(W))})}).next(()=>l.localDocuments.getOverlayedDocuments(S,P)).next(D=>{y=D;const W=[];for(const G of c){const K=Gg(G,y.get(G.key).overlayedDocument);K!=null&&W.push(new Ct(G.key,K,pl(K.value.mapValue),Pe.exists(!0)))}return l.mutationQueue.addMutationBatch(S,d,W,c)}).next(D=>{A=D;const W=D.applyToLocalDocumentSet(y,O);return l.documentOverlayCache.saveOverlays(S,D.batchId,W)})}).then(()=>({batchId:A.batchId,changes:Rl(y)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let d=a.qa[a.currentUser.toKey()];d||(d=new Z(j)),d=d.insert(c,l),a.qa[a.currentUser.toKey()]=d}(n,s.batchId,t),await dr(n,s.changes),await ks(n.remoteStore)}catch(s){const i=wo(s,"Failed to persist write");t.reject(i)}}async function sh(r,e){const t=U(r);try{const n=await W_(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.La.get(i);a&&(Q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Fa=!0:s.modifiedDocuments.size>0?Q(a.Fa):s.removedDocuments.size>0&&(Q(a.Fa),a.Fa=!1))}),await dr(t,n,e)}catch(n){await mn(n)}}function Yu(r,e,t){const n=U(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.xa.forEach((i,a)=>{const c=a.view.ea(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=U(a);l.onlineState=c;let d=!1;l.queries.forEach((p,y)=>{for(const A of y.J_)A.ea(c)&&(d=!0)}),d&&So(l)}(n.eventManager,e),s.length&&n.Ma.R_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Py(r,e,t){const n=U(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.La.get(e),i=s&&s.key;if(i){let a=new Z(L.comparator);a=a.insert(i,ve.newNoDocument(i,F.min()));const c=q().add(i),l=new bs(F.min(),new Map,new Z(j),a,c);await sh(n,l),n.Ba=n.Ba.remove(i),n.La.delete(e),Co(n)}else await qi(n.localStore,e,!1).then(()=>Wi(n,e,t)).catch(mn)}async function ky(r,e){const t=U(r),n=e.batch.batchId;try{const s=await j_(t.localStore,e);oh(t,n,null),ih(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await dr(t,s)}catch(s){await mn(s)}}async function Dy(r,e,t){const n=U(r);try{const s=await function(a,c){const l=U(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return l.mutationQueue.lookupMutationBatch(d,c).next(y=>(Q(y!==null),p=y.keys(),l.mutationQueue.removeMutationBatch(d,y))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>l.localDocuments.getDocuments(d,p))})}(n.localStore,e);oh(n,e,t),ih(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await dr(n,s)}catch(s){await mn(s)}}function ih(r,e){(r.Qa.get(e)||[]).forEach(t=>{t.resolve()}),r.Qa.delete(e)}function oh(r,e,t){const n=U(r);let s=n.qa[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.qa[n.currentUser.toKey()]=s}}function Wi(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Oa.get(e))r.xa.delete(n),t&&r.Ma.Wa(n,t);r.Oa.delete(e),r.isPrimaryClient&&r.ka.yr(e).forEach(n=>{r.ka.containsKey(n)||ah(r,n)})}function ah(r,e){r.Na.delete(e.path.canonicalString());const t=r.Ba.get(e);t!==null&&(yo(r.remoteStore,t),r.Ba=r.Ba.remove(e),r.La.delete(t),Co(r))}function Ju(r,e,t){for(const n of t)n instanceof th?(r.ka.addReference(n.key,e),Ny(r,n)):n instanceof nh?(N("SyncEngine","Document no longer in limbo: "+n.key),r.ka.removeReference(n.key,e),r.ka.containsKey(n.key)||ah(r,n.key)):x()}function Ny(r,e){const t=e.key,n=t.path.canonicalString();r.Ba.get(t)||r.Na.has(n)||(N("SyncEngine","New document in limbo: "+t),r.Na.add(n),Co(r))}function Co(r){for(;r.Na.size>0&&r.Ba.size<r.maxConcurrentLimboResolutions;){const e=r.Na.values().next().value;r.Na.delete(e);const t=new L(X.fromString(e)),n=r.Ka.next();r.La.set(n,new Ty(t)),r.Ba=r.Ba.insert(t,n),Ql(r.remoteStore,new ft(Be(Is(t.path)),n,"TargetPurposeLimboResolution",Es.oe))}}async function dr(r,e,t){const n=U(r),s=[],i=[],a=[];n.xa.isEmpty()||(n.xa.forEach((c,l)=>{a.push(n.Ua(l,e,t).then(d=>{var p;if((d||t)&&n.isPrimaryClient){const y=d?!d.fromCache:(p=t?.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;n.sharedClientState.updateQueryState(l.targetId,y?"current":"not-current")}if(d){s.push(d);const y=_o.zi(l.targetId,d);i.push(y)}}))}),await Promise.all(a),n.Ma.R_(s),await async function(l,d){const p=U(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>C.forEach(d,A=>C.forEach(A.Wi,S=>p.persistence.referenceDelegate.addReference(y,A.targetId,S)).next(()=>C.forEach(A.Gi,S=>p.persistence.referenceDelegate.removeReference(y,A.targetId,S)))))}catch(y){if(!gn(y))throw y;N("LocalStore","Failed to update sequence numbers: "+y)}for(const y of d){const A=y.targetId;if(!y.fromCache){const S=p.us.get(A),P=S.snapshotVersion,O=S.withLastLimboFreeSnapshotVersion(P);p.us=p.us.insert(A,O)}}}(n.localStore,i))}async function Vy(r,e){const t=U(r);if(!t.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const n=await zl(t.localStore,e);t.currentUser=e,function(i,a){i.Qa.forEach(c=>{c.forEach(l=>{l.reject(new V(b.CANCELLED,a))})}),i.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await dr(t,n.Ts)}}function Oy(r,e){const t=U(r),n=t.La.get(e);if(n&&n.Fa)return q().add(n.key);{let s=q();const i=t.Oa.get(e);if(!i)return s;for(const a of i){const c=t.xa.get(a);s=s.unionWith(c.view.fa)}return s}}function uh(r){const e=U(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=sh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Oy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Py.bind(null,e),e.Ma.R_=_y.bind(null,e.eventManager),e.Ma.Wa=yy.bind(null,e.eventManager),e}function Ly(r){const e=U(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ky.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Dy.bind(null,e),e}class ds{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Cs(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return q_(this.persistence,new U_,e.initialUser,this.serializer)}ja(e){return new $l(go.ei,this.serializer)}za(e){return new K_}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ds.provider={build:()=>new ds};class My extends ds{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Q(this.persistence.referenceDelegate instanceof ls);const n=this.persistence.referenceDelegate.garbageCollector;return new A_(n,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Re.withCacheSize(this.cacheSizeBytes):Re.DEFAULT;return new $l(n=>ls.ei(n,t),this.serializer)}}class $i{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Yu(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vy.bind(null,this.syncEngine),await py(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new gy}()}createDatastore(e){const t=Cs(e.databaseInfo.databaseId),n=function(i){return new X_(i)}(e.databaseInfo);return function(i,a,c,l){return new ty(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,a,c){return new ry(n,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Yu(this.syncEngine,t,0),function(){return zu.p()?new zu:new Q_}())}createSyncEngine(e,t){return function(s,i,a,c,l,d,p){const y=new Iy(s,i,a,c,l,d);return p&&(y.$a=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=U(s);N("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await hr(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}$i.provider={build:()=>new $i};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):et("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=Ee.UNAUTHENTICATED,this.clientId=hl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async a=>{N("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(N("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Je;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=wo(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function yi(r,e){r.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await zl(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Xu(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Fy(r);N("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Hu(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Hu(e.remoteStore,s)),r._onlineComponents=e}async function Fy(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await yi(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;sn("Error using user provided cache. Falling back to memory cache: "+t),await yi(r,new ds)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await yi(r,new My(void 0));return r._offlineComponents}async function ch(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await Xu(r,r._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await Xu(r,new $i))),r._onlineComponents}function Uy(r){return ch(r).then(e=>e.syncEngine)}async function fs(r){const e=await ch(r),t=e.eventManager;return t.onListen=wy.bind(null,e.syncEngine),t.onUnlisten=Sy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Ay.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=by.bind(null,e.syncEngine),t}function By(r,e,t={}){const n=new Je;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,d){const p=new Po({next:A=>{p.eu(),a.enqueueAndForget(()=>Ro(i,y));const S=A.docs.has(c);!S&&A.fromCache?d.reject(new V(b.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&A.fromCache&&l&&l.source==="server"?d.reject(new V(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(A)},error:A=>d.reject(A)}),y=new bo(Is(c.path),p,{includeMetadataChanges:!0,ua:!0});return Ao(i,y)}(await fs(r),r.asyncQueue,e,t,n)),n.promise}function qy(r,e,t={}){const n=new Je;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,d){const p=new Po({next:A=>{p.eu(),a.enqueueAndForget(()=>Ro(i,y)),A.fromCache&&l.source==="server"?d.reject(new V(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(A)},error:A=>d.reject(A)}),y=new bo(c,p,{includeMetadataChanges:!0,ua:!0});return Ao(i,y)}(await fs(r),r.asyncQueue,e,t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(r,e,t){if(!t)throw new V(b.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function jy(r,e,t,n){if(e===!0&&n===!0)throw new V(b.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function ec(r){if(!L.isDocumentKey(r))throw new V(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function tc(r){if(L.isDocumentKey(r))throw new V(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Ds(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":x()}function De(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new V(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ds(r);throw new V(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new V(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lh((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ns{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Zm;switch(n.type){case"firstParty":return new rg(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new V(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Zu.get(t);n&&(N("ComponentProvider","Removing Datastore"),Zu.delete(t),n.terminate())}(this),Promise.resolve()}}function Wy(r,e,t,n={}){var s;const i=(r=De(r,Ns))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&sn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),n.mockUserToken){let c,l;if(typeof n.mockUserToken=="string")c=n.mockUserToken,l=Ee.MOCK_USER;else{c=fd(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new V(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ee(d)}r._authCredentials=new eg(new ll(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new jt(this.firestore,e,this._query)}}class Ae{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ae(this.firestore,e,this._key)}}class yt extends jt{constructor(e,t,n){super(e,t,Is(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ae(this.firestore,null,new L(e))}withConverter(e){return new yt(this.firestore,e,this._path)}}function Qr(r,e,...t){if(r=oe(r),hh("collection","path",e),r instanceof Ns){const n=X.fromString(e,...t);return tc(n),new yt(r,null,n)}{if(!(r instanceof Ae||r instanceof yt))throw new V(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(X.fromString(e,...t));return tc(n),new yt(r.firestore,null,n)}}function Hn(r,e,...t){if(r=oe(r),arguments.length===1&&(e=hl.newId()),hh("doc","path",e),r instanceof Ns){const n=X.fromString(e,...t);return ec(n),new Ae(r,null,new L(n))}{if(!(r instanceof Ae||r instanceof yt))throw new V(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(X.fromString(e,...t));return ec(n),new Ae(r.firestore,r instanceof yt?r.converter:null,new L(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Gl(this,"async_queue_retry"),this.fu=()=>{const n=_i();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.r_.Jo()},this.gu=e;const t=_i();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=_i();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new Je;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!gn(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(n=>{this.Au=n,this.Ru=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(n);throw et("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.Ru=!1,n))));return this.gu=t,t}enqueueAfterDelay(e,t,n){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const s=Io.createAndSchedule(this,e,t,n,i=>this.Su(i));return this.Eu.push(s),s}pu(){this.Au&&x()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}function sc(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class At extends Ns{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new rc,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new rc(e),this._firestoreClient=void 0,await e}}}function $y(r,e){const t=typeof r=="object"?r:Ec(),n=typeof r=="string"?r:"(default)",s=Ki(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=hd("firestore");i&&Wy(s,...i)}return s}function fr(r){if(r._terminated)throw new V(b.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||zy(r),r._firestoreClient}function zy(r){var e,t,n;const s=r._freezeSettings(),i=function(c,l,d,p){return new yg(c,l,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,lh(p.experimentalLongPollingOptions),p.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new xy(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(c){const l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hn(fe.fromBase64String(e))}catch(t){throw new V(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new hn(fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new de(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=/^__.*__$/;class Gy{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Ct(e,this.data,this.fieldMask,t,this.fieldTransforms):new cr(e,this.data,t,this.fieldTransforms)}}class dh{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Ct(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function fh(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class No{constructor(e,t,n,s,i,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new No(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:n,Nu:!1});return s.Bu(e),s}Lu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:n,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return ps(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(fh(this.Mu)&&Hy.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class Ky{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Cs(e)}$u(e,t,n,s=!1){return new No({Mu:e,methodName:t,Ku:n,path:de.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ls(r){const e=r._freezeSettings(),t=Cs(r._databaseId);return new Ky(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Vo(r,e,t,n,s,i={}){const a=r.$u(i.merge||i.mergeFields?2:0,e,t,s);Lo("Data must be an object, but it was:",a,n);const c=ph(n,a);let l,d;if(i.merge)l=new Ce(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const y of i.mergeFields){const A=zi(e,y,t);if(!a.contains(A))throw new V(b.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);gh(p,A)||p.push(A)}l=new Ce(p),d=a.fieldTransforms.filter(y=>l.covers(y.field))}else l=null,d=a.fieldTransforms;return new Gy(new Se(c),l,d)}class Ms extends Os{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ms}}class Oo extends Os{_toFieldTransform(e){return new Wg(e.path,new Zn)}isEqual(e){return e instanceof Oo}}function Qy(r,e,t,n){const s=r.$u(1,e,t);Lo("Data must be an object, but it was:",s,n);const i=[],a=Se.empty();bt(n,(l,d)=>{const p=Mo(e,l,t);d=oe(d);const y=s.Lu(p);if(d instanceof Ms)i.push(p);else{const A=pr(d,y);A!=null&&(i.push(p),a.set(p,A))}});const c=new Ce(i);return new dh(a,c,s.fieldTransforms)}function Yy(r,e,t,n,s,i){const a=r.$u(1,e,t),c=[zi(e,n,t)],l=[s];if(i.length%2!=0)throw new V(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<i.length;A+=2)c.push(zi(e,i[A])),l.push(i[A+1]);const d=[],p=Se.empty();for(let A=c.length-1;A>=0;--A)if(!gh(d,c[A])){const S=c[A];let P=l[A];P=oe(P);const O=a.Lu(S);if(P instanceof Ms)d.push(S);else{const D=pr(P,O);D!=null&&(d.push(S),p.set(S,D))}}const y=new Ce(d);return new dh(p,y,a.fieldTransforms)}function Jy(r,e,t,n=!1){return pr(t,r.$u(n?4:3,e))}function pr(r,e){if(mh(r=oe(r)))return Lo("Unsupported field value:",e,r),ph(r,e);if(r instanceof Os)return function(n,s){if(!fh(s.Mu))throw s.qu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(n,s){const i=[];let a=0;for(const c of n){let l=pr(c,s.ku(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(r,e)}return function(n,s){if((n=oe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Bg(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ae.fromDate(n);return{timestampValue:cs(s.serializer,i)}}if(n instanceof ae){const i=new ae(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:cs(s.serializer,i)}}if(n instanceof ko)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof hn)return{bytesValue:xl(s.serializer,n._byteString)};if(n instanceof Ae){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:po(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Do)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.qu("VectorValues must only contain numeric values.");return co(c.serializer,l)})}}}}}}(n,s);throw s.qu(`Unsupported field value: ${Ds(n)}`)}(r,e)}function ph(r,e){const t={};return dl(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bt(r,(n,s)=>{const i=pr(s,e.Ou(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function mh(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ae||r instanceof ko||r instanceof hn||r instanceof Ae||r instanceof Os||r instanceof Do)}function Lo(r,e,t){if(!mh(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const n=Ds(t);throw n==="an object"?e.qu(r+" a custom object"):e.qu(r+" "+n)}}function zi(r,e,t){if((e=oe(e))instanceof Vs)return e._internalPath;if(typeof e=="string")return Mo(r,e);throw ps("Field path arguments must be of type string or ",r,!1,void 0,t)}const Xy=new RegExp("[~\\*/\\[\\]]");function Mo(r,e,t){if(e.search(Xy)>=0)throw ps(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Vs(...e.split("."))._internalPath}catch{throw ps(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function ps(r,e,t,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${n}`),a&&(l+=` in document ${s}`),l+=")"),new V(b.INVALID_ARGUMENT,c+r+l)}function gh(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Zy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(xo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Zy extends _h{data(){return super.data()}}function xo(r,e){return typeof e=="string"?Mo(r,e):e instanceof Vs?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new V(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fo{}class eE extends Fo{}function ic(r,e,...t){let n=[];e instanceof Fo&&n.push(e),n=n.concat(t),function(i){const a=i.filter(l=>l instanceof Uo).length,c=i.filter(l=>l instanceof xs).length;if(a>1||a>0&&c>0)throw new V(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class xs extends eE{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new xs(e,t,n)}_apply(e){const t=this._parse(e);return Eh(e._query,t),new jt(e.firestore,e.converter,Li(e._query,t))}_parse(e){const t=Ls(e.firestore);return function(i,a,c,l,d,p,y){let A;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new V(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){uc(y,p);const S=[];for(const P of y)S.push(ac(l,i,P));A={arrayValue:{values:S}}}else A=ac(l,i,y)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||uc(y,p),A=Jy(c,a,y,p==="in"||p==="not-in");return ie.create(d,p,A)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function oc(r,e,t){const n=e,s=xo("where",r);return xs._create(s,n,t)}class Uo extends Fo{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Uo(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:Oe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)Eh(a,l),a=Li(a,l)}(e._query,t),new jt(e.firestore,e.converter,Li(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ac(r,e,t){if(typeof(t=oe(t))=="string"){if(t==="")throw new V(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Tl(e)&&t.indexOf("/")!==-1)throw new V(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(X.fromString(t));if(!L.isDocumentKey(n))throw new V(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Ru(r,new L(n))}if(t instanceof Ae)return Ru(r,t._key);throw new V(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ds(t)}.`)}function uc(r,e){if(!Array.isArray(r)||r.length===0)throw new V(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Eh(r,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new V(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class tE{convertValue(e,t="none"){switch(It(e)){case 0:return null;case 1:return e.booleanValue;case 2:return re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Tt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw x()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return bt(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var t,n,s;const i=(s=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(a=>re(a.doubleValue));return new Do(i)}convertGeoPoint(e){return new ko(re(e.latitude),re(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ts(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Yn(e));default:return null}}convertTimestamp(e){const t=vt(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=X.fromString(e);Q(Wl(n));const s=new Jn(n.get(1),n.get(3)),i=new L(n.popFirst(5));return s.isEqual(t)||et(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vh extends _h{constructor(e,t,n,s,i,a){super(e,t,n,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Yr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(xo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Yr extends vh{data(e={}){return super.data(e)}}class Th{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Bn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Yr(this._firestore,this._userDataWriter,n.key,n,new Bn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new Yr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Bn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Yr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Bn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:nE(c.type),doc:l,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function nE(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(r){r=De(r,Ae);const e=De(r.firestore,At);return By(fr(e),r._key).then(t=>Ih(e,r,t))}class qo extends tE{constructor(e){super(),this.firestore=e}convertBytes(e){return new hn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ae(this.firestore,null,t)}}function sE(r){r=De(r,jt);const e=De(r.firestore,At),t=fr(e),n=new qo(e);return yh(r._query),qy(t,r._query).then(s=>new Th(e,n,r,s))}function iE(r,e,t){r=De(r,Ae);const n=De(r.firestore,At),s=Bo(r.converter,e,t);return jo(n,[Vo(Ls(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,Pe.none())])}function oE(r,e){const t=De(r.firestore,At),n=Hn(r),s=Bo(r.converter,e);return jo(t,[Vo(Ls(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,Pe.exists(!1))]).then(()=>n)}function aE(r,...e){var t,n,s;r=oe(r);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||sc(e[a])||(i=e[a],a++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(sc(e[a])){const y=e[a];e[a]=(t=y.next)===null||t===void 0?void 0:t.bind(y),e[a+1]=(n=y.error)===null||n===void 0?void 0:n.bind(y),e[a+2]=(s=y.complete)===null||s===void 0?void 0:s.bind(y)}let l,d,p;if(r instanceof Ae)d=De(r.firestore,At),p=Is(r._key.path),l={next:y=>{e[a]&&e[a](Ih(d,r,y))},error:e[a+1],complete:e[a+2]};else{const y=De(r,jt);d=De(y.firestore,At),p=y._query;const A=new qo(d);l={next:S=>{e[a]&&e[a](new Th(d,A,y,S))},error:e[a+1],complete:e[a+2]},yh(r._query)}return function(A,S,P,O){const D=new Po(O),W=new bo(S,D,P);return A.asyncQueue.enqueueAndForget(async()=>Ao(await fs(A),W)),()=>{D.eu(),A.asyncQueue.enqueueAndForget(async()=>Ro(await fs(A),W))}}(fr(d),p,c,l)}function jo(r,e){return function(n,s){const i=new Je;return n.asyncQueue.enqueueAndForget(async()=>Cy(await Uy(n),s,i)),i.promise}(fr(r),e)}function Ih(r,e,t){const n=t.docs.get(e._key),s=new qo(r);return new vh(r,s,e._key,n,new Bn(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ls(e)}set(e,t,n){this._verifyNotCommitted();const s=Ei(e,this._firestore),i=Bo(s.converter,t,n),a=Vo(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(a.toMutation(s._key,Pe.none())),this}update(e,t,n,...s){this._verifyNotCommitted();const i=Ei(e,this._firestore);let a;return a=typeof(t=oe(t))=="string"||t instanceof Vs?Yy(this._dataReader,"WriteBatch.update",i._key,t,n,s):Qy(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,Pe.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ei(e,this._firestore);return this._mutations=this._mutations.concat(new lo(t._key,Pe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new V(b.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ei(r,e){if((r=oe(r)).firestore!==e)throw new V(b.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}function Xt(){return new Oo("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(r){return fr(r=De(r,At)),new uE(r,e=>jo(r,e))}(function(e,t=!0){(function(s){pn=s})(dn),rn(new Lt("firestore",(n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),c=new At(new tg(n.getProvider("auth-internal")),new ig(n.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new V(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jn(d.options.projectId,p)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),gt(Eu,"4.7.6",e),gt(Eu,"4.7.6","esm2017")})();let vi,dt,Le;try{const r={apiKey:"AIzaSyB1dlHRhLA71PxCgVLjOieUcUF22DWx6zY",authDomain:"autonomy-heroes.firebaseapp.com",projectId:"autonomy-heroes",storageBucket:"autonomy-heroes.firebasestorage.app",messagingSenderId:"266526530869",appId:"1:266526530869:web:ea95143735be497ca8007c",measurementId:"G-70PG5B4S39"},e=["apiKey","authDomain","projectId"];for(const t of e)if(!r[t])throw new Error(`Missing required Firebase config key: ${t}`);vi=yc(r),dt=Jm(vi),Le=$y(vi)}catch(r){throw console.error("Firebase initialization failed:",r),new Error("Failed to initialize Firebase: "+r.message)}class H{static formatDate(e){if(!(e instanceof Date))throw new Error("Invalid date object");return e.toISOString().split("T")[0]}static parseDate(e){const t=new Date(e);if(isNaN(t))throw new Error("Invalid date string");return t}static normalizeDate(e){if(!(e instanceof Date))throw new Error("Invalid date object");return new Date(e.getFullYear(),e.getMonth(),e.getDate())}static getDateDifference(e,t){const n=this.normalizeDate(e),s=this.normalizeDate(t);return Math.ceil((s-n)/(1e3*60*60*24))}static isDateInRange(e,t,n){const s=this.getStartOfDay(new Date(e)),i=this.getStartOfDay(new Date(t)),a=this.getStartOfDay(new Date(n));return s>=i&&s<=a}static getCurrentWeek(){return this.getWeekStart(new Date)}static getWeekStart(e){const t=new Date(e);t.setHours(0,0,0,0);const n=t.getDay(),s=n===0?-6:1-n;return t.setDate(t.getDate()+s),t}static getWeekEnd(e){const t=this.getWeekStart(e),n=new Date(t);return n.setDate(n.getDate()+6),n.setHours(23,59,59,999),n}static isSameWeek(e,t){const n=this.getWeekStart(new Date(e)),s=this.getWeekStart(new Date(t));return this.isSameDay(n,s)}static isSameDay(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}static getStartOfDay(e){const t=new Date(e);return t.setHours(0,0,0,0),t}static getEndOfDay(e){const t=new Date(e);return t.setHours(23,59,59,999),t}static getWeekNumber(e){const t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),n=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-n);const s=new Date(Date.UTC(t.getUTCFullYear(),0,1));return Math.ceil(((t-s)/864e5+1)/7)}static formatDateForDisplay(e){return e.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}}class He{static createElement(e,t={}){const n=document.createElement(e);return t.text&&(n.textContent=t.text),t.className&&(n.className=t.className),t.attributes&&Object.keys(t.attributes).forEach(s=>{n.setAttribute(s,t.attributes[s])}),n}static removeAllChildren(e){for(;e.firstChild;)e.removeChild(e.firstChild)}static appendChildren(e,t){t.forEach(n=>e.appendChild(n))}static toggleVisibility(e,t,n="hidden"){t?e.classList.remove(n):e.classList.add(n)}}class cE{constructor(){try{this.verifyRequiredElements(),this.initializeState(),this.bindEvents(),this.setupAuthPersistence()}catch(e){throw console.error("Error initializing AuthManager:",e),this.showError("Failed to initialize authentication"),e}}verifyRequiredElements(){const e=["authContainer","calendarContainer","userEmail","loginTab","registerTab","loginForm","registerForm","authErrorContainer","authErrorMessage","logoutBtn","appLoading"],t=e.filter(n=>!document.getElementById(n));if(t.length>0)throw new Error(`Missing required elements: ${t.join(", ")}`);this.elements=e.reduce((n,s)=>(n[s]=document.getElementById(s),n),{})}initializeState(){this.state={isLoading:!1,currentUser:null,isRegistering:!1}}bindEvents(){this.elements.loginTab.addEventListener("click",()=>this.switchTab("login")),this.elements.registerTab.addEventListener("click",()=>this.switchTab("register")),this.elements.loginForm.addEventListener("submit",e=>this.handleLogin(e)),this.elements.registerForm.addEventListener("submit",e=>this.handleRegister(e)),this.elements.logoutBtn.addEventListener("click",()=>this.handleLogout())}async setupAuthPersistence(){try{await Fp(dt,Qc),dt.onAuthStateChanged(e=>this.handleAuthStateChange(e))}catch(e){console.error("Error setting auth persistence:",e),this.showError("Failed to initialize authentication")}}async handleAuthStateChange(e){this.state.currentUser=e,this.elements.appLoading.style.display="none",e?(this.elements.authContainer.classList.remove("active"),this.elements.calendarContainer.classList.add("active"),this.elements.userEmail.textContent=e.email,this.clearError()):(this.elements.authContainer.classList.add("active"),this.elements.calendarContainer.classList.remove("active"),this.elements.userEmail.textContent="")}switchTab(e){this.state.isRegistering=e==="register",this.elements.loginTab.classList.toggle("active",!this.state.isRegistering),this.elements.registerTab.classList.toggle("active",this.state.isRegistering),this.elements.loginForm.classList.toggle("active",!this.state.isRegistering),this.elements.registerForm.classList.toggle("active",this.state.isRegistering),this.clearError()}async handleLogin(e){if(e.preventDefault(),this.state.isLoading)return;const t=e.target,n=t.email.value.trim(),s=t.password.value;this.setLoading(!0);try{await xp(dt,n,s),t.reset(),this.clearError()}catch(i){console.error("Login error:",i),this.showError(this.getAuthErrorMessage(i))}finally{this.setLoading(!1)}}async handleRegister(e){if(e.preventDefault(),this.state.isLoading)return;const t=e.target,n=t.email.value.trim(),s=t.password.value,i=t.firstName.value.trim(),a=t.lastName.value.trim();this.setLoading(!0);try{const c=await Mp(dt,n,s),l=Hn(Qr(Le,"users"),c.user.uid);await iE(l,{firstName:i,lastName:a,email:n,role:"worker",createdAt:Xt(),updatedAt:Xt()}),t.reset(),this.clearError()}catch(c){console.error("Registration error:",c),this.showError(this.getAuthErrorMessage(c))}finally{this.setLoading(!1)}}async handleLogout(){if(!this.state.isLoading){this.setLoading(!0);try{await qp(dt),this.clearError()}catch(e){console.error("Logout error:",e),this.showError("Failed to log out. Please try again.")}finally{this.setLoading(!1)}}}setLoading(e){this.state.isLoading=e,[...this.elements.loginForm.querySelectorAll("button"),...this.elements.registerForm.querySelectorAll("button"),this.elements.logoutBtn].forEach(n=>{n.disabled=e})}showError(e){this.elements.authErrorContainer.style.display="block",this.elements.authErrorMessage.textContent=e}clearError(){this.elements.authErrorContainer.style.display="none",this.elements.authErrorMessage.textContent=""}getAuthErrorMessage(e){switch(e.code){case"auth/user-not-found":case"auth/wrong-password":return"Invalid email or password";case"auth/email-already-in-use":return"Email is already registered";case"auth/weak-password":return"Password should be at least 6 characters";case"auth/invalid-email":return"Invalid email address";default:return"An error occurred. Please try again."}}}class lE{constructor(e){if(!e)throw new Error("TimeTrackingCalendar requires a valid userId");if(!dt?.currentUser)throw new Error("User must be authenticated");this.userId=e,this.timeEntries=new Map,this.currentWeek=new Date,this.isOnline=navigator.onLine,this.isLoading=!1,this.abortController=new AbortController,this.eventListeners=new Map,this.handlePrevWeek=this.handlePrevWeek.bind(this),this.handleNextWeek=this.handleNextWeek.bind(this),this.handleDayClick=this.handleDayClick.bind(this),this.handleSubmitWeek=this.handleSubmitWeek.bind(this),this.handleApproveWeek=this.handleApproveWeek.bind(this),this.handleTodayClick=this.handleTodayClick.bind(this),this.initializeNetworkListeners()}addEventListenerSafe(e,t,n,s={}){e&&(e.addEventListener(t,n,s),this.eventListeners.set(`${e.id||"unknown"}-${t}`,{element:e,type:t,fn:n}))}initializeNetworkListeners(){const e=()=>{this.isOnline=!0,this.isLoading||this.loadData()},t=()=>{this.isOnline=!1,this.showNotification("warning","You are offline. Changes will be saved locally.")};this.addEventListenerSafe(window,"online",e),this.addEventListenerSafe(window,"offline",t)}async initializeCalendar(e){try{if(this.isLoading=!0,this.abortController.abort(),this.abortController=new AbortController,this.container=document.getElementById(e),!this.container)throw new Error(`Container element '${e}' not found`);await this.cleanup(),await this.setupUserRole(),this.setupCalendarStructure(),await this.loadData(),this.setupRealTimeUpdates(),this.attachEventListeners()}catch(t){throw console.error("Calendar initialization failed:",t),this.showError("Failed to initialize calendar"),t}finally{this.isLoading=!1}}async setupUserRole(){try{const e=Hn(Le,"users",this.userId),t=await rE(e);if(t.exists()){const n=t.data();this.userRole=n.role||"worker",this.isManager=this.userRole==="manager"||this.userRole==="admin"}else this.userRole="worker",this.isManager=!1}catch(e){console.error("Error fetching user role:",e),this.userRole="worker",this.isManager=!1}}setupCalendarStructure(){H.getWeekStart(this.currentWeek);const e=He.createElement("div",{className:"calendar-inner"});e.innerHTML=`
    <div class="calendar-header">
        <div class="month-navigation">
            <div class="nav-section">
                <button class="nav-button prev-month" aria-label="Previous month">
                    ←
                </button>
                <h2 class="current-month">${new Date().toLocaleString("default",{month:"long",year:"numeric"})}</h2>
                <button class="nav-button next-month" aria-label="Next month">
                    →
                </button>
            </div>
        </div>
    </div>
    <div class="calendar-grid">
        <div class="weekdays">
            ${["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(n=>`<div>${n}</div>`).join("")}
        </div>
        <div class="days"></div>
    </div>
    `;const t=document.createElement("div");t.className="calendar-footer",t.innerHTML=`
        <div class="week-summary">
            <div class="total-hours">Total: <span>0</span></div>
            <div class="regular-hours">Regular: <span>0</span></div>
            <div class="overtime-hours">Overtime: <span>0</span></div>
            <div class="pto-hours">PTO: <span>0</span></div>
            <div class="unpaid-hours">Unpaid: <span>0</span></div>
        </div>
        <div class="week-actions">
            <button class="submit-week" disabled>Submit Week</button>
            ${this.isManager?'<button class="approve-week" disabled>Approve Week</button>':""}
        </div>
    `,He.removeAllChildren(this.container),this.container.appendChild(e),this.container.appendChild(t),this.elements={grid:e.querySelector(".days"),monthDisplay:e.querySelector(".current-month"),prevButton:e.querySelector(".prev-month"),nextButton:e.querySelector(".next-month"),submitButton:t.querySelector(".submit-week"),approveButton:t.querySelector(".approve-week"),totalHours:t.querySelector(".total-hours span"),regularHours:t.querySelector(".regular-hours span"),overtimeHours:t.querySelector(".overtime-hours span"),ptoHours:t.querySelector(".pto-hours span"),unpaidHours:t.querySelector(".unpaid-hours span")},this.elements.submitButton&&this.elements.submitButton.addEventListener("click",this.handleSubmitWeek),this.render()}async loadData(){if(!this.isLoading){this.isLoading=!0,this.setLoading(!0);try{const e=Qr(Le,"timeEntries"),t=ic(e,oc("userId","==",this.userId)),n=await sE(t);this.timeEntries.clear(),n.forEach(s=>{const i=s.data();this.timeEntries.set(i.date,{...i,id:s.id})}),this.render()}catch(e){if(e.name==="AbortError"){console.log("Data loading aborted");return}throw console.error("Error loading data:",e),this.showError("Failed to load calendar data"),e}finally{this.isLoading=!1,this.setLoading(!1)}}}setupRealTimeUpdates(){if(this.unsubscribe&&this.unsubscribe(),!this.isOnline)return;const e=Qr(Le,"timeEntries"),t=ic(e,oc("userId","==",this.userId));this.unsubscribe=aE(t,n=>{n.docChanges().forEach(s=>{const i=s.doc.data();s.type==="added"||s.type==="modified"?this.timeEntries.set(i.date,{...i,id:s.doc.id}):s.type==="removed"&&this.timeEntries.delete(i.date)}),this.render()},n=>{console.error("Error in real-time updates:",n),this.showNotification("error","Failed to get real-time updates")})}getWeekSummary(){const e=H.getWeekStart(this.currentWeek),t=H.getWeekEnd(this.currentWeek);console.log("Week Summary Calculation:",{weekStart:e.toISOString(),weekEnd:t.toISOString(),entries:Array.from(this.timeEntries.entries()).map(([s,i])=>({date:s,isInRange:H.isDateInRange(new Date(s),e,t),hours:i.hours,isSubmitted:i.isSubmitted}))});let n={totalHours:0,regularHours:0,overtimeHours:0,ptoHours:0,unpaidLeaveHours:0,isSubmitted:!1,isApproved:!1};for(const s of this.timeEntries.values()){const i=new Date(s.date);if(console.log("Processing entry:",{date:s.date,entryDate:i.toISOString(),isInRange:H.isDateInRange(i,e,t),hours:s.hours,isSubmitted:s.isSubmitted}),H.isDateInRange(i,e,t)){if(s.isTimeOff)s.timeOffType==="paid"?(n.ptoHours+=s.hours||0,n.totalHours+=s.hours||0):n.unpaidLeaveHours+=s.hours||0;else{const a=s.hours||0;n.totalHours+=a,a>8?(n.regularHours+=8,n.overtimeHours+=a-8):n.regularHours+=a}s.isSubmitted&&(n.isSubmitted=!0),s.isApproved&&(n.isApproved=!0)}}return n}render(){if(!this.elements?.grid)return;const e=new Date(this.currentWeek.getFullYear(),this.currentWeek.getMonth(),1),t=new Date(this.currentWeek.getFullYear(),this.currentWeek.getMonth()+1,0),n=H.getStartOfDay(new Date);He.removeAllChildren(this.elements.grid);const s=(e.getDay()+6)%7,i=t.getDate();for(let a=0;a<s;a++){const c=He.createElement("div",{className:"calendar-day empty"});this.elements.grid.appendChild(c)}for(let a=1;a<=i;a++){const c=new Date(this.currentWeek.getFullYear(),this.currentWeek.getMonth(),a),l=H.formatDate(c),d=this.timeEntries.get(l);console.log("Day Status:",{date:l,entry:d,isSubmitted:d?.isSubmitted,hasEntry:!!d});const p=H.isSameDay(H.getStartOfDay(c),n),y=H.isSameWeek(c,n),A=c<H.getStartOfDay(n),S=c>H.getEndOfDay(n),P=He.createElement("div",{className:`calendar-day
                    ${p?"today":""}
                    ${y?"current-week":""}
                    ${A?"past":""}
                    ${S?"future":""}
                    ${d?"has-entry":""}
                    ${d?.isSubmitted?"submitted":""}`});P.dataset.date=l,this.elements.grid.appendChild(P),P.innerHTML=`
    <div class="day-number">${a}</div>
    ${d?`
        <div class="entry-details">
            <span class="hours">${d.hours}h</span>
            ${d.isTimeOff?`
                <span class="badge time-off ${d.timeOffType==="paid"?"pto":"unpaid"}"
          data-tooltip="${d.timeOffType==="paid"?`PTO - ${d.hours}h`:"Unpaid Leave"}">
        ${d.timeOffType==="paid"?"PTO":"Unpaid"}
    </span>
`:""}
${!d.isTimeOff&&d.hours>8?`<span class="badge overtime" 
           data-tooltip="8h + ${(d.hours-8).toFixed(1)}h OT">
        OT
    </span>`:""}
        </div>
    `:""}`,P.addEventListener("click",()=>this.handleDayClick(c,d)),this.elements.grid.appendChild(P)}this.updateControls()}updateControls(){const e=this.getWeekSummary(),t=H.isSameWeek(this.currentWeek,new Date);this.elements.totalHours&&(this.elements.totalHours.textContent=(e.totalHours||0).toFixed(1)),this.elements.regularHours&&(this.elements.regularHours.textContent=(e.regularHours||0).toFixed(1)),this.elements.overtimeHours&&(this.elements.overtimeHours.textContent=(e.overtimeHours||0).toFixed(1)),this.elements.ptoHours&&(this.elements.ptoHours.textContent=(e.ptoHours||0).toFixed(1)),this.elements.unpaidHours&&(this.elements.unpaidHours.textContent=(e.unpaidLeaveHours||0).toFixed(1)),this.elements.monthDisplay&&(this.elements.monthDisplay.textContent=this.currentWeek.toLocaleString("default",{month:"long",year:"numeric"})),this.elements.submitButton&&(this.elements.submitButton.disabled=!t||e.isSubmitted,this.elements.submitButton.replaceWith(this.elements.submitButton.cloneNode(!0)),this.elements.submitButton=this.container.querySelector(".submit-week"),e.isSubmitted?this.elements.submitButton.addEventListener("click",()=>{this.showNotification("warning","This week has been submitted. Contact your manager for changes.")}):this.elements.submitButton.addEventListener("click",this.handleSubmitWeek)),this.elements.approveButton&&(this.elements.approveButton.disabled=!this.isManager||!e.isSubmitted||e.isApproved)}handleDayClick(e,t){console.log("Click details:",{date:e,currentWeek:this.currentWeek,isSameWeek:H.isSameWeek(e,new Date),entry:t});const n=H.getWeekStart(e),s=H.getWeekEnd(e);if(Array.from(this.timeEntries.values()).some(c=>{const l=new Date(c.date);return l>=n&&l<=s&&c.isSubmitted})){this.showNotification("warning","This week has been submitted. Contact your manager for changes.");return}const a=new CustomEvent("dayClick",{bubbles:!0,detail:{date:e,entry:t}});this.container.dispatchEvent(a)}handleTodayClick(){this.currentWeek=new Date,this.render()}handlePrevWeek(){this.currentWeek.setMonth(this.currentWeek.getMonth()-1),this.render()}handleNextWeek(){this.currentWeek.setMonth(this.currentWeek.getMonth()+1),this.render()}async handleSubmitWeek(){if(console.log("Security Check:",JSON.stringify(Array.from(this.timeEntries.entries()).map(([t,n])=>({date:t,userId:n.userId,matches:n.userId===this.userId,isSubmitted:n.isSubmitted,id:n.id})),null,2)),this.getWeekSummary().isSubmitted){this.showNotification("warning","Week has already been submitted");return}try{const t=H.getWeekStart(this.currentWeek),n=H.getWeekEnd(this.currentWeek);console.log("Week boundaries:",{weekStart:t.toISOString(),weekEnd:n.toISOString(),currentWeek:this.currentWeek.toISOString()});const s=Array.from(this.timeEntries.entries()).filter(([a,c])=>{const l=new Date(a),d=l>=t&&l<=n,p=!c.isSubmitted;return console.log("Entry Check:",{dateStr:a,isInRange:d,canSubmit:p}),d&&p});if(s.length===0){this.showNotification("warning","No entries to submit");return}const i=cc(Le);for(const[a,c]of s){const l=Hn(Le,"timeEntries",c.id);console.log("Adding to batch:",{dateStr:a,entryId:c.id}),i.update(l,{isSubmitted:!0,submittedAt:Xt()})}await i.commit(),await this.loadData(),this.showNotification("success","Week submitted successfully")}catch(t){console.error("Error submitting week:",t),this.showNotification("error","Failed to submit week")}}showConfirmDialog({title:e,message:t,confirmText:n="Confirm",cancelText:s="Cancel"}){return new Promise(i=>{const a=He.createElement("div",{className:"confirmation-dialog",innerHTML:`
                <div class="confirmation-content">
                    <h3>${e}</h3>
                    <p>${t}</p>
                    <div class="confirmation-actions">
                        <button class="btn-secondary" data-action="cancel">${s}</button>
                        <button class="btn-primary" data-action="confirm">${n}</button>
                    </div>
                </div>
            `}),c=l=>{l.target.dataset.action==="confirm"?i(!0):i(!1),a.remove()};a.querySelector('[data-action="confirm"]').addEventListener("click",c),a.querySelector('[data-action="cancel"]').addEventListener("click",c),document.body.appendChild(a)})}getEntryState(e,t){return{isToday:H.isSameDay(H.getStartOfDay(e),new Date),isCurrentWeek:H.isSameWeek(e,new Date),isPast:e<H.getStartOfDay(new Date),isFuture:e>H.getEndOfDay(new Date),hasEntry:!!t,isSubmitted:t?.isSubmitted||!1,isApproved:t?.isApproved||!1,hoursType:this.getHoursType(t)}}getHoursType(e){return e?e.isTimeOff?e.timeOffType:e.hours>8?"overtime":"regular":"none"}updateSubmittedStatus(){if(this.getWeekSummary().isSubmitted){const t=He.createElement("div",{className:"week-submitted-message",innerHTML:`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="currentColor"/>
                </svg>
                Week submitted. Contact manager for changes.
            `}),n=this.container.querySelector(".week-summary");n.querySelector(".week-submitted-message")||n.appendChild(t)}}isCurrentWeekEditable(){const e=this.getWeekSummary();return H.isSameWeek(this.currentWeek,new Date)&&!e.isSubmitted}setLoading(e){this.container.classList.toggle("loading",e),this.elements.submitButton&&(this.elements.submitButton.disabled=e)}showNotification(e,t){const n=He.createElement("div",{className:`calendar-notification ${e}`,text:t});this.container.appendChild(n),setTimeout(()=>n.remove(),3e3)}attachEventListeners(){this.elements.prevButton?.addEventListener("click",this.handlePrevWeek),this.elements.nextButton?.addEventListener("click",this.handleNextWeek),this.elements.todayButton?.addEventListener("click",this.handleTodayClick),this.elements.submitButton?.addEventListener("click",this.handleSubmitWeek),this.elements.approveButton&&(this.elements.approveButton.disabled=!this.isManager||!summary.isSubmitted||summary.isApproved)}async addTimeEntry(e,t){if(!H.isSameWeek(e,new Date))throw new Error("Can only add entries for the current week");try{const n={date:H.formatDate(e),userId:this.userId,weekStart:H.formatDate(H.getWeekStart(e)),hours:t.hours,regularHours:t.hours<=8?t.hours:8,overtimeHours:t.hours>8?t.hours-8:0,isTimeOff:t.isTimeOff,timeOffType:t.timeOffType,ptoHours:t.ptoHours,unpaidLeaveHours:t.unpaidLeaveHours,managerApproved:t.managerApproved,overtimeApproved:t.overtimeApproved,needsApproval:t.needsApproval,notes:t.notes,createdAt:Xt(),updatedAt:Xt()};if(this.isOnline){const s=await oE(Qr(Le,"timeEntries"),n);return console.log("Time entry saved:",{...n,id:s.id}),this.timeEntries.set(n.date,{...n,id:s.id}),this.render(),{...n,id:s.id}}else return this.timeEntries.set(n.date,n),localStorage.setItem(`timeEntry_${this.userId}_${n.date}`,JSON.stringify(n)),this.render(),n}catch(n){throw console.error("Error adding time entry:",n),new Error("Failed to save time entry: "+(n.message||"Unknown error"))}}async cleanup(){if(this.eventListeners.forEach(({element:e,type:t,fn:n})=>{e.removeEventListener(t,n)}),this.eventListeners.clear(),this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null),this.timeEntries.clear(),this.container)for(;this.container.firstChild;)this.container.removeChild(this.container.firstChild)}destroy(){this.abortController.abort(),this.unsubscribe&&this.unsubscribe(),this.cleanup(),window.removeEventListener("online",this.handleOnline),window.removeEventListener("offline",this.handleOffline),this.elements&&(this.elements.prevButton?.removeEventListener("click",this.handlePrevWeek),this.elements.nextButton?.removeEventListener("click",this.handleNextWeek),this.elements.submitButton?.removeEventListener("click",this.handleSubmitWeek),this.elements.approveButton&&this.elements.approveButton.removeEventListener("click",this.handleApproveWeek),this.elements.grid?.querySelectorAll(".calendar-day")?.forEach(t=>{t.replaceWith(t.cloneNode(!0))})),this.timeEntries.clear(),this.container&&He.removeAllChildren(this.container)}async handleApproveWeek(){if(this.isManager)try{const e=cc(Le),t=H.getWeekStart(this.currentWeek),n=H.getWeekEnd(this.currentWeek);console.log("Week Range:",{weekStart:t.toISOString(),weekEnd:n.toISOString()});let s=!1;for(const[i,a]of this.timeEntries){const c=new Date(i+"T00:00:00Z");if(H.isDateInRange(c,t,n)&&!a.isSubmitted){const l=Hn(Le,"timeEntries",a.id);e.update(l,{isSubmitted:!0,submittedAt:Xt()}),s=!0}}if(!s){this.showNotification("warning","No entries to approve");return}await e.commit(),this.showNotification("success","Week approved successfully"),await this.loadData()}catch(e){console.error("Error approving week:",e),this.showNotification("error","Failed to approve week")}}}class hE{constructor(e){if(typeof e!="function")throw new Error("TimeEntryModal requires a valid onSave callback function");this.onSave=e,this.state={isOpen:!1,isLoading:!1,selectedDate:null,currentEntry:null,hasUnsavedChanges:!1,errors:[]},this.createModal(),this.setupEventListeners(),this.debouncedSave=this.debounce(()=>{this.state.hasUnsavedChanges&&localStorage.setItem("timeEntry_draft",JSON.stringify(this.collectFormData()))},1e3)}debounce(e,t){let n;return function(...i){const a=()=>{clearTimeout(n),e(...i)};clearTimeout(n),n=setTimeout(a,t)}}createModal(){this.modal=document.createElement("div"),this.modal.className="time-entry-modal",this.modal.innerHTML=`
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Time Entry for <span class="entry-date"></span></h2>
                    <button class="close-button" aria-label="Close">&times;</button>
                </div>
                <div class="modal-body">
        <form id="timeEntryForm">
            <div class="form-group">
                <label>
                    <input type="checkbox" id="timeOffCheck">
                    Time Off Request
                </label>
            </div>

            <div class="form-group time-off-options" id="timeOffOptions" style="display: none;">
                <label>Type of Time Off:</label>
                <div class="radio-group">
                    <label>
                        <input type="radio" name="timeOffType" value="unpaid" checked>
                        Unpaid Day Off
                    </label>
                    <label>
                        <input type="radio" name="timeOffType" value="paid">
                        Paid Time Off
                    </label>
                </div>
            </div>

            <div class="form-group" id="hoursGroup">
                <label for="hoursInput">Hours</label>
                <input type="number" id="hoursInput" min="0" max="24" step="0.5" value="8">
            </div>

            <div class="form-group" id="timeOffApprovalGroup" style="display: none;">
                <label>
                    <input type="checkbox" id="managerApprovedCheck">
                    Manager Approved
                </label>
            </div>

            <div class="form-group" id="overtimeGroup" style="display: none;">
                <label>
                    <input type="checkbox" id="overtimeApprovedCheck">
                    Overtime Approved
                </label>
            </div>

            <div class="form-group">
                <label for="notesInput">Notes</label>
                <textarea id="notesInput" rows="3"></textarea>
            </div>
        </form>
    </div>
                <div class="modal-footer">
                    <button type="button" class="btn-secondary" data-action="cancel">Cancel</button>
                    <button type="button" class="btn-primary" data-action="save">Save</button>
                </div>
                <div class="loading-overlay" style="display: none;">
                    <div class="spinner"></div>
                </div>
            </div>
        `,document.body.appendChild(this.modal),this.initializeElements()}initializeElements(){this.elements={form:this.modal.querySelector("#timeEntryForm"),entryDate:this.modal.querySelector(".entry-date"),timeOffCheck:this.modal.querySelector("#timeOffCheck"),hoursInput:this.modal.querySelector("#hoursInput"),hoursGroup:this.modal.querySelector("#hoursGroup"),timeOffGroup:this.modal.querySelector("#timeOffGroup"),overtimeGroup:this.modal.querySelector("#overtimeGroup"),managerApprovedCheck:this.modal.querySelector("#managerApprovedCheck"),overtimeApprovedCheck:this.modal.querySelector("#overtimeApprovedCheck"),notesInput:this.modal.querySelector("#notesInput"),loadingOverlay:this.modal.querySelector(".loading-overlay"),saveButton:this.modal.querySelector('[data-action="save"]'),cancelButton:this.modal.querySelector('[data-action="cancel"]'),closeButton:this.modal.querySelector(".close-button"),timeOffOptions:this.modal.querySelector("#timeOffOptions"),timeOffType:this.modal.querySelectorAll('input[name="timeOffType"]'),timeOffApprovalGroup:this.modal.querySelector("#timeOffApprovalGroup")}}setupEventListeners(){this.elements.form.addEventListener("change",()=>{this.state.hasUnsavedChanges=!0,this.debouncedSave()}),this.elements.form.addEventListener("input",()=>{this.state.hasUnsavedChanges=!0,this.debouncedSave()}),this.elements.timeOffCheck.addEventListener("change",()=>this.handleTimeOffToggle()),this.elements.hoursInput.addEventListener("input",()=>this.handleHoursInput()),this.elements.saveButton.addEventListener("click",()=>this.handleSave()),this.elements.cancelButton.addEventListener("click",()=>this.close()),this.elements.closeButton.addEventListener("click",()=>this.close()),this.elements.timeOffType.forEach(e=>{e.addEventListener("change",()=>this.handleTimeOffTypeChange())})}handleTimeOffTypeChange(){this.updateVisibility(),this.state.hasUnsavedChanges=!0,this.elements.form.addEventListener("change",()=>{this.state.hasUnsavedChanges=!0}),document.addEventListener("keydown",e=>{this.state.isOpen&&(e.key==="Escape"?(e.preventDefault(),this.close()):e.key==="Enter"&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),this.handleSave()))}),this.modal.addEventListener("click",e=>{e.target===this.modal&&this.close()})}open(e,t=null){if(!e||!(e instanceof Date))throw new Error("Invalid date provided to modal");this.state.selectedDate=e,this.state.currentEntry=t,this.state.hasUnsavedChanges=!1,this.state.isOpen=!0,this.elements.entryDate.textContent=e.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"}),this.populateForm(t),this.modal.classList.add("active"),this.elements.hoursInput.focus()}close(){this.state.hasUnsavedChanges&&!confirm("You have unsaved changes. Are you sure you want to close?")||(this.modal.classList.remove("active"),this.resetForm(),this.state.isOpen=!1)}populateForm(e){if(e&&(this.elements.timeOffCheck.checked=e.isTimeOff||!1,this.elements.hoursInput.value=e.hours||"",this.elements.managerApprovedCheck.checked=e.managerApproved||!1,this.elements.overtimeApprovedCheck.checked=e.overtimeApproved||!1,this.elements.notesInput.value=e.notes||"",e.isTimeOff&&e.timeOffType)){const t=Array.from(this.elements.timeOffType).find(n=>n.value===e.timeOffType);t&&(t.checked=!0)}this.updateVisibility()}resetForm(){this.elements.form.reset(),this.elements.hoursInput.value="8",this.updateVisibility()}handleTimeOffToggle(){this.updateVisibility(),this.state.hasUnsavedChanges=!0}handleHoursInput(){const e=parseFloat(this.elements.hoursInput.value);this.elements.overtimeGroup.style.display=e>8?"block":"none",this.state.hasUnsavedChanges=!0}updateVisibility(){const e=this.elements.timeOffCheck.checked,t=Array.from(this.elements.timeOffType).find(n=>n.checked)?.value;this.elements.timeOffOptions.style.display=e?"block":"none",this.elements.hoursGroup.style.display=!e||e&&t==="paid"?"block":"none",this.elements.timeOffApprovalGroup.style.display=e?"block":"none",this.elements.overtimeGroup.style.display=!e&&parseFloat(this.elements.hoursInput.value)>8?"block":"none"}async handleSave(){if(this.state.isLoading)return;if(!this.validateForm()){this.showErrors(this.state.errors);return}const e=this.collectFormData();try{this.setLoading(!0),await this.onSave(this.state.selectedDate,e),localStorage.removeItem("timeEntry_draft"),this.state.hasUnsavedChanges=!1,this.close()}catch(t){console.error("Error saving time entry:",t),this.showErrors(["Failed to save time entry: "+t.message])}finally{this.setLoading(!1)}}validateForm(){const e=[],t=parseFloat(this.elements.hoursInput.value),n=this.elements.timeOffCheck.checked,s=Array.from(this.elements.timeOffType).find(a=>a.checked)?.value;return(isNaN(t)||t<0||t>24)&&e.push("Hours must be between 0 and 24"),n&&(this.elements.managerApprovedCheck.checked||e.push("Manager approval is required for time off"),s==="paid"&&(isNaN(t)||t<=0)&&e.push("Valid hours are required for paid time off")),!n&&t>8&&!this.elements.overtimeApprovedCheck.checked&&e.push("Manager approval is required for overtime hours"),this.elements.notesInput.value.trim().length>500&&e.push("Notes cannot exceed 500 characters"),this.state.errors=e,e.length===0}collectFormData(){const e=this.elements.timeOffCheck.checked,t=e?Array.from(this.elements.timeOffType).find(l=>l.checked)?.value:null,n=parseFloat(this.elements.hoursInput.value)||0,s=!e&&n>8;let i=0,a=0,c=0;return e?t==="paid"?a=n:c=n:i=n,{isTimeOff:e,timeOffType:t,hours:n,workedHours:i,ptoHours:a,unpaidLeaveHours:c,managerApproved:this.elements.managerApprovedCheck.checked,overtimeApproved:s?this.elements.overtimeApprovedCheck.checked:!1,needsApproval:e||s,notes:this.elements.notesInput.value.trim(),timestamp:new Date().toISOString()}}setLoading(e){this.state.isLoading=e,this.elements.loadingOverlay.style.display=e?"flex":"none",this.elements.saveButton.disabled=e}showErrors(e){const t=document.createElement("div");t.className="modal-errors";const n=document.createElement("ul");e.forEach(i=>{const a=document.createElement("li");a.textContent=i,n.appendChild(a)}),t.appendChild(n);const s=this.modal.querySelector(".modal-errors");s&&s.remove(),this.modal.querySelector(".modal-body").insertBefore(t,this.modal.querySelector(".modal-body").firstChild),setTimeout(()=>t.remove(),5e3)}destroy(){this.modal.remove()}}class dE{constructor(){this.calendar=null,this.modal=null,this.authManager=null,this.initialized=!1}async initialize(){try{this.authManager=new cE,this.setupAuthStateListener(),this.setupErrorHandling()}catch(e){console.error("Failed to initialize app:",e),this.showError("Application initialization failed")}}setupAuthStateListener(){dt.onAuthStateChanged(async e=>{try{await this.handleAuthStateChange(e)}catch(t){console.error("Auth state change error:",t),this.showError("Authentication error occurred")}})}async handleAuthStateChange(e){const t=document.getElementById("appLoading");t&&(t.style.display="none"),await this.cleanup(),e&&(console.log("User authenticated:",e.email),await this.initializeUserComponents(e))}async cleanup(){this.calendar&&(await this.calendar.destroy(),this.calendar=null),this.modal&&(this.modal.destroy(),this.modal=null)}async initializeUserComponents(e){try{this.calendar=new lE(e.uid),await this.calendar.initializeCalendar("calendar"),console.log("Calendar initialized"),this.modal=new hE(async(t,n)=>{try{await this.calendar.addTimeEntry(t,n)}catch(s){throw console.error("Failed to add time entry:",s),s}}),console.log("Modal initialized"),this.setupEventListeners(),this.initialized=!0}catch(t){throw console.error("Component initialization error:",t),this.showError("Failed to initialize components"),t}}setupEventListeners(){document.getElementById("calendar")?.addEventListener("dayClick",e=>{if(!this.initialized||!this.modal)return;const{date:t,entry:n}=e.detail;t&&this.modal.open(new Date(t),n)})}setupErrorHandling(){window.addEventListener("unhandledrejection",e=>{console.error("Unhandled promise rejection:",e.reason),this.showError("An unexpected error occurred")}),window.addEventListener("error",e=>{console.error("Global error:",e.error),this.showError("An unexpected error occurred")})}showError(e){const t=document.getElementById("errorBoundary"),n=document.getElementById("errorMessage");t&&n&&(t.style.display="block",n.textContent=e)}}document.addEventListener("DOMContentLoaded",async()=>{await new dE().initialize()});
