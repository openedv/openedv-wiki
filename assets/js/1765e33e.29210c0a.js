"use strict";(self.webpackChunkopenedv_wiki=self.webpackChunkopenedv_wiki||[]).push([[9328],{20463:(c,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>r});var e=s(74848),t=s(28453);const a={title:"4.2 \u5b89\u88c5Poky\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\u94fe",sidebar_position:2},o="4.2 \u5b89\u88c5Poky\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\u94fe",l={id:"Boards/IMX6U/\u5feb\u901f\u4f53\u9a8c\u624b\u518c/cross compiling/install_poky",title:"4.2 \u5b89\u88c5Poky\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\u94fe",description:"\u628a\u5f00\u53d1\u677f\u5149\u76d8A-\u57fa\u7840\u8d44\u6599->5\u3001\u5f00\u53d1\u5de5\u5177->1\u3001\u4ea4\u53c9\u7f16\u8bd1\u5668->fsl-imx-x11-glibc-x86_64-meta-toolchain-qt5-cortexa7hf-neon-toolchain-4.1.15-2.1.0.sh\u62f7\u8d1d\u5230Ubuntu\u865a\u62df\u673a",source:"@site/docs/Boards/02_IMX6U/\u5feb\u901f\u4f53\u9a8c\u624b\u518c/cross compiling/install_poky.md",sourceDirName:"Boards/02_IMX6U/\u5feb\u901f\u4f53\u9a8c\u624b\u518c/cross compiling",slug:"/Boards/IMX6U/\u5feb\u901f\u4f53\u9a8c\u624b\u518c/cross compiling/install_poky",permalink:"/docs/Boards/IMX6U/\u5feb\u901f\u4f53\u9a8c\u624b\u518c/cross compiling/install_poky",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"4.2 \u5b89\u88c5Poky\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\u94fe",sidebar_position:2},sidebar:"IMX6USidebar",previous:{title:"4.1 \u5b89\u88c5\u901a\u7528ARM\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\u94fe",permalink:"/docs/Boards/IMX6U/\u5feb\u901f\u4f53\u9a8c\u624b\u518c/cross compiling/install_arm"},next:{title:"4.3 \u7f16\u8bd1\u51fa\u5382\u6e90\u7801U-boot",permalink:"/docs/Boards/IMX6U/\u5feb\u901f\u4f53\u9a8c\u624b\u518c/cross compiling/u-boot"}},i={},r=[];function g(c){const n={code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...c.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.header,{children:(0,e.jsx)(n.h1,{id:"42-\u5b89\u88c5poky\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\u94fe",children:"4.2 \u5b89\u88c5Poky\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\u94fe"})}),"\n",(0,e.jsxs)(n.p,{children:["\u628a",(0,e.jsx)(n.strong,{children:"\u5f00\u53d1\u677f\u5149\u76d8A-\u57fa\u7840\u8d44\u6599->5\u3001\u5f00\u53d1\u5de5\u5177->1\u3001\u4ea4\u53c9\u7f16\u8bd1\u5668->fsl-imx-x11-glibc-x86_64-meta-toolchain-qt5-cortexa7hf-neon-toolchain-4.1.15-2.1.0.sh"}),"\u62f7\u8d1d\u5230Ubuntu\u865a\u62df\u673a"]}),"\n",(0,e.jsx)(n.p,{children:"\u5982\u4e0b\u56fe\u672c\u6587\u5df2\u7ecf\u628a\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\u62f7\u8d1d\u5230\u4e86Ubuntu\u865a\u62df\u673a\u3002"}),"\n",(0,e.jsx)(n.p,{children:(0,e.jsx)(n.img,{alt:"4.2.1",src:s(51734).A+"",width:"1098",height:"115"})}),"\n",(0,e.jsx)(n.p,{children:"\u6267\u884c\u4e0b\u9762\u7684\u6307\u4ee4\u4fee\u6539\u811a\u672c\u7684\u6743\u9650\uff0c\u4fee\u6539\u6743\u9650\u540e\u53ef\u4ee5\u770b\u5230\u6b64\u811a\u672c\u989c\u8272\u663e\u793a\u6539\u53d8\uff0c\u8bf4\u660e\u4fee\u6539\u6210\u529f\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-c#",children:"chmod u+x fsl-imx-x11-glibc-x86_64-meta-toolchain-qt5-cortexa7hf-neon-toolchain-4.1.15-2.1.0.sh\n"})}),"\n",(0,e.jsx)(n.p,{children:"\u76f4\u63a5\u6267\u884c\u811a\u672c\u5b89\u88c5\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\uff0c\u8fde\u7eed\u6572\u4e0b\u4e24\u6b21\u56de\u8f66\u952e\u786e\u8ba4\uff0c\u518d\u8f93\u5165\u7528\u6237\u5bc6\u7801\u5373\u53ef\u3002\u672c\u6b21\u5b89\u88c5\u7684\u76ee\u5f55\u4e3a\u811a\u672c\u6240\u6307\u5b9a\u7684\u9ed8\u8ba4\u5b89\u88c5\u7684\u76ee\u5f55\uff0c\u540e\u9762\u7684\u5185\u6838\u7f16\u8bd1\u73af\u5883\u7684\u4ea4\u53c9\u7f16\u8bd1\u90fd\u662f\u6309\u8fd9\u4e2a\u5b89\u88c5\u76ee\u5f55\u53bb\u64cd\u4f5c\uff0c\u6240\u4ee5\u5efa\u8bae\u7528\u6237\u4e5f\u662f\u9ed8\u8ba4\u5b89\u88c5\u5230/opt/fsl-imx-x11/4.1.15-2.1.0\u8fd9\u4e2a\u9ed8\u8ba4\u76ee\u5f55\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-c#",children:"./fsl-imx-x11-glibc-x86_64-meta-toolchain-qt5-cortexa7hf-neon-toolchain-4.1.15-2.1.0.sh\n"})}),"\n",(0,e.jsx)(n.p,{children:(0,e.jsx)(n.img,{alt:"4.2.2",src:s(33357).A+"",width:"1168",height:"206"})}),"\n",(0,e.jsx)(n.p,{children:"\u4f7f\u7528\u65b9\u6cd5\u4e5f\u5341\u5206\u7b80\u5355\uff0c\u6839\u636e\u4e0a\u9762\u6253\u5370\u51fa\u6765\u7684\u63d0\u793a\uff0c\u76f4\u63a5\u4f7f\u80fd\u73af\u5883\u53d8\u91cf\u5c31\u53ef\u4ee5\u4e86\u3002\u4f46\u662f\u5728\u4e0d\u540c\u7ec8\u7aef\u6216\u8005\u5207\u6362\u7528\u6237\u65f6\u9700\u8981\u91cd\u65b0\u4f7f\u80fd\u73af\u5883\u53d8\u91cf\u65b9\u53ef\u4f7f\u7528\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-c#",children:"source /opt/fsl-imx-x11/4.1.15-2.1.0/environment-setup-cortexa7hf-neon-poky-linux-gnueabi\n"})}),"\n",(0,e.jsx)(n.p,{children:(0,e.jsx)(n.img,{alt:"4.2.3",src:s(77060).A+"",width:"1043",height:"38"})}),"\n",(0,e.jsx)(n.p,{children:"\u4f7f\u80fd\u73af\u5883\u53d8\u91cf\u540e\u53ef\u4ee5\u4f7f\u7528env\u6307\u4ee4\u67e5\u770b\u751f\u6548\u7684\u73af\u5883\u53d8\u91cf\uff0c\u4e0b\u56fe\u4e3a\u90e8\u5206\u622a\u56fe\uff0c\u53ef\u4ee5\u770b\u51fa\u4f7f\u80fd\u4e86\u8fd9\u4e2a\u73af\u5883\u53d8\u91cf\u540egcc\u5df2\u7ecf\u914d\u7f6e\u597d\u7f16\u8bd1\u65f6\u6240\u7528\u7684\u53c2\u6570\uff0c\u5982\u786c\u6d6e\u70b9\u53c2\u6570-mfpu=neon -mfloat-abi=hard\u3002\u4f7f\u7528\u786c\u6d6e\u70b9\u4ea4\u53c9\u7f16\u8bd1\uff0c\u53ef\u4ee5\u4f7f\u7528CPU\u81ea\u5e26FPU\u3002\u4e0b\u56fe\u4e3a\u73af\u5883\u53d8\u91cf\u90e8\u5206\u622a\u56fe\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-c#",children:"env\n"})}),"\n",(0,e.jsx)(n.p,{children:(0,e.jsx)(n.img,{alt:"4.2.4",src:s(58715).A+"",width:"1579",height:"241"})}),"\n",(0,e.jsx)(n.p,{children:"\u4f7f\u7528arm-poky-linux-gnueabi-gcc -v\u6307\u4ee4\u53ef\u4ee5\u67e5\u770bgcc\u7248\u672c\uff0c\u8868\u660e\u73af\u5883\u53d8\u91cf\u5df2\u7ecf\u751f\u6548\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-c#",children:"arm-poky-linux-gnueabi-gcc --version\n"})}),"\n",(0,e.jsx)(n.p,{children:(0,e.jsx)(n.img,{alt:"4.2.5",src:s(60850).A+"",width:"1309",height:"121"})}),"\n",(0,e.jsx)(n.p,{children:"\u8981\u4f7f\u7528\u6b64\u7f16\u8bd1\u5668\u7f16\u8bd1\u5185\u6838\u548cU-boot\u8fd8\u9700\u8981\u5b89\u88c5\u4ee5\u4e0b\u8f6f\u4ef6\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-c#",children:"sudo apt-get update        // \u5148\u66f4\u65b0\u8f6f\u5217\u8868\uff08\u672c\u5730\u6570\u636e\u5e93\uff09\nsudo apt-get install lzop  // \u5b89\u88c5lzop\u5de5\u5177\uff0c\u7528\u4e8e\u751f\u6210\u538b\u7f29\u6216\u89e3\u538b\u955c\u50cf\nsudo apt-get install libncurses* // \u5b89\u88c5ncurese\u76f8\u5173\u5e93\uff0cU-boot\u6216\u8005\u5185\u6838\u83dc\u5355\u663e\u793a\u65f6\u9700\u8981\n"})})]})}function d(c={}){const{wrapper:n}={...(0,t.R)(),...c.components};return n?(0,e.jsx)(n,{...c,children:(0,e.jsx)(g,{...c})}):g(c)}},28453:(c,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var e=s(96540);const t={},a=e.createContext(t);function o(c){const n=e.useContext(a);return e.useMemo((function(){return"function"==typeof c?c(n):{...n,...c}}),[n,c])}function l(c){let n;return n=c.disableParentContext?"function"==typeof c.components?c.components(t):c.components||t:o(c.components),e.createElement(a.Provider,{value:n},c.children)}},33357:(c,n,s)=>{s.d(n,{A:()=>e});const e=s.p+"assets/images/4.2.2-3ec148e35b66236afef8767cfec88406.png"},51734:(c,n,s)=>{s.d(n,{A:()=>e});const e=s.p+"assets/images/4.2.1-6501a2a72e07026198dafe8ffaba6957.png"},58715:(c,n,s)=>{s.d(n,{A:()=>e});const e=s.p+"assets/images/4.2.4-d8ccb68a1077df04afaf26bd85bce643.png"},60850:(c,n,s)=>{s.d(n,{A:()=>e});const e=s.p+"assets/images/4.2.5-6a8b3ff910ef0b81e09744a0561b58d7.png"},77060:(c,n,s)=>{s.d(n,{A:()=>e});const e="data:image/png;base64,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"}}]);