"use strict";(self.webpackChunkopenedv_wiki=self.webpackChunkopenedv_wiki||[]).push([[27319],{5293:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var s=t(74848),i=t(28453);const r={title:"3.2 \u6309\u952e\u6d4b\u8bd5",sidebar_position:2},c="3.2 \u6309\u952e\u6d4b\u8bd5",d={id:"Boards/Linux/IMX6U/I.MX6U \u5feb\u901f\u4f53\u9a8c\u624b\u518c/function test/key_test",title:"3.2 \u6309\u952e\u6d4b\u8bd5",description:"&emsp;&emsp;\u5e95\u677f\u4e0a\u6309\u952e\u5bf9\u5e94\u7684\u7ba1\u811a\u5173\u7cfb\u5982\u4e0b\uff1a",source:"@site/docs/Boards/Linux/IMX6U/I.MX6U \u5feb\u901f\u4f53\u9a8c\u624b\u518c/function test/key_test.md",sourceDirName:"Boards/Linux/IMX6U/I.MX6U \u5feb\u901f\u4f53\u9a8c\u624b\u518c/function test",slug:"/Boards/Linux/IMX6U/I.MX6U \u5feb\u901f\u4f53\u9a8c\u624b\u518c/function test/key_test",permalink:"/docs/Boards/Linux/IMX6U/I.MX6U \u5feb\u901f\u4f53\u9a8c\u624b\u518c/function test/key_test",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"3.2 \u6309\u952e\u6d4b\u8bd5",sidebar_position:2},sidebar:"BoardsLinuxIMX6USidebar",previous:{title:"3.1 LED \u4e0e\u8702\u9e23\u5668\u6d4b\u8bd5",permalink:"/docs/Boards/Linux/IMX6U/I.MX6U \u5feb\u901f\u4f53\u9a8c\u624b\u518c/function test/led_and_beep_test"},next:{title:"3.3 LCD\u89e6\u6478\u5c4f\u6d4b\u8bd5",permalink:"/docs/Boards/Linux/IMX6U/I.MX6U \u5feb\u901f\u4f53\u9a8c\u624b\u518c/function test/lcd_test"}},o={},a=[];function l(e){const n={code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"32-\u6309\u952e\u6d4b\u8bd5",children:"3.2 \u6309\u952e\u6d4b\u8bd5"})}),"\n",(0,s.jsx)(n.p,{children:"\u2003\u2003\u5e95\u677f\u4e0a\u6309\u952e\u5bf9\u5e94\u7684\u7ba1\u811a\u5173\u7cfb\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)("div",{class:"imx6u_center-table-div",children:(0,s.jsxs)("table",{class:"imx6u_center-table",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"\u5f00\u53d1\u677f"}),(0,s.jsx)("th",{children:"GPIO18"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"ALPHA/Mini"}),(0,s.jsx)("td",{children:"KEY0"})]})]})}),"\n",(0,s.jsx)(n.p,{children:"\u2003\u2003\u8fdb\u5165\u5f00\u53d1\u677f\u7cfb\u7edf\uff0c\u5728\u4e32\u53e3\u7ec8\u7aef\u6267\u884c\u5982\u4e0b\u6307\u4ee4\u67e5\u770b\u6309\u952e\u6240\u5bf9\u5e94\u7684\u8f93\u5165\u4e8b\u4ef6\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c#",children:"lsinput\n"})}),"\n",(0,s.jsx)("center",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"3.2.1",src:t(85873).A+"",width:"1364",height:"437"}),(0,s.jsx)("br",{}),"\n\u56fe3.2 1 \u67e5\u770b\u6309\u952e\u7684\u8f93\u5165\u4e8b\u4ef6"]})}),"\n",(0,s.jsx)(n.p,{children:"\u2003\u2003\u53ef\u4ee5\u4ece\u4e0a\u56fe\u770b\u51fa\u6309\u952e\u4e8b\u4ef6\u53f7\u4e3a event2\uff0c\u89e6\u6478\u5c4f\u5360\u7528\u4e86event1\uff0c\u6240\u4ee5\u5f53\u89e6\u6478\u5c4f\u6ca1\u6709\u63d2\u4e0a\u65f6\u6309\u952e\u4e8b\u4ef6\u53f7\u4e3a\u4e0d\u4e00\u5b9a\u4e3a event2\uff01\u6267\u884c\u4e0b\u9762\u7684\u6307\u4ee4\uff0c\u8fdb\u884c\u6309\u952e\u6d4b\u8bd5\uff0c\u6309\u4e0b\u5e95\u677f\u4e0a\u7684KEY0\uff0c\u6253\u5370\u51fa\u6309\u952e\u8f93\u5165\u4e8b\u4ef6\u7684\u4fe1\u606f\u5982\u4e0b\uff0c\u6309\u201cCtrl + c\u201d\u7ec8\u6b62\u6307\u4ee4\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u2003\u2003\u6307\u4ee4\u63d0\u793a\uff1ahexdump \u6216\u8005od -x\u6307\u4ee4\u90fd\u662f\u4ee5\u5341\u516d\u8fdb\u5236\u7684\u5f62\u5f0f\u6253\u5370\u51fa\u8f93\u5165\u4e8b\u4ef6\u4fe1\u606f\u3002\u7531\u4e8e\u6587\u4ef6\u7cfb\u7edf\u6ca1\u63d0\u4f9bhexpdump\u6307\u4ee4\uff0c\u6240\u4ee5\u53ea\u6d4b\u8bd5od\u6307\u4ee4\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c#",children:"od -x /dev/input/event2\n"})}),"\n",(0,s.jsx)("center",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"3.2.2",src:t(94005).A+"",width:"968",height:"207"}),(0,s.jsx)("br",{}),"\n\u56fe3.2 2 \u6253\u5370\u6309\u952e\u8f93\u5165\u4e8b\u4ef6\u7684\u4fe1\u606f"]})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var s=t(96540);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}},85873:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/3.2.1-e0bed98efec60b1adee3c8985e9824bd.png"},94005:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/3.2.2-180b0a83e2f4decffb93a95f7422e9c2.png"}}]);