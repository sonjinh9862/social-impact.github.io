(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221a64"],{caf6:function(e,t,o){"use strict";o.r(t);var n=o("7a23");const r=Object(n["h"])("할인 받고 싶은 가게를"),c=Object(n["g"])("br",null,null,-1),i=Object(n["h"])("인증하세요"),a=Object(n["h"])("멤버십 3곳을 이용하고 추가 혜택을 받으세요.");function l(e,t,o,l,f,s){const b=Object(n["w"])("Image"),d=Object(n["w"])("TopDiv"),j=Object(n["w"])("Title"),u=Object(n["w"])("SubTitle"),p=Object(n["w"])("BenefitCardDefault"),O=Object(n["w"])("ContentContainer"),m=Object(n["w"])("Container");return Object(n["r"])(),Object(n["d"])(m,null,{default:Object(n["B"])(()=>[Object(n["i"])(d,null,{default:Object(n["B"])(()=>[Object(n["i"])(b,{src:"back-x",width:18,onClick:t[0]||(t[0]=e=>l.pushRouter("/"))})]),_:1}),Object(n["i"])(j,null,{default:Object(n["B"])(()=>[r,c,i]),_:1}),Object(n["i"])(u,null,{default:Object(n["B"])(()=>[a]),_:1}),Object(n["i"])(O,null,{default:Object(n["B"])(()=>[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(l.cardList,e=>(Object(n["r"])(),Object(n["d"])(p,{key:e,storeName:e.storeName,storeBenefit:e.storeBenefit,color:e.color},null,8,["storeName","storeBenefit","color"]))),128))]),_:1})]),_:1})}o("14d9");var f=o("f6f8"),s=o("a142"),b=o("6c02");function d(e,t,o,r,c,i){const a=Object(n["w"])("Image"),l=Object(n["w"])("StoreName"),f=Object(n["w"])("StoreBenefit"),s=Object(n["w"])("Container");return Object(n["r"])(),Object(n["d"])(s,{color:o.color},{default:Object(n["B"])(()=>[Object(n["i"])(a,{src:"food",width:50,height:50,radius:100}),Object(n["i"])(l,{class:"name"},{default:Object(n["B"])(()=>[Object(n["h"])(Object(n["y"])(o.storeName),1)]),_:1}),Object(n["i"])(f,null,{default:Object(n["B"])(()=>[Object(n["h"])(Object(n["y"])(o.storeBenefit),1)]),_:1})]),_:1},8,["color"])}const j=f["a"].div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-grow: 1;
  background-color: ${e=>e.color?e.color:"#6cce70"};
  border-radius: 30px;
  padding: 26px;
  width: 20%;
`,u=f["a"].div`
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  margin-top: 5vh;
`,p=f["a"].div`
  font-size: 1.2em;
  font-weight: 600;
  color: #ffffff;
`;var O={name:"Membership",components:{Container:j,Image:s["a"],StoreName:u,StoreBenefit:p},props:{storeName:String,storeBenefit:String,color:String},setup(e){return{...e}}},m=o("6b0d"),x=o.n(m);const w=x()(O,[["render",d]]);var g=w;const h=f["a"].div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 32px 24px;
`,B=f["a"].div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 7px;
`,v=f["a"].div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: left;
  font-size: 22px;
  font-weight: 900;
  margin-bottom: 23px;
`,y=f["a"].div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 12px;
  color: #797979;
`,C=f["a"].div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 26px;
  margin-top: 63px;
`;var N={name:"Membership",components:{Container:h,TopDiv:B,Title:v,SubTitle:y,Image:s["a"],ContentContainer:C,BenefitCardDefault:g},props:{},setup(e){const t=Object(b["c"])(),o=e=>{t.push({path:e})},r=Object(n["t"])([{storeName:"카레집",storeBenefit:"10%"},{storeName:"카레집",storeBenefit:"음료수 1캔"},{storeName:"카레집",storeBenefit:"돈까스 무료",color:"#FFCF88"},{storeName:"카레집",storeBenefit:"20%",color:"#FFCF88"},{storeName:"카레집",storeBenefit:"30%",color:"#904DC5"},{storeName:"카레집",storeBenefit:"35%",color:"#904DC5"}]);return{...e,pushRouter:o,cardList:r}}};const S=x()(N,[["render",l]]);t["default"]=S}}]);
//# sourceMappingURL=chunk-2d221a64.3a20dfbf.js.map