import"https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";import"https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const h of o)if(h.type==="childList")for(const l of h.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const h={};return o.integrity&&(h.integrity=o.integrity),o.referrerPolicy&&(h.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?h.credentials="include":o.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function r(o){if(o.ep)return;o.ep=!0;const h=n(o);fetch(o.href,h)}})();(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();var hi={FIREBASE_API_KEY:'"AIzaSyB1dlHRhLA71PxCgVLjOieUcUF22DWx6zY"',FIREBASE_AUTH_DOMAIN:'"autonomy-heroes.firebaseapp.com"',FIREBASE_PROJECT_ID:'"autonomy-heroes"',FIREBASE_STORAGE_BUCKET:'"autonomy-heroes.firebasestorage.app"',FIREBASE_MESSAGING_SENDER_ID:'"266526530869"',FIREBASE_APP_ID:'"1:266526530869:web:ea95143735be497ca8007c"',FIREBASE_MEASUREMENT_ID:'"G-70PG5B4S39"'};/**
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
*/const zi=function(s){const e=[];let n=0;for(let r=0;r<s.length;r++){let o=s.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<s.length&&(s.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(s.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},wo=function(s){const e=[];let n=0,r=0;for(;n<s.length;){const o=s[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const h=s[n++];e[r++]=String.fromCharCode((o&31)<<6|h&63)}else if(o>239&&o<365){const h=s[n++],l=s[n++],w=s[n++],_=((o&7)<<18|(h&63)<<12|(l&63)<<6|w&63)-65536;e[r++]=String.fromCharCode(55296+(_>>10)),e[r++]=String.fromCharCode(56320+(_&1023))}else{const h=s[n++],l=s[n++];e[r++]=String.fromCharCode((o&15)<<12|(h&63)<<6|l&63)}}return e.join("")},$i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<s.length;o+=3){const h=s[o],l=o+1<s.length,w=l?s[o+1]:0,_=o+2<s.length,E=_?s[o+2]:0,A=h>>2,R=(h&3)<<4|w>>4;let O=(w&15)<<2|E>>6,V=E&63;_||(V=64,l||(O=64)),r.push(n[A],n[R],n[O],n[V])}return r.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(zi(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):wo(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<s.length;){const h=n[s.charAt(o++)],l=o<s.length?n[s.charAt(o)]:0;++o;const w=o<s.length?n[s.charAt(o)]:64;++o;const _=o<s.length?n[s.charAt(o)]:64;if(++o,h==null||l==null||w==null||_==null)throw new bo;const E=h<<2|l>>4;if(r.push(E),w!==64){const A=l<<4&240|w>>2;if(r.push(A),_!==64){const R=w<<6&192|_;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class bo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _o=function(s){const e=zi(s);return $i.encodeByteArray(e,!0)},Kt=function(s){return _o(s).replace(/\./g,"")},Wi=function(s){try{return $i.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
*/function Io(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
*/const Eo=()=>Io().__FIREBASE_DEFAULTS__,To=()=>{if(typeof process>"u"||typeof hi>"u")return;const s=hi.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},So=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&Wi(s[1]);return e&&JSON.parse(e)},Gn=()=>{try{return Eo()||To()||So()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},Gi=s=>{var e,n;return(n=(e=Gn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[s]},Ao=s=>{const e=Gi(s);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ki=()=>{var s;return(s=Gn())===null||s===void 0?void 0:s.config},qi=s=>{var e;return(e=Gn())===null||e===void 0?void 0:e[`_${s}`]};/**
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
*/class ko{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
*/function Co(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",o=s.iat||0,h=s.sub||s.user_id;if(!h)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:h,user_id:h,firebase:{sign_in_provider:"custom",identities:{}}},s);return[Kt(JSON.stringify(n)),Kt(JSON.stringify(l)),""].join(".")}/**
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
*/function G(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ro(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(G())}function Oo(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Po(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function No(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Do(){const s=G();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function Lo(){try{return typeof indexedDB=="object"}catch{return!1}}function Uo(){return new Promise((s,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),s(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var h;e(((h=o.error)===null||h===void 0?void 0:h.message)||"")}}catch(n){e(n)}})}/**
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
*/const Mo="FirebaseError";class pe extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Mo,Object.setPrototypeOf(this,pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vt.prototype.create)}}class vt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,h=this.errors[e],l=h?xo(h,r):"Error",w=`${this.serviceName}: ${l} (${o}).`;return new pe(o,w,r)}}function xo(s,e){return s.replace(jo,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const jo=/\{\$([^}]+)}/g;function Fo(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function qt(s,e){if(s===e)return!0;const n=Object.keys(s),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const h=s[o],l=e[o];if(ci(h)&&ci(l)){if(!qt(h,l))return!1}else if(h!==l)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function ci(s){return s!==null&&typeof s=="object"}/**
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
*/function wt(s){const e=[];for(const[n,r]of Object.entries(s))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bo(s,e){const n=new Ho(s,e);return n.subscribe.bind(n)}class Ho{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Vo(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=On),o.error===void 0&&(o.error=On),o.complete===void 0&&(o.complete=On);const h=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),h}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vo(s,e){if(typeof s!="object"||s===null)return!1;for(const n of e)if(n in s&&typeof s[n]=="function")return!0;return!1}function On(){}/**
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
*/function qe(s){return s&&s._delegate?s._delegate:s}class Le{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
*/class zo{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ko;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),o=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(h){if(o)return null;throw h}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wo(e))try{this.getOrInitializeService({instanceIdentifier:Ne})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const h=this.getOrInitializeService({instanceIdentifier:o});r.resolve(h)}catch{}}}}clearInstance(e=Ne){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ne){return this.instances.has(e)}getOptions(e=Ne){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[h,l]of this.instancesDeferred.entries()){const w=this.normalizeInstanceIdentifier(h);r===w&&l.resolve(o)}return o}onInit(e,n){var r;const o=this.normalizeInstanceIdentifier(n),h=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;h.add(e),this.onInitCallbacks.set(o,h);const l=this.instances.get(o);return l&&e(l,o),()=>{h.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$o(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ne){return this.component?this.component.multipleInstances?e:Ne:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $o(s){return s===Ne?void 0:s}function Wo(s){return s.instantiationMode==="EAGER"}/**
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
*/class Go{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zo(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
*/var C;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(C||(C={}));const Ko={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},qo=C.INFO,Jo={[C.DEBUG]:"log",[C.VERBOSE]:"log",[C.INFO]:"info",[C.WARN]:"warn",[C.ERROR]:"error"},Xo=(s,e,...n)=>{if(e<s.logLevel)return;const r=new Date().toISOString(),o=Jo[e];if(o)console[o](`[${r}]  ${s.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kn{constructor(e){this.name=e,this._logLevel=qo,this._logHandler=Xo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in C))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ko[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,C.DEBUG,...e),this._logHandler(this,C.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,C.VERBOSE,...e),this._logHandler(this,C.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,C.INFO,...e),this._logHandler(this,C.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,C.WARN,...e),this._logHandler(this,C.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,C.ERROR,...e),this._logHandler(this,C.ERROR,...e)}}const Yo=(s,e)=>e.some(n=>s instanceof n);let ui,li;function Qo(){return ui||(ui=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zo(){return li||(li=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ji=new WeakMap,jn=new WeakMap,Xi=new WeakMap,Pn=new WeakMap,qn=new WeakMap;function ea(s){const e=new Promise((n,r)=>{const o=()=>{s.removeEventListener("success",h),s.removeEventListener("error",l)},h=()=>{n(Se(s.result)),o()},l=()=>{r(s.error),o()};s.addEventListener("success",h),s.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&Ji.set(n,s)}).catch(()=>{}),qn.set(e,s),e}function ta(s){if(jn.has(s))return;const e=new Promise((n,r)=>{const o=()=>{s.removeEventListener("complete",h),s.removeEventListener("error",l),s.removeEventListener("abort",l)},h=()=>{n(),o()},l=()=>{r(s.error||new DOMException("AbortError","AbortError")),o()};s.addEventListener("complete",h),s.addEventListener("error",l),s.addEventListener("abort",l)});jn.set(s,e)}let Fn={get(s,e,n){if(s instanceof IDBTransaction){if(e==="done")return jn.get(s);if(e==="objectStoreNames")return s.objectStoreNames||Xi.get(s);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Se(s[e])},set(s,e,n){return s[e]=n,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function na(s){Fn=s(Fn)}function sa(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=s.call(Nn(this),e,...n);return Xi.set(r,e.sort?e.sort():[e]),Se(r)}:Zo().includes(s)?function(...e){return s.apply(Nn(this),e),Se(Ji.get(this))}:function(...e){return Se(s.apply(Nn(this),e))}}function ia(s){return typeof s=="function"?sa(s):(s instanceof IDBTransaction&&ta(s),Yo(s,Qo())?new Proxy(s,Fn):s)}function Se(s){if(s instanceof IDBRequest)return ea(s);if(Pn.has(s))return Pn.get(s);const e=ia(s);return e!==s&&(Pn.set(s,e),qn.set(e,s)),e}const Nn=s=>qn.get(s);function ra(s,e,{blocked:n,upgrade:r,blocking:o,terminated:h}={}){const l=indexedDB.open(s,e),w=Se(l);return r&&l.addEventListener("upgradeneeded",_=>{r(Se(l.result),_.oldVersion,_.newVersion,Se(l.transaction),_)}),n&&l.addEventListener("blocked",_=>n(_.oldVersion,_.newVersion,_)),w.then(_=>{h&&_.addEventListener("close",()=>h()),o&&_.addEventListener("versionchange",E=>o(E.oldVersion,E.newVersion,E))}).catch(()=>{}),w}const oa=["get","getKey","getAll","getAllKeys","count"],aa=["put","add","delete","clear"],Dn=new Map;function di(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(Dn.get(e))return Dn.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=aa.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||oa.includes(n)))return;const h=async function(l,...w){const _=this.transaction(l,o?"readwrite":"readonly");let E=_.store;return r&&(E=E.index(w.shift())),(await Promise.all([E[n](...w),o&&_.done]))[0]};return Dn.set(e,h),h}na(s=>({...s,get:(e,n,r)=>di(e,n)||s.get(e,n,r),has:(e,n)=>!!di(e,n)||s.has(e,n)}));/**
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
*/class ha{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ca(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function ca(s){return s.getComponent()?.type==="VERSION"}const Bn="@firebase/app",fi="0.10.18";/**
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
*/const le=new Kn("@firebase/app"),ua="@firebase/app-compat",la="@firebase/analytics-compat",da="@firebase/analytics",fa="@firebase/app-check-compat",pa="@firebase/app-check",ga="@firebase/auth",ma="@firebase/auth-compat",ya="@firebase/database",va="@firebase/data-connect",wa="@firebase/database-compat",ba="@firebase/functions",_a="@firebase/functions-compat",Ia="@firebase/installations",Ea="@firebase/installations-compat",Ta="@firebase/messaging",Sa="@firebase/messaging-compat",Aa="@firebase/performance",ka="@firebase/performance-compat",Ca="@firebase/remote-config",Ra="@firebase/remote-config-compat",Oa="@firebase/storage",Pa="@firebase/storage-compat",Na="@firebase/firestore",Da="@firebase/vertexai",La="@firebase/firestore-compat",Ua="firebase",Ma="11.2.0";/**
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
*/const Hn="[DEFAULT]",xa={[Bn]:"fire-core",[ua]:"fire-core-compat",[da]:"fire-analytics",[la]:"fire-analytics-compat",[pa]:"fire-app-check",[fa]:"fire-app-check-compat",[ga]:"fire-auth",[ma]:"fire-auth-compat",[ya]:"fire-rtdb",[va]:"fire-data-connect",[wa]:"fire-rtdb-compat",[ba]:"fire-fn",[_a]:"fire-fn-compat",[Ia]:"fire-iid",[Ea]:"fire-iid-compat",[Ta]:"fire-fcm",[Sa]:"fire-fcm-compat",[Aa]:"fire-perf",[ka]:"fire-perf-compat",[Ca]:"fire-rc",[Ra]:"fire-rc-compat",[Oa]:"fire-gcs",[Pa]:"fire-gcs-compat",[Na]:"fire-fst",[La]:"fire-fst-compat",[Da]:"fire-vertex","fire-js":"fire-js",[Ua]:"fire-js-all"};/**
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
*/const Jt=new Map,ja=new Map,Vn=new Map;function pi(s,e){try{s.container.addComponent(e)}catch(n){le.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,n)}}function We(s){const e=s.name;if(Vn.has(e))return le.debug(`There were multiple attempts to register component ${e}.`),!1;Vn.set(e,s);for(const n of Jt.values())pi(n,s);for(const n of ja.values())pi(n,s);return!0}function Jn(s,e){const n=s.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),s.container.getProvider(e)}function Te(s){return s.settings!==void 0}/**
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
*/const Fa={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ae=new vt("app","Firebase",Fa);/**
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
*/class Ba{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Le("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ae.create("app-deleted",{appName:this._name})}}/**
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
*/const Je=Ma;function Xn(s,e={}){let n=s;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Hn,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw Ae.create("bad-app-name",{appName:String(o)});if(n||(n=Ki()),!n)throw Ae.create("no-options");const h=Jt.get(o);if(h){if(qt(n,h.options)&&qt(r,h.config))return h;throw Ae.create("duplicate-app",{appName:o})}const l=new Go(o);for(const _ of Vn.values())l.addComponent(_);const w=new Ba(n,r,l);return Jt.set(o,w),w}function Yi(s=Hn){const e=Jt.get(s);if(!e&&s===Hn&&Ki())return Xn();if(!e)throw Ae.create("no-app",{appName:s});return e}function ke(s,e,n){var r;let o=(r=xa[s])!==null&&r!==void 0?r:s;n&&(o+=`-${n}`);const h=o.match(/\s|\//),l=e.match(/\s|\//);if(h||l){const w=[`Unable to register library "${o}" with version "${e}":`];h&&w.push(`library name "${o}" contains illegal characters (whitespace or "/")`),h&&l&&w.push("and"),l&&w.push(`version name "${e}" contains illegal characters (whitespace or "/")`),le.warn(w.join(" "));return}We(new Le(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
*/const Ha="firebase-heartbeat-database",Va=1,mt="firebase-heartbeat-store";let Ln=null;function Qi(){return Ln||(Ln=ra(Ha,Va,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(mt)}catch(n){console.warn(n)}}}}).catch(s=>{throw Ae.create("idb-open",{originalErrorMessage:s.message})})),Ln}async function za(s){try{const e=(await Qi()).transaction(mt),n=await e.objectStore(mt).get(Zi(s));return await e.done,n}catch(e){if(e instanceof pe)le.warn(e.message);else{const n=Ae.create("idb-get",{originalErrorMessage:e?.message});le.warn(n.message)}}}async function gi(s,e){try{const n=(await Qi()).transaction(mt,"readwrite");await n.objectStore(mt).put(e,Zi(s)),await n.done}catch(n){if(n instanceof pe)le.warn(n.message);else{const r=Ae.create("idb-set",{originalErrorMessage:n?.message});le.warn(r.message)}}}function Zi(s){return`${s.name}!${s.options.appId}`}/**
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
*/const $a=1024,Wa=30*24*60*60*1e3;class Ga{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qa(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=mi();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(h=>h.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const l=new Date(h.date).valueOf();return Date.now()-l<=Wa}),this._storage.overwrite(this._heartbeatsCache))}catch(r){le.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=mi(),{heartbeatsToSend:r,unsentEntries:o}=Ka(this._heartbeatsCache.heartbeats),h=Kt(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),h}catch(n){return le.warn(n),""}}}function mi(){return new Date().toISOString().substring(0,10)}function Ka(s,e=$a){const n=[];let r=s.slice();for(const o of s){const h=n.find(l=>l.agent===o.agent);if(h){if(h.dates.push(o.date),yi(n)>e){h.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),yi(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lo()?Uo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await za(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return gi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return gi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function yi(s){return Kt(JSON.stringify({version:2,heartbeats:s})).length}/**
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
*/function Ja(s){We(new Le("platform-logger",e=>new ha(e),"PRIVATE")),We(new Le("heartbeat",e=>new Ga(e),"PRIVATE")),ke(Bn,fi,s),ke(Bn,fi,"esm2017"),ke("fire-js","")}Ja("");var Xa="firebase",Ya="11.2.0";/**
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
*/ke(Xa,Ya,"app");const Qa={apiKey:"your-api-key",authDomain:"your-auth-domain",projectId:"your-project-id"};Xn(Qa);console.log("Firebase initialized");function Yn(s,e){var n={};for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&e.indexOf(r)<0&&(n[r]=s[r]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(s);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(s,r[o])&&(n[r[o]]=s[r[o]]);return n}function er(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Za=er,tr=new vt("auth","Firebase",er());/**
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
*/const Xt=new Kn("@firebase/auth");function eh(s,...e){Xt.logLevel<=C.WARN&&Xt.warn(`Auth (${Je}): ${s}`,...e)}function zt(s,...e){Xt.logLevel<=C.ERROR&&Xt.error(`Auth (${Je}): ${s}`,...e)}/**
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
*/function de(s,...e){throw Qn(s,...e)}function ne(s,...e){return Qn(s,...e)}function nr(s,e,n){const r=Object.assign(Object.assign({},Za()),{[e]:n});return new vt("auth","Firebase",r).create(e,{appName:s.name})}function De(s){return nr(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qn(s,...e){if(typeof s!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=s.name),s._errorFactory.create(n,...r)}return tr.create(s,...e)}function T(s,e,...n){if(!s)throw Qn(e,...n)}function he(s){const e="INTERNAL ASSERTION FAILED: "+s;throw zt(e),new Error(e)}function fe(s,e){s||he(e)}/**
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
*/function zn(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.href)||""}function th(){return vi()==="http:"||vi()==="https:"}function vi(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.protocol)||null}/**
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
*/function nh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(th()||Po()||"connection"in navigator)?navigator.onLine:!0}function sh(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
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
*/class bt{constructor(e,n){this.shortDelay=e,this.longDelay=n,fe(n>e,"Short delay should be less than long delay!"),this.isMobile=Ro()||No()}get(){return nh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
*/function Zn(s,e){fe(s.emulator,"Emulator should always be set here");const{url:n}=s.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
*/class sr{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;he("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;he("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;he("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
*/const ih={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
*/const rh=new bt(3e4,6e4);function es(s,e){return s.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:s.tenantId}):e}async function Xe(s,e,n,r,o={}){return ir(s,o,async()=>{let h={},l={};r&&(e==="GET"?l=r:h={body:JSON.stringify(r)});const w=wt(Object.assign({key:s.config.apiKey},l)).slice(1),_=await s._getAdditionalHeaders();_["Content-Type"]="application/json",s.languageCode&&(_["X-Firebase-Locale"]=s.languageCode);const E=Object.assign({method:e,headers:_},h);return Oo()||(E.referrerPolicy="no-referrer"),sr.fetch()(rr(s,s.config.apiHost,n,w),E)})}async function ir(s,e,n){s._canInitEmulator=!1;const r=Object.assign(Object.assign({},ih),e);try{const o=new ah(s),h=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const l=await h.json();if("needConfirmation"in l)throw Ht(s,"account-exists-with-different-credential",l);if(h.ok&&!("errorMessage"in l))return l;{const w=h.ok?l.errorMessage:l.error.message,[_,E]=w.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ht(s,"credential-already-in-use",l);if(_==="EMAIL_EXISTS")throw Ht(s,"email-already-in-use",l);if(_==="USER_DISABLED")throw Ht(s,"user-disabled",l);const A=r[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw nr(s,A,E);de(s,A)}}catch(o){if(o instanceof pe)throw o;de(s,"network-request-failed",{message:String(o)})}}async function oh(s,e,n,r,o={}){const h=await Xe(s,e,n,r,o);return"mfaPendingCredential"in h&&de(s,"multi-factor-auth-required",{_serverResponse:h}),h}function rr(s,e,n,r){const o=`${e}${n}?${r}`;return s.config.emulator?Zn(s.config,o):`${s.config.apiScheme}://${o}`}class ah{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ne(this.auth,"network-request-failed")),rh.get())})}}function Ht(s,e,n){const r={appName:s.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=ne(s,e,r);return o.customData._tokenResponse=n,o}/**
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
*/async function hh(s,e){return Xe(s,"POST","/v1/accounts:delete",e)}async function or(s,e){return Xe(s,"POST","/v1/accounts:lookup",e)}/**
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
*/function ft(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ch(s,e=!1){const n=qe(s),r=await n.getIdToken(e),o=ts(r);T(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const h=typeof o.firebase=="object"?o.firebase:void 0,l=h?.sign_in_provider;return{claims:o,token:r,authTime:ft(Un(o.auth_time)),issuedAtTime:ft(Un(o.iat)),expirationTime:ft(Un(o.exp)),signInProvider:l||null,signInSecondFactor:h?.sign_in_second_factor||null}}function Un(s){return Number(s)*1e3}function ts(s){const[e,n,r]=s.split(".");if(e===void 0||n===void 0||r===void 0)return zt("JWT malformed, contained fewer than 3 sections"),null;try{const o=Wi(n);return o?JSON.parse(o):(zt("Failed to decode base64 JWT payload"),null)}catch(o){return zt("Caught error parsing JWT payload as JSON",o?.toString()),null}}function wi(s){const e=ts(s);return T(e,"internal-error"),T(typeof e.exp<"u","internal-error"),T(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
*/async function yt(s,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pe&&uh(r)&&s.auth.currentUser===s&&await s.auth.signOut(),r}}function uh({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
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
*/class lh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
*/class $n{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ft(this.lastLoginAt),this.creationTime=ft(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
*/async function Yt(s){var e;const n=s.auth,r=await s.getIdToken(),o=await yt(s,or(n,{idToken:r}));T(o?.users.length,n,"internal-error");const h=o.users[0];s._notifyReloadListener(h);const l=!((e=h.providerUserInfo)===null||e===void 0)&&e.length?ar(h.providerUserInfo):[],w=fh(s.providerData,l),_=s.isAnonymous,E=!(s.email&&h.passwordHash)&&!w?.length,A=_?E:!1,R={uid:h.localId,displayName:h.displayName||null,photoURL:h.photoUrl||null,email:h.email||null,emailVerified:h.emailVerified||!1,phoneNumber:h.phoneNumber||null,tenantId:h.tenantId||null,providerData:w,metadata:new $n(h.createdAt,h.lastLoginAt),isAnonymous:A};Object.assign(s,R)}async function dh(s){const e=qe(s);await Yt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fh(s,e){return[...s.filter(n=>!e.some(r=>r.providerId===n.providerId)),...e]}function ar(s){return s.map(e=>{var{providerId:n}=e,r=Yn(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
*/async function ph(s,e){const n=await ir(s,{},async()=>{const r=wt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:h}=s.config,l=rr(s,o,"/v1/token",`key=${h}`),w=await s._getAdditionalHeaders();return w["Content-Type"]="application/x-www-form-urlencoded",sr.fetch()(l,{method:"POST",headers:w,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function gh(s,e){return Xe(s,"POST","/v2/accounts:revokeToken",es(s,e))}/**
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
*/class Ve{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T(typeof e.idToken<"u","internal-error"),T(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wi(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){T(e.length!==0,"internal-error");const n=wi(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(T(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:o,expiresIn:h}=await ph(e,n);this.updateTokensAndExpiration(r,o,Number(h))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:o,expirationTime:h}=n,l=new Ve;return r&&(T(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),o&&(T(typeof o=="string","internal-error",{appName:e}),l.accessToken=o),h&&(T(typeof h=="number","internal-error",{appName:e}),l.expirationTime=h),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ve,this.toJSON())}_performRefresh(){return he("not implemented")}}/**
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
*/function we(s,e){T(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class ce{constructor(e){var{uid:n,auth:r,stsTokenManager:o}=e,h=Yn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=h.displayName||null,this.email=h.email||null,this.emailVerified=h.emailVerified||!1,this.phoneNumber=h.phoneNumber||null,this.photoURL=h.photoURL||null,this.isAnonymous=h.isAnonymous||!1,this.tenantId=h.tenantId||null,this.providerData=h.providerData?[...h.providerData]:[],this.metadata=new $n(h.createdAt||void 0,h.lastLoginAt||void 0)}async getIdToken(e){const n=await yt(this,this.stsTokenManager.getToken(this.auth,e));return T(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ch(this,e)}reload(){return dh(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ce(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Yt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Te(this.auth.app))return Promise.reject(De(this.auth));const e=await this.getIdToken();return await yt(this,hh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,o,h,l,w,_,E,A;const R=(r=n.displayName)!==null&&r!==void 0?r:void 0,O=(o=n.email)!==null&&o!==void 0?o:void 0,V=(h=n.phoneNumber)!==null&&h!==void 0?h:void 0,k=(l=n.photoURL)!==null&&l!==void 0?l:void 0,M=(w=n.tenantId)!==null&&w!==void 0?w:void 0,L=(_=n._redirectEventId)!==null&&_!==void 0?_:void 0,ie=(E=n.createdAt)!==null&&E!==void 0?E:void 0,Y=(A=n.lastLoginAt)!==null&&A!==void 0?A:void 0,{uid:j,emailVerified:Z,isAnonymous:Ce,providerData:K,stsTokenManager:m}=n;T(j&&m,e,"internal-error");const u=Ve.fromJSON(this.name,m);T(typeof j=="string",e,"internal-error"),we(R,e.name),we(O,e.name),T(typeof Z=="boolean",e,"internal-error"),T(typeof Ce=="boolean",e,"internal-error"),we(V,e.name),we(k,e.name),we(M,e.name),we(L,e.name),we(ie,e.name),we(Y,e.name);const f=new ce({uid:j,auth:e,email:O,emailVerified:Z,displayName:R,isAnonymous:Ce,photoURL:k,phoneNumber:V,tenantId:M,stsTokenManager:u,createdAt:ie,lastLoginAt:Y});return K&&Array.isArray(K)&&(f.providerData=K.map(p=>Object.assign({},p))),L&&(f._redirectEventId=L),f}static async _fromIdTokenResponse(e,n,r=!1){const o=new Ve;o.updateFromServerResponse(n);const h=new ce({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await Yt(h),h}static async _fromGetAccountInfoResponse(e,n,r){const o=n.users[0];T(o.localId!==void 0,"internal-error");const h=o.providerUserInfo!==void 0?ar(o.providerUserInfo):[],l=!(o.email&&o.passwordHash)&&!h?.length,w=new Ve;w.updateFromIdToken(r);const _=new ce({uid:o.localId,auth:e,stsTokenManager:w,isAnonymous:l}),E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new $n(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!h?.length};return Object.assign(_,E),_}}/**
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
*/const bi=new Map;function ue(s){fe(s instanceof Function,"Expected a class definition");let e=bi.get(s);return e?(fe(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,bi.set(s,e),e)}/**
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
*/class hr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hr.type="NONE";const _i=hr;/**
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
*/function $t(s,e,n){return`firebase:${s}:${e}:${n}`}class ze{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:o,name:h}=this.auth;this.fullUserKey=$t(this.userKey,o.apiKey,h),this.fullPersistenceKey=$t("persistence",o.apiKey,h),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ce._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ze(ue(_i),e,r);const o=(await Promise.all(n.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let h=o[0]||ue(_i);const l=$t(r,e.config.apiKey,e.name);let w=null;for(const E of n)try{const A=await E._get(l);if(A){const R=ce._fromJSON(e,A);E!==h&&(w=R),h=E;break}}catch{}const _=o.filter(E=>E._shouldAllowMigration);return!h._shouldAllowMigration||!_.length?new ze(h,e,r):(h=_[0],w&&await h._set(l,w.toJSON()),await Promise.all(n.map(async E=>{if(E!==h)try{await E._remove(l)}catch{}})),new ze(h,e,r))}}/**
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
*/function Ii(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pr(e))return"Blackberry";if(gr(e))return"Webos";if(ur(e))return"Safari";if((e.includes("chrome/")||lr(e))&&!e.includes("edge/"))return"Chrome";if(fr(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=s.match(n);if(r?.length===2)return r[1]}return"Other"}function cr(s=G()){return/firefox\//i.test(s)}function ur(s=G()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lr(s=G()){return/crios\//i.test(s)}function dr(s=G()){return/iemobile/i.test(s)}function fr(s=G()){return/android/i.test(s)}function pr(s=G()){return/blackberry/i.test(s)}function gr(s=G()){return/webos/i.test(s)}function ns(s=G()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function mh(s=G()){var e;return ns(s)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yh(){return Do()&&document.documentMode===10}function mr(s=G()){return ns(s)||fr(s)||gr(s)||pr(s)||/windows phone/i.test(s)||dr(s)}/**
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
*/function yr(s,e=[]){let n;switch(s){case"Browser":n=Ii(G());break;case"Worker":n=`${Ii(G())}-${s}`;break;default:n=s}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Je}/${r}`}/**
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
*/class vh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=h=>new Promise((l,w)=>{try{const _=e(h);l(_)}catch(_){w(_)}});r.onAbort=n,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
*/async function wh(s,e={}){return Xe(s,"GET","/v2/passwordPolicy",es(s,e))}/**
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
*/const bh=6;class _h{constructor(e){var n,r,o,h;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:bh,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(h=e.forceUpgradeOnSignin)!==null&&h!==void 0?h:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,o,h,l,w;const _={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,_),this.validatePasswordCharacterOptions(e,_),_.isValid&&(_.isValid=(n=_.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),_.isValid&&(_.isValid=(r=_.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),_.isValid&&(_.isValid=(o=_.containsLowercaseLetter)!==null&&o!==void 0?o:!0),_.isValid&&(_.isValid=(h=_.containsUppercaseLetter)!==null&&h!==void 0?h:!0),_.isValid&&(_.isValid=(l=_.containsNumericCharacter)!==null&&l!==void 0?l:!0),_.isValid&&(_.isValid=(w=_.containsNonAlphanumericCharacter)!==null&&w!==void 0?w:!0),_}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,o,h){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=h))}}/**
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
*/class Ih{constructor(e,n,r,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ei(this),this.idTokenSubscription=new Ei(this),this.beforeStateQueue=new vh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ue(n)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await ze.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await or(this,{idToken:e}),r=await ce._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Te(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(w=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(w,w))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,h=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,w=o?._redirectEventId,_=await this.tryRedirectSignIn(e);(!l||l===w)&&_?.user&&(o=_.user,h=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(h)try{await this.beforeStateQueue.runMiddleware(o)}catch(l){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yt(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Te(this.app))return Promise.reject(De(this));const n=e?qe(e):null;return n&&T(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Te(this.app)?Promise.reject(De(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Te(this.app)?Promise.reject(De(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ue(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wh(this),n=new _h(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await gh(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ue(e)||this._popupRedirectResolver;T(n,this,"argument-error"),this.redirectPersistenceManager=await ze.create(this,[ue(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,o){if(this._deleted)return()=>{};const h=typeof n=="function"?n:n.next.bind(n);let l=!1;const w=this._isInitialized?Promise.resolve():this._initializationPromise;if(T(w,this,"internal-error"),w.then(()=>{l||h(this.currentUser)}),typeof n=="function"){const _=e.addObserver(n,r,o);return()=>{l=!0,_()}}else{const _=e.addObserver(n);return()=>{l=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&eh(`Error while retrieving App Check token: ${n.error}`),n?.token}}function ss(s){return qe(s)}class Ei{constructor(e){this.auth=e,this.observer=null,this.addObserver=Bo(n=>this.observer=n)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
*/let is={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Eh(s){is=s}function Th(s){return is.loadJS(s)}function Sh(){return is.gapiScript}function Ah(s){return`__${s}${Math.floor(Math.random()*1e6)}`}/**
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
*/function kh(s,e){const n=Jn(s,"auth");if(n.isInitialized()){const r=n.getImmediate(),o=n.getOptions();if(qt(o,e))return r;de(r,"already-initialized")}return n.initialize({options:e})}function Ch(s,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(ue);e?.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(r,e?.popupRedirectResolver)}function Rh(s,e,n){const r=ss(s);T(r._canInitEmulator,r,"emulator-config-failed"),T(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,h=vr(e),{host:l,port:w}=Oh(e),_=w===null?"":`:${w}`;r.config.emulator={url:`${h}//${l}${_}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:w,protocol:h.replace(":",""),options:Object.freeze({disableWarnings:o})}),Ph()}function vr(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function Oh(s){const e=vr(s),n=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const h=o[1];return{host:h,port:Ti(r.substr(h.length+1))}}else{const[h,l]=r.split(":");return{host:h,port:Ti(l)}}}function Ti(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function Ph(){function s(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
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
*/class wr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return he("not implemented")}_getIdTokenResponse(e){return he("not implemented")}_linkToIdToken(e,n){return he("not implemented")}_getReauthenticationResolver(e){return he("not implemented")}}/**
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
*/async function $e(s,e){return oh(s,"POST","/v1/accounts:signInWithIdp",es(s,e))}/**
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
*/const Nh="http://localhost";class Ue extends wr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ue(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):de("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=n,h=Yn(n,["providerId","signInMethod"]);if(!r||!o)return null;const l=new Ue(r,o);return l.idToken=h.idToken||void 0,l.accessToken=h.accessToken||void 0,l.secret=h.secret,l.nonce=h.nonce,l.pendingToken=h.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return $e(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$e(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$e(e,n)}buildRequest(){const e={requestUri:Nh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wt(n)}return e}}/**
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
*/class br{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
*/class _t extends br{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
*/class be extends _t{constructor(){super("facebook.com")}static credential(e){return Ue._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return be.credential(e.oauthAccessToken)}catch{return null}}}be.FACEBOOK_SIGN_IN_METHOD="facebook.com";be.PROVIDER_ID="facebook.com";/**
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
*/class _e extends _t{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ue._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _e.credentialFromTaggedObject(e)}static credentialFromError(e){return _e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _e.credential(n,r)}catch{return null}}}_e.GOOGLE_SIGN_IN_METHOD="google.com";_e.PROVIDER_ID="google.com";/**
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
*/class Ie extends _t{constructor(){super("github.com")}static credential(e){return Ue._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ie.credential(e.oauthAccessToken)}catch{return null}}}Ie.GITHUB_SIGN_IN_METHOD="github.com";Ie.PROVIDER_ID="github.com";/**
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
*/class Ee extends _t{constructor(){super("twitter.com")}static credential(e,n){return Ue._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ee.credentialFromTaggedObject(e)}static credentialFromError(e){return Ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ee.credential(n,r)}catch{return null}}}Ee.TWITTER_SIGN_IN_METHOD="twitter.com";Ee.PROVIDER_ID="twitter.com";/**
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
*/class Ge{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,o=!1){const h=await ce._fromIdTokenResponse(e,r,o),l=Si(r);return new Ge({user:h,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const o=Si(r);return new Ge({user:e,providerId:o,_tokenResponse:r,operationType:n})}}function Si(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
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
*/class Qt extends pe{constructor(e,n,r,o){var h;super(n.code,n.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,Qt.prototype),this.customData={appName:e.name,tenantId:(h=e.tenantId)!==null&&h!==void 0?h:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,o){return new Qt(e,n,r,o)}}function _r(s,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(s):n._getIdTokenResponse(s)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Qt._fromErrorAndOperation(s,o,e,r):o})}async function Dh(s,e,n=!1){const r=await yt(s,e._linkToIdToken(s.auth,await s.getIdToken()),n);return Ge._forOperation(s,"link",r)}/**
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
*/async function Lh(s,e,n=!1){const{auth:r}=s;if(Te(r.app))return Promise.reject(De(r));const o="reauthenticate";try{const h=await yt(s,_r(r,o,e,s),n);T(h.idToken,r,"internal-error");const l=ts(h.idToken);T(l,r,"internal-error");const{sub:w}=l;return T(s.uid===w,r,"user-mismatch"),Ge._forOperation(s,o,h)}catch(h){throw h?.code==="auth/user-not-found"&&de(r,"user-mismatch"),h}}/**
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
*/async function Uh(s,e,n=!1){if(Te(s.app))return Promise.reject(De(s));const r="signIn",o=await _r(s,r,e),h=await Ge._fromIdTokenResponse(s,r,o);return n||await s._updateCurrentUser(h.user),h}function Mh(s,e,n,r){return qe(s).onIdTokenChanged(e,n,r)}function xh(s,e,n){return qe(s).beforeAuthStateChanged(e,n)}const Zt="__sak";/**
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
*/class Ir{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zt,"1"),this.storage.removeItem(Zt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
*/const jh=1e3,Fh=10;class Er extends Ir{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),o=this.localCache[n];r!==o&&e(n,o,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,w,_)=>{this.notifyListeners(l,_)});return}const r=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},h=this.storage.getItem(r);yh()&&h!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Fh):o()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Er.type="LOCAL";const Bh=Er;/**
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
*/class Tr extends Ir{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Tr.type="SESSION";const Sr=Tr;/**
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
*/function Hh(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
*/class nn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const r=new nn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:o,data:h}=n.data,l=this.handlersMap[o];if(!l?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const w=Array.from(l).map(async E=>E(n.origin,h)),_=await Hh(w);n.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:_})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nn.receivers=[];/**
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
*/function rs(s="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return s+n}/**
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
*/class Vh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let h,l;return new Promise((w,_)=>{const E=rs("",20);o.port1.start();const A=setTimeout(()=>{_(new Error("unsupported_event"))},r);l={messageChannel:o,onMessage(R){const O=R;if(O.data.eventId===E)switch(O.data.status){case"ack":clearTimeout(A),h=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(h),w(O.data.response);break;default:clearTimeout(A),clearTimeout(h),_(new Error("invalid_response"));break}}},this.handlers.add(l),o.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:E,data:n},[o.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
*/function se(){return window}function zh(s){se().location.href=s}/**
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
*/function Ar(){return typeof se().WorkerGlobalScope<"u"&&typeof se().importScripts=="function"}async function $h(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wh(){var s;return((s=navigator?.serviceWorker)===null||s===void 0?void 0:s.controller)||null}function Gh(){return Ar()?self:null}/**
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
*/const kr="firebaseLocalStorageDb",Kh=1,en="firebaseLocalStorage",Cr="fbase_key";class It{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sn(s,e){return s.transaction([en],e?"readwrite":"readonly").objectStore(en)}function qh(){const s=indexedDB.deleteDatabase(kr);return new It(s).toPromise()}function Wn(){const s=indexedDB.open(kr,Kh);return new Promise((e,n)=>{s.addEventListener("error",()=>{n(s.error)}),s.addEventListener("upgradeneeded",()=>{const r=s.result;try{r.createObjectStore(en,{keyPath:Cr})}catch(o){n(o)}}),s.addEventListener("success",async()=>{const r=s.result;r.objectStoreNames.contains(en)?e(r):(r.close(),await qh(),e(await Wn()))})})}async function Ai(s,e,n){const r=sn(s,!0).put({[Cr]:e,value:n});return new It(r).toPromise()}async function Jh(s,e){const n=sn(s,!1).get(e),r=await new It(n).toPromise();return r===void 0?null:r.value}function ki(s,e){const n=sn(s,!0).delete(e);return new It(n).toPromise()}const Xh=800,Yh=3;class Rr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Yh)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ar()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nn._getInstance(Gh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $h(),!this.activeServiceWorker)return;this.sender=new Vh(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wn();return await Ai(e,Zt,"1"),await ki(e,Zt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ai(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Jh(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ki(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const h=sn(o,!1).getAll();return new It(h).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:h}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(h)&&(this.notifyListeners(o,h),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rr.type="LOCAL";const Qh=Rr;new bt(3e4,6e4);/**
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
*/function Zh(s,e){return e?ue(e):(T(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
*/class os extends wr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $e(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $e(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $e(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ec(s){return Uh(s.auth,new os(s),s.bypassAuthState)}function tc(s){const{auth:e,user:n}=s;return T(n,e,"internal-error"),Lh(n,new os(s),s.bypassAuthState)}async function nc(s){const{auth:e,user:n}=s;return T(n,e,"internal-error"),Dh(n,new os(s),s.bypassAuthState)}/**
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
*/class Or{constructor(e,n,r,o,h=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=h,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:o,tenantId:h,error:l,type:w}=e;if(l){this.reject(l);return}const _={auth:this.auth,requestUri:n,sessionId:r,tenantId:h||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(w)(_))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ec;case"linkViaPopup":case"linkViaRedirect":return nc;case"reauthViaPopup":case"reauthViaRedirect":return tc;default:de(this.auth,"internal-error")}}resolve(e){fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
*/const sc=new bt(2e3,1e4);class He extends Or{constructor(e,n,r,o,h){super(e,n,o,h),this.provider=r,this.authWindow=null,this.pollId=null,He.currentPopupAction&&He.currentPopupAction.cancel(),He.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){fe(this.filter.length===1,"Popup operations only handle one event");const e=rs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ne(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ne(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,He.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ne(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sc.get())};e()}}He.currentPopupAction=null;/**
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
*/const ic="pendingRedirect",Wt=new Map;class rc extends Or{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wt.get(this.auth._key());if(!e){try{const n=await oc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(n){e=()=>Promise.reject(n)}Wt.set(this.auth._key(),e)}return this.bypassAuthState||Wt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oc(s,e){const n=cc(e),r=hc(s);if(!await r._isAvailable())return!1;const o=await r._get(n)==="true";return await r._remove(n),o}function ac(s,e){Wt.set(s._key(),e)}function hc(s){return ue(s._redirectPersistence)}function cc(s){return $t(ic,s.config.apiKey,s.name)}async function uc(s,e,n=!1){if(Te(s.app))return Promise.reject(De(s));const r=ss(s),o=Zh(r,e),h=await new rc(r,o,n).execute();return h&&!n&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,e)),h}/**
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
*/const lc=10*60*1e3;class dc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fc(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Pr(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ne(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lc&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ci(e))}saveEventToCache(e){this.cachedEventUids.add(Ci(e)),this.lastProcessedEventTime=Date.now()}}function Ci(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function Pr({type:s,error:e}){return s==="unknown"&&e?.code==="auth/no-auth-event"}function fc(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pr(s);default:return!1}}/**
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
*/async function pc(s,e={}){return Xe(s,"GET","/v1/projects",e)}/**
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
*/const gc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mc=/^https?/;async function yc(s){if(s.config.emulator)return;const{authorizedDomains:e}=await pc(s);for(const n of e)try{if(vc(n))return}catch{}de(s,"unauthorized-domain")}function vc(s){const e=zn(),{protocol:n,hostname:r}=new URL(e);if(s.startsWith("chrome-extension://")){const h=new URL(s);return h.hostname===""&&r===""?n==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&h.hostname===r}if(!mc.test(n))return!1;if(gc.test(s))return r===s;const o=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
*/const wc=new bt(3e4,6e4);function Ri(){const s=se().___jsl;if(s?.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let n=0;n<s.CP.length;n++)s.CP[n]=null}}function bc(s){return new Promise((e,n)=>{var r,o,h;function l(){Ri(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ri(),n(ne(s,"network-request-failed"))},timeout:wc.get()})}if(!((o=(r=se().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((h=se().gapi)===null||h===void 0)&&h.load)l();else{const w=Ah("iframefcb");return se()[w]=()=>{gapi.load?l():n(ne(s,"network-request-failed"))},Th(`${Sh()}?onload=${w}`).catch(_=>n(_))}}).catch(e=>{throw Gt=null,e})}let Gt=null;function _c(s){return Gt=Gt||bc(s),Gt}/**
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
*/const Ic=new bt(5e3,15e3),Ec="__/auth/iframe",Tc="emulator/auth/iframe",Sc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ac=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kc(s){const e=s.config;T(e.authDomain,s,"auth-domain-config-required");const n=e.emulator?Zn(e,Tc):`https://${s.config.authDomain}/${Ec}`,r={apiKey:e.apiKey,appName:s.name,v:Je},o=Ac.get(s.config.apiHost);o&&(r.eid=o);const h=s._getFrameworks();return h.length&&(r.fw=h.join(",")),`${n}?${wt(r).slice(1)}`}async function Cc(s){const e=await _c(s),n=se().gapi;return T(n,s,"internal-error"),e.open({where:document.body,url:kc(s),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sc,dontclear:!0},r=>new Promise(async(o,h)=>{await r.restyle({setHideOnLeave:!1});const l=ne(s,"network-request-failed"),w=se().setTimeout(()=>{h(l)},Ic.get());function _(){se().clearTimeout(w),o(r)}r.ping(_).then(_,()=>{h(l)})}))}/**
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
*/const Rc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Oc=500,Pc=600,Nc="_blank",Dc="http://localhost";class Oi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Lc(s,e,n,r=Oc,o=Pc){const h=Math.max((window.screen.availHeight-o)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let w="";const _=Object.assign(Object.assign({},Rc),{width:r.toString(),height:o.toString(),top:h,left:l}),E=G().toLowerCase();n&&(w=lr(E)?Nc:n),cr(E)&&(e=e||Dc,_.scrollbars="yes");const A=Object.entries(_).reduce((O,[V,k])=>`${O}${V}=${k},`,"");if(mh(E)&&w!=="_self")return Uc(e||"",w),new Oi(null);const R=window.open(e||"",w,A);T(R,s,"popup-blocked");try{R.focus()}catch{}return new Oi(R)}function Uc(s,e){const n=document.createElement("a");n.href=s,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
*/const Mc="__/auth/handler",xc="emulator/auth/handler",jc=encodeURIComponent("fac");async function Pi(s,e,n,r,o,h){T(s.config.authDomain,s,"auth-domain-config-required"),T(s.config.apiKey,s,"invalid-api-key");const l={apiKey:s.config.apiKey,appName:s.name,authType:n,redirectUrl:r,v:Je,eventId:o};if(e instanceof br){e.setDefaultLanguage(s.languageCode),l.providerId=e.providerId||"",Fo(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[A,R]of Object.entries({}))l[A]=R}if(e instanceof _t){const A=e.getScopes().filter(R=>R!=="");A.length>0&&(l.scopes=A.join(","))}s.tenantId&&(l.tid=s.tenantId);const w=l;for(const A of Object.keys(w))w[A]===void 0&&delete w[A];const _=await s._getAppCheckToken(),E=_?`#${jc}=${encodeURIComponent(_)}`:"";return`${Fc(s)}?${wt(w).slice(1)}${E}`}function Fc({config:s}){return s.emulator?Zn(s,xc):`https://${s.authDomain}/${Mc}`}/**
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
*/const Mn="webStorageSupport";class Bc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sr,this._completeRedirectFn=uc,this._overrideRedirectResult=ac}async _openPopup(e,n,r,o){var h;fe((h=this.eventManagers[e._key()])===null||h===void 0?void 0:h.manager,"_initialize() not called before _openPopup()");const l=await Pi(e,n,r,zn(),o);return Lc(e,l,rs())}async _openRedirect(e,n,r,o){await this._originValidation(e);const h=await Pi(e,n,r,zn(),o);return zh(h),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:h}=this.eventManagers[n];return o?Promise.resolve(o):(fe(h,"If manager is not set, promise should be"),h)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Cc(e),r=new dc(e);return n.register("authEvent",o=>(T(o?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mn,{type:Mn},r=>{var o;const h=(o=r?.[0])===null||o===void 0?void 0:o[Mn];h!==void 0&&n(!!h),de(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yc(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mr()||ur()||ns()}}const Hc=Bc;var Ni="@firebase/auth",Di="1.8.2";/**
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
*/class Vc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
*/function zc(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $c(s){We(new Le("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),h=e.getProvider("app-check-internal"),{apiKey:l,authDomain:w}=r.options;T(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const _={apiKey:l,authDomain:w,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yr(s)},E=new Ih(r,o,h,_);return Ch(E,n),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),We(new Le("auth-internal",e=>{const n=ss(e.getProvider("auth").getImmediate());return(r=>new Vc(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ke(Ni,Di,zc(s)),ke(Ni,Di,"esm2017")}/**
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
*/const Wc=5*60,Gc=qi("authIdTokenMaxAge")||Wc;let Li=null;const Kc=s=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Gc)return;const o=n?.token;Li!==o&&(Li=o,await fetch(s,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function qc(s=Yi()){const e=Jn(s,"auth");if(e.isInitialized())return e.getImmediate();const n=kh(s,{popupRedirectResolver:Hc,persistence:[Qh,Bh,Sr]}),r=qi("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const h=new URL(r,location.origin);if(location.origin===h.origin){const l=Kc(h.toString());xh(n,l,()=>l(n.currentUser)),Mh(n,w=>l(w))}}const o=Gi("auth");return o&&Rh(n,`http://${o}`),n}function Jc(){var s,e;return(e=(s=document.getElementsByTagName("head"))===null||s===void 0?void 0:s[0])!==null&&e!==void 0?e:document}Eh({loadJS(s){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",s),r.onload=e,r.onerror=o=>{const h=ne("internal-error");h.customData=o,n(h)},r.type="text/javascript",r.charset="UTF-8",Jc().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$c("Browser");var Ui=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nr;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(m,u){function f(){}f.prototype=u.prototype,m.D=u.prototype,m.prototype=new f,m.prototype.constructor=m,m.C=function(p,g,v){for(var d=Array(arguments.length-2),re=2;re<arguments.length;re++)d[re-2]=arguments[re];return u.prototype[g].apply(p,d)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(m,u,f){f||(f=0);var p=Array(16);if(typeof u=="string")for(var g=0;16>g;++g)p[g]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(g=0;16>g;++g)p[g]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=m.g[0],f=m.g[1],g=m.g[2];var v=m.g[3],d=u+(v^f&(g^v))+p[0]+3614090360&4294967295;u=f+(d<<7&4294967295|d>>>25),d=v+(g^u&(f^g))+p[1]+3905402710&4294967295,v=u+(d<<12&4294967295|d>>>20),d=g+(f^v&(u^f))+p[2]+606105819&4294967295,g=v+(d<<17&4294967295|d>>>15),d=f+(u^g&(v^u))+p[3]+3250441966&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(v^f&(g^v))+p[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=v+(g^u&(f^g))+p[5]+1200080426&4294967295,v=u+(d<<12&4294967295|d>>>20),d=g+(f^v&(u^f))+p[6]+2821735955&4294967295,g=v+(d<<17&4294967295|d>>>15),d=f+(u^g&(v^u))+p[7]+4249261313&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(v^f&(g^v))+p[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=v+(g^u&(f^g))+p[9]+2336552879&4294967295,v=u+(d<<12&4294967295|d>>>20),d=g+(f^v&(u^f))+p[10]+4294925233&4294967295,g=v+(d<<17&4294967295|d>>>15),d=f+(u^g&(v^u))+p[11]+2304563134&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(v^f&(g^v))+p[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=v+(g^u&(f^g))+p[13]+4254626195&4294967295,v=u+(d<<12&4294967295|d>>>20),d=g+(f^v&(u^f))+p[14]+2792965006&4294967295,g=v+(d<<17&4294967295|d>>>15),d=f+(u^g&(v^u))+p[15]+1236535329&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(g^v&(f^g))+p[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=v+(f^g&(u^f))+p[6]+3225465664&4294967295,v=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(v^u))+p[11]+643717713&4294967295,g=v+(d<<14&4294967295|d>>>18),d=f+(v^u&(g^v))+p[0]+3921069994&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(g^v&(f^g))+p[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=v+(f^g&(u^f))+p[10]+38016083&4294967295,v=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(v^u))+p[15]+3634488961&4294967295,g=v+(d<<14&4294967295|d>>>18),d=f+(v^u&(g^v))+p[4]+3889429448&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(g^v&(f^g))+p[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=v+(f^g&(u^f))+p[14]+3275163606&4294967295,v=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(v^u))+p[3]+4107603335&4294967295,g=v+(d<<14&4294967295|d>>>18),d=f+(v^u&(g^v))+p[8]+1163531501&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(g^v&(f^g))+p[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=v+(f^g&(u^f))+p[2]+4243563512&4294967295,v=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(v^u))+p[7]+1735328473&4294967295,g=v+(d<<14&4294967295|d>>>18),d=f+(v^u&(g^v))+p[12]+2368359562&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(f^g^v)+p[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=v+(u^f^g)+p[8]+2272392833&4294967295,v=u+(d<<11&4294967295|d>>>21),d=g+(v^u^f)+p[11]+1839030562&4294967295,g=v+(d<<16&4294967295|d>>>16),d=f+(g^v^u)+p[14]+4259657740&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(f^g^v)+p[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=v+(u^f^g)+p[4]+1272893353&4294967295,v=u+(d<<11&4294967295|d>>>21),d=g+(v^u^f)+p[7]+4139469664&4294967295,g=v+(d<<16&4294967295|d>>>16),d=f+(g^v^u)+p[10]+3200236656&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(f^g^v)+p[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=v+(u^f^g)+p[0]+3936430074&4294967295,v=u+(d<<11&4294967295|d>>>21),d=g+(v^u^f)+p[3]+3572445317&4294967295,g=v+(d<<16&4294967295|d>>>16),d=f+(g^v^u)+p[6]+76029189&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(f^g^v)+p[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=v+(u^f^g)+p[12]+3873151461&4294967295,v=u+(d<<11&4294967295|d>>>21),d=g+(v^u^f)+p[15]+530742520&4294967295,g=v+(d<<16&4294967295|d>>>16),d=f+(g^v^u)+p[2]+3299628645&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(g^(f|~v))+p[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=v+(f^(u|~g))+p[7]+1126891415&4294967295,v=u+(d<<10&4294967295|d>>>22),d=g+(u^(v|~f))+p[14]+2878612391&4294967295,g=v+(d<<15&4294967295|d>>>17),d=f+(v^(g|~u))+p[5]+4237533241&4294967295,f=g+(d<<21&4294967295|d>>>11),d=u+(g^(f|~v))+p[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=v+(f^(u|~g))+p[3]+2399980690&4294967295,v=u+(d<<10&4294967295|d>>>22),d=g+(u^(v|~f))+p[10]+4293915773&4294967295,g=v+(d<<15&4294967295|d>>>17),d=f+(v^(g|~u))+p[1]+2240044497&4294967295,f=g+(d<<21&4294967295|d>>>11),d=u+(g^(f|~v))+p[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=v+(f^(u|~g))+p[15]+4264355552&4294967295,v=u+(d<<10&4294967295|d>>>22),d=g+(u^(v|~f))+p[6]+2734768916&4294967295,g=v+(d<<15&4294967295|d>>>17),d=f+(v^(g|~u))+p[13]+1309151649&4294967295,f=g+(d<<21&4294967295|d>>>11),d=u+(g^(f|~v))+p[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=v+(f^(u|~g))+p[11]+3174756917&4294967295,v=u+(d<<10&4294967295|d>>>22),d=g+(u^(v|~f))+p[2]+718787259&4294967295,g=v+(d<<15&4294967295|d>>>17),d=f+(v^(g|~u))+p[9]+3951481745&4294967295,m.g[0]=m.g[0]+u&4294967295,m.g[1]=m.g[1]+(g+(d<<21&4294967295|d>>>11))&4294967295,m.g[2]=m.g[2]+g&4294967295,m.g[3]=m.g[3]+v&4294967295}r.prototype.u=function(m,u){u===void 0&&(u=m.length);for(var f=u-this.blockSize,p=this.B,g=this.h,v=0;v<u;){if(g==0)for(;v<=f;)o(this,m,v),v+=this.blockSize;if(typeof m=="string"){for(;v<u;)if(p[g++]=m.charCodeAt(v++),g==this.blockSize){o(this,p),g=0;break}}else for(;v<u;)if(p[g++]=m[v++],g==this.blockSize){o(this,p),g=0;break}}this.h=g,this.o+=u},r.prototype.v=function(){var m=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);m[0]=128;for(var u=1;u<m.length-8;++u)m[u]=0;var f=8*this.o;for(u=m.length-8;u<m.length;++u)m[u]=f&255,f/=256;for(this.u(m),m=Array(16),u=f=0;4>u;++u)for(var p=0;32>p;p+=8)m[f++]=this.g[u]>>>p&255;return m};function h(m,u){var f=w;return Object.prototype.hasOwnProperty.call(f,m)?f[m]:f[m]=u(m)}function l(m,u){this.h=u;for(var f=[],p=!0,g=m.length-1;0<=g;g--){var v=m[g]|0;p&&v==u||(f[g]=v,p=!1)}this.g=f}var w={};function _(m){return-128<=m&&128>m?h(m,function(u){return new l([u|0],0>u?-1:0)}):new l([m|0],0>m?-1:0)}function E(m){if(isNaN(m)||!isFinite(m))return R;if(0>m)return L(E(-m));for(var u=[],f=1,p=0;m>=f;p++)u[p]=m/f|0,f*=4294967296;return new l(u,0)}function A(m,u){if(m.length==0)throw Error("number format error: empty string");if(u=u||10,2>u||36<u)throw Error("radix out of range: "+u);if(m.charAt(0)=="-")return L(A(m.substring(1),u));if(0<=m.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=E(Math.pow(u,8)),p=R,g=0;g<m.length;g+=8){var v=Math.min(8,m.length-g),d=parseInt(m.substring(g,g+v),u);8>v?(v=E(Math.pow(u,v)),p=p.j(v).add(E(d))):(p=p.j(f),p=p.add(E(d)))}return p}var R=_(0),O=_(1),V=_(16777216);s=l.prototype,s.m=function(){if(M(this))return-L(this).m();for(var m=0,u=1,f=0;f<this.g.length;f++){var p=this.i(f);m+=(0<=p?p:4294967296+p)*u,u*=4294967296}return m},s.toString=function(m){if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(k(this))return"0";if(M(this))return"-"+L(this).toString(m);for(var u=E(Math.pow(m,6)),f=this,p="";;){var g=Z(f,u).g;f=ie(f,g.j(u));var v=((0<f.g.length?f.g[0]:f.h)>>>0).toString(m);if(f=g,k(f))return v+p;for(;6>v.length;)v="0"+v;p=v+p}},s.i=function(m){return 0>m?0:m<this.g.length?this.g[m]:this.h};function k(m){if(m.h!=0)return!1;for(var u=0;u<m.g.length;u++)if(m.g[u]!=0)return!1;return!0}function M(m){return m.h==-1}s.l=function(m){return m=ie(this,m),M(m)?-1:k(m)?0:1};function L(m){for(var u=m.g.length,f=[],p=0;p<u;p++)f[p]=~m.g[p];return new l(f,~m.h).add(O)}s.abs=function(){return M(this)?L(this):this},s.add=function(m){for(var u=Math.max(this.g.length,m.g.length),f=[],p=0,g=0;g<=u;g++){var v=p+(this.i(g)&65535)+(m.i(g)&65535),d=(v>>>16)+(this.i(g)>>>16)+(m.i(g)>>>16);p=d>>>16,v&=65535,d&=65535,f[g]=d<<16|v}return new l(f,f[f.length-1]&-2147483648?-1:0)};function ie(m,u){return m.add(L(u))}s.j=function(m){if(k(this)||k(m))return R;if(M(this))return M(m)?L(this).j(L(m)):L(L(this).j(m));if(M(m))return L(this.j(L(m)));if(0>this.l(V)&&0>m.l(V))return E(this.m()*m.m());for(var u=this.g.length+m.g.length,f=[],p=0;p<2*u;p++)f[p]=0;for(p=0;p<this.g.length;p++)for(var g=0;g<m.g.length;g++){var v=this.i(p)>>>16,d=this.i(p)&65535,re=m.i(g)>>>16,Ye=m.i(g)&65535;f[2*p+2*g]+=d*Ye,Y(f,2*p+2*g),f[2*p+2*g+1]+=v*Ye,Y(f,2*p+2*g+1),f[2*p+2*g+1]+=d*re,Y(f,2*p+2*g+1),f[2*p+2*g+2]+=v*re,Y(f,2*p+2*g+2)}for(p=0;p<u;p++)f[p]=f[2*p+1]<<16|f[2*p];for(p=u;p<2*u;p++)f[p]=0;return new l(f,0)};function Y(m,u){for(;(m[u]&65535)!=m[u];)m[u+1]+=m[u]>>>16,m[u]&=65535,u++}function j(m,u){this.g=m,this.h=u}function Z(m,u){if(k(u))throw Error("division by zero");if(k(m))return new j(R,R);if(M(m))return u=Z(L(m),u),new j(L(u.g),L(u.h));if(M(u))return u=Z(m,L(u)),new j(L(u.g),u.h);if(30<m.g.length){if(M(m)||M(u))throw Error("slowDivide_ only works with positive integers.");for(var f=O,p=u;0>=p.l(m);)f=Ce(f),p=Ce(p);var g=K(f,1),v=K(p,1);for(p=K(p,2),f=K(f,2);!k(p);){var d=v.add(p);0>=d.l(m)&&(g=g.add(f),v=d),p=K(p,1),f=K(f,1)}return u=ie(m,g.j(u)),new j(g,u)}for(g=R;0<=m.l(u);){for(f=Math.max(1,Math.floor(m.m()/u.m())),p=Math.ceil(Math.log(f)/Math.LN2),p=48>=p?1:Math.pow(2,p-48),v=E(f),d=v.j(u);M(d)||0<d.l(m);)f-=p,v=E(f),d=v.j(u);k(v)&&(v=O),g=g.add(v),m=ie(m,d)}return new j(g,m)}s.A=function(m){return Z(this,m).h},s.and=function(m){for(var u=Math.max(this.g.length,m.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)&m.i(p);return new l(f,this.h&m.h)},s.or=function(m){for(var u=Math.max(this.g.length,m.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)|m.i(p);return new l(f,this.h|m.h)},s.xor=function(m){for(var u=Math.max(this.g.length,m.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)^m.i(p);return new l(f,this.h^m.h)};function Ce(m){for(var u=m.g.length+1,f=[],p=0;p<u;p++)f[p]=m.i(p)<<1|m.i(p-1)>>>31;return new l(f,m.h)}function K(m,u){var f=u>>5;u%=32;for(var p=m.g.length-f,g=[],v=0;v<p;v++)g[v]=0<u?m.i(v+f)>>>u|m.i(v+f+1)<<32-u:m.i(v+f);return new l(g,m.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=E,l.fromString=A,Nr=l}).apply(typeof Ui<"u"?Ui:typeof self<"u"?self:typeof window<"u"?window:{});var Vt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var s,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,i,a){return t==Array.prototype||t==Object.prototype||(t[i]=a.value),t};function n(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vt=="object"&&Vt];for(var i=0;i<t.length;++i){var a=t[i];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=n(this);function o(t,i){if(i)e:{var a=r;t=t.split(".");for(var c=0;c<t.length-1;c++){var y=t[c];if(!(y in a))break e;a=a[y]}t=t[t.length-1],c=a[t],i=i(c),i!=c&&i!=null&&e(a,t,{configurable:!0,writable:!0,value:i})}}function h(t,i){t instanceof String&&(t+="");var a=0,c=!1,y={next:function(){if(!c&&a<t.length){var b=a++;return{value:i(b,t[b]),done:!1}}return c=!0,{done:!0,value:void 0}}};return y[Symbol.iterator]=function(){return y},y}o("Array.prototype.values",function(t){return t||function(){return h(this,function(i,a){return a})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},w=this||self;function _(t){var i=typeof t;return i=i!="object"?i:t?Array.isArray(t)?"array":i:"null",i=="array"||i=="object"&&typeof t.length=="number"}function E(t){var i=typeof t;return i=="object"&&t!=null||i=="function"}function A(t,i,a){return t.call.apply(t.bind,arguments)}function R(t,i,a){if(!t)throw Error();if(2<arguments.length){var c=Array.prototype.slice.call(arguments,2);return function(){var y=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(y,c),t.apply(i,y)}}return function(){return t.apply(i,arguments)}}function O(t,i,a){return O=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:R,O.apply(null,arguments)}function V(t,i){var a=Array.prototype.slice.call(arguments,1);return function(){var c=a.slice();return c.push.apply(c,arguments),t.apply(this,c)}}function k(t,i){function a(){}a.prototype=i.prototype,t.aa=i.prototype,t.prototype=new a,t.prototype.constructor=t,t.Qb=function(c,y,b){for(var I=Array(arguments.length-2),D=2;D<arguments.length;D++)I[D-2]=arguments[D];return i.prototype[y].apply(c,I)}}function M(t){const i=t.length;if(0<i){const a=Array(i);for(let c=0;c<i;c++)a[c]=t[c];return a}return[]}function L(t,i){for(let a=1;a<arguments.length;a++){const c=arguments[a];if(_(c)){const y=t.length||0,b=c.length||0;t.length=y+b;for(let I=0;I<b;I++)t[y+I]=c[I]}else t.push(c)}}class ie{constructor(i,a){this.i=i,this.j=a,this.h=0,this.g=null}get(){let i;return 0<this.h?(this.h--,i=this.g,this.g=i.next,i.next=null):i=this.i(),i}}function Y(t){return/^[\s\xa0]*$/.test(t)}function j(){var t=w.navigator;return t&&(t=t.userAgent)?t:""}function Z(t){return Z[" "](t),t}Z[" "]=function(){};var Ce=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function K(t,i,a){for(const c in t)i.call(a,t[c],c,t)}function m(t,i){for(const a in t)i.call(void 0,t[a],a,t)}function u(t){const i={};for(const a in t)i[a]=t[a];return i}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function p(t,i){let a,c;for(let y=1;y<arguments.length;y++){c=arguments[y];for(a in c)t[a]=c[a];for(let b=0;b<f.length;b++)a=f[b],Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a])}}function g(t){var i=1;t=t.split(":");const a=[];for(;0<i&&t.length;)a.push(t.shift()),i--;return t.length&&a.push(t.join(":")),a}function v(t){w.setTimeout(()=>{throw t},0)}function d(){var t=rn;let i=null;return t.g&&(i=t.g,t.g=t.g.next,t.g||(t.h=null),i.next=null),i}class re{constructor(){this.h=this.g=null}add(i,a){const c=Ye.get();c.set(i,a),this.h?this.h.next=c:this.g=c,this.h=c}}var Ye=new ie(()=>new xr,t=>t.reset());class xr{constructor(){this.next=this.g=this.h=null}set(i,a){this.h=i,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let Qe,Ze=!1,rn=new re,us=()=>{const t=w.Promise.resolve(void 0);Qe=()=>{t.then(jr)}};var jr=()=>{for(var t;t=d();){try{t.h.call(t.g)}catch(a){v(a)}var i=Ye;i.j(t),100>i.h&&(i.h++,t.next=i.g,i.g=t)}Ze=!1};function ge(){this.s=this.s,this.C=this.C}ge.prototype.s=!1,ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function F(t,i){this.type=t,this.g=this.target=i,this.defaultPrevented=!1}F.prototype.h=function(){this.defaultPrevented=!0};var Fr=function(){if(!w.addEventListener||!Object.defineProperty)return!1;var t=!1,i=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const a=()=>{};w.addEventListener("test",a,i),w.removeEventListener("test",a,i)}catch{}return t}();function et(t,i){if(F.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var a=this.type=t.type,c=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=i,i=t.relatedTarget){if(Ce){e:{try{Z(i.nodeName);var y=!0;break e}catch{}y=!1}y||(i=null)}}else a=="mouseover"?i=t.fromElement:a=="mouseout"&&(i=t.toElement);this.relatedTarget=i,c?(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Br[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&et.aa.h.call(this)}}k(et,F);var Br={2:"touch",3:"pen",4:"mouse"};et.prototype.h=function(){et.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Tt="closure_listenable_"+(1e6*Math.random()|0),Hr=0;function Vr(t,i,a,c,y){this.listener=t,this.proxy=null,this.src=i,this.type=a,this.capture=!!c,this.ha=y,this.key=++Hr,this.da=this.fa=!1}function St(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function At(t){this.src=t,this.g={},this.h=0}At.prototype.add=function(t,i,a,c,y){var b=t.toString();t=this.g[b],t||(t=this.g[b]=[],this.h++);var I=an(t,i,c,y);return-1<I?(i=t[I],a||(i.fa=!1)):(i=new Vr(i,this.src,b,!!c,y),i.fa=a,t.push(i)),i};function on(t,i){var a=i.type;if(a in t.g){var c=t.g[a],y=Array.prototype.indexOf.call(c,i,void 0),b;(b=0<=y)&&Array.prototype.splice.call(c,y,1),b&&(St(i),t.g[a].length==0&&(delete t.g[a],t.h--))}}function an(t,i,a,c){for(var y=0;y<t.length;++y){var b=t[y];if(!b.da&&b.listener==i&&b.capture==!!a&&b.ha==c)return y}return-1}var hn="closure_lm_"+(1e6*Math.random()|0),cn={};function ls(t,i,a,c,y){if(Array.isArray(i)){for(var b=0;b<i.length;b++)ls(t,i[b],a,c,y);return null}return a=ps(a),t&&t[Tt]?t.K(i,a,E(c)?!!c.capture:!1,y):zr(t,i,a,!1,c,y)}function zr(t,i,a,c,y,b){if(!i)throw Error("Invalid event type");var I=E(y)?!!y.capture:!!y,D=ln(t);if(D||(t[hn]=D=new At(t)),a=D.add(i,a,c,I,b),a.proxy)return a;if(c=$r(),a.proxy=c,c.src=t,c.listener=a,t.addEventListener)Fr||(y=I),y===void 0&&(y=!1),t.addEventListener(i.toString(),c,y);else if(t.attachEvent)t.attachEvent(fs(i.toString()),c);else if(t.addListener&&t.removeListener)t.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");return a}function $r(){function t(a){return i.call(t.src,t.listener,a)}const i=Wr;return t}function ds(t,i,a,c,y){if(Array.isArray(i))for(var b=0;b<i.length;b++)ds(t,i[b],a,c,y);else c=E(c)?!!c.capture:!!c,a=ps(a),t&&t[Tt]?(t=t.i,i=String(i).toString(),i in t.g&&(b=t.g[i],a=an(b,a,c,y),-1<a&&(St(b[a]),Array.prototype.splice.call(b,a,1),b.length==0&&(delete t.g[i],t.h--)))):t&&(t=ln(t))&&(i=t.g[i.toString()],t=-1,i&&(t=an(i,a,c,y)),(a=-1<t?i[t]:null)&&un(a))}function un(t){if(typeof t!="number"&&t&&!t.da){var i=t.src;if(i&&i[Tt])on(i.i,t);else{var a=t.type,c=t.proxy;i.removeEventListener?i.removeEventListener(a,c,t.capture):i.detachEvent?i.detachEvent(fs(a),c):i.addListener&&i.removeListener&&i.removeListener(c),(a=ln(i))?(on(a,t),a.h==0&&(a.src=null,i[hn]=null)):St(t)}}}function fs(t){return t in cn?cn[t]:cn[t]="on"+t}function Wr(t,i){if(t.da)t=!0;else{i=new et(i,this);var a=t.listener,c=t.ha||t.src;t.fa&&un(t),t=a.call(c,i)}return t}function ln(t){return t=t[hn],t instanceof At?t:null}var dn="__closure_events_fn_"+(1e9*Math.random()>>>0);function ps(t){return typeof t=="function"?t:(t[dn]||(t[dn]=function(i){return t.handleEvent(i)}),t[dn])}function B(){ge.call(this),this.i=new At(this),this.M=this,this.F=null}k(B,ge),B.prototype[Tt]=!0,B.prototype.removeEventListener=function(t,i,a,c){ds(this,t,i,a,c)};function z(t,i){var a,c=t.F;if(c)for(a=[];c;c=c.F)a.push(c);if(t=t.M,c=i.type||i,typeof i=="string")i=new F(i,t);else if(i instanceof F)i.target=i.target||t;else{var y=i;i=new F(c,t),p(i,y)}if(y=!0,a)for(var b=a.length-1;0<=b;b--){var I=i.g=a[b];y=kt(I,c,!0,i)&&y}if(I=i.g=t,y=kt(I,c,!0,i)&&y,y=kt(I,c,!1,i)&&y,a)for(b=0;b<a.length;b++)I=i.g=a[b],y=kt(I,c,!1,i)&&y}B.prototype.N=function(){if(B.aa.N.call(this),this.i){var t=this.i,i;for(i in t.g){for(var a=t.g[i],c=0;c<a.length;c++)St(a[c]);delete t.g[i],t.h--}}this.F=null},B.prototype.K=function(t,i,a,c){return this.i.add(String(t),i,!1,a,c)},B.prototype.L=function(t,i,a,c){return this.i.add(String(t),i,!0,a,c)};function kt(t,i,a,c){if(i=t.i.g[String(i)],!i)return!0;i=i.concat();for(var y=!0,b=0;b<i.length;++b){var I=i[b];if(I&&!I.da&&I.capture==a){var D=I.listener,x=I.ha||I.src;I.fa&&on(t.i,I),y=D.call(x,c)!==!1&&y}}return y&&!c.defaultPrevented}function gs(t,i,a){if(typeof t=="function")a&&(t=O(t,a));else if(t&&typeof t.handleEvent=="function")t=O(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(i)?-1:w.setTimeout(t,i||0)}function ms(t){t.g=gs(()=>{t.g=null,t.i&&(t.i=!1,ms(t))},t.l);const i=t.h;t.h=null,t.m.apply(null,i)}class Gr extends ge{constructor(i,a){super(),this.m=i,this.l=a,this.h=null,this.i=!1,this.g=null}j(i){this.h=arguments,this.g?this.i=!0:ms(this)}N(){super.N(),this.g&&(w.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(t){ge.call(this),this.h=t,this.g={}}k(tt,ge);var ys=[];function vs(t){K(t.g,function(i,a){this.g.hasOwnProperty(a)&&un(i)},t),t.g={}}tt.prototype.N=function(){tt.aa.N.call(this),vs(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fn=w.JSON.stringify,Kr=w.JSON.parse,qr=class{stringify(t){return w.JSON.stringify(t,void 0)}parse(t){return w.JSON.parse(t,void 0)}};function pn(){}pn.prototype.h=null;function ws(t){return t.h||(t.h=t.i())}var Ct={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gn(){F.call(this,"d")}k(gn,F);function mn(){F.call(this,"c")}k(mn,F);var Me={},bs=null;function yn(){return bs=bs||new B}Me.La="serverreachability";function _s(t){F.call(this,Me.La,t)}k(_s,F);function nt(t){const i=yn();z(i,new _s(i))}Me.STAT_EVENT="statevent";function Is(t,i){F.call(this,Me.STAT_EVENT,t),this.stat=i}k(Is,F);function $(t){const i=yn();z(i,new Is(i,t))}Me.Ma="timingevent";function Es(t,i){F.call(this,Me.Ma,t),this.size=i}k(Es,F);function st(t,i){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return w.setTimeout(function(){t()},i)}function it(){this.g=!0}it.prototype.xa=function(){this.g=!1};function Jr(t,i,a,c,y,b){t.info(function(){if(t.g)if(b)for(var I="",D=b.split("&"),x=0;x<D.length;x++){var P=D[x].split("=");if(1<P.length){var H=P[0];P=P[1];var q=H.split("_");I=2<=q.length&&q[1]=="type"?I+(H+"="+P+"&"):I+(H+"=redacted&")}}else I=null;else I=b;return"XMLHTTP REQ ("+c+") [attempt "+y+"]: "+i+`
`+a+`
`+I})}function Xr(t,i,a,c,y,b,I){t.info(function(){return"XMLHTTP RESP ("+c+") [ attempt "+y+"]: "+i+`
`+a+`
`+b+" "+I})}function xe(t,i,a,c){t.info(function(){return"XMLHTTP TEXT ("+i+"): "+Qr(t,a)+(c?" "+c:"")})}function Yr(t,i){t.info(function(){return"TIMEOUT: "+i})}it.prototype.info=function(){};function Qr(t,i){if(!t.g)return i;if(!i)return null;try{var a=JSON.parse(i);if(a){for(t=0;t<a.length;t++)if(Array.isArray(a[t])){var c=a[t];if(!(2>c.length)){var y=c[1];if(Array.isArray(y)&&!(1>y.length)){var b=y[0];if(b!="noop"&&b!="stop"&&b!="close")for(var I=1;I<y.length;I++)y[I]=""}}}}return fn(a)}catch{return i}}var vn;function Rt(){}k(Rt,pn),Rt.prototype.g=function(){return new XMLHttpRequest},Rt.prototype.i=function(){return{}},vn=new Rt;function me(t,i,a,c){this.j=t,this.i=i,this.l=a,this.R=c||1,this.U=new tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ts}function Ts(){this.i=null,this.g="",this.h=!1}var Ss={},wn={};function bn(t,i,a){t.L=1,t.v=Dt(oe(i)),t.m=a,t.P=!0,As(t,null)}function As(t,i){t.F=Date.now(),Ot(t),t.A=oe(t.v);var a=t.A,c=t.R;Array.isArray(c)||(c=[String(c)]),Bs(a.i,"t",c),t.C=0,a=t.j.J,t.h=new Ts,t.g=ii(t.j,a?i:null,!t.m),0<t.O&&(t.M=new Gr(O(t.Y,t,t.g),t.O)),i=t.U,a=t.g,c=t.ca;var y="readystatechange";Array.isArray(y)||(y&&(ys[0]=y.toString()),y=ys);for(var b=0;b<y.length;b++){var I=ls(a,y[b],c||i.handleEvent,!1,i.h||i);if(!I)break;i.g[I.key]=I}i=t.H?u(t.H):{},t.m?(t.u||(t.u="POST"),i["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,i)):(t.u="GET",t.g.ea(t.A,t.u,null,i)),nt(),Jr(t.i,t.u,t.A,t.l,t.R,t.m)}me.prototype.ca=function(t){t=t.target;const i=this.M;i&&ae(t)==3?i.j():this.Y(t)},me.prototype.Y=function(t){try{if(t==this.g)e:{const q=ae(this.g);var i=this.g.Ba();const Be=this.g.Z();if(!(3>q)&&(q!=3||this.g&&(this.h.h||this.g.oa()||Ks(this.g)))){this.J||q!=4||i==7||(i==8||0>=Be?nt(3):nt(2)),_n(this);var a=this.g.Z();this.X=a;t:if(ks(this)){var c=Ks(this.g);t="";var y=c.length,b=ae(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Re(this),rt(this);var I="";break t}this.h.i=new w.TextDecoder}for(i=0;i<y;i++)this.h.h=!0,t+=this.h.i.decode(c[i],{stream:!(b&&i==y-1)});c.length=0,this.h.g+=t,this.C=0,I=this.h.g}else I=this.g.oa();if(this.o=a==200,Xr(this.i,this.u,this.A,this.l,this.R,q,a),this.o){if(this.T&&!this.K){t:{if(this.g){var D,x=this.g;if((D=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(D)){var P=D;break t}}P=null}if(a=P)xe(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,In(this,a);else{this.o=!1,this.s=3,$(12),Re(this),rt(this);break e}}if(this.P){a=!0;let ee;for(;!this.J&&this.C<I.length;)if(ee=Zr(this,I),ee==wn){q==4&&(this.s=4,$(14),a=!1),xe(this.i,this.l,null,"[Incomplete Response]");break}else if(ee==Ss){this.s=4,$(15),xe(this.i,this.l,I,"[Invalid Chunk]"),a=!1;break}else xe(this.i,this.l,ee,null),In(this,ee);if(ks(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),q!=4||I.length!=0||this.h.h||(this.s=1,$(16),a=!1),this.o=this.o&&a,!a)xe(this.i,this.l,I,"[Invalid Chunked Response]"),Re(this),rt(this);else if(0<I.length&&!this.W){this.W=!0;var H=this.j;H.g==this&&H.ba&&!H.M&&(H.j.info("Great, no buffering proxy detected. Bytes received: "+I.length),Cn(H),H.M=!0,$(11))}}else xe(this.i,this.l,I,null),In(this,I);q==4&&Re(this),this.o&&!this.J&&(q==4?ei(this.j,this):(this.o=!1,Ot(this)))}else yo(this.g),a==400&&0<I.indexOf("Unknown SID")?(this.s=3,$(12)):(this.s=0,$(13)),Re(this),rt(this)}}}catch{}finally{}};function ks(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function Zr(t,i){var a=t.C,c=i.indexOf(`
`,a);return c==-1?wn:(a=Number(i.substring(a,c)),isNaN(a)?Ss:(c+=1,c+a>i.length?wn:(i=i.slice(c,c+a),t.C=c+a,i)))}me.prototype.cancel=function(){this.J=!0,Re(this)};function Ot(t){t.S=Date.now()+t.I,Cs(t,t.I)}function Cs(t,i){if(t.B!=null)throw Error("WatchDog timer not null");t.B=st(O(t.ba,t),i)}function _n(t){t.B&&(w.clearTimeout(t.B),t.B=null)}me.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Yr(this.i,this.A),this.L!=2&&(nt(),$(17)),Re(this),this.s=2,rt(this)):Cs(this,this.S-t)};function rt(t){t.j.G==0||t.J||ei(t.j,t)}function Re(t){_n(t);var i=t.M;i&&typeof i.ma=="function"&&i.ma(),t.M=null,vs(t.U),t.g&&(i=t.g,t.g=null,i.abort(),i.ma())}function In(t,i){try{var a=t.j;if(a.G!=0&&(a.g==t||En(a.h,t))){if(!t.K&&En(a.h,t)&&a.G==3){try{var c=a.Da.g.parse(i)}catch{c=null}if(Array.isArray(c)&&c.length==3){var y=c;if(y[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<t.F)Ft(a),xt(a);else break e;kn(a),$(18)}}else a.za=y[1],0<a.za-a.T&&37500>y[2]&&a.F&&a.v==0&&!a.C&&(a.C=st(O(a.Za,a),6e3));if(1>=Ps(a.h)&&a.ca){try{a.ca()}catch{}a.ca=void 0}}else Pe(a,11)}else if((t.K||a.g==t)&&Ft(a),!Y(i))for(y=a.Da.g.parse(i),i=0;i<y.length;i++){let P=y[i];if(a.T=P[0],P=P[1],a.G==2)if(P[0]=="c"){a.K=P[1],a.ia=P[2];const H=P[3];H!=null&&(a.la=H,a.j.info("VER="+a.la));const q=P[4];q!=null&&(a.Aa=q,a.j.info("SVER="+a.Aa));const Be=P[5];Be!=null&&typeof Be=="number"&&0<Be&&(c=1.5*Be,a.L=c,a.j.info("backChannelRequestTimeoutMs_="+c)),c=a;const ee=t.g;if(ee){const Bt=ee.g?ee.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bt){var b=c.h;b.g||Bt.indexOf("spdy")==-1&&Bt.indexOf("quic")==-1&&Bt.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Tn(b,b.h),b.h=null))}if(c.D){const Rn=ee.g?ee.g.getResponseHeader("X-HTTP-Session-Id"):null;Rn&&(c.ya=Rn,N(c.I,c.D,Rn))}}a.G=3,a.l&&a.l.ua(),a.ba&&(a.R=Date.now()-t.F,a.j.info("Handshake RTT: "+a.R+"ms")),c=a;var I=t;if(c.qa=si(c,c.J?c.ia:null,c.W),I.K){Ns(c.h,I);var D=I,x=c.L;x&&(D.I=x),D.B&&(_n(D),Ot(D)),c.g=I}else Qs(c);0<a.i.length&&jt(a)}else P[0]!="stop"&&P[0]!="close"||Pe(a,7);else a.G==3&&(P[0]=="stop"||P[0]=="close"?P[0]=="stop"?Pe(a,7):An(a):P[0]!="noop"&&a.l&&a.l.ta(P),a.v=0)}}nt(4)}catch{}}var eo=class{constructor(t,i){this.g=t,this.map=i}};function Rs(t){this.l=t||10,w.PerformanceNavigationTiming?(t=w.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(w.chrome&&w.chrome.loadTimes&&w.chrome.loadTimes()&&w.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Os(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ps(t){return t.h?1:t.g?t.g.size:0}function En(t,i){return t.h?t.h==i:t.g?t.g.has(i):!1}function Tn(t,i){t.g?t.g.add(i):t.h=i}function Ns(t,i){t.h&&t.h==i?t.h=null:t.g&&t.g.has(i)&&t.g.delete(i)}Rs.prototype.cancel=function(){if(this.i=Ds(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ds(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let i=t.i;for(const a of t.g.values())i=i.concat(a.D);return i}return M(t.i)}function to(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(_(t)){for(var i=[],a=t.length,c=0;c<a;c++)i.push(t[c]);return i}i=[],a=0;for(c in t)i[a++]=t[c];return i}function no(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(_(t)||typeof t=="string"){var i=[];t=t.length;for(var a=0;a<t;a++)i.push(a);return i}i=[],a=0;for(const c in t)i[a++]=c;return i}}}function Ls(t,i){if(t.forEach&&typeof t.forEach=="function")t.forEach(i,void 0);else if(_(t)||typeof t=="string")Array.prototype.forEach.call(t,i,void 0);else for(var a=no(t),c=to(t),y=c.length,b=0;b<y;b++)i.call(void 0,c[b],a&&a[b],t)}var Us=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function so(t,i){if(t){t=t.split("&");for(var a=0;a<t.length;a++){var c=t[a].indexOf("="),y=null;if(0<=c){var b=t[a].substring(0,c);y=t[a].substring(c+1)}else b=t[a];i(b,y?decodeURIComponent(y.replace(/\+/g," ")):"")}}}function Oe(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Oe){this.h=t.h,Pt(this,t.j),this.o=t.o,this.g=t.g,Nt(this,t.s),this.l=t.l;var i=t.i,a=new ht;a.i=i.i,i.g&&(a.g=new Map(i.g),a.h=i.h),Ms(this,a),this.m=t.m}else t&&(i=String(t).match(Us))?(this.h=!1,Pt(this,i[1]||"",!0),this.o=ot(i[2]||""),this.g=ot(i[3]||"",!0),Nt(this,i[4]),this.l=ot(i[5]||"",!0),Ms(this,i[6]||"",!0),this.m=ot(i[7]||"")):(this.h=!1,this.i=new ht(null,this.h))}Oe.prototype.toString=function(){var t=[],i=this.j;i&&t.push(at(i,xs,!0),":");var a=this.g;return(a||i=="file")&&(t.push("//"),(i=this.o)&&t.push(at(i,xs,!0),"@"),t.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.s,a!=null&&t.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&t.push("/"),t.push(at(a,a.charAt(0)=="/"?oo:ro,!0))),(a=this.i.toString())&&t.push("?",a),(a=this.m)&&t.push("#",at(a,ho)),t.join("")};function oe(t){return new Oe(t)}function Pt(t,i,a){t.j=a?ot(i,!0):i,t.j&&(t.j=t.j.replace(/:$/,""))}function Nt(t,i){if(i){if(i=Number(i),isNaN(i)||0>i)throw Error("Bad port number "+i);t.s=i}else t.s=null}function Ms(t,i,a){i instanceof ht?(t.i=i,co(t.i,t.h)):(a||(i=at(i,ao)),t.i=new ht(i,t.h))}function N(t,i,a){t.i.set(i,a)}function Dt(t){return N(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ot(t,i){return t?i?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function at(t,i,a){return typeof t=="string"?(t=encodeURI(t).replace(i,io),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function io(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var xs=/[#\/\?@]/g,ro=/[#\?:]/g,oo=/[#\?]/g,ao=/[#\?@]/g,ho=/#/g;function ht(t,i){this.h=this.g=null,this.i=t||null,this.j=!!i}function ye(t){t.g||(t.g=new Map,t.h=0,t.i&&so(t.i,function(i,a){t.add(decodeURIComponent(i.replace(/\+/g," ")),a)}))}s=ht.prototype,s.add=function(t,i){ye(this),this.i=null,t=je(this,t);var a=this.g.get(t);return a||this.g.set(t,a=[]),a.push(i),this.h+=1,this};function js(t,i){ye(t),i=je(t,i),t.g.has(i)&&(t.i=null,t.h-=t.g.get(i).length,t.g.delete(i))}function Fs(t,i){return ye(t),i=je(t,i),t.g.has(i)}s.forEach=function(t,i){ye(this),this.g.forEach(function(a,c){a.forEach(function(y){t.call(i,y,c,this)},this)},this)},s.na=function(){ye(this);const t=Array.from(this.g.values()),i=Array.from(this.g.keys()),a=[];for(let c=0;c<i.length;c++){const y=t[c];for(let b=0;b<y.length;b++)a.push(i[c])}return a},s.V=function(t){ye(this);let i=[];if(typeof t=="string")Fs(this,t)&&(i=i.concat(this.g.get(je(this,t))));else{t=Array.from(this.g.values());for(let a=0;a<t.length;a++)i=i.concat(t[a])}return i},s.set=function(t,i){return ye(this),this.i=null,t=je(this,t),Fs(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[i]),this.h+=1,this},s.get=function(t,i){return t?(t=this.V(t),0<t.length?String(t[0]):i):i};function Bs(t,i,a){js(t,i),0<a.length&&(t.i=null,t.g.set(je(t,i),M(a)),t.h+=a.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],i=Array.from(this.g.keys());for(var a=0;a<i.length;a++){var c=i[a];const b=encodeURIComponent(String(c)),I=this.V(c);for(c=0;c<I.length;c++){var y=b;I[c]!==""&&(y+="="+encodeURIComponent(String(I[c]))),t.push(y)}}return this.i=t.join("&")};function je(t,i){return i=String(i),t.j&&(i=i.toLowerCase()),i}function co(t,i){i&&!t.j&&(ye(t),t.i=null,t.g.forEach(function(a,c){var y=c.toLowerCase();c!=y&&(js(this,c),Bs(this,y,a))},t)),t.j=i}function uo(t,i){const a=new it;if(w.Image){const c=new Image;c.onload=V(ve,a,"TestLoadImage: loaded",!0,i,c),c.onerror=V(ve,a,"TestLoadImage: error",!1,i,c),c.onabort=V(ve,a,"TestLoadImage: abort",!1,i,c),c.ontimeout=V(ve,a,"TestLoadImage: timeout",!1,i,c),w.setTimeout(function(){c.ontimeout&&c.ontimeout()},1e4),c.src=t}else i(!1)}function lo(t,i){const a=new it,c=new AbortController,y=setTimeout(()=>{c.abort(),ve(a,"TestPingServer: timeout",!1,i)},1e4);fetch(t,{signal:c.signal}).then(b=>{clearTimeout(y),b.ok?ve(a,"TestPingServer: ok",!0,i):ve(a,"TestPingServer: server error",!1,i)}).catch(()=>{clearTimeout(y),ve(a,"TestPingServer: error",!1,i)})}function ve(t,i,a,c,y){try{y&&(y.onload=null,y.onerror=null,y.onabort=null,y.ontimeout=null),c(a)}catch{}}function fo(){this.g=new qr}function po(t,i,a){const c=a||"";try{Ls(t,function(y,b){let I=y;E(y)&&(I=fn(y)),i.push(c+b+"="+encodeURIComponent(I))})}catch(y){throw i.push(c+"type="+encodeURIComponent("_badmap")),y}}function Lt(t){this.l=t.Ub||null,this.j=t.eb||!1}k(Lt,pn),Lt.prototype.g=function(){return new Ut(this.l,this.j)},Lt.prototype.i=function(t){return function(){return t}}({});function Ut(t,i){B.call(this),this.D=t,this.o=i,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Ut,B),s=Ut.prototype,s.open=function(t,i){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=i,this.readyState=1,ut(this)},s.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const i={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(i.body=t),(this.D||w).fetch(new Request(this.A,i)).then(this.Sa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ct(this)),this.readyState=0},s.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ut(this)),this.g&&(this.readyState=3,ut(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof w.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hs(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hs(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}s.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var i=t.value?t.value:new Uint8Array(0);(i=this.v.decode(i,{stream:!t.done}))&&(this.response=this.responseText+=i)}t.done?ct(this):ut(this),this.readyState==3&&Hs(this)}},s.Ra=function(t){this.g&&(this.response=this.responseText=t,ct(this))},s.Qa=function(t){this.g&&(this.response=t,ct(this))},s.ga=function(){this.g&&ct(this)};function ct(t){t.readyState=4,t.l=null,t.j=null,t.v=null,ut(t)}s.setRequestHeader=function(t,i){this.u.append(t,i)},s.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],i=this.h.entries();for(var a=i.next();!a.done;)a=a.value,t.push(a[0]+": "+a[1]),a=i.next();return t.join(`\r
`)};function ut(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ut.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Vs(t){let i="";return K(t,function(a,c){i+=c,i+=":",i+=a,i+=`\r
`}),i}function Sn(t,i,a){e:{for(c in a){var c=!1;break e}c=!0}c||(a=Vs(a),typeof t=="string"?a!=null&&encodeURIComponent(String(a)):N(t,i,a))}function U(t){B.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(U,B);var go=/^https?$/i,mo=["POST","PUT"];s=U.prototype,s.Ha=function(t){this.J=t},s.ea=function(t,i,a,c){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);i=i?i.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vn.g(),this.v=this.o?ws(this.o):ws(vn),this.g.onreadystatechange=O(this.Ea,this);try{this.B=!0,this.g.open(i,String(t),!0),this.B=!1}catch(b){zs(this,b);return}if(t=a||"",a=new Map(this.headers),c)if(Object.getPrototypeOf(c)===Object.prototype)for(var y in c)a.set(y,c[y]);else if(typeof c.keys=="function"&&typeof c.get=="function")for(const b of c.keys())a.set(b,c.get(b));else throw Error("Unknown input type for opt_headers: "+String(c));c=Array.from(a.keys()).find(b=>b.toLowerCase()=="content-type"),y=w.FormData&&t instanceof w.FormData,!(0<=Array.prototype.indexOf.call(mo,i,void 0))||c||y||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,I]of a)this.g.setRequestHeader(b,I);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gs(this),this.u=!0,this.g.send(t),this.u=!1}catch(b){zs(this,b)}};function zs(t,i){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=i,t.m=5,$s(t),Mt(t)}function $s(t){t.A||(t.A=!0,z(t,"complete"),z(t,"error"))}s.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,z(this,"complete"),z(this,"abort"),Mt(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mt(this,!0)),U.aa.N.call(this)},s.Ea=function(){this.s||(this.B||this.u||this.j?Ws(this):this.bb())},s.bb=function(){Ws(this)};function Ws(t){if(t.h&&typeof l<"u"&&(!t.v[1]||ae(t)!=4||t.Z()!=2)){if(t.u&&ae(t)==4)gs(t.Ea,0,t);else if(z(t,"readystatechange"),ae(t)==4){t.h=!1;try{const I=t.Z();e:switch(I){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var i=!0;break e;default:i=!1}var a;if(!(a=i)){var c;if(c=I===0){var y=String(t.D).match(Us)[1]||null;!y&&w.self&&w.self.location&&(y=w.self.location.protocol.slice(0,-1)),c=!go.test(y?y.toLowerCase():"")}a=c}if(a)z(t,"complete"),z(t,"success");else{t.m=6;try{var b=2<ae(t)?t.g.statusText:""}catch{b=""}t.l=b+" ["+t.Z()+"]",$s(t)}}finally{Mt(t)}}}}function Mt(t,i){if(t.g){Gs(t);const a=t.g,c=t.v[0]?()=>{}:null;t.g=null,t.v=null,i||z(t,"ready");try{a.onreadystatechange=c}catch{}}}function Gs(t){t.I&&(w.clearTimeout(t.I),t.I=null)}s.isActive=function(){return!!this.g};function ae(t){return t.g?t.g.readyState:0}s.Z=function(){try{return 2<ae(this)?this.g.status:-1}catch{return-1}},s.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.Oa=function(t){if(this.g){var i=this.g.responseText;return t&&i.indexOf(t)==0&&(i=i.substring(t.length)),Kr(i)}};function Ks(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function yo(t){const i={};t=(t.g&&2<=ae(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let c=0;c<t.length;c++){if(Y(t[c]))continue;var a=g(t[c]);const y=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const b=i[y]||[];i[y]=b,b.push(a)}m(i,function(c){return c.join(", ")})}s.Ba=function(){return this.m},s.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function lt(t,i,a){return a&&a.internalChannelParams&&a.internalChannelParams[t]||i}function qs(t){this.Aa=0,this.i=[],this.j=new it,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=lt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=lt("baseRetryDelayMs",5e3,t),this.cb=lt("retryDelaySeedMs",1e4,t),this.Wa=lt("forwardChannelMaxRetries",2,t),this.wa=lt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Rs(t&&t.concurrentRequestLimit),this.Da=new fo,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}s=qs.prototype,s.la=8,s.G=1,s.connect=function(t,i,a,c){$(0),this.W=t,this.H=i||{},a&&c!==void 0&&(this.H.OSID=a,this.H.OAID=c),this.F=this.X,this.I=si(this,null,this.W),jt(this)};function An(t){if(Js(t),t.G==3){var i=t.U++,a=oe(t.I);if(N(a,"SID",t.K),N(a,"RID",i),N(a,"TYPE","terminate"),dt(t,a),i=new me(t,t.j,i),i.L=2,i.v=Dt(oe(a)),a=!1,w.navigator&&w.navigator.sendBeacon)try{a=w.navigator.sendBeacon(i.v.toString(),"")}catch{}!a&&w.Image&&(new Image().src=i.v,a=!0),a||(i.g=ii(i.j,null),i.g.ea(i.v)),i.F=Date.now(),Ot(i)}ni(t)}function xt(t){t.g&&(Cn(t),t.g.cancel(),t.g=null)}function Js(t){xt(t),t.u&&(w.clearTimeout(t.u),t.u=null),Ft(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&w.clearTimeout(t.s),t.s=null)}function jt(t){if(!Os(t.h)&&!t.s){t.s=!0;var i=t.Ga;Qe||us(),Ze||(Qe(),Ze=!0),rn.add(i,t),t.B=0}}function vo(t,i){return Ps(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=i.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=st(O(t.Ga,t,i),ti(t,t.B)),t.B++,!0)}s.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const y=new me(this,this.j,t);let b=this.o;if(this.S&&(b?(b=u(b),p(b,this.S)):b=this.S),this.m!==null||this.O||(y.H=b,b=null),this.P)e:{for(var i=0,a=0;a<this.i.length;a++){t:{var c=this.i[a];if("__data__"in c.map&&(c=c.map.__data__,typeof c=="string")){c=c.length;break t}c=void 0}if(c===void 0)break;if(i+=c,4096<i){i=a;break e}if(i===4096||a===this.i.length-1){i=a+1;break e}}i=1e3}else i=1e3;i=Ys(this,y,i),a=oe(this.I),N(a,"RID",t),N(a,"CVER",22),this.D&&N(a,"X-HTTP-Session-Id",this.D),dt(this,a),b&&(this.O?i="headers="+encodeURIComponent(String(Vs(b)))+"&"+i:this.m&&Sn(a,this.m,b)),Tn(this.h,y),this.Ua&&N(a,"TYPE","init"),this.P?(N(a,"$req",i),N(a,"SID","null"),y.T=!0,bn(y,a,null)):bn(y,a,i),this.G=2}}else this.G==3&&(t?Xs(this,t):this.i.length==0||Os(this.h)||Xs(this))};function Xs(t,i){var a;i?a=i.l:a=t.U++;const c=oe(t.I);N(c,"SID",t.K),N(c,"RID",a),N(c,"AID",t.T),dt(t,c),t.m&&t.o&&Sn(c,t.m,t.o),a=new me(t,t.j,a,t.B+1),t.m===null&&(a.H=t.o),i&&(t.i=i.D.concat(t.i)),i=Ys(t,a,1e3),a.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Tn(t.h,a),bn(a,c,i)}function dt(t,i){t.H&&K(t.H,function(a,c){N(i,c,a)}),t.l&&Ls({},function(a,c){N(i,c,a)})}function Ys(t,i,a){a=Math.min(t.i.length,a);var c=t.l?O(t.l.Na,t.l,t):null;e:{var y=t.i;let b=-1;for(;;){const I=["count="+a];b==-1?0<a?(b=y[0].g,I.push("ofs="+b)):b=0:I.push("ofs="+b);let D=!0;for(let x=0;x<a;x++){let P=y[x].g;const H=y[x].map;if(P-=b,0>P)b=Math.max(0,y[x].g-100),D=!1;else try{po(H,I,"req"+P+"_")}catch{c&&c(H)}}if(D){c=I.join("&");break e}}}return t=t.i.splice(0,a),i.D=t,c}function Qs(t){if(!t.g&&!t.u){t.Y=1;var i=t.Fa;Qe||us(),Ze||(Qe(),Ze=!0),rn.add(i,t),t.v=0}}function kn(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=st(O(t.Fa,t),ti(t,t.v)),t.v++,!0)}s.Fa=function(){if(this.u=null,Zs(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=st(O(this.ab,this),t)}},s.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$(10),xt(this),Zs(this))};function Cn(t){t.A!=null&&(w.clearTimeout(t.A),t.A=null)}function Zs(t){t.g=new me(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var i=oe(t.qa);N(i,"RID","rpc"),N(i,"SID",t.K),N(i,"AID",t.T),N(i,"CI",t.F?"0":"1"),!t.F&&t.ja&&N(i,"TO",t.ja),N(i,"TYPE","xmlhttp"),dt(t,i),t.m&&t.o&&Sn(i,t.m,t.o),t.L&&(t.g.I=t.L);var a=t.g;t=t.ia,a.L=1,a.v=Dt(oe(i)),a.m=null,a.P=!0,As(a,t)}s.Za=function(){this.C!=null&&(this.C=null,xt(this),kn(this),$(19))};function Ft(t){t.C!=null&&(w.clearTimeout(t.C),t.C=null)}function ei(t,i){var a=null;if(t.g==i){Ft(t),Cn(t),t.g=null;var c=2}else if(En(t.h,i))a=i.D,Ns(t.h,i),c=1;else return;if(t.G!=0){if(i.o)if(c==1){a=i.m?i.m.length:0,i=Date.now()-i.F;var y=t.B;c=yn(),z(c,new Es(c,a)),jt(t)}else Qs(t);else if(y=i.s,y==3||y==0&&0<i.X||!(c==1&&vo(t,i)||c==2&&kn(t)))switch(a&&0<a.length&&(i=t.h,i.i=i.i.concat(a)),y){case 1:Pe(t,5);break;case 4:Pe(t,10);break;case 3:Pe(t,6);break;default:Pe(t,2)}}}function ti(t,i){let a=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(a*=2),a*i}function Pe(t,i){if(t.j.info("Error code "+i),i==2){var a=O(t.fb,t),c=t.Xa;const y=!c;c=new Oe(c||"//www.google.com/images/cleardot.gif"),w.location&&w.location.protocol=="http"||Pt(c,"https"),Dt(c),y?uo(c.toString(),a):lo(c.toString(),a)}else $(2);t.G=0,t.l&&t.l.sa(i),ni(t),Js(t)}s.fb=function(t){t?(this.j.info("Successfully pinged google.com"),$(2)):(this.j.info("Failed to ping google.com"),$(1))};function ni(t){if(t.G=0,t.ka=[],t.l){const i=Ds(t.h);(i.length!=0||t.i.length!=0)&&(L(t.ka,i),L(t.ka,t.i),t.h.i.length=0,M(t.i),t.i.length=0),t.l.ra()}}function si(t,i,a){var c=a instanceof Oe?oe(a):new Oe(a);if(c.g!="")i&&(c.g=i+"."+c.g),Nt(c,c.s);else{var y=w.location;c=y.protocol,i=i?i+"."+y.hostname:y.hostname,y=+y.port;var b=new Oe(null);c&&Pt(b,c),i&&(b.g=i),y&&Nt(b,y),a&&(b.l=a),c=b}return a=t.D,i=t.ya,a&&i&&N(c,a,i),N(c,"VER",t.la),dt(t,c),c}function ii(t,i,a){if(i&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return i=t.Ca&&!t.pa?new U(new Lt({eb:a})):new U(t.pa),i.Ha(t.J),i}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function ri(){}s=ri.prototype,s.ua=function(){},s.ta=function(){},s.sa=function(){},s.ra=function(){},s.isActive=function(){return!0},s.Na=function(){};function Q(t,i){B.call(this),this.g=new qs(i),this.l=t,this.h=i&&i.messageUrlParams||null,t=i&&i.messageHeaders||null,i&&i.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=i&&i.initMessageHeaders||null,i&&i.messageContentType&&(t?t["X-WebChannel-Content-Type"]=i.messageContentType:t={"X-WebChannel-Content-Type":i.messageContentType}),i&&i.va&&(t?t["X-WebChannel-Client-Profile"]=i.va:t={"X-WebChannel-Client-Profile":i.va}),this.g.S=t,(t=i&&i.Sb)&&!Y(t)&&(this.g.m=t),this.v=i&&i.supportsCrossDomainXhr||!1,this.u=i&&i.sendRawJson||!1,(i=i&&i.httpSessionIdParam)&&!Y(i)&&(this.g.D=i,t=this.h,t!==null&&i in t&&(t=this.h,i in t&&delete t[i])),this.j=new Fe(this)}k(Q,B),Q.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Q.prototype.close=function(){An(this.g)},Q.prototype.o=function(t){var i=this.g;if(typeof t=="string"){var a={};a.__data__=t,t=a}else this.u&&(a={},a.__data__=fn(t),t=a);i.i.push(new eo(i.Ya++,t)),i.G==3&&jt(i)},Q.prototype.N=function(){this.g.l=null,delete this.j,An(this.g),delete this.g,Q.aa.N.call(this)};function oi(t){gn.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var i=t.__sm__;if(i){e:{for(const a in i){t=a;break e}t=void 0}(this.i=t)&&(t=this.i,i=i!==null&&t in i?i[t]:void 0),this.data=i}else this.data=t}k(oi,gn);function ai(){mn.call(this),this.status=1}k(ai,mn);function Fe(t){this.g=t}k(Fe,ri),Fe.prototype.ua=function(){z(this.g,"a")},Fe.prototype.ta=function(t){z(this.g,new oi(t))},Fe.prototype.sa=function(t){z(this.g,new ai)},Fe.prototype.ra=function(){z(this.g,"b")},Q.prototype.send=Q.prototype.o,Q.prototype.open=Q.prototype.m,Q.prototype.close=Q.prototype.close,Ct.OPEN="a",Ct.CLOSE="b",Ct.ERROR="c",Ct.MESSAGE="d",B.prototype.listen=B.prototype.K,U.prototype.listenOnce=U.prototype.L,U.prototype.getLastError=U.prototype.Ka,U.prototype.getLastErrorCode=U.prototype.Ba,U.prototype.getStatus=U.prototype.Z,U.prototype.getResponseJson=U.prototype.Oa,U.prototype.getResponseText=U.prototype.oa,U.prototype.send=U.prototype.ea,U.prototype.setWithCredentials=U.prototype.Ha}).apply(typeof Vt<"u"?Vt:typeof self<"u"?self:typeof window<"u"?window:{});const Mi="@firebase/firestore";/**
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
*/let Et="11.2.0";/**
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
*/const Ke=new Kn("@firebase/firestore");function te(s,...e){if(Ke.logLevel<=C.DEBUG){const n=e.map(as);Ke.debug(`Firestore (${Et}): ${s}`,...n)}}function Dr(s,...e){if(Ke.logLevel<=C.ERROR){const n=e.map(as);Ke.error(`Firestore (${Et}): ${s}`,...n)}}function Xc(s,...e){if(Ke.logLevel<=C.WARN){const n=e.map(as);Ke.warn(`Firestore (${Et}): ${s}`,...n)}}function as(s){if(typeof s=="string")return s;try{/**
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
*/return function(e){return JSON.stringify(e)}(s)}catch{return s}}/**
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
*/function hs(s="Unexpected state"){const e=`FIRESTORE (${Et}) INTERNAL ASSERTION FAILED: `+s;throw Dr(e),new Error(e)}function pt(s,e){s||hs()}/**
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
*/class Lr{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Yc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(W.UNAUTHENTICATED))}shutdown(){}}class Qc{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Zc{constructor(e){this.t=e,this.currentUser=W.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){pt(this.o===void 0);let r=this.i;const o=_=>this.i!==r?(r=this.i,n(_)):Promise.resolve();let h=new gt;this.o=()=>{this.i++,this.currentUser=this.u(),h.resolve(),h=new gt,e.enqueueRetryable(()=>o(this.currentUser))};const l=()=>{const _=h;e.enqueueRetryable(async()=>{await _.promise,await o(this.currentUser)})},w=_=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(_=>w(_)),setTimeout(()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?w(_):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),h.resolve(),h=new gt)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pt(typeof r.accessToken=="string"),new Lr(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pt(e===null||typeof e=="string"),new W(e)}}class eu{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=W.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class tu{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new eu(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(W.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class su{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){pt(this.o===void 0);const r=h=>{h.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${h.error.message}`);const l=h.token!==this.R;return this.R=h.token,te("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(h.token):Promise.resolve()};this.o=h=>{e.enqueueRetryable(()=>r(h))};const o=h=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=h,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(h=>o(h)),setTimeout(()=>{if(!this.appCheck){const h=this.A.getImmediate({optional:!0});h?o(h):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pt(typeof n.token=="string"),this.R=n.token,new nu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function iu(s){return s.name==="IndexedDbTransactionError"}class tn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new tn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof tn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
*/var xi,S;(S=xi||(xi={}))[S.OK=0]="OK",S[S.CANCELLED=1]="CANCELLED",S[S.UNKNOWN=2]="UNKNOWN",S[S.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",S[S.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",S[S.NOT_FOUND=5]="NOT_FOUND",S[S.ALREADY_EXISTS=6]="ALREADY_EXISTS",S[S.PERMISSION_DENIED=7]="PERMISSION_DENIED",S[S.UNAUTHENTICATED=16]="UNAUTHENTICATED",S[S.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",S[S.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",S[S.ABORTED=10]="ABORTED",S[S.OUT_OF_RANGE=11]="OUT_OF_RANGE",S[S.UNIMPLEMENTED=12]="UNIMPLEMENTED",S[S.INTERNAL=13]="INTERNAL",S[S.UNAVAILABLE=14]="UNAVAILABLE",S[S.DATA_LOSS=15]="DATA_LOSS";/**
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
*/new Nr([4294967295,4294967295],0);function xn(){return typeof document<"u"?document:null}/**
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
*/class ru{constructor(e,n,r=1e3,o=1.5,h=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=o,this.$o=h,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),o=Math.max(0,n-r);o>0&&te("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
*/class cs{constructor(e,n,r,o,h){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=o,this.removalCallback=h,this.deferred=new gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,o,h){const l=Date.now()+r,w=new cs(e,n,l,o,h);return w.start(r),w}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var ji,Fi;(Fi=ji||(ji={})).na="default",Fi.Cache="cache";/**
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
*/function ou(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
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
*/const Bi=new Map;function au(s,e,n,r){if(e===!0&&r===!0)throw new X(J.INVALID_ARGUMENT,`${s} and ${n} cannot be used together.`)}function hu(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":hs()}function cu(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new X(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hu(s);throw new X(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return s}/**
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
*/class Hi{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}au("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ou((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new X(J.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new X(J.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new X(J.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,r){return n.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ur{constructor(e,n,r,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hi({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hi(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Yc;switch(n.type){case"firstParty":return new tu(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new X(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Bi.get(e);n&&(te("ComponentProvider","Removing Datastore"),Bi.delete(e),n.terminate())}(this),Promise.resolve()}}function uu(s,e,n,r={}){var o;const h=(s=cu(s,Ur))._getSettings(),l=`${e}:${n}`;if(h.host!=="firestore.googleapis.com"&&h.host!==l&&Xc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),s._setSettings(Object.assign(Object.assign({},h),{host:l,ssl:!1})),r.mockUserToken){let w,_;if(typeof r.mockUserToken=="string")w=r.mockUserToken,_=W.MOCK_USER;else{w=Co(r.mockUserToken,(o=s._app)===null||o===void 0?void 0:o.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new X(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new W(E)}s._authCredentials=new Qc(new Lr(w,_))}}/**
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
*/class Vi{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new ru(this,"async_queue_retry"),this.fu=()=>{const r=xn();r&&te("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=xn();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const n=xn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const n=new gt;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!iu(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const o=function(h){let l=h.message||"";return h.stack&&(l=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),l}(r);throw Dr("INTERNAL UNHANDLED ERROR: ",o),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const o=cs.createAndSchedule(this,e,n,r,h=>this.Su(h));return this.Eu.push(o),o}pu(){this.Au&&hs()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.Eu)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.Eu.indexOf(e);this.Eu.splice(n,1)}}class lu extends Ur{constructor(e,n,r,o){super(e,n,r,o),this.type="firestore",this._queue=new Vi,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vi(e),this._firestoreClient=void 0,await e}}}function du(s,e){const n=typeof s=="object"?s:Yi(),r=typeof s=="string"?s:"(default)",o=Jn(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const h=Ao("firestore");h&&uu(o,...h)}return o}(function(s,e=!0){(function(n){Et=n})(Je),We(new Le("firestore",(n,{instanceIdentifier:r,options:o})=>{const h=n.getProvider("app").getImmediate(),l=new lu(new Zc(n.getProvider("auth-internal")),new su(n.getProvider("app-check-internal")),function(w,_){if(!Object.prototype.hasOwnProperty.apply(w.options,["projectId"]))throw new X(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tn(w.options.projectId,_)}(h,r),h);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),ke(Mi,"4.7.6",s),ke(Mi,"4.7.6","esm2017")})();const fu={apiKey:"AIzaSyB1dlHRhLA71PxCgVLjOieUcUF22DWx6zY",authDomain:"autonomy-heroes.firebaseapp.com",projectId:"autonomy-heroes",storageBucket:"autonomy-heroes.firebasestorage.app",messagingSenderId:"266526530869",appId:"1:266526530869:web:ea95143735be497ca8007c",measurementId:"G-70PG5B4S39"},Mr=Xn(fu);qc(Mr);du(Mr);
