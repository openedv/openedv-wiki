"use strict";(self.webpackChunkopenedv_wiki=self.webpackChunkopenedv_wiki||[]).push([[65125],{1497:(A,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>i,frontMatter:()=>t,metadata:()=>n,toc:()=>c});var s=r(74848),d=r(28453);const t={title:"4.13 TF(SD)\u5361\u6d4b\u8bd5",sidebar_position:13},a="4.13 TF(SD)\u5361\u6d4b\u8bd5",n={id:"Boards/Linux/DLAM62x/DLAM62x \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4/4.13",title:"4.13 TF(SD)\u5361\u6d4b\u8bd5",description:"&emsp;&emsp;\u6307\u4ee4\u63d0\u793a\uff1a",source:"@site/docs/Boards/Linux/DLAM62x/DLAM62x \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4/4.13.md",sourceDirName:"Boards/Linux/DLAM62x/DLAM62x \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4",slug:"/Boards/Linux/DLAM62x/DLAM62x \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4/4.13",permalink:"/docs/Boards/Linux/DLAM62x/DLAM62x \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4/4.13",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"4.13 TF(SD)\u5361\u6d4b\u8bd5",sidebar_position:13},sidebar:"BoardsLinuxDLAM62xSidebar",previous:{title:"4.12 4G\u6a21\u5757EC20\u6d4b\u8bd5",permalink:"/docs/Boards/Linux/DLAM62x/DLAM62x \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4/4.12"},next:{title:"4.14 OV5645\u6d4b\u8bd5",permalink:"/docs/Boards/Linux/DLAM62x/DLAM62x \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4/4.14"}},l={},c=[{value:"4.13.1 \u8bfb\u53d6\u901f\u5ea6\u6d4b\u8bd5",id:"4131-\u8bfb\u53d6\u901f\u5ea6\u6d4b\u8bd5",level:2},{value:"4.13.2 \u5199\u901f\u5ea6\u6d4b\u8bd5",id:"4132-\u5199\u901f\u5ea6\u6d4b\u8bd5",level:2}];function b(A){const e={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,d.R)(),...A.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"413-tfsd\u5361\u6d4b\u8bd5",children:"4.13 TF(SD)\u5361\u6d4b\u8bd5"})}),"\n",(0,s.jsxs)(e.p,{children:["\u2003\u2003\u6307\u4ee4\u63d0\u793a\uff1a",(0,s.jsx)("br",{}),'\n\u2003\u2003time\u547d\u4ee4\u5e38\u7528\u4e8e\u6d4b\u91cf\u4e00\u4e2a\u547d\u4ee4\u7684\u8fd0\u884c\u65f6\u95f4\uff0cdd \u7528\u4e8e\u590d\u5236\uff0c\u4ece if(input file)\u6587\u4ef6\u8bfb\u51fa\uff0c\u5199\u5230 of(output file)\u6307\u5b9a\u7684\u6587\u4ef6\uff0cbs \u662f\u6bcf\u6b21\u5199\u5757\u7684\u5927\u5c0f\uff0ccount \u662f\u8bfb\u5199\u5757\u7684\u6570\u91cf\u3002"if=/dev/zero"\u4e0d\u4ea7\u751f IO\uff0c\u5373\u53ef\u4ee5\u4e0d\u65ad\u8f93\u51fa\u6570\u636e\uff0c\u56e0\u6b64\u53ef\u4ee5\u7528\u6765\u6d4b\u8bd5\u7eaf\u5199\u901f\u5ea6\u3002']}),"\n",(0,s.jsxs)(e.p,{children:["\u2003\u2003\u9700\u8981\u51c6\u5907TF\u5361",(0,s.jsx)("br",{}),"\n\u2003\u2003\u5f00\u53d1\u677f\u542f\u52a8\u540e\u5c06TF\u5361\u63d2\u5230\u5f00\u53d1\u677f\u5e95\u677f\u5361\u69fd\u5904\u3002\u5f00\u53d1\u677f\u4f1a\u5c06TF\u5361\u81ea\u52a8\u6302\u8f7d\u3002TF\u5361\u6709\u591a\u5c11\u4e2a\u5206\u533a\u5c31\u6302\u8f7d\u591a\u5c11\u4e2a"]}),"\n",(0,s.jsx)(e.p,{children:"\u2003\u2003\u4f5c\u8005\u662f\u4eceEMMC\u542f\u52a8\uff0c\u53ef\u4ee5\u770b\u5230/dev/mmcblk1\u5c31\u662fTF\u5361\u7684\u8bbe\u5907\u8282\u70b9\uff0c\u7cfb\u7edf\u5c06/dev/mmcblk1p1\u6302\u8f7d\u5230/run/media/ mmcblk1p1\u76ee\u5f55\u4e0b\u3002\uff08\u6ce8\u610f\u9700\u8981\u4f7f\u7528FAT32\u683c\u5f0f\u7684TF\u5361\uff0c\u4e0d\u80fd\u4f7f\u7528NTFS\u683c\u5f0f\uff09\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c#",children:"ls /dev/mmcblk1\n"})}),"\n",(0,s.jsx)("center",{children:(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.img,{alt:"introduce",src:r(58233).A+"",width:"1049",height:"65"}),(0,s.jsx)("br",{}),"\n\u56fe4.13.1 \u67e5\u770bTF\u5361\u7684\u8282\u70b9"]})}),"\n",(0,s.jsx)(e.p,{children:"\u2003\u2003\u4f7f\u7528df\u547d\u4ee4\u67e5\u770bTF\u5361\u6302\u8f7d\u7684\u76ee\u5f55\u3002\u7b14\u8005\u4f7f\u7528\u662f\u4e00\u5f20\u7a7a\u767d\u7684TF\u5361\uff0c\u90a3\u4e48\u5c31\u53ea\u6709\u4e00\u4e2a\u5206\u533a\uff0c\u540d\u79f0\u4e3a\u201c/dev/mmcblk1\u201d\uff0c\u6302\u8f7d\u7684\u76ee\u5f55\u4e3a\u201c/run/media/mmcblk1\u201d\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c#",children:"df -h\n"})}),"\n",(0,s.jsx)("center",{children:(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.img,{alt:"introduce",src:r(93698).A+"",width:"847",height:"265"}),(0,s.jsx)("br",{}),"\n\u56fe4.13.2 \u67e5\u770bTF\u5361\u7684\u6302\u8f7d\u76ee\u5f55"]})}),"\n",(0,s.jsx)(e.h2,{id:"4131-\u8bfb\u53d6\u901f\u5ea6\u6d4b\u8bd5",children:"4.13.1 \u8bfb\u53d6\u901f\u5ea6\u6d4b\u8bd5"}),"\n",(0,s.jsx)(e.p,{children:"\u2003\u2003\u5e38\u7528\u4e8e\u6d4b\u8bd5\u786c\u76d8\u8bfb\u53d6\u901f\u5ea6\u6307\u4ee4\u6709hdparm\u4e0edd\uff0c\u672c\u6b21\u53ea\u6f14\u793ahdparm\u8bfb\u53d6TF\u5361\u7684\u901f\u5ea6\u3002\uff08\u8bfb\u53d6\u901f\u5ea6\u4e0e\u4f60\u6240\u7528\u7684TF\u5361\u7c7b\u578b\u6709\u5173\uff09"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c#",children:"hdparm -t /dev/mmcblk1\n"})}),"\n",(0,s.jsx)("center",{children:(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.img,{alt:"introduce",src:r(40930).A+"",width:"944",height:"99"}),(0,s.jsx)("br",{}),"\n\u56fe4.13.1.1 \u8bfb\u53d6\u901f\u5ea6\u6d4b\u8bd5"]})}),"\n",(0,s.jsx)(e.h2,{id:"4132-\u5199\u901f\u5ea6\u6d4b\u8bd5",children:"4.13.2 \u5199\u901f\u5ea6\u6d4b\u8bd5"}),"\n",(0,s.jsx)(e.p,{children:"\u2003\u2003\u4f7f\u7528dd\u6307\u4ee4\u519950MB\u6570\u636e\u5230\u201c/run/media/mmcblk1p1\u201d\u76ee\u5f55\uff0c\u201d\u4e5f\u5c31\u662fTF\u5361\u7684\u6302\u8f7d\u76ee\u5f55\u3002\u5982\u679c\u60a8\u7684TF\u5361\u662f\u7cfb\u7edf\u542f\u52a8\u5361\uff0c\u53ea\u6709\u4e8c\u4e2a\u5206\u533a\uff0c\u90a3\u4e48\uff0c\u6302\u8f7d\u7684\u76ee\u5f55\u5c31\u6709\u4e24\u4e2a\u8bf7\u81ea\u884c\u6311\u9009\u6d4b\u8bd5\uff0c\u8bf7\u4fee\u6539\u4e0b\u9762\u7684\u6307\u4ee4\u3002\u6ce8\u610f\uff0c\u5199\u7684\u6570\u636e\u8d8a\u5927\u6570\u636e\uff0c\u5199\u5165\u7684\u901f\u5ea6\u8d8a\u63a5\u8fd1\u5b9e\u9645\u503c\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c#",children:"time dd if=/dev/zero of=/run/media/mmcblk1p1/test bs=1024k count=50 conv=fdatasync\n"})}),"\n",(0,s.jsx)("center",{children:(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.img,{alt:"introduce",src:r(51565).A+"",width:"1218",height:"158"}),(0,s.jsx)("br",{}),"\n\u56fe4.13.2.1 \u5199\u901f\u5ea6\u6d4b\u8bd5"]})}),"\n",(0,s.jsx)(e.p,{children:"\u2003\u2003\u6d4b\u8bd5\u5b8c\u6210\u5220\u9664\u201c/run/media/mmcblk1p5\u201d\u76ee\u5f55\u4e0b\u7684test\u6587\u4ef6\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c#",children:"rm /run/media/mmcblk1p1/test\n"})}),"\n",(0,s.jsx)("center",{children:(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.img,{alt:"introduce",src:r(36150).A+"",width:"928",height:"30"}),(0,s.jsx)("br",{}),"\n\u56fe4.13.2.2 \u5220\u9664\u5199\u5165\u6587\u4ef6"]})})]})}function i(A={}){const{wrapper:e}={...(0,d.R)(),...A.components};return e?(0,s.jsx)(e,{...A,children:(0,s.jsx)(b,{...A})}):b(A)}},28453:(A,e,r)=>{r.d(e,{R:()=>a,x:()=>n});var s=r(96540);const d={},t=s.createContext(d);function a(A){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function n(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(d):A.components||d:a(A.components),s.createElement(t.Provider,{value:e},A.children)}},36150:(A,e,r)=>{r.d(e,{A:()=>s});const s="data:image/png;base64,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"},40930:(A,e,r)=>{r.d(e,{A:()=>s});const s="data:image/png;base64,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"},51565:(A,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/4.13.2.1-774ae063110bab5b010ce4b5a060cf48.png"},58233:(A,e,r)=>{r.d(e,{A:()=>s});const s="data:image/png;base64,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"},93698:(A,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/4.13.2-cd173d2e78dd697c6657ed9eae99db2b.png"}}]);