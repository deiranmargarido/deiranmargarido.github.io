import{av as o,aw as e}from"./index-571bec17.js";const n=o("formapagamento",{state:()=>({formapagamento:[]}),getters:{getFormaPagamento(a){return a.formapagamento}},actions:{async list(a){await e.get("/formapagamento",{params:a}).then(t=>{this.formapagamento=t.data.formaspagamento})}}});export{n as u};
