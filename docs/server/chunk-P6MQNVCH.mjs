import './polyfills.server.mjs';
import{a as Q,b as $}from"./chunk-QZDF7IVT.mjs";import"./chunk-GTSSCL6B.mjs";import"./chunk-SVCHEVXD.mjs";import{H as O,k as V}from"./chunk-O7V7OWRG.mjs";import{$ as x,Fb as s,Gb as E,Hb as C,La as S,Mb as I,Ob as F,Pa as o,Sb as f,Tb as g,X as v,db as b,fb as h,ja as m,jb as w,ka as p,kb as k,lb as y,mb as P,nb as r,ob as n,pb as u,sb as T,wb as d,xb as _}from"./chunk-ONHE2IK4.mjs";import"./chunk-VVCT4QZE.mjs";var B=a=>["/order",a];function L(a,c){a&1&&(r(0,"div",5),u(1,"img",7),n())}function j(a,c){if(a&1){let l=T();r(0,"div",8),u(1,"img",9),n(),r(2,"div",10),s(3),r(4,"h6"),s(5),f(6,"currency"),n(),r(7,"i",11),d("click",function(){let t=m(l).$implicit,i=_();return p(i.removeproduct(t.product.id))}),n()(),r(8,"div",8)(9,"div",12)(10,"div",13)(11,"i",14),d("click",function(){let t=m(l).$implicit,i=_();return p(i.updateProductQuantity(t.product.id,t.count+1))}),n()(),r(12,"span"),s(13),n(),r(14,"div",15)(15,"i",16),d("click",function(){let t=m(l).$implicit,i=_();return p(i.updateProductQuantity(t.product.id,t.count-1))}),n()()()(),u(16,"hr")}if(a&2){let l=c.$implicit;o(),h("src",l.product.imageCover,S),o(2),C(" ",l.product.title," "),o(2),C("price:",g(6,4,l.price),""),o(8),E(l.count)}}var G=(()=>{let c=class c{constructor(){this._CartService=v(Q),this._ToastrService=v($),this.totalCartPrice=0,this.imgshow=!1}ngOnInit(){this._CartService.getproducttodisplay().subscribe({next:e=>{console.log(e.data),this.totalCartPrice=e.data.totalCartPrice,this.cartdata=e.data,this.cartid=this.cartdata._id,console.log(this.cartid)},error:e=>{console.log(e)}})}removeproduct(e){this._CartService.deletespecproduct(e).subscribe({next:t=>{console.log(t),this.cartdata=t.data,this.totalCartPrice=t.data.totalCartPrice,this._ToastrService.error("deleted success"),this._CartService.cartNumber.next(t.numOfCartItems)},error:t=>{console.log(t)}})}if(){this.imgshow=!0}clearcart(){this._CartService.clearcart().subscribe({next:e=>{console.log(e),this.imgshow=!0,this.totalCartPrice=0,this.cartdata={},this._ToastrService.error("deleted all cart success"),this._CartService.cartNumber.next(e.numOfCartItems)},error:e=>{console.log(e)}})}updateProductQuantity(e,t){this._CartService.updateProductQuantity(e,t).subscribe({next:i=>{console.log(i),this.cartdata=i.data,this.totalCartPrice=i.data.totalCartPrice,this._ToastrService.success("update quantitiy success")},error:i=>{console.log(i)}})}};c.\u0275fac=function(t){return new(t||c)},c.\u0275cmp=x({type:c,selectors:[["app-cart"]],standalone:!0,features:[I],decls:14,vars:7,consts:[[1,"container","pb-5"],[1,"d-flex","justify-content-between","pt-5","w-80","m-auto","align-items-center"],[1,"text-main","m-0"],[1,"btn-main","m-3",3,"routerLink"],[1,"btn","btn-outline-danger",3,"click"],[1,"w-25"],[1,"row","align-items-center"],["src","./assets/images/empty.png","alt","empty-cart",1,"w-100"],[1,"col-2"],["alt","",1,"w-100",3,"src"],[1,"col-8"],[1,"fa-solid","fa-trash-can","text-danger",3,"click"],[1,"d-flex","align-items-center","gap-3"],[1,"bg-black","i"],[1,"fa-solid","fa-plus","text-white",3,"click"],[1,"i","bg-black"],[1,"fa-solid","fa-minus","text-white",3,"click"]],template:function(t,i){t&1&&(r(0,"section",0)(1,"div",1)(2,"h4",2),s(3),f(4,"currency"),n(),r(5,"div")(6,"button",3),s(7,"Order"),n(),r(8,"button",4),d("click",function(){return i.clearcart()}),s(9," Clear Cart "),n()()(),b(10,L,2,0,"div",5),r(11,"div",6),y(12,j,17,6,null,null,k),n()()),t&2&&(o(3),C("total price:",g(4,3,i.totalCartPrice),""),o(3),h("routerLink",F(5,B,i.cartid)),o(4),w(10,i.imgshow||i.totalCartPrice==0?10:-1),o(2),P(i.cartdata.products))},dependencies:[O,V]});let a=c;return a})();export{G as CartComponent};
