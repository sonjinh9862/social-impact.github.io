(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21da8f"],{d1f2:function(t,e,n){"use strict";n.r(e);var c=n("7a23");const i=Object(c["h"])("10월 첫째주"),a=Object(c["h"])("오!동네 통합 멤버십"),l=Object(c["h"])(" 오."),r=Object(c["g"])("b",null,"동.통!",-1),o=Object(c["h"])("우리 동네 살찌우기 프로젝트 🤒"),d=Object(c["h"])(" ? 공지사항 ");function b(t,e,n,b,s,f){const p=Object(c["w"])("Date"),u=Object(c["w"])("SubTitle"),j=Object(c["w"])("AppTitle"),x=Object(c["w"])("ExplainTitle"),O=Object(c["w"])("AppTitleArea"),g=Object(c["w"])("Notice"),h=Object(c["w"])("CardButtonLong"),w=Object(c["w"])("CardButtonDefault"),m=Object(c["w"])("SubCardArea"),y=Object(c["w"])("CardArea"),B=Object(c["w"])("Container");return Object(c["r"])(),Object(c["d"])(B,null,{default:Object(c["B"])(()=>[Object(c["i"])(p,null,{default:Object(c["B"])(()=>[i]),_:1}),Object(c["i"])(O,null,{default:Object(c["B"])(()=>[Object(c["i"])(u,null,{default:Object(c["B"])(()=>[a]),_:1}),Object(c["i"])(j,null,{default:Object(c["B"])(()=>[l,r]),_:1}),Object(c["i"])(x,null,{default:Object(c["B"])(()=>[o]),_:1})]),_:1}),Object(c["i"])(g,null,{default:Object(c["B"])(()=>[d]),_:1}),Object(c["i"])(y,null,{default:Object(c["B"])(()=>[Object(c["i"])(h,{title:"이번 주\n살찌는\n멤버십.",explain:"새로운 멤버쉽이 업데이트 됐어요!"},null,8,["title"]),Object(c["i"])(m,null,{default:Object(c["B"])(()=>[(Object(c["r"])(!0),Object(c["f"])(c["a"],null,Object(c["v"])(b.cards,t=>(Object(c["r"])(),Object(c["d"])(w,{key:t.key,title:t.title,explain:t.explain,badge:t.badge,titleBackground:t.titleBackground,src:t.src,onClick:e=>b.pushRouter(t.toRoutePath)},null,8,["title","explain","badge","titleBackground","src","onClick"]))),128))]),_:1})]),_:1})]),_:1})}n("14d9");var s=n("f6f8");function f(t,e,n,i,a,l){const r=Object(c["w"])("Explain"),o=Object(c["w"])("Title"),d=Object(c["w"])("Container");return Object(c["r"])(),Object(c["d"])(d,{src:n.src},{default:Object(c["B"])(()=>[n.explain?(Object(c["r"])(),Object(c["d"])(r,{key:0},{default:Object(c["B"])(()=>[Object(c["h"])(Object(c["y"])(n.explain),1)]),_:1})):Object(c["e"])("",!0),n.title?(Object(c["r"])(),Object(c["d"])(o,{key:1,isExplain:n.explain},{default:Object(c["B"])(()=>[Object(c["h"])(Object(c["y"])(n.title),1)]),_:1},8,["isExplain"])):Object(c["e"])("",!0)]),_:1},8,["src"])}const p=Object(s["a"])("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 17px 23px;
  height: 435px;
  border-radius: 30px;
  background-image: url(${t=>t.src?"src/assets/"+t.src+".png":""});
  background-repeat: none;
  background-size: cover;
  background-position: center;
  background-color: ${t=>t.src?"":"#D9D9D9"};
  box-sizing: border-box;
`,u=Object(s["a"])("div")`
  font-size: 10px;
  color: #ffffff;
  text-align: start;
  font-weight: 600;
  width: 100%;
`,j=Object(s["a"])("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 1.5;
  gap: 7px;
  margin-top: ${t=>t.isExplain?"30px":"41px"};
  font-size: 25px;
  font-weight: 900;
  color: #ffffff;
  text-align: left;
  white-space: pre;
`;var x={name:"CardButtonLong",components:{Container:p,Explain:u,Title:j},props:{src:{type:String,default:""},explain:{type:String,default:""},title:{type:String,default:""}},setup(t){return{...t}}},O=n("6b0d"),g=n.n(O);const h=g()(x,[["render",f]]);var w=h;function m(t,e,i,a,l,r){const o=Object(c["w"])("Badge"),d=Object(c["w"])("Title"),b=Object(c["w"])("Explain"),s=Object(c["w"])("BlackBgColor"),f=Object(c["w"])("Container");return Object(c["r"])(),Object(c["d"])(f,{srcUrl:i.src?n("9e01")(`./${i.src}.png`):"",isSrc:i.src},{default:Object(c["B"])(()=>[Object(c["i"])(s,{color:i.titleBackground},{default:Object(c["B"])(()=>[i.title?(Object(c["r"])(),Object(c["d"])(d,{key:0},{default:Object(c["B"])(()=>[Object(c["h"])(Object(c["y"])(i.title)+" ",1),i.badge?(Object(c["r"])(),Object(c["d"])(o,{key:0},{default:Object(c["B"])(()=>[Object(c["h"])(Object(c["y"])(i.badge),1)]),_:1})):Object(c["e"])("",!0)]),_:1})):Object(c["e"])("",!0),i.explain?(Object(c["r"])(),Object(c["d"])(b,{key:1},{default:Object(c["B"])(()=>[Object(c["h"])(Object(c["y"])(i.explain),1)]),_:1})):Object(c["e"])("",!0)]),_:1},8,["color"])]),_:1},8,["srcUrl","isSrc"])}const y=Object(s["a"])("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  border-radius: 30px;
  height: 205px;
  background-image: url(${t=>t.srcUrl?""+t.srcUrl:""});
  background-repeat: none;
  background-size: cover;
  background-position: center;
  background-color: ${t=>t.isSrc?"":"#D9D9D9"};
  box-sizing: border-box;
  overflow: hidden;
  filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.3));
  box-shadow: inset 0px 4px 8px rgba(0, 0, 0, 0.3);
`,B=Object(s["a"])("div")`
  font-size: 3px;
  color: #ffffff;
  text-align: center;
  font-weight: 600;
  text-align: start;
  width: 100%;
`,k=Object(s["a"])("div")`
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
`,v=Object(s["a"])("div")`
  position: absolute;
  margin-left: 60px;
  transform: rotate(40deg);
  font-size: 10px;
  font-weight: 600;
  color: #ffffff;
`,C=Object(s["a"])("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 7px 17px 0 17px;
  width: 100%;
  height: 84px;
  background-color: ${t=>t.color?"rgba(0, 0, 0, 0.4)":""};
`;var _={name:"CardButtonDefault",components:{Container:y,Explain:B,Title:k,Badge:v,BlackBgColor:C},props:{src:{type:String,default:""},explain:{type:String,default:""},title:{type:String,default:""},badge:{type:String,default:""},titleBackground:{type:Boolean,default:void 0}},setup(t){const e="src/assets/"+t.src+".png";return{...t,imgUrl:e}}};const S=g()(_,[["render",m]]);var z=S,T=n("6c02");const D=Object(s["a"])("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`,A=Object(s["a"])("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 18px 24px 0 0;
  font-size: 12px;
  color: #797979;
`,E=Object(s["a"])("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 24px;
`,R=Object(s["a"])("div")`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 3px;
`,$=Object(s["a"])("div")`
  font-size: 40px
  font-weight: 500;
  margin-bottom: 16px;
`,N=Object(s["a"])("div")`
  font-size: 20px;
  color: #797979;
`,U=Object(s["a"])("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0 54px;
  margin-top: 46px;
  font-size: 12px;
  color: #797979;
`,L=Object(s["a"])("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  gap: 24px;
  margin: 18px 24px 0 24px;
`,P=Object(s["a"])("div")`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  gap: 25px;
  width: 45%;
`;var J={components:{Container:D,CardArea:L,CardButtonLong:w,CardButtonDefault:z,SubCardArea:P,Date:A,AppTitleArea:E,SubTitle:R,AppTitle:$,ExplainTitle:N,Notice:U},name:"Home",props:{},setup(t){const e=Object(c["t"])([{key:1,name:"benefits",title:"내가 받은\n혜택 리스트",explain:"나의 혜택 리스트 확인하기",titleBackground:!1,toRouteName:"NcsedBenefits",toRoutePath:"/ncs/benefits"},{key:2,name:"map",title:"오동통,\n살찌는 지도",explain:"살찌는~지도!",badge:"클릭!",titleBackground:!0,src:"SI-landing",toRouteName:"NcsedMap",toRoutePath:"/ncs/map"}]),n=Object(T["c"])(),i=t=>{n.push({path:t})};return{...t,cards:e,pushRouter:i}}};const H=g()(J,[["render",b]]);e["default"]=H}}]);
//# sourceMappingURL=chunk-2d21da8f.d686a5a8.js.map