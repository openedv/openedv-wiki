"use strict";(self.webpackChunkopenedv_wiki=self.webpackChunkopenedv_wiki||[]).push([[18738],{28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>a});var s=t(96540);const i={},c=s.createContext(i);function r(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(c.Provider,{value:e},n.children)}},30806:(n,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/images/5.5.2-b9e50418fde08c217a640282aa706f48.png"},38389:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var s=t(74848),i=t(28453);const c={title:"5.5 \u5982\u4f55\u8bbe\u7f6e\u9759\u6001ip",sidebar_position:5},r="5.5 \u5982\u4f55\u8bbe\u7f6e\u9759\u6001ip",a={id:"Boards/Linux/IMX6U/I.MX6U \u5feb\u901f\u4f53\u9a8c\u624b\u518c/introduction to file system/static",title:"5.5 \u5982\u4f55\u8bbe\u7f6e\u9759\u6001ip",description:"&emsp;&emsp;\u8bbe\u7f6e\u9759\u6001 ip \u662f\u7528\u6237\u6700\u9700\u8981\u7684\uff0c\u8fd9\u91cc\u6211\u4eec\u63d0\u4f9b\u65b9\u6cd5\uff0c\u7531\u4e8e\u51fa\u5382\u7cfb\u7edf\u662f connmand\u6258\u7ba1\u7684\uff0c\u6ce8\u4ec5\u9002\u7528\u6b63\u70b9\u539f\u5b50\u7cfb\u7edf\uff01\u7531 connmand \u81ea\u52a8\u83b7\u53d6 ip\u3002",source:"@site/docs/Boards/Linux/IMX6U/I.MX6U \u5feb\u901f\u4f53\u9a8c\u624b\u518c/introduction to file system/static.md",sourceDirName:"Boards/Linux/IMX6U/I.MX6U \u5feb\u901f\u4f53\u9a8c\u624b\u518c/introduction to file system",slug:"/Boards/Linux/IMX6U/I.MX6U \u5feb\u901f\u4f53\u9a8c\u624b\u518c/introduction to file system/static",permalink:"/docs/Boards/Linux/IMX6U/I.MX6U \u5feb\u901f\u4f53\u9a8c\u624b\u518c/introduction to file system/static",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"5.5 \u5982\u4f55\u8bbe\u7f6e\u9759\u6001ip",sidebar_position:5},sidebar:"BoardsLinuxIMX6USidebar",previous:{title:"5.4 \u5982\u4f55\u521b\u5efa\u81ea\u542f\u52a8\u7a0b\u5e8f",permalink:"/docs/Boards/Linux/IMX6U/I.MX6U \u5feb\u901f\u4f53\u9a8c\u624b\u518c/introduction to file system/create"},next:{title:"5.6 \u7cfb\u7edf\u5e38\u7528\u8f6f\u4ef6\u7248\u672c",permalink:"/docs/Boards/Linux/IMX6U/I.MX6U \u5feb\u901f\u4f53\u9a8c\u624b\u518c/introduction to file system/version"}},o={},d=[];function l(n){const e={code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"55-\u5982\u4f55\u8bbe\u7f6e\u9759\u6001ip",children:"5.5 \u5982\u4f55\u8bbe\u7f6e\u9759\u6001ip"})}),"\n",(0,s.jsx)(e.p,{children:"\u2003\u2003\u8bbe\u7f6e\u9759\u6001 ip \u662f\u7528\u6237\u6700\u9700\u8981\u7684\uff0c\u8fd9\u91cc\u6211\u4eec\u63d0\u4f9b\u65b9\u6cd5\uff0c\u7531\u4e8e\u51fa\u5382\u7cfb\u7edf\u662f connmand\u6258\u7ba1\u7684\uff0c\u6ce8\u4ec5\u9002\u7528\u6b63\u70b9\u539f\u5b50\u7cfb\u7edf\uff01\u7531 connmand \u81ea\u52a8\u83b7\u53d6 ip\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u2003\u2003\u6240\u4ee5\u5f53\u6211\u4eec\u8bbe\u7f6e\u4e86\u9759\u6001 ip \u540e\uff0c\u53c8\u88ab connmand \u91cd\u65b0\u83b7\u53d6 ip\u3002\u6240\u4ee5\u8fd9\u6837\u5b50\u662f\u4e0d\u884c\u7684\u3002\u6211\u4eec\u9700\u8981\u544a\u8bc9 connmand\uff1a\u201c\u4f60\u4e0d\u8981\u6258\u7ba1\u6211\u7684\u7f51\u7edc\u5566\uff0c\u6211\u9700\u8981\u8bbe\u7f6e\u9759\u6001 ip!\u201d\u5f00\u4e2a\u73a9\u7b11\uff0c\u5b9e\u9645\u539f\u7406\u5c31\u662f\u8fd9\u6837\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u2003\u2003\u914d\u7f6e connman \u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u9ed8\u8ba4\u6ca1\u6709\u521b\u5efa\u5bf9\u5e94\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u9700\u8981\u81ea\u5df1\u624b\u52a8\u5728 etc \u76ee\u5f55\u4e0b\u521b\u5efa connman \u6587\u4ef6\u5939\uff0c\u5e76\u521b\u5efa main.conf \u6587\u4ef6\uff0cconnman \u5728\u542f\u52a8\u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u7684\u8bfb\u53d6\u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c#",children:"mkdir /etc/connman\nvi /etc/connman/main.conf\nsync\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u2003\u2003\u5728 main.conf \u91cc\u5199\u5165\u4ee5\u4e0b\u5185\u5bb9\uff0c\u6bd4\u5982\u7b14\u8005\u5c06 eth1 \u5199\u8fdb\u9ed1\u540d\u5355\uff0c\u8fd9\u6837 eth1 \u5c31\u4e0d\u4f1a\u88ab\u6258\u7ba1\u4e86\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c#",children:"[General]\nNetworkInterfaceBlacklist = eth0\n# NetworkInterfaceBlacklist = eth0,eth1 #\u82e5\u8981\u6dfb\u52a0\u591a\u4e2a\u7f51\u5361\u65f6\uff0c\u7528\u82f1\u6587\u201c,\u201d\u9694\u5f00\u3002\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u2003\u2003\u91cd\u542f\u7cfb\u7edf\u540e\uff0c\u53ef\u4ee5\u770b\u5230eth0\u6ca1\u6709IP\u5730\u5740\u3002\u56e0\u4e3a\u5b83\u6ca1\u6709\u88ab\u6258\u7ba1\u4e86\u3002"}),"\n",(0,s.jsx)("center",{children:(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"5.5.1",src:t(62573).A+"",width:"811",height:"424"})})}),"\n",(0,s.jsx)(e.p,{children:"\u2003\u2003\u73b0\u5728\u6211\u4eec\u6765\u8bbe\u7f6e\u9759\u6001 ip\u3002\u7f16\u8f91/etc/network/interfaces \u6587\u4ef6\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c#",children:"vi /etc/network/interfaces\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u2003\u2003\u8ffd\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff0c\u8bbe\u7f6e\u9759\u6001 ip \u4e3a 192.168.6.145\uff0c\u8bf7\u6839\u636e\u81ea\u5df1\u7684\u7f51\u6bb5\u81ea\u884c\u4fee\u6539\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c#",children:"auto eth0\niface eth0 inet static\naddress 192.168.6.145\nnetmask 255.255.255.0\ngateway 192.168.6.1\n"})}),"\n",(0,s.jsx)("center",{children:(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"5.5.2",src:t(30806).A+"",width:"884",height:"543"})})}),"\n",(0,s.jsx)(e.p,{children:"\u2003\u2003\u5f53\u7136\uff0c\u4e0a\u56fe\u4e2dauto eth0\u5df2\u7ecf\u5b58\u5728\uff0c\u53ef\u4ee5\u4e0d\u7528\u91cd\u590d\u5199\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c#",children:"sync\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u2003\u2003\u4fdd\u5b58\u91cd\u542f\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u9759\u6001ip\u5df2\u7ecf\u8bbe\u7f6e\u6210\u529f\u3002"}),"\n",(0,s.jsx)("center",{children:(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"5.5.3",src:t(84607).A+"",width:"932",height:"407"})})}),"\n",(0,s.jsx)(e.p,{children:"\u2003\u2003\u56e0\u4e3a\u53d6\u6d88\u4e86eth0\u7f51\u7edc\u6258\u7ba1\uff0c\u65e0\u6cd5\u81ea\u52a8DNS\uff0c\u6240\u4ee5\u662f\u65e0\u6cd5ping\u5916\u7f51\u7684\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u2003\u2003\u7f16\u8f91\u51fa\u5382\u6587\u4ef6\u7cfb\u7edf\u91cc/etc/rc.local\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c#",children:"vi /etc/rc.local\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u2003\u2003\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff0c\u8bf7\u6839\u636e\u4e2a\u4eba\u4f7f\u7528\u7684\u8def\u7531\u5668\uff0c\u8bbe\u7f6e\u76f8\u5e94\u7f51\u6bb5\u7684ip\u5730\u5740\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u2003\u2003\u4e0b\u56fe\u4e3a\u8bbe\u7f6eeth0\u7684\u9759\u6001ip\u5730\u5740\u3002\u8bf7\u6ce8\u610f\u8fd9\u4e2aip\u4e0d\u8981\u4e0e\u5176\u4ed6\u8bbe\u5907\u7684ip\u51b2\u7a81\uff01",(0,s.jsx)(e.strong,{children:"\u540c\u65f6\u4e0d\u8981\u5199\u5728exit 0\u4e4b\u540e\u4e86\uff01"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c#",children:'echo "nameserver 114.114.114.114" > /etc/resolv.conf\n'})}),"\n",(0,s.jsx)("center",{children:(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.img,{alt:"5.5.4",src:t(56576).A+"",width:"924",height:"304"}),(0,s.jsx)("br",{}),"\n\u56fe5.5 1 \u6dfb\u52a0DNS"]})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},56576:(n,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/images/5.5.4-54b1d517a68e4973f08a37434553c7aa.png"},62573:(n,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/images/5.5.1-8fbfac8b8d994ecde7c1d0ca5a659c48.png"},84607:(n,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/images/5.5.3-3a3a0ae10bfab649aaca0b470113c89a.png"}}]);