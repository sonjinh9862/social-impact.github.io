(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21da8f"],{d1f2:function(e,t,n){"use strict";n.r(t);var i=n("7a23");const c=Object(i["h"])("10월 넷째주"),r=Object(i["h"])("오!동네 통합 멤버십"),o=Object(i["h"])(" 오."),a=Object(i["g"])("b",null,"동.통!",-1),l=Object(i["h"])("우리 동네 살찌우기 프로젝트 🤒"),f=Object(i["h"])(" ? 공지사항 "),s=Object(i["h"])("이번 주 내가 다녀온 멤버십");function d(e,t,n,d,b,p){const j=Object(i["w"])("Date"),u=Object(i["w"])("SubTitle"),O=Object(i["w"])("AppTitle"),x=Object(i["w"])("ExplainTitle"),g=Object(i["w"])("AppTitleArea"),m=Object(i["w"])("Notice"),h=Object(i["w"])("CardButtonLong"),w=Object(i["w"])("CardButtonDefault"),B=Object(i["w"])("SubCardArea"),y=Object(i["w"])("CardArea"),k=Object(i["w"])("WeekTitle"),v=Object(i["w"])("BenefitCardHalf"),C=Object(i["w"])("Week"),_=Object(i["w"])("Container");return Object(i["r"])(),Object(i["d"])(_,null,{default:Object(i["B"])(()=>[Object(i["i"])(j,null,{default:Object(i["B"])(()=>[c]),_:1}),Object(i["i"])(g,null,{default:Object(i["B"])(()=>[Object(i["i"])(u,null,{default:Object(i["B"])(()=>[r]),_:1}),Object(i["i"])(O,null,{default:Object(i["B"])(()=>[o,a]),_:1}),Object(i["i"])(x,null,{default:Object(i["B"])(()=>[l]),_:1})]),_:1}),Object(i["i"])(m,null,{default:Object(i["B"])(()=>[f]),_:1}),Object(i["i"])(y,null,{default:Object(i["B"])(()=>[Object(i["i"])(h,{title:"이번 주\n살찌는\n멤버십.",explain:"새로운 멤버쉽이 업데이트 됐어요!",onClick:t[0]||(t[0]=e=>d.pushRouter("/membership"))},null,8,["title"]),Object(i["i"])(B,null,{default:Object(i["B"])(()=>[(Object(i["r"])(!0),Object(i["f"])(i["a"],null,Object(i["v"])(d.cards,e=>(Object(i["r"])(),Object(i["d"])(w,{key:e.key,title:e.title,explain:e.explain,badge:e.badge,titleBackground:e.titleBackground,src:e.src,onClick:t=>d.pushRouter(e.toRoutePath)},null,8,["title","explain","badge","titleBackground","src","onClick"]))),128))]),_:1})]),_:1}),Object(i["i"])(k,null,{default:Object(i["B"])(()=>[s]),_:1}),Object(i["i"])(C,null,{default:Object(i["B"])(()=>[(Object(i["r"])(!0),Object(i["f"])(i["a"],null,Object(i["v"])(d.cardList,e=>(Object(i["r"])(),Object(i["d"])(v,{key:e,storeName:e.storeName,storeBenefit:e.storeBenefit,color:e.color},null,8,["storeName","storeBenefit","color"]))),128))]),_:1})]),_:1})}n("14d9");var b=n("f6f8");function p(e,t,n,c,r,o){const a=Object(i["w"])("Explain"),l=Object(i["w"])("Title"),f=Object(i["w"])("Container");return Object(i["r"])(),Object(i["d"])(f,{src:n.src},{default:Object(i["B"])(()=>[n.explain?(Object(i["r"])(),Object(i["d"])(a,{key:0},{default:Object(i["B"])(()=>[Object(i["h"])(Object(i["y"])(n.explain),1)]),_:1})):Object(i["e"])("",!0),n.title?(Object(i["r"])(),Object(i["d"])(l,{key:1,isExplain:n.explain},{default:Object(i["B"])(()=>[Object(i["h"])(Object(i["y"])(n.title),1)]),_:1},8,["isExplain"])):Object(i["e"])("",!0)]),_:1},8,["src"])}const j=Object(b["a"])("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 17px 23px;
  height: 435px;
  border-radius: 30px;
  background-image: url(${e=>e.src?"src/assets/"+e.src+".png":""});
  background-repeat: none;
  background-size: cover;
  background-position: center;
  background-color: ${e=>e.src?"":"#D9D9D9"};
  box-sizing: border-box;
`,u=Object(b["a"])("div")`
  font-size: 10px;
  color: #ffffff;
  text-align: start;
  font-weight: 600;
  width: 100%;
`,O=Object(b["a"])("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 1.5;
  gap: 7px;
  margin-top: ${e=>e.isExplain?"30px":"41px"};
  font-size: 25px;
  font-weight: 900;
  color: #ffffff;
  text-align: left;
  white-space: pre;
`;var x={name:"CardButtonLong",components:{Container:j,Explain:u,Title:O},props:{src:{type:String,default:""},explain:{type:String,default:""},title:{type:String,default:""}},setup(e){return{...e}}},g=n("6b0d"),m=n.n(g);const h=m()(x,[["render",p]]);var w=h;function B(e,t,c,r,o,a){const l=Object(i["w"])("Badge"),f=Object(i["w"])("Title"),s=Object(i["w"])("Explain"),d=Object(i["w"])("BlackBgColor"),b=Object(i["w"])("Container");return Object(i["r"])(),Object(i["d"])(b,{srcUrl:c.src?n("9e01")(`./${c.src}.png`):"",isSrc:c.src},{default:Object(i["B"])(()=>[Object(i["i"])(d,{color:c.titleBackground},{default:Object(i["B"])(()=>[c.title?(Object(i["r"])(),Object(i["d"])(f,{key:0},{default:Object(i["B"])(()=>[Object(i["h"])(Object(i["y"])(c.title)+" ",1),c.badge?(Object(i["r"])(),Object(i["d"])(l,{key:0},{default:Object(i["B"])(()=>[Object(i["h"])(Object(i["y"])(c.badge),1)]),_:1})):Object(i["e"])("",!0)]),_:1})):Object(i["e"])("",!0),c.explain?(Object(i["r"])(),Object(i["d"])(s,{key:1},{default:Object(i["B"])(()=>[Object(i["h"])(Object(i["y"])(c.explain),1)]),_:1})):Object(i["e"])("",!0)]),_:1},8,["color"])]),_:1},8,["srcUrl","isSrc"])}const y=Object(b["a"])("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  border-radius: 30px;
  height: 205px;
  background-image: url(${e=>e.srcUrl?""+e.srcUrl:""});
  background-repeat: none;
  background-size: cover;
  background-position: center;
  background-color: ${e=>e.isSrc?"":"#D9D9D9"};
  box-sizing: border-box;
  overflow: hidden;
  filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.3));
  box-shadow: inset 0px 4px 8px rgba(0, 0, 0, 0.3);
`,k=Object(b["a"])("div")`
  font-size: 3px;
  color: #ffffff;
  text-align: center;
  font-weight: 600;
  text-align: start;
  width: 100%;
`,v=Object(b["a"])("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 1.2;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  text-align: left;
  white-space: pre;
`,C=Object(b["a"])("div")`
  position: absolute;
  margin-left: 60px;
  transform: rotate(40deg);
  font-size: 10px;
  font-weight: 600;
  color: #ffffff;
`,_=Object(b["a"])("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 7px 17px 0 17px;
  width: 100%;
  height: 84px;
  background-color: ${e=>e.color?"rgba(0, 0, 0, 0.4)":""};
`;var S={name:"CardButtonDefault",components:{Container:y,Explain:k,Title:v,Badge:C,BlackBgColor:_},props:{src:{type:String,default:""},explain:{type:String,default:""},title:{type:String,default:""},badge:{type:String,default:""},titleBackground:{type:Boolean,default:void 0}},setup(e){const t="src/assets/"+e.src+".png";return{...e,imgUrl:t}}};const N=m()(S,[["render",B]]);var z=N,T=n("6c02");function D(e,t,n,c,r,o){const a=Object(i["w"])("Image"),l=Object(i["w"])("StoreName"),f=Object(i["w"])("StoreBenefit"),s=Object(i["w"])("Content"),d=Object(i["w"])("Container");return Object(i["r"])(),Object(i["d"])(d,{color:n.color},{default:Object(i["B"])(()=>[Object(i["i"])(a,{src:"food",width:50,height:50,radius:100}),Object(i["i"])(s,null,{default:Object(i["B"])(()=>[Object(i["i"])(l,{class:"name"},{default:Object(i["B"])(()=>[Object(i["h"])(Object(i["y"])(n.storeName),1)]),_:1}),Object(i["i"])(f,null,{default:Object(i["B"])(()=>[Object(i["h"])(Object(i["y"])(n.storeBenefit),1)]),_:1})]),_:1})]),_:1},8,["color"])}var A=n("a142");const E=b["a"].div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${e=>e.color?e.color:"#6cce70"};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin: 0 10px 0 10px;
  padding: 26px;
`,R=b["a"].div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 12px;
`,$=b["a"].div`
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
`,F=b["a"].div`
  font-size: 1.2em;
  font-weight: 600;
  color: #ffffff;
  width: max-content;
`;var L={name:"Membership",components:{Container:E,Image:A["a"],StoreName:$,StoreBenefit:F,Content:R},props:{storeName:String,storeBenefit:String,color:String},setup(e){return{...e}}};const U=m()(L,[["render",D]]);var W=U;const H=Object(b["a"])("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`,I=Object(b["a"])("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 18px 24px 0 0;
  font-size: 12px;
  color: #797979;
`,P=Object(b["a"])("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 24px;
`,J=Object(b["a"])("div")`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 3px;
`,M=Object(b["a"])("div")`
  font-size: 40px
  font-weight: 500;
  margin-bottom: 16px;
`,q=Object(b["a"])("div")`
  font-size: 20px;
  color: #797979;
`,G=Object(b["a"])("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0 54px;
  margin-top: 46px;
  font-size: 12px;
  color: #797979;
`,K=Object(b["a"])("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  gap: 24px;
  margin: 18px 24px 0 24px;
`,Q=Object(b["a"])("div")`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  gap: 25px;
  width: 45%;
`,V=b["a"].div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow: scroll;
  padding: 0 10px 0 10px;
`,X=b["a"].div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 20px;
  color: #797979;
  margin: 90px 24px 18px 24px;
`;var Y={components:{Container:H,CardArea:K,CardButtonLong:w,CardButtonDefault:z,SubCardArea:Q,Date:I,AppTitleArea:P,SubTitle:J,AppTitle:M,ExplainTitle:q,Notice:G,Week:V,WeekTitle:X,BenefitCardHalf:W},name:"Home",props:{},setup(e){const t=Object(i["t"])([{key:1,name:"benefits",title:"내가 받은\n혜택 리스트",explain:"나의 혜택 리스트 확인하기",titleBackground:!1,toRouteName:"NcsedBenefits",toRoutePath:"/ncs/benefits"},{key:2,name:"map",title:"오동통,\n살찌는 지도",explain:"살찌는~지도!",badge:"클릭!",titleBackground:!0,src:"SI-landing",toRouteName:"NcsedMap",toRoutePath:"/ncs/map"}]),n=Object(i["t"])([{storeName:"카레집",storeBenefit:"10%"},{storeName:"카레집",storeBenefit:"음료수 1캔"},{storeName:"카레집",storeBenefit:"돈까스 무료",color:"#FFCF88"},{storeName:"카레집",storeBenefit:"20%",color:"#FFCF88"},{storeName:"카레집",storeBenefit:"30%",color:"#904DC5"},{storeName:"카레집",storeBenefit:"35%",color:"#904DC5"}]),c=Object(T["c"])(),r=e=>{c.push({path:e})};return{...e,cards:t,cardList:n,pushRouter:r}}};const Z=m()(Y,[["render",d]]);t["default"]=Z}}]);
//# sourceMappingURL=chunk-2d21da8f.c9d3ec90.js.map