import './polyfills.server.mjs';
import{a as i}from"./chunk-SVCHEVXD.mjs";import{r as a}from"./chunk-O7V7OWRG.mjs";import{R as o,W as n}from"./chunk-ONHE2IK4.mjs";var c=(()=>{let e=class e{constructor(t){this._HttpClient=t,this.wishListItems=[]}putInWishList(t){return this._HttpClient.post(`${i}/api/v1/wishlist`,{productId:t},{headers:{token:localStorage.getItem("userToken")}})}getWishList(){return this._HttpClient.get(`${i}/api/v1/wishlist`,{headers:{token:localStorage.getItem("userToken")}})}removeProduct(t){return this._HttpClient.delete(`${i}/api/v1/wishlist/${t}`,{headers:{token:localStorage.getItem("userToken")}})}isInWishList(t){return this.wishListItems.some(r=>r===t)}};e.\u0275fac=function(r){return new(r||e)(n(a))},e.\u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();export{c as a};
