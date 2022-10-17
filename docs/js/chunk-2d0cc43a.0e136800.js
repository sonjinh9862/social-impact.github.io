(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc43a"],{"4cd9":function(e,t,n){"use strict";n.r(t);var o=n("7a23");function c(e,t,n,c,i,r){const a=Object(o["w"])("TopNavDefault"),b=Object(o["w"])("router-view"),l=Object(o["w"])("NCSContainer"),d=Object(o["w"])("Container");return Object(o["r"])(),Object(o["d"])(d,null,{default:Object(o["B"])(()=>[Object(o["i"])(a,{option:"my"}),Object(o["i"])(l,null,{default:Object(o["B"])(()=>[Object(o["i"])(b)]),_:1})]),_:1})}const i=Object(o["h"])(" 오! "),r=Object(o["g"])("b",null,"동",-1),a=Object(o["h"])("네 "),b=Object(o["g"])("b",null,"통",-1),l=Object(o["h"])("합 멤버십 "),d=Object(o["h"])("MY");function j(e,t,n,c,j,O){const f=Object(o["w"])("Image"),p=Object(o["w"])("Title"),u=Object(o["w"])("OptionText"),s=Object(o["w"])("Option"),w=Object(o["w"])("Container");return Object(o["r"])(),Object(o["d"])(w,{borderLine:n.borderLine},{default:Object(o["B"])(()=>[Object(o["i"])(f,{src:n.navigator,width:10,onClick:c.goHome},null,8,["src","onClick"]),Object(o["i"])(p,null,{default:Object(o["B"])(()=>[i,r,a,b,l]),_:1}),n.option?(Object(o["r"])(),Object(o["d"])(s,{key:0},{default:Object(o["B"])(()=>[Object(o["i"])(f,{src:"MyIcon",width:15}),Object(o["i"])(u,null,{default:Object(o["B"])(()=>[d]),_:1})]),_:1})):Object(o["e"])("",!0)]),_:1},8,["borderLine"])}n("14d9");var O=n("f6f8"),f=n("a142"),p=n("6c02");const u=Object(O["a"])("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  width: 100%;
  height: 55px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  border-top: ${e=>"top-bottom"==e.borderLine?"1px solid #e0e0e0":""};
  box-sizing: border-box;
  flex-grow: 1;
`,s=Object(O["a"])("div")`
  font-size: 15px
  font-weight: 400;
  flex-grow: 2;
`,w=Object(O["a"])("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,g=Object(O["a"])("div")`
  font-size: 10px;
  color: #797979;
  font-weight: 300;
  text-align: center;
`;var x={components:{Container:u,Image:f["a"],Title:s,Option:w,OptionText:g},name:"TopNavDF",props:{navigator:{type:String,default:"back-arrow"},contentArea:{type:String,default:"middle-title"},borderLine:{type:String,default:"bottom"},option:{type:String,default:""}},setup(e){const t=Object(p["c"])(),n=()=>{t.push({name:"Home"})};return{...e,goHome:n}}},m=n("6b0d"),v=n.n(m);const y=v()(x,[["render",j]]);var h=y;const C=Object(O["a"])("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`,k=Object(O["a"])("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;var T={name:"Controller",components:{NCSContainer:k,TopNavDefault:h,Container:C},props:{},setup(e){return{...e}}};const B=v()(T,[["render",c]]);t["default"]=B}}]);
//# sourceMappingURL=chunk-2d0cc43a.0e136800.js.map