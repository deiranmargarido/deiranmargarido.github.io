import{av as q,aw as A,x as F,_ as i,aM as k,ax as w,aT as L,o as g,c as P,w as t,e,aK as E,aL as K,Y as D,X as n,W as h,aO as O,z as c,aU as W,I as C,aV as $,d as v,q as I,s as z,g as H,H as R,h as b,t as x,u as X,K as Y,aP as G,r as J,aW as Q,a4 as Z,a5 as ee}from"./index-66469cf1.js";import{l as ae}from"./lojas-d0037ecf.js";import{_ as te}from"./_plugin-vue_export-helper-c27b6911.js";const le=q("vendas",{state:()=>({vendas:[],totais:0}),getters:{getVendas(s){return s.vendas},getTotais(s){return s.totais}},actions:{async list(s){await A.get("/vendas",{params:s}).then(u=>{this.vendas=u.data.vendas;let o=0;this.totais=this.vendas.value.map(d=>{o+=d.vlrTotal})})}}}),se=s=>(Z("data-v-7c5598c7"),s=s(),ee(),s),oe=b(" Pesquisar "),ne=se(()=>v("th",{class:"font-weight-bold text-h6"},"Total:",-1)),de={class:"font-weight-bold text-h6"},re=F({setup(s){const u=le(),o=G("filters"),d=i("TO"),p=i(k(new Date,"dd/MM/yyyy")),_=i(k(new Date,"dd/MM/yyyy")),T=w(()=>u.vendas),S=w(()=>{let y=0;return T.value.map(l=>{y+=l.vlrTotal}),y});function f(){u.list({loja:d.value,data1:o==null?void 0:o.convertDate(p.value),data2:o==null?void 0:o.convertDate(_.value)})}L(()=>{f()});const j=[{title:"Empresa",align:"left",key:"loja"},{title:"Valor Total",align:"left",key:"vlrTotal"}],V=i("");return i({title:"Vendas"}),(y,l)=>{const B=J("Alert"),M=Q("mask");return g(),P(D,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(E,null,{default:t(()=>[e(K,{class:"pa-5"},{default:t(()=>[e(D,null,{default:t(()=>[e(n,{cols:"12",lg:"6",md:"6"},{default:t(()=>[e(h,{modelValue:V.value,"onUpdate:modelValue":l[0]||(l[0]=a=>V.value=a),label:"Pesquisar","hide-details":"","base-color":"#000"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",lg:"6",md:"6"},{default:t(()=>[e(O,{label:"Loja",modelValue:d.value,"onUpdate:modelValue":l[1]||(l[1]=a=>d.value=a),items:c(ae),"hide-details":"","base-color":"#000",onBlur:l[2]||(l[2]=a=>f()),"item-title":"descricao","item-value":"id"},null,8,["modelValue","items"])]),_:1}),e(n,{cols:"12",lg:"5",md:"6"},{default:t(()=>[W(e(h,{density:"compact",modelValue:p.value,"onUpdate:modelValue":l[3]||(l[3]=a=>p.value=a),label:"Data Inicial","hide-details":"","base-color":"#000"},null,8,["modelValue"]),[[M,["##/##/####"]]])]),_:1}),e(n,{cols:"12",lg:"5",md:"6"},{default:t(()=>[e(h,{density:"compact",modelValue:_.value,"onUpdate:modelValue":l[4]||(l[4]=a=>_.value=a),label:"Data Final","hide-details":"","base-color":"#000",clearable:""},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",lg:"2",md:"2"},{default:t(()=>[e(C,{color:"primary",onClick:l[5]||(l[5]=a=>f())},{default:t(()=>[oe]),_:1})]),_:1})]),_:1}),e(B,{ref:"alert"},null,512),e($,{class:"elevation-3 mt-5",headers:j,items:c(T),title:"Assinaturas","item-value":"name",search:V.value,density:"compact","no-data-text":"Nada consta na base dados"},{headers:t(({columns:a,isSorted:m,getSortIcon:U,toggleSort:N})=>[v("tr",null,[(g(!0),I(X,null,z(a,r=>(g(),I("td",{key:r.key,class:"px-0"},[e(C,{class:"text-none",color:"primary",rounded:"0",density:"compact",variant:"flat",style:{"text-aling":"left"},onClick:()=>N(r),block:""},H({default:t(()=>[b(x(r.title)+" ",1)]),_:2},[m(r)?{name:"append",fn:t(()=>[e(R,{icon:U(r),color:"warning"},null,8,["icon"])])}:void 0]),1032,["onClick"])]))),128))])]),"item.vlrTotal":t(({item:a})=>{var m;return[b(x((m=c(o))==null?void 0:m.currency(a.vlrTotal)),1)]}),tfoot:t(()=>{var a;return[e(Y),v("tr",null,[ne,v("td",de,x((a=c(o))==null?void 0:a.currency(c(S))),1)])]}),_:1},8,["headers","items","search"])]),_:1})]),_:1})]),_:1})]),_:1})}}});const me=te(re,[["__scopeId","data-v-7c5598c7"]]);export{me as default};
