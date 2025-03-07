"use strict";(self.webpackChunkopenedv_wiki=self.webpackChunkopenedv_wiki||[]).push([[56472],{28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>d});var n=t(96540);const r={},o=n.createContext(r);function i(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:s},e.children)}},94483:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var n=t(74848),r=t(28453);const o={title:"3.1 LED\u6d4b\u8bd5",sidebar_position:1},i="3.1 LED\u6d4b\u8bd5\u6d4b\u8bd5",d={id:"Boards/Linux/DL2K0300/DL2K0300 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/function test/3.1_led_and_beep_test",title:"3.1 LED\u6d4b\u8bd5",description:"&emsp;&emsp;ATK-DL2K0300B\u5f00\u53d1\u677f\u4e0a\u914d\u67091\u4e2a\u5fc3\u8df3LED(DS0)\uff0c1\u4e2a\u7528\u6237LED(DS1)\uff0c1\u4e2a\u7cfb\u7edfLED\u3002",source:"@site/docs/Boards/Linux/DL2K0300/DL2K0300 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/function test/3.1_led_and_beep_test.md",sourceDirName:"Boards/Linux/DL2K0300/DL2K0300 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/function test",slug:"/Boards/Linux/DL2K0300/DL2K0300 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/function test/3.1_led_and_beep_test",permalink:"/docs/Boards/Linux/DL2K0300/DL2K0300 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/function test/3.1_led_and_beep_test",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"3.1 LED\u6d4b\u8bd5",sidebar_position:1},sidebar:"BoardsLinuxDL2K0300Sidebar",previous:{title:"\u7b2c\u4e09\u7ae0 ATK-DL2K0300B\u529f\u80fd\u6d4b\u8bd5",permalink:"/docs/category/\u7b2c\u4e09\u7ae0-atk-dl2k0300b\u529f\u80fd\u6d4b\u8bd5-3"},next:{title:"3.2 \u6309\u952e\u6d4b\u8bd5",permalink:"/docs/Boards/Linux/DL2K0300/DL2K0300 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/function test/3.2_key"}},c={},a=[];function l(e){const s={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"31-led\u6d4b\u8bd5\u6d4b\u8bd5",children:"3.1 LED\u6d4b\u8bd5\u6d4b\u8bd5"})}),"\n",(0,n.jsx)(s.p,{children:"\u2003\u2003ATK-DL2K0300B\u5f00\u53d1\u677f\u4e0a\u914d\u67091\u4e2a\u5fc3\u8df3LED(DS0)\uff0c1\u4e2a\u7528\u6237LED(DS1)\uff0c1\u4e2a\u7cfb\u7edfLED\u3002"}),"\n",(0,n.jsx)(s.p,{children:"\u2003\u2003\u5728\u51fa\u5382\u6587\u4ef6\u7cfb\u7edf\u8f93\u5165\u5982\u4e0b\u6307\u4ee4\uff0c\u63a7\u5236\u5fc3\u8df3\u548c\u7528\u6237LED\u7684\u72b6\u6001\u3002"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-c#",children:"cat /sys/class/leds/sys-led/trigger\t\t\t//\u67e5\u770b\u5fc3\u8df3\u706f\u7684\u5f53\u524d\u89e6\u53d1\u65b9\u5f0f\u53ca\u652f\u6301\u7684\u89e6\u53d1\u65b9\u5f0f\necho none > /sys/class/leds/sys-led/trigger\t\t//\u6539\u53d8\u5fc3\u8df3\u706f\u7684\u89e6\u53d1\u65b9\u5f0f\uff0c\u8bbe\u7f6e\u4e3anone\necho 1 > /sys/class/leds/sys-led/brightness\t\t//\u70b9\u4eae\u5fc3\u8df3\u706f\necho 0 > /sys/class/leds/sys-led/brightness\t\t//\u7184\u706d\u5fc3\u8df3\u706f\necho heartbeat > /sys/class/leds/sys-led/trigger\t//\u8bbe\u7f6e\u5fc3\u8df3\u706f\u4e3aheartbeat\necho none > /sys/class/leds/user-led/trigger\t\t//\u6539\u53d8\u7528\u6237\u706f\u7684\u89e6\u53d1\u65b9\u5f0f\uff0c\u8bbe\u7f6e\u4e3anone\necho 0 > /sys/class/leds/user-led/brightness\t\t//\u7184\u706d\u7528\u6237\u706f\necho 1 > /sys/class/leds/user-led/brightness\t\t//\u70b9\u4eae\u7528\u6237\u706f\necho heartbeat > /sys/class/leds/user-led/trigger\t//\u8bbe\u7f6e\u7528\u6237\u706f\u4e3a\u5fc3\u8df3heartbeat\n"})})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}}}]);