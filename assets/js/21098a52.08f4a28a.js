"use strict";(self.webpackChunkopenedv_wiki=self.webpackChunkopenedv_wiki||[]).push([[9673],{7462:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>t,toc:()=>c});var i=s(4848),r=s(8453);const d={title:"\u56fa\u4ef6\u70e7\u5f55",sidebar_position:2},l="\u56fa\u4ef6\u70e7\u5f55",t={id:"Boards/DNK230D/start-guide/firmware-flash",title:"\u56fa\u4ef6\u70e7\u5f55",description:"\u524d\u8a00",source:"@site/docs/Boards/01_DNK230D/start-guide/firmware-flash.md",sourceDirName:"Boards/01_DNK230D/start-guide",slug:"/Boards/DNK230D/start-guide/firmware-flash",permalink:"/openedv_wiki/release/docs/Boards/DNK230D/start-guide/firmware-flash",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u56fa\u4ef6\u70e7\u5f55",sidebar_position:2},sidebar:"DNK230DSidebar",previous:{title:"\u4ea7\u54c1\u9a8c\u6536",permalink:"/openedv_wiki/release/docs/Boards/DNK230D/start-guide/product-acceptance"},next:{title:"\u5e38\u89c1\u95ee\u9898\u6c47\u603b\uff08FAQ\uff09",permalink:"/openedv_wiki/release/docs/Boards/DNK230D/start-guide/FAQ"}},o={},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u56fa\u4ef6\u8bf4\u660e",id:"\u56fa\u4ef6\u8bf4\u660e",level:2},{value:"\u56fa\u4ef6\u70e7\u5f55\u5de5\u5177",id:"\u56fa\u4ef6\u70e7\u5f55\u5de5\u5177",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"\u56fa\u4ef6\u70e7\u5f55",id:"\u56fa\u4ef6\u70e7\u5f55-1",level:2},{value:"1. \u6253\u5f00K230BurningTool.exe",id:"1-\u6253\u5f00k230burningtoolexe",level:3},{value:"2. \u9009\u62e9\u56fa\u4ef6\u6587\u4ef6",id:"2-\u9009\u62e9\u56fa\u4ef6\u6587\u4ef6",level:3},{value:"3. \u9009\u62e9\u76ee\u6807\u4ecb\u8d28",id:"3-\u9009\u62e9\u76ee\u6807\u4ecb\u8d28",level:3},{value:"4. \u5f00\u59cb\u70e7\u5f55",id:"4-\u5f00\u59cb\u70e7\u5f55",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u56fa\u4ef6\u70e7\u5f55",children:"\u56fa\u4ef6\u70e7\u5f55"})}),"\n",(0,i.jsx)(n.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,i.jsx)(n.p,{children:"K230D BOX\u5728\u51fa\u5382\u524d\u9ed8\u8ba4\u90fd\u4f1a\u5728\u5176\u5185\u90e8\u7684SD NAND\u4e0a\u63d0\u524d\u70e7\u5f55\u597dCanMV\u56fa\u4ef6\uff0c\u7528\u6237\u65e0\u9700\u70e7\u5f55\u56fa\u4ef6\u5373\u53ef\u76f4\u63a5\u4e0a\u624b\u4f7f\u7528\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u65e0\u9700\u4e3b\u52a8\u56fa\u4ef6\u70e7\u5f55\uff0c\u53ea\u6709\u5728\u9700\u8981\u66f4\u65b0\u56fa\u4ef6\u6216\u9700\u8981\u4eceTF\u5361\u542f\u52a8\u7b49\u60c5\u51b5\u65f6\uff0c\u624d\u9700\u8981\u8fdb\u884c\u56fa\u4ef6\u70e7\u5f55\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u56fa\u4ef6\u8bf4\u660e",children:"\u56fa\u4ef6\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.p,{children:["\u7528\u6237\u53ef\u4eceK230D BOX\u7684\u8d44\u6599\u76d8\u4e2d\u83b7\u53d6\u7f16\u8bd1\u597d\u7684CanMV\u56fa\u4ef6\uff0c\u5b58\u653eCanMV\u56fa\u4ef6\u7684\u76ee\u5f55\u8def\u5f84\u4e3a",(0,i.jsx)(n.code,{children:"\u8d44\u6599\u76d8/6\uff0c\u8f6f\u4ef6\u8d44\u6599/\u8f6f\u4ef6/CanMV\u56fa\u4ef6/"}),"\u3002"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u76ee\u5f55\u4e0b\u5b58\u653e\u7684\u662f\u56fa\u4ef6\u7684\u538b\u7f29\u5305\uff0c\u9700\u8981\u89e3\u538b\u540e\u4f7f\u7528"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0a\u8ff0\u8def\u5f84\u4e2d\uff0c\u5b58\u653e\u4e86\u4e24\u7c7bCanMV\u56fa\u4ef6\uff0c\u56fa\u4ef6\u7684\u63cf\u8ff0\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u56fa\u4ef6"}),(0,i.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CanMV-K230D_ATK_DNK230D_micropython_{canmv_revision}_nncase_{nncase_version}.img"}),(0,i.jsx)(n.td,{children:"CanMV\u56fa\u4ef6\uff08SD NAND\u542f\u52a8\uff09"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CanMV-K230D_ATK_DNK230D_micropython_{canmv_revision}_nncase_{nncase_version}_tf.img"}),(0,i.jsx)(n.td,{children:"CanMV\u56fa\u4ef6\uff08TF\u5361\u542f\u52a8\uff09"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u56fa\u4ef6\u70e7\u5f55\u5de5\u5177",children:"\u56fa\u4ef6\u70e7\u5f55\u5de5\u5177"}),"\n",(0,i.jsxs)(n.p,{children:["\u672c\u6559\u7a0b\u4f7f\u7528\u7684K230\u56fa\u4ef6\u70e7\u5f55\u5de5\u5177\u4e3a",(0,i.jsx)(n.strong,{children:"K230BurningTool"}),"\uff0c\u8f6f\u4ef6\u662f\u5609\u6960\u79d1\u6280\u5b98\u65b9\u63d0\u4f9b\u7684\u7528\u4e8eK230\u56fa\u4ef6\u70e7\u5f55\u7684\u56fe\u5f62\u5316\u8f6f\u4ef6\uff0c\u6709Windows\u548cLinux\u4e24\u79cd\u7248\u672c\u53ef\u4f9b\u9009\u62e9\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,i.jsx)(n.a,{href:"https://kendryte-download.canaan-creative.com/developer/common/K230BurningTool-v2.0.0/",children:"\u8fd9\u91cc"}),"\u8fdb\u884c\u4e0b\u8f7d\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u672c\u7ae0\u4ee5Windows\u73af\u5883\u4e3a\u4f8b\uff0c\u4ecb\u7ecd\u4f7f\u7528K230BurningTool\u7684\u5b89\u88c5"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728",(0,i.jsx)(n.a,{href:"https://kendryte-download.canaan-creative.com/developer/common/K230BurningTool-v2.0.0/",children:"\u4e0b\u8f7d\u9875\u9762"}),"\u4e0b\u8f7d",(0,i.jsx)(n.strong,{children:"K230BurningTool-Windows-v2.0.0-0-g0c27e7f.zip"}),"\uff0c\u89e3\u538b\u540e\u5373\u53ef\u76f4\u63a5\u4f7f\u7528\uff0c\u65e0\u9700\u5b89\u88c5\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,i.jsxs)(n.p,{children:["\u5609\u6960\u79d1\u6280\u5b98\u65b9\u63d0\u4f9b\u4e86K230BurningTool\u7684\u4f7f\u7528\u8bf4\u660e\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,i.jsx)(n.a,{href:"https://kendryte-download.canaan-creative.com/developer/common/K230BurningTool-v2.0.0/K230BurningTool.pdf",children:"\u8fd9\u91cc"}),"\u4e0b\u8f7d\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u56fa\u4ef6\u70e7\u5f55-1",children:"\u56fa\u4ef6\u70e7\u5f55"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u5bf9K230\u8fdb\u884c\u56fa\u4ef6\u70e7\u5f55\u524d\uff0c\u9700\u5148\u8bbe\u7f6e\u5176\u8fdb\u5165BootROM\u6a21\u5f0f\uff0cK230D BOX\u8fdb\u5165BootROM\u6a21\u5f0f\u7684\u65b9\u5f0f\u5982\u4e0b"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u786e\u4fdd\u8bbe\u5907\u6ca1\u6709\u63d2\u5165TF\u5361 --\x3e \u8bbe\u5907\u4e0a\u7535 --\x3e \u6309\u4f4fKEY2\u4e0d\u653e --\x3e \u5355\u51fb\u590d\u4f4d\u6309\u952e --\x3e \u677e\u5f00KEY2"})}),"\n",(0,i.jsxs)(n.p,{children:["\u82e5K230D BOX\u7684UART0\u8f93\u51fa\u201d",(0,i.jsx)(n.strong,{children:"boot failed with exit code 19"}),"\u201c\uff0c\u5219\u8bf4\u660eK230D BOX\u5df2\u7ecf\u6210\u529f\u8fdb\u5165BootROM\u6a21\u5f0f\uff0c\u5426\u5219\u8bf7\u91cd\u8bd5\u4e0a\u8ff0\u6b65\u9aa4\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u82e5\u9700\u8981\u5c06\u56fa\u4ef6\u70e7\u5f55\u81f3TF\u5361\u4e2d\uff0c\u5219\u5728\u8fdb\u5165BootROM\u6a21\u5f0f\u540e\uff0c\u5728\u5c06TF\u5361\u63d2\u5165K230D BOX\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"K230D BOX\u7684UART0\u8f93\u51fa\u53ef\u901a\u8fc7\u677f\u8f7d\u7684CH342\uff0c\u5e76\u501f\u52a9\u76f8\u5e94\u7684\u4e0a\u4f4d\u673a\u8f6f\u4ef6\u8fdb\u884c\u89c2\u5bdf\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["CH342\u7684\u9a71\u52a8\u5b89\u88c5\u6559\u7a0b\uff0c\u8bf7\u89c1",(0,i.jsx)(n.a,{href:"../set-up-development-environment/ch342-driver-install",children:"CH342\u9a71\u52a8\u5b89\u88c5"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"1-\u6253\u5f00k230burningtoolexe",children:"1. \u6253\u5f00K230BurningTool.exe"}),"\n",(0,i.jsxs)(n.p,{children:["\u53cc\u51fbK230BurningTool\u5b89\u88c5\u76ee\u5f55\u4e0b\u7684",(0,i.jsx)(n.code,{children:"bin/K230BurningTool.exe"}),"\u6587\u4ef6\u6253\u5f00\u70e7\u5f55\u8f6f\u4ef6"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"k230 burning tool",src:s(9918).A+"",width:"958",height:"538"})}),"\n",(0,i.jsx)(n.h3,{id:"2-\u9009\u62e9\u56fa\u4ef6\u6587\u4ef6",children:"2. \u9009\u62e9\u56fa\u4ef6\u6587\u4ef6"}),"\n",(0,i.jsxs)(n.p,{children:["\u8bf7\u53c2\u8003",(0,i.jsx)(n.a,{href:"#%E5%9B%BA%E4%BB%B6%E8%AF%B4%E6%98%8E",children:"\u56fa\u4ef6\u8bf4\u660e"}),'\u5728"\u955c\u50cf\u6587\u4ef6"\u4e00\u680f\u4e2d\u9009\u62e9\u6b63\u786e\u7684\u56fa\u4ef6\u6587\u4ef6\u3002']}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u82e5\u9700\u8981\u70e7\u5f55\u56fa\u4ef6\u81f3K230D BOX\u677f\u8f7d\u7684SD NAND\u4e2d\uff0c\u5219\u8bf7\u9009\u62e9\u4eceSD NAND\u542f\u52a8\u7684\u56fa\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:"\u82e5\u9700\u8981\u70e7\u5f55\u56fa\u4ef6\u81f3\u5916\u7f6e\u7684TF\u5361\u4e2d\uff0c\u5219\u8bf7\u9009\u62e9\u4eceTF\u5361\u542f\u52a8\u7684\u56fa\u4ef6"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u9009\u62e9\u9519\u8bef\u7684\u56fa\u4ef6\u53ef\u80fd\u5bfc\u81f4\u8bbe\u5907\u8fd0\u884c\u5f02\u5e38\uff0c\u751a\u81f3\u53ef\u80fd\u5bfc\u81f4\u4e0d\u53ef\u9006\u7684\u786c\u4ef6\u635f\u574f\u3002"})}),"\n",(0,i.jsx)(n.h3,{id:"3-\u9009\u62e9\u76ee\u6807\u4ecb\u8d28",children:"3. \u9009\u62e9\u76ee\u6807\u4ecb\u8d28"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u201d\u76ee\u6807\u4ecb\u8d28\u201c\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9\u5bf9\u5e94\u7684\u76ee\u6807\u4ecb\u8d28\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u76ee\u6807\u4ecb\u8d28"}),(0,i.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"EMMC"}),(0,i.jsxs)(n.td,{children:["K230\u7684MMC0\u8fde\u63a5\u7684\u8bbe\u5907\uff0c\u5bf9\u5e94K230D BOX\u677f\u8f7d\u7684",(0,i.jsx)(n.strong,{children:"SD NAND"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SD Card"}),(0,i.jsxs)(n.td,{children:["K230\u7684MMC1\u8fde\u63a5\u7684\u8bbe\u5907\uff0c\u5bf9\u5e94K230D BOX\u5916\u7f6e\u7684",(0,i.jsx)(n.strong,{children:"TF\u5361"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u5176\u4ed6"}),(0,i.jsx)(n.td,{children:"K230D BOX\u672a\u4f7f\u7528"})]})]})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"4-\u5f00\u59cb\u70e7\u5f55",children:"4. \u5f00\u59cb\u70e7\u5f55"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u56fa\u4ef6\u70e7\u5f55\u4f1a\u635f\u574f\u76ee\u6807\u4ecb\u8d28\u4e2d\u7684\u6570\u636e\uff0c\u5982\u6709\u9700\u8981\uff0c\u8bf7\u5728\u5f00\u59cb\u70e7\u5f55\u524d\uff0c\u505a\u597d\u76ee\u6807\u4ecb\u8d28\u4e2d\u6570\u636e\u7684\u5907\u4efd\u5de5\u4f5c\u3002"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u914d\u7f6e\u597d\u201d\u955c\u50cf\u6587\u4ef6\u201c\u548c\u201d\u76ee\u6807\u4ecb\u8d28\u201c\u540e\uff0c\u5176\u4f59\u7684\u914d\u7f6e\u9879\u4fdd\u6301\u9ed8\u8ba4\uff0c\u70b9\u51fb\u201d\u5f00\u59cb\u201c\u6309\u94ae\u540e\uff0c\u5373\u53ef\u5f00\u59cb\u5bf9K230D BOX\u8fdb\u884c\u56fa\u4ef6\u70e7\u5f55\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u56fa\u4ef6\u70e7\u5f55\u65f6\uff0c\u8f6f\u4ef6\u5e95\u90e8\u7684\u4fe1\u606f\u6846\u4f1a\u663e\u793a\u56fa\u4ef6\u70e7\u5f55\u8fdb\u5ea6"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"k230 burning tool flashing",src:s(3167).A+"",width:"958",height:"538"})}),"\n",(0,i.jsx)(n.p,{children:"\u56fa\u4ef6\u70e7\u5f55\u6210\u529f\u540e\uff0c\u8f6f\u4ef6\u5e95\u90e8\u7684\u4fe1\u606f\u6846\u4f1a\u663e\u793a\u56fa\u4ef6\u70e7\u5f55\u7ed3\u679c"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"k230 burning tool flash done",src:s(5262).A+"",width:"958",height:"538"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},5262:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/k230-burning-tool-flash-done-6b6af34554aabd06fa5014edbdc0bce1.png"},3167:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/k230-burning-tool-flashing-eb0570f540615360c7ae27f40a4def0b.png"},9918:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/k230-burning-tool-15a1f129bd1757c9b7462b38663e3e64.png"},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>t});var i=s(6540);const r={},d=i.createContext(r);function l(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);