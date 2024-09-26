import{k as l,y as o}from"./chunk-5FJKB7TP.js";import{$ as p,V as c}from"./chunk-PTJC2S3F.js";var a=class extends Error{};a.prototype.name="InvalidTokenError";function u(r){return decodeURIComponent(atob(r).replace(/(.)/g,(t,s)=>{let e=s.charCodeAt(0).toString(16).toUpperCase();return e.length<2&&(e="0"+e),"%"+e}))}function h(r){let t=r.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return u(t)}catch{return atob(t)}}function d(r,t){if(typeof r!="string")throw new a("Invalid token specified: must be a string");t||(t={});let s=t.header===!0?0:1,e=r.split(".")[s];if(typeof e!="string")throw new a(`Invalid token specified: missing part #${s+1}`);let i;try{i=h(e)}catch(n){throw new a(`Invalid token specified: invalid base64 for part #${s+1} (${n.message})`)}try{return JSON.parse(i)}catch(n){throw new a(`Invalid token specified: invalid json for part #${s+1} (${n.message})`)}}var C=(()=>{let t=class t{constructor(){this._HttpClient=p(l)}sendRegisterData(e){return this._HttpClient.post(`${o}/api/v1/auth/signup`,e)}login(e){return this._HttpClient.post(`${o}/api/v1/auth/signin`,e)}sendEmail(e){return this._HttpClient.post(`${o}/api/v1/auth/forgotPasswords`,e)}sendcode(e){return this._HttpClient.post(`${o}/api/v1/auth/verifyResetCode`,e)}resetPassword(e){return this._HttpClient.put(`${o}/api/v1/auth/resetPassword`,e)}saveUserData(){this.userData=d(localStorage.getItem("userToken")),localStorage.setItem("userId",this.userData.id),console.log("userData",this.userData)}userOrders(){return this._HttpClient.get(`${o}/api/v1/orders/user/${localStorage.getItem("userId")}`)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{C as a};
