"use strict";(self.webpackChunkopenedv_wiki=self.webpackChunkopenedv_wiki||[]).push([[62255],{10597:(n,e,s)=>{s.d(e,{A:()=>r});const r=s.p+"assets/images/4.13.1-285a82bf5a757c3f191777d527d6f3e0.png"},28453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>i});var r=s(96540);const t={},c=r.createContext(t);function d(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:d(n.components),r.createElement(c.Provider,{value:e},n.children)}},63857:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var r=s(74848),t=s(28453);const c={title:"4.13 DS18B20\u6d4b\u8bd5",sidebar_position:13},d="4.13 DS18B20\u6d4b\u8bd5",i={id:"Boards/Linux/STM32MP157/STM32MP157 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4/4.13",title:"4.13 DS18B20\u6d4b\u8bd5",description:"&emsp;&emsp;DS18B20\u7b80\u4ecb\uff1a",source:"@site/docs/Boards/Linux/STM32MP157/STM32MP157 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4/4.13.md",sourceDirName:"Boards/Linux/STM32MP157/STM32MP157 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4",slug:"/Boards/Linux/STM32MP157/STM32MP157 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4/4.13",permalink:"/docs/Boards/Linux/STM32MP157/STM32MP157 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4/4.13",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"4.13 DS18B20\u6d4b\u8bd5",sidebar_position:13},sidebar:"BoardsLinuxSTM32MP157Sidebar",previous:{title:"4.12 DHT11\u6d4b\u8bd5",permalink:"/docs/Boards/Linux/STM32MP157/STM32MP157 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4/4.12"},next:{title:"4.14 \u677f\u8f7dSDIO WIFI\u6d4b\u8bd5",permalink:"/docs/Boards/Linux/STM32MP157/STM32MP157 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4/4.14"}},o={},a=[];function x(n){const e={code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"413-ds18b20\u6d4b\u8bd5",children:"4.13 DS18B20\u6d4b\u8bd5"})}),"\n",(0,r.jsxs)(e.p,{children:["\u2003\u2003DS18B20\u7b80\u4ecb\uff1a",(0,r.jsx)("br",{}),"\n\u2003\u2003DS18B20 \u662f\u7531 DALLAS \u534a\u5bfc\u4f53\u516c\u53f8\u63a8\u51fa\u7684\u4e00\u79cd\u7684\u201c\u4e00\u7ebf\u603b\u7ebf\u201d\u63a5\u53e3\u7684\u6e29\u5ea6\u4f20\u611f\u5668\u3002\u4e0e\u4f20\u7edf\u7684\u70ed\u654f\u7535\u963b\u7b49\u6d4b\u6e29\u5143\u4ef6\u76f8\u6bd4\uff0c\u5b83\u662f\u4e00\u79cd\u65b0\u578b\u7684\u4f53\u79ef\u5c0f\u3001\u9002\u7528\u7535\u538b\u5bbd\u3001\u4e0e\u5fae\u5904\u7406\u5668\u63a5\u53e3\u7b80\u5355\u7684\u6570\u5b57\u5316\u6e29\u5ea6\u4f20\u611f\u5668\u3002\u4e00\u7ebf\u603b\u7ebf\u7ed3\u6784\u5177\u6709\u7b80\u6d01\u4e14\u7ecf\u6d4e\u7684\u7279\u70b9\uff0c\u53ef\u4f7f\u7528\u6237\u8f7b\u677e\u5730\u7ec4\u5efa\u4f20\u611f\u5668\u7f51\u7edc\uff0c\u4ece\u800c\u4e3a\u6d4b\u91cf\u7cfb\u7edf\u7684\u6784\u5efa\u5f15\u5165\u5168\u65b0\u6982\u5ff5\uff0c\u6d4b\u91cf\u6e29\u5ea6\u8303\u56f4\u4e3a-55~+125\u2103 \uff0c\u7cbe\u5ea6\u4e3a\xb10\uff0e5\u2103\u30023-5.5 V \u7684\u7535\u538b\u8303\u56f4\uff0c\u91c7\u7528\u591a\u79cd\u5c01\u88c5\u5f62\u5f0f\uff0c\u4ece\u800c\u4f7f\u7cfb\u7edf\u8bbe\u8ba1\u7075\u6d3b\u3001\u65b9\u4fbf\u7b49\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u2003\u2003\u6b64\u5b9e\u9a8c\u9700\u8981\u51c6\u5907DS18B20\u6a21\u5757\uff0c\u53ef\u5728\u6b63\u70b9\u539f\u5b50\u6dd8\u5b9d\u5e97\u6216\u8005\u5176\u4ed6\u6e20\u9053\u8d2d\u4e70\u3002"}),"\n",(0,r.jsx)("center",{children:(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.img,{src:s(10597).A+"",width:"401",height:"353"}),(0,r.jsx)("br",{}),"\n\u56fe4.13 1 DS18B20\u6a21\u5757"]})}),"\n",(0,r.jsx)(e.p,{children:"\u2003\u2003DS18B20\u6a21\u5757\u7684\u7ba1\u811a\u6392\u5217\u5982\u4e0b\u56fe\uff0c \u4ee5\u6b63\u89c6\u56fe\u4e3a\u51c6\u3002"}),"\n",(0,r.jsx)("center",{children:(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.img,{src:s(91822).A+"",width:"623",height:"337"}),(0,r.jsx)("br",{}),"\n\u56fe4.13 2 DS18B20\u6b63\u89c6\u56fe\u4e0e\u4fef\u89c6\u56fe"]})}),"\n",(0,r.jsx)(e.p,{children:"\u2003\u2003ATK-STM32MP157\u5e95\u677f\u4e0aJP9\u5904\uff0c\u4e5f\u5c31\u662f\u62e8\u7801\u5f00\u5173\u65c1\u8fb9\uff0c\u7559\u51fa\u4e86\u4e00\u4e2a\u5355\u6392\u5706\u5b54\u6bcd\u5ea74Pin\u7684\u5ea7\u5b50\u3002\u53ef\u7528\u4e8e\u8fde\u63a5DS18B20\u6216\u8005DHT11\u3002\u6309JP9\u5904\u4e1d\u5370\u53ef\u77e5\u9053\u5982\u4f55\u628aDS18B20\u63d2\u5230JP9\u4e0a\u3002\u5c06DS18B20\u534a\u5706\u7684\u4e00\u9762\uff0c\u5bf9\u51c6\u5e95\u677f\u4e0a\u4e1d\u5370\u534a\u5706\u7684\u4e09\u4e2a\u811a\uff0c\u534a\u5706\u662f\u671d\u5411\u5f00\u53d1\u677f\u5916\u4fa7\u3002\u6ce8\u610f\u4e0d\u8981\u63d2\u9519\u65b9\u5411\uff0c\u5426\u5219\u5c06DS18B20\u70e7\u6389\u3002\u5982\u679c\u611f\u89c9DS18B20\u5f00\u59cb\u53d1\u70ed\uff0c\u8bf7\u8fc5\u901f\u65ad\u7535\uff0c\u5426\u5219\u5c06\u70e7\u6389DS18B20\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u2003\u2003\u7531\u6b63\u70b9\u539f\u5b50\u63d0\u4f9bDHT11\u9a71\u52a8\u7a0b\u5e8f\uff0c\u51fa\u5382\u5185\u6838\u6e90\u7801\u8def\u5f84\u4e3adrivers/char/ds18b20.c\u3002\u8bbe\u5907\u6811arch/arm/boot/dts/stm32mp157d-atk.dtsi\u914d\u7f6e\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c#",children:'/ {\n// \u2026 \u6b64\u5904\u7701\u7565\u5176\u4ed6\u914d\u7f6e\n    ds18b20 {\n        compatible = "alientek,ds18b20";\n        ds18b20-gpio = <&gpiof 2 GPIO_ACTIVE_LOW>;\n        status = "okay";\n    };\n// \u2026 \u6b64\u5904\u7701\u7565\u5176\u4ed6\u914d\u7f6e\n};\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u2003\u2003\u5f00\u53d1\u677f\u542f\u52a8\u524d\u8bf7\u5728JP9\u5904\u63d2\u597dDS18B20\uff0c\u4ea6\u53ef\u5728\u542f\u52a8\u540e\u518d\u63d2\u4e0a\u3002\u56e0\u4e3aDS18B20\u4e0eDHT11\u9a71\u52a8\u52a0\u8f7d\u53ef\u80fd\u6709\u5148\u540e\u987a\u5e8f\uff0c\u6240\u4ee5\u5b83\u4eec\u5728\u9a71\u52a8\u6ce8\u518c\u65f6\u7533\u8bf7\u540c\u4e00\u4e2a\u7ba1\u811a\u65f6\u4f1a\u6709\u4e00\u4e2a\u9a71\u52a8\u52a0\u8f7d\u5931\u8d25\u3002\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u5728\u6587\u4ef6\u7cfb\u7edf\u547d\u4ee4\u884c\u4e0b\u91cd\u65b0\u52a0\u8f7d\u5bf9\u5e94\u7684\u9a71\u52a8\u5373\u53ef\uff01"}),"\n",(0,r.jsx)(e.p,{children:"\u2003\u2003\u4f7f\u7528DS18B20\u65f6\uff0c\u5148\u5378\u8f7dDHT11\u7684\u9a71\u52a8\uff0c\u518d\u91cd\u65b0\u52a0\u8f7dDS18B20\u7684\u9a71\u52a8\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c#",children:"rmmod dht11              //\u5378\u8f7dDHT11\u7684\u9a71\u52a8\nrmmod ds18b20            //\u5378\u8f7dDS18B20\u7684\u9a71\u52a8 \nmodprobe ds18b20         //\u5b89\u88c5DS18B20\u7684\u9a71\u52a8\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u2003\u2003\u4f7f\u7528\u4e0b\u9762\u7684\u6307\u4ee4\u83b7\u53d6DS18B20\u7684\u6570\u636e\uff0c\u5f97\u51fa\u6765\u7684\u6570\u503c\u9664\u4ee510000\uff0c\u5c31\u662f\u5b9e\u9645\u7684\u6e29\u5ea6\u6570\u636e\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c#",children:"cat /sys/class/misc/ds18b20/value\n"})}),"\n",(0,r.jsx)("center",{children:(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.img,{src:s(81815).A+"",width:"411",height:"30"}),(0,r.jsx)("br",{}),"\n\u56fe4.13 3 \u8bfb\u53d6DS18B20\u7684\u6570\u636e"]})})]})}function f(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(x,{...n})}):x(n)}},81815:(n,e,s)=>{s.d(e,{A:()=>r});const r="data:image/png;base64,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"},91822:(n,e,s)=>{s.d(e,{A:()=>r});const r=s.p+"assets/images/4.13.2-cf72572559771c732bfb09654e417ca3.png"}}]);