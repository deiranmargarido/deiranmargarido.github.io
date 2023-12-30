import{x as B,_ as u,o as C,c as E,w as l,h as v,t as N,aX as P,l as $,O as T,B as W,aN as q,e,X as S,aK as A,Y as I,aY as H,d as t,a9 as R,q as F,aZ as L,I as V,p as O,a_ as X,a$ as U,b0 as Y,W as b,H as y,ap as z}from"./index-f8fc41f9.js";import{_ as D}from"./Progress.vue_vue_type_script_setup_true_lang-34ed0a59.js";const K="/assets/3565176-1e6531de.jpg",M="/assets/logo2-340fe93f.png",Z=B({setup(j,{expose:h}){const d=u(""),c=u(void 0),s=u(!1);function n(){setTimeout(()=>{s.value=!1},3e3)}function f(r,_){d.value=r,c.value=_,s.value=!0,n()}function w(r){d.value=r,s.value=!0,n()}function g(r){d.value=r,c.value="info",s.value=!0,n()}function m(r){d.value=r,c.value="error",s.value=!0,n()}function x(r){d.value=r,c.value="warning",s.value=!0,n()}return h({show:f,showSuccess:w,showInfo:g,showError:m,showWarning:x}),(r,_)=>s.value?(C(),E(P,{key:0,modelValue:s.value,"onUpdate:modelValue":_[0]||(_[0]=k=>s.value=k),class:"ma-1 pa-1",closable:"",type:c.value,variant:"outlined"},{default:l(()=>[v(N(d.value),1)]),_:1},8,["modelValue","type"])):$("",!0)}}),G=t("img",{width:400,"aspect-ratio":"16/9",src:K,alt:"bg-img"},null,-1),J={class:"pa-7 pa-sm-8"},Q=t("img",{width:"65",src:M},null,-1),ee={class:"d-sm-flex align-center"},le={class:"font-weight-bold text--darken-2"},ae={key:0,class:"ml-auto"},oe=v(" Usuário "),te=t("strong",null,null,-1),se=v(" Senha "),ne=t("strong",null,null,-1),ue=v("Entrar"),re=v(" Serve "),ie=t("strong",null," Host",-1),de=t("strong",null,"Porta",-1),ce={class:"d-sm-flex align-center"},ve={class:"d-block d-sm-flex align-center text-subtitle-2 mb-4 mb-sm-0"},me=v("Salvar"),_e={class:"ml-auto"},pe=v("Voltar"),fe=t("div",{class:"text-center mt-6"},[t("div",{class:"d-flex align-center justify-center gap-2"})],-1),Ve=B({setup(j){u(!1);const h=u(!0),d=u(""),c=u(""),s=u(""),n=u(1),f=u(""),w=u([i=>!!i||"Senha Obrigatória",i=>i&&i.length<=15||"A senha deve ter menos de 15 caracteres"]);u([i=>!!i||"E-mail é obrigatório",i=>/.+@.+\..+/.test(i)||"E-mail invalido !!"]),n.value;const g=u(null),m=u(null),x=T(),r=W();async function _(){var i;(i=m.value)==null||i.show(),r.login({usuario:f.value,senha:d.value}).then(o=>{var a,p;(a=m.value)==null||a.hide(),o.Code==="400"?(p=g.value)==null||p.show("Usuário ou senha invalida!! ","error"):x.push("/dashboard")}).catch(o=>{var a,p;(a=m.value)==null||a.hide(),(p=g.value)==null||p.show("Usuário ou senha invalida!! ","error")})}function k(){localStorage.setItem("host",c.value??""),localStorage.setItem("port",s.value??""),n.value=1}return q(()=>{localStorage.getItem("host")!==null&&localStorage.getItem("port")!==null&&(c.value=localStorage.getItem("host"),s.value=localStorage.getItem("port"))}),(i,o)=>(C(),E(z,null,{default:l(()=>[e(I,{justify:"center",class:"h-100vh",align:"center"},{default:l(()=>[e(S,{lg:"8",sm:"8",xl:"7"},{default:l(()=>[e(A,{elevation:"10"},{default:l(()=>[e(I,null,{default:l(()=>[e(S,{lg:"6",class:"bg-primary d-none d-md-flex align-center justify-center pa-0"},{default:l(()=>[e(H,{height:"400"},{default:l(()=>[G]),_:1})]),_:1}),e(S,{class:"pa-0",lg:"6"},{default:l(()=>[t("div",J,[Q,t("div",ee,[t("div",null,[t("h2",le,N(n.value===1?"Login":"Configurações"),1)]),e(R),n.value===1?(C(),F("div",ae,[e(L,{text:"Configurações"},{activator:l(({props:a})=>[e(V,O({onClick:o[0]||(o[0]=p=>n.value=2)},a,{color:"secundary",variant:"text",density:"compact",icon:"mdi-cog-outline"}),null,16)]),_:1})])):$("",!0)]),e(Z,{ref_key:"alert",ref:g},null,512),e(D,{ref_key:"progress",ref:m},null,512),e(X,{modelValue:n.value,"onUpdate:modelValue":o[7]||(o[7]=a=>n.value=a)},{default:l(()=>[e(U,{value:1},{default:l(()=>[e(Y,{ref:"form",modelValue:h.value,"onUpdate:modelValue":o[3]||(o[3]=a=>h.value=a),"lazy-validation":""},{default:l(()=>[e(b,{modelValue:f.value,"onUpdate:modelValue":o[1]||(o[1]=a=>f.value=a),label:"Usuário",class:"mt-4",required:"","base-color":"#000",variant:"outlined"},{label:l(()=>[t("span",null,[e(y,{icon:"mdi mdi-account"}),oe,te])]),_:1},8,["modelValue"]),e(b,{modelValue:d.value,"onUpdate:modelValue":o[2]||(o[2]=a=>d.value=a),counter:15,rules:w.value,label:"Senha",required:"","base-color":"#000",variant:"outlined",type:"password"},{label:l(()=>[t("span",null,[e(y,{icon:"mdi mdi-key"}),se,ne])]),_:1},8,["modelValue","rules"]),e(V,{color:"primary",onClick:_,block:"",class:"py-6",submit:""},{default:l(()=>[ue]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(U,{value:2},{default:l(()=>[e(b,{modelValue:c.value,"onUpdate:modelValue":o[4]||(o[4]=a=>c.value=a),label:"Serve Host",class:"mt-4","base-color":"#000",variant:"outlined"},{label:l(()=>[t("span",null,[e(y,{icon:"mdi-ip-network-outline"}),re,ie])]),_:1},8,["modelValue"]),e(b,{modelValue:s.value,"onUpdate:modelValue":o[5]||(o[5]=a=>s.value=a),label:"Porta","label-class":"v-label--bold","base-color":"#000",variant:"outlined"},{label:l(()=>[t("span",null,[e(y,{icon:"mdi mdi-door"}),de])]),_:1},8,["modelValue"]),t("div",ce,[t("div",ve,[e(V,{color:"primary",onClick:k,block:"",class:"py-6"},{default:l(()=>[me]),_:1})]),t("div",_e,[e(V,{color:"warning",onClick:o[6]||(o[6]=a=>n.value=1),block:"",class:"py-6"},{default:l(()=>[pe]),_:1})])])]),_:1})]),_:1},8,["modelValue"]),fe])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{Ve as default};
