"use strict";(self.webpackChunkopenedv_wiki=self.webpackChunkopenedv_wiki||[]).push([[3279],{28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(96540);const c={},r=s.createContext(c);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(r.Provider,{value:n},e.children)}},68178:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var s=t(74848),c=t(28453);const r={title:"3.8 RTC\u65f6\u949f\u6d4b\u8bd5",sidebar_position:8},i="3.8 RTC\u65f6\u949f\u6d4b\u8bd5",o={id:"Boards/Linux/DL2K0300/DL2K0300 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/function test/3.8_rtc",title:"3.8 RTC\u65f6\u949f\u6d4b\u8bd5",description:"&emsp;&emsp;ATK-DL2K0300B\u5f00\u53d1\u677f\u4f7f\u7528\u7684\u662fLS2K0300B\u82af\u7247\u4e2d\u96c6\u6210\u7684RTC\u529f\u80fd\u3002\u68c0\u67e5\u5f00\u53d1\u677f\u5e95\u677f\u662f\u5426\u6709\u5b89\u88c5RTC\u7ebd\u6263\u7535\u6c60\uff0c\u4e5f\u53ef\u7528\u4e07\u7528\u8868\u68c0\u67e5RTC\u7535\u6c60\u6709\u6ca1\u6709\u7535\uff0c\u9632\u6b62\u56e0RTC\u7535\u6c60\u6ca1\u7535\u4e0d\u80fd\u4fdd\u5b58\u65f6\u95f4\u3002\u6ce8\u610f\uff0c\u7535\u6c60\u5c5e\u4e8e\u6613\u8017\u54c1\uff0c\u82e5\u6ca1\u7535\u8bf7\u66f4\u6362\u7ebd\u6263\u7535\u6c60\u3002",source:"@site/docs/Boards/Linux/DL2K0300/DL2K0300 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/function test/3.8_rtc.md",sourceDirName:"Boards/Linux/DL2K0300/DL2K0300 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/function test",slug:"/Boards/Linux/DL2K0300/DL2K0300 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/function test/3.8_rtc",permalink:"/docs/Boards/Linux/DL2K0300/DL2K0300 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/function test/3.8_rtc",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"3.8 RTC\u65f6\u949f\u6d4b\u8bd5",sidebar_position:8},sidebar:"LinuxDL2K0300Sidebar",previous:{title:"3.7 CAN\u6d4b\u8bd5",permalink:"/docs/Boards/Linux/DL2K0300/DL2K0300 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/function test/3.7_can"},next:{title:"3.9 \u97f3\u9891\u6d4b\u8bd5",permalink:"/docs/Boards/Linux/DL2K0300/DL2K0300 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/function test/3.9_music"}},d={},a=[];function l(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"38-rtc\u65f6\u949f\u6d4b\u8bd5",children:"3.8 RTC\u65f6\u949f\u6d4b\u8bd5"})}),"\n",(0,s.jsx)(n.p,{children:"\u2003\u2003ATK-DL2K0300B\u5f00\u53d1\u677f\u4f7f\u7528\u7684\u662fLS2K0300B\u82af\u7247\u4e2d\u96c6\u6210\u7684RTC\u529f\u80fd\u3002\u68c0\u67e5\u5f00\u53d1\u677f\u5e95\u677f\u662f\u5426\u6709\u5b89\u88c5RTC\u7ebd\u6263\u7535\u6c60\uff0c\u4e5f\u53ef\u7528\u4e07\u7528\u8868\u68c0\u67e5RTC\u7535\u6c60\u6709\u6ca1\u6709\u7535\uff0c\u9632\u6b62\u56e0RTC\u7535\u6c60\u6ca1\u7535\u4e0d\u80fd\u4fdd\u5b58\u65f6\u95f4\u3002\u6ce8\u610f\uff0c\u7535\u6c60\u5c5e\u4e8e\u6613\u8017\u54c1\uff0c\u82e5\u6ca1\u7535\u8bf7\u66f4\u6362\u7ebd\u6263\u7535\u6c60\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u2003\u2003",(0,s.jsx)(n.strong,{children:"\u8bf7\u6ce8\u610f\uff0cRTC\u7684\u4f7f\u7528\u79bb\u4e0d\u5f00\u7535\u6c60\u7684\u4f9b\u7535\uff0c\u8bf7\u786e\u4fdd\u7535\u6c60\u4f9b\u7535\u6b63\u5e38\u3002\u5426\u5219RTC\u65e0\u6cd5\u8bfb\u53d6"})]}),"\n",(0,s.jsx)(n.p,{children:"\u2003\u2003RTC\u65f6\u95f4\u662f\u5b58\u50a8\u5728RTC\u6a21\u5757\u4e2d\u7684\u65f6\u95f4\uff0c\u9075\u5faaUTC\u65f6\u533a\u6807\u51c6\u3002\u7cfb\u7edf\u65f6\u95f4\u5219\u662f\u7cfb\u7edf\u542f\u52a8\u540e\u8bb0\u5f55\u7684\u65f6\u95f4\uff0c\u5176\u65f6\u533a\u8bbe\u7f6e\u4f9d\u636e/etc/timezone\u7b49\u914d\u7f6e\u6587\u4ef6\u3002\u5728buildroot\u7cfb\u7edf\u4e2d\uff0c\u4f7f\u7528date\u547d\u4ee4\u53ef\u67e5\u770b\u5f53\u524d\u65f6\u95f4\uff0c\u4e14\u8be5\u7cfb\u7edf\u5df2\u9884\u8bbe\u4e3a\u4e1c\u516b\u533a\u65f6\u533a\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u2003\u2003\u67e5\u770b\u7cfb\u7edf\u65f6\u949f\uff0c\u4f7f\u7528\u6307\u4ee4date\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c#",children:"date\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u2003\u2003\u8bbe\u7f6e\u5f53\u524d\u7cfb\u7edf\u65f6\u949f\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c#",children:'date -s "2024-1-1 10:00:00"\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u2003\u2003\u4f7f\u7528hwclock\u5199\u5165\u786c\u4ef6\u65f6\u949f(-u \u4ee3\u8868\u4ee5UTC\u65f6\u95f4\u5199\u5165)\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c#",children:"hwclock -w -u\t\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u2003\u2003\u4f7f\u7528hwclock\u547d\u4ee4\u628a\u786c\u4ef6\u65f6\u9488\u5199\u5230\u7cfb\u7edf\u65f6\u95f4\u4e2d\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c#",children:"hwclock -s\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u2003\u2003\u6700\u540e\uff0c\u91cd\u542f\u5f00\u53d1\u677f\uff0c\u4f7f\u7528\u6307\u4ee4date\uff0c\u5c31\u53ef\u4ee5\u770b\u5230\u5f53\u524d\u7684\u65f6\u95f4\u5c31\u662f\u6240\u8bbe\u7f6e\u7684\u65f6\u95f4\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}}}]);