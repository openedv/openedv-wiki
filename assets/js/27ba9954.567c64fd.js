"use strict";(self.webpackChunkopenedv_wiki=self.webpackChunkopenedv_wiki||[]).push([[71952],{28453:(n,e,c)=>{c.d(e,{R:()=>o,x:()=>t});var i=c(96540);const s={},r=i.createContext(s);function o(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(r.Provider,{value:e},n.children)}},45911:(n,e,c)=>{c.d(e,{A:()=>i});const i=c.p+"assets/images/4.6.1-b4ec3b0d77f4b5c3f172d17ea2d62b0a.png"},83733:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var i=c(74848),s=c(28453);const r={title:"4.6 \u7f16\u8bd1\u4e00\u4e2a\u7b80\u5355\u7684c\u6587\u4ef6",sidebar_position:6},o="4.6 \u7f16\u8bd1\u4e00\u4e2a\u7b80\u5355\u7684c\u6587\u4ef6",t={id:"Boards/Linux/IMX6U/I.MX6U \u5feb\u901f\u4f53\u9a8c\u624b\u518c/cross compiling/comple_c",title:"4.6 \u7f16\u8bd1\u4e00\u4e2a\u7b80\u5355\u7684c\u6587\u4ef6",description:"&emsp;&emsp;\u5728\u7f16\u8bd1\u51fa\u5382Qt GUI\u4e4b\u524d\uff0c\u524d\u63d0\u9700\u8981\u5148\u5b89\u88c54.2\u5c0f\u8282\u7684Poky\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\u94fe\u3002",source:"@site/docs/Boards/Linux/IMX6U/I.MX6U \u5feb\u901f\u4f53\u9a8c\u624b\u518c/cross compiling/comple_c.md",sourceDirName:"Boards/Linux/IMX6U/I.MX6U \u5feb\u901f\u4f53\u9a8c\u624b\u518c/cross compiling",slug:"/Boards/Linux/IMX6U/I.MX6U \u5feb\u901f\u4f53\u9a8c\u624b\u518c/cross compiling/comple_c",permalink:"/docs/Boards/Linux/IMX6U/I.MX6U \u5feb\u901f\u4f53\u9a8c\u624b\u518c/cross compiling/comple_c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"4.6 \u7f16\u8bd1\u4e00\u4e2a\u7b80\u5355\u7684c\u6587\u4ef6",sidebar_position:6},sidebar:"BoardsLinuxIMX6USidebar",previous:{title:"4.5 \u7f16\u8bd1\u51fa\u5382Qt GUI\u7efc\u5408Demo",permalink:"/docs/Boards/Linux/IMX6U/I.MX6U \u5feb\u901f\u4f53\u9a8c\u624b\u518c/cross compiling/qt"},next:{title:"\u7b2c\u4e94\u7ae0 \u6587\u4ef6\u7cfb\u7edf\u529f\u80fd\u7b80\u4ecb",permalink:"/docs/category/\u7b2c\u4e94\u7ae0-\u6587\u4ef6\u7cfb\u7edf\u529f\u80fd\u7b80\u4ecb-3"}},a={},d=[];function l(n){const e={a:"a",code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"46-\u7f16\u8bd1\u4e00\u4e2a\u7b80\u5355\u7684c\u6587\u4ef6",children:"4.6 \u7f16\u8bd1\u4e00\u4e2a\u7b80\u5355\u7684c\u6587\u4ef6"})}),"\n",(0,i.jsxs)(e.p,{children:["\u2003\u2003\u5728\u7f16\u8bd1\u51fa\u5382Qt GUI\u4e4b\u524d\uff0c\u524d\u63d0\u9700\u8981\u5148\u5b89\u88c5",(0,i.jsx)(e.a,{href:"/docs/Boards/Linux/IMX6U/I.MX6U%20%E5%BF%AB%E9%80%9F%E4%BD%93%E9%AA%8C%E6%89%8B%E5%86%8C/cross%20compiling/install_poky",children:"4.2\u5c0f\u8282"}),"\u7684Poky\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\u94fe\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u2003\u2003\u672c\u6587\u65b0\u5efa\u4e00\u4e2atest\u6587\u4ef6\u5939\uff0c\u5728test\u6587\u4ef6\u5939\u4e0b\u7f16\u8f91\u4e00\u4e2amain.c\u6587\u4ef6\uff0c\u4f7f\u7528vi/vim\u6307\u4ee4\uff0c\u590d\u5236\u4e0b\u9762\u7684\u5185\u5bb9\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u2003\u2003\u7a0b\u5e8f\u529f\u80fd\u662f\u6253\u5370\u4e00\u53e5\u201chello world!\u201d\uff0c\u62f7\u8d1d\u4ee5\u4e0b\u5185\u5bb9\u5230vi/vim\u7f16\u8f91\u5668\u7a97\u53e3\u91cc\u3002\u6309i\u8fdb\u5165\u63d2\u5165\u6a21\u5f0f\uff0c\u53f3\u952e\u8fdb\u884c\u7c98\u8d34\u5185\u5bb9\uff0c\u7c98\u8d34\u6210\u529f\u540e\u6309ESC\u952e\u9000\u51fa\u7f16\u8f91\u6a21\u5f0f\uff0c\u7136\u540e\u8f93\u5165",(0,i.jsx)(e.code,{children:":wq"}),"\u4fdd\u5b58\u5e76\u9000\u51fa\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c#",children:"mkdir test\ncd test\nvi main.c\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u2003\u2003\u5728main.c\u590d\u5236\u7c98\u8d34\u4e0b\u9762\u7684\u5185\u5bb9\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c#",children:'#include <stdio.h>\nint main(void)\n{\n        printf("hello world!\\n");\n        return 0;\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u2003\u2003\u5982\u679c\u60a8\u5728\u4e0a\u6587\u5df2\u7ecf\u4f7f\u80fd\u8fc7\u73af\u5883\u53d8\u91cf\u5c31\u4e0d\u7528\u518d\u6267\u884c\u4e0b\u9762\u8fd9\u4e00\u6b65\u4e86\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c#",children:"source /opt/fsl-imx-x11/4.1.15-2.1.0/\nenvironment-setup-cortexa7hf-neon-poky-linux-gnueabi\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u7f16\u8bd1main.c\u6587\u4ef6\uff0c\u6307\u4ee4\u89e3\u91ca:"}),"\n",(0,i.jsxs)(e.p,{children:["\uff081\uff09\t$CC \uff1a$\u662f\u53d6\u503c\u7b26\u53f7\uff0c\u53d6\u7ec8\u7aef\u7684\u73af\u5883\u53d8\u91cfCC\u7684\u503c.",(0,i.jsx)("br",{}),"\n\uff082\uff09\tmain.c \uff1ac\u6587\u4ef6",(0,i.jsx)("br",{}),"\n\uff083\uff09\t-o \uff1a\u53c2\u6570-o\uff0c\u540e\u9762\u52a0\u7f16\u8bd1\u7684\u76ee\u6807\u6587\u4ef6"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c#",children:"$CC main.c -o main\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u2003\u2003\u6216\u8005\u5199\u6210\u4e0b\u9762\u8fd9\u6837\u6765\u7f16\u8bd1main.c\u6587\u4ef6\u4e5f\u662f\u53ef\u4ee5\u7684\uff0c\u5b9e\u9645\u662f\u628a$CC\u7684\u503c\u6362\u6210\u4e86\u5982\u4e0b\uff0c\u4e0b\u9762\u4e3a\u4e00\u6761\u6307\u4ee4\uff0c\u7531\u4e8ePDF\u683c\u5f0f\u95ee\u9898\uff0c\u5efa\u8bae\u5206\u6bb5\u590d\u5236\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c#",children:"arm-poky-linux-gnueabi-gcc  -march=armv7ve -mfpu=neon  -mfloat-abi=hard -mcpu=cortex-a7 --sysroot=$SDKTARGETSYSROOT main.c -o main\n"})}),"\n",(0,i.jsx)("center",{children:(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.img,{alt:"4.6.1",src:c(45911).A+"",width:"1156",height:"117"}),(0,i.jsx)("br",{}),"\n\u56fe4.6 1 \u7f16\u8bd1main.c"]})}),"\n",(0,i.jsxs)(e.p,{children:["\u2003\u2003\u7f16\u8bd1\u597d\u7684main\u6587\u4ef6\uff0c\u76f4\u63a5\u62f7\u8d1d\u5230\u51fa\u5382\u7cfb\u7edf\u91cc\uff0c\u5728\u4e32\u53e3\u7ec8\u7aef\u6267\u884c",(0,i.jsx)(e.code,{children:"./main"}),"\uff0c\u7ed3\u679c\u662f\u4e32\u53e3\u6253\u5370\u4e00\u53e5\u201chello world!\u201d\u3002"]})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}}}]);