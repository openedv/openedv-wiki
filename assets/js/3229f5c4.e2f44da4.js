"use strict";(self.webpackChunkopenedv_wiki=self.webpackChunkopenedv_wiki||[]).push([[19553],{11868:(e,s,c)=>{c.r(s),c.d(s,{assets:()=>p,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var n=c(74848),r=c(28453);const i={title:"3.17 CPU\u9891\u7387",sidebar_position:17},t="3.17 CPU\u9891\u7387",o={id:"Boards/Linux/DLRK3588/DLRK3588 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/function_test/3.17",title:"3.17 CPU\u9891\u7387",description:"&emsp;&emsp;\u547d\u4ee4\u5982\u4e0b\u6240\u793a\uff1a",source:"@site/docs/Boards/Linux/DLRK3588/DLRK3588 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/3.function_test/3.17.md",sourceDirName:"Boards/Linux/DLRK3588/DLRK3588 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/3.function_test",slug:"/Boards/Linux/DLRK3588/DLRK3588 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/function_test/3.17",permalink:"/docs/Boards/Linux/DLRK3588/DLRK3588 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/function_test/3.17",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"3.17 CPU\u9891\u7387",sidebar_position:17},sidebar:"BoardsLinuxDLRK3588Sidebar",previous:{title:"3.16 \u4e3b\u82af\u7247\u6e29\u5ea6",permalink:"/docs/Boards/Linux/DLRK3588/DLRK3588 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/function_test/3.16_temp"},next:{title:"3.18 \u8033\u673a\u63d2\u62e8\u6d4b\u8bd5",permalink:"/docs/Boards/Linux/DLRK3588/DLRK3588 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/function_test/3.18"}},p={},a=[];function d(e){const s={code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"317-cpu\u9891\u7387",children:"3.17 CPU\u9891\u7387"})}),"\n",(0,n.jsx)(s.p,{children:"\u2003\u2003\u547d\u4ee4\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,n.jsx)(s.p,{children:"\u2003\u2003\u67e5\u770b\u5f53\u524d\u8fd0\u884cCPU\u9891\u7387\u3002"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-c#",children:"cat /sys/devices/system/cpu/cpu*/cpufreq/cpuinfo_cur_freq\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u2003\u2003\u67e5\u770b\u8f6f\u4ef6\u4e0a\u6700\u540e\u4e00\u6b21\u8bbe\u7f6e\u7684CPU\u9891\u7387"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-c#",children:"cat /sys/devices/system/cpu/cpu*/cpufreq/scaling_cur_freq\t\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u2003\u2003\u67e5\u770b\u652f\u6301\u7684CPU\u9891\u7387"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-c#",children:"cat /sys/devices/system/cpu/cpufreq/policy0/scaling_available_frequencies \n"})}),"\n",(0,n.jsx)(s.p,{children:"\u2003\u2003\u4f7f\u80fdCPU\u6027\u80fd\u6a21\u5f0f\uff0c\u8dd1\u6700\u9ad8\u9891\uff0c\u672c\u6b21\u8c03\u8282\u7684\u5c0f\u6838\u5fc3\u3002\u6ce8\u610f\uff0c\u6d4b\u8bd58K\u89c6\u9891\u64ad\u653e\u5efa\u8bae\u5f00\u542f\u6027\u80fd\u6a21\u5f0f\uff01\u800c\u4e14\u5168\u90e8\u6838\u5fc3\u90fd\u5efa\u8bae\u5f00\u542f\uff0c\u5426\u5219\u53ef\u80fd\u5361\u987f\u54e6\uff0c\u7b14\u8005\u5df2\u7ecf\u6d4b\u8bd5\u8fc7\u4e86\uff0c\u5f00\u542f\u5c31\u6d41\u7545\u597d\u591a\uff01"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-c#",children:"echo performance > /sys/devices/system/cpu/cpufreq/policy0/scaling_governor\t\necho performance > /sys/devices/system/cpu/cpufreq/policy4/scaling_governor\t # 2\u4e2a\u5927\u6838\u5fc3\necho performance > /sys/devices/system/cpu/cpufreq/policy6/scaling_governor\t # 2\u4e2a\u5927\u6838\u5fc3\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u2003\u2003\u5207\u6362governor\u5230userspace"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-c#",children:"echo userspace > /sys/devices/system/cpu/cpufreq/policy0/scaling_governor\necho userspace > /sys/devices/system/cpu/cpufreq/policy4/scaling_governor\t# 2\u4e2a\u5927\u6838\u5fc3\necho userspace > /sys/devices/system/cpu/cpufreq/policy6/scaling_governor\t# 2\u4e2a\u5927\u6838\u5fc3\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u2003\u2003\u8bbe\u7f6eCPU\u9891\u7387 \u9700\u8981\u5148\u5207\u6362\u5230userspace\uff0c\u6ce8\u610f\u672c\u6b21\u53ea\u662f\u6f14\u793a\u8c03\u6574\u5c0f\u6838\u7684\u4e3b\u9891\u3002"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-c#",children:"echo 1800000 > /sys/devices/system/cpu/cpufreq/policy0/scaling_setspeed\necho 2304000> /sys/devices/system/cpu/cpufreq/policy4/scaling_setspeed \t# 2\u4e2a\u5927\u6838\u5fc3\necho 2304000> /sys/devices/system/cpu/cpufreq/policy6/scaling_setspeed \t# 2\u4e2a\u5927\u6838\u5fc3\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u2003\u2003\u518d\u67e5\u770b\u5f53\u524d\u8fd0\u884cCPU\u9891\u7387"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-c#",children:"cat /sys/devices/system/cpu/cpu*/cpufreq/cpuinfo_cur_freq\n"})}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:c(43378).A+"",width:"1018",height:"499"})})})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,c)=>{c.d(s,{R:()=>t,x:()=>o});var n=c(96540);const r={},i=n.createContext(r);function t(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(i.Provider,{value:s},e.children)}},43378:(e,s,c)=>{c.d(s,{A:()=>n});const n=c.p+"assets/images/3.17.1-9f88e8b0e5d0bb262fd7b02f538a5058.png"}}]);