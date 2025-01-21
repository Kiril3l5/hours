import"https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";import"https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const h of o)if(h.type==="childList")for(const u of h.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const h={};return o.integrity&&(h.integrity=o.integrity),o.referrerPolicy&&(h.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?h.credentials="include":o.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function i(o){if(o.ep)return;o.ep=!0;const h=n(o);fetch(o.href,h)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();var ai={FIREBASE_API_KEY:'"AIzaSyB1dlHRhLA71PxCgVLjOieUcUF22DWx6zY"',FIREBASE_AUTH_DOMAIN:'"autonomy-heroes.firebaseapp.com"',FIREBASE_PROJECT_ID:'"autonomy-heroes"',FIREBASE_STORAGE_BUCKET:'"autonomy-heroes.firebasestorage.app"',FIREBASE_MESSAGING_SENDER_ID:'"266526530869"',FIREBASE_APP_ID:'"1:266526530869:web:ea95143735be497ca8007c"',FIREBASE_MEASUREMENT_ID:'"G-70PG5B4S39"'};/**
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
*/const Vi=function(r){const e=[];let n=0;for(let i=0;i<r.length;i++){let o=r.charCodeAt(i);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++i)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},vo=function(r){const e=[];let n=0,i=0;for(;n<r.length;){const o=r[n++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const h=r[n++];e[i++]=String.fromCharCode((o&31)<<6|h&63)}else if(o>239&&o<365){const h=r[n++],u=r[n++],w=r[n++],b=((o&7)<<18|(h&63)<<12|(u&63)<<6|w&63)-65536;e[i++]=String.fromCharCode(55296+(b>>10)),e[i++]=String.fromCharCode(56320+(b&1023))}else{const h=r[n++],u=r[n++];e[i++]=String.fromCharCode((o&15)<<12|(h&63)<<6|u&63)}}return e.join("")},zi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<r.length;o+=3){const h=r[o],u=o+1<r.length,w=u?r[o+1]:0,b=o+2<r.length,T=b?r[o+2]:0,A=h>>2,R=(h&3)<<4|w>>4;let O=(w&15)<<2|T>>6,V=T&63;b||(V=64,u||(O=64)),i.push(n[A],n[R],n[O],n[V])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Vi(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):vo(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<r.length;){const h=n[r.charAt(o++)],u=o<r.length?n[r.charAt(o)]:0;++o;const w=o<r.length?n[r.charAt(o)]:64;++o;const b=o<r.length?n[r.charAt(o)]:64;if(++o,h==null||u==null||w==null||b==null)throw new wo;const T=h<<2|u>>4;if(i.push(T),w!==64){const A=u<<4&240|w>>2;if(i.push(A),b!==64){const R=w<<6&192|b;i.push(R)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class wo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _o=function(r){const e=Vi(r);return zi.encodeByteArray(e,!0)},Gt=function(r){return _o(r).replace(/\./g,"")},$i=function(r){try{return zi.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
*/function bo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
*/const Io=()=>bo().__FIREBASE_DEFAULTS__,To=()=>{if(typeof process>"u"||typeof ai>"u")return;const r=ai.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Eo=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&$i(r[1]);return e&&JSON.parse(e)},Wn=()=>{try{return Io()||To()||Eo()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Wi=r=>{var e,n;return(n=(e=Wn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},So=r=>{const e=Wi(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Gi=()=>{var r;return(r=Wn())===null||r===void 0?void 0:r.config},Ki=r=>{var e;return(e=Wn())===null||e===void 0?void 0:e[`_${r}`]};/**
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
*/class Ao{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
*/function ko(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",o=r.iat||0,h=r.sub||r.user_id;if(!h)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:h,user_id:h,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Gt(JSON.stringify(n)),Gt(JSON.stringify(u)),""].join(".")}/**
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
*/function G(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Co(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(G())}function Ro(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Oo(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Po(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function No(){const r=G();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Do(){try{return typeof indexedDB=="object"}catch{return!1}}function Lo(){return new Promise((r,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(i),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var h;e(((h=o.error)===null||h===void 0?void 0:h.message)||"")}}catch(n){e(n)}})}/**
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
*/const Mo="FirebaseError";class pe extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Mo,Object.setPrototypeOf(this,pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vt.prototype.create)}}class vt{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},o=`${this.service}/${e}`,h=this.errors[e],u=h?Uo(h,i):"Error",w=`${this.serviceName}: ${u} (${o}).`;return new pe(o,w,i)}}function Uo(r,e){return r.replace(jo,(n,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const jo=/\{\$([^}]+)}/g;function xo(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Kt(r,e){if(r===e)return!0;const n=Object.keys(r),i=Object.keys(e);for(const o of n){if(!i.includes(o))return!1;const h=r[o],u=e[o];if(hi(h)&&hi(u)){if(!Kt(h,u))return!1}else if(h!==u)return!1}for(const o of i)if(!n.includes(o))return!1;return!0}function hi(r){return r!==null&&typeof r=="object"}/**
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
*/function wt(r){const e=[];for(const[n,i]of Object.entries(r))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Fo(r,e){const n=new Bo(r,e);return n.subscribe.bind(n)}class Bo{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let o;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Ho(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:i},o.next===void 0&&(o.next=Rn),o.error===void 0&&(o.error=Rn),o.complete===void 0&&(o.complete=Rn);const h=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),h}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ho(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function Rn(){}/**
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
*/function qe(r){return r&&r._delegate?r._delegate:r}class Le{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
*/const Ne="[DEFAULT]";/**
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
*/class Vo{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Ao;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e?.identifier),o=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(h){if(o)return null;throw h}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($o(e))try{this.getOrInitializeService({instanceIdentifier:Ne})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const h=this.getOrInitializeService({instanceIdentifier:o});i.resolve(h)}catch{}}}}clearInstance(e=Ne){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ne){return this.instances.has(e)}getOptions(e=Ne){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[h,u]of this.instancesDeferred.entries()){const w=this.normalizeInstanceIdentifier(h);i===w&&u.resolve(o)}return o}onInit(e,n){var i;const o=this.normalizeInstanceIdentifier(n),h=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;h.add(e),this.onInitCallbacks.set(o,h);const u=this.instances.get(o);return u&&e(u,o),()=>{h.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const o of i)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:zo(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ne){return this.component?this.component.multipleInstances?e:Ne:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zo(r){return r===Ne?void 0:r}function $o(r){return r.instantiationMode==="EAGER"}/**
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
*/class Wo{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Vo(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
*/var C;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(C||(C={}));const Go={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},Ko=C.INFO,qo={[C.DEBUG]:"log",[C.VERBOSE]:"log",[C.INFO]:"info",[C.WARN]:"warn",[C.ERROR]:"error"},Jo=(r,e,...n)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),o=qo[e];if(o)console[o](`[${i}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gn{constructor(e){this.name=e,this._logLevel=Ko,this._logHandler=Jo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in C))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Go[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,C.DEBUG,...e),this._logHandler(this,C.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,C.VERBOSE,...e),this._logHandler(this,C.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,C.INFO,...e),this._logHandler(this,C.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,C.WARN,...e),this._logHandler(this,C.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,C.ERROR,...e),this._logHandler(this,C.ERROR,...e)}}const Xo=(r,e)=>e.some(n=>r instanceof n);let ci,li;function Yo(){return ci||(ci=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qo(){return li||(li=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qi=new WeakMap,jn=new WeakMap,Ji=new WeakMap,On=new WeakMap,Kn=new WeakMap;function Zo(r){const e=new Promise((n,i)=>{const o=()=>{r.removeEventListener("success",h),r.removeEventListener("error",u)},h=()=>{n(Se(r.result)),o()},u=()=>{i(r.error),o()};r.addEventListener("success",h),r.addEventListener("error",u)});return e.then(n=>{n instanceof IDBCursor&&qi.set(n,r)}).catch(()=>{}),Kn.set(e,r),e}function ea(r){if(jn.has(r))return;const e=new Promise((n,i)=>{const o=()=>{r.removeEventListener("complete",h),r.removeEventListener("error",u),r.removeEventListener("abort",u)},h=()=>{n(),o()},u=()=>{i(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",h),r.addEventListener("error",u),r.addEventListener("abort",u)});jn.set(r,e)}let xn={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return jn.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Ji.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Se(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function ta(r){xn=r(xn)}function na(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=r.call(Pn(this),e,...n);return Ji.set(i,e.sort?e.sort():[e]),Se(i)}:Qo().includes(r)?function(...e){return r.apply(Pn(this),e),Se(qi.get(this))}:function(...e){return Se(r.apply(Pn(this),e))}}function ra(r){return typeof r=="function"?na(r):(r instanceof IDBTransaction&&ea(r),Xo(r,Yo())?new Proxy(r,xn):r)}function Se(r){if(r instanceof IDBRequest)return Zo(r);if(On.has(r))return On.get(r);const e=ra(r);return e!==r&&(On.set(r,e),Kn.set(e,r)),e}const Pn=r=>Kn.get(r);function ia(r,e,{blocked:n,upgrade:i,blocking:o,terminated:h}={}){const u=indexedDB.open(r,e),w=Se(u);return i&&u.addEventListener("upgradeneeded",b=>{i(Se(u.result),b.oldVersion,b.newVersion,Se(u.transaction),b)}),n&&u.addEventListener("blocked",b=>n(b.oldVersion,b.newVersion,b)),w.then(b=>{h&&b.addEventListener("close",()=>h()),o&&b.addEventListener("versionchange",T=>o(T.oldVersion,T.newVersion,T))}).catch(()=>{}),w}const sa=["get","getKey","getAll","getAllKeys","count"],oa=["put","add","delete","clear"],Nn=new Map;function ui(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Nn.get(e))return Nn.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,o=oa.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(o||sa.includes(n)))return;const h=async function(u,...w){const b=this.transaction(u,o?"readwrite":"readonly");let T=b.store;return i&&(T=T.index(w.shift())),(await Promise.all([T[n](...w),o&&b.done]))[0]};return Nn.set(e,h),h}ta(r=>({...r,get:(e,n,i)=>ui(e,n)||r.get(e,n,i),has:(e,n)=>!!ui(e,n)||r.has(e,n)}));/**
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
*/class aa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ha(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function ha(r){return r.getComponent()?.type==="VERSION"}const Fn="@firebase/app",di="0.10.18";/**
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
*/const ue=new Gn("@firebase/app"),ca="@firebase/app-compat",la="@firebase/analytics-compat",ua="@firebase/analytics",da="@firebase/app-check-compat",fa="@firebase/app-check",pa="@firebase/auth",ga="@firebase/auth-compat",ma="@firebase/database",ya="@firebase/data-connect",va="@firebase/database-compat",wa="@firebase/functions",_a="@firebase/functions-compat",ba="@firebase/installations",Ia="@firebase/installations-compat",Ta="@firebase/messaging",Ea="@firebase/messaging-compat",Sa="@firebase/performance",Aa="@firebase/performance-compat",ka="@firebase/remote-config",Ca="@firebase/remote-config-compat",Ra="@firebase/storage",Oa="@firebase/storage-compat",Pa="@firebase/firestore",Na="@firebase/vertexai",Da="@firebase/firestore-compat",La="firebase",Ma="11.2.0";/**
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
*/const Bn="[DEFAULT]",Ua={[Fn]:"fire-core",[ca]:"fire-core-compat",[ua]:"fire-analytics",[la]:"fire-analytics-compat",[fa]:"fire-app-check",[da]:"fire-app-check-compat",[pa]:"fire-auth",[ga]:"fire-auth-compat",[ma]:"fire-rtdb",[ya]:"fire-data-connect",[va]:"fire-rtdb-compat",[wa]:"fire-fn",[_a]:"fire-fn-compat",[ba]:"fire-iid",[Ia]:"fire-iid-compat",[Ta]:"fire-fcm",[Ea]:"fire-fcm-compat",[Sa]:"fire-perf",[Aa]:"fire-perf-compat",[ka]:"fire-rc",[Ca]:"fire-rc-compat",[Ra]:"fire-gcs",[Oa]:"fire-gcs-compat",[Pa]:"fire-fst",[Da]:"fire-fst-compat",[Na]:"fire-vertex","fire-js":"fire-js",[La]:"fire-js-all"};/**
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
*/const qt=new Map,ja=new Map,Hn=new Map;function fi(r,e){try{r.container.addComponent(e)}catch(n){ue.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function We(r){const e=r.name;if(Hn.has(e))return ue.debug(`There were multiple attempts to register component ${e}.`),!1;Hn.set(e,r);for(const n of qt.values())fi(n,r);for(const n of ja.values())fi(n,r);return!0}function qn(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function Ee(r){return r.settings!==void 0}/**
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
*/const xa={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ae=new vt("app","Firebase",xa);/**
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
*/class Fa{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Le("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ae.create("app-deleted",{appName:this._name})}}/**
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
*/const Je=Ma;function Jn(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Bn,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw Ae.create("bad-app-name",{appName:String(o)});if(n||(n=Gi()),!n)throw Ae.create("no-options");const h=qt.get(o);if(h){if(Kt(n,h.options)&&Kt(i,h.config))return h;throw Ae.create("duplicate-app",{appName:o})}const u=new Wo(o);for(const b of Hn.values())u.addComponent(b);const w=new Fa(n,i,u);return qt.set(o,w),w}function Xi(r=Bn){const e=qt.get(r);if(!e&&r===Bn&&Gi())return Jn();if(!e)throw Ae.create("no-app",{appName:r});return e}function ke(r,e,n){var i;let o=(i=Ua[r])!==null&&i!==void 0?i:r;n&&(o+=`-${n}`);const h=o.match(/\s|\//),u=e.match(/\s|\//);if(h||u){const w=[`Unable to register library "${o}" with version "${e}":`];h&&w.push(`library name "${o}" contains illegal characters (whitespace or "/")`),h&&u&&w.push("and"),u&&w.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ue.warn(w.join(" "));return}We(new Le(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
*/const Ba="firebase-heartbeat-database",Ha=1,mt="firebase-heartbeat-store";let Dn=null;function Yi(){return Dn||(Dn=ia(Ba,Ha,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(mt)}catch(n){console.warn(n)}}}}).catch(r=>{throw Ae.create("idb-open",{originalErrorMessage:r.message})})),Dn}async function Va(r){try{const e=(await Yi()).transaction(mt),n=await e.objectStore(mt).get(Qi(r));return await e.done,n}catch(e){if(e instanceof pe)ue.warn(e.message);else{const n=Ae.create("idb-get",{originalErrorMessage:e?.message});ue.warn(n.message)}}}async function pi(r,e){try{const n=(await Yi()).transaction(mt,"readwrite");await n.objectStore(mt).put(e,Qi(r)),await n.done}catch(n){if(n instanceof pe)ue.warn(n.message);else{const i=Ae.create("idb-set",{originalErrorMessage:n?.message});ue.warn(i.message)}}}function Qi(r){return`${r.name}!${r.options.appId}`}/**
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
*/const za=1024,$a=30*24*60*60*1e3;class Wa{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ka(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=gi();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(h=>h.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const u=new Date(h.date).valueOf();return Date.now()-u<=$a}),this._storage.overwrite(this._heartbeatsCache))}catch(i){ue.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gi(),{heartbeatsToSend:i,unsentEntries:o}=Ga(this._heartbeatsCache.heartbeats),h=Gt(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),h}catch(n){return ue.warn(n),""}}}function gi(){return new Date().toISOString().substring(0,10)}function Ga(r,e=za){const n=[];let i=r.slice();for(const o of r){const h=n.find(u=>u.agent===o.agent);if(h){if(h.dates.push(o.date),mi(n)>e){h.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),mi(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Ka{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Do()?Lo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Va(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function mi(r){return Gt(JSON.stringify({version:2,heartbeats:r})).length}/**
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
*/function qa(r){We(new Le("platform-logger",e=>new aa(e),"PRIVATE")),We(new Le("heartbeat",e=>new Wa(e),"PRIVATE")),ke(Fn,di,r),ke(Fn,di,"esm2017"),ke("fire-js","")}qa("");var Ja="firebase",Xa="11.2.0";/**
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
*/ke(Ja,Xa,"app");const Ya={apiKey:"your-api-key",authDomain:"your-auth-domain",projectId:"your-project-id"};Jn(Ya);console.log("Firebase initialized");function Xn(r,e){var n={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e.indexOf(i)<0&&(n[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(r);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(r,i[o])&&(n[i[o]]=r[i[o]]);return n}function Zi(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qa=Zi,es=new vt("auth","Firebase",Zi());/**
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
*/const Jt=new Gn("@firebase/auth");function Za(r,...e){Jt.logLevel<=C.WARN&&Jt.warn(`Auth (${Je}): ${r}`,...e)}function Vt(r,...e){Jt.logLevel<=C.ERROR&&Jt.error(`Auth (${Je}): ${r}`,...e)}/**
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
*/function de(r,...e){throw Yn(r,...e)}function ne(r,...e){return Yn(r,...e)}function ts(r,e,n){const i=Object.assign(Object.assign({},Qa()),{[e]:n});return new vt("auth","Firebase",i).create(e,{appName:r.name})}function De(r){return ts(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yn(r,...e){if(typeof r!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(n,...i)}return es.create(r,...e)}function E(r,e,...n){if(!r)throw Yn(e,...n)}function he(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Vt(e),new Error(e)}function fe(r,e){r||he(e)}/**
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
*/function Vn(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function eh(){return yi()==="http:"||yi()==="https:"}function yi(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
*/function th(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eh()||Oo()||"connection"in navigator)?navigator.onLine:!0}function nh(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
*/class _t{constructor(e,n){this.shortDelay=e,this.longDelay=n,fe(n>e,"Short delay should be less than long delay!"),this.isMobile=Co()||Po()}get(){return th()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
*/function Qn(r,e){fe(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
*/class ns{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;he("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;he("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;he("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
*/const rh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
*/const ih=new _t(3e4,6e4);function Zn(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Xe(r,e,n,i,o={}){return rs(r,o,async()=>{let h={},u={};i&&(e==="GET"?u=i:h={body:JSON.stringify(i)});const w=wt(Object.assign({key:r.config.apiKey},u)).slice(1),b=await r._getAdditionalHeaders();b["Content-Type"]="application/json",r.languageCode&&(b["X-Firebase-Locale"]=r.languageCode);const T=Object.assign({method:e,headers:b},h);return Ro()||(T.referrerPolicy="no-referrer"),ns.fetch()(is(r,r.config.apiHost,n,w),T)})}async function rs(r,e,n){r._canInitEmulator=!1;const i=Object.assign(Object.assign({},rh),e);try{const o=new oh(r),h=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const u=await h.json();if("needConfirmation"in u)throw Bt(r,"account-exists-with-different-credential",u);if(h.ok&&!("errorMessage"in u))return u;{const w=h.ok?u.errorMessage:u.error.message,[b,T]=w.split(" : ");if(b==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bt(r,"credential-already-in-use",u);if(b==="EMAIL_EXISTS")throw Bt(r,"email-already-in-use",u);if(b==="USER_DISABLED")throw Bt(r,"user-disabled",u);const A=i[b]||b.toLowerCase().replace(/[_\s]+/g,"-");if(T)throw ts(r,A,T);de(r,A)}}catch(o){if(o instanceof pe)throw o;de(r,"network-request-failed",{message:String(o)})}}async function sh(r,e,n,i,o={}){const h=await Xe(r,e,n,i,o);return"mfaPendingCredential"in h&&de(r,"multi-factor-auth-required",{_serverResponse:h}),h}function is(r,e,n,i){const o=`${e}${n}?${i}`;return r.config.emulator?Qn(r.config,o):`${r.config.apiScheme}://${o}`}class oh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(ne(this.auth,"network-request-failed")),ih.get())})}}function Bt(r,e,n){const i={appName:r.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const o=ne(r,e,i);return o.customData._tokenResponse=n,o}/**
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
*/async function ah(r,e){return Xe(r,"POST","/v1/accounts:delete",e)}async function ss(r,e){return Xe(r,"POST","/v1/accounts:lookup",e)}/**
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
*/function ft(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hh(r,e=!1){const n=qe(r),i=await n.getIdToken(e),o=er(i);E(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const h=typeof o.firebase=="object"?o.firebase:void 0,u=h?.sign_in_provider;return{claims:o,token:i,authTime:ft(Ln(o.auth_time)),issuedAtTime:ft(Ln(o.iat)),expirationTime:ft(Ln(o.exp)),signInProvider:u||null,signInSecondFactor:h?.sign_in_second_factor||null}}function Ln(r){return Number(r)*1e3}function er(r){const[e,n,i]=r.split(".");if(e===void 0||n===void 0||i===void 0)return Vt("JWT malformed, contained fewer than 3 sections"),null;try{const o=$i(n);return o?JSON.parse(o):(Vt("Failed to decode base64 JWT payload"),null)}catch(o){return Vt("Caught error parsing JWT payload as JSON",o?.toString()),null}}function vi(r){const e=er(r);return E(e,"internal-error"),E(typeof e.exp<"u","internal-error"),E(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
*/async function yt(r,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof pe&&ch(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function ch({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
*/class lh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
*/class zn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ft(this.lastLoginAt),this.creationTime=ft(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
*/async function Xt(r){var e;const n=r.auth,i=await r.getIdToken(),o=await yt(r,ss(n,{idToken:i}));E(o?.users.length,n,"internal-error");const h=o.users[0];r._notifyReloadListener(h);const u=!((e=h.providerUserInfo)===null||e===void 0)&&e.length?os(h.providerUserInfo):[],w=dh(r.providerData,u),b=r.isAnonymous,T=!(r.email&&h.passwordHash)&&!w?.length,A=b?T:!1,R={uid:h.localId,displayName:h.displayName||null,photoURL:h.photoUrl||null,email:h.email||null,emailVerified:h.emailVerified||!1,phoneNumber:h.phoneNumber||null,tenantId:h.tenantId||null,providerData:w,metadata:new zn(h.createdAt,h.lastLoginAt),isAnonymous:A};Object.assign(r,R)}async function uh(r){const e=qe(r);await Xt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dh(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function os(r){return r.map(e=>{var{providerId:n}=e,i=Xn(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
*/async function fh(r,e){const n=await rs(r,{},async()=>{const i=wt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:h}=r.config,u=is(r,o,"/v1/token",`key=${h}`),w=await r._getAdditionalHeaders();return w["Content-Type"]="application/x-www-form-urlencoded",ns.fetch()(u,{method:"POST",headers:w,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ph(r,e){return Xe(r,"POST","/v2/accounts:revokeToken",Zn(r,e))}/**
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
*/class Ve{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken<"u","internal-error"),E(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vi(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){E(e.length!==0,"internal-error");const n=vi(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(E(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:o,expiresIn:h}=await fh(e,n);this.updateTokensAndExpiration(i,o,Number(h))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:o,expirationTime:h}=n,u=new Ve;return i&&(E(typeof i=="string","internal-error",{appName:e}),u.refreshToken=i),o&&(E(typeof o=="string","internal-error",{appName:e}),u.accessToken=o),h&&(E(typeof h=="number","internal-error",{appName:e}),u.expirationTime=h),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ve,this.toJSON())}_performRefresh(){return he("not implemented")}}/**
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
*/function we(r,e){E(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class ce{constructor(e){var{uid:n,auth:i,stsTokenManager:o}=e,h=Xn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=h.displayName||null,this.email=h.email||null,this.emailVerified=h.emailVerified||!1,this.phoneNumber=h.phoneNumber||null,this.photoURL=h.photoURL||null,this.isAnonymous=h.isAnonymous||!1,this.tenantId=h.tenantId||null,this.providerData=h.providerData?[...h.providerData]:[],this.metadata=new zn(h.createdAt||void 0,h.lastLoginAt||void 0)}async getIdToken(e){const n=await yt(this,this.stsTokenManager.getToken(this.auth,e));return E(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hh(this,e)}reload(){return uh(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ce(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Xt(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ee(this.auth.app))return Promise.reject(De(this.auth));const e=await this.getIdToken();return await yt(this,ah(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,o,h,u,w,b,T,A;const R=(i=n.displayName)!==null&&i!==void 0?i:void 0,O=(o=n.email)!==null&&o!==void 0?o:void 0,V=(h=n.phoneNumber)!==null&&h!==void 0?h:void 0,k=(u=n.photoURL)!==null&&u!==void 0?u:void 0,U=(w=n.tenantId)!==null&&w!==void 0?w:void 0,L=(b=n._redirectEventId)!==null&&b!==void 0?b:void 0,ie=(T=n.createdAt)!==null&&T!==void 0?T:void 0,Y=(A=n.lastLoginAt)!==null&&A!==void 0?A:void 0,{uid:x,emailVerified:Z,isAnonymous:Ce,providerData:K,stsTokenManager:m}=n;E(x&&m,e,"internal-error");const l=Ve.fromJSON(this.name,m);E(typeof x=="string",e,"internal-error"),we(R,e.name),we(O,e.name),E(typeof Z=="boolean",e,"internal-error"),E(typeof Ce=="boolean",e,"internal-error"),we(V,e.name),we(k,e.name),we(U,e.name),we(L,e.name),we(ie,e.name),we(Y,e.name);const f=new ce({uid:x,auth:e,email:O,emailVerified:Z,displayName:R,isAnonymous:Ce,photoURL:k,phoneNumber:V,tenantId:U,stsTokenManager:l,createdAt:ie,lastLoginAt:Y});return K&&Array.isArray(K)&&(f.providerData=K.map(p=>Object.assign({},p))),L&&(f._redirectEventId=L),f}static async _fromIdTokenResponse(e,n,i=!1){const o=new Ve;o.updateFromServerResponse(n);const h=new ce({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Xt(h),h}static async _fromGetAccountInfoResponse(e,n,i){const o=n.users[0];E(o.localId!==void 0,"internal-error");const h=o.providerUserInfo!==void 0?os(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!h?.length,w=new Ve;w.updateFromIdToken(i);const b=new ce({uid:o.localId,auth:e,stsTokenManager:w,isAnonymous:u}),T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new zn(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!h?.length};return Object.assign(b,T),b}}/**
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
*/const wi=new Map;function le(r){fe(r instanceof Function,"Expected a class definition");let e=wi.get(r);return e?(fe(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,wi.set(r,e),e)}/**
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
*/class as{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}as.type="NONE";const _i=as;/**
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
*/function zt(r,e,n){return`firebase:${r}:${e}:${n}`}class ze{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:o,name:h}=this.auth;this.fullUserKey=zt(this.userKey,o.apiKey,h),this.fullPersistenceKey=zt("persistence",o.apiKey,h),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ce._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new ze(le(_i),e,i);const o=(await Promise.all(n.map(async T=>{if(await T._isAvailable())return T}))).filter(T=>T);let h=o[0]||le(_i);const u=zt(i,e.config.apiKey,e.name);let w=null;for(const T of n)try{const A=await T._get(u);if(A){const R=ce._fromJSON(e,A);T!==h&&(w=R),h=T;break}}catch{}const b=o.filter(T=>T._shouldAllowMigration);return!h._shouldAllowMigration||!b.length?new ze(h,e,i):(h=b[0],w&&await h._set(u,w.toJSON()),await Promise.all(n.map(async T=>{if(T!==h)try{await T._remove(u)}catch{}})),new ze(h,e,i))}}/**
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
*/function bi(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(us(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hs(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fs(e))return"Blackberry";if(ps(e))return"Webos";if(cs(e))return"Safari";if((e.includes("chrome/")||ls(e))&&!e.includes("edge/"))return"Chrome";if(ds(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(n);if(i?.length===2)return i[1]}return"Other"}function hs(r=G()){return/firefox\//i.test(r)}function cs(r=G()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ls(r=G()){return/crios\//i.test(r)}function us(r=G()){return/iemobile/i.test(r)}function ds(r=G()){return/android/i.test(r)}function fs(r=G()){return/blackberry/i.test(r)}function ps(r=G()){return/webos/i.test(r)}function tr(r=G()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function gh(r=G()){var e;return tr(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mh(){return No()&&document.documentMode===10}function gs(r=G()){return tr(r)||ds(r)||ps(r)||fs(r)||/windows phone/i.test(r)||us(r)}/**
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
*/function ms(r,e=[]){let n;switch(r){case"Browser":n=bi(G());break;case"Worker":n=`${bi(G())}-${r}`;break;default:n=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Je}/${i}`}/**
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
*/class yh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=h=>new Promise((u,w)=>{try{const b=e(h);u(b)}catch(b){w(b)}});i.onAbort=n,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
*/async function vh(r,e={}){return Xe(r,"GET","/v2/passwordPolicy",Zn(r,e))}/**
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
*/const wh=6;class _h{constructor(e){var n,i,o,h;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=u.minPasswordLength)!==null&&n!==void 0?n:wh,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(h=e.forceUpgradeOnSignin)!==null&&h!==void 0?h:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,o,h,u,w;const b={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,b),this.validatePasswordCharacterOptions(e,b),b.isValid&&(b.isValid=(n=b.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),b.isValid&&(b.isValid=(i=b.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),b.isValid&&(b.isValid=(o=b.containsLowercaseLetter)!==null&&o!==void 0?o:!0),b.isValid&&(b.isValid=(h=b.containsUppercaseLetter)!==null&&h!==void 0?h:!0),b.isValid&&(b.isValid=(u=b.containsNumericCharacter)!==null&&u!==void 0?u:!0),b.isValid&&(b.isValid=(w=b.containsNonAlphanumericCharacter)!==null&&w!==void 0?w:!0),b}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,o,h){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=h))}}/**
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
*/class bh{constructor(e,n,i,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ii(this),this.idTokenSubscription=new Ii(this),this.beforeStateQueue=new yh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=es,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=le(n)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await ze.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ss(this,{idToken:e}),i=await ce._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ee(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(w=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(w,w))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,h=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,w=o?._redirectEventId,b=await this.tryRedirectSignIn(e);(!u||u===w)&&b?.user&&(o=b.user,h=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(h)try{await this.beforeStateQueue.runMiddleware(o)}catch(u){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xt(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ee(this.app))return Promise.reject(De(this));const n=e?qe(e):null;return n&&E(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ee(this.app)?Promise.reject(De(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ee(this.app)?Promise.reject(De(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(le(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vh(this),n=new _h(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vt("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await ph(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&le(e)||this._popupRedirectResolver;E(n,this,"argument-error"),this.redirectPersistenceManager=await ze.create(this,[le(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,o){if(this._deleted)return()=>{};const h=typeof n=="function"?n:n.next.bind(n);let u=!1;const w=this._isInitialized?Promise.resolve():this._initializationPromise;if(E(w,this,"internal-error"),w.then(()=>{u||h(this.currentUser)}),typeof n=="function"){const b=e.addObserver(n,i,o);return()=>{u=!0,b()}}else{const b=e.addObserver(n);return()=>{u=!0,b()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ms(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&Za(`Error while retrieving App Check token: ${n.error}`),n?.token}}function nr(r){return qe(r)}class Ii{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fo(n=>this.observer=n)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
*/let rr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ih(r){rr=r}function Th(r){return rr.loadJS(r)}function Eh(){return rr.gapiScript}function Sh(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
*/function Ah(r,e){const n=qn(r,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Kt(o,e))return i;de(i,"already-initialized")}return n.initialize({options:e})}function kh(r,e){const n=e?.persistence||[],i=(Array.isArray(n)?n:[n]).map(le);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e?.popupRedirectResolver)}function Ch(r,e,n){const i=nr(r);E(i._canInitEmulator,i,"emulator-config-failed"),E(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,h=ys(e),{host:u,port:w}=Rh(e),b=w===null?"":`:${w}`;i.config.emulator={url:`${h}//${u}${b}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:w,protocol:h.replace(":",""),options:Object.freeze({disableWarnings:o})}),Oh()}function ys(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Rh(r){const e=ys(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const h=o[1];return{host:h,port:Ti(i.substr(h.length+1))}}else{const[h,u]=i.split(":");return{host:h,port:Ti(u)}}}function Ti(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Oh(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
*/class vs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return he("not implemented")}_getIdTokenResponse(e){return he("not implemented")}_linkToIdToken(e,n){return he("not implemented")}_getReauthenticationResolver(e){return he("not implemented")}}/**
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
*/async function $e(r,e){return sh(r,"POST","/v1/accounts:signInWithIdp",Zn(r,e))}/**
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
*/const Ph="http://localhost";class Me extends vs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Me(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):de("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=n,h=Xn(n,["providerId","signInMethod"]);if(!i||!o)return null;const u=new Me(i,o);return u.idToken=h.idToken||void 0,u.accessToken=h.accessToken||void 0,u.secret=h.secret,u.nonce=h.nonce,u.pendingToken=h.pendingToken||null,u}_getIdTokenResponse(e){const n=this.buildRequest();return $e(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,$e(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$e(e,n)}buildRequest(){const e={requestUri:Ph,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wt(n)}return e}}/**
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
*/class ws{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
*/class bt extends ws{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
*/class _e extends bt{constructor(){super("facebook.com")}static credential(e){return Me._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _e.credentialFromTaggedObject(e)}static credentialFromError(e){return _e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _e.credential(e.oauthAccessToken)}catch{return null}}}_e.FACEBOOK_SIGN_IN_METHOD="facebook.com";_e.PROVIDER_ID="facebook.com";/**
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
*/class be extends bt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Me._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return be.credential(n,i)}catch{return null}}}be.GOOGLE_SIGN_IN_METHOD="google.com";be.PROVIDER_ID="google.com";/**
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
*/class Ie extends bt{constructor(){super("github.com")}static credential(e){return Me._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ie.credential(e.oauthAccessToken)}catch{return null}}}Ie.GITHUB_SIGN_IN_METHOD="github.com";Ie.PROVIDER_ID="github.com";/**
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
*/class Te extends bt{constructor(){super("twitter.com")}static credential(e,n){return Me._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Te.credential(n,i)}catch{return null}}}Te.TWITTER_SIGN_IN_METHOD="twitter.com";Te.PROVIDER_ID="twitter.com";/**
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
*/class Ge{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,o=!1){const h=await ce._fromIdTokenResponse(e,i,o),u=Ei(i);return new Ge({user:h,providerId:u,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const o=Ei(i);return new Ge({user:e,providerId:o,_tokenResponse:i,operationType:n})}}function Ei(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
*/class Yt extends pe{constructor(e,n,i,o){var h;super(n.code,n.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Yt.prototype),this.customData={appName:e.name,tenantId:(h=e.tenantId)!==null&&h!==void 0?h:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,o){return new Yt(e,n,i,o)}}function _s(r,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Yt._fromErrorAndOperation(r,o,e,i):o})}async function Nh(r,e,n=!1){const i=await yt(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return Ge._forOperation(r,"link",i)}/**
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
*/async function Dh(r,e,n=!1){const{auth:i}=r;if(Ee(i.app))return Promise.reject(De(i));const o="reauthenticate";try{const h=await yt(r,_s(i,o,e,r),n);E(h.idToken,i,"internal-error");const u=er(h.idToken);E(u,i,"internal-error");const{sub:w}=u;return E(r.uid===w,i,"user-mismatch"),Ge._forOperation(r,o,h)}catch(h){throw h?.code==="auth/user-not-found"&&de(i,"user-mismatch"),h}}/**
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
*/async function Lh(r,e,n=!1){if(Ee(r.app))return Promise.reject(De(r));const i="signIn",o=await _s(r,i,e),h=await Ge._fromIdTokenResponse(r,i,o);return n||await r._updateCurrentUser(h.user),h}function Mh(r,e,n,i){return qe(r).onIdTokenChanged(e,n,i)}function Uh(r,e,n){return qe(r).beforeAuthStateChanged(e,n)}const Qt="__sak";/**
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
*/class bs{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qt,"1"),this.storage.removeItem(Qt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
*/const jh=1e3,xh=10;class Is extends bs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gs(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),o=this.localCache[n];i!==o&&e(n,o,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((u,w,b)=>{this.notifyListeners(u,b)});return}const i=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(i);!n&&this.localCache[i]===u||this.notifyListeners(i,u)},h=this.storage.getItem(i);mh()&&h!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,xh):o()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},jh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Is.type="LOCAL";const Fh=Is;/**
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
*/class Ts extends bs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ts.type="SESSION";const Es=Ts;/**
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
*/function Bh(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
*/class tn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const i=new tn(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:o,data:h}=n.data,u=this.handlersMap[o];if(!u?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const w=Array.from(u).map(async T=>T(n.origin,h)),b=await Bh(w);n.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:b})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tn.receivers=[];/**
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
*/function ir(r="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return r+n}/**
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
*/class Hh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let h,u;return new Promise((w,b)=>{const T=ir("",20);o.port1.start();const A=setTimeout(()=>{b(new Error("unsupported_event"))},i);u={messageChannel:o,onMessage(R){const O=R;if(O.data.eventId===T)switch(O.data.status){case"ack":clearTimeout(A),h=setTimeout(()=>{b(new Error("timeout"))},3e3);break;case"done":clearTimeout(h),w(O.data.response);break;default:clearTimeout(A),clearTimeout(h),b(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:T,data:n},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
*/function re(){return window}function Vh(r){re().location.href=r}/**
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
*/function Ss(){return typeof re().WorkerGlobalScope<"u"&&typeof re().importScripts=="function"}async function zh(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $h(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function Wh(){return Ss()?self:null}/**
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
*/const As="firebaseLocalStorageDb",Gh=1,Zt="firebaseLocalStorage",ks="fbase_key";class It{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nn(r,e){return r.transaction([Zt],e?"readwrite":"readonly").objectStore(Zt)}function Kh(){const r=indexedDB.deleteDatabase(As);return new It(r).toPromise()}function $n(){const r=indexedDB.open(As,Gh);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(Zt,{keyPath:ks})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(Zt)?e(i):(i.close(),await Kh(),e(await $n()))})})}async function Si(r,e,n){const i=nn(r,!0).put({[ks]:e,value:n});return new It(i).toPromise()}async function qh(r,e){const n=nn(r,!1).get(e),i=await new It(n).toPromise();return i===void 0?null:i.value}function Ai(r,e){const n=nn(r,!0).delete(e);return new It(n).toPromise()}const Jh=800,Xh=3;class Cs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $n(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Xh)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ss()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tn._getInstance(Wh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zh(),!this.activeServiceWorker)return;this.sender=new Hh(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$h()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $n();return await Si(e,Qt,"1"),await Ai(e,Qt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Si(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>qh(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ai(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const h=nn(o,!1).getAll();return new It(h).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:h}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(h)&&(this.notifyListeners(o,h),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cs.type="LOCAL";const Yh=Cs;new _t(3e4,6e4);/**
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
*/function Qh(r,e){return e?le(e):(E(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
*/class sr extends vs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $e(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $e(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $e(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Zh(r){return Lh(r.auth,new sr(r),r.bypassAuthState)}function ec(r){const{auth:e,user:n}=r;return E(n,e,"internal-error"),Dh(n,new sr(r),r.bypassAuthState)}async function tc(r){const{auth:e,user:n}=r;return E(n,e,"internal-error"),Nh(n,new sr(r),r.bypassAuthState)}/**
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
*/class Rs{constructor(e,n,i,o,h=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=h,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:o,tenantId:h,error:u,type:w}=e;if(u){this.reject(u);return}const b={auth:this.auth,requestUri:n,sessionId:i,tenantId:h||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(w)(b))}catch(T){this.reject(T)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zh;case"linkViaPopup":case"linkViaRedirect":return tc;case"reauthViaPopup":case"reauthViaRedirect":return ec;default:de(this.auth,"internal-error")}}resolve(e){fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
*/const nc=new _t(2e3,1e4);class He extends Rs{constructor(e,n,i,o,h){super(e,n,o,h),this.provider=i,this.authWindow=null,this.pollId=null,He.currentPopupAction&&He.currentPopupAction.cancel(),He.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){fe(this.filter.length===1,"Popup operations only handle one event");const e=ir();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ne(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ne(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,He.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ne(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nc.get())};e()}}He.currentPopupAction=null;/**
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
*/const rc="pendingRedirect",$t=new Map;class ic extends Rs{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=$t.get(this.auth._key());if(!e){try{const n=await sc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(n){e=()=>Promise.reject(n)}$t.set(this.auth._key(),e)}return this.bypassAuthState||$t.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sc(r,e){const n=hc(e),i=ac(r);if(!await i._isAvailable())return!1;const o=await i._get(n)==="true";return await i._remove(n),o}function oc(r,e){$t.set(r._key(),e)}function ac(r){return le(r._redirectPersistence)}function hc(r){return zt(rc,r.config.apiKey,r.name)}async function cc(r,e,n=!1){if(Ee(r.app))return Promise.reject(De(r));const i=nr(r),o=Qh(i,e),h=await new ic(i,o,n).execute();return h&&!n&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
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
*/const lc=10*60*1e3;class uc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dc(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Os(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(ne(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lc&&this.cachedEventUids.clear(),this.cachedEventUids.has(ki(e))}saveEventToCache(e){this.cachedEventUids.add(ki(e)),this.lastProcessedEventTime=Date.now()}}function ki(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Os({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function dc(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Os(r);default:return!1}}/**
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
*/async function fc(r,e={}){return Xe(r,"GET","/v1/projects",e)}/**
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
*/const pc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gc=/^https?/;async function mc(r){if(r.config.emulator)return;const{authorizedDomains:e}=await fc(r);for(const n of e)try{if(yc(n))return}catch{}de(r,"unauthorized-domain")}function yc(r){const e=Vn(),{protocol:n,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&i===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&h.hostname===i}if(!gc.test(n))return!1;if(pc.test(r))return i===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
*/const vc=new _t(3e4,6e4);function Ci(){const r=re().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function wc(r){return new Promise((e,n)=>{var i,o,h;function u(){Ci(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ci(),n(ne(r,"network-request-failed"))},timeout:vc.get()})}if(!((o=(i=re().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((h=re().gapi)===null||h===void 0)&&h.load)u();else{const w=Sh("iframefcb");return re()[w]=()=>{gapi.load?u():n(ne(r,"network-request-failed"))},Th(`${Eh()}?onload=${w}`).catch(b=>n(b))}}).catch(e=>{throw Wt=null,e})}let Wt=null;function _c(r){return Wt=Wt||wc(r),Wt}/**
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
*/const bc=new _t(5e3,15e3),Ic="__/auth/iframe",Tc="emulator/auth/iframe",Ec={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ac(r){const e=r.config;E(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Qn(e,Tc):`https://${r.config.authDomain}/${Ic}`,i={apiKey:e.apiKey,appName:r.name,v:Je},o=Sc.get(r.config.apiHost);o&&(i.eid=o);const h=r._getFrameworks();return h.length&&(i.fw=h.join(",")),`${n}?${wt(i).slice(1)}`}async function kc(r){const e=await _c(r),n=re().gapi;return E(n,r,"internal-error"),e.open({where:document.body,url:Ac(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ec,dontclear:!0},i=>new Promise(async(o,h)=>{await i.restyle({setHideOnLeave:!1});const u=ne(r,"network-request-failed"),w=re().setTimeout(()=>{h(u)},bc.get());function b(){re().clearTimeout(w),o(i)}i.ping(b).then(b,()=>{h(u)})}))}/**
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
*/const Cc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rc=500,Oc=600,Pc="_blank",Nc="http://localhost";class Ri{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Dc(r,e,n,i=Rc,o=Oc){const h=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let w="";const b=Object.assign(Object.assign({},Cc),{width:i.toString(),height:o.toString(),top:h,left:u}),T=G().toLowerCase();n&&(w=ls(T)?Pc:n),hs(T)&&(e=e||Nc,b.scrollbars="yes");const A=Object.entries(b).reduce((O,[V,k])=>`${O}${V}=${k},`,"");if(gh(T)&&w!=="_self")return Lc(e||"",w),new Ri(null);const R=window.open(e||"",w,A);E(R,r,"popup-blocked");try{R.focus()}catch{}return new Ri(R)}function Lc(r,e){const n=document.createElement("a");n.href=r,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
*/const Mc="__/auth/handler",Uc="emulator/auth/handler",jc=encodeURIComponent("fac");async function Oi(r,e,n,i,o,h){E(r.config.authDomain,r,"auth-domain-config-required"),E(r.config.apiKey,r,"invalid-api-key");const u={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:i,v:Je,eventId:o};if(e instanceof ws){e.setDefaultLanguage(r.languageCode),u.providerId=e.providerId||"",xo(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[A,R]of Object.entries({}))u[A]=R}if(e instanceof bt){const A=e.getScopes().filter(R=>R!=="");A.length>0&&(u.scopes=A.join(","))}r.tenantId&&(u.tid=r.tenantId);const w=u;for(const A of Object.keys(w))w[A]===void 0&&delete w[A];const b=await r._getAppCheckToken(),T=b?`#${jc}=${encodeURIComponent(b)}`:"";return`${xc(r)}?${wt(w).slice(1)}${T}`}function xc({config:r}){return r.emulator?Qn(r,Uc):`https://${r.authDomain}/${Mc}`}/**
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
*/const Mn="webStorageSupport";class Fc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Es,this._completeRedirectFn=cc,this._overrideRedirectResult=oc}async _openPopup(e,n,i,o){var h;fe((h=this.eventManagers[e._key()])===null||h===void 0?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await Oi(e,n,i,Vn(),o);return Dc(e,u,ir())}async _openRedirect(e,n,i,o){await this._originValidation(e);const h=await Oi(e,n,i,Vn(),o);return Vh(h),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:h}=this.eventManagers[n];return o?Promise.resolve(o):(fe(h,"If manager is not set, promise should be"),h)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await kc(e),i=new uc(e);return n.register("authEvent",o=>(E(o?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mn,{type:Mn},i=>{var o;const h=(o=i?.[0])===null||o===void 0?void 0:o[Mn];h!==void 0&&n(!!h),de(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mc(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gs()||cs()||tr()}}const Bc=Fc;var Pi="@firebase/auth",Ni="1.8.2";/**
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
*/class Hc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
*/function Vc(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zc(r){We(new Le("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),h=e.getProvider("app-check-internal"),{apiKey:u,authDomain:w}=i.options;E(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const b={apiKey:u,authDomain:w,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ms(r)},T=new bh(i,o,h,b);return kh(T,n),T},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),We(new Le("auth-internal",e=>{const n=nr(e.getProvider("auth").getImmediate());return(i=>new Hc(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ke(Pi,Ni,Vc(r)),ke(Pi,Ni,"esm2017")}/**
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
*/const $c=5*60,Wc=Ki("authIdTokenMaxAge")||$c;let Di=null;const Gc=r=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Wc)return;const o=n?.token;Di!==o&&(Di=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Kc(r=Xi()){const e=qn(r,"auth");if(e.isInitialized())return e.getImmediate();const n=Ah(r,{popupRedirectResolver:Bc,persistence:[Yh,Fh,Es]}),i=Ki("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const h=new URL(i,location.origin);if(location.origin===h.origin){const u=Gc(h.toString());Uh(n,u,()=>u(n.currentUser)),Mh(n,w=>u(w))}}const o=Wi("auth");return o&&Ch(n,`http://${o}`),n}function qc(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}Ih({loadJS(r){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=o=>{const h=ne("internal-error");h.customData=o,n(h)},i.type="text/javascript",i.charset="UTF-8",qc().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zc("Browser");var Li=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ps;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(m,l){function f(){}f.prototype=l.prototype,m.D=l.prototype,m.prototype=new f,m.prototype.constructor=m,m.C=function(p,g,v){for(var d=Array(arguments.length-2),se=2;se<arguments.length;se++)d[se-2]=arguments[se];return l.prototype[g].apply(p,d)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(m,l,f){f||(f=0);var p=Array(16);if(typeof l=="string")for(var g=0;16>g;++g)p[g]=l.charCodeAt(f++)|l.charCodeAt(f++)<<8|l.charCodeAt(f++)<<16|l.charCodeAt(f++)<<24;else for(g=0;16>g;++g)p[g]=l[f++]|l[f++]<<8|l[f++]<<16|l[f++]<<24;l=m.g[0],f=m.g[1],g=m.g[2];var v=m.g[3],d=l+(v^f&(g^v))+p[0]+3614090360&4294967295;l=f+(d<<7&4294967295|d>>>25),d=v+(g^l&(f^g))+p[1]+3905402710&4294967295,v=l+(d<<12&4294967295|d>>>20),d=g+(f^v&(l^f))+p[2]+606105819&4294967295,g=v+(d<<17&4294967295|d>>>15),d=f+(l^g&(v^l))+p[3]+3250441966&4294967295,f=g+(d<<22&4294967295|d>>>10),d=l+(v^f&(g^v))+p[4]+4118548399&4294967295,l=f+(d<<7&4294967295|d>>>25),d=v+(g^l&(f^g))+p[5]+1200080426&4294967295,v=l+(d<<12&4294967295|d>>>20),d=g+(f^v&(l^f))+p[6]+2821735955&4294967295,g=v+(d<<17&4294967295|d>>>15),d=f+(l^g&(v^l))+p[7]+4249261313&4294967295,f=g+(d<<22&4294967295|d>>>10),d=l+(v^f&(g^v))+p[8]+1770035416&4294967295,l=f+(d<<7&4294967295|d>>>25),d=v+(g^l&(f^g))+p[9]+2336552879&4294967295,v=l+(d<<12&4294967295|d>>>20),d=g+(f^v&(l^f))+p[10]+4294925233&4294967295,g=v+(d<<17&4294967295|d>>>15),d=f+(l^g&(v^l))+p[11]+2304563134&4294967295,f=g+(d<<22&4294967295|d>>>10),d=l+(v^f&(g^v))+p[12]+1804603682&4294967295,l=f+(d<<7&4294967295|d>>>25),d=v+(g^l&(f^g))+p[13]+4254626195&4294967295,v=l+(d<<12&4294967295|d>>>20),d=g+(f^v&(l^f))+p[14]+2792965006&4294967295,g=v+(d<<17&4294967295|d>>>15),d=f+(l^g&(v^l))+p[15]+1236535329&4294967295,f=g+(d<<22&4294967295|d>>>10),d=l+(g^v&(f^g))+p[1]+4129170786&4294967295,l=f+(d<<5&4294967295|d>>>27),d=v+(f^g&(l^f))+p[6]+3225465664&4294967295,v=l+(d<<9&4294967295|d>>>23),d=g+(l^f&(v^l))+p[11]+643717713&4294967295,g=v+(d<<14&4294967295|d>>>18),d=f+(v^l&(g^v))+p[0]+3921069994&4294967295,f=g+(d<<20&4294967295|d>>>12),d=l+(g^v&(f^g))+p[5]+3593408605&4294967295,l=f+(d<<5&4294967295|d>>>27),d=v+(f^g&(l^f))+p[10]+38016083&4294967295,v=l+(d<<9&4294967295|d>>>23),d=g+(l^f&(v^l))+p[15]+3634488961&4294967295,g=v+(d<<14&4294967295|d>>>18),d=f+(v^l&(g^v))+p[4]+3889429448&4294967295,f=g+(d<<20&4294967295|d>>>12),d=l+(g^v&(f^g))+p[9]+568446438&4294967295,l=f+(d<<5&4294967295|d>>>27),d=v+(f^g&(l^f))+p[14]+3275163606&4294967295,v=l+(d<<9&4294967295|d>>>23),d=g+(l^f&(v^l))+p[3]+4107603335&4294967295,g=v+(d<<14&4294967295|d>>>18),d=f+(v^l&(g^v))+p[8]+1163531501&4294967295,f=g+(d<<20&4294967295|d>>>12),d=l+(g^v&(f^g))+p[13]+2850285829&4294967295,l=f+(d<<5&4294967295|d>>>27),d=v+(f^g&(l^f))+p[2]+4243563512&4294967295,v=l+(d<<9&4294967295|d>>>23),d=g+(l^f&(v^l))+p[7]+1735328473&4294967295,g=v+(d<<14&4294967295|d>>>18),d=f+(v^l&(g^v))+p[12]+2368359562&4294967295,f=g+(d<<20&4294967295|d>>>12),d=l+(f^g^v)+p[5]+4294588738&4294967295,l=f+(d<<4&4294967295|d>>>28),d=v+(l^f^g)+p[8]+2272392833&4294967295,v=l+(d<<11&4294967295|d>>>21),d=g+(v^l^f)+p[11]+1839030562&4294967295,g=v+(d<<16&4294967295|d>>>16),d=f+(g^v^l)+p[14]+4259657740&4294967295,f=g+(d<<23&4294967295|d>>>9),d=l+(f^g^v)+p[1]+2763975236&4294967295,l=f+(d<<4&4294967295|d>>>28),d=v+(l^f^g)+p[4]+1272893353&4294967295,v=l+(d<<11&4294967295|d>>>21),d=g+(v^l^f)+p[7]+4139469664&4294967295,g=v+(d<<16&4294967295|d>>>16),d=f+(g^v^l)+p[10]+3200236656&4294967295,f=g+(d<<23&4294967295|d>>>9),d=l+(f^g^v)+p[13]+681279174&4294967295,l=f+(d<<4&4294967295|d>>>28),d=v+(l^f^g)+p[0]+3936430074&4294967295,v=l+(d<<11&4294967295|d>>>21),d=g+(v^l^f)+p[3]+3572445317&4294967295,g=v+(d<<16&4294967295|d>>>16),d=f+(g^v^l)+p[6]+76029189&4294967295,f=g+(d<<23&4294967295|d>>>9),d=l+(f^g^v)+p[9]+3654602809&4294967295,l=f+(d<<4&4294967295|d>>>28),d=v+(l^f^g)+p[12]+3873151461&4294967295,v=l+(d<<11&4294967295|d>>>21),d=g+(v^l^f)+p[15]+530742520&4294967295,g=v+(d<<16&4294967295|d>>>16),d=f+(g^v^l)+p[2]+3299628645&4294967295,f=g+(d<<23&4294967295|d>>>9),d=l+(g^(f|~v))+p[0]+4096336452&4294967295,l=f+(d<<6&4294967295|d>>>26),d=v+(f^(l|~g))+p[7]+1126891415&4294967295,v=l+(d<<10&4294967295|d>>>22),d=g+(l^(v|~f))+p[14]+2878612391&4294967295,g=v+(d<<15&4294967295|d>>>17),d=f+(v^(g|~l))+p[5]+4237533241&4294967295,f=g+(d<<21&4294967295|d>>>11),d=l+(g^(f|~v))+p[12]+1700485571&4294967295,l=f+(d<<6&4294967295|d>>>26),d=v+(f^(l|~g))+p[3]+2399980690&4294967295,v=l+(d<<10&4294967295|d>>>22),d=g+(l^(v|~f))+p[10]+4293915773&4294967295,g=v+(d<<15&4294967295|d>>>17),d=f+(v^(g|~l))+p[1]+2240044497&4294967295,f=g+(d<<21&4294967295|d>>>11),d=l+(g^(f|~v))+p[8]+1873313359&4294967295,l=f+(d<<6&4294967295|d>>>26),d=v+(f^(l|~g))+p[15]+4264355552&4294967295,v=l+(d<<10&4294967295|d>>>22),d=g+(l^(v|~f))+p[6]+2734768916&4294967295,g=v+(d<<15&4294967295|d>>>17),d=f+(v^(g|~l))+p[13]+1309151649&4294967295,f=g+(d<<21&4294967295|d>>>11),d=l+(g^(f|~v))+p[4]+4149444226&4294967295,l=f+(d<<6&4294967295|d>>>26),d=v+(f^(l|~g))+p[11]+3174756917&4294967295,v=l+(d<<10&4294967295|d>>>22),d=g+(l^(v|~f))+p[2]+718787259&4294967295,g=v+(d<<15&4294967295|d>>>17),d=f+(v^(g|~l))+p[9]+3951481745&4294967295,m.g[0]=m.g[0]+l&4294967295,m.g[1]=m.g[1]+(g+(d<<21&4294967295|d>>>11))&4294967295,m.g[2]=m.g[2]+g&4294967295,m.g[3]=m.g[3]+v&4294967295}i.prototype.u=function(m,l){l===void 0&&(l=m.length);for(var f=l-this.blockSize,p=this.B,g=this.h,v=0;v<l;){if(g==0)for(;v<=f;)o(this,m,v),v+=this.blockSize;if(typeof m=="string"){for(;v<l;)if(p[g++]=m.charCodeAt(v++),g==this.blockSize){o(this,p),g=0;break}}else for(;v<l;)if(p[g++]=m[v++],g==this.blockSize){o(this,p),g=0;break}}this.h=g,this.o+=l},i.prototype.v=function(){var m=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);m[0]=128;for(var l=1;l<m.length-8;++l)m[l]=0;var f=8*this.o;for(l=m.length-8;l<m.length;++l)m[l]=f&255,f/=256;for(this.u(m),m=Array(16),l=f=0;4>l;++l)for(var p=0;32>p;p+=8)m[f++]=this.g[l]>>>p&255;return m};function h(m,l){var f=w;return Object.prototype.hasOwnProperty.call(f,m)?f[m]:f[m]=l(m)}function u(m,l){this.h=l;for(var f=[],p=!0,g=m.length-1;0<=g;g--){var v=m[g]|0;p&&v==l||(f[g]=v,p=!1)}this.g=f}var w={};function b(m){return-128<=m&&128>m?h(m,function(l){return new u([l|0],0>l?-1:0)}):new u([m|0],0>m?-1:0)}function T(m){if(isNaN(m)||!isFinite(m))return R;if(0>m)return L(T(-m));for(var l=[],f=1,p=0;m>=f;p++)l[p]=m/f|0,f*=4294967296;return new u(l,0)}function A(m,l){if(m.length==0)throw Error("number format error: empty string");if(l=l||10,2>l||36<l)throw Error("radix out of range: "+l);if(m.charAt(0)=="-")return L(A(m.substring(1),l));if(0<=m.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=T(Math.pow(l,8)),p=R,g=0;g<m.length;g+=8){var v=Math.min(8,m.length-g),d=parseInt(m.substring(g,g+v),l);8>v?(v=T(Math.pow(l,v)),p=p.j(v).add(T(d))):(p=p.j(f),p=p.add(T(d)))}return p}var R=b(0),O=b(1),V=b(16777216);r=u.prototype,r.m=function(){if(U(this))return-L(this).m();for(var m=0,l=1,f=0;f<this.g.length;f++){var p=this.i(f);m+=(0<=p?p:4294967296+p)*l,l*=4294967296}return m},r.toString=function(m){if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(k(this))return"0";if(U(this))return"-"+L(this).toString(m);for(var l=T(Math.pow(m,6)),f=this,p="";;){var g=Z(f,l).g;f=ie(f,g.j(l));var v=((0<f.g.length?f.g[0]:f.h)>>>0).toString(m);if(f=g,k(f))return v+p;for(;6>v.length;)v="0"+v;p=v+p}},r.i=function(m){return 0>m?0:m<this.g.length?this.g[m]:this.h};function k(m){if(m.h!=0)return!1;for(var l=0;l<m.g.length;l++)if(m.g[l]!=0)return!1;return!0}function U(m){return m.h==-1}r.l=function(m){return m=ie(this,m),U(m)?-1:k(m)?0:1};function L(m){for(var l=m.g.length,f=[],p=0;p<l;p++)f[p]=~m.g[p];return new u(f,~m.h).add(O)}r.abs=function(){return U(this)?L(this):this},r.add=function(m){for(var l=Math.max(this.g.length,m.g.length),f=[],p=0,g=0;g<=l;g++){var v=p+(this.i(g)&65535)+(m.i(g)&65535),d=(v>>>16)+(this.i(g)>>>16)+(m.i(g)>>>16);p=d>>>16,v&=65535,d&=65535,f[g]=d<<16|v}return new u(f,f[f.length-1]&-2147483648?-1:0)};function ie(m,l){return m.add(L(l))}r.j=function(m){if(k(this)||k(m))return R;if(U(this))return U(m)?L(this).j(L(m)):L(L(this).j(m));if(U(m))return L(this.j(L(m)));if(0>this.l(V)&&0>m.l(V))return T(this.m()*m.m());for(var l=this.g.length+m.g.length,f=[],p=0;p<2*l;p++)f[p]=0;for(p=0;p<this.g.length;p++)for(var g=0;g<m.g.length;g++){var v=this.i(p)>>>16,d=this.i(p)&65535,se=m.i(g)>>>16,Ye=m.i(g)&65535;f[2*p+2*g]+=d*Ye,Y(f,2*p+2*g),f[2*p+2*g+1]+=v*Ye,Y(f,2*p+2*g+1),f[2*p+2*g+1]+=d*se,Y(f,2*p+2*g+1),f[2*p+2*g+2]+=v*se,Y(f,2*p+2*g+2)}for(p=0;p<l;p++)f[p]=f[2*p+1]<<16|f[2*p];for(p=l;p<2*l;p++)f[p]=0;return new u(f,0)};function Y(m,l){for(;(m[l]&65535)!=m[l];)m[l+1]+=m[l]>>>16,m[l]&=65535,l++}function x(m,l){this.g=m,this.h=l}function Z(m,l){if(k(l))throw Error("division by zero");if(k(m))return new x(R,R);if(U(m))return l=Z(L(m),l),new x(L(l.g),L(l.h));if(U(l))return l=Z(m,L(l)),new x(L(l.g),l.h);if(30<m.g.length){if(U(m)||U(l))throw Error("slowDivide_ only works with positive integers.");for(var f=O,p=l;0>=p.l(m);)f=Ce(f),p=Ce(p);var g=K(f,1),v=K(p,1);for(p=K(p,2),f=K(f,2);!k(p);){var d=v.add(p);0>=d.l(m)&&(g=g.add(f),v=d),p=K(p,1),f=K(f,1)}return l=ie(m,g.j(l)),new x(g,l)}for(g=R;0<=m.l(l);){for(f=Math.max(1,Math.floor(m.m()/l.m())),p=Math.ceil(Math.log(f)/Math.LN2),p=48>=p?1:Math.pow(2,p-48),v=T(f),d=v.j(l);U(d)||0<d.l(m);)f-=p,v=T(f),d=v.j(l);k(v)&&(v=O),g=g.add(v),m=ie(m,d)}return new x(g,m)}r.A=function(m){return Z(this,m).h},r.and=function(m){for(var l=Math.max(this.g.length,m.g.length),f=[],p=0;p<l;p++)f[p]=this.i(p)&m.i(p);return new u(f,this.h&m.h)},r.or=function(m){for(var l=Math.max(this.g.length,m.g.length),f=[],p=0;p<l;p++)f[p]=this.i(p)|m.i(p);return new u(f,this.h|m.h)},r.xor=function(m){for(var l=Math.max(this.g.length,m.g.length),f=[],p=0;p<l;p++)f[p]=this.i(p)^m.i(p);return new u(f,this.h^m.h)};function Ce(m){for(var l=m.g.length+1,f=[],p=0;p<l;p++)f[p]=m.i(p)<<1|m.i(p-1)>>>31;return new u(f,m.h)}function K(m,l){var f=l>>5;l%=32;for(var p=m.g.length-f,g=[],v=0;v<p;v++)g[v]=0<l?m.i(v+f)>>>l|m.i(v+f+1)<<32-l:m.i(v+f);return new u(g,m.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=T,u.fromString=A,Ps=u}).apply(typeof Li<"u"?Li:typeof self<"u"?self:typeof window<"u"?window:{});var Ht=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,s,a){return t==Array.prototype||t==Object.prototype||(t[s]=a.value),t};function n(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ht=="object"&&Ht];for(var s=0;s<t.length;++s){var a=t[s];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var i=n(this);function o(t,s){if(s)e:{var a=i;t=t.split(".");for(var c=0;c<t.length-1;c++){var y=t[c];if(!(y in a))break e;a=a[y]}t=t[t.length-1],c=a[t],s=s(c),s!=c&&s!=null&&e(a,t,{configurable:!0,writable:!0,value:s})}}function h(t,s){t instanceof String&&(t+="");var a=0,c=!1,y={next:function(){if(!c&&a<t.length){var _=a++;return{value:s(_,t[_]),done:!1}}return c=!0,{done:!0,value:void 0}}};return y[Symbol.iterator]=function(){return y},y}o("Array.prototype.values",function(t){return t||function(){return h(this,function(s,a){return a})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},w=this||self;function b(t){var s=typeof t;return s=s!="object"?s:t?Array.isArray(t)?"array":s:"null",s=="array"||s=="object"&&typeof t.length=="number"}function T(t){var s=typeof t;return s=="object"&&t!=null||s=="function"}function A(t,s,a){return t.call.apply(t.bind,arguments)}function R(t,s,a){if(!t)throw Error();if(2<arguments.length){var c=Array.prototype.slice.call(arguments,2);return function(){var y=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(y,c),t.apply(s,y)}}return function(){return t.apply(s,arguments)}}function O(t,s,a){return O=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:R,O.apply(null,arguments)}function V(t,s){var a=Array.prototype.slice.call(arguments,1);return function(){var c=a.slice();return c.push.apply(c,arguments),t.apply(this,c)}}function k(t,s){function a(){}a.prototype=s.prototype,t.aa=s.prototype,t.prototype=new a,t.prototype.constructor=t,t.Qb=function(c,y,_){for(var I=Array(arguments.length-2),D=2;D<arguments.length;D++)I[D-2]=arguments[D];return s.prototype[y].apply(c,I)}}function U(t){const s=t.length;if(0<s){const a=Array(s);for(let c=0;c<s;c++)a[c]=t[c];return a}return[]}function L(t,s){for(let a=1;a<arguments.length;a++){const c=arguments[a];if(b(c)){const y=t.length||0,_=c.length||0;t.length=y+_;for(let I=0;I<_;I++)t[y+I]=c[I]}else t.push(c)}}class ie{constructor(s,a){this.i=s,this.j=a,this.h=0,this.g=null}get(){let s;return 0<this.h?(this.h--,s=this.g,this.g=s.next,s.next=null):s=this.i(),s}}function Y(t){return/^[\s\xa0]*$/.test(t)}function x(){var t=w.navigator;return t&&(t=t.userAgent)?t:""}function Z(t){return Z[" "](t),t}Z[" "]=function(){};var Ce=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function K(t,s,a){for(const c in t)s.call(a,t[c],c,t)}function m(t,s){for(const a in t)s.call(void 0,t[a],a,t)}function l(t){const s={};for(const a in t)s[a]=t[a];return s}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function p(t,s){let a,c;for(let y=1;y<arguments.length;y++){c=arguments[y];for(a in c)t[a]=c[a];for(let _=0;_<f.length;_++)a=f[_],Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a])}}function g(t){var s=1;t=t.split(":");const a=[];for(;0<s&&t.length;)a.push(t.shift()),s--;return t.length&&a.push(t.join(":")),a}function v(t){w.setTimeout(()=>{throw t},0)}function d(){var t=rn;let s=null;return t.g&&(s=t.g,t.g=t.g.next,t.g||(t.h=null),s.next=null),s}class se{constructor(){this.h=this.g=null}add(s,a){const c=Ye.get();c.set(s,a),this.h?this.h.next=c:this.g=c,this.h=c}}var Ye=new ie(()=>new Us,t=>t.reset());class Us{constructor(){this.next=this.g=this.h=null}set(s,a){this.h=s,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let Qe,Ze=!1,rn=new se,cr=()=>{const t=w.Promise.resolve(void 0);Qe=()=>{t.then(js)}};var js=()=>{for(var t;t=d();){try{t.h.call(t.g)}catch(a){v(a)}var s=Ye;s.j(t),100>s.h&&(s.h++,t.next=s.g,s.g=t)}Ze=!1};function ge(){this.s=this.s,this.C=this.C}ge.prototype.s=!1,ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function F(t,s){this.type=t,this.g=this.target=s,this.defaultPrevented=!1}F.prototype.h=function(){this.defaultPrevented=!0};var xs=function(){if(!w.addEventListener||!Object.defineProperty)return!1;var t=!1,s=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const a=()=>{};w.addEventListener("test",a,s),w.removeEventListener("test",a,s)}catch{}return t}();function et(t,s){if(F.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var a=this.type=t.type,c=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=s,s=t.relatedTarget){if(Ce){e:{try{Z(s.nodeName);var y=!0;break e}catch{}y=!1}y||(s=null)}}else a=="mouseover"?s=t.fromElement:a=="mouseout"&&(s=t.toElement);this.relatedTarget=s,c?(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Fs[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&et.aa.h.call(this)}}k(et,F);var Fs={2:"touch",3:"pen",4:"mouse"};et.prototype.h=function(){et.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Et="closure_listenable_"+(1e6*Math.random()|0),Bs=0;function Hs(t,s,a,c,y){this.listener=t,this.proxy=null,this.src=s,this.type=a,this.capture=!!c,this.ha=y,this.key=++Bs,this.da=this.fa=!1}function St(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function At(t){this.src=t,this.g={},this.h=0}At.prototype.add=function(t,s,a,c,y){var _=t.toString();t=this.g[_],t||(t=this.g[_]=[],this.h++);var I=on(t,s,c,y);return-1<I?(s=t[I],a||(s.fa=!1)):(s=new Hs(s,this.src,_,!!c,y),s.fa=a,t.push(s)),s};function sn(t,s){var a=s.type;if(a in t.g){var c=t.g[a],y=Array.prototype.indexOf.call(c,s,void 0),_;(_=0<=y)&&Array.prototype.splice.call(c,y,1),_&&(St(s),t.g[a].length==0&&(delete t.g[a],t.h--))}}function on(t,s,a,c){for(var y=0;y<t.length;++y){var _=t[y];if(!_.da&&_.listener==s&&_.capture==!!a&&_.ha==c)return y}return-1}var an="closure_lm_"+(1e6*Math.random()|0),hn={};function lr(t,s,a,c,y){if(Array.isArray(s)){for(var _=0;_<s.length;_++)lr(t,s[_],a,c,y);return null}return a=fr(a),t&&t[Et]?t.K(s,a,T(c)?!!c.capture:!1,y):Vs(t,s,a,!1,c,y)}function Vs(t,s,a,c,y,_){if(!s)throw Error("Invalid event type");var I=T(y)?!!y.capture:!!y,D=ln(t);if(D||(t[an]=D=new At(t)),a=D.add(s,a,c,I,_),a.proxy)return a;if(c=zs(),a.proxy=c,c.src=t,c.listener=a,t.addEventListener)xs||(y=I),y===void 0&&(y=!1),t.addEventListener(s.toString(),c,y);else if(t.attachEvent)t.attachEvent(dr(s.toString()),c);else if(t.addListener&&t.removeListener)t.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");return a}function zs(){function t(a){return s.call(t.src,t.listener,a)}const s=$s;return t}function ur(t,s,a,c,y){if(Array.isArray(s))for(var _=0;_<s.length;_++)ur(t,s[_],a,c,y);else c=T(c)?!!c.capture:!!c,a=fr(a),t&&t[Et]?(t=t.i,s=String(s).toString(),s in t.g&&(_=t.g[s],a=on(_,a,c,y),-1<a&&(St(_[a]),Array.prototype.splice.call(_,a,1),_.length==0&&(delete t.g[s],t.h--)))):t&&(t=ln(t))&&(s=t.g[s.toString()],t=-1,s&&(t=on(s,a,c,y)),(a=-1<t?s[t]:null)&&cn(a))}function cn(t){if(typeof t!="number"&&t&&!t.da){var s=t.src;if(s&&s[Et])sn(s.i,t);else{var a=t.type,c=t.proxy;s.removeEventListener?s.removeEventListener(a,c,t.capture):s.detachEvent?s.detachEvent(dr(a),c):s.addListener&&s.removeListener&&s.removeListener(c),(a=ln(s))?(sn(a,t),a.h==0&&(a.src=null,s[an]=null)):St(t)}}}function dr(t){return t in hn?hn[t]:hn[t]="on"+t}function $s(t,s){if(t.da)t=!0;else{s=new et(s,this);var a=t.listener,c=t.ha||t.src;t.fa&&cn(t),t=a.call(c,s)}return t}function ln(t){return t=t[an],t instanceof At?t:null}var un="__closure_events_fn_"+(1e9*Math.random()>>>0);function fr(t){return typeof t=="function"?t:(t[un]||(t[un]=function(s){return t.handleEvent(s)}),t[un])}function B(){ge.call(this),this.i=new At(this),this.M=this,this.F=null}k(B,ge),B.prototype[Et]=!0,B.prototype.removeEventListener=function(t,s,a,c){ur(this,t,s,a,c)};function z(t,s){var a,c=t.F;if(c)for(a=[];c;c=c.F)a.push(c);if(t=t.M,c=s.type||s,typeof s=="string")s=new F(s,t);else if(s instanceof F)s.target=s.target||t;else{var y=s;s=new F(c,t),p(s,y)}if(y=!0,a)for(var _=a.length-1;0<=_;_--){var I=s.g=a[_];y=kt(I,c,!0,s)&&y}if(I=s.g=t,y=kt(I,c,!0,s)&&y,y=kt(I,c,!1,s)&&y,a)for(_=0;_<a.length;_++)I=s.g=a[_],y=kt(I,c,!1,s)&&y}B.prototype.N=function(){if(B.aa.N.call(this),this.i){var t=this.i,s;for(s in t.g){for(var a=t.g[s],c=0;c<a.length;c++)St(a[c]);delete t.g[s],t.h--}}this.F=null},B.prototype.K=function(t,s,a,c){return this.i.add(String(t),s,!1,a,c)},B.prototype.L=function(t,s,a,c){return this.i.add(String(t),s,!0,a,c)};function kt(t,s,a,c){if(s=t.i.g[String(s)],!s)return!0;s=s.concat();for(var y=!0,_=0;_<s.length;++_){var I=s[_];if(I&&!I.da&&I.capture==a){var D=I.listener,j=I.ha||I.src;I.fa&&sn(t.i,I),y=D.call(j,c)!==!1&&y}}return y&&!c.defaultPrevented}function pr(t,s,a){if(typeof t=="function")a&&(t=O(t,a));else if(t&&typeof t.handleEvent=="function")t=O(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(s)?-1:w.setTimeout(t,s||0)}function gr(t){t.g=pr(()=>{t.g=null,t.i&&(t.i=!1,gr(t))},t.l);const s=t.h;t.h=null,t.m.apply(null,s)}class Ws extends ge{constructor(s,a){super(),this.m=s,this.l=a,this.h=null,this.i=!1,this.g=null}j(s){this.h=arguments,this.g?this.i=!0:gr(this)}N(){super.N(),this.g&&(w.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(t){ge.call(this),this.h=t,this.g={}}k(tt,ge);var mr=[];function yr(t){K(t.g,function(s,a){this.g.hasOwnProperty(a)&&cn(s)},t),t.g={}}tt.prototype.N=function(){tt.aa.N.call(this),yr(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dn=w.JSON.stringify,Gs=w.JSON.parse,Ks=class{stringify(t){return w.JSON.stringify(t,void 0)}parse(t){return w.JSON.parse(t,void 0)}};function fn(){}fn.prototype.h=null;function vr(t){return t.h||(t.h=t.i())}function pn(){F.call(this,"d")}k(pn,F);function gn(){F.call(this,"c")}k(gn,F);var Ue={},wr=null;function mn(){return wr=wr||new B}Ue.La="serverreachability";function _r(t){F.call(this,Ue.La,t)}k(_r,F);function nt(t){const s=mn();z(s,new _r(s))}Ue.STAT_EVENT="statevent";function br(t,s){F.call(this,Ue.STAT_EVENT,t),this.stat=s}k(br,F);function $(t){const s=mn();z(s,new br(s,t))}Ue.Ma="timingevent";function Ir(t,s){F.call(this,Ue.Ma,t),this.size=s}k(Ir,F);function rt(t,s){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return w.setTimeout(function(){t()},s)}function it(){this.g=!0}it.prototype.xa=function(){this.g=!1};function qs(t,s,a,c,y,_){t.info(function(){if(t.g)if(_)for(var I="",D=_.split("&"),j=0;j<D.length;j++){var P=D[j].split("=");if(1<P.length){var H=P[0];P=P[1];var q=H.split("_");I=2<=q.length&&q[1]=="type"?I+(H+"="+P+"&"):I+(H+"=redacted&")}}else I=null;else I=_;return"XMLHTTP REQ ("+c+") [attempt "+y+"]: "+s+`
`+a+`
`+I})}function Js(t,s,a,c,y,_,I){t.info(function(){return"XMLHTTP RESP ("+c+") [ attempt "+y+"]: "+s+`
`+a+`
`+_+" "+I})}function je(t,s,a,c){t.info(function(){return"XMLHTTP TEXT ("+s+"): "+Ys(t,a)+(c?" "+c:"")})}function Xs(t,s){t.info(function(){return"TIMEOUT: "+s})}it.prototype.info=function(){};function Ys(t,s){if(!t.g)return s;if(!s)return null;try{var a=JSON.parse(s);if(a){for(t=0;t<a.length;t++)if(Array.isArray(a[t])){var c=a[t];if(!(2>c.length)){var y=c[1];if(Array.isArray(y)&&!(1>y.length)){var _=y[0];if(_!="noop"&&_!="stop"&&_!="close")for(var I=1;I<y.length;I++)y[I]=""}}}}return dn(a)}catch{return s}}var yn;function Ct(){}k(Ct,fn),Ct.prototype.g=function(){return new XMLHttpRequest},Ct.prototype.i=function(){return{}},yn=new Ct;function me(t,s,a,c){this.j=t,this.i=s,this.l=a,this.R=c||1,this.U=new tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tr}function Tr(){this.i=null,this.g="",this.h=!1}var Er={},vn={};function wn(t,s,a){t.L=1,t.v=Nt(oe(s)),t.m=a,t.P=!0,Sr(t,null)}function Sr(t,s){t.F=Date.now(),Rt(t),t.A=oe(t.v);var a=t.A,c=t.R;Array.isArray(c)||(c=[String(c)]),Fr(a.i,"t",c),t.C=0,a=t.j.J,t.h=new Tr,t.g=ri(t.j,a?s:null,!t.m),0<t.O&&(t.M=new Ws(O(t.Y,t,t.g),t.O)),s=t.U,a=t.g,c=t.ca;var y="readystatechange";Array.isArray(y)||(y&&(mr[0]=y.toString()),y=mr);for(var _=0;_<y.length;_++){var I=lr(a,y[_],c||s.handleEvent,!1,s.h||s);if(!I)break;s.g[I.key]=I}s=t.H?l(t.H):{},t.m?(t.u||(t.u="POST"),s["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,s)):(t.u="GET",t.g.ea(t.A,t.u,null,s)),nt(),qs(t.i,t.u,t.A,t.l,t.R,t.m)}me.prototype.ca=function(t){t=t.target;const s=this.M;s&&ae(t)==3?s.j():this.Y(t)},me.prototype.Y=function(t){try{if(t==this.g)e:{const q=ae(this.g);var s=this.g.Ba();const Be=this.g.Z();if(!(3>q)&&(q!=3||this.g&&(this.h.h||this.g.oa()||Gr(this.g)))){this.J||q!=4||s==7||(s==8||0>=Be?nt(3):nt(2)),_n(this);var a=this.g.Z();this.X=a;t:if(Ar(this)){var c=Gr(this.g);t="";var y=c.length,_=ae(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Re(this),st(this);var I="";break t}this.h.i=new w.TextDecoder}for(s=0;s<y;s++)this.h.h=!0,t+=this.h.i.decode(c[s],{stream:!(_&&s==y-1)});c.length=0,this.h.g+=t,this.C=0,I=this.h.g}else I=this.g.oa();if(this.o=a==200,Js(this.i,this.u,this.A,this.l,this.R,q,a),this.o){if(this.T&&!this.K){t:{if(this.g){var D,j=this.g;if((D=j.g?j.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(D)){var P=D;break t}}P=null}if(a=P)je(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bn(this,a);else{this.o=!1,this.s=3,$(12),Re(this),st(this);break e}}if(this.P){a=!0;let ee;for(;!this.J&&this.C<I.length;)if(ee=Qs(this,I),ee==vn){q==4&&(this.s=4,$(14),a=!1),je(this.i,this.l,null,"[Incomplete Response]");break}else if(ee==Er){this.s=4,$(15),je(this.i,this.l,I,"[Invalid Chunk]"),a=!1;break}else je(this.i,this.l,ee,null),bn(this,ee);if(Ar(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),q!=4||I.length!=0||this.h.h||(this.s=1,$(16),a=!1),this.o=this.o&&a,!a)je(this.i,this.l,I,"[Invalid Chunked Response]"),Re(this),st(this);else if(0<I.length&&!this.W){this.W=!0;var H=this.j;H.g==this&&H.ba&&!H.M&&(H.j.info("Great, no buffering proxy detected. Bytes received: "+I.length),kn(H),H.M=!0,$(11))}}else je(this.i,this.l,I,null),bn(this,I);q==4&&Re(this),this.o&&!this.J&&(q==4?Zr(this.j,this):(this.o=!1,Rt(this)))}else mo(this.g),a==400&&0<I.indexOf("Unknown SID")?(this.s=3,$(12)):(this.s=0,$(13)),Re(this),st(this)}}}catch{}finally{}};function Ar(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function Qs(t,s){var a=t.C,c=s.indexOf(`
`,a);return c==-1?vn:(a=Number(s.substring(a,c)),isNaN(a)?Er:(c+=1,c+a>s.length?vn:(s=s.slice(c,c+a),t.C=c+a,s)))}me.prototype.cancel=function(){this.J=!0,Re(this)};function Rt(t){t.S=Date.now()+t.I,kr(t,t.I)}function kr(t,s){if(t.B!=null)throw Error("WatchDog timer not null");t.B=rt(O(t.ba,t),s)}function _n(t){t.B&&(w.clearTimeout(t.B),t.B=null)}me.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Xs(this.i,this.A),this.L!=2&&(nt(),$(17)),Re(this),this.s=2,st(this)):kr(this,this.S-t)};function st(t){t.j.G==0||t.J||Zr(t.j,t)}function Re(t){_n(t);var s=t.M;s&&typeof s.ma=="function"&&s.ma(),t.M=null,yr(t.U),t.g&&(s=t.g,t.g=null,s.abort(),s.ma())}function bn(t,s){try{var a=t.j;if(a.G!=0&&(a.g==t||In(a.h,t))){if(!t.K&&In(a.h,t)&&a.G==3){try{var c=a.Da.g.parse(s)}catch{c=null}if(Array.isArray(c)&&c.length==3){var y=c;if(y[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<t.F)xt(a),Ut(a);else break e;An(a),$(18)}}else a.za=y[1],0<a.za-a.T&&37500>y[2]&&a.F&&a.v==0&&!a.C&&(a.C=rt(O(a.Za,a),6e3));if(1>=Or(a.h)&&a.ca){try{a.ca()}catch{}a.ca=void 0}}else Pe(a,11)}else if((t.K||a.g==t)&&xt(a),!Y(s))for(y=a.Da.g.parse(s),s=0;s<y.length;s++){let P=y[s];if(a.T=P[0],P=P[1],a.G==2)if(P[0]=="c"){a.K=P[1],a.ia=P[2];const H=P[3];H!=null&&(a.la=H,a.j.info("VER="+a.la));const q=P[4];q!=null&&(a.Aa=q,a.j.info("SVER="+a.Aa));const Be=P[5];Be!=null&&typeof Be=="number"&&0<Be&&(c=1.5*Be,a.L=c,a.j.info("backChannelRequestTimeoutMs_="+c)),c=a;const ee=t.g;if(ee){const Ft=ee.g?ee.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ft){var _=c.h;_.g||Ft.indexOf("spdy")==-1&&Ft.indexOf("quic")==-1&&Ft.indexOf("h2")==-1||(_.j=_.l,_.g=new Set,_.h&&(Tn(_,_.h),_.h=null))}if(c.D){const Cn=ee.g?ee.g.getResponseHeader("X-HTTP-Session-Id"):null;Cn&&(c.ya=Cn,N(c.I,c.D,Cn))}}a.G=3,a.l&&a.l.ua(),a.ba&&(a.R=Date.now()-t.F,a.j.info("Handshake RTT: "+a.R+"ms")),c=a;var I=t;if(c.qa=ni(c,c.J?c.ia:null,c.W),I.K){Pr(c.h,I);var D=I,j=c.L;j&&(D.I=j),D.B&&(_n(D),Rt(D)),c.g=I}else Yr(c);0<a.i.length&&jt(a)}else P[0]!="stop"&&P[0]!="close"||Pe(a,7);else a.G==3&&(P[0]=="stop"||P[0]=="close"?P[0]=="stop"?Pe(a,7):Sn(a):P[0]!="noop"&&a.l&&a.l.ta(P),a.v=0)}}nt(4)}catch{}}var Zs=class{constructor(t,s){this.g=t,this.map=s}};function Cr(t){this.l=t||10,w.PerformanceNavigationTiming?(t=w.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(w.chrome&&w.chrome.loadTimes&&w.chrome.loadTimes()&&w.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Rr(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Or(t){return t.h?1:t.g?t.g.size:0}function In(t,s){return t.h?t.h==s:t.g?t.g.has(s):!1}function Tn(t,s){t.g?t.g.add(s):t.h=s}function Pr(t,s){t.h&&t.h==s?t.h=null:t.g&&t.g.has(s)&&t.g.delete(s)}Cr.prototype.cancel=function(){if(this.i=Nr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Nr(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let s=t.i;for(const a of t.g.values())s=s.concat(a.D);return s}return U(t.i)}function eo(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(b(t)){for(var s=[],a=t.length,c=0;c<a;c++)s.push(t[c]);return s}s=[],a=0;for(c in t)s[a++]=t[c];return s}function to(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(b(t)||typeof t=="string"){var s=[];t=t.length;for(var a=0;a<t;a++)s.push(a);return s}s=[],a=0;for(const c in t)s[a++]=c;return s}}}function Dr(t,s){if(t.forEach&&typeof t.forEach=="function")t.forEach(s,void 0);else if(b(t)||typeof t=="string")Array.prototype.forEach.call(t,s,void 0);else for(var a=to(t),c=eo(t),y=c.length,_=0;_<y;_++)s.call(void 0,c[_],a&&a[_],t)}var Lr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function no(t,s){if(t){t=t.split("&");for(var a=0;a<t.length;a++){var c=t[a].indexOf("="),y=null;if(0<=c){var _=t[a].substring(0,c);y=t[a].substring(c+1)}else _=t[a];s(_,y?decodeURIComponent(y.replace(/\+/g," ")):"")}}}function Oe(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Oe){this.h=t.h,Ot(this,t.j),this.o=t.o,this.g=t.g,Pt(this,t.s),this.l=t.l;var s=t.i,a=new ht;a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),Mr(this,a),this.m=t.m}else t&&(s=String(t).match(Lr))?(this.h=!1,Ot(this,s[1]||"",!0),this.o=ot(s[2]||""),this.g=ot(s[3]||"",!0),Pt(this,s[4]),this.l=ot(s[5]||"",!0),Mr(this,s[6]||"",!0),this.m=ot(s[7]||"")):(this.h=!1,this.i=new ht(null,this.h))}Oe.prototype.toString=function(){var t=[],s=this.j;s&&t.push(at(s,Ur,!0),":");var a=this.g;return(a||s=="file")&&(t.push("//"),(s=this.o)&&t.push(at(s,Ur,!0),"@"),t.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.s,a!=null&&t.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&t.push("/"),t.push(at(a,a.charAt(0)=="/"?so:io,!0))),(a=this.i.toString())&&t.push("?",a),(a=this.m)&&t.push("#",at(a,ao)),t.join("")};function oe(t){return new Oe(t)}function Ot(t,s,a){t.j=a?ot(s,!0):s,t.j&&(t.j=t.j.replace(/:$/,""))}function Pt(t,s){if(s){if(s=Number(s),isNaN(s)||0>s)throw Error("Bad port number "+s);t.s=s}else t.s=null}function Mr(t,s,a){s instanceof ht?(t.i=s,ho(t.i,t.h)):(a||(s=at(s,oo)),t.i=new ht(s,t.h))}function N(t,s,a){t.i.set(s,a)}function Nt(t){return N(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ot(t,s){return t?s?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function at(t,s,a){return typeof t=="string"?(t=encodeURI(t).replace(s,ro),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ro(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ur=/[#\/\?@]/g,io=/[#\?:]/g,so=/[#\?]/g,oo=/[#\?@]/g,ao=/#/g;function ht(t,s){this.h=this.g=null,this.i=t||null,this.j=!!s}function ye(t){t.g||(t.g=new Map,t.h=0,t.i&&no(t.i,function(s,a){t.add(decodeURIComponent(s.replace(/\+/g," ")),a)}))}r=ht.prototype,r.add=function(t,s){ye(this),this.i=null,t=xe(this,t);var a=this.g.get(t);return a||this.g.set(t,a=[]),a.push(s),this.h+=1,this};function jr(t,s){ye(t),s=xe(t,s),t.g.has(s)&&(t.i=null,t.h-=t.g.get(s).length,t.g.delete(s))}function xr(t,s){return ye(t),s=xe(t,s),t.g.has(s)}r.forEach=function(t,s){ye(this),this.g.forEach(function(a,c){a.forEach(function(y){t.call(s,y,c,this)},this)},this)},r.na=function(){ye(this);const t=Array.from(this.g.values()),s=Array.from(this.g.keys()),a=[];for(let c=0;c<s.length;c++){const y=t[c];for(let _=0;_<y.length;_++)a.push(s[c])}return a},r.V=function(t){ye(this);let s=[];if(typeof t=="string")xr(this,t)&&(s=s.concat(this.g.get(xe(this,t))));else{t=Array.from(this.g.values());for(let a=0;a<t.length;a++)s=s.concat(t[a])}return s},r.set=function(t,s){return ye(this),this.i=null,t=xe(this,t),xr(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[s]),this.h+=1,this},r.get=function(t,s){return t?(t=this.V(t),0<t.length?String(t[0]):s):s};function Fr(t,s,a){jr(t,s),0<a.length&&(t.i=null,t.g.set(xe(t,s),U(a)),t.h+=a.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],s=Array.from(this.g.keys());for(var a=0;a<s.length;a++){var c=s[a];const _=encodeURIComponent(String(c)),I=this.V(c);for(c=0;c<I.length;c++){var y=_;I[c]!==""&&(y+="="+encodeURIComponent(String(I[c]))),t.push(y)}}return this.i=t.join("&")};function xe(t,s){return s=String(s),t.j&&(s=s.toLowerCase()),s}function ho(t,s){s&&!t.j&&(ye(t),t.i=null,t.g.forEach(function(a,c){var y=c.toLowerCase();c!=y&&(jr(this,c),Fr(this,y,a))},t)),t.j=s}function co(t,s){const a=new it;if(w.Image){const c=new Image;c.onload=V(ve,a,"TestLoadImage: loaded",!0,s,c),c.onerror=V(ve,a,"TestLoadImage: error",!1,s,c),c.onabort=V(ve,a,"TestLoadImage: abort",!1,s,c),c.ontimeout=V(ve,a,"TestLoadImage: timeout",!1,s,c),w.setTimeout(function(){c.ontimeout&&c.ontimeout()},1e4),c.src=t}else s(!1)}function lo(t,s){const a=new it,c=new AbortController,y=setTimeout(()=>{c.abort(),ve(a,"TestPingServer: timeout",!1,s)},1e4);fetch(t,{signal:c.signal}).then(_=>{clearTimeout(y),_.ok?ve(a,"TestPingServer: ok",!0,s):ve(a,"TestPingServer: server error",!1,s)}).catch(()=>{clearTimeout(y),ve(a,"TestPingServer: error",!1,s)})}function ve(t,s,a,c,y){try{y&&(y.onload=null,y.onerror=null,y.onabort=null,y.ontimeout=null),c(a)}catch{}}function uo(){this.g=new Ks}function fo(t,s,a){const c=a||"";try{Dr(t,function(y,_){let I=y;T(y)&&(I=dn(y)),s.push(c+_+"="+encodeURIComponent(I))})}catch(y){throw s.push(c+"type="+encodeURIComponent("_badmap")),y}}function Dt(t){this.l=t.Ub||null,this.j=t.eb||!1}k(Dt,fn),Dt.prototype.g=function(){return new Lt(this.l,this.j)},Dt.prototype.i=function(t){return function(){return t}}({});function Lt(t,s){B.call(this),this.D=t,this.o=s,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Lt,B),r=Lt.prototype,r.open=function(t,s){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=s,this.readyState=1,lt(this)},r.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const s={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(s.body=t),(this.D||w).fetch(new Request(this.A,s)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ct(this)),this.readyState=0},r.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,lt(this)),this.g&&(this.readyState=3,lt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof w.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Br(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function Br(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}r.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var s=t.value?t.value:new Uint8Array(0);(s=this.v.decode(s,{stream:!t.done}))&&(this.response=this.responseText+=s)}t.done?ct(this):lt(this),this.readyState==3&&Br(this)}},r.Ra=function(t){this.g&&(this.response=this.responseText=t,ct(this))},r.Qa=function(t){this.g&&(this.response=t,ct(this))},r.ga=function(){this.g&&ct(this)};function ct(t){t.readyState=4,t.l=null,t.j=null,t.v=null,lt(t)}r.setRequestHeader=function(t,s){this.u.append(t,s)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],s=this.h.entries();for(var a=s.next();!a.done;)a=a.value,t.push(a[0]+": "+a[1]),a=s.next();return t.join(`\r
`)};function lt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Lt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Hr(t){let s="";return K(t,function(a,c){s+=c,s+=":",s+=a,s+=`\r
`}),s}function En(t,s,a){e:{for(c in a){var c=!1;break e}c=!0}c||(a=Hr(a),typeof t=="string"?a!=null&&encodeURIComponent(String(a)):N(t,s,a))}function M(t){B.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(M,B);var po=/^https?$/i,go=["POST","PUT"];r=M.prototype,r.Ha=function(t){this.J=t},r.ea=function(t,s,a,c){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);s=s?s.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():yn.g(),this.v=this.o?vr(this.o):vr(yn),this.g.onreadystatechange=O(this.Ea,this);try{this.B=!0,this.g.open(s,String(t),!0),this.B=!1}catch(_){Vr(this,_);return}if(t=a||"",a=new Map(this.headers),c)if(Object.getPrototypeOf(c)===Object.prototype)for(var y in c)a.set(y,c[y]);else if(typeof c.keys=="function"&&typeof c.get=="function")for(const _ of c.keys())a.set(_,c.get(_));else throw Error("Unknown input type for opt_headers: "+String(c));c=Array.from(a.keys()).find(_=>_.toLowerCase()=="content-type"),y=w.FormData&&t instanceof w.FormData,!(0<=Array.prototype.indexOf.call(go,s,void 0))||c||y||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[_,I]of a)this.g.setRequestHeader(_,I);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Wr(this),this.u=!0,this.g.send(t),this.u=!1}catch(_){Vr(this,_)}};function Vr(t,s){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=s,t.m=5,zr(t),Mt(t)}function zr(t){t.A||(t.A=!0,z(t,"complete"),z(t,"error"))}r.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,z(this,"complete"),z(this,"abort"),Mt(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mt(this,!0)),M.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?$r(this):this.bb())},r.bb=function(){$r(this)};function $r(t){if(t.h&&typeof u<"u"&&(!t.v[1]||ae(t)!=4||t.Z()!=2)){if(t.u&&ae(t)==4)pr(t.Ea,0,t);else if(z(t,"readystatechange"),ae(t)==4){t.h=!1;try{const I=t.Z();e:switch(I){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var s=!0;break e;default:s=!1}var a;if(!(a=s)){var c;if(c=I===0){var y=String(t.D).match(Lr)[1]||null;!y&&w.self&&w.self.location&&(y=w.self.location.protocol.slice(0,-1)),c=!po.test(y?y.toLowerCase():"")}a=c}if(a)z(t,"complete"),z(t,"success");else{t.m=6;try{var _=2<ae(t)?t.g.statusText:""}catch{_=""}t.l=_+" ["+t.Z()+"]",zr(t)}}finally{Mt(t)}}}}function Mt(t,s){if(t.g){Wr(t);const a=t.g,c=t.v[0]?()=>{}:null;t.g=null,t.v=null,s||z(t,"ready");try{a.onreadystatechange=c}catch{}}}function Wr(t){t.I&&(w.clearTimeout(t.I),t.I=null)}r.isActive=function(){return!!this.g};function ae(t){return t.g?t.g.readyState:0}r.Z=function(){try{return 2<ae(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(t){if(this.g){var s=this.g.responseText;return t&&s.indexOf(t)==0&&(s=s.substring(t.length)),Gs(s)}};function Gr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function mo(t){const s={};t=(t.g&&2<=ae(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let c=0;c<t.length;c++){if(Y(t[c]))continue;var a=g(t[c]);const y=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const _=s[y]||[];s[y]=_,_.push(a)}m(s,function(c){return c.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ut(t,s,a){return a&&a.internalChannelParams&&a.internalChannelParams[t]||s}function Kr(t){this.Aa=0,this.i=[],this.j=new it,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ut("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ut("baseRetryDelayMs",5e3,t),this.cb=ut("retryDelaySeedMs",1e4,t),this.Wa=ut("forwardChannelMaxRetries",2,t),this.wa=ut("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Cr(t&&t.concurrentRequestLimit),this.Da=new uo,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Kr.prototype,r.la=8,r.G=1,r.connect=function(t,s,a,c){$(0),this.W=t,this.H=s||{},a&&c!==void 0&&(this.H.OSID=a,this.H.OAID=c),this.F=this.X,this.I=ni(this,null,this.W),jt(this)};function Sn(t){if(qr(t),t.G==3){var s=t.U++,a=oe(t.I);if(N(a,"SID",t.K),N(a,"RID",s),N(a,"TYPE","terminate"),dt(t,a),s=new me(t,t.j,s),s.L=2,s.v=Nt(oe(a)),a=!1,w.navigator&&w.navigator.sendBeacon)try{a=w.navigator.sendBeacon(s.v.toString(),"")}catch{}!a&&w.Image&&(new Image().src=s.v,a=!0),a||(s.g=ri(s.j,null),s.g.ea(s.v)),s.F=Date.now(),Rt(s)}ti(t)}function Ut(t){t.g&&(kn(t),t.g.cancel(),t.g=null)}function qr(t){Ut(t),t.u&&(w.clearTimeout(t.u),t.u=null),xt(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&w.clearTimeout(t.s),t.s=null)}function jt(t){if(!Rr(t.h)&&!t.s){t.s=!0;var s=t.Ga;Qe||cr(),Ze||(Qe(),Ze=!0),rn.add(s,t),t.B=0}}function yo(t,s){return Or(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=s.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=rt(O(t.Ga,t,s),ei(t,t.B)),t.B++,!0)}r.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const y=new me(this,this.j,t);let _=this.o;if(this.S&&(_?(_=l(_),p(_,this.S)):_=this.S),this.m!==null||this.O||(y.H=_,_=null),this.P)e:{for(var s=0,a=0;a<this.i.length;a++){t:{var c=this.i[a];if("__data__"in c.map&&(c=c.map.__data__,typeof c=="string")){c=c.length;break t}c=void 0}if(c===void 0)break;if(s+=c,4096<s){s=a;break e}if(s===4096||a===this.i.length-1){s=a+1;break e}}s=1e3}else s=1e3;s=Xr(this,y,s),a=oe(this.I),N(a,"RID",t),N(a,"CVER",22),this.D&&N(a,"X-HTTP-Session-Id",this.D),dt(this,a),_&&(this.O?s="headers="+encodeURIComponent(String(Hr(_)))+"&"+s:this.m&&En(a,this.m,_)),Tn(this.h,y),this.Ua&&N(a,"TYPE","init"),this.P?(N(a,"$req",s),N(a,"SID","null"),y.T=!0,wn(y,a,null)):wn(y,a,s),this.G=2}}else this.G==3&&(t?Jr(this,t):this.i.length==0||Rr(this.h)||Jr(this))};function Jr(t,s){var a;s?a=s.l:a=t.U++;const c=oe(t.I);N(c,"SID",t.K),N(c,"RID",a),N(c,"AID",t.T),dt(t,c),t.m&&t.o&&En(c,t.m,t.o),a=new me(t,t.j,a,t.B+1),t.m===null&&(a.H=t.o),s&&(t.i=s.D.concat(t.i)),s=Xr(t,a,1e3),a.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Tn(t.h,a),wn(a,c,s)}function dt(t,s){t.H&&K(t.H,function(a,c){N(s,c,a)}),t.l&&Dr({},function(a,c){N(s,c,a)})}function Xr(t,s,a){a=Math.min(t.i.length,a);var c=t.l?O(t.l.Na,t.l,t):null;e:{var y=t.i;let _=-1;for(;;){const I=["count="+a];_==-1?0<a?(_=y[0].g,I.push("ofs="+_)):_=0:I.push("ofs="+_);let D=!0;for(let j=0;j<a;j++){let P=y[j].g;const H=y[j].map;if(P-=_,0>P)_=Math.max(0,y[j].g-100),D=!1;else try{fo(H,I,"req"+P+"_")}catch{c&&c(H)}}if(D){c=I.join("&");break e}}}return t=t.i.splice(0,a),s.D=t,c}function Yr(t){if(!t.g&&!t.u){t.Y=1;var s=t.Fa;Qe||cr(),Ze||(Qe(),Ze=!0),rn.add(s,t),t.v=0}}function An(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=rt(O(t.Fa,t),ei(t,t.v)),t.v++,!0)}r.Fa=function(){if(this.u=null,Qr(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=rt(O(this.ab,this),t)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$(10),Ut(this),Qr(this))};function kn(t){t.A!=null&&(w.clearTimeout(t.A),t.A=null)}function Qr(t){t.g=new me(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var s=oe(t.qa);N(s,"RID","rpc"),N(s,"SID",t.K),N(s,"AID",t.T),N(s,"CI",t.F?"0":"1"),!t.F&&t.ja&&N(s,"TO",t.ja),N(s,"TYPE","xmlhttp"),dt(t,s),t.m&&t.o&&En(s,t.m,t.o),t.L&&(t.g.I=t.L);var a=t.g;t=t.ia,a.L=1,a.v=Nt(oe(s)),a.m=null,a.P=!0,Sr(a,t)}r.Za=function(){this.C!=null&&(this.C=null,Ut(this),An(this),$(19))};function xt(t){t.C!=null&&(w.clearTimeout(t.C),t.C=null)}function Zr(t,s){var a=null;if(t.g==s){xt(t),kn(t),t.g=null;var c=2}else if(In(t.h,s))a=s.D,Pr(t.h,s),c=1;else return;if(t.G!=0){if(s.o)if(c==1){a=s.m?s.m.length:0,s=Date.now()-s.F;var y=t.B;c=mn(),z(c,new Ir(c,a)),jt(t)}else Yr(t);else if(y=s.s,y==3||y==0&&0<s.X||!(c==1&&yo(t,s)||c==2&&An(t)))switch(a&&0<a.length&&(s=t.h,s.i=s.i.concat(a)),y){case 1:Pe(t,5);break;case 4:Pe(t,10);break;case 3:Pe(t,6);break;default:Pe(t,2)}}}function ei(t,s){let a=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(a*=2),a*s}function Pe(t,s){if(t.j.info("Error code "+s),s==2){var a=O(t.fb,t),c=t.Xa;const y=!c;c=new Oe(c||"//www.google.com/images/cleardot.gif"),w.location&&w.location.protocol=="http"||Ot(c,"https"),Nt(c),y?co(c.toString(),a):lo(c.toString(),a)}else $(2);t.G=0,t.l&&t.l.sa(s),ti(t),qr(t)}r.fb=function(t){t?(this.j.info("Successfully pinged google.com"),$(2)):(this.j.info("Failed to ping google.com"),$(1))};function ti(t){if(t.G=0,t.ka=[],t.l){const s=Nr(t.h);(s.length!=0||t.i.length!=0)&&(L(t.ka,s),L(t.ka,t.i),t.h.i.length=0,U(t.i),t.i.length=0),t.l.ra()}}function ni(t,s,a){var c=a instanceof Oe?oe(a):new Oe(a);if(c.g!="")s&&(c.g=s+"."+c.g),Pt(c,c.s);else{var y=w.location;c=y.protocol,s=s?s+"."+y.hostname:y.hostname,y=+y.port;var _=new Oe(null);c&&Ot(_,c),s&&(_.g=s),y&&Pt(_,y),a&&(_.l=a),c=_}return a=t.D,s=t.ya,a&&s&&N(c,a,s),N(c,"VER",t.la),dt(t,c),c}function ri(t,s,a){if(s&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return s=t.Ca&&!t.pa?new M(new Dt({eb:a})):new M(t.pa),s.Ha(t.J),s}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ii(){}r=ii.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Q(t,s){B.call(this),this.g=new Kr(s),this.l=t,this.h=s&&s.messageUrlParams||null,t=s&&s.messageHeaders||null,s&&s.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=s&&s.initMessageHeaders||null,s&&s.messageContentType&&(t?t["X-WebChannel-Content-Type"]=s.messageContentType:t={"X-WebChannel-Content-Type":s.messageContentType}),s&&s.va&&(t?t["X-WebChannel-Client-Profile"]=s.va:t={"X-WebChannel-Client-Profile":s.va}),this.g.S=t,(t=s&&s.Sb)&&!Y(t)&&(this.g.m=t),this.v=s&&s.supportsCrossDomainXhr||!1,this.u=s&&s.sendRawJson||!1,(s=s&&s.httpSessionIdParam)&&!Y(s)&&(this.g.D=s,t=this.h,t!==null&&s in t&&(t=this.h,s in t&&delete t[s])),this.j=new Fe(this)}k(Q,B),Q.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Q.prototype.close=function(){Sn(this.g)},Q.prototype.o=function(t){var s=this.g;if(typeof t=="string"){var a={};a.__data__=t,t=a}else this.u&&(a={},a.__data__=dn(t),t=a);s.i.push(new Zs(s.Ya++,t)),s.G==3&&jt(s)},Q.prototype.N=function(){this.g.l=null,delete this.j,Sn(this.g),delete this.g,Q.aa.N.call(this)};function si(t){pn.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var s=t.__sm__;if(s){e:{for(const a in s){t=a;break e}t=void 0}(this.i=t)&&(t=this.i,s=s!==null&&t in s?s[t]:void 0),this.data=s}else this.data=t}k(si,pn);function oi(){gn.call(this),this.status=1}k(oi,gn);function Fe(t){this.g=t}k(Fe,ii),Fe.prototype.ua=function(){z(this.g,"a")},Fe.prototype.ta=function(t){z(this.g,new si(t))},Fe.prototype.sa=function(t){z(this.g,new oi)},Fe.prototype.ra=function(){z(this.g,"b")},Q.prototype.send=Q.prototype.o,Q.prototype.open=Q.prototype.m,Q.prototype.close=Q.prototype.close,B.prototype.listen=B.prototype.K,M.prototype.listenOnce=M.prototype.L,M.prototype.getLastError=M.prototype.Ka,M.prototype.getLastErrorCode=M.prototype.Ba,M.prototype.getStatus=M.prototype.Z,M.prototype.getResponseJson=M.prototype.Oa,M.prototype.getResponseText=M.prototype.oa,M.prototype.send=M.prototype.ea,M.prototype.setWithCredentials=M.prototype.Ha}).apply(typeof Ht<"u"?Ht:typeof self<"u"?self:typeof window<"u"?window:{});const Mi="@firebase/firestore";/**
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
*/class W{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}W.UNAUTHENTICATED=new W(null),W.GOOGLE_CREDENTIALS=new W("google-credentials-uid"),W.FIRST_PARTY=new W("first-party-uid"),W.MOCK_USER=new W("mock-user");/**
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
*/let Tt="11.2.0";/**
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
*/const Ke=new Gn("@firebase/firestore");function te(r,...e){if(Ke.logLevel<=C.DEBUG){const n=e.map(or);Ke.debug(`Firestore (${Tt}): ${r}`,...n)}}function Ns(r,...e){if(Ke.logLevel<=C.ERROR){const n=e.map(or);Ke.error(`Firestore (${Tt}): ${r}`,...n)}}function Jc(r,...e){if(Ke.logLevel<=C.WARN){const n=e.map(or);Ke.warn(`Firestore (${Tt}): ${r}`,...n)}}function or(r){if(typeof r=="string")return r;try{/**
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
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
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
*/function ar(r="Unexpected state"){const e=`FIRESTORE (${Tt}) INTERNAL ASSERTION FAILED: `+r;throw Ns(e),new Error(e)}function pt(r,e){r||ar()}/**
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
*/const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends pe{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
*/class gt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
*/class Ds{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Xc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(W.UNAUTHENTICATED))}shutdown(){}}class Yc{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Qc{constructor(e){this.t=e,this.currentUser=W.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){pt(this.o===void 0);let i=this.i;const o=b=>this.i!==i?(i=this.i,n(b)):Promise.resolve();let h=new gt;this.o=()=>{this.i++,this.currentUser=this.u(),h.resolve(),h=new gt,e.enqueueRetryable(()=>o(this.currentUser))};const u=()=>{const b=h;e.enqueueRetryable(async()=>{await b.promise,await o(this.currentUser)})},w=b=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=b,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(b=>w(b)),setTimeout(()=>{if(!this.auth){const b=this.t.getImmediate({optional:!0});b?w(b):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),h.resolve(),h=new gt)}},0),u()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(pt(typeof i.accessToken=="string"),new Ds(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pt(e===null||typeof e=="string"),new W(e)}}class Zc{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=W.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class el{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new Zc(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(W.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nl{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){pt(this.o===void 0);const i=h=>{h.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${h.error.message}`);const u=h.token!==this.R;return this.R=h.token,te("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?n(h.token):Promise.resolve()};this.o=h=>{e.enqueueRetryable(()=>i(h))};const o=h=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=h,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(h=>o(h)),setTimeout(()=>{if(!this.appCheck){const h=this.A.getImmediate({optional:!0});h?o(h):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pt(typeof n.token=="string"),this.R=n.token,new tl(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function rl(r){return r.name==="IndexedDbTransactionError"}class en{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new en("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof en&&e.projectId===this.projectId&&e.database===this.database}}/**
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
*/var Ui,S;(S=Ui||(Ui={}))[S.OK=0]="OK",S[S.CANCELLED=1]="CANCELLED",S[S.UNKNOWN=2]="UNKNOWN",S[S.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",S[S.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",S[S.NOT_FOUND=5]="NOT_FOUND",S[S.ALREADY_EXISTS=6]="ALREADY_EXISTS",S[S.PERMISSION_DENIED=7]="PERMISSION_DENIED",S[S.UNAUTHENTICATED=16]="UNAUTHENTICATED",S[S.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",S[S.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",S[S.ABORTED=10]="ABORTED",S[S.OUT_OF_RANGE=11]="OUT_OF_RANGE",S[S.UNIMPLEMENTED=12]="UNIMPLEMENTED",S[S.INTERNAL=13]="INTERNAL",S[S.UNAVAILABLE=14]="UNAVAILABLE",S[S.DATA_LOSS=15]="DATA_LOSS";/**
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
*/new Ps([4294967295,4294967295],0);function Un(){return typeof document<"u"?document:null}/**
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
*/class il{constructor(e,n,i=1e3,o=1.5,h=6e4){this.li=e,this.timerId=n,this.Qo=i,this.Ko=o,this.$o=h,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,n-i);o>0&&te("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
*/class hr{constructor(e,n,i,o,h){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=o,this.removalCallback=h,this.deferred=new gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,o,h){const u=Date.now()+i,w=new hr(e,n,u,o,h);return w.start(i),w}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var ji,xi;(xi=ji||(ji={})).na="default",xi.Cache="cache";/**
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
*/function sl(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
*/const Fi=new Map;function ol(r,e,n,i){if(e===!0&&i===!0)throw new X(J.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function al(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ar()}function hl(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new X(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=al(r);throw new X(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
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
*/class Bi{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new X(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ol("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sl((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new X(J.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new X(J.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new X(J.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ls{constructor(e,n,i,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bi({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bi(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Xc;switch(n.type){case"firstParty":return new el(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new X(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Fi.get(e);n&&(te("ComponentProvider","Removing Datastore"),Fi.delete(e),n.terminate())}(this),Promise.resolve()}}function cl(r,e,n,i={}){var o;const h=(r=hl(r,Ls))._getSettings(),u=`${e}:${n}`;if(h.host!=="firestore.googleapis.com"&&h.host!==u&&Jc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},h),{host:u,ssl:!1})),i.mockUserToken){let w,b;if(typeof i.mockUserToken=="string")w=i.mockUserToken,b=W.MOCK_USER;else{w=ko(i.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const T=i.mockUserToken.sub||i.mockUserToken.user_id;if(!T)throw new X(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new W(T)}r._authCredentials=new Yc(new Ds(w,b))}}/**
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
*/class Hi{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new il(this,"async_queue_retry"),this.fu=()=>{const i=Un();i&&te("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const n=Un();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const n=Un();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const n=new gt;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!rl(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const o=function(h){let u=h.message||"";return h.stack&&(u=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),u}(i);throw Ns("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Ru=!1,i))));return this.gu=n,n}enqueueAfterDelay(e,n,i){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const o=hr.createAndSchedule(this,e,n,i,h=>this.Su(h));return this.Eu.push(o),o}pu(){this.Au&&ar()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.Eu)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.Eu.indexOf(e);this.Eu.splice(n,1)}}class ll extends Ls{constructor(e,n,i,o){super(e,n,i,o),this.type="firestore",this._queue=new Hi,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hi(e),this._firestoreClient=void 0,await e}}}function ul(r,e){const n=typeof r=="object"?r:Xi(),i=typeof r=="string"?r:"(default)",o=qn(n,"firestore").getImmediate({identifier:i});if(!o._initialized){const h=So("firestore");h&&cl(o,...h)}return o}(function(r,e=!0){(function(n){Tt=n})(Je),We(new Le("firestore",(n,{instanceIdentifier:i,options:o})=>{const h=n.getProvider("app").getImmediate(),u=new ll(new Qc(n.getProvider("auth-internal")),new nl(n.getProvider("app-check-internal")),function(w,b){if(!Object.prototype.hasOwnProperty.apply(w.options,["projectId"]))throw new X(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new en(w.options.projectId,b)}(h,i),h);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),ke(Mi,"4.7.6",r),ke(Mi,"4.7.6","esm2017")})();const dl={apiKey:"AIzaSyB1dlHRhLA71PxCgVLjOieUcUF22DWx6zY",authDomain:"autonomy-heroes.firebaseapp.com",projectId:"autonomy-heroes",storageBucket:"autonomy-heroes.firebasestorage.app",messagingSenderId:"266526530869",appId:"1:266526530869:web:ea95143735be497ca8007c",measurementId:"G-70PG5B4S39"},Ms=Jn(dl);Kc(Ms);ul(Ms);
