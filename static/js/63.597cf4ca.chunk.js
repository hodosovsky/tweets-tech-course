(self.webpackChunktweets_tech_course=self.webpackChunktweets_tech_course||[]).push([[63],{6063:function(t,o,i){"use strict";i.r(o),i.d(o,{default:function(){return R}});var e,n,a,r,s=i(9439),l=i(5048),c=i(2791),f=i(8090),m=i(3521),p=i(3433),d=i(3682),x=i(168),u=i(6444),y=u.ZP.p(e||(e=(0,x.Z)(["\n  color: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  text-transform: uppercase;\n  margin: ",";\n"])),(function(t){return t.theme.colors.primaryText}),(function(t){return t.theme.fontWeight.normal}),(function(t){return t.theme.fontSizes.l}),(function(t){return t.theme.lineHeight.body}),(function(t){return t.theme.space[0]})),g=i(184),b=function(t){var o=t.children;return(0,g.jsx)(y,{children:o})},h=i(430),w=i(5530),v=i(6338),k=i(1957),N=u.ZP.picture(n||(n=(0,x.Z)(["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n"]))),A=u.ZP.img(a||(a=(0,x.Z)(["\n  top: 178px;\n  left: 150px;\n  width: 64px;\n  height: 64px;\n  border: 8px solid ",";\n  border-radius: ",";\n  background-color: ",";\n"])),(function(t){return t.theme.colors.followButtonBackground}),(function(t){return t.theme.radii.round}),(function(t){return t.theme.colors.avatarBackground})),C=i(1413);function j(t,o){if(null==t)return{};var i,e,n=function(t,o){if(null==t)return{};var i,e,n={},a=Object.keys(t);for(e=0;e<a.length;e++)i=a[e],o.indexOf(i)>=0||(n[i]=t[i]);return n}(t,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(e=0;e<a.length;e++)i=a[e],o.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var I,B,z=u.ZP.button(r||(r=(0,x.Z)(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding: 14px 56px;\n  font-family: inherit;\n  font-size: ",";\n  font-weight: ",";\n  text-transform: uppercase;\n  border: ",";\n  border-radius: ",";\n  color: ",";\n  background-color: ",";\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"])),(function(t){return t.theme.fontSizes.m}),(function(t){return t.theme.fontWeight.bold}),(function(t){return t.theme.borders.none}),(function(t){return t.theme.radii.normal}),(function(t){return t.theme.colors.secondaryText}),(function(t){return t.following?t.theme.colors.folowingButtonBackground:t.theme.colors.followButtonBackground}),(function(t){return t.following?t.theme.colors.folowingButtonHover:t.theme.colors.followButtonHover})),S=["type","children","following"],W=function(t){var o=t.type,i=void 0===o?"button":o,e=t.children,n=t.following,a=void 0!==n&&n,r=j(t,S);return(0,g.jsx)(z,(0,C.Z)((0,C.Z)({type:i,following:a},r),{},{children:e}))},E=i(7994),F=i(5264),O=function(t){var o,i=t.user,e=(0,l.I0)(),n=(0,c.useState)(i.followers),a=(0,s.Z)(n,2),r=a[0],m=a[1],x=(0,f.p)(),u=(0,s.Z)(x,1)[0],y=(0,l.v9)(E.nb);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("picture",{children:[(0,g.jsx)("source",{srcSet:"".concat(h," 1x, ").concat(w," 2x")}),(0,g.jsx)("img",{src:h,alt:"tweet"})]}),(0,g.jsxs)(N,{children:[(0,g.jsx)("source",{srcSet:"".concat(v," 1x, ").concat(k," 2x")}),(0,g.jsx)("img",{src:v,alt:"logo"})]}),(0,g.jsx)(d.x,{position:"absolute",width:380,height:8,left:0,top:214,backgroundColor:"followButtonBackground",boxShadow:"0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF"}),(0,g.jsx)(d.x,{position:"absolute",top:178,left:150,zIndex:2,width:80,height:80,boxShadow:"0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;",borderRadius:"round",children:(0,g.jsx)(A,{src:i.avatar,alt:"avatar"})}),(0,g.jsxs)(d.x,{mt:86,children:[(0,g.jsxs)(b,{children:[i.tweets," tweets"]}),(0,g.jsx)(d.x,{mt:16,mb:26,children:(0,g.jsxs)(b,{children:[(o=r,o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))," Followers"]})})]}),(0,g.jsx)(W,{following:null===y||void 0===y?void 0:y.includes(i.id),onClick:function(){var t={};if(null!==y&&void 0!==y&&y.includes(i.id))m((function(t){return t-1})),t.followers=r-1,t.id=i.id,u(t),e((0,E.vl)(y.filter((function(t){return t!==i.id})))),F.Notify.info("Remove from followings");else{m((function(t){return t+1})),t.followers=r+1,t.id=i.id,u(t);var o=[].concat((0,p.Z)(y),[i.id]);e((0,E.vl)(o)),F.Notify.success("Add to following")}},children:null!==y&&void 0!==y&&y.includes(i.id)?"Following":"follow"})]})},T=u.ZP.ul(I||(I=(0,x.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n  margin: 0;\n  margin-bottom: 20px;\n"]))),D=u.ZP.li(B||(B=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  padding: 26px 36px 36px 36px;\n  border-radius: ",";\n  text-align: center;\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n"])),(function(t){return t.theme.radii.normal})),L=function(t){var o=t.users;return(0,g.jsx)(T,{children:o.map((function(t){return(0,g.jsx)(D,{children:(0,g.jsx)(O,{user:t})},t.id)}))})},M=i(1087),R=function(){var t=(0,c.useState)(1),o=(0,s.Z)(t,2),i=o[0],e=o[1],n=(0,c.useState)([]),a=(0,s.Z)(n,2),r=a[0],p=a[1],x=(0,c.useState)("all"),u=(0,s.Z)(x,2),y=u[0],b=u[1],h=(0,f.zQ)(),w=h.data,v=h.isFetching,k=h.isError,N=h.error,A=(0,l.v9)(E.nb),C=(0,c.useCallback)((function(t){switch(t){case"all":return w;case"followings":return w.filter((function(t){return A.includes(t.id)}));case"follow":return w.filter((function(t){return!A.includes(t.id)}))}}),[w,A]);(0,c.useEffect)((function(){w&&p(C(y).slice(6*i-6,6*i))}),[w,y,i,C]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(M.rU,{to:"/",children:"Go BACK"}),(0,g.jsx)(d.x,{mb:20,mt:20,justifySelf:"flex-start",children:(0,g.jsxs)("label",{children:["Filter:",(0,g.jsxs)("select",{value:y,onChange:function(t){e(1),p([]),b(t.target.value)},children:[(0,g.jsx)("option",{value:"all",children:"Show All"}),(0,g.jsx)("option",{value:"follow",children:"Follow"}),(0,g.jsx)("option",{value:"followings",children:"Followings"})]})]})}),r&&(0,g.jsx)(L,{users:r}),(null===w||void 0===w?void 0:w.length)>=6*i&&(0,g.jsx)(W,{following:!0,onClick:function(){e((function(t){return t+1})),window.scrollTo({top:0,behavior:"smooth"})},children:"Next"}),v&&(0,g.jsx)(m.a,{}),k&&(0,g.jsx)("h1",{children:null===N||void 0===N?void 0:N.data})]})}},5264:function(t,o,i){var e,n;n="undefined"!==typeof i.g?i.g:"undefined"!==typeof window?window:this,e=function(){return function(t){"use strict";if("undefined"===typeof t&&"undefined"===typeof t.document)return!1;var o,i="Notiflix",e="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",n='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',a={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},r={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(t){return console.error("%c "+i+" Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+e)},l=function(o){return o||(o="head"),null!==t.document[o]||(s('\nNotiflix needs to be appended to the "<'+o+'>" element, but you called it before the "<'+o+'>" element has been created.'),!1)},c=function(o,i){if(!l("head"))return!1;if(null!==o()&&!t.document.getElementById(i)){var e=t.document.createElement("style");e.id=i,e.innerHTML=o(),t.document.head.appendChild(e)}},f=function t(){var o={},i=!1,e=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(i=arguments[0],e++);for(var n=function(e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(i&&"[object Object]"===Object.prototype.toString.call(e[n])?o[n]=t(o[n],e[n]):o[n]=e[n])};e<arguments.length;e++)n(arguments[e]);return o},m=function(o){var i=t.document.createElement("div");return i.innerHTML=o,i.textContent||i.innerText||""},p=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},d=0,x=function(i,e,s,c){if(!l("body"))return!1;o||u.Notify.init({});var p=f(!0,o,{});if("object"===typeof s&&!Array.isArray(s)||"object"===typeof c&&!Array.isArray(c)){var x={};"object"===typeof s?x=s:"object"===typeof c&&(x=c),o=f(!0,o,x)}var y=o[i.toLocaleLowerCase("en")];d++,"string"!==typeof e&&(e="Notiflix "+i),o.plainText&&(e=m(e)),!o.plainText&&e.length>o.messageMaxLength&&(o=f(!0,o,{closeButton:!0,messageMaxLength:150}),e='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),e.length>o.messageMaxLength&&(e=e.substring(0,o.messageMaxLength)+"..."),"shadow"===o.fontAwesomeIconStyle&&(y.fontAwesomeIconColor=y.background),o.cssAnimation||(o.cssAnimationDuration=0);var g=t.document.getElementById(r.wrapID)||t.document.createElement("div");if(g.id=r.wrapID,g.style.width=o.width,g.style.zIndex=o.zindex,g.style.opacity=o.opacity,"center-center"===o.position?(g.style.left=o.distance,g.style.top=o.distance,g.style.right=o.distance,g.style.bottom=o.distance,g.style.margin="auto",g.classList.add("nx-flex-center-center"),g.style.maxHeight="calc((100vh - "+o.distance+") - "+o.distance+")",g.style.display="flex",g.style.flexWrap="wrap",g.style.flexDirection="column",g.style.justifyContent="center",g.style.alignItems="center",g.style.pointerEvents="none"):"center-top"===o.position?(g.style.left=o.distance,g.style.right=o.distance,g.style.top=o.distance,g.style.bottom="auto",g.style.margin="auto"):"center-bottom"===o.position?(g.style.left=o.distance,g.style.right=o.distance,g.style.bottom=o.distance,g.style.top="auto",g.style.margin="auto"):"right-bottom"===o.position?(g.style.right=o.distance,g.style.bottom=o.distance,g.style.top="auto",g.style.left="auto"):"left-top"===o.position?(g.style.left=o.distance,g.style.top=o.distance,g.style.right="auto",g.style.bottom="auto"):"left-bottom"===o.position?(g.style.left=o.distance,g.style.bottom=o.distance,g.style.top="auto",g.style.right="auto"):(g.style.right=o.distance,g.style.top=o.distance,g.style.left="auto",g.style.bottom="auto"),o.backOverlay){var b=t.document.getElementById(r.overlayID)||t.document.createElement("div");b.id=r.overlayID,b.style.width="100%",b.style.height="100%",b.style.position="fixed",b.style.zIndex=o.zindex-1,b.style.left=0,b.style.top=0,b.style.right=0,b.style.bottom=0,b.style.background=y.backOverlayColor||o.backOverlayColor,b.className=o.cssAnimation?"nx-with-animation":"",b.style.animationDuration=o.cssAnimation?o.cssAnimationDuration+"ms":"",t.document.getElementById(r.overlayID)||t.document.body.appendChild(b)}t.document.getElementById(r.wrapID)||t.document.body.appendChild(g);var h=t.document.createElement("div");h.id=o.ID+"-"+d,h.className=o.className+" "+y.childClassName+" "+(o.cssAnimation?"nx-with-animation":"")+" "+(o.useIcon?"nx-with-icon":"")+" nx-"+o.cssAnimationStyle+" "+(o.closeButton&&"function"!==typeof s?"nx-with-close-button":"")+" "+("function"===typeof s?"nx-with-callback":"")+" "+(o.clickToClose?"nx-notify-click-to-close":""),h.style.fontSize=o.fontSize,h.style.color=y.textColor,h.style.background=y.background,h.style.borderRadius=o.borderRadius,h.style.pointerEvents="all",o.rtl&&(h.setAttribute("dir","rtl"),h.classList.add("nx-rtl-on")),h.style.fontFamily='"'+o.fontFamily+'", '+n,o.cssAnimation&&(h.style.animationDuration=o.cssAnimationDuration+"ms");var w="";if(o.closeButton&&"function"!==typeof s&&(w='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+y.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),o.useIcon)if(o.useFontAwesome)h.innerHTML='<i style="color:'+y.fontAwesomeIconColor+"; font-size:"+o.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+y.fontAwesomeClassName+" "+("shadow"===o.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+e+"</span>"+(o.closeButton?w:"");else{var v="";i===a.Success?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':i===a.Failure?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':i===a.Warning?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':i===a.Info&&(v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),h.innerHTML=v+'<span class="nx-message nx-with-icon">'+e+"</span>"+(o.closeButton?w:"")}else h.innerHTML='<span class="nx-message">'+e+"</span>"+(o.closeButton?w:"");if("left-bottom"===o.position||"right-bottom"===o.position){var k=t.document.getElementById(r.wrapID);k.insertBefore(h,k.firstChild)}else t.document.getElementById(r.wrapID).appendChild(h);var N=t.document.getElementById(h.id);if(N){var A,C,j=function(){N.classList.add("nx-remove");var o=t.document.getElementById(r.overlayID);o&&g.childElementCount<=0&&o.classList.add("nx-remove"),clearTimeout(A)},I=function(){if(N&&null!==N.parentNode&&N.parentNode.removeChild(N),g.childElementCount<=0&&null!==g.parentNode){g.parentNode.removeChild(g);var o=t.document.getElementById(r.overlayID);o&&null!==o.parentNode&&o.parentNode.removeChild(o)}clearTimeout(C)};if(o.closeButton&&"function"!==typeof s&&t.document.getElementById(h.id).querySelector("span.nx-close-button").addEventListener("click",(function(){j();var t=setTimeout((function(){I(),clearTimeout(t)}),o.cssAnimationDuration)})),("function"===typeof s||o.clickToClose)&&N.addEventListener("click",(function(){"function"===typeof s&&s(),j();var t=setTimeout((function(){I(),clearTimeout(t)}),o.cssAnimationDuration)})),!o.closeButton&&"function"!==typeof s){var B=function(){A=setTimeout((function(){j()}),o.timeout),C=setTimeout((function(){I()}),o.timeout+o.cssAnimationDuration)};B(),o.pauseOnHover&&(N.addEventListener("mouseenter",(function(){N.classList.add("nx-paused"),clearTimeout(A),clearTimeout(C)})),N.addEventListener("mouseleave",(function(){N.classList.remove("nx-paused"),B()})))}}if(o.showOnlyTheLastOne&&d>0)for(var z=t.document.querySelectorAll("[id^="+o.ID+"-]:not([id="+o.ID+"-"+d+"])"),S=0;S<z.length;S++){var W=z[S];null!==W.parentNode&&W.parentNode.removeChild(W)}o=f(!0,o,p)},u={Notify:{init:function(t){o=f(!0,r,t),c(p,"NotiflixNotifyInternalCSS")},merge:function(t){if(!o)return s("You have to initialize the Notify module before call Merge function."),!1;o=f(!0,o,t)},success:function(t,o,i){x(a.Success,t,o,i)},failure:function(t,o,i){x(a.Failure,t,o,i)},warning:function(t,o,i){x(a.Warning,t,o,i)},info:function(t,o,i){x(a.Info,t,o,i)}}};return"object"===typeof t.Notiflix?f(!0,t.Notiflix,{Notify:u.Notify}):{Notify:u.Notify}}(n)}.apply(o,[]),void 0===e||(t.exports=e)},1957:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAAsCAYAAACZmXFCAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASaSURBVHgB7ZyxTxsxFMZfKhhgaKRSqRmSAYYwUKlUKgMdunTuf9ypAwwMZSCVEqlBKkgEqRnIAFITib6PvIPjYvt8Z5ug9v0kK+rhe73cfTx/fvbRuL29/UJKRq/RaAwpAL6fHf7YJeWOF6Tk2WGBvCQlGiqwRfZYZOukREEFtgjE9YGUKKjAzDQ5i+2QEowKzM4Wi2yLlCBUYG5g+l+TUhsVWDnv1PTXRwVWzp3pZ5GtklIZFZgfTW5dUiqjAvNHTX8NVGDVUNNfkRVKw4zbL2433KbcrmnuZeBjsBSDh7RG9UDsK24jiT2V44i/QfPhrG5sH2D6D3nN8pqenh7Nv3se3NM9z75Vwb0MqgfGFtiYW59v/tjys3v4IUEM2zQXhQ8Q1k9upxx/aukzlNgdiZ1CaJnpP3RcRyomxXvrmOFOLM/BG45NocQU2Al/oVPfzvLlD8TXbJdcyxnNdzp4PVDuh/5nHLsrsWOTmf4eKU5iebDjKuLKI9tjThxdBtznuE624HMG/NGnNKjp9yCGwAaSMWohKd5WAhhx7CCBJBaZmv4SQofIK5cA+OZjKIGphxGFKR7nM5EUL/dp7muKYILQc8TGuYiP7zDjuL9tfSEyEYKv36vCMk2/i7b43CLD4mgg99KUjYM9bKjAfpgOygVjV2fL8LNBTpToYzOpZ7aHxjFacu5q7hj6njsEj+MfKT7LNP0uOpbjGG2K14n7mKSQHCKwG0fWMIpL6PLDaPPnpaMPMA67Ii7TtHxdYq/wdS1kPkwqRIQp1hXV9FsIEdiF6aCUCPLCwVBnykQYOvPT6Gy4A2PHkFNWl4H5vrSIH6LepDTg/83qfooQlMEsx4tZqe8zCeCH854/2q7Ykr18MhBEbhJYaOGxDIj/nJR7QmaRtgwTYwiyxW6SH68sx58iu/wh5Z5US0Wh2K7LVyCzwPPrgpLIc5tNLpWQDGbbHzWhcGxZ0HeIS5ldbQxDa3b/IiEZzPb+IBa527l/rxWKkVN+EGVCMdarZCYIf1ZWnxlZjvsOsVW5Mc1clbAMZqyzyBpj/u1orAXu55rP6vyqo0L+ndwMHZOKNxQfCP6AFCNBQ6RNBPLbjOGiOBuEN7ogP9qW2BDwN0vsvi2TSPkkxRB59Ayr+M+GUJOP4qKx2CprgIPccsXMY2jM0+FzkY0mhtiI81ViwwvCvE9KKukpKtWDit/pvyN0sXuDH7JzOwwyjrQ6D2LX9bKFxB3Jp1Vcsm0ndvZSU+9BjN0U3TKRlSEFVJM/ginfC3mjJ9GeMDX1nsTaDwaR7VQVAvpze0vztUXbuRgGP1V9NzEXO7q4SE29NzELrdju0cJuCXKvJZJMDpCxYLx9RAlxfebzMDsclMTOtp5sesauyjJN/ZrhF63qlpp1w1boZO8wNBL+ATp4Lvy2ZyYdNwaCzox5aOwxPbxUgni4SU1Ks+crY1Dmu/QP0D0m5VJRU1qL4pPFfkrU1NdA34v0Q019TVRg5aipD0AFVo5W6gNQgbk50Up9GCowO8O673oqD6jAzEzU1MdBBbYITP0RKVFQgS2ipj4iKrDHqKmPzF+qy7TjP1oaFQAAAABJRU5ErkJggg=="},6338:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKGSURBVHgB1VixThtBEJ2L4sJICVJIQREKUpDiGkdK4xRpqPPHSZPCFCmSAgosAcVRuMANBS7OknnvbhaNlzvvnsF4edLIe765vd2nmTezly0Wi5+yfdzB/mRZVrY5YJ1f8fNJtow3kgZ2YAN5BUiFMGIfUfRFEkdKhBFHIG1fEkZqhBEDkLYjiSJFwnqwIUjrSYJ4G+k3h13AprAZrC+1UB/A9hr8b2GF+pfqf6AWA1cE/sp6mMDOdHwI+6zjE6krchu4zu8r7kcRRoJGKPn2RRyTjAKRcIRfK9Zj+J57c1T+8B3rgvoSRlUEGuaKwdytF3PM7Tq8fSwBvhJCKCWXyGKawHY9jdk148JuUP0ffHWekdQRGwMWgdiojAHX/lHtIeXdf9KcLUsIRdiNIYsb/yG1xvD6Uup0s1VtbBbBNMh1zDlOOBcN10zv2BYih/9UngffzPg3rNR9DSUSoQi7NmNqCskiKf+l1qmZjhkxtx65uXnWb0y7EFAVAYnX240itAib7053piDmxjqpjpUNvtLy30y6IRON7G0jFGFWq9wm+4yghrL/3owZfb5OWZJiRN+B84ykO8kbQYgwK4JMPS6aqXUsjwWyp8Ipeog+Nfdc6jp0EfLTVZXtpRFKyUOQUDixxvUv1aey5csCU7NKV9xny8F+qGc3rM/HHn/YohSSEEIR5rrupdbAkqUHZnd/D9cDl670ayBrKHF6NFmzB9soYioPN3nMSJO6g57rc0xJppa/+ar7h/+V1FomAf8m+CncFR/0+xnxrsUn16a2U/Xt4tz1aJPLeqhEftXHxMj3hw7wa30VSfHw/S8lkfeRGmEU+YkkjJQIS1LkfaRC2FNF/sVwDzHOB2t0D1rCAAAAAElFTkSuQmCC"},430:function(t,o,i){"use strict";t.exports=i.p+"static/media/picture-1.010ab3c33bc13f300d33.png"},5530:function(t,o,i){"use strict";t.exports=i.p+"static/media/picture-2.014134acdd84a401f00a.png"},168:function(t,o,i){"use strict";function e(t,o){return o||(o=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(o)}}))}i.d(o,{Z:function(){return e}})}}]);
//# sourceMappingURL=63.597cf4ca.chunk.js.map