var ce=Object.defineProperty;var U=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))pe.call(t,o)&&H(e,o,t[o]);if(U)for(var o of U(t))de.call(t,o)&&H(e,o,t[o]);return e};import{d as C,u as me,r as v,o as K,a as G,b as k,c as Y,w as c,e as n,f as i,N as he,g as _e,h as ge,z as fe,i as ve,j as ke,k as Z,l as ye,m as we,n as Ee,p as Fe,q as xe,s as w,t as be,v as Ae,x as Ne,y as _,A as P,B as Ie,C as Ce,D as I,E as g,F as q,G as Pe,H as De,I as D,L as Le,J as X,K as $e,M as Se,O as Oe,P as Be,Q as Te,R as Re,S as Ve,T as je,U as Q,V as Me,W as ze,X as Je,Y as Ue,Z as He,_ as We,$ as Ke,a0 as Ge,a1 as Ye,a2 as Ze,a3 as qe}from"./vendor.64da71ad.js";const Xe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}};Xe();const Qe=C({setup(e){return window.$message=me(),(t,o)=>null}}),et=["https://diii.tk","https://api-pikpak.go-back.cf","https://api-pikpak.tjsky.cf","https://api-pikpak.tjsky-1.cf","https://pikpak.he13797739994.ga","https://pikpak.hdddd.me","https://pan.yooyi.tk","https://pikpak.nsso.eu.org","https://pikpak-web.wnbh.cf","https://pk.pikpakz.top"],tt=C({setup(e){const t=v({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return K(()=>{localStorage.getItem("isSettingProxy")||localStorage.setItem("proxy",JSON.stringify(et))}),(o,a)=>{const s=G("router-view");return k(),Y(i(ke),{locale:i(fe),"date-locale":i(ve),"theme-overrides":t.value},{default:c(()=>[n(i(ge),null,{default:c(()=>[n(i(he),null,{default:c(()=>[n(i(_e),null,{default:c(()=>[n(Qe),n(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),ot="modulepreload",ee={},st="/pikpak/",d=function(t,o){return!o||o.length===0?t():Promise.all(o.map(a=>{if(a=`${st}${a}`,a in ee)return;ee[a]=!0;const s=a.endsWith(".css"),r=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${r}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":ot,s||(l.as="script",l.crossOrigin=""),l.href=a,document.head.appendChild(l),s)return new Promise((A,h)=>{l.addEventListener("load",A),l.addEventListener("error",h)})})).then(()=>t())};var at="/pikpak/assets/logo1.08eb9157.png";const m=Z.create({});m.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(e.headers=e.headers||{},t.access_token&&(e.headers.Authorization=`${t.token_type||"Bearer"} ${t.access_token}`),((o=e.url)==null?void 0:o.indexOf("https://",4))===-1){const a=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(a.length>0){const s=Math.floor(Math.random()*a.length);e.url=a[s]+"/"+e.url}}return e});let F=!1;m.interceptors.response.use(e=>e,e=>{var a;const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:console.log(1);const s=window.localStorage.getItem("pikpakLoginData"),r=s?JSON.parse(s):{};return r.username&&r.password&&!F?(console.log("wait",o.url),F=!0,m.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},r)).then(l=>(l.data&&l.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(l.data)),F=!1,m(o))).catch(()=>(x.push("/login"),!1))):r.username&&r.password&&F?new Promise((l,A)=>{const h=setInterval(()=>{F||(clearInterval(h),l(m(o)))},100)}):(x.push("/login?redirect="+x.currentRoute.value.fullPath),Promise.reject(e));default:window.$message.error(((a=t==null?void 0:t.data)==null?void 0:a.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const it=Z.create({});it.interceptors.request.use(e=>{e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"};const t=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(t.length>0){const o=Math.floor(Math.random()*t.length);e.url=t[o]+"/"+e.url}return e});const te=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let a=Math.floor(o/10);return e=e/Math.pow(2,10*a),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[a]};const nt=g("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[g("img",{src:"https://mypikpak.com/apple-touch-icon.png",class:"logo-box__icon",alt:""}),g("div",{class:"logo-box__text"},"PikPak")],-1),rt={key:0,class:"content-bottom"},lt=_("\u4F1A\u5458\u7801"),ut={style:{"margin-bottom":"0"}},ct=_(" # "),pt=_(" # "),dt=_(" # "),mt=g("a",{style:{color:"#306eff"},target:"_blank",href:"https://mypikpak.com/drive/payment"},"\u9996\u5E74\u4F1A\u5458\u8BA2\u9605\u4EC5\u9700179",-1),ht=_(" # "),_t=_(" # \u30101\u5E74PikPak\u9996\u5E74\u8BA2\u9605\u4EC5\u9700\uFF1A179\u5143\uFF01\u539F\u4EF7320\u5143\u3011 # "),gt={class:"bottom-user-info"},ft={key:0,src:at,class:"user-info-avatar"},vt={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},kt={class:"user-info-name"},yt={key:0},wt={class:"action"},Et=_(" \u9000\u51FA\u767B\u5F55 "),Ft=g("p",null,[g("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"\u30100.33\u5143/\u5929\u3011PikPak\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361-\u53EF\u4E0E7\u5929\u514D\u8D39\u4F1A\u5458\u7801\u53E0\u52A0-\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u611F\u8C22\u652F\u6301")],-1),xt=_("\u6DFB\u52A0"),bt=C({setup(e){const t=v(!1),o=u=>()=>Q(D,null,{default:()=>Q(u)}),a=ye(),s=we(),r=v([{label:"\u6587\u4EF6",key:"list",icon:o(We)},{label:"\u89C6\u9891",key:"video",icon:o(Me)},{label:"\u56FE\u7247",key:"image",icon:o(ze)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(Je)},{label:"\u9080\u8BF7",key:"invited",icon:o(Ue)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(He)}]),l=v(),A=()=>{m.get("https://user.mypikpak.com/v1/user/me").then(u=>{window.localStorage.setItem("pikpakUser",JSON.stringify(u.data)),l.value=u.data}).catch(u=>{console.log(u)})},h=v(),L=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/about").then(u=>{h.value=u.data}).catch(u=>{console.log(u)})},y=v(),oe=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(u=>{var p;y.value=(p=u.data)==null?void 0:p.data})},se=(u,p)=>{console.log(p),a.push("/"+p.key)};K(()=>{A(),L(),oe()});const N=v(),E=v(!1),ae=()=>{m.post("https://api-drive.mypikpak.com/vip/v1/order/activation-code",{activation_code:N.value,data:{}}).then(u=>{window.$message.success("\u5151\u6362\u6210\u529F"),L()}).catch(u=>{console.log(u)}).finally(()=>{E.value=!1})},$=v(!1),ie=u=>{$.value=u<800,t.value||(t.value=u<800)};Ee(s,()=>{$.value&&(t.value=!0)});const ne=Fe(),re=()=>{ne.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{m.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(u=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),a.push("/login")}).catch(u=>{console.log(u)})}})};return(u,p)=>{const le=G("router-view"),ue=xe("resize");return k(),w(je,null,[be(n(i(X),{"has-sider":"",onResize:ie},{default:c(()=>[n(i(Ae),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:p[1]||(p[1]=f=>t.value=!0),onExpand:p[2]||(p[2]=f=>t.value=!1),bordered:""},{default:c(()=>{var f,S,O,B,T,R,V,j,M,z,J;return[nt,n(i(Ne),{options:r.value,value:String(i(s).name),"onUpdate:value":se},null,8,["options","value"]),t.value?I("",!0):(k(),w("div",rt,[_(P(i(te)((f=h.value)==null?void 0:f.quota.usage))+" / "+P(i(te)((S=h.value)==null?void 0:S.quota.limit))+" ",1),n(i(Ie),{type:"primary",onClick:p[0]||(p[0]=It=>E.value=!0)},{default:c(()=>[lt]),_:1}),((O=h.value)==null?void 0:O.quota)?(k(),Y(i(Ce),{key:0,type:"line",percentage:Number((((B=h.value)==null?void 0:B.quota.usage)/((T=h.value)==null?void 0:T.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((R=y.value)==null?void 0:R.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):I("",!0),g("p",ut,[ct,n(i(q),{placement:"right"},{trigger:c(()=>[dt,mt,ht]),default:c(()=>[pt,_t]),_:1})])])),t.value?I("",!0):(k(),w("div",{key:1,class:Pe(["sider-bottom",{vip:((V=y.value)==null?void 0:V.status)==="ok"}])},[g("div",gt,[((j=y.value)==null?void 0:j.status)==="ok"?(k(),w("img",ft)):(k(),w("img",vt)),g("div",kt,[_(P((M=l.value)==null?void 0:M.name)+" ",1),((z=y.value)==null?void 0:z.status)==="ok"&&((J=y.value)==null?void 0:J.expire)?(k(),w("div",yt,[n(i(De),{time:new Date(y.value.expire),type:"datetime"},null,8,["time"])])):I("",!0)]),g("div",wt,[n(i(q),null,{trigger:c(()=>[n(i(D),{onClick:re},{default:c(()=>[n(i(Le))]),_:1})]),default:c(()=>[Et]),_:1})])])],2))]}),_:1},8,["collapsed"]),n(i(X),null,{default:c(()=>[n(i($e),{style:{height:"100vh"}},{default:c(()=>[n(i(Se),{style:{"max-height":"100vh"}},{default:c(()=>[n(le)]),_:1})]),_:1})]),_:1})]),_:1},512),[[ue]]),n(i(Ve),{show:E.value,"onUpdate:show":p[5]||(p[5]=f=>E.value=f)},{default:c(()=>[n(i(Oe),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":c(()=>[n(i(D),{onClick:p[3]||(p[3]=f=>E.value=!1)},{default:c(()=>[n(i(Be))]),_:1})]),action:c(()=>[n(i(Te),{block:!0,type:"primary",disabled:!N.value,onClick:ae},{default:c(()=>[xt]),_:1},8,["disabled"])]),default:c(()=>[n(i(Re),{placeholder:"\u4F1A\u5458\u7801",value:N.value,"onUpdate:value":p[4]||(p[4]=f=>N.value=f)},null,8,["value"]),Ft]),_:1})]),_:1},8,["show"])],64)}}}),At=[{path:"/",name:"home",component:bt,redirect:"/list",beforeEnter:(e,t,o)=>{const a=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");(!a||!a.access_token)&&e.name!=="setting"?o("/login"):o()},children:[{path:"list/:id?",name:"list",component:()=>d(()=>import("./list.3b584d3a.js"),["assets/list.3b584d3a.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"video",name:"video",component:()=>d(()=>import("./list.3b584d3a.js"),["assets/list.3b584d3a.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"image",name:"image",component:()=>d(()=>import("./list.3b584d3a.js"),["assets/list.3b584d3a.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"trash",name:"trash",component:()=>d(()=>import("./trash.1f1ac838.js"),["assets/trash.1f1ac838.js","assets/trash.99a3677d.css","assets/vendor.64da71ad.js"])},{path:"setting",name:"setting",component:()=>d(()=>import("./setting.e9bcee65.js"),["assets/setting.e9bcee65.js","assets/setting.f947579c.css","assets/vendor.64da71ad.js"])},{path:"invited",name:"invited",component:()=>d(()=>import("./invited.287d09d3.js"),["assets/invited.287d09d3.js","assets/invited.74b24e1e.css","assets/clipboard.a54b99ef.js","assets/vendor.64da71ad.js"])}]},{path:"/t/:id?",name:"test",component:()=>d(()=>import("./test.74a5ba58.js"),["assets/test.74a5ba58.js","assets/vendor.64da71ad.js"])},{path:"/s/:id/:password?",name:"shareInfo",component:()=>d(()=>import("./shareInfo.7776958a.js"),["assets/shareInfo.7776958a.js","assets/shareInfo.678356c6.css","assets/vendor.64da71ad.js"])},{path:"/login",name:"login",component:()=>d(()=>import("./login.cb88ca33.js"),["assets/login.cb88ca33.js","assets/login.a8b45006.css","assets/vendor.64da71ad.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/sms",name:"sms",component:()=>d(()=>import("./sms.768580d8.js"),["assets/sms.768580d8.js","assets/sms.81a6d8ca.css","assets/phone-pc2.dbf6d71e.js","assets/vendor.64da71ad.js"])},{path:"/register",name:"register",component:()=>d(()=>import("./register.5f251228.js"),["assets/register.5f251228.js","assets/register.5588ce76.css","assets/vendor.64da71ad.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/testtest",name:"testtest",component:()=>d(()=>import("./testtest.5e20454b.js"),["assets/testtest.5e20454b.js","assets/vendor.64da71ad.js"])}],Nt=Ke({history:Ge(),routes:At});var x=Nt;const b=Ye(tt);b.directive("resize",{mounted(e,t,o){e.$$erd=Ze({strategy:"scroll"}),e.$$erd.listenTo({},e,a=>{let s=a.offsetWidth,r=a.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var l;(l=o.props)==null||l.onResize(s,r)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});b.config.globalProperties.$http=m;b.use(x);b.use(qe,{router:x,siteIdList:[1280680983]});b.mount("#app");export{te as b,m as i,et as p};
