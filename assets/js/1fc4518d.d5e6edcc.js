"use strict";(self.webpackChunkopenedv_wiki=self.webpackChunkopenedv_wiki||[]).push([[46377],{28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>i});var r=s(96540);const c={},a=r.createContext(c);function t(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),r.createElement(a.Provider,{value:n},e.children)}},55563:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>M,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=s(74848),c=s(28453);const a={title:"4.11 \u97f3\u9891\u6d4b\u8bd5",sidebar_position:11},t="4.11 \u97f3\u9891\u6d4b\u8bd5",i={id:"Boards/Linux/STM32MP157/STM32MP157 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4/4.11",title:"4.11 \u97f3\u9891\u6d4b\u8bd5",description:"STM32MP157",source:"@site/docs/Boards/Linux/STM32MP157/STM32MP157 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4/4.11.md",sourceDirName:"Boards/Linux/STM32MP157/STM32MP157 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4",slug:"/Boards/Linux/STM32MP157/STM32MP157 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4/4.11",permalink:"/docs/Boards/Linux/STM32MP157/STM32MP157 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4/4.11",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"4.11 \u97f3\u9891\u6d4b\u8bd5",sidebar_position:11},sidebar:"BoardsLinuxSTM32MP157Sidebar",previous:{title:"4.10 ICM20608\u6d4b\u8bd5",permalink:"/docs/Boards/Linux/STM32MP157/STM32MP157 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4/4.10"},next:{title:"4.12 DHT11\u6d4b\u8bd5",permalink:"/docs/Boards/Linux/STM32MP157/STM32MP157 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4/4.12"}},d={},l=[{value:"4.11.1 \u64ad\u653e\u97f3\u9891\u6d4b\u8bd5",id:"4111-\u64ad\u653e\u97f3\u9891\u6d4b\u8bd5",level:2},{value:"4.11.2 \u5f55\u97f3\u6d4b\u8bd5",id:"4112-\u5f55\u97f3\u6d4b\u8bd5",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"411-\u97f3\u9891\u6d4b\u8bd5",children:"4.11 \u97f3\u9891\u6d4b\u8bd5"})}),"\n",(0,r.jsx)("div",{class:"stm32mp157_center-table-div",children:(0,r.jsxs)("table",{class:"stm32mp157_center-table",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"STM32MP157"}),(0,r.jsx)("th",{children:"MINI STM32MP157"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"\u652f\u6301"}),(0,r.jsx)("td",{children:"\u4e0d\u652f\u6301"})]})]})}),"\n",(0,r.jsx)(n.p,{children:"\u2003\u2003ATK-STM32MP157\u5e95\u677f\u4e0a\u642d\u8f7d\u4e00\u9897\u9ad8\u6027\u80fd\u97f3\u9891\u7f16\u89e3\u7801\u82af\u7247CS42L51\u3002\u677f\u8f7d\u9ea6\u514b\u98ce\u53ef\u5f55\u97f3\uff0c\u5e95\u677f\u80cc\u9762\u63a5\u4e86\u4e00\u4e2a2\u6b278\u74e6\u7684\u5587\u53ed\uff0c\u65b9\u4fbf\u7528\u6237\u64ad\u653e\u97f3\u4e50\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"4111-\u64ad\u653e\u97f3\u9891\u6d4b\u8bd5",children:"4.11.1 \u64ad\u653e\u97f3\u9891\u6d4b\u8bd5"}),"\n",(0,r.jsx)(n.p,{children:"\u2003\u2003\u4f7f\u7528\u7cfb\u7edf\u6307\u4ee4aplay\u6216\u8005gst-play-1.0\u53ef\u4ee5\u64ad\u653e\u97f3\u9891\u6587\u4ef6\u3002\u6267\u884c\u4e0b\u9762\u7684\u6307\u4ee4\u64ad\u653e\u97f3\u9891\u6587\u4ef6\u3002\u7528\u6237\u4e5f\u53ef\u4ee5\u81ea\u5df1\u62f7\u8d1d\u97f3\u9891\u6587\u4ef6\u5230\u6587\u4ef6\u7cfb\u7edf\u4e0b\u4f7f\u7528\u6307\u4ee4aplay\u6216\u8005gst-play-1.0 + \u97f3\u9891\u6587\u4ef6\u64ad\u653e\u3002\u63d2\u4e0a\u8033\u673a\u6216\u8005\u542c\u5e95\u677f\u4e0a\u7684\u5587\u53ed\u6709\u6ca1\u6709\u58f0\u97f3\uff0c\u6ce8\u610f\uff1a\u5e26\u8033\u673a\u65f6\u5148\u9760\u8fd1\u8033\u6735\uff0c\u4e0d\u8981\u5148\u5e26\u4e0a\uff0c\u9632\u6b62\u8033\u673a\u97f3\u91cf\u8fc7\u5927\uff0c\u53ef\u80fd\u7ed9\u60a8\u4e00\u4e2a\u60ca\u559c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u2003\u2003\u8bbe\u7f6e\u64ad\u653e\u97f3\u91cf"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c#",children:"amixer -c STM32MP1DK cset name='PCM Playback Switch' 'on','on'\namixer -c STM32MP1DK cset name='PCM Playback Volume' '85','85'\namixer -c STM32MP1DK cset name='Analog Playback Volume' '204','204'\namixer -c STM32MP1DK cset name='PCM channel mixer' 'L R'\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u2003\u2003\u64ad\u653e\u7cfb\u7edf\u81ea\u5e26\u97f3\u9891"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c#",children:"aplay /usr/share/sounds/alsa/Front_Right.wav\n"})}),"\n",(0,r.jsx)(n.h2,{id:"4112-\u5f55\u97f3\u6d4b\u8bd5",children:"4.11.2 \u5f55\u97f3\u6d4b\u8bd5"}),"\n",(0,r.jsx)(n.p,{children:"\u2003\u2003ATK-STM32MP157\u5e95\u677f\u4e0a\u6709\u4e24\u4e2a\u5f55\u97f3\u8bbe\u5907\uff0c\u4e00\u4e2a\u662f\u5e95\u677f\u4e0a\u7684MIC\uff0c\u4e00\u4e2a\u662f\u8033\u673a\u5ea7\u5b50\u4f5cMIC\u8f93\u5165\u3002\u6ce8\u610f\u8033\u673a\u7684\u65c1\u8fb9\u6709\u4e2a\u8df3\u7ebf\u5e3d\uff0c\u7528\u4e8e\u5207\u6362\u8033\u673aMIC\u8f93\u5165\u548c\u5e95\u677f\u4e0a\u7684MIC\u8f93\u5165\u3002MIC\u4e0ePHONE\u76f8\u8fde\u662f\u8868\u793a\u8033\u673a\u7684MIC\u8f93\u5165\uff0cMIC\u4e0eBOARD\u76f8\u8fde\u662f\u4ee3\u8868\u5e95\u677f\u4e0a\u7684MIC\u8f93\u5165\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u2003\u2003\u8bbe\u7f6e\u5f55\u97f3\u589e\u76ca"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c#",children:"amixer -c STM32MP1DK cset name='PGA-ADC Mux Left' '3'\namixer -c STM32MP1DK cset name='PGA-ADC Mux Right' '3'\namixer -c STM32MP1DK cset name='Mic Boost Volume' '1','1'\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u2003\u2003\u5f55\u97f3\uff0c\u6267\u884c\u4e0b\u9762\u7684\u6307\u4ee4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c#",children:"arecord -r 44100 -f S16_LE -c 2 -d 10 -D hw:0,1 record.wav\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u2003\u2003\u6307\u4ee4\u89e3\u91ca\uff1a",(0,r.jsx)("br",{}),"\n\u2003\u2003\uff081\uff09\t-f S16_LE\uff1a\u4ee5 S16_LE\u683c\u5f0f\u91c7\u6837",(0,r.jsx)("br",{}),"\n\u2003\u2003\uff082\uff09\t-r 44100\uff1a\u91c7\u6837\u7387 44.1K",(0,r.jsx)("br",{}),"\n\u2003\u2003\uff083\uff09\t-c 2\uff1a2 \u4e2a\u58f0\u9053",(0,r.jsx)("br",{}),"\n\u2003\u2003\uff084\uff09\t-d 10\uff1a\u5f55\u97f3\u957f\u5ea6 10s",(0,r.jsx)("br",{}),"\n\u2003\u2003\uff085\uff09\trecord.wav\uff1a\u5f55\u97f3\u5b58\u751f\u6210\u7684\u97f3\u9891\u6587\u4ef6",(0,r.jsx)("br",{}),"\n\u2003\u2003\uff086\uff09\t-D hw:0,1 \u6307\u5b9a\u786c\u4ef6\u58f0\u5361\uff0c0\u662f\u5361\u6570\uff0c1\u662f\u5728\u8bbe\u5907\u6570\u91cf"]}),"\n",(0,r.jsx)(n.p,{children:"\u2003\u2003\u64ad\u653e\u4e0a\u9762\u5f55\u5236\u7684\u97f3\u9891\u6587\u4ef6\uff0c\u5907\u6ce8\uff1a\u751f\u6210\u7684\u6587\u4ef6\u5927\u5c0f\u4e0e\u7528\u6237\u8bbe\u7f6e\u7684\u683c\u5f0f\u53ca\u5f55\u5236\u7684\u957f\u5ea6\u6709\u5173"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c#",children:"aplay record.wav\n"})})]})}function M(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}}}]);