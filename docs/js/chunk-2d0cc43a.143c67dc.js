(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc43a"],{"4cd9":function(e,t,n){"use strict";n.r(t);var o=n("7a23");function c(e,t,n,c,i,r){const a=Object(o["w"])("TopNavDefault"),b=Object(o["w"])("router-view"),l=Object(o["w"])("NCSContainer"),d=Object(o["w"])("Container");return Object(o["r"])(),Object(o["d"])(d,null,{default:Object(o["B"])(()=>[Object(o["i"])(a,{option:"my"}),Object(o["i"])(l,null,{default:Object(o["B"])(()=>[Object(o["i"])(b)]),_:1})]),_:1})}const i=Object(o["h"])(" 오! "),r=Object(o["g"])("b",null,"동",-1),a=Object(o["h"])("네 "),b=Object(o["g"])("b",null,"통",-1),l=Object(o["h"])("합 멤버십 "),d=Object(o["h"])("MY");function j(e,t,n,c,j,p){const O=Object(o["w"])("Image"),f=Object(o["w"])("Title"),s=Object(o["w"])("OptionText"),u=Object(o["w"])("Option"),w=Object(o["w"])("Container");return Object(o["r"])(),Object(o["d"])(w,{borderLine:n.borderLine},{default:Object(o["B"])(()=>[Object(o["i"])(O,{src:n.navigator,width:10,onClick:c.goHome},null,8,["src","onClick"]),Object(o["i"])(f,null,{default:Object(o["B"])(()=>[i,r,a,b,l]),_:1}),n.option?(Object(o["r"])(),Object(o["d"])(u,{key:0},{default:Object(o["B"])(()=>[Object(o["i"])(O,{src:"MyIcon",width:15}),Object(o["i"])(s,null,{default:Object(o["B"])(()=>[d]),_:1})]),_:1})):Object(o["e"])("",!0)]),_:1},8,["borderLine"])}n("14d9");var p=n("f6f8"),O=n("a142"),f=n("6c02");const s=Object(p["a"])("div")`
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
  position: fixed;
  top: 0;
  z-index: 10;
`,u=Object(p["a"])("div")`
  font-size: 15px
  font-weight: 400;
  flex-grow: 2;
`,w=Object(p["a"])("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,x=Object(p["a"])("div")`
  font-size: 10px;
  color: #797979;
  font-weight: 300;
  text-align: center;
`;var g={components:{Container:s,Image:O["a"],Title:u,Option:w,OptionText:x},name:"TopNavDF",props:{navigator:{type:String,default:"back-arrow"},contentArea:{type:String,default:"middle-title"},borderLine:{type:String,default:"bottom"},option:{type:String,default:""}},setup(e){const t=Object(f["c"])(),n=()=>{t.push({name:"Home"})};return{...e,goHome:n}}},m=n("6b0d"),v=n.n(m);const y=v()(g,[["render",j]]);var h=y;const C=Object(p["a"])("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`,k=Object(p["a"])("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 55px;
`;var T={name:"Controller",components:{NCSContainer:k,TopNavDefault:h,Container:C},props:{},setup(e){return{...e}}};const B=v()(T,[["render",c]]);t["default"]=B}}]);
//# sourceMappingURL=chunk-2d0cc43a.143c67dc.js.map