(function(e){function t(t){for(var a,i,c=t[0],s=t[1],u=t[2],d=0,l=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&l.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(l.length)l.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},o={app:0},r=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-30660e9f":"85fd3960","chunk-7d27cc14":"99d105cf","chunk-9edc8fa2":"6ec6fbc3","chunk-a72e6670":"98c68144"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-7d27cc14":1,"chunk-9edc8fa2":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-30660e9f":"31d6cfe0","chunk-7d27cc14":"e3f36120","chunk-9edc8fa2":"0b6a05a1","chunk-a72e6670":"31d6cfe0"}[e]+".css",o=s.p+a,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=r[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===a||d===o))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],d=u.getAttribute("data-href");if(d===a||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete i[e],f.parentNode.removeChild(f),n(r)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){i[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=r);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/citasweb/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"243c":function(e,t,n){},"41d0":function(e,t,n){},"452c":function(e,t,n){},"45e6":function(e,t,n){"use strict";n("243c")},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n(e.layout,{tag:"component"})],1)},o=[],r=n("5530"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{staticClass:"main-login"},[n("b-row",{staticClass:"text-center",attrs:{"align-h":"center"}},[n("b-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"8",xl:"8"}},[n("b-card",{staticClass:"text-left",attrs:{"header-bg-variant":"Info"}},[n("b-card-text",{staticClass:"text-center"},[n("b-img",{staticClass:"mb-3",attrs:{src:"https://www.alianzadiagnostica.com/images/logo-img.png",alt:""}}),n("h4",{staticStyle:{color:"#0A2799"}},[e._v(" Servicio Virtual de Asignación de Citas ")]),n("h5",{staticStyle:{color:"#0A2799"}},[e._v(" Protegidos Salud Total ")])],1),n("b-form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[n("b-form-group",{attrs:{label:"Tipo de Usuario:","label-for":"input-1"}},[n("b-form-select",{attrs:{id:"input-1",options:e.userTypes,value:null,required:""},model:{value:e.form.userType,callback:function(t){e.$set(e.form,"userType",t)},expression:"form.userType"}})],1),n("b-form-group",{attrs:{label:"Tipo de Identificación del Usuario:","label-for":"input-2"}},[n("b-form-select",{attrs:{id:"input-2",options:e.identificationTypes,value:null,required:""},model:{value:e.form.identificacionId,callback:function(t){e.$set(e.form,"identificacionId",t)},expression:"form.identificacionId"}})],1),n("b-form-group",{attrs:{label:"Número de Identificación del Usuario:","label-for":"input-3"}},[n("b-form-input",{attrs:{id:"input-3",required:""},model:{value:e.form.identificacion,callback:function(t){e.$set(e.form,"identificacion",t)},expression:"form.identificacion"}})],1),n("b-form-group",{staticClass:"mt-4 text-center"},[n("b-button",{staticStyle:{"background-color":"#0A2799"},attrs:{type:"submit",size:"lg"}},[e._v("Ingresar")])],1),n("b-row",{attrs:{"align-h":"center"}},[n("div",{staticClass:"d-flex justify-content-center "},[e.loading?n("b-icon",{attrs:{icon:"arrow-repeat",animation:"spin-reverse","font-scale":"4"}}):e._e()],1)]),n("b-form-group",{staticClass:"mt-4"},[n("b-alert",{attrs:{show:e.dismissCountDown,dismissible:"",fade:"",variant:"danger"},on:{"dismiss-count-down":e.countDownChanged}},[e._v(" "+e._s(e.msgNotification)+" ")])],1)],1)],1)],1)],1)],1)},s=[],u=n("1da1"),d=(n("96cf"),n("2f62")),l={data:function(){return{form:{userType:null,identificacionId:null,identificacion:null},msgNotification:null,showNotification:!1,dismissSecs:4,dismissCountDown:0,showDismissibleAlert:!1,loading:!1}},computed:Object(r["a"])({},Object(d["c"])(["userLogged","identificationTypes","userTypes"])),methods:Object(r["a"])(Object(r["a"])({},Object(d["b"])(["setLayout","loginApi","getGrupoFamiliarAfil"])),{},{onSubmit:function(){var e=this;this.showNotification=!1,this.msgNotification=null,this.loading=!0,this.loginApi(this.form).then(function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loading=!1,e.$router.push("/");case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,e.msgNotification="Los datos de acceso son incorrectos",e.showNotification=!0,e.dismissCountDown=e.dismissSecs}))},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs}})},f=l,m=(n("45e6"),n("2877")),p=Object(m["a"])(f,c,s,!1,null,null,null),h=p.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{staticStyle:{"background-color":"white",border:"solid 1px gray","box-shadow":"2px 2px 5px #999"},attrs:{text:"white"}},[n("b-navbar-brand",{attrs:{href:"https://www.alianzadiagnostica.com"}},[n("b-img",{attrs:{src:"https://www.alianzadiagnostica.com/images/logo-img.png",alt:""}})],1),n("b-navbar-nav",{directives:[{name:"show",rawName:"v-show",value:null!==e.tokenAuth,expression:"tokenAuth !== null"}],staticClass:"ml-auto"},[n("b-nav-item",[n("b-button",{staticStyle:{"background-color":"#00b350"},attrs:{variant:"success",size:"lg"},on:{click:function(t){return e.closeSesion()}}},[e._v("Salir")])],1)],1)],1),n("b-container",{staticClass:"mt-2",attrs:{fluid:"lg"}},[n("b-row",{staticClass:"mt-3"},[n("b-col",[n("router-view")],1)],1),"Home"!=e.$route.name&&"Login"!=e.$route.name?n("b-row",{staticClass:"mt-4"},[n("b-col",[n("b-button",{staticClass:"btn-menu-principal",attrs:{to:"/",variant:"dark"}},[e._v("Menú Principal")])],1)],1):e._e()],1)],1)},g=[],j={data:function(){return{}},mounted:function(){},computed:Object(r["a"])({},Object(d["c"])(["currentStep","tokenAuth"])),methods:Object(r["a"])(Object(r["a"])({},Object(d["b"])(["logout"])),{},{closeSesion:function(){var e=this;this.logout().then((function(t){e.$router.push("/login")}))}})},v=j,k=Object(m["a"])(v,b,g,!1,null,null,null),A=k.exports,w={components:{LoginLayout:h,MainLayout:A},computed:Object(r["a"])({},Object(d["c"])(["layout"]))},y=w,S=(n("b0a0"),Object(m["a"])(y,i,o,!1,null,null,null)),C=S.exports,x=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),I=(n("d81d"),n("7db0"),n("bc3a")),T=n.n(I),O="https://transaccional.saludtotal.com.co/ApiSeguridad/api",P=function(e){return new Promise((function(e,t){var n={PerfilUsuario:"IPS",TipoEmpleadorId:"N",EmpleadorId:"900038024",TipoDocumentoId:"C",DocumentoId:"915369141",Clave:"Alianza2021.",Aplicativo:"CITAS-ALIANZA"};T.a.defaults.headers.get["Content-Type"]="application/x-www-form-urlencoded",T.a.get("".concat(O,"/LogIn"),{params:n}).then((function(t){e(t.data)})).catch((function(e){t(e)}))}))},_=function(e){return new Promise((function(e,t){e({Valido:!1,Error:"Token invalido"})}))},E="https://transaccional.saludtotal.com.co/STAPI_AfiliadosPBS/api",N=function(){return new Promise((function(e,t){null===U.state.tokenAfiliado&&""===U.state.tokenAfiliado||e({Token:U.state.tokenAfiliado});var n={Token:U.state.tokenAuth,origen:"CITAS-ALIANZA"};T.a.get("".concat(E,"/Token/GetToken"),{params:n}).then(function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return U.commit("setTokenAfiliado",n.data.Token),t.next=3,z({identificacion:U.state.afiliado.identificacion,identificacionId:U.state.afiliado.identificacionId});case 3:e(n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){t(e)}))}))},z=function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(n,a){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={BeneficiarioId:t.identificacion,BeneficiarioTipoId:t.identificacionId},e.abrupt("return",T.a.get("".concat(E,"/ConsultaAfiliados/ConsultaGrupoFamiliar"),{params:i,headers:{Authorization:U.state.tokenAfiliado}}).then((function(e){U.commit("setGrupoFamiliarData",e.data),n(e.data)})).catch((function(e){a(e)})));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=(n("99af"),"https://transaccional.saludtotal.com.co/StApiAgenda/api"),F=function(){return new Promise((function(e,t){null===U.state.tokenAgenda&&""===U.state.tokenAgenda||e({Token:U.state.tokenAgenda});var n={Token:U.state.tokenAuth,aporigen:"CITAS-ALIANZA"};T.a.post("".concat(D,"/GetToken?Token=").concat(n.Token,"&aporigen=").concat(n.aporigen)).then((function(t){U.commit("setTokenAgenda",t.data.Token),e(t.data)})).catch((function(e){t(e)}))}))},L=function(e){return new Promise((function(t,n){var a={numero_documento:e.identificacion,tipo_documento:e.identificacionId};F(e.authToken).then((function(e){return T.a.get("".concat(D,"/especialidades?numero_documento=").concat(a.numero_documento,"&tipo_documento=").concat(a.tipo_documento),{headers:{Authorization:U.state.tokenAgenda}})})).then((function(e){t(e)})).catch((function(e){n(e)}))}))},R=function(e){return new Promise((function(t,n){var a={documentoafiliado:e.identificacion,tipo_documento:e.identificacionId,codespecialidad:e.especialidadCita,producto:1,citasxmedico:20,Fecha:e.fechaCita,horai:"null",mini:"null",horaf:"null",minf:"null",sede:"null",medico:"null",diassemana:"1,2,3,4,5,6,7",Oportunidad:!0};T.a.get("".concat(D,"/CitasDisponiblesAfiliado"),{params:a,headers:{Authorization:U.state.tokenAgenda}}).then((function(e){console.log("desde api",e),t(e.data)})).catch((function(e){n({message:e.response.data,status:e.response.status})}))}))},J=function(e){return new Promise((function(t,n){var a={numero_documento:e.numero_documento,tipo_documento:e.tipo_documento,idCita:e.idCita,planSalud:e.planSalud,sede:e.sede,duracion:e.duracion,fechaCita:e.fechaCita,codespecialidad:e.codespecialidad};T.a.get("".concat(D,"/citasSolicita"),{params:a,headers:{Authorization:U.state.tokenAgenda}}).then((function(e){t(e.data)})).catch((function(e){n(e)}))}))},M=function(e){return new Promise(function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(n,a){var i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i={numero_documento:e.numero_documento,tipo_documento:e.tipo_documento,aplicativoOrigen:e.aplicativoOrigen},o=null,null!==U.state.tokenAgenda){t.next=8;break}return t.next=5,F(U.state.userLogged.token);case 5:o=t.sent,t.next=9;break;case 8:o=U.state.tokenAgenda;case 9:T.a.get("".concat(D,"/CitasVigentes"),{params:i,headers:{Authorization:o}}).then((function(e){null===e.data[0].Error||""===e.data[0].Error?n(e.data):"Sin Datos"===e.data[0].Error&&n([]),a(e.data.Error)}));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())},B=function(e){return new Promise(function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(n,a){var i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i={numero_documento:e.numero_documento,tipo_documento:e.tipo_documento,aplicativoOrigen:e.aplicativoOrigen,idCita:e.idCita},o=null,null!==U.state.tokenAgenda){t.next=8;break}return t.next=5,F(U.state.userLogged.token);case 5:o=t.sent,t.next=9;break;case 8:o=U.state.tokenAgenda;case 9:T.a.get("".concat(D,"/CitasCancela"),{params:i,headers:{Authorization:o}}).then((function(e){n(e.data)})).catch((function(e){a(e)}));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())},G=n("c1df"),$=n.n(G);a["default"].use(d["a"]);var U=new d["a"].Store({state:{userTypes:[{value:null,text:"Seleccione"},{value:"AFI",text:"Afiliado"},{value:"ASE",text:"Gente Comercial"},{value:"EJE",text:"Gente Comercial"},{value:"EMP",text:"Empleadores"},{value:"IND",text:"INDEPENDIENTE"},{value:"IPS",text:"IPS"},{value:"PAC",text:"AfiliadosPac"},{value:"PAF",text:"AfiliadosPacYPos"},{value:"PAR",text:"Asesor Especialista"}],identificationTypes:[{value:null,text:"Seleccione"},{value:"C",text:"Cédula de Ciudadanía",id:1},{value:"T",text:"Tarjeta de Identidad",id:2},{value:"R",text:"Registro Civil",id:3},{value:"N",text:"Nit",id:4},{value:"E",text:"Cédula de Extranjería",id:5},{value:"CD",text:"Carnet Diplomático",id:11},{value:"CN",text:"Certificado Nacido Vivo",id:13},{value:"J",text:"Personería Jurídica",id:6},{value:"M",text:"Menor de Edad",id:7},{value:"MS",text:"Menor Sin Identificación",id:8},{value:"NU",text:"Número de Identificación Personal",id:9},{value:"P",text:"Pasaporte",id:10},{value:"PE",text:"Permiso Especial de Permanencia",id:14},{value:"SC",text:"Salvoconducto",id:12}],layout:"MainLayout",tokenAfiliado:null,tokenAgenda:null,tokenAuth:null,grupoFamiliar:[],especialidades:[],cita:{afiliado:null,especialidad:null,idCita:null,fecha:null},currentStep:0,afiliado:{}},mutations:{setLayout:function(e,t){e.layout=t},logout:function(e){e.tokenAfiliado=null,e.tokenAgenda=null,e.tokenAuth=null,e.grupoFamiliar=[],e.especialidades=[],e.cita={afiliado:null,especialidad:null,fecha:null},localStorage.removeItem("tokenAfiliado"),localStorage.removeItem("tokenAgenda"),localStorage.removeItem("tokenAuth"),localStorage.removeItem("grupoFamiliar"),localStorage.removeItem("especialidades"),localStorage.removeItem("afiliado"),e.currentStep=0},nextStep:function(e){e.currentStep+=1},prevStep:function(e){e.currentStep-=1},resetStep:function(e){e.currentStep=0,e.cita={afiliado:null,especialidad:null,fecha:null}},setTokenAfiliado:function(e,t){e.tokenAfiliado=t,localStorage.setItem("tokenAfiliado",JSON.stringify(t))},setTokenAgenda:function(e,t){e.tokenAgenda=t,localStorage.setItem("tokenAgenda",JSON.stringify(t))},setTokenAuth:function(e,t){e.tokenAuth=t,localStorage.setItem("tokenAuth",JSON.stringify(t))},setGrupoFamiliarData:function(e,t){e.grupoFamiliar=t,localStorage.setItem("grupoFamiliar",JSON.stringify(t))},setEspecialidadesData:function(e,t){e.especialidades=t,localStorage.setItem("especialidades",JSON.stringify(t))},setAfiliadoData:function(e,t){e.afiliado=t,localStorage.setItem("afiliado",JSON.stringify(t))},setAfiliadoCita:function(e,t){e.cita.afiliado=t},setEspecialidadCita:function(e,t){e.cita.especialidad=t},setFechaCita:function(e,t){e.cita.fecha=t},setIdCita:function(e,t){e.cita.idCita=t}},actions:{nextStep:function(e){e.commit("nextStep")},prevStep:function(e){e.commit("prevStep")},resetStep:function(e){e.commit("resetStep")},setLayout:function(e,t){e.commit("setLayout",t)},isLogged:function(e){var t=JSON.parse(localStorage.getItem("tokenAuth")),n=JSON.parse(localStorage.getItem("tokenAfiliado")),a=JSON.parse(localStorage.getItem("tokenAgenda")),i=JSON.parse(localStorage.getItem("grupoFamiliar")),o=JSON.parse(localStorage.getItem("especialidades")),r=JSON.parse(localStorage.getItem("afiliado"));return null!==n&&(null!==n&&e.commit("setTokenAfiliado",n),null!==a&&e.commit("setTokenAgenda",a),null!==t&&e.commit("setTokenAuth",t),null!==i&&e.commit("setGrupoFamiliarData",i),null!==i&&e.commit("setEspecialidadesData",o),null!==r&&e.commit("setAfiliadoData",r),!0)},logout:function(e){e.commit("logout")},setTokenAfiliado:function(e,t){e.commit("setTokenAfiliado",t)},setTokenAgenda:function(e,t){e.commit("setTokenAgenda",t)},setTokenAuth:function(e,t){e.commit("setTokenAuth",t)},setGrupoFamiliarData:function(e,t){e.commit("setGrupoFamiliarData",t)},setAfiliadoData:function(e,t){e.commit("setAfiliadoData",t)},setAfiliadoCita:function(e,t){e.commit("setAfiliadoCita",t)},setEspecialidadCita:function(e,t){e.commit("setEspecialidadCita",t)},setFechaCita:function(e,t){e.commit("setFechaCita",t)},setIdCita:function(e,t){e.commit("setIdCita",t)},loginApi:function(e,t){return new Promise(function(){var n=Object(u["a"])(regeneratorRuntime.mark((function n(a,i){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:P().then(function(){var n=Object(u["a"])(regeneratorRuntime.mark((function n(o){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!0!==o.Valido){n.next=10;break}return e.commit("setTokenAuth",o.Token),e.commit("setAfiliadoData",t),n.next=5,N().then(function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:return n.next=7,F();case 7:a(),n.next=11;break;case 10:i(o.Error);case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())},validateAuthToken:function(e){return new Promise((function(t,n){_(e.state.tokenAuth).then((function(e){!0===e.Valido&&t(!0),n(e.Error)})).catch((function(e){n(e)}))}))},getGrupoFamiliarAfil:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){t.state.grupoFamiliar.length>0?e(t.state.grupoFamiliar):z({identificacion:t.state.afiliado.identificacion,identificacionId:t.state.afiliado.identificacionId}).then((function(t){e(t)})).catch((function(e){n(e)}))})));case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getEspecialidadesAfil:function(e,t){return new Promise((function(t,n){e.commit("setEspecialidadCita",385),L({identificacion:e.state.cita.afiliado.identificacion,identificacionId:e.state.cita.afiliado.identificacionId}).then((function(n){e.commit("setEspecialidadesData",n.data),t(n.data)})).catch((function(e){n(e)}))}))},getAgenda:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){R({identificacion:t.state.cita.afiliado.identificacion,identificacionId:t.state.cita.afiliado.identificacionId,especialidadCita:t.state.cita.especialidad,fechaCita:t.state.cita.fecha,tokenAgenda:t.state.tokenAgenda}).then((function(t){var n=t.map((function(e){return{idCita:e.IdCita,medico:e.Medico,fecha:$()(e.Fecha).locale("es").format("LL"),hora:$()(e.Fecha).format("hh:mm a"),sede:e.IPS,codSede:e.codsede,dirSede:e.DirIPS,duracion:e.Duracion}}));e(n)})).catch((function(e){n(e)}))})));case 1:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),getInfoAfiliado:function(e){return new Promise((function(t,n){var a=e.state.grupoFamiliar.find((function(t){return t.BeneficiarioId==e.state.cita.afiliado.identificacion}));t(a)}))},asignarCita:function(e,t){return new Promise((function(n,a){var i=t;J({numero_documento:e.state.cita.afiliado.identificacion,tipo_documento:e.state.cita.afiliado.identificacionId,idCita:i.idCita,planSalud:1,sede:i.sede,duracion:i.duracion,fechaCita:e.state.cita.fecha,codespecialidad:e.state.cita.especialidad}).then((function(e){n(e)})).catch((function(e){a(e)}))}))},getCitasVigentes:function(e,t){return new Promise((function(n,a){var i=e.state.grupoFamiliar.find((function(e){return e.BeneficiarioId==t})),o=e.state.identificationTypes.find((function(e){return e.value==i.BeneficiarioTipoId}));M({numero_documento:i.BeneficiarioId,tipo_documento:o.id,aplicativoOrigen:2}).then((function(e){n(e)})).catch((function(e){a(e)}))}))},cancelaCita:function(e,t){return new Promise((function(n,a){var i=e.state.grupoFamiliar.find((function(e){return e.BeneficiarioId==t.afiliado})),o=e.state.identificationTypes.find((function(e){return e.value==i.BeneficiarioTipoId}));B({numero_documento:i.BeneficiarioId,tipo_documento:o.id,aplicativoOrigen:"AgendaIT",idCita:t.idCita}).then((function(e){n(e)})).catch((function(e){a(e)}))}))}},modules:{}});a["default"].use(x["a"]);var q=[{path:"/",name:"Home",component:function(){return n.e("chunk-7d27cc14").then(n.bind(null,"8663"))}},{path:"/citas",name:"Citas",component:function(){return n.e("chunk-a72e6670").then(n.bind(null,"d1bd"))}},{path:"/mis-citas",name:"MisCitas",component:function(){return n.e("chunk-30660e9f").then(n.bind(null,"d204"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-9edc8fa2").then(n.bind(null,"77ca"))}}],V=new x["a"]({mode:"history",base:"/citasweb/",routes:q}),H=V,Z=n("025a"),K=(n("c91a"),n("5f5b")),Y=n("b1e0");n("f9e3"),n("2dd8"),n("41d0");a["default"].config.productionTip=!1,a["default"].use(K["a"]),a["default"].use(Y["a"]),a["default"].use(Z["a"],{defaultPosition:"toast-bottom-right",defaultCloseOnHover:!1,defaultClassNames:["animated","zoomInUp"],clickClose:!0}),new a["default"]({router:H,store:U,render:function(e){return e(C)}}).$mount("#app")},b0a0:function(e,t,n){"use strict";n("452c")}});
//# sourceMappingURL=app.9467e63c.js.map