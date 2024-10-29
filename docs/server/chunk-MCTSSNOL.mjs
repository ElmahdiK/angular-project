import './polyfills.server.mjs';
import{A as j,B as z,E as A,I as L,L as y,M as R,a as u,b as f,c as m,d as D,e as P,f as v,g as c,h as g,i as C,j as b,k as i,l as o,m as r,n as h,o as a,p as s,q as p,v as T,y as O}from"./chunk-K3ETOECX.mjs";var S=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-navbar"]],standalone:!0,features:[p],decls:21,vars:0,consts:[[1,"shadow"],[1,"navbar","navbar-expand-lg","bg-body-tertiary"],[1,"container-fluid"],["href","#",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav"],[1,"nav-item"],["aria-current","page","routerLink","./vehicule",1,"nav-link","active","text-capitalize"],["routerLink","./voiture",1,"nav-link","text-capitalize"],["routerLink","./camion",1,"nav-link","text-capitalize"],["routerLink","./tata",1,"nav-link","text-capitalize"]],template:function(t,l){t&1&&(i(0,"header",0)(1,"nav",1)(2,"div",2)(3,"a",3),a(4,"Angular Project"),o(),i(5,"button",4),r(6,"span",5),o(),i(7,"div",6)(8,"ul",7)(9,"li",8)(10,"a",9),a(11,"vehicule"),o()(),i(12,"li",8)(13,"a",10),a(14,"voiture"),o()(),i(15,"li",8)(16,"a",11),a(17,"camion"),o()(),i(18,"li",8)(19,"a",12),a(20,"404"),o()()()()()()())},dependencies:[y],styles:["nav[_ngcontent-%COMP%]{background-color:#eee;padding:10px;display:flex;flex-direction:row}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:10px}"]})};var F=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-footer"]],standalone:!0,features:[p],decls:19,vars:0,consts:[[1,"fixed-bottom","d-flex","flex-wrap","justify-content-between","align-items-center","p-3","border-top"],[1,"col-md-4","mb-0","text-light"],["href","/",1,"col-md-4","d-flex","align-items-center","justify-content-center","mb-3","mb-md-0","me-md-auto","link-body-emphasis","text-decoration-none"],["width","40","height","32",1,"bi","me-2"],[0,"xlink","href","#bootstrap"],[1,"nav","col-md-4","justify-content-end"],[1,"nav-item"],["routerLink","./vehicule",1,"nav-link","px-2","text-light","text-capitalize"],["routerLink","./voiture",1,"nav-link","px-2","text-light","text-capitalize"],["routerLink","./camion",1,"nav-link","px-2","text-light","text-capitalize"],["routerLink","./tata",1,"nav-link","px-2","text-light","text-capitalize"]],template:function(t,l){t&1&&(i(0,"footer",0)(1,"p",1),a(2,"\xA9 2025"),o(),i(3,"a",2),D(),i(4,"svg",3),r(5,"use",4),o()(),P(),i(6,"ul",5)(7,"li",6)(8,"a",7),a(9,"vehicule"),o()(),i(10,"li",6)(11,"a",8),a(12,"voiture"),o()(),i(13,"li",6)(14,"a",9),a(15,"camion"),o()(),i(16,"li",6)(17,"a",10),a(18,"404"),o()()()())},dependencies:[y],styles:["footer[_ngcontent-%COMP%]{background-color:#333}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#eee;padding:10px}"]})};var I=class e{title="angular-project";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[p],decls:4,vars:0,template:function(t,l){t&1&&(r(0,"app-navbar"),i(1,"main"),r(2,"router-outlet"),o(),r(3,"app-footer"))},dependencies:[L,F,S]})};var V=class e{constructor(){}vehicules=[{name:"vehicule",img:"vehicule.jpg",description:"Vehicule"}];getVehicules(){return u(this.vehicules)}static \u0275fac=function(t){return new(t||e)};static \u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"})};var G=(e,n)=>n.name;function Z(e,n){if(e&1&&(i(0,"div",1),r(1,"img",2),i(2,"div",3)(3,"h5",4),a(4),o(),i(5,"p",5),a(6),o()()()),e&2){let t=n.$implicit;c(),h("src",t.img,v),c(3),s(t.name),c(2),s(t.description)}}function q(e,n){e&1&&(i(0,"p"),a(1,"There are no vehicules."),o())}var E=class e{constructor(n){this.serviceVehicules=n}vehicules;ngOnInit(){this.getVehicules()}getVehicules(){return this.serviceVehicules.getVehicules().subscribe(n=>{this.vehicules=n})}static \u0275fac=function(t){return new(t||e)(g(V))};static \u0275cmp=m({type:e,selectors:[["app-vehicule"]],standalone:!0,features:[p],decls:4,vars:1,consts:[[1,"card-group","w-25","mx-auto","gap-3","my-4"],[1,"card","border",2,"width","33.33%"],["alt","...",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title","text-capitalize"],[1,"card-text"]],template:function(t,l){t&1&&(i(0,"div",0),C(1,Z,7,3,"div",1,G,!1,q,2,0,"p"),o()),t&2&&(c(),b(l.vehicules))},styles:[".card[_ngcontent-%COMP%]{margin:0 auto}"]})};var k=class e{constructor(){}voitures=[{name:"ferrari",img:"ferrari.jpg",description:"Constructeur automobile italien install\xE9 \xE0 Maranello en Italie, fond\xE9e par Enzo Ferrari en 1947."},{name:"lamborghini",img:"lamborghini.webp",description:"Constructeur automobile fond\xE9 en 1963 par l'industriel Ferruccio Lamborghini et install\xE9 \xE0 Sant'Agata Bolognese en Italie"},{name:"bugatti",img:"bugatti.jfif",description:"Constructeur automobile fran\xE7ais d\u2019hyper-sportives de grand luxe appartenant \xE0 55 % au groupe croate Rimac Automobili depuis son rachat en 2021."}];getVoitures(){return u(this.voitures)}static \u0275fac=function(t){return new(t||e)};static \u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"})};var K=(e,n)=>n.name;function Q(e,n){if(e&1&&(i(0,"div",1),r(1,"img",2),i(2,"div",3)(3,"h5",4),a(4),o(),i(5,"p",5),a(6),o()()()),e&2){let t=n.$implicit;c(),h("src",t.img,v),c(3),s(t.name),c(2),s(t.description)}}function W(e,n){e&1&&(i(0,"p"),a(1,"There are no voitures."),o())}var _=class e{constructor(n){this.serviceVoiture=n}voitures;ngOnInit(){this.getVoitures()}getVoitures(){return this.serviceVoiture.getVoitures().subscribe(n=>{this.voitures=n})}static \u0275fac=function(t){return new(t||e)(g(k))};static \u0275cmp=m({type:e,selectors:[["app-voiture"]],standalone:!0,features:[p],decls:4,vars:1,consts:[[1,"card-group","w-75","mx-auto","gap-3","my-4"],[1,"card","border",2,"width","33.33%"],["alt","...",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title","text-capitalize"],[1,"card-text"]],template:function(t,l){t&1&&(i(0,"div",0),C(1,Q,7,3,"div",1,K,!1,W,2,0,"p"),o()),t&2&&(c(),b(l.voitures))},styles:[".card[_ngcontent-%COMP%]{margin:0 auto}"]})};var M=class e{constructor(){}camions=[{name:"camion",img:"camion.jpg",description:"Camion"}];getCamions(){return u(this.camions)}static \u0275fac=function(t){return new(t||e)};static \u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"})};var Y=(e,n)=>n.name;function ee(e,n){if(e&1&&(i(0,"div",1),r(1,"img",2),i(2,"div",3)(3,"h5",4),a(4),o(),i(5,"p",5),a(6),o()()()),e&2){let t=n.$implicit;c(),h("src",t.img,v),c(3),s(t.name),c(2),s(t.description)}}function te(e,n){e&1&&(i(0,"p"),a(1,"There are no camions."),o())}var N=class e{constructor(n){this.serviceCamions=n}camions;ngOnInit(){this.getCamions()}getCamions(){this.serviceCamions.getCamions().subscribe(n=>{this.camions=n})}static \u0275fac=function(t){return new(t||e)(g(M))};static \u0275cmp=m({type:e,selectors:[["app-camion"]],standalone:!0,features:[p],decls:4,vars:1,consts:[[1,"card-group","w-25","mx-auto","gap-3","my-4"],[1,"card","border",2,"width","33.33%"],["alt","...",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title","text-capitalize"],[1,"card-text"]],template:function(t,l){t&1&&(i(0,"div",0),C(1,ee,7,3,"div",1,Y,!1,te,2,0,"p"),o()),t&2&&(c(),b(l.camions))},styles:[".card[_ngcontent-%COMP%]{margin:0 auto}"]})};var w=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-page-not-found"]],standalone:!0,features:[p],decls:5,vars:0,consts:[[1,"card",2,"width","30%"],["src","./404.gif","alt","...",1,"card-img-top"],[1,"card-body"],[1,"card-title"]],template:function(t,l){t&1&&(i(0,"div",0),r(1,"img",1),i(2,"div",2)(3,"h5",3),a(4,"Oups..."),o()()())},styles:[".card[_ngcontent-%COMP%]{margin:0 auto}"]})};var $=[{path:"vehicule",component:E},{path:"voiture",component:_},{path:"camion",component:N},{path:"",redirectTo:"vehicule",pathMatch:"full"},{path:"**",component:w}];var U={providers:[T({eventCoalescing:!0}),R($),z()]};var ne={providers:[A()]},H=O(U,ne);var ie=()=>j(I,H),$e=ie;export{$e as a};
