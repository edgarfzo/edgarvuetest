(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
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
 */const Ua=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},su=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ba={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(h=64)),r.push(n[u],n[f],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ua(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):su(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw Error();const h=i<<2|a>>4;if(r.push(h),l!==64){const m=a<<4&240|l>>2;if(r.push(m),f!==64){const _=l<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},iu=function(t){const e=Ua(t);return Ba.encodeByteArray(e,!0)},Ha=function(t){return iu(t).replace(/\./g,"")},ja=function(t){try{return Ba.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ou(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function au(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lu(){const t=we();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uu(){try{return typeof indexedDB=="object"}catch{return!1}}function fu(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function du(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hu=()=>du().__FIREBASE_DEFAULTS__,pu=()=>{if(typeof process>"u"||typeof{}>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mu=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ja(t[1]);return e&&JSON.parse(e)},ri=()=>{try{return hu()||pu()||mu()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gu=t=>{var e,n;return(n=(e=ri())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_u=()=>{var t;return(t=ri())===null||t===void 0?void 0:t.config},Va=t=>{var e;return(e=ri())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class vu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */const yu="FirebaseError";class At extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=yu,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jn.prototype.create)}}class Jn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?bu(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new At(s,a,r)}}function bu(t,e){return t.replace(wu,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const wu=/\{\$([^}]+)}/g;function Iu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Gi(i)&&Gi(o)){if(!Rr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Gi(t){return t!==null&&typeof t=="object"}/**
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
 */function Yn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Sn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function An(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Eu(t,e){const n=new Tu(t,e);return n.subscribe.bind(n)}class Tu{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Cu(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=cs),s.error===void 0&&(s.error=cs),s.complete===void 0&&(s.complete=cs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cu(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cs(){}/**
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
 */function it(t){return t&&t._delegate?t._delegate:t}class ln{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xt="[DEFAULT]";/**
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
 */class Su{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vu;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ru(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Au(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Au(t){return t===xt?void 0:t}function Ru(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ou{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Su(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const ku={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Pu=se.INFO,Du={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},xu=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Du[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wa{constructor(e){this.name=e,this._logLevel=Pu,this._logHandler=xu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ku[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Nu=(t,e)=>e.some(n=>t instanceof n);let Ji,Yi;function Mu(){return Ji||(Ji=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lu(){return Yi||(Yi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const za=new WeakMap,Os=new WeakMap,Ka=new WeakMap,ls=new WeakMap,si=new WeakMap;function Fu(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(bt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&za.set(n,t)}).catch(()=>{}),si.set(e,t),e}function $u(t){if(Os.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Os.set(t,e)}let ks={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Os.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ka.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Uu(t){ks=t(ks)}function Bu(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(us(this),e,...n);return Ka.set(r,e.sort?e.sort():[e]),bt(r)}:Lu().includes(t)?function(...e){return t.apply(us(this),e),bt(za.get(this))}:function(...e){return bt(t.apply(us(this),e))}}function Hu(t){return typeof t=="function"?Bu(t):(t instanceof IDBTransaction&&$u(t),Nu(t,Mu())?new Proxy(t,ks):t)}function bt(t){if(t instanceof IDBRequest)return Fu(t);if(ls.has(t))return ls.get(t);const e=Hu(t);return e!==t&&(ls.set(t,e),si.set(e,t)),e}const us=t=>si.get(t);function ju(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=bt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(bt(o.result),c.oldVersion,c.newVersion,bt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Vu=["get","getKey","getAll","getAllKeys","count"],Wu=["put","add","delete","clear"],fs=new Map;function Xi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fs.get(e))return fs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Wu.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Vu.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return fs.set(e,i),i}Uu(t=>({...t,get:(e,n,r)=>Xi(e,n)||t.get(e,n,r),has:(e,n)=>!!Xi(e,n)||t.has(e,n)}));/**
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
 */class zu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ku(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ku(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ps="@firebase/app",Qi="0.9.0";/**
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
 */const Wt=new Wa("@firebase/app"),qu="@firebase/app-compat",Gu="@firebase/analytics-compat",Ju="@firebase/analytics",Yu="@firebase/app-check-compat",Xu="@firebase/app-check",Qu="@firebase/auth",Zu="@firebase/auth-compat",ef="@firebase/database",tf="@firebase/database-compat",nf="@firebase/functions",rf="@firebase/functions-compat",sf="@firebase/installations",of="@firebase/installations-compat",af="@firebase/messaging",cf="@firebase/messaging-compat",lf="@firebase/performance",uf="@firebase/performance-compat",ff="@firebase/remote-config",df="@firebase/remote-config-compat",hf="@firebase/storage",pf="@firebase/storage-compat",mf="@firebase/firestore",gf="@firebase/firestore-compat",_f="firebase",vf="9.15.0";/**
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
 */const Ds="[DEFAULT]",yf={[Ps]:"fire-core",[qu]:"fire-core-compat",[Ju]:"fire-analytics",[Gu]:"fire-analytics-compat",[Xu]:"fire-app-check",[Yu]:"fire-app-check-compat",[Qu]:"fire-auth",[Zu]:"fire-auth-compat",[ef]:"fire-rtdb",[tf]:"fire-rtdb-compat",[nf]:"fire-fn",[rf]:"fire-fn-compat",[sf]:"fire-iid",[of]:"fire-iid-compat",[af]:"fire-fcm",[cf]:"fire-fcm-compat",[lf]:"fire-perf",[uf]:"fire-perf-compat",[ff]:"fire-rc",[df]:"fire-rc-compat",[hf]:"fire-gcs",[pf]:"fire-gcs-compat",[mf]:"fire-fst",[gf]:"fire-fst-compat","fire-js":"fire-js",[_f]:"fire-js-all"};/**
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
 */const Or=new Map,xs=new Map;function bf(t,e){try{t.container.addComponent(e)}catch(n){Wt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mn(t){const e=t.name;if(xs.has(e))return Wt.debug(`There were multiple attempts to register component ${e}.`),!1;xs.set(e,t);for(const n of Or.values())bf(n,t);return!0}function qa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const wf={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wt=new Jn("app","Firebase",wf);/**
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
 */class If{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}/**
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
 */const Hr=vf;function Ga(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ds,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw wt.create("bad-app-name",{appName:String(s)});if(n||(n=_u()),!n)throw wt.create("no-options");const i=Or.get(s);if(i){if(Rr(n,i.options)&&Rr(r,i.config))return i;throw wt.create("duplicate-app",{appName:s})}const o=new Ou(s);for(const c of xs.values())o.addComponent(c);const a=new If(n,r,o);return Or.set(s,a),a}function Ef(t=Ds){const e=Or.get(t);if(!e&&t===Ds)return Ga();if(!e)throw wt.create("no-app",{appName:t});return e}function en(t,e,n){var r;let s=(r=yf[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wt.warn(a.join(" "));return}Mn(new ln(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Tf="firebase-heartbeat-database",Cf=1,Ln="firebase-heartbeat-store";let ds=null;function Ja(){return ds||(ds=ju(Tf,Cf,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ln)}}}).catch(t=>{throw wt.create("idb-open",{originalErrorMessage:t.message})})),ds}async function Sf(t){try{return(await Ja()).transaction(Ln).objectStore(Ln).get(Ya(t))}catch(e){if(e instanceof At)Wt.warn(e.message);else{const n=wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wt.warn(n.message)}}}async function Zi(t,e){try{const r=(await Ja()).transaction(Ln,"readwrite");return await r.objectStore(Ln).put(e,Ya(t)),r.done}catch(n){if(n instanceof At)Wt.warn(n.message);else{const r=wt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wt.warn(r.message)}}}function Ya(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Af=1024,Rf=30*24*60*60*1e3;class Of{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pf(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=eo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Rf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=eo(),{heartbeatsToSend:n,unsentEntries:r}=kf(this._heartbeatsCache.heartbeats),s=Ha(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function eo(){return new Date().toISOString().substring(0,10)}function kf(t,e=Af){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),to(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),to(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uu()?fu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Sf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function to(t){return Ha(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Df(t){Mn(new ln("platform-logger",e=>new zu(e),"PRIVATE")),Mn(new ln("heartbeat",e=>new Of(e),"PRIVATE")),en(Ps,Qi,t),en(Ps,Qi,"esm2017"),en("fire-js","")}Df("");function ii(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Xa(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xf=Xa,Qa=new Jn("auth","Firebase",Xa());/**
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
 */const no=new Wa("@firebase/auth");function gr(t,...e){no.logLevel<=se.ERROR&&no.error(`Auth (${Hr}): ${t}`,...e)}/**
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
 */function xe(t,...e){throw oi(t,...e)}function qe(t,...e){return oi(t,...e)}function Za(t,e,n){const r=Object.assign(Object.assign({},xf()),{[e]:n});return new Jn("auth","Firebase",r).create(e,{appName:t.name})}function Nf(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&xe(t,"argument-error"),Za(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function oi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qa.create(t,...e)}function $(t,e,...n){if(!t)throw oi(e,...n)}function Ze(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gr(e),new Error(e)}function nt(t,e){t||Ze(e)}/**
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
 */const ro=new Map;function et(t){nt(t instanceof Function,"Expected a class definition");let e=ro.get(t);return e?(nt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ro.set(t,e),e)}/**
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
 */function Mf(t,e){const n=qa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Rr(i,e!=null?e:{}))return s;xe(s,"already-initialized")}return n.initialize({options:e})}function Lf(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(et);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Ns(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ff(){return so()==="http:"||so()==="https:"}function so(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function $f(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ff()||au()||"connection"in navigator)?navigator.onLine:!0}function Uf(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Xn{constructor(e,n){this.shortDelay=e,this.longDelay=n,nt(n>e,"Short delay should be less than long delay!"),this.isMobile=ou()||cu()}get(){return $f()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ai(t,e){nt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ec{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Bf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Hf=new Xn(3e4,6e4);function Qn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zn(t,e,n,r,s={}){return tc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Yn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ec.fetch()(nc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function tc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Bf),e);try{const s=new jf(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw or(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw or(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw or(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw or(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Za(t,u,l);xe(t,u)}}catch(s){if(s instanceof At)throw s;xe(t,"network-request-failed")}}async function er(t,e,n,r,s={}){const i=await Zn(t,e,n,r,s);return"mfaPendingCredential"in i&&xe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function nc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ai(t.config,s):`${t.config.apiScheme}://${s}`}class jf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qe(this.auth,"network-request-failed")),Hf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function or(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=qe(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Vf(t,e){return Zn(t,"POST","/v1/accounts:delete",e)}async function Wf(t,e){return Zn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function On(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zf(t,e=!1){const n=it(t),r=await n.getIdToken(e),s=ci(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:On(hs(s.auth_time)),issuedAtTime:On(hs(s.iat)),expirationTime:On(hs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function hs(t){return Number(t)*1e3}function ci(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return gr("JWT malformed, contained fewer than 3 sections"),null;try{const s=ja(n);return s?JSON.parse(s):(gr("Failed to decode base64 JWT payload"),null)}catch(s){return gr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Kf(t){const e=ci(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof At&&qf(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qf({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Gf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=On(this.lastLoginAt),this.creationTime=On(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function kr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Fn(t,Wf(n,{idToken:r}));$(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Xf(i.providerUserInfo):[],a=Yf(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new rc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function Jf(t){const e=it(t);await kr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yf(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Xf(t){return t.map(e=>{var{providerId:n}=e,r=ii(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Qf(t,e){const n=await tc(t,{},async()=>{const r=Yn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=nc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ec.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class $n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Qf(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new $n;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $n,this.toJSON())}_performRefresh(){return Ze("not implemented")}}/**
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
 */function lt(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ht{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ii(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new rc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Fn(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zf(this,e)}reload(){return Jf(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ht(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await kr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Fn(this,Vf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,E=(l=n.createdAt)!==null&&l!==void 0?l:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:O,emailVerified:B,isAnonymous:Y,providerData:fe,stsTokenManager:he}=n;$(O&&he,e,"internal-error");const j=$n.fromJSON(this.name,he);$(typeof O=="string",e,"internal-error"),lt(f,e.name),lt(h,e.name),$(typeof B=="boolean",e,"internal-error"),$(typeof Y=="boolean",e,"internal-error"),lt(m,e.name),lt(_,e.name),lt(I,e.name),lt(D,e.name),lt(E,e.name),lt(P,e.name);const X=new Ht({uid:O,auth:e,email:h,emailVerified:B,displayName:f,isAnonymous:Y,photoURL:_,phoneNumber:m,tenantId:I,stsTokenManager:j,createdAt:E,lastLoginAt:P});return fe&&Array.isArray(fe)&&(X.providerData=fe.map(J=>Object.assign({},J))),D&&(X._redirectEventId=D),X}static async _fromIdTokenResponse(e,n,r=!1){const s=new $n;s.updateFromServerResponse(n);const i=new Ht({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await kr(i),i}}/**
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
 */class sc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sc.type="NONE";const io=sc;/**
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
 */function _r(t,e,n){return`firebase:${t}:${e}:${n}`}class tn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=_r(this.userKey,s.apiKey,i),this.fullPersistenceKey=_r("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ht._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new tn(et(io),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||et(io);const o=_r(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=Ht._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new tn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new tn(i,e,r))}}/**
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
 */function oo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ac(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ic(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lc(e))return"Blackberry";if(uc(e))return"Webos";if(li(e))return"Safari";if((e.includes("chrome/")||oc(e))&&!e.includes("edge/"))return"Chrome";if(cc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ic(t=we()){return/firefox\//i.test(t)}function li(t=we()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oc(t=we()){return/crios\//i.test(t)}function ac(t=we()){return/iemobile/i.test(t)}function cc(t=we()){return/android/i.test(t)}function lc(t=we()){return/blackberry/i.test(t)}function uc(t=we()){return/webos/i.test(t)}function jr(t=we()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Zf(t=we()){var e;return jr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ed(){return lu()&&document.documentMode===10}function fc(t=we()){return jr(t)||cc(t)||uc(t)||lc(t)||/windows phone/i.test(t)||ac(t)}function td(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function dc(t,e=[]){let n;switch(t){case"Browser":n=oo(we());break;case"Worker":n=`${oo(we())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hr}/${r}`}/**
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
 */class nd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class rd{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ao(this),this.idTokenSubscription=new ao(this),this.beforeStateQueue=new nd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qa,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=et(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await tn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await kr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Uf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?it(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(et(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Jn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&et(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await tn.create(this,[et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function pn(t){return it(t)}class ao{constructor(e){this.auth=e,this.observer=null,this.addObserver=Eu(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function sd(t,e,n){const r=pn(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=hc(e),{host:o,port:a}=id(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||od()}function hc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function id(t){const e=hc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:co(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:co(o)}}}function co(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function od(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ui{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ze("not implemented")}_getIdTokenResponse(e){return Ze("not implemented")}_linkToIdToken(e,n){return Ze("not implemented")}_getReauthenticationResolver(e){return Ze("not implemented")}}async function ad(t,e){return Zn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function cd(t,e){return er(t,"POST","/v1/accounts:signInWithPassword",Qn(t,e))}/**
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
 */async function ld(t,e){return er(t,"POST","/v1/accounts:signInWithEmailLink",Qn(t,e))}async function ud(t,e){return er(t,"POST","/v1/accounts:signInWithEmailLink",Qn(t,e))}/**
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
 */class Un extends ui{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Un(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Un(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return cd(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ld(e,{email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ad(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ud(e,{idToken:n,email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function nn(t,e){return er(t,"POST","/v1/accounts:signInWithIdp",Qn(t,e))}/**
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
 */const fd="http://localhost";class zt extends ui{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ii(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new zt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return nn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,nn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,nn(e,n)}buildRequest(){const e={requestUri:fd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yn(n)}return e}}/**
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
 */function dd(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hd(t){const e=Sn(An(t)).link,n=e?Sn(An(e)).deep_link_id:null,r=Sn(An(t)).deep_link_id;return(r?Sn(An(r)).link:null)||r||n||e||t}class fi{constructor(e){var n,r,s,i,o,a;const c=Sn(An(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=dd((s=c.mode)!==null&&s!==void 0?s:null);$(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=hd(e);try{return new fi(n)}catch{return null}}}/**
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
 */class mn{constructor(){this.providerId=mn.PROVIDER_ID}static credential(e,n){return Un._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=fi.parseLink(n);return $(r,"argument-error"),Un._fromEmailAndCode(e,r.code,r.tenantId)}}mn.PROVIDER_ID="password";mn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";mn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class di{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class tr extends di{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gt extends tr{constructor(){super("facebook.com")}static credential(e){return zt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";gt.PROVIDER_ID="facebook.com";/**
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
 */class _t extends tr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _t.credential(n,r)}catch{return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com";_t.PROVIDER_ID="google.com";/**
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
 */class vt extends tr{constructor(){super("github.com")}static credential(e){return zt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com";vt.PROVIDER_ID="github.com";/**
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
 */class yt extends tr{constructor(){super("twitter.com")}static credential(e,n){return zt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yt.credential(n,r)}catch{return null}}}yt.TWITTER_SIGN_IN_METHOD="twitter.com";yt.PROVIDER_ID="twitter.com";/**
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
 */async function pd(t,e){return er(t,"POST","/v1/accounts:signUp",Qn(t,e))}/**
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
 */class Kt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ht._fromIdTokenResponse(e,r,s),o=lo(r);return new Kt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=lo(r);return new Kt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function lo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Pr extends At{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Pr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Pr(e,n,r,s)}}function pc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Pr._fromErrorAndOperation(t,i,e,r):i})}async function md(t,e,n=!1){const r=await Fn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kt._forOperation(t,"link",r)}/**
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
 */async function gd(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Fn(t,pc(r,s,e,t),n);$(i.idToken,r,"internal-error");const o=ci(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),Kt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&xe(r,"user-mismatch"),i}}/**
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
 */async function mc(t,e,n=!1){const r="signIn",s=await pc(t,r,e),i=await Kt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function _d(t,e){return mc(pn(t),e)}async function Iv(t,e,n){const r=pn(t),s=await pd(r,{returnSecureToken:!0,email:e,password:n}),i=await Kt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Ev(t,e,n){return _d(it(t),mn.credential(e,n))}function vd(t,e,n,r){return it(t).onIdTokenChanged(e,n,r)}function yd(t,e,n){return it(t).beforeAuthStateChanged(e,n)}function gc(t,e,n,r){return it(t).onAuthStateChanged(e,n,r)}function bd(t){return it(t).signOut()}const Dr="__sak";/**
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
 */class _c{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Dr,"1"),this.storage.removeItem(Dr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function wd(){const t=we();return li(t)||jr(t)}const Id=1e3,Ed=10;class vc extends _c{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wd()&&td(),this.fallbackToPolling=fc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ed()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ed):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Id)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vc.type="LOCAL";const Td=vc;/**
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
 */class yc extends _c{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yc.type="SESSION";const bc=yc;/**
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
 */function Cd(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Vr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Vr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Cd(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vr.receivers=[];/**
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
 */function hi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Sd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=hi("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ge(){return window}function Ad(t){Ge().location.href=t}/**
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
 */function wc(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function Rd(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Od(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kd(){return wc()?self:null}/**
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
 */const Ic="firebaseLocalStorageDb",Pd=1,xr="firebaseLocalStorage",Ec="fbase_key";class nr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wr(t,e){return t.transaction([xr],e?"readwrite":"readonly").objectStore(xr)}function Dd(){const t=indexedDB.deleteDatabase(Ic);return new nr(t).toPromise()}function Ms(){const t=indexedDB.open(Ic,Pd);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xr,{keyPath:Ec})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xr)?e(r):(r.close(),await Dd(),e(await Ms()))})})}async function uo(t,e,n){const r=Wr(t,!0).put({[Ec]:e,value:n});return new nr(r).toPromise()}async function xd(t,e){const n=Wr(t,!1).get(e),r=await new nr(n).toPromise();return r===void 0?null:r.value}function fo(t,e){const n=Wr(t,!0).delete(e);return new nr(n).toPromise()}const Nd=800,Md=3;class Tc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ms(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Md)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vr._getInstance(kd()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Rd(),!this.activeServiceWorker)return;this.sender=new Sd(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Od()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ms();return await uo(e,Dr,"1"),await fo(e,Dr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>uo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xd(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Wr(s,!1).getAll();return new nr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tc.type="LOCAL";const Ld=Tc;/**
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
 */function Fd(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function $d(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=qe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Fd().appendChild(r)})}function Ud(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Xn(3e4,6e4);/**
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
 */function Cc(t,e){return e?et(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class pi extends ui{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return nn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Bd(t){return mc(t.auth,new pi(t),t.bypassAuthState)}function Hd(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),gd(n,new pi(t),t.bypassAuthState)}async function jd(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),md(n,new pi(t),t.bypassAuthState)}/**
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
 */class Sc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Bd;case"linkViaPopup":case"linkViaRedirect":return jd;case"reauthViaPopup":case"reauthViaRedirect":return Hd;default:xe(this.auth,"internal-error")}}resolve(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Vd=new Xn(2e3,1e4);async function Tv(t,e,n){const r=pn(t);Nf(t,e,di);const s=Cc(r,n);return new Ut(r,"signInViaPopup",e,s).executeNotNull()}class Ut extends Sc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ut.currentPopupAction&&Ut.currentPopupAction.cancel(),Ut.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){nt(this.filter.length===1,"Popup operations only handle one event");const e=hi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ut.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Vd.get())};e()}}Ut.currentPopupAction=null;/**
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
 */const Wd="pendingRedirect",vr=new Map;class zd extends Sc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vr.get(this.auth._key());if(!e){try{const r=await Kd(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vr.set(this.auth._key(),e)}return this.bypassAuthState||vr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Kd(t,e){const n=Jd(e),r=Gd(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function qd(t,e){vr.set(t._key(),e)}function Gd(t){return et(t._redirectPersistence)}function Jd(t){return _r(Wd,t.config.apiKey,t.name)}async function Yd(t,e,n=!1){const r=pn(t),s=Cc(r,e),o=await new zd(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Xd=10*60*1e3;class Qd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zd(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ac(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xd&&this.cachedEventUids.clear(),this.cachedEventUids.has(ho(e))}saveEventToCache(e){this.cachedEventUids.add(ho(e)),this.lastProcessedEventTime=Date.now()}}function ho(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ac({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zd(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ac(t);default:return!1}}/**
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
 */async function eh(t,e={}){return Zn(t,"GET","/v1/projects",e)}/**
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
 */const th=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nh=/^https?/;async function rh(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eh(t);for(const n of e)try{if(sh(n))return}catch{}xe(t,"unauthorized-domain")}function sh(t){const e=Ns(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!nh.test(n))return!1;if(th.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ih=new Xn(3e4,6e4);function po(){const t=Ge().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function oh(t){return new Promise((e,n)=>{var r,s,i;function o(){po(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{po(),n(qe(t,"network-request-failed"))},timeout:ih.get()})}if(!((s=(r=Ge().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ge().gapi)===null||i===void 0)&&i.load)o();else{const a=Ud("iframefcb");return Ge()[a]=()=>{gapi.load?o():n(qe(t,"network-request-failed"))},$d(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw yr=null,e})}let yr=null;function ah(t){return yr=yr||oh(t),yr}/**
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
 */const ch=new Xn(5e3,15e3),lh="__/auth/iframe",uh="emulator/auth/iframe",fh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hh(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ai(e,uh):`https://${t.config.authDomain}/${lh}`,r={apiKey:e.apiKey,appName:t.name,v:Hr},s=dh.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Yn(r).slice(1)}`}async function ph(t){const e=await ah(t),n=Ge().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:hh(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fh,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=qe(t,"network-request-failed"),a=Ge().setTimeout(()=>{i(o)},ch.get());function c(){Ge().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const mh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gh=500,_h=600,vh="_blank",yh="http://localhost";class mo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bh(t,e,n,r=gh,s=_h){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},mh),{width:r.toString(),height:s.toString(),top:i,left:o}),l=we().toLowerCase();n&&(a=oc(l)?vh:n),ic(l)&&(e=e||yh,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[m,_])=>`${h}${m}=${_},`,"");if(Zf(l)&&a!=="_self")return wh(e||"",a),new mo(null);const f=window.open(e||"",a,u);$(f,t,"popup-blocked");try{f.focus()}catch{}return new mo(f)}function wh(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ih="__/auth/handler",Eh="emulator/auth/handler";function go(t,e,n,r,s,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Hr,eventId:s};if(e instanceof di){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Iu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof tr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Th(t)}?${Yn(a).slice(1)}`}function Th({config:t}){return t.emulator?ai(t,Eh):`https://${t.authDomain}/${Ih}`}/**
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
 */const ps="webStorageSupport";class Ch{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bc,this._completeRedirectFn=Yd,this._overrideRedirectResult=qd}async _openPopup(e,n,r,s){var i;nt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=go(e,n,r,Ns(),s);return bh(e,o,hi())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Ad(go(e,n,r,Ns(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(nt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ph(e),r=new Qd(e);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ps,{type:ps},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ps];o!==void 0&&n(!!o),xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fc()||li()||jr()}}const Sh=Ch;var _o="@firebase/auth",vo="0.21.0";/**
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
 */class Ah{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Rh(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Oh(t){Mn(new ln("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{$(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),$(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dc(t)},u=new rd(a,c,l);return Lf(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Mn(new ln("auth-internal",e=>{const n=pn(e.getProvider("auth").getImmediate());return(r=>new Ah(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(_o,vo,Rh(t)),en(_o,vo,"esm2017")}/**
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
 */const kh=5*60,Ph=Va("authIdTokenMaxAge")||kh;let yo=null;const Dh=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ph)return;const s=n==null?void 0:n.token;yo!==s&&(yo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ls(t=Ef()){const e=qa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Mf(t,{popupRedirectResolver:Sh,persistence:[Ld,Td,bc]}),r=Va("authTokenSyncURL");if(r){const i=Dh(r);yd(n,i,()=>i(n.currentUser)),vd(n,o=>i(o))}const s=gu("auth");return s&&sd(n,`http://${s}`),n}Oh("Browser");function mi(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function gi(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=me(r)?Lh(r):gi(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(me(t))return t;if(ce(t))return t}}const xh=/;(?![^(]*\))/g,Nh=/:([^]+)/,Mh=/\/\*.*?\*\//gs;function Lh(t){const e={};return t.replace(Mh,"").split(xh).forEach(n=>{if(n){const r=n.split(Nh);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function _i(t){let e="";if(me(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const r=_i(t[n]);r&&(e+=r+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Fh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$h=mi(Fh);function Rc(t){return!!t||t===""}const Cv=t=>me(t)?t:t==null?"":U(t)||ce(t)&&(t.toString===Dc||!V(t.toString))?JSON.stringify(t,Oc,2):String(t),Oc=(t,e)=>e&&e.__v_isRef?Oc(t,e.value):sn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:kc(e)?{[`Set(${e.size})`]:[...e.values()]}:ce(e)&&!U(e)&&!xc(e)?String(e):e,oe={},rn=[],Be=()=>{},Uh=()=>!1,Bh=/^on[^a-z]/,zr=t=>Bh.test(t),vi=t=>t.startsWith("onUpdate:"),ye=Object.assign,yi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Hh=Object.prototype.hasOwnProperty,q=(t,e)=>Hh.call(t,e),U=Array.isArray,sn=t=>Kr(t)==="[object Map]",kc=t=>Kr(t)==="[object Set]",V=t=>typeof t=="function",me=t=>typeof t=="string",bi=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",Pc=t=>ce(t)&&V(t.then)&&V(t.catch),Dc=Object.prototype.toString,Kr=t=>Dc.call(t),jh=t=>Kr(t).slice(8,-1),xc=t=>Kr(t)==="[object Object]",wi=t=>me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,br=mi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Vh=/-(\w)/g,Je=qr(t=>t.replace(Vh,(e,n)=>n?n.toUpperCase():"")),Wh=/\B([A-Z])/g,gn=qr(t=>t.replace(Wh,"-$1").toLowerCase()),rr=qr(t=>t.charAt(0).toUpperCase()+t.slice(1)),ms=qr(t=>t?`on${rr(t)}`:""),Bn=(t,e)=>!Object.is(t,e),wr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Nr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Hn=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let bo;const zh=()=>bo||(bo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Pe;class Nc{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Pe,!e&&Pe&&(this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Pe;try{return Pe=this,e()}finally{Pe=n}}}on(){Pe=this}off(){Pe=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function Mc(t){return new Nc(t)}function Kh(t,e=Pe){e&&e.active&&e.effects.push(t)}function qh(t){Pe&&Pe.cleanups.push(t)}const Ii=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Lc=t=>(t.w&Ct)>0,Fc=t=>(t.n&Ct)>0,Gh=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ct},Jh=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Lc(s)&&!Fc(s)?s.delete(t):e[n++]=s,s.w&=~Ct,s.n&=~Ct}e.length=n}},Fs=new WeakMap;let Rn=0,Ct=1;const $s=30;let $e;const jt=Symbol(""),Us=Symbol("");class Ei{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Kh(this,r)}run(){if(!this.active)return this.fn();let e=$e,n=It;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=$e,$e=this,It=!0,Ct=1<<++Rn,Rn<=$s?Gh(this):wo(this),this.fn()}finally{Rn<=$s&&Jh(this),Ct=1<<--Rn,$e=this.parent,It=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$e===this?this.deferStop=!0:this.active&&(wo(this),this.onStop&&this.onStop(),this.active=!1)}}function wo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let It=!0;const $c=[];function _n(){$c.push(It),It=!1}function vn(){const t=$c.pop();It=t===void 0?!0:t}function Oe(t,e,n){if(It&&$e){let r=Fs.get(t);r||Fs.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ii()),Uc(s)}}function Uc(t,e){let n=!1;Rn<=$s?Fc(t)||(t.n|=Ct,n=!Lc(t)):n=!t.has($e),n&&(t.add($e),$e.deps.push(t))}function rt(t,e,n,r,s,i){const o=Fs.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&U(t)){const c=Hn(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":U(t)?wi(n)&&a.push(o.get("length")):(a.push(o.get(jt)),sn(t)&&a.push(o.get(Us)));break;case"delete":U(t)||(a.push(o.get(jt)),sn(t)&&a.push(o.get(Us)));break;case"set":sn(t)&&a.push(o.get(jt));break}if(a.length===1)a[0]&&Bs(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Bs(Ii(c))}}function Bs(t,e){const n=U(t)?t:[...t];for(const r of n)r.computed&&Io(r);for(const r of n)r.computed||Io(r)}function Io(t,e){(t!==$e||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Yh=mi("__proto__,__v_isRef,__isVue"),Bc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(bi)),Xh=Ti(),Qh=Ti(!1,!0),Zh=Ti(!0),Eo=ep();function ep(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)Oe(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(G)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){_n();const r=G(this)[e].apply(this,n);return vn(),r}}),t}function Ti(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?gp:zc:e?Wc:Vc).get(r))return r;const o=U(r);if(!t&&o&&q(Eo,s))return Reflect.get(Eo,s,i);const a=Reflect.get(r,s,i);return(bi(s)?Bc.has(s):Yh(s))||(t||Oe(r,"get",s),e)?a:_e(a)?o&&wi(s)?a:a.value:ce(a)?t?qc(a):ot(a):a}}const tp=Hc(),np=Hc(!0);function Hc(t=!1){return function(n,r,s,i){let o=n[r];if(un(o)&&_e(o)&&!_e(s))return!1;if(!t&&(!Mr(s)&&!un(s)&&(o=G(o),s=G(s)),!U(n)&&_e(o)&&!_e(s)))return o.value=s,!0;const a=U(n)&&wi(r)?Number(r)<n.length:q(n,r),c=Reflect.set(n,r,s,i);return n===G(i)&&(a?Bn(s,o)&&rt(n,"set",r,s):rt(n,"add",r,s)),c}}function rp(t,e){const n=q(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&rt(t,"delete",e,void 0),r}function sp(t,e){const n=Reflect.has(t,e);return(!bi(e)||!Bc.has(e))&&Oe(t,"has",e),n}function ip(t){return Oe(t,"iterate",U(t)?"length":jt),Reflect.ownKeys(t)}const jc={get:Xh,set:tp,deleteProperty:rp,has:sp,ownKeys:ip},op={get:Zh,set(t,e){return!0},deleteProperty(t,e){return!0}},ap=ye({},jc,{get:Qh,set:np}),Ci=t=>t,Gr=t=>Reflect.getPrototypeOf(t);function ar(t,e,n=!1,r=!1){t=t.__v_raw;const s=G(t),i=G(e);n||(e!==i&&Oe(s,"get",e),Oe(s,"get",i));const{has:o}=Gr(s),a=r?Ci:n?Oi:jn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function cr(t,e=!1){const n=this.__v_raw,r=G(n),s=G(t);return e||(t!==s&&Oe(r,"has",t),Oe(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function lr(t,e=!1){return t=t.__v_raw,!e&&Oe(G(t),"iterate",jt),Reflect.get(t,"size",t)}function To(t){t=G(t);const e=G(this);return Gr(e).has.call(e,t)||(e.add(t),rt(e,"add",t,t)),this}function Co(t,e){e=G(e);const n=G(this),{has:r,get:s}=Gr(n);let i=r.call(n,t);i||(t=G(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Bn(e,o)&&rt(n,"set",t,e):rt(n,"add",t,e),this}function So(t){const e=G(this),{has:n,get:r}=Gr(e);let s=n.call(e,t);s||(t=G(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&rt(e,"delete",t,void 0),i}function Ao(){const t=G(this),e=t.size!==0,n=t.clear();return e&&rt(t,"clear",void 0,void 0),n}function ur(t,e){return function(r,s){const i=this,o=i.__v_raw,a=G(o),c=e?Ci:t?Oi:jn;return!t&&Oe(a,"iterate",jt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function fr(t,e,n){return function(...r){const s=this.__v_raw,i=G(s),o=sn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Ci:e?Oi:jn;return!e&&Oe(i,"iterate",c?Us:jt),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ut(t){return function(...e){return t==="delete"?!1:this}}function cp(){const t={get(i){return ar(this,i)},get size(){return lr(this)},has:cr,add:To,set:Co,delete:So,clear:Ao,forEach:ur(!1,!1)},e={get(i){return ar(this,i,!1,!0)},get size(){return lr(this)},has:cr,add:To,set:Co,delete:So,clear:Ao,forEach:ur(!1,!0)},n={get(i){return ar(this,i,!0)},get size(){return lr(this,!0)},has(i){return cr.call(this,i,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:ur(!0,!1)},r={get(i){return ar(this,i,!0,!0)},get size(){return lr(this,!0)},has(i){return cr.call(this,i,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:ur(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=fr(i,!1,!1),n[i]=fr(i,!0,!1),e[i]=fr(i,!1,!0),r[i]=fr(i,!0,!0)}),[t,n,e,r]}const[lp,up,fp,dp]=cp();function Si(t,e){const n=e?t?dp:fp:t?up:lp;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(q(n,s)&&s in r?n:r,s,i)}const hp={get:Si(!1,!1)},pp={get:Si(!1,!0)},mp={get:Si(!0,!1)},Vc=new WeakMap,Wc=new WeakMap,zc=new WeakMap,gp=new WeakMap;function _p(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vp(t){return t.__v_skip||!Object.isExtensible(t)?0:_p(jh(t))}function ot(t){return un(t)?t:Ai(t,!1,jc,hp,Vc)}function Kc(t){return Ai(t,!1,ap,pp,Wc)}function qc(t){return Ai(t,!0,op,mp,zc)}function Ai(t,e,n,r,s){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=vp(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function on(t){return un(t)?on(t.__v_raw):!!(t&&t.__v_isReactive)}function un(t){return!!(t&&t.__v_isReadonly)}function Mr(t){return!!(t&&t.__v_isShallow)}function Gc(t){return on(t)||un(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function Ri(t){return Nr(t,"__v_skip",!0),t}const jn=t=>ce(t)?ot(t):t,Oi=t=>ce(t)?qc(t):t;function Jc(t){It&&$e&&(t=G(t),Uc(t.dep||(t.dep=Ii())))}function Yc(t,e){t=G(t),t.dep&&Bs(t.dep)}function _e(t){return!!(t&&t.__v_isRef===!0)}function Re(t){return Qc(t,!1)}function Xc(t){return Qc(t,!0)}function Qc(t,e){return _e(t)?t:new yp(t,e)}class yp{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:jn(e)}get value(){return Jc(this),this._value}set value(e){const n=this.__v_isShallow||Mr(e)||un(e);e=n?e:G(e),Bn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:jn(e),Yc(this))}}function tt(t){return _e(t)?t.value:t}const bp={get:(t,e,n)=>tt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return _e(s)&&!_e(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Zc(t){return on(t)?t:new Proxy(t,bp)}function el(t){const e=U(t)?new Array(t.length):{};for(const n in t)e[n]=Ip(t,n);return e}class wp{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Ip(t,e,n){const r=t[e];return _e(r)?r:new wp(t,e,n)}var tl;class Ep{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[tl]=!1,this._dirty=!0,this.effect=new Ei(e,()=>{this._dirty||(this._dirty=!0,Yc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=G(this);return Jc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}tl="__v_isReadonly";function Tp(t,e,n=!1){let r,s;const i=V(t);return i?(r=t,s=Be):(r=t.get,s=t.set),new Ep(r,s,i||!s,n)}function Et(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Jr(i,e,n)}return s}function De(t,e,n,r){if(V(t)){const i=Et(t,e,n,r);return i&&Pc(i)&&i.catch(o=>{Jr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(De(t[i],e,n,r));return s}function Jr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Et(c,null,10,[t,o,a]);return}}Cp(t,n,s,r)}function Cp(t,e,n,r=!0){console.error(t)}let Vn=!1,Hs=!1;const be=[];let Ke=0;const an=[];let Qe=null,Mt=0;const nl=Promise.resolve();let ki=null;function Pi(t){const e=ki||nl;return t?e.then(this?t.bind(this):t):e}function Sp(t){let e=Ke+1,n=be.length;for(;e<n;){const r=e+n>>>1;Wn(be[r])<t?e=r+1:n=r}return e}function Di(t){(!be.length||!be.includes(t,Vn&&t.allowRecurse?Ke+1:Ke))&&(t.id==null?be.push(t):be.splice(Sp(t.id),0,t),rl())}function rl(){!Vn&&!Hs&&(Hs=!0,ki=nl.then(il))}function Ap(t){const e=be.indexOf(t);e>Ke&&be.splice(e,1)}function Rp(t){U(t)?an.push(...t):(!Qe||!Qe.includes(t,t.allowRecurse?Mt+1:Mt))&&an.push(t),rl()}function Ro(t,e=Vn?Ke+1:0){for(;e<be.length;e++){const n=be[e];n&&n.pre&&(be.splice(e,1),e--,n())}}function sl(t){if(an.length){const e=[...new Set(an)];if(an.length=0,Qe){Qe.push(...e);return}for(Qe=e,Qe.sort((n,r)=>Wn(n)-Wn(r)),Mt=0;Mt<Qe.length;Mt++)Qe[Mt]();Qe=null,Mt=0}}const Wn=t=>t.id==null?1/0:t.id,Op=(t,e)=>{const n=Wn(t)-Wn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function il(t){Hs=!1,Vn=!0,be.sort(Op);const e=Be;try{for(Ke=0;Ke<be.length;Ke++){const n=be[Ke];n&&n.active!==!1&&Et(n,null,14)}}finally{Ke=0,be.length=0,sl(),Vn=!1,ki=null,(be.length||an.length)&&il()}}function kp(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||oe;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=r[u]||oe;h&&(s=n.map(m=>me(m)?m.trim():m)),f&&(s=n.map(Hn))}let a,c=r[a=ms(e)]||r[a=ms(Je(e))];!c&&i&&(c=r[a=ms(gn(e))]),c&&De(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,De(l,t,6,s)}}function ol(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!V(t)){const c=l=>{const u=ol(l,e,!0);u&&(a=!0,ye(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ce(t)&&r.set(t,null),null):(U(i)?i.forEach(c=>o[c]=null):ye(o,i),ce(t)&&r.set(t,o),o)}function Yr(t,e){return!t||!zr(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,gn(e))||q(t,e))}let Ae=null,al=null;function Lr(t){const e=Ae;return Ae=t,al=t&&t.type.__scopeId||null,e}function Ir(t,e=Ae,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Uo(-1);const i=Lr(e);let o;try{o=t(...s)}finally{Lr(i),r._d&&Uo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function gs(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:h,setupState:m,ctx:_,inheritAttrs:I}=t;let D,E;const P=Lr(t);try{if(n.shapeFlag&4){const B=s||r;D=ze(u.call(B,B,f,i,m,h,_)),E=c}else{const B=e;D=ze(B.length>1?B(i,{attrs:c,slots:a,emit:l}):B(i,null)),E=e.props?c:Pp(c)}}catch(B){Pn.length=0,Jr(B,t,1),D=ae(He)}let O=D;if(E&&I!==!1){const B=Object.keys(E),{shapeFlag:Y}=O;B.length&&Y&7&&(o&&B.some(vi)&&(E=Dp(E,o)),O=St(O,E))}return n.dirs&&(O=St(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),D=O,Lr(P),D}const Pp=t=>{let e;for(const n in t)(n==="class"||n==="style"||zr(n))&&((e||(e={}))[n]=t[n]);return e},Dp=(t,e)=>{const n={};for(const r in t)(!vi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function xp(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Oo(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!Yr(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Oo(r,o,l):!0:!!o;return!1}function Oo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Yr(n,i))return!0}return!1}function Np({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Mp=t=>t.__isSuspense;function Lp(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):Rp(t)}function cn(t,e){if(ge){let n=ge.provides;const r=ge.parent&&ge.parent.provides;r===n&&(n=ge.provides=Object.create(r)),n[t]=e}}function Ce(t,e,n=!1){const r=ge||Ae;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&V(e)?e.call(r.proxy):e}}function Xr(t,e){return xi(t,null,e)}const dr={};function Tt(t,e,n){return xi(t,e,n)}function xi(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=oe){const a=ge;let c,l=!1,u=!1;if(_e(t)?(c=()=>t.value,l=Mr(t)):on(t)?(c=()=>t,r=!0):U(t)?(u=!0,l=t.some(O=>on(O)||Mr(O)),c=()=>t.map(O=>{if(_e(O))return O.value;if(on(O))return Bt(O);if(V(O))return Et(O,a,2)})):V(t)?e?c=()=>Et(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),De(t,a,3,[h])}:c=Be,e&&r){const O=c;c=()=>Bt(O())}let f,h=O=>{f=E.onStop=()=>{Et(O,a,4)}},m;if(Kn)if(h=Be,e?n&&De(e,a,3,[c(),u?[]:void 0,h]):c(),s==="sync"){const O=Om();m=O.__watcherHandles||(O.__watcherHandles=[])}else return Be;let _=u?new Array(t.length).fill(dr):dr;const I=()=>{if(!!E.active)if(e){const O=E.run();(r||l||(u?O.some((B,Y)=>Bn(B,_[Y])):Bn(O,_)))&&(f&&f(),De(e,a,3,[O,_===dr?void 0:u&&_[0]===dr?[]:_,h]),_=O)}else E.run()};I.allowRecurse=!!e;let D;s==="sync"?D=I:s==="post"?D=()=>Te(I,a&&a.suspense):(I.pre=!0,a&&(I.id=a.uid),D=()=>Di(I));const E=new Ei(c,D);e?n?I():_=E.run():s==="post"?Te(E.run.bind(E),a&&a.suspense):E.run();const P=()=>{E.stop(),a&&a.scope&&yi(a.scope.effects,E)};return m&&m.push(P),P}function Fp(t,e,n){const r=this.proxy,s=me(t)?t.includes(".")?cl(r,t):()=>r[t]:t.bind(r,r);let i;V(e)?i=e:(i=e.handler,n=e);const o=ge;fn(this);const a=xi(s,i.bind(r),n);return o?fn(o):Vt(),a}function cl(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Bt(t,e){if(!ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),_e(t))Bt(t.value,e);else if(U(t))for(let n=0;n<t.length;n++)Bt(t[n],e);else if(kc(t)||sn(t))t.forEach(n=>{Bt(n,e)});else if(xc(t))for(const n in t)Bt(t[n],e);return t}function $p(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return hl(()=>{t.isMounted=!0}),pl(()=>{t.isUnmounting=!0}),t}const ke=[Function,Array],Up={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ke,onEnter:ke,onAfterEnter:ke,onEnterCancelled:ke,onBeforeLeave:ke,onLeave:ke,onAfterLeave:ke,onLeaveCancelled:ke,onBeforeAppear:ke,onAppear:ke,onAfterAppear:ke,onAppearCancelled:ke},setup(t,{slots:e}){const n=Hi(),r=$p();let s;return()=>{const i=e.default&&fl(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const I of i)if(I.type!==He){o=I;break}}const a=G(t),{mode:c}=a;if(r.isLeaving)return _s(o);const l=ko(o);if(!l)return _s(o);const u=js(l,a,r,n);Vs(l,u);const f=n.subTree,h=f&&ko(f);let m=!1;const{getTransitionKey:_}=l.type;if(_){const I=_();s===void 0?s=I:I!==s&&(s=I,m=!0)}if(h&&h.type!==He&&(!Lt(l,h)||m)){const I=js(h,a,r,n);if(Vs(h,I),c==="out-in")return r.isLeaving=!0,I.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},_s(o);c==="in-out"&&l.type!==He&&(I.delayLeave=(D,E,P)=>{const O=ul(r,h);O[String(h.key)]=h,D._leaveCb=()=>{E(),D._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=P})}return o}}},ll=Up;function ul(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function js(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:I,onAppear:D,onAfterAppear:E,onAppearCancelled:P}=e,O=String(t.key),B=ul(n,t),Y=(j,X)=>{j&&De(j,r,9,X)},fe=(j,X)=>{const J=X[1];Y(j,X),U(j)?j.every(pe=>pe.length<=1)&&J():j.length<=1&&J()},he={mode:i,persisted:o,beforeEnter(j){let X=a;if(!n.isMounted)if(s)X=I||a;else return;j._leaveCb&&j._leaveCb(!0);const J=B[O];J&&Lt(t,J)&&J.el._leaveCb&&J.el._leaveCb(),Y(X,[j])},enter(j){let X=c,J=l,pe=u;if(!n.isMounted)if(s)X=D||c,J=E||l,pe=P||u;else return;let x=!1;const ie=j._enterCb=ve=>{x||(x=!0,ve?Y(pe,[j]):Y(J,[j]),he.delayedLeave&&he.delayedLeave(),j._enterCb=void 0)};X?fe(X,[j,ie]):ie()},leave(j,X){const J=String(t.key);if(j._enterCb&&j._enterCb(!0),n.isUnmounting)return X();Y(f,[j]);let pe=!1;const x=j._leaveCb=ie=>{pe||(pe=!0,X(),ie?Y(_,[j]):Y(m,[j]),j._leaveCb=void 0,B[J]===t&&delete B[J])};B[J]=t,h?fe(h,[j,x]):x()},clone(j){return js(j,e,n,r)}};return he}function _s(t){if(Qr(t))return t=St(t),t.children=null,t}function ko(t){return Qr(t)?t.children?t.children[0]:void 0:t}function Vs(t,e){t.shapeFlag&6&&t.component?Vs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function fl(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Fe?(o.patchFlag&128&&s++,r=r.concat(fl(o.children,e,a))):(e||o.type!==He)&&r.push(a!=null?St(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Ni(t){return V(t)?{setup:t,name:t.name}:t}const Er=t=>!!t.type.__asyncLoader,Qr=t=>t.type.__isKeepAlive;function Bp(t,e){dl(t,"a",e)}function Hp(t,e){dl(t,"da",e)}function dl(t,e,n=ge){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Zr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Qr(s.parent.vnode)&&jp(r,e,n,s),s=s.parent}}function jp(t,e,n,r){const s=Zr(e,t,r,!0);ml(()=>{yi(r[e],s)},n)}function Zr(t,e,n=ge,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;_n(),fn(n);const a=De(e,n,t,o);return Vt(),vn(),a});return r?s.unshift(i):s.push(i),i}}const at=t=>(e,n=ge)=>(!Kn||t==="sp")&&Zr(t,(...r)=>e(...r),n),Vp=at("bm"),hl=at("m"),Wp=at("bu"),zp=at("u"),pl=at("bum"),ml=at("um"),Kp=at("sp"),qp=at("rtg"),Gp=at("rtc");function Jp(t,e=ge){Zr("ec",t,e)}function Sv(t,e){const n=Ae;if(n===null)return t;const r=ns(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=oe]=e[i];o&&(V(o)&&(o={mounted:o,updated:o}),o.deep&&Bt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ot(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(_n(),De(c,n,8,[t.el,a,t,e]),vn())}}const Mi="components",Yp="directives";function Po(t,e){return Li(Mi,t,!0,e)||t}const gl=Symbol();function Av(t){return me(t)?Li(Mi,t,!1)||t:t||gl}function Rv(t){return Li(Yp,t)}function Li(t,e,n=!0,r=!1){const s=Ae||ge;if(s){const i=s.type;if(t===Mi){const a=Sm(i,!1);if(a&&(a===e||a===Je(e)||a===rr(Je(e))))return i}const o=Do(s[t]||i[t],e)||Do(s.appContext[t],e);return!o&&r?i:o}}function Do(t,e){return t&&(t[e]||t[Je(e)]||t[rr(Je(e))])}const Ws=t=>t?Rl(t)?ns(t)||t.proxy:Ws(t.parent):null,kn=ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ws(t.parent),$root:t=>Ws(t.root),$emit:t=>t.emit,$options:t=>Fi(t),$forceUpdate:t=>t.f||(t.f=()=>Di(t.update)),$nextTick:t=>t.n||(t.n=Pi.bind(t.proxy)),$watch:t=>Fp.bind(t)}),vs=(t,e)=>t!==oe&&!t.__isScriptSetup&&q(t,e),Xp={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(vs(r,e))return o[e]=1,r[e];if(s!==oe&&q(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&q(l,e))return o[e]=3,i[e];if(n!==oe&&q(n,e))return o[e]=4,n[e];zs&&(o[e]=0)}}const u=kn[e];let f,h;if(u)return e==="$attrs"&&Oe(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==oe&&q(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,q(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return vs(s,e)?(s[e]=n,!0):r!==oe&&q(r,e)?(r[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==oe&&q(t,o)||vs(e,o)||(a=i[0])&&q(a,o)||q(r,o)||q(kn,o)||q(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let zs=!0;function Qp(t){const e=Fi(t),n=t.proxy,r=t.ctx;zs=!1,e.beforeCreate&&xo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:_,activated:I,deactivated:D,beforeDestroy:E,beforeUnmount:P,destroyed:O,unmounted:B,render:Y,renderTracked:fe,renderTriggered:he,errorCaptured:j,serverPrefetch:X,expose:J,inheritAttrs:pe,components:x,directives:ie,filters:ve}=e;if(l&&Zp(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ne in o){const Z=o[ne];V(Z)&&(r[ne]=Z.bind(n))}if(s){const ne=s.call(n,n);ce(ne)&&(t.data=ot(ne))}if(zs=!0,i)for(const ne in i){const Z=i[ne],Ne=V(Z)?Z.bind(n,n):V(Z.get)?Z.get.bind(n,n):Be,Rt=!V(Z)&&V(Z.set)?Z.set.bind(n):Be,Me=te({get:Ne,set:Rt});Object.defineProperty(r,ne,{enumerable:!0,configurable:!0,get:()=>Me.value,set:Ee=>Me.value=Ee})}if(a)for(const ne in a)_l(a[ne],r,n,ne);if(c){const ne=V(c)?c.call(n):c;Reflect.ownKeys(ne).forEach(Z=>{cn(Z,ne[Z])})}u&&xo(u,t,"c");function le(ne,Z){U(Z)?Z.forEach(Ne=>ne(Ne.bind(n))):Z&&ne(Z.bind(n))}if(le(Vp,f),le(hl,h),le(Wp,m),le(zp,_),le(Bp,I),le(Hp,D),le(Jp,j),le(Gp,fe),le(qp,he),le(pl,P),le(ml,B),le(Kp,X),U(J))if(J.length){const ne=t.exposed||(t.exposed={});J.forEach(Z=>{Object.defineProperty(ne,Z,{get:()=>n[Z],set:Ne=>n[Z]=Ne})})}else t.exposed||(t.exposed={});Y&&t.render===Be&&(t.render=Y),pe!=null&&(t.inheritAttrs=pe),x&&(t.components=x),ie&&(t.directives=ie)}function Zp(t,e,n=Be,r=!1){U(t)&&(t=Ks(t));for(const s in t){const i=t[s];let o;ce(i)?"default"in i?o=Ce(i.from||s,i.default,!0):o=Ce(i.from||s):o=Ce(i),_e(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function xo(t,e,n){De(U(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function _l(t,e,n,r){const s=r.includes(".")?cl(n,r):()=>n[r];if(me(t)){const i=e[t];V(i)&&Tt(s,i)}else if(V(t))Tt(s,t.bind(n));else if(ce(t))if(U(t))t.forEach(i=>_l(i,e,n,r));else{const i=V(t.handler)?t.handler.bind(n):e[t.handler];V(i)&&Tt(s,i,t)}}function Fi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Fr(c,l,o,!0)),Fr(c,e,o)),ce(e)&&i.set(e,c),c}function Fr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Fr(t,i,n,!0),s&&s.forEach(o=>Fr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=em[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const em={data:No,props:Nt,emits:Nt,methods:Nt,computed:Nt,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Nt,directives:Nt,watch:nm,provide:No,inject:tm};function No(t,e){return e?t?function(){return ye(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function tm(t,e){return Nt(Ks(t),Ks(e))}function Ks(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ie(t,e){return t?[...new Set([].concat(t,e))]:e}function Nt(t,e){return t?ye(ye(Object.create(null),t),e):e}function nm(t,e){if(!t)return e;if(!e)return t;const n=ye(Object.create(null),t);for(const r in e)n[r]=Ie(t[r],e[r]);return n}function rm(t,e,n,r=!1){const s={},i={};Nr(i,ts,1),t.propsDefaults=Object.create(null),vl(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Kc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function sm(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=G(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Yr(t.emitsOptions,h))continue;const m=e[h];if(c)if(q(i,h))m!==i[h]&&(i[h]=m,l=!0);else{const _=Je(h);s[_]=qs(c,a,_,m,t,!1)}else m!==i[h]&&(i[h]=m,l=!0)}}}else{vl(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!q(e,f)&&((u=gn(f))===f||!q(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=qs(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!q(e,f)&&!0)&&(delete i[f],l=!0)}l&&rt(t,"set","$attrs")}function vl(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(br(c))continue;const l=e[c];let u;s&&q(s,u=Je(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Yr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=G(n),l=a||oe;for(let u=0;u<i.length;u++){const f=i[u];n[f]=qs(s,c,f,l[f],t,!q(l,f))}}return o}function qs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=q(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&V(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(fn(s),r=l[n]=c.call(null,e),Vt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===gn(n))&&(r=!0))}return r}function yl(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!V(t)){const u=f=>{c=!0;const[h,m]=yl(f,e,!0);ye(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ce(t)&&r.set(t,rn),rn;if(U(i))for(let u=0;u<i.length;u++){const f=Je(i[u]);Mo(f)&&(o[f]=oe)}else if(i)for(const u in i){const f=Je(u);if(Mo(f)){const h=i[u],m=o[f]=U(h)||V(h)?{type:h}:Object.assign({},h);if(m){const _=$o(Boolean,m.type),I=$o(String,m.type);m[0]=_>-1,m[1]=I<0||_<I,(_>-1||q(m,"default"))&&a.push(f)}}}const l=[o,a];return ce(t)&&r.set(t,l),l}function Mo(t){return t[0]!=="$"}function Lo(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Fo(t,e){return Lo(t)===Lo(e)}function $o(t,e){return U(e)?e.findIndex(n=>Fo(n,t)):V(e)&&Fo(e,t)?0:-1}const bl=t=>t[0]==="_"||t==="$stable",$i=t=>U(t)?t.map(ze):[ze(t)],im=(t,e,n)=>{if(e._n)return e;const r=Ir((...s)=>$i(e(...s)),n);return r._c=!1,r},wl=(t,e,n)=>{const r=t._ctx;for(const s in t){if(bl(s))continue;const i=t[s];if(V(i))e[s]=im(s,i,r);else if(i!=null){const o=$i(i);e[s]=()=>o}}},Il=(t,e)=>{const n=$i(e);t.slots.default=()=>n},om=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),Nr(e,"_",n)):wl(e,t.slots={})}else t.slots={},e&&Il(t,e);Nr(t.slots,ts,1)},am=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=oe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ye(s,e),!n&&a===1&&delete s._):(i=!e.$stable,wl(e,s)),o=e}else e&&(Il(t,e),o={default:1});if(i)for(const a in s)!bl(a)&&!(a in o)&&delete s[a]};function El(){return{app:null,config:{isNativeTag:Uh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cm=0;function lm(t,e){return function(r,s=null){V(r)||(r=Object.assign({},r)),s!=null&&!ce(s)&&(s=null);const i=El(),o=new Set;let a=!1;const c=i.app={_uid:cm++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:km,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&V(l.install)?(o.add(l),l.install(c,...u)):V(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const h=ae(r,s);return h.appContext=i,u&&e?e(h,l):t(h,l,f),a=!0,c._container=l,l.__vue_app__=c,ns(h.component)||h.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Gs(t,e,n,r,s=!1){if(U(t)){t.forEach((h,m)=>Gs(h,e&&(U(e)?e[m]:e),n,r,s));return}if(Er(r)&&!s)return;const i=r.shapeFlag&4?ns(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===oe?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(me(l)?(u[l]=null,q(f,l)&&(f[l]=null)):_e(l)&&(l.value=null)),V(c))Et(c,a,12,[o,u]);else{const h=me(c),m=_e(c);if(h||m){const _=()=>{if(t.f){const I=h?q(f,c)?f[c]:u[c]:c.value;s?U(I)&&yi(I,i):U(I)?I.includes(i)||I.push(i):h?(u[c]=[i],q(f,c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else h?(u[c]=o,q(f,c)&&(f[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,Te(_,n)):_()}}}const Te=Lp;function um(t){return fm(t)}function fm(t,e){const n=zh();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Be,insertStaticContent:_}=t,I=(d,p,g,v=null,b=null,C=null,R=!1,T=null,S=!!p.dynamicChildren)=>{if(d===p)return;d&&!Lt(d,p)&&(v=A(d),Ee(d,b,C,!0),d=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:w,ref:L,shapeFlag:N}=p;switch(w){case es:D(d,p,g,v);break;case He:E(d,p,g,v);break;case ys:d==null&&P(p,g,v,R);break;case Fe:x(d,p,g,v,b,C,R,T,S);break;default:N&1?Y(d,p,g,v,b,C,R,T,S):N&6?ie(d,p,g,v,b,C,R,T,S):(N&64||N&128)&&w.process(d,p,g,v,b,C,R,T,S,K)}L!=null&&b&&Gs(L,d&&d.ref,C,p||d,!p)},D=(d,p,g,v)=>{if(d==null)r(p.el=a(p.children),g,v);else{const b=p.el=d.el;p.children!==d.children&&l(b,p.children)}},E=(d,p,g,v)=>{d==null?r(p.el=c(p.children||""),g,v):p.el=d.el},P=(d,p,g,v)=>{[d.el,d.anchor]=_(d.children,p,g,v,d.el,d.anchor)},O=({el:d,anchor:p},g,v)=>{let b;for(;d&&d!==p;)b=h(d),r(d,g,v),d=b;r(p,g,v)},B=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=h(d),s(d),d=g;s(p)},Y=(d,p,g,v,b,C,R,T,S)=>{R=R||p.type==="svg",d==null?fe(p,g,v,b,C,R,T,S):X(d,p,b,C,R,T,S)},fe=(d,p,g,v,b,C,R,T)=>{let S,w;const{type:L,props:N,shapeFlag:F,transition:H,dirs:z}=d;if(S=d.el=o(d.type,C,N&&N.is,N),F&8?u(S,d.children):F&16&&j(d.children,S,null,v,b,C&&L!=="foreignObject",R,T),z&&Ot(d,null,v,"created"),N){for(const ee in N)ee!=="value"&&!br(ee)&&i(S,ee,null,N[ee],C,d.children,v,b,k);"value"in N&&i(S,"value",null,N.value),(w=N.onVnodeBeforeMount)&&We(w,v,d)}he(S,d,d.scopeId,R,v),z&&Ot(d,null,v,"beforeMount");const re=(!b||b&&!b.pendingBranch)&&H&&!H.persisted;re&&H.beforeEnter(S),r(S,p,g),((w=N&&N.onVnodeMounted)||re||z)&&Te(()=>{w&&We(w,v,d),re&&H.enter(S),z&&Ot(d,null,v,"mounted")},b)},he=(d,p,g,v,b)=>{if(g&&m(d,g),v)for(let C=0;C<v.length;C++)m(d,v[C]);if(b){let C=b.subTree;if(p===C){const R=b.vnode;he(d,R,R.scopeId,R.slotScopeIds,b.parent)}}},j=(d,p,g,v,b,C,R,T,S=0)=>{for(let w=S;w<d.length;w++){const L=d[w]=T?pt(d[w]):ze(d[w]);I(null,L,p,g,v,b,C,R,T)}},X=(d,p,g,v,b,C,R)=>{const T=p.el=d.el;let{patchFlag:S,dynamicChildren:w,dirs:L}=p;S|=d.patchFlag&16;const N=d.props||oe,F=p.props||oe;let H;g&&kt(g,!1),(H=F.onVnodeBeforeUpdate)&&We(H,g,p,d),L&&Ot(p,d,g,"beforeUpdate"),g&&kt(g,!0);const z=b&&p.type!=="foreignObject";if(w?J(d.dynamicChildren,w,T,g,v,z,C):R||Z(d,p,T,null,g,v,z,C,!1),S>0){if(S&16)pe(T,p,N,F,g,v,b);else if(S&2&&N.class!==F.class&&i(T,"class",null,F.class,b),S&4&&i(T,"style",N.style,F.style,b),S&8){const re=p.dynamicProps;for(let ee=0;ee<re.length;ee++){const de=re[ee],Le=N[de],Gt=F[de];(Gt!==Le||de==="value")&&i(T,de,Le,Gt,b,d.children,g,v,k)}}S&1&&d.children!==p.children&&u(T,p.children)}else!R&&w==null&&pe(T,p,N,F,g,v,b);((H=F.onVnodeUpdated)||L)&&Te(()=>{H&&We(H,g,p,d),L&&Ot(p,d,g,"updated")},v)},J=(d,p,g,v,b,C,R)=>{for(let T=0;T<p.length;T++){const S=d[T],w=p[T],L=S.el&&(S.type===Fe||!Lt(S,w)||S.shapeFlag&70)?f(S.el):g;I(S,w,L,null,v,b,C,R,!0)}},pe=(d,p,g,v,b,C,R)=>{if(g!==v){if(g!==oe)for(const T in g)!br(T)&&!(T in v)&&i(d,T,g[T],null,R,p.children,b,C,k);for(const T in v){if(br(T))continue;const S=v[T],w=g[T];S!==w&&T!=="value"&&i(d,T,w,S,R,p.children,b,C,k)}"value"in v&&i(d,"value",g.value,v.value)}},x=(d,p,g,v,b,C,R,T,S)=>{const w=p.el=d?d.el:a(""),L=p.anchor=d?d.anchor:a("");let{patchFlag:N,dynamicChildren:F,slotScopeIds:H}=p;H&&(T=T?T.concat(H):H),d==null?(r(w,g,v),r(L,g,v),j(p.children,g,L,b,C,R,T,S)):N>0&&N&64&&F&&d.dynamicChildren?(J(d.dynamicChildren,F,g,b,C,R,T),(p.key!=null||b&&p===b.subTree)&&Tl(d,p,!0)):Z(d,p,g,L,b,C,R,T,S)},ie=(d,p,g,v,b,C,R,T,S)=>{p.slotScopeIds=T,d==null?p.shapeFlag&512?b.ctx.activate(p,g,v,R,S):ve(p,g,v,b,C,R,S):ct(d,p,S)},ve=(d,p,g,v,b,C,R)=>{const T=d.component=wm(d,v,b);if(Qr(d)&&(T.ctx.renderer=K),Im(T),T.asyncDep){if(b&&b.registerDep(T,le),!d.el){const S=T.subTree=ae(He);E(null,S,p,g)}return}le(T,d,p,g,b,C,R)},ct=(d,p,g)=>{const v=p.component=d.component;if(xp(d,p,g))if(v.asyncDep&&!v.asyncResolved){ne(v,p,g);return}else v.next=p,Ap(v.update),v.update();else p.el=d.el,v.vnode=p},le=(d,p,g,v,b,C,R)=>{const T=()=>{if(d.isMounted){let{next:L,bu:N,u:F,parent:H,vnode:z}=d,re=L,ee;kt(d,!1),L?(L.el=z.el,ne(d,L,R)):L=z,N&&wr(N),(ee=L.props&&L.props.onVnodeBeforeUpdate)&&We(ee,H,L,z),kt(d,!0);const de=gs(d),Le=d.subTree;d.subTree=de,I(Le,de,f(Le.el),A(Le),d,b,C),L.el=de.el,re===null&&Np(d,de.el),F&&Te(F,b),(ee=L.props&&L.props.onVnodeUpdated)&&Te(()=>We(ee,H,L,z),b)}else{let L;const{el:N,props:F}=p,{bm:H,m:z,parent:re}=d,ee=Er(p);if(kt(d,!1),H&&wr(H),!ee&&(L=F&&F.onVnodeBeforeMount)&&We(L,re,p),kt(d,!0),N&&W){const de=()=>{d.subTree=gs(d),W(N,d.subTree,d,b,null)};ee?p.type.__asyncLoader().then(()=>!d.isUnmounted&&de()):de()}else{const de=d.subTree=gs(d);I(null,de,g,v,d,b,C),p.el=de.el}if(z&&Te(z,b),!ee&&(L=F&&F.onVnodeMounted)){const de=p;Te(()=>We(L,re,de),b)}(p.shapeFlag&256||re&&Er(re.vnode)&&re.vnode.shapeFlag&256)&&d.a&&Te(d.a,b),d.isMounted=!0,p=g=v=null}},S=d.effect=new Ei(T,()=>Di(w),d.scope),w=d.update=()=>S.run();w.id=d.uid,kt(d,!0),w()},ne=(d,p,g)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,sm(d,p.props,v,g),am(d,p.children,g),_n(),Ro(),vn()},Z=(d,p,g,v,b,C,R,T,S=!1)=>{const w=d&&d.children,L=d?d.shapeFlag:0,N=p.children,{patchFlag:F,shapeFlag:H}=p;if(F>0){if(F&128){Rt(w,N,g,v,b,C,R,T,S);return}else if(F&256){Ne(w,N,g,v,b,C,R,T,S);return}}H&8?(L&16&&k(w,b,C),N!==w&&u(g,N)):L&16?H&16?Rt(w,N,g,v,b,C,R,T,S):k(w,b,C,!0):(L&8&&u(g,""),H&16&&j(N,g,v,b,C,R,T,S))},Ne=(d,p,g,v,b,C,R,T,S)=>{d=d||rn,p=p||rn;const w=d.length,L=p.length,N=Math.min(w,L);let F;for(F=0;F<N;F++){const H=p[F]=S?pt(p[F]):ze(p[F]);I(d[F],H,g,null,b,C,R,T,S)}w>L?k(d,b,C,!0,!1,N):j(p,g,v,b,C,R,T,S,N)},Rt=(d,p,g,v,b,C,R,T,S)=>{let w=0;const L=p.length;let N=d.length-1,F=L-1;for(;w<=N&&w<=F;){const H=d[w],z=p[w]=S?pt(p[w]):ze(p[w]);if(Lt(H,z))I(H,z,g,null,b,C,R,T,S);else break;w++}for(;w<=N&&w<=F;){const H=d[N],z=p[F]=S?pt(p[F]):ze(p[F]);if(Lt(H,z))I(H,z,g,null,b,C,R,T,S);else break;N--,F--}if(w>N){if(w<=F){const H=F+1,z=H<L?p[H].el:v;for(;w<=F;)I(null,p[w]=S?pt(p[w]):ze(p[w]),g,z,b,C,R,T,S),w++}}else if(w>F)for(;w<=N;)Ee(d[w],b,C,!0),w++;else{const H=w,z=w,re=new Map;for(w=z;w<=F;w++){const Se=p[w]=S?pt(p[w]):ze(p[w]);Se.key!=null&&re.set(Se.key,w)}let ee,de=0;const Le=F-z+1;let Gt=!1,zi=0;const bn=new Array(Le);for(w=0;w<Le;w++)bn[w]=0;for(w=H;w<=N;w++){const Se=d[w];if(de>=Le){Ee(Se,b,C,!0);continue}let Ve;if(Se.key!=null)Ve=re.get(Se.key);else for(ee=z;ee<=F;ee++)if(bn[ee-z]===0&&Lt(Se,p[ee])){Ve=ee;break}Ve===void 0?Ee(Se,b,C,!0):(bn[Ve-z]=w+1,Ve>=zi?zi=Ve:Gt=!0,I(Se,p[Ve],g,null,b,C,R,T,S),de++)}const Ki=Gt?dm(bn):rn;for(ee=Ki.length-1,w=Le-1;w>=0;w--){const Se=z+w,Ve=p[Se],qi=Se+1<L?p[Se+1].el:v;bn[w]===0?I(null,Ve,g,qi,b,C,R,T,S):Gt&&(ee<0||w!==Ki[ee]?Me(Ve,g,qi,2):ee--)}}},Me=(d,p,g,v,b=null)=>{const{el:C,type:R,transition:T,children:S,shapeFlag:w}=d;if(w&6){Me(d.component.subTree,p,g,v);return}if(w&128){d.suspense.move(p,g,v);return}if(w&64){R.move(d,p,g,K);return}if(R===Fe){r(C,p,g);for(let N=0;N<S.length;N++)Me(S[N],p,g,v);r(d.anchor,p,g);return}if(R===ys){O(d,p,g);return}if(v!==2&&w&1&&T)if(v===0)T.beforeEnter(C),r(C,p,g),Te(()=>T.enter(C),b);else{const{leave:N,delayLeave:F,afterLeave:H}=T,z=()=>r(C,p,g),re=()=>{N(C,()=>{z(),H&&H()})};F?F(C,z,re):re()}else r(C,p,g)},Ee=(d,p,g,v=!1,b=!1)=>{const{type:C,props:R,ref:T,children:S,dynamicChildren:w,shapeFlag:L,patchFlag:N,dirs:F}=d;if(T!=null&&Gs(T,null,g,d,!0),L&256){p.ctx.deactivate(d);return}const H=L&1&&F,z=!Er(d);let re;if(z&&(re=R&&R.onVnodeBeforeUnmount)&&We(re,p,d),L&6)y(d.component,g,v);else{if(L&128){d.suspense.unmount(g,v);return}H&&Ot(d,null,p,"beforeUnmount"),L&64?d.type.remove(d,p,g,b,K,v):w&&(C!==Fe||N>0&&N&64)?k(w,p,g,!1,!0):(C===Fe&&N&384||!b&&L&16)&&k(S,p,g),v&&qt(d)}(z&&(re=R&&R.onVnodeUnmounted)||H)&&Te(()=>{re&&We(re,p,d),H&&Ot(d,null,p,"unmounted")},g)},qt=d=>{const{type:p,el:g,anchor:v,transition:b}=d;if(p===Fe){ir(g,v);return}if(p===ys){B(d);return}const C=()=>{s(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(d.shapeFlag&1&&b&&!b.persisted){const{leave:R,delayLeave:T}=b,S=()=>R(g,C);T?T(d.el,C,S):S()}else C()},ir=(d,p)=>{let g;for(;d!==p;)g=h(d),s(d),d=g;s(p)},y=(d,p,g)=>{const{bum:v,scope:b,update:C,subTree:R,um:T}=d;v&&wr(v),b.stop(),C&&(C.active=!1,Ee(R,d,p,g)),T&&Te(T,p),Te(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},k=(d,p,g,v=!1,b=!1,C=0)=>{for(let R=C;R<d.length;R++)Ee(d[R],p,g,v,b)},A=d=>d.shapeFlag&6?A(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),M=(d,p,g)=>{d==null?p._vnode&&Ee(p._vnode,null,null,!0):I(p._vnode||null,d,p,null,null,null,g),Ro(),sl(),p._vnode=d},K={p:I,um:Ee,m:Me,r:qt,mt:ve,mc:j,pc:Z,pbc:J,n:A,o:t};let ue,W;return e&&([ue,W]=e(K)),{render:M,hydrate:ue,createApp:lm(M,ue)}}function kt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Tl(t,e,n=!1){const r=t.children,s=e.children;if(U(r)&&U(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=pt(s[i]),a.el=o.el),n||Tl(o,a)),a.type===es&&(a.el=o.el)}}function dm(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const hm=t=>t.__isTeleport,Fe=Symbol(void 0),es=Symbol(void 0),He=Symbol(void 0),ys=Symbol(void 0),Pn=[];let Ue=null;function Js(t=!1){Pn.push(Ue=t?null:[])}function pm(){Pn.pop(),Ue=Pn[Pn.length-1]||null}let zn=1;function Uo(t){zn+=t}function Cl(t){return t.dynamicChildren=zn>0?Ue||rn:null,pm(),zn>0&&Ue&&Ue.push(t),t}function Bo(t,e,n,r,s,i){return Cl(Ui(t,e,n,r,s,i,!0))}function mm(t,e,n,r,s){return Cl(ae(t,e,n,r,s,!0))}function Ys(t){return t?t.__v_isVNode===!0:!1}function Lt(t,e){return t.type===e.type&&t.key===e.key}const ts="__vInternal",Sl=({key:t})=>t!=null?t:null,Tr=({ref:t,ref_key:e,ref_for:n})=>t!=null?me(t)||_e(t)||V(t)?{i:Ae,r:t,k:e,f:!!n}:t:null;function Ui(t,e=null,n=null,r=0,s=null,i=t===Fe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Sl(e),ref:e&&Tr(e),scopeId:al,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ae};return a?(Bi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=me(n)?8:16),zn>0&&!o&&Ue&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ue.push(c),c}const ae=gm;function gm(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===gl)&&(t=He),Ys(t)){const a=St(t,e,!0);return n&&Bi(a,n),zn>0&&!i&&Ue&&(a.shapeFlag&6?Ue[Ue.indexOf(t)]=a:Ue.push(a)),a.patchFlag|=-2,a}if(Am(t)&&(t=t.__vccOpts),e){e=_m(e);let{class:a,style:c}=e;a&&!me(a)&&(e.class=_i(a)),ce(c)&&(Gc(c)&&!U(c)&&(c=ye({},c)),e.style=gi(c))}const o=me(t)?1:Mp(t)?128:hm(t)?64:ce(t)?4:V(t)?2:0;return Ui(t,e,n,r,s,o,i,!0)}function _m(t){return t?Gc(t)||ts in t?ye({},t):t:null}function St(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Al(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Sl(a),ref:e&&e.ref?n&&s?U(s)?s.concat(Tr(e)):[s,Tr(e)]:Tr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&St(t.ssContent),ssFallback:t.ssFallback&&St(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Cr(t=" ",e=0){return ae(es,null,t,e)}function vm(t="",e=!1){return e?(Js(),mm(He,null,t)):ae(He,null,t)}function ze(t){return t==null||typeof t=="boolean"?ae(He):U(t)?ae(Fe,null,t.slice()):typeof t=="object"?pt(t):ae(es,null,String(t))}function pt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:St(t)}function Bi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Bi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ts in e)?e._ctx=Ae:s===3&&Ae&&(Ae.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:Ae},n=32):(e=String(e),r&64?(n=16,e=[Cr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Al(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=_i([e.class,r.class]));else if(s==="style")e.style=gi([e.style,r.style]);else if(zr(s)){const i=e[s],o=r[s];o&&i!==o&&!(U(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function We(t,e,n,r=null){De(t,e,7,[n,r])}const ym=El();let bm=0;function wm(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ym,i={uid:bm++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Nc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yl(r,s),emitsOptions:ol(r,s),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:r.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=kp.bind(null,i),t.ce&&t.ce(i),i}let ge=null;const Hi=()=>ge||Ae,fn=t=>{ge=t,t.scope.on()},Vt=()=>{ge&&ge.scope.off(),ge=null};function Rl(t){return t.vnode.shapeFlag&4}let Kn=!1;function Im(t,e=!1){Kn=e;const{props:n,children:r}=t.vnode,s=Rl(t);rm(t,n,s,e),om(t,r);const i=s?Em(t,e):void 0;return Kn=!1,i}function Em(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ri(new Proxy(t.ctx,Xp));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Cm(t):null;fn(t),_n();const i=Et(r,t,0,[t.props,s]);if(vn(),Vt(),Pc(i)){if(i.then(Vt,Vt),e)return i.then(o=>{Ho(t,o,e)}).catch(o=>{Jr(o,t,0)});t.asyncDep=i}else Ho(t,i,e)}else Ol(t,e)}function Ho(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=Zc(e)),Ol(t,n)}let jo;function Ol(t,e,n){const r=t.type;if(!t.render){if(!e&&jo&&!r.render){const s=r.template||Fi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ye(ye({isCustomElement:i,delimiters:a},o),c);r.render=jo(s,l)}}t.render=r.render||Be}fn(t),_n(),Qp(t),vn(),Vt()}function Tm(t){return new Proxy(t.attrs,{get(e,n){return Oe(t,"get","$attrs"),e[n]}})}function Cm(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Tm(t))},slots:t.slots,emit:t.emit,expose:e}}function ns(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Zc(Ri(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in kn)return kn[n](t)},has(e,n){return n in e||n in kn}}))}function Sm(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function Am(t){return V(t)&&"__vccOpts"in t}const te=(t,e)=>Tp(t,e,Kn);function rs(t,e,n){const r=arguments.length;return r===2?ce(e)&&!U(e)?Ys(e)?ae(t,null,[e]):ae(t,e):ae(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ys(n)&&(n=[n]),ae(t,e,n))}const Rm=Symbol(""),Om=()=>Ce(Rm),km="3.2.45",Pm="http://www.w3.org/2000/svg",Ft=typeof document<"u"?document:null,Vo=Ft&&Ft.createElement("template"),Dm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Ft.createElementNS(Pm,t):Ft.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ft.createTextNode(t),createComment:t=>Ft.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ft.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Vo.innerHTML=r?`<svg>${t}</svg>`:t;const a=Vo.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function xm(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Nm(t,e,n){const r=t.style,s=me(n);if(n&&!s){for(const i in n)Xs(r,i,n[i]);if(e&&!me(e))for(const i in e)n[i]==null&&Xs(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Wo=/\s*!important$/;function Xs(t,e,n){if(U(n))n.forEach(r=>Xs(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Mm(t,e);Wo.test(n)?t.setProperty(gn(r),n.replace(Wo,""),"important"):t[r]=n}}const zo=["Webkit","Moz","ms"],bs={};function Mm(t,e){const n=bs[e];if(n)return n;let r=Je(e);if(r!=="filter"&&r in t)return bs[e]=r;r=rr(r);for(let s=0;s<zo.length;s++){const i=zo[s]+r;if(i in t)return bs[e]=i}return e}const Ko="http://www.w3.org/1999/xlink";function Lm(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ko,e.slice(6,e.length)):t.setAttributeNS(Ko,e,n);else{const i=$h(e);n==null||i&&!Rc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Fm(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Rc(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Qt(t,e,n,r){t.addEventListener(e,n,r)}function $m(t,e,n,r){t.removeEventListener(e,n,r)}function Um(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Bm(e);if(r){const l=i[e]=Vm(r,s);Qt(t,a,l,c)}else o&&($m(t,a,o,c),i[e]=void 0)}}const qo=/(?:Once|Passive|Capture)$/;function Bm(t){let e;if(qo.test(t)){e={};let r;for(;r=t.match(qo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):gn(t.slice(2)),e]}let ws=0;const Hm=Promise.resolve(),jm=()=>ws||(Hm.then(()=>ws=0),ws=Date.now());function Vm(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;De(Wm(r,n.value),e,5,[r])};return n.value=t,n.attached=jm(),n}function Wm(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Go=/^on[a-z]/,zm=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?xm(t,r,s):e==="style"?Nm(t,n,r):zr(e)?vi(e)||Um(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Km(t,e,r,s))?Fm(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Lm(t,e,r,s))};function Km(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Go.test(e)&&V(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Go.test(e)&&me(n)?!1:e in t}const ft="transition",wn="animation",kl=(t,{slots:e})=>rs(ll,qm(t),e);kl.displayName="Transition";const Pl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};kl.props=ye({},ll.props,Pl);const Pt=(t,e=[])=>{U(t)?t.forEach(n=>n(...e)):t&&t(...e)},Jo=t=>t?U(t)?t.some(e=>e.length>1):t.length>1:!1;function qm(t){const e={};for(const x in t)x in Pl||(e[x]=t[x]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,_=Gm(s),I=_&&_[0],D=_&&_[1],{onBeforeEnter:E,onEnter:P,onEnterCancelled:O,onLeave:B,onLeaveCancelled:Y,onBeforeAppear:fe=E,onAppear:he=P,onAppearCancelled:j=O}=e,X=(x,ie,ve)=>{Dt(x,ie?u:a),Dt(x,ie?l:o),ve&&ve()},J=(x,ie)=>{x._isLeaving=!1,Dt(x,f),Dt(x,m),Dt(x,h),ie&&ie()},pe=x=>(ie,ve)=>{const ct=x?he:P,le=()=>X(ie,x,ve);Pt(ct,[ie,le]),Yo(()=>{Dt(ie,x?c:i),dt(ie,x?u:a),Jo(ct)||Xo(ie,r,I,le)})};return ye(e,{onBeforeEnter(x){Pt(E,[x]),dt(x,i),dt(x,o)},onBeforeAppear(x){Pt(fe,[x]),dt(x,c),dt(x,l)},onEnter:pe(!1),onAppear:pe(!0),onLeave(x,ie){x._isLeaving=!0;const ve=()=>J(x,ie);dt(x,f),Xm(),dt(x,h),Yo(()=>{!x._isLeaving||(Dt(x,f),dt(x,m),Jo(B)||Xo(x,r,D,ve))}),Pt(B,[x,ve])},onEnterCancelled(x){X(x,!1),Pt(O,[x])},onAppearCancelled(x){X(x,!0),Pt(j,[x])},onLeaveCancelled(x){J(x),Pt(Y,[x])}})}function Gm(t){if(t==null)return null;if(ce(t))return[Is(t.enter),Is(t.leave)];{const e=Is(t);return[e,e]}}function Is(t){return Hn(t)}function dt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Dt(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Yo(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Jm=0;function Xo(t,e,n,r){const s=t._endId=++Jm,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Ym(t,e);if(!o)return r();const l=o+"end";let u=0;const f=()=>{t.removeEventListener(l,h),i()},h=m=>{m.target===t&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),t.addEventListener(l,h)}function Ym(t,e){const n=window.getComputedStyle(t),r=_=>(n[_]||"").split(", "),s=r(`${ft}Delay`),i=r(`${ft}Duration`),o=Qo(s,i),a=r(`${wn}Delay`),c=r(`${wn}Duration`),l=Qo(a,c);let u=null,f=0,h=0;e===ft?o>0&&(u=ft,f=o,h=i.length):e===wn?l>0&&(u=wn,f=l,h=c.length):(f=Math.max(o,l),u=f>0?o>l?ft:wn:null,h=u?u===ft?i.length:c.length:0);const m=u===ft&&/\b(transform|all)(,|$)/.test(r(`${ft}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:m}}function Qo(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Zo(n)+Zo(t[r])))}function Zo(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Xm(){return document.body.offsetHeight}const ea=t=>{const e=t.props["onUpdate:modelValue"]||!1;return U(e)?n=>wr(e,n):e};function Qm(t){t.target.composing=!0}function ta(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ov={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=ea(s);const i=r||s.props&&s.props.type==="number";Qt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Hn(a)),t._assign(a)}),n&&Qt(t,"change",()=>{t.value=t.value.trim()}),e||(Qt(t,"compositionstart",Qm),Qt(t,"compositionend",ta),Qt(t,"change",ta))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=ea(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Hn(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},kv={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):In(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),In(t,!0),r.enter(t)):r.leave(t,()=>{In(t,!1)}):In(t,e))},beforeUnmount(t,{value:e}){In(t,e)}};function In(t,e){t.style.display=e?t._vod:"none"}const Zm=ye({patchProp:zm},Dm);let na;function eg(){return na||(na=um(Zm))}const tg=(...t)=>{const e=eg().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ng(r);if(!s)return;const i=e._component;!V(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ng(t){return me(t)?document.querySelector(t):t}const rg=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},sg={name:"app",data(){return{isLoggedIn:!1}},components:{},metaInfo:{title:{}.VUE_APP_ENV},beforeMount(){let t=Ls();gc(t,e=>{e?this.isLoggedIn=!0:this.isLoggedIn=!1})},methods:{handleSignOut(){let t=Ls();bd(t).then(()=>{this.$router.push("/")})}}},ig={id:"nav"};function og(t,e,n,r,s,i){const o=Po("router-link"),a=Po("router-view");return Js(),Bo(Fe,null,[Ui("div",ig,[ae(o,{to:"/"},{default:Ir(()=>[Cr(" Home ")]),_:1}),ae(o,{to:"/register"},{default:Ir(()=>[Cr(" Register ")]),_:1}),ae(o,{to:"/signin"},{default:Ir(()=>[Cr(" Login ")]),_:1}),s.isLoggedIn?(Js(),Bo("button",{key:0,onClick:e[0]||(e[0]=(...c)=>i.handleSignOut&&i.handleSignOut(...c))}," Sign Out")):vm("",!0)]),ae(a)],64)}const ag=rg(sg,[["render",og]]),cg="modulepreload",lg=function(t){return"/"+t},ra={},Sr=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=lg(i),i in ra)return;ra[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const f=s[u];if(f.href===i&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":cg,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};async function ug(){(await Sr(()=>import("./webfontloader.b777d690.js").then(e=>e.w),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}function fg(t,e,n){const r=e.length-1;if(r<0)return t===void 0?n:t;for(let s=0;s<r;s++){if(t==null)return n;t=t[e[s]]}return t==null||t[e[r]]===void 0?n:t[e[r]]}function dg(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(r=>dg(t[r],e[r]))}function sa(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),fg(t,e.split("."),n))}function hg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,r)=>e+r)}function Pv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function ia(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}const Dv=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function xv(t){return t==null?[]:Array.isArray(t)?t:[t]}function pg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function mg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let r=0;for(;r<t.length;)n.push(t.substr(r,e)),r+=e;return n}function st(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const s in t)r[s]=t[s];for(const s in e){const i=t[s],o=e[s];if(ia(i)&&ia(o)){r[s]=st(i,o,n);continue}if(Array.isArray(i)&&Array.isArray(o)&&n){r[s]=n(i,o);continue}r[s]=o}return r}function ss(){return(arguments.length>0&&arguments[0]!==void 0?arguments[0]:"").replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase()}function Es(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>Es(t,n)).flat(1);if(Array.isArray(e.children))return e.children.map(n=>Es(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return Es(t,e.component.subTree).flat(1)}return[]}function Nv(t){const e=ot({}),n=te(t);return Xr(()=>{for(const r in n.value)e[r]=n.value[r]},{flush:"sync"}),el(e)}function Mv(t,e){return t.includes(e)}function Lv(t,e){return e="on"+rr(e),!!(t[e]||t[`${e}Once`]||t[`${e}Capture`]||t[`${e}OnceCapture`]||t[`${e}CaptureOnce`])}function Dl(t,e,n){if(n&&(e={__isVue:!0,$parent:n,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return;e.$_alreadyWarned.push(t)}return`[Vuetify] ${t}`+(e?vg(e):"")}function Dn(t,e,n){const r=Dl(t,e,n);r!=null&&console.warn(r)}function oa(t,e,n){const r=Dl(t,e,n);r!=null&&console.error(r)}const gg=/(?:^|[-_])(\w)/g,_g=t=>t.replace(gg,e=>e.toUpperCase()).replace(/[-_]/g,"");function Ts(t,e){if(t.$root===t)return"<Root>";const n=typeof t=="function"&&t.cid!=null?t.options:t.__isVue?t.$options||t.constructor.options:t||{};let r=n.name||n._componentTag;const s=n.__file;if(!r&&s){const i=s.match(/([^/\\]+)\.vue$/);r=i==null?void 0:i[1]}return(r?`<${_g(r)}>`:"<Anonymous>")+(s&&e!==!1?` at ${s}`:"")}function vg(t){if(t.__isVue&&t.$parent){const e=[];let n=0;for(;t;){if(e.length>0){const r=e[e.length-1];if(r.constructor===t.constructor){n++,t=t.$parent;continue}else n>0&&(e[e.length-1]=[r,n],n=0)}e.push(t),t=t.$parent}return`

found in

`+e.map((r,s)=>`${s===0?"---> ":" ".repeat(5+s*2)}${Array.isArray(r)?`${Ts(r[0])}... (${r[1]} recursive calls)`:Ts(r)}`).join(`
`)}else return`

(found in ${Ts(t)})`}const yg=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],bg=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,wg=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],Ig=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function xl(t){const e=Array(3),n=bg,r=yg;for(let s=0;s<3;++s)e[s]=Math.round(pg(n(r[s][0]*t[0]+r[s][1]*t[1]+r[s][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function ji(t){let{r:e,g:n,b:r}=t;const s=[0,0,0],i=Ig,o=wg;e=i(e/255),n=i(n/255),r=i(r/255);for(let a=0;a<3;++a)s[a]=o[a][0]*e+o[a][1]*n+o[a][2]*r;return s}const $r=.20689655172413793,Eg=t=>t>$r**3?Math.cbrt(t):t/(3*$r**2)+4/29,Tg=t=>t>$r?t**3:3*$r**2*(t-4/29);function Nl(t){const e=Eg,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function Ml(t){const e=Tg,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}function Fv(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function $t(t){if(typeof t=="number")return(isNaN(t)||t<0||t>16777215)&&Dn(`'${t}' is not a valid hex color`),{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;[3,4].includes(e.length)?e=e.split("").map(r=>r+r).join(""):[6,8].includes(e.length)||Dn(`'${t}' is not a valid hex(a) color`);const n=parseInt(e,16);return(isNaN(n)||n<0||n>4294967295)&&Dn(`'${t}' is not a valid hex(a) color`),Sg(e)}else throw new TypeError(`Colors can only be numbers or strings, recieved ${t==null?t:t.constructor.name} instead`)}function hr(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function Cg(t){let{r:e,g:n,b:r,a:s}=t;return`#${[hr(e),hr(n),hr(r),s!==void 0?hr(Math.round(s*255)):"FF"].join("")}`}function Sg(t){let[e,n,r,s]=mg(t,2).map(i=>parseInt(i,16));return s=s===void 0?s:Math.round(s/255*100)/100,{r:e,g:n,b:r,a:s}}function Ag(t,e){const n=Nl(ji(t));return n[0]=n[0]+e*10,xl(Ml(n))}function Rg(t,e){const n=Nl(ji(t));return n[0]=n[0]-e*10,xl(Ml(n))}function Og(t){const e=$t(t);return ji(e)[1]}function sr(t,e){const n=Hi();if(!n)throw new Error(`[Vuetify] ${t} ${e||"must be called from inside a setup function"}`);return n}function $v(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=sr(t).type;return ss((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let Ll=0,Ar=new WeakMap;function Fl(){const t=sr("getUid");if(Ar.has(t))return Ar.get(t);{const e=Ll++;return Ar.set(t,e),e}}Fl.reset=()=>{Ll=0,Ar=new WeakMap};function kg(t){const{provides:e}=sr("injectSelf");if(e&&t in e)return e[t]}function $l(t,e){let n;Tt(t,r=>{if(r&&!n)n=Mc(),n.run(e);else if(!r){var s;(s=n)==null||s.stop(),n=void 0}},{immediate:!0}),qh(()=>{var r;(r=n)==null||r.stop()})}function Vi(t,e){return n=>Object.keys(t).reduce((r,s)=>{const o=typeof t[s]=="object"&&t[s]!=null&&!Array.isArray(t[s])?t[s]:{type:t[s]};return n&&s in n?r[s]={...o,default:n[s]}:r[s]=o,e&&!r[s].source&&(r[s].source=e),r},{})}function Pg(t,e){var n,r;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((r=t.props)==null?void 0:r[ss(e)])<"u"}const yn=function(e){var n,r;return e._setup=(n=e._setup)!=null?n:e.setup,e.name?(e._setup&&(e.props=(r=e.props)!=null?r:{},e.props=Vi(e.props,ss(e.name))(),e.props._as=String,e.setup=function(i,o){const a=Hi(),c=Ul(),l=Xc(),u=Kc({...G(i)});Xr(()=>{var _,I,D;const h=c.value.global,m=c.value[(_=i._as)!=null?_:e.name];if(m){const E=Object.entries(m).filter(P=>{let[O]=P;return O.startsWith(O[0].toUpperCase())});E.length&&(l.value=Object.fromEntries(E))}for(const E of Object.keys(i)){let P=i[E];Pg(a.vnode,E)||(P=(D=(I=m==null?void 0:m[E])!=null?I:h==null?void 0:h[E])!=null?D:i[E]),u[E]!==P&&(u[E]=P)}});const f=e._setup(u,o);return $l(l,()=>{var m;var h;Ng(st((m=(h=kg(qn))==null?void 0:h.value)!=null?m:{},l.value))}),f}),e):(Dn("The component is missing an explicit name, unable to generate default prop value"),e)};function Uv(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?yn:Ni)(e)}const Ye=typeof window<"u",Bv=Ye&&"IntersectionObserver"in window,Dg=Ye&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);Ye&&typeof CSS<"u"&&CSS.supports("selector(:focus-visible)");const qn=Symbol.for("vuetify:defaults");function xg(t){return Re(t!=null?t:{})}function Ul(){const t=Ce(qn);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function Ng(t,e){const n=Ul(),r=Re(t),s=te(()=>{const i=tt(e==null?void 0:e.scoped),o=tt(e==null?void 0:e.reset),a=tt(e==null?void 0:e.root);let c=st(r.value,{prev:n.value});if(i)return c;if(o||a){const l=Number(o||1/0);for(let u=0;u<=l&&c.prev;u++)c=c.prev;return c}return st(c.prev,c)});return cn(qn,s),s}const aa=Symbol.for("vuetify:display"),ca={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},Mg=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ca;return st(ca,t)};function la(t){return Ye&&!t?window.innerWidth:0}function ua(t){return Ye&&!t?window.innerHeight:0}function Lg(){const t=Ye?window.navigator.userAgent:"ssr";function e(_){return Boolean(t.match(_))}const n=e(/android/i),r=e(/iphone|ipad|ipod/i),s=e(/cordova/i),i=e(/electron/i),o=e(/chrome/i),a=e(/edge/i),c=e(/firefox/i),l=e(/opera/i),u=e(/win/i),f=e(/mac/i),h=e(/linux/i),m=e(/ssr/i);return{android:n,ios:r,cordova:s,electron:i,chrome:o,edge:a,firefox:c,opera:l,win:u,mac:f,linux:h,touch:Dg,ssr:m}}function Fg(t,e){const{thresholds:n,mobileBreakpoint:r}=Mg(t),s=Re(ua(e)),i=Lg(),o=ot({}),a=Re(la(e));function c(){s.value=ua(),a.value=la()}return Xr(()=>{const l=a.value<n.sm,u=a.value<n.md&&!l,f=a.value<n.lg&&!(u||l),h=a.value<n.xl&&!(f||u||l),m=a.value<n.xxl&&!(h||f||u||l),_=a.value>=n.xxl,I=l?"xs":u?"sm":f?"md":h?"lg":m?"xl":"xxl",D=typeof r=="number"?r:n[r],E=i.ssr?i.android||i.ios||i.opera:a.value<D;o.xs=l,o.sm=u,o.md=f,o.lg=h,o.xl=m,o.xxl=_,o.smAndUp=!l,o.mdAndUp=!(l||u),o.lgAndUp=!(l||u||f),o.xlAndUp=!(l||u||f||h),o.smAndDown=!(f||h||m||_),o.mdAndDown=!(h||m||_),o.lgAndDown=!(m||_),o.xlAndDown=!_,o.name=I,o.height=s.value,o.width=a.value,o.mobile=E,o.mobileBreakpoint=r,o.platform=i,o.thresholds=n}),Ye&&window.addEventListener("resize",c,{passive:!0}),{...el(o),update:c,ssr:!!e}}const $g={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},Ug={component:t=>rs(Bl,{...t,class:"mdi"})},Bg=[String,Function,Object],Qs=Symbol.for("vuetify:icons"),is=Vi({icon:{type:Bg},tag:{type:String,required:!0}},"icon"),fa=yn({name:"VComponentIcon",props:is(),setup(t,e){let{slots:n}=e;return()=>{var r;return ae(t.tag,null,{default:()=>[t.icon?ae(t.icon,null,null):(r=n.default)==null?void 0:r.call(n)]})}}}),Hg=yn({name:"VSvgIcon",inheritAttrs:!1,props:is(),setup(t,e){let{attrs:n}=e;return()=>ae(t.tag,Al(n,{style:null}),{default:()=>[ae("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[ae("path",{d:t.icon},null)])]})}});yn({name:"VLigatureIcon",props:is(),setup(t){return()=>ae(t.tag,null,{default:()=>[t.icon]})}});const Bl=yn({name:"VClassIcon",props:is(),setup(t){return()=>ae(t.tag,{class:t.icon},null)}}),jg={svg:{component:Hg},class:{component:Bl}};function Vg(t){return st({defaultSet:"mdi",sets:{...jg,mdi:Ug},aliases:$g},t)}const Hv=t=>{const e=Ce(Qs);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:te(()=>{const r=_e(t)?t.value:t.icon;if(!r)return{component:fa};let s=r;if(typeof s=="string"&&(s=s.trim(),s.startsWith("$"))){var i;s=(i=e.aliases)==null?void 0:i[s.slice(1)]}if(!s)throw new Error(`Could not find aliased icon "${r}"`);if(typeof s!="string")return{component:fa,icon:s};const o=Object.keys(e.sets).find(l=>typeof s=="string"&&s.startsWith(`${l}:`)),a=o?s.slice(o.length+1):s;return{component:e.sets[o!=null?o:e.defaultSet].component,icon:a}})}};function Wg(t,e,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:f=>f,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:f=>f;const i=sr("useProxiedModel"),o=Re(t[e]!==void 0?t[e]:n),a=ss(e),l=te(a!==e?()=>{var f,h,m,_;return t[e],!!(((f=i.vnode.props)!=null&&f.hasOwnProperty(e)||(h=i.vnode.props)!=null&&h.hasOwnProperty(a))&&((m=i.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${e}`)||(_=i.vnode.props)!=null&&_.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var f,h;return t[e],!!((f=i.vnode.props)!=null&&f.hasOwnProperty(e)&&(h=i.vnode.props)!=null&&h.hasOwnProperty(`onUpdate:${e}`))});$l(()=>!l.value,()=>{Tt(()=>t[e],f=>{o.value=f})});const u=te({get(){return r(l.value?t[e]:o.value)},set(f){const h=s(f);(l.value?t[e]:o.value)===h||r(l.value?t[e]:o.value)===f||(o.value=h,i==null||i.emit(`update:${e}`,h))}});return Object.defineProperty(u,"externalValue",{get:()=>l.value?t[e]:o.value}),u}const zg={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Page {0}, Current Page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}}},da="$vuetify.",ha=(t,e)=>t.replace(/\{(\d+)\}/g,(n,r)=>String(e[+r])),Hl=(t,e,n)=>function(r){for(var s=arguments.length,i=new Array(s>1?s-1:0),o=1;o<s;o++)i[o-1]=arguments[o];if(!r.startsWith(da))return ha(r,i);const a=r.replace(da,""),c=t.value&&n.value[t.value],l=e.value&&n.value[e.value];let u=sa(c,a,null);return u||(Dn(`Translation key "${r}" not found in "${t.value}", trying fallback locale`),u=sa(l,a,null)),u||(oa(`Translation key "${r}" not found in fallback`),u=r),typeof u!="string"&&(oa(`Translation key "${r}" has a non-string value`),u=r),ha(u,i)};function jl(t,e){return(n,r)=>new Intl.NumberFormat([t.value,e.value],r).format(n)}function Cs(t,e,n){var s,i;const r=Wg(t,e,(s=t[e])!=null?s:n.value);return r.value=(i=t[e])!=null?i:n.value,Tt(n,o=>{t[e]==null&&(r.value=n.value)}),r}function Vl(t){return e=>{const n=Cs(e,"locale",t.current),r=Cs(e,"fallback",t.fallback),s=Cs(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:r,messages:s,t:Hl(n,r,s),n:jl(n,r),provide:Vl({current:n,fallback:r,messages:s})}}}function Kg(t){var s,i;const e=Re((s=t==null?void 0:t.locale)!=null?s:"en"),n=Re((i=t==null?void 0:t.fallback)!=null?i:"en"),r=Re({en:zg,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:r,t:Hl(e,n,r),n:jl(e,n),provide:Vl({current:e,fallback:n,messages:r})}}const qg={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!1,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},Zs=Symbol.for("vuetify:locale");function Gg(t){return t.name!=null}function Jg(t){const e=t!=null&&t.adapter&&Gg(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:Kg(t),n=Yg(e,t);return{...e,...n}}function Yg(t,e){var s;const n=Re((s=e==null?void 0:e.rtl)!=null?s:qg),r=te(()=>{var i;return(i=n.value[t.current.value])!=null?i:!1});return{isRtl:r,rtl:n,rtlClasses:te(()=>`v-locale--is-${r.value?"rtl":"ltr"}`)}}function jv(){const t=Ce(Zs);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:t.isRtl,rtlClasses:t.rtlClasses}}const Jt=2.4,pa=.2126729,ma=.7151522,ga=.072175,Xg=.55,Qg=.58,Zg=.57,e_=.62,pr=.03,_a=1.45,t_=5e-4,n_=1.25,r_=1.25,va=.078,ya=12.82051282051282,mr=.06,ba=.001;function wa(t,e){const n=(t.r/255)**Jt,r=(t.g/255)**Jt,s=(t.b/255)**Jt,i=(e.r/255)**Jt,o=(e.g/255)**Jt,a=(e.b/255)**Jt;let c=n*pa+r*ma+s*ga,l=i*pa+o*ma+a*ga;if(c<=pr&&(c+=(pr-c)**_a),l<=pr&&(l+=(pr-l)**_a),Math.abs(l-c)<t_)return 0;let u;if(l>c){const f=(l**Xg-c**Qg)*n_;u=f<ba?0:f<va?f-f*ya*mr:f-mr}else{const f=(l**e_-c**Zg)*r_;u=f>-ba?0:f>-va?f-f*ya*mr:f+mr}return u*100}const Ur=Symbol.for("vuetify:theme"),Vv=Vi({theme:String},"theme"),En={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}};function s_(){var s;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:En;if(!t)return{...En,isDisabled:!0};const e={};for(const[i,o]of Object.entries((s=t.themes)!=null?s:{})){var n,r;const a=o.dark||i==="dark"?(n=En.themes)==null?void 0:n.dark:(r=En.themes)==null?void 0:r.light;e[i]=st(a,o)}return st(En,{...t,themes:e})}function i_(t){const e=ot(s_(t)),n=Re(e.defaultTheme),r=Re(e.themes),s=te(()=>{const l={};for(const[u,f]of Object.entries(r.value)){const h=l[u]={...f,colors:{...f.colors}};if(e.variations)for(const m of e.variations.colors){const _=h.colors[m];if(!!_)for(const I of["lighten","darken"]){const D=I==="lighten"?Ag:Rg;for(const E of hg(e.variations[I],1))h.colors[`${m}-${I}-${E}`]=Cg(D($t(_),E))}}for(const m of Object.keys(h.colors)){if(/^on-[a-z]/.test(m)||h.colors[`on-${m}`])continue;const _=`on-${m}`,I=$t(h.colors[m]),D=Math.abs(wa($t(0),I)),E=Math.abs(wa($t(16777215),I));h.colors[_]=E>Math.min(D,50)?"#fff":"#000"}}return l}),i=te(()=>s.value[n.value]),o=te(()=>{const l=[];i.value.dark&&Yt(l,":root",["color-scheme: dark"]);for(const[m,_]of Object.entries(s.value)){const{variables:I,dark:D}=_;Yt(l,`.v-theme--${m}`,[`color-scheme: ${D?"dark":"normal"}`,...o_(_),...Object.keys(I).map(E=>{const P=I[E],O=typeof P=="string"&&P.startsWith("#")?$t(P):void 0,B=O?`${O.r}, ${O.g}, ${O.b}`:void 0;return`--v-${E}: ${B!=null?B:P}`})])}const u=[],f=[],h=new Set(Object.values(s.value).flatMap(m=>Object.keys(m.colors)));for(const m of h)/^on-[a-z]/.test(m)?Yt(f,`.${m}`,[`color: rgb(var(--v-theme-${m})) !important`]):(Yt(u,`.bg-${m}`,[`--v-theme-overlay-multiplier: var(--v-theme-${m}-overlay-multiplier)`,`background: rgb(var(--v-theme-${m})) !important`,`color: rgb(var(--v-theme-on-${m})) !important`]),Yt(f,`.text-${m}`,[`color: rgb(var(--v-theme-${m})) !important`]),Yt(f,`.border-${m}`,[`--v-border-color: var(--v-theme-${m})`]));return l.push(...u,...f),l.map((m,_)=>_===0?m:`    ${m}`).join("")});function a(l){const u=l._context.provides.usehead;if(u)u.addHeadObjs(te(()=>{const f={children:o.value,type:"text/css",id:"vuetify-theme-stylesheet"};return e.cspNonce&&(f.nonce=e.cspNonce),{style:[f]}})),Ye&&Xr(()=>u.updateDOM());else{let h=function(){if(!e.isDisabled){if(typeof document<"u"&&!f){const m=document.createElement("style");m.type="text/css",m.id="vuetify-theme-stylesheet",e.cspNonce&&m.setAttribute("nonce",e.cspNonce),f=m,document.head.appendChild(f)}f&&(f.innerHTML=o.value)}},f=Ye?document.getElementById("vuetify-theme-stylesheet"):null;Tt(o,h,{immediate:!0})}}const c=te(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:a,isDisabled:e.isDisabled,name:n,themes:r,current:i,computedThemes:s,themeClasses:c,styles:o,global:{name:n,current:i}}}function Wv(t){sr("provideTheme");const e=Ce(Ur,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=te(()=>{var i;return(i=t.theme)!=null?i:e==null?void 0:e.name.value}),r=te(()=>e.isDisabled?void 0:`v-theme--${n.value}`),s={...e,name:n,themeClasses:r};return cn(Ur,s),s}function Yt(t,e,n){t.push(`${e} {
`,...n.map(r=>`  ${r};
`),`}
`)}function o_(t){const e=t.dark?2:1,n=t.dark?1:2,r=[];for(const[s,i]of Object.entries(t.colors)){const o=$t(i);r.push(`--v-theme-${s}: ${o.r},${o.g},${o.b}`),s.startsWith("on-")||r.push(`--v-theme-${s}-overlay-multiplier: ${Og(i)>.18?e:n}`)}return r}function Wl(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,r=st(e,n),{aliases:s={},components:i={},directives:o={}}=r,a=xg(r.defaults),c=Fg(r.display,r.ssr),l=i_(r.theme),u=Vg(r.icons),f=Jg(r.locale);return{install:m=>{for(const _ in o)m.directive(_,o[_]);for(const _ in i)m.component(_,i[_]);for(const _ in s)m.component(_,yn({...s[_],name:_,aliasName:s[_].name}));if(l.install(m),m.provide(qn,a),m.provide(aa,c),m.provide(Ur,l),m.provide(Qs,u),m.provide(Zs,f),Ye&&r.ssr)if(m.$nuxt)m.$nuxt.hook("app:suspense:resolve",()=>{c.update()});else{const{mount:_}=m;m.mount=function(){const I=_(...arguments);return Pi(()=>c.update()),m.mount=_,I}}Fl.reset(),m.mixin({computed:{$vuetify(){return ot({defaults:Tn.call(this,qn),display:Tn.call(this,aa),theme:Tn.call(this,Ur),icons:Tn.call(this,Qs),locale:Tn.call(this,Zs)})}}})},defaults:a,display:c,theme:l,icons:u,locale:f}}const a_="3.1.1";Wl.version=a_;function Tn(t){var i;var e,n;const r=this.$,s=(i=(e=r.parent)==null?void 0:e.provides)!=null?i:(n=r.vnode.appContext)==null?void 0:n.provides;if(s&&t in s)return s[t]}const c_=Wl({theme:{themes:{light:{colors:{primary:"#1867C0",secondary:"#5CBBF6"}}}}});var l_=!1;/*!
  * pinia v2.0.29
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const u_=Symbol();var Ia;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ia||(Ia={}));function f_(){const t=Mc(!0),e=t.run(()=>Re({}));let n=[],r=[];const s=Ri({install(i){s._a=i,i.provide(u_,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!l_?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const d_=f_();/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Zt=typeof window<"u";function h_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Q=Object.assign;function Ss(t,e){const n={};for(const r in e){const s=e[r];n[r]=je(s)?s.map(t):t(s)}return n}const xn=()=>{},je=Array.isArray,p_=/\/$/,m_=t=>t.replace(p_,"");function As(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=y_(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function g_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ea(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function __(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&dn(e.matched[r],n.matched[s])&&zl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function dn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function zl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!v_(t[n],e[n]))return!1;return!0}function v_(t,e){return je(t)?Ta(t,e):je(e)?Ta(e,t):t===e}function Ta(t,e){return je(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function y_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Gn;(function(t){t.pop="pop",t.push="push"})(Gn||(Gn={}));var Nn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Nn||(Nn={}));function b_(t){if(!t)if(Zt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),m_(t)}const w_=/^[^#]+#/;function I_(t,e){return t.replace(w_,"#")+e}function E_(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const os=()=>({left:window.pageXOffset,top:window.pageYOffset});function T_(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=E_(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ca(t,e){return(history.state?history.state.position-e:-1)+t}const ei=new Map;function C_(t,e){ei.set(t,e)}function S_(t){const e=ei.get(t);return ei.delete(t),e}let A_=()=>location.protocol+"//"+location.host;function Kl(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ea(c,"")}return Ea(n,t)+r+s}function R_(t,e,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const m=Kl(t,location),_=n.value,I=e.value;let D=0;if(h){if(n.value=m,e.value=h,o&&o===_){o=null;return}D=I?h.position-I.position:0}else r(m);s.forEach(E=>{E(n.value,_,{delta:D,type:Gn.pop,direction:D?D>0?Nn.forward:Nn.back:Nn.unknown})})};function c(){o=n.value}function l(h){s.push(h);const m=()=>{const _=s.indexOf(h);_>-1&&s.splice(_,1)};return i.push(m),m}function u(){const{history:h}=window;!h.state||h.replaceState(Q({},h.state,{scroll:os()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:f}}function Sa(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?os():null}}function O_(t){const{history:e,location:n}=window,r={value:Kl(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:A_()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](h)}}function o(c,l){const u=Q({},e.state,Sa(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Q({},s.value,e.state,{forward:c,scroll:os()});i(u.current,u,!0);const f=Q({},Sa(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function k_(t){t=b_(t);const e=O_(t),n=R_(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Q({location:"",base:t,go:r,createHref:I_.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function P_(t){return typeof t=="string"||t&&typeof t=="object"}function ql(t){return typeof t=="string"||typeof t=="symbol"}const ht={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Gl=Symbol("");var Aa;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Aa||(Aa={}));function hn(t,e){return Q(new Error,{type:t,[Gl]:!0},e)}function Xe(t,e){return t instanceof Error&&Gl in t&&(e==null||!!(t.type&e))}const Ra="[^/]+?",D_={sensitive:!1,strict:!1,start:!0,end:!0},x_=/[.+*?^${}()[\]/\\]/g;function N_(t,e){const n=Q({},D_,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const h=l[f];let m=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(x_,"\\$&"),m+=40;else if(h.type===1){const{value:_,repeatable:I,optional:D,regexp:E}=h;i.push({name:_,repeatable:I,optional:D});const P=E||Ra;if(P!==Ra){m+=10;try{new RegExp(`(${P})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${_}" (${P}): `+B.message)}}let O=I?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;f||(O=D&&l.length<2?`(?:/${O})`:"/"+O),D&&(O+="?"),s+=O,m+=20,D&&(m+=-8),I&&(m+=-20),P===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",_=i[h-1];f[_.name]=m&&_.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:_,repeatable:I,optional:D}=m,E=_ in l?l[_]:"";if(je(E)&&!I)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const P=je(E)?E.join("/"):E;if(!P)if(D)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=P}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function M_(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function L_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=M_(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Oa(r))return 1;if(Oa(s))return-1}return s.length-r.length}function Oa(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const F_={type:0,value:""},$_=/[a-zA-Z0-9_]/;function U_(t){if(!t)return[[]];if(t==="/")return[[F_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:$_.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function B_(t,e,n){const r=N_(U_(t.path),n),s=Q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function H_(t,e){const n=[],r=new Map;e=Da({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,f,h){const m=!h,_=j_(u);_.aliasOf=h&&h.record;const I=Da(e,u),D=[_];if("alias"in u){const O=typeof u.alias=="string"?[u.alias]:u.alias;for(const B of O)D.push(Q({},_,{components:h?h.record.components:_.components,path:B,aliasOf:h?h.record:_}))}let E,P;for(const O of D){const{path:B}=O;if(f&&B[0]!=="/"){const Y=f.record.path,fe=Y[Y.length-1]==="/"?"":"/";O.path=f.record.path+(B&&fe+B)}if(E=B_(O,f,I),h?h.alias.push(E):(P=P||E,P!==E&&P.alias.push(E),m&&u.name&&!Pa(E)&&o(u.name)),_.children){const Y=_.children;for(let fe=0;fe<Y.length;fe++)i(Y[fe],E,h&&h.children[fe])}h=h||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&c(E)}return P?()=>{o(P)}:xn}function o(u){if(ql(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&L_(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Jl(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Pa(u)&&r.set(u.record.name,u)}function l(u,f){let h,m={},_,I;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw hn(1,{location:u});I=h.record.name,m=Q(ka(f.params,h.keys.filter(P=>!P.optional).map(P=>P.name)),u.params&&ka(u.params,h.keys.map(P=>P.name))),_=h.stringify(m)}else if("path"in u)_=u.path,h=n.find(P=>P.re.test(_)),h&&(m=h.parse(_),I=h.record.name);else{if(h=f.name?r.get(f.name):n.find(P=>P.re.test(f.path)),!h)throw hn(1,{location:u,currentLocation:f});I=h.record.name,m=Q({},f.params,u.params),_=h.stringify(m)}const D=[];let E=h;for(;E;)D.unshift(E.record),E=E.parent;return{name:I,path:_,params:m,matched:D,meta:W_(D)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function ka(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function j_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:V_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function V_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Pa(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function W_(t){return t.reduce((e,n)=>Q(e,n.meta),{})}function Da(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Jl(t,e){return e.children.some(n=>n===t||Jl(t,n))}const Yl=/#/g,z_=/&/g,K_=/\//g,q_=/=/g,G_=/\?/g,Xl=/\+/g,J_=/%5B/g,Y_=/%5D/g,Ql=/%5E/g,X_=/%60/g,Zl=/%7B/g,Q_=/%7C/g,eu=/%7D/g,Z_=/%20/g;function Wi(t){return encodeURI(""+t).replace(Q_,"|").replace(J_,"[").replace(Y_,"]")}function ev(t){return Wi(t).replace(Zl,"{").replace(eu,"}").replace(Ql,"^")}function ti(t){return Wi(t).replace(Xl,"%2B").replace(Z_,"+").replace(Yl,"%23").replace(z_,"%26").replace(X_,"`").replace(Zl,"{").replace(eu,"}").replace(Ql,"^")}function tv(t){return ti(t).replace(q_,"%3D")}function nv(t){return Wi(t).replace(Yl,"%23").replace(G_,"%3F")}function rv(t){return t==null?"":nv(t).replace(K_,"%2F")}function Br(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function sv(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Xl," "),o=i.indexOf("="),a=Br(o<0?i:i.slice(0,o)),c=o<0?null:Br(i.slice(o+1));if(a in e){let l=e[a];je(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function xa(t){let e="";for(let n in t){const r=t[n];if(n=tv(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(je(r)?r.map(i=>i&&ti(i)):[r&&ti(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function iv(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=je(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const ov=Symbol(""),Na=Symbol(""),as=Symbol(""),tu=Symbol(""),ni=Symbol("");function Cn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function mt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(hn(4,{from:n,to:e})):f instanceof Error?a(f):P_(f)?a(hn(2,{from:e,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function Rs(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(av(a)){const l=(a.__vccOpts||a)[e];l&&s.push(mt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=h_(l)?l.default:l;i.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&mt(h,n,r,i,o)()}))}}return s}function av(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ma(t){const e=Ce(as),n=Ce(tu),r=te(()=>e.resolve(tt(t.to))),s=te(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(dn.bind(null,u));if(h>-1)return h;const m=La(c[l-2]);return l>1&&La(u)===m&&f[f.length-1].path!==m?f.findIndex(dn.bind(null,c[l-2])):h}),i=te(()=>s.value>-1&&fv(n.params,r.value.params)),o=te(()=>s.value>-1&&s.value===n.matched.length-1&&zl(n.params,r.value.params));function a(c={}){return uv(c)?e[tt(t.replace)?"replace":"push"](tt(t.to)).catch(xn):Promise.resolve()}return{route:r,href:te(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const cv=Ni({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ma,setup(t,{slots:e}){const n=ot(Ma(t)),{options:r}=Ce(as),s=te(()=>({[Fa(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Fa(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:rs("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),lv=cv;function uv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function fv(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!je(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function La(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Fa=(t,e,n)=>t!=null?t:e!=null?e:n,dv=Ni({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ce(ni),s=te(()=>t.route||r.value),i=Ce(Na,0),o=te(()=>{let l=tt(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=te(()=>s.value.matched[o.value]);cn(Na,te(()=>o.value+1)),cn(ov,a),cn(ni,s);const c=Re();return Tt(()=>[c.value,a.value,t.name],([l,u,f],[h,m,_])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!dn(u,m)||!h)&&(u.enterCallbacks[f]||[]).forEach(I=>I(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return $a(n.default,{Component:h,route:l});const m=f.props[u],_=m?m===!0?l.params:typeof m=="function"?m(l):m:null,D=rs(h,Q({},_,e,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return $a(n.default,{Component:D,route:l})||D}}});function $a(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const hv=dv;function pv(t){const e=H_(t.routes,t),n=t.parseQuery||sv,r=t.stringifyQuery||xa,s=t.history,i=Cn(),o=Cn(),a=Cn(),c=Xc(ht);let l=ht;Zt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ss.bind(null,y=>""+y),f=Ss.bind(null,rv),h=Ss.bind(null,Br);function m(y,k){let A,M;return ql(y)?(A=e.getRecordMatcher(y),M=k):M=y,e.addRoute(M,A)}function _(y){const k=e.getRecordMatcher(y);k&&e.removeRoute(k)}function I(){return e.getRoutes().map(y=>y.record)}function D(y){return!!e.getRecordMatcher(y)}function E(y,k){if(k=Q({},k||c.value),typeof y=="string"){const d=As(n,y,k.path),p=e.resolve({path:d.path},k),g=s.createHref(d.fullPath);return Q(d,p,{params:h(p.params),hash:Br(d.hash),redirectedFrom:void 0,href:g})}let A;if("path"in y)A=Q({},y,{path:As(n,y.path,k.path).path});else{const d=Q({},y.params);for(const p in d)d[p]==null&&delete d[p];A=Q({},y,{params:f(y.params)}),k.params=f(k.params)}const M=e.resolve(A,k),K=y.hash||"";M.params=u(h(M.params));const ue=g_(r,Q({},y,{hash:ev(K),path:M.path})),W=s.createHref(ue);return Q({fullPath:ue,hash:K,query:r===xa?iv(y.query):y.query||{}},M,{redirectedFrom:void 0,href:W})}function P(y){return typeof y=="string"?As(n,y,c.value.path):Q({},y)}function O(y,k){if(l!==y)return hn(8,{from:k,to:y})}function B(y){return he(y)}function Y(y){return B(Q(P(y),{replace:!0}))}function fe(y){const k=y.matched[y.matched.length-1];if(k&&k.redirect){const{redirect:A}=k;let M=typeof A=="function"?A(y):A;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=P(M):{path:M},M.params={}),Q({query:y.query,hash:y.hash,params:"path"in M?{}:y.params},M)}}function he(y,k){const A=l=E(y),M=c.value,K=y.state,ue=y.force,W=y.replace===!0,d=fe(A);if(d)return he(Q(P(d),{state:typeof d=="object"?Q({},K,d.state):K,force:ue,replace:W}),k||A);const p=A;p.redirectedFrom=k;let g;return!ue&&__(r,M,A)&&(g=hn(16,{to:p,from:M}),Rt(M,M,!0,!1)),(g?Promise.resolve(g):X(p,M)).catch(v=>Xe(v)?Xe(v,2)?v:Ne(v):ne(v,p,M)).then(v=>{if(v){if(Xe(v,2))return he(Q({replace:W},P(v.to),{state:typeof v.to=="object"?Q({},K,v.to.state):K,force:ue}),k||p)}else v=pe(p,M,!0,W,K);return J(p,M,v),v})}function j(y,k){const A=O(y,k);return A?Promise.reject(A):Promise.resolve()}function X(y,k){let A;const[M,K,ue]=mv(y,k);A=Rs(M.reverse(),"beforeRouteLeave",y,k);for(const d of M)d.leaveGuards.forEach(p=>{A.push(mt(p,y,k))});const W=j.bind(null,y,k);return A.push(W),Xt(A).then(()=>{A=[];for(const d of i.list())A.push(mt(d,y,k));return A.push(W),Xt(A)}).then(()=>{A=Rs(K,"beforeRouteUpdate",y,k);for(const d of K)d.updateGuards.forEach(p=>{A.push(mt(p,y,k))});return A.push(W),Xt(A)}).then(()=>{A=[];for(const d of y.matched)if(d.beforeEnter&&!k.matched.includes(d))if(je(d.beforeEnter))for(const p of d.beforeEnter)A.push(mt(p,y,k));else A.push(mt(d.beforeEnter,y,k));return A.push(W),Xt(A)}).then(()=>(y.matched.forEach(d=>d.enterCallbacks={}),A=Rs(ue,"beforeRouteEnter",y,k),A.push(W),Xt(A))).then(()=>{A=[];for(const d of o.list())A.push(mt(d,y,k));return A.push(W),Xt(A)}).catch(d=>Xe(d,8)?d:Promise.reject(d))}function J(y,k,A){for(const M of a.list())M(y,k,A)}function pe(y,k,A,M,K){const ue=O(y,k);if(ue)return ue;const W=k===ht,d=Zt?history.state:{};A&&(M||W?s.replace(y.fullPath,Q({scroll:W&&d&&d.scroll},K)):s.push(y.fullPath,K)),c.value=y,Rt(y,k,A,W),Ne()}let x;function ie(){x||(x=s.listen((y,k,A)=>{if(!ir.listening)return;const M=E(y),K=fe(M);if(K){he(Q(K,{replace:!0}),M).catch(xn);return}l=M;const ue=c.value;Zt&&C_(Ca(ue.fullPath,A.delta),os()),X(M,ue).catch(W=>Xe(W,12)?W:Xe(W,2)?(he(W.to,M).then(d=>{Xe(d,20)&&!A.delta&&A.type===Gn.pop&&s.go(-1,!1)}).catch(xn),Promise.reject()):(A.delta&&s.go(-A.delta,!1),ne(W,M,ue))).then(W=>{W=W||pe(M,ue,!1),W&&(A.delta&&!Xe(W,8)?s.go(-A.delta,!1):A.type===Gn.pop&&Xe(W,20)&&s.go(-1,!1)),J(M,ue,W)}).catch(xn)}))}let ve=Cn(),ct=Cn(),le;function ne(y,k,A){Ne(y);const M=ct.list();return M.length?M.forEach(K=>K(y,k,A)):console.error(y),Promise.reject(y)}function Z(){return le&&c.value!==ht?Promise.resolve():new Promise((y,k)=>{ve.add([y,k])})}function Ne(y){return le||(le=!y,ie(),ve.list().forEach(([k,A])=>y?A(y):k()),ve.reset()),y}function Rt(y,k,A,M){const{scrollBehavior:K}=t;if(!Zt||!K)return Promise.resolve();const ue=!A&&S_(Ca(y.fullPath,0))||(M||!A)&&history.state&&history.state.scroll||null;return Pi().then(()=>K(y,k,ue)).then(W=>W&&T_(W)).catch(W=>ne(W,y,k))}const Me=y=>s.go(y);let Ee;const qt=new Set,ir={currentRoute:c,listening:!0,addRoute:m,removeRoute:_,hasRoute:D,getRoutes:I,resolve:E,options:t,push:B,replace:Y,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ct.add,isReady:Z,install(y){const k=this;y.component("RouterLink",lv),y.component("RouterView",hv),y.config.globalProperties.$router=k,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>tt(c)}),Zt&&!Ee&&c.value===ht&&(Ee=!0,B(s.location).catch(K=>{}));const A={};for(const K in ht)A[K]=te(()=>c.value[K]);y.provide(as,k),y.provide(tu,ot(A)),y.provide(ni,c);const M=y.unmount;qt.add(y),y.unmount=function(){qt.delete(y),qt.size<1&&(l=ht,x&&x(),x=null,c.value=ht,Ee=!1,le=!1),M()}}};return ir}function Xt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function mv(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>dn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>dn(l,c))||s.push(c))}return[n,r,s]}function zv(){return Ce(as)}const gv=[{path:"/",redirect:"/home"},{path:"/home",component:()=>Sr(()=>import("./Home.98d57179.js"),["assets/Home.98d57179.js","assets/Home.bdac32d6.css"]),meta:{requiresAuth:!0}},{path:"/register",component:()=>Sr(()=>import("./Register.f0183063.js"),[])},{path:"/signin",component:()=>Sr(()=>import("./SignIn.7993cace.js"),[])}],nu=pv({history:k_({}.BASE_URL),routes:gv}),_v=()=>new Promise((t,e)=>{const n=gc(Ls(),r=>{n(),t(r)},e)});nu.beforeEach(async(t,e,n)=>{t.matched.some(r=>r.meta.requiresAuth)?await _v()&&n():n("/signin")});function vv(t){ug(),t.use(c_).use(nu).use(d_)}var yv="firebase",bv="9.15.0";/**
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
 */en(yv,bv,"app");const wv={apiKey:"AIzaSyDs8ed1ZNkeNyYp1NUk8hExkzIWLq9N3Q4",authDomain:"test-e4100.firebaseapp.com",databaseURL:"https://test-e4100-default-rtdb.europe-west1.firebasedatabase.app",projectId:"1:1015148410653:web:4c8466402e2a78de64d3f4",storageBucket:"G-JTTHZRBTHZ",messagingSenderId:"1015148410653",appId:"test-e4100",measurementId:"test-e4100.appspot.com"};Ga(wv);const ru=tg(ag);vv(ru);ru.mount("#app");export{kv as $,xv as A,Es as B,Dn as C,Uv as D,Ni as E,Fe as F,el as G,Pv as H,Ye as I,Bg as J,Hv as K,Xr as L,ia as M,Dv as N,jv as O,Av as P,Lv as Q,Pi as R,Bv as S,es as T,Sv as U,Rv as V,rr as W,rs as X,Al as Y,kl as Z,Vp as _,qc as a,Js as a0,mm as a1,Ir as a2,Cr as a3,Ui as a4,rg as a5,zv as a6,Iv as a7,Ls as a8,_t as a9,Tv as aa,Bo as ab,Ov as ac,Ev as ad,Cv as ae,vm as af,$v as b,te as c,_e as d,Nv as e,Fv as f,sr as g,ae as h,Mv as i,yn as j,Wv as k,Ng as l,Vv as m,Fl as n,pl as o,Vi as p,cn as q,Re as r,Ce as s,Ip as t,tt as u,ot as v,Tt as w,Wg as x,hl as y,dg as z};
