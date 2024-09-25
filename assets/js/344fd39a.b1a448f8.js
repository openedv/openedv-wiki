"use strict";(self.webpackChunkopenedv_wiki=self.webpackChunkopenedv_wiki||[]).push([[1],{8917:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var r=i(4848),s=i(8453);const a={title:"UART\u5b9e\u9a8c",sidebar_position:8},l="UART\u5b9e\u9a8c",d={id:"Boards/DNK230D/example-base/uart",title:"UART\u5b9e\u9a8c",description:"\u524d\u8a00",source:"@site/docs/Boards/01_DNK230D/example-base/uart.md",sourceDirName:"Boards/01_DNK230D/example-base",slug:"/Boards/DNK230D/example-base/uart",permalink:"/openedv_wiki/release/docs/Boards/DNK230D/example-base/uart",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"UART\u5b9e\u9a8c",sidebar_position:8},sidebar:"DNK230DSidebar",previous:{title:"RTC\u5b9e\u9a8c",permalink:"/openedv_wiki/release/docs/Boards/DNK230D/example-base/rtc"},next:{title:"Thread\u5b9e\u9a8c",permalink:"/openedv_wiki/release/docs/Boards/DNK230D/example-base/thread"}},t={},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"UART\u6a21\u5757\u4ecb\u7ecd",id:"uart\u6a21\u5757\u4ecb\u7ecd",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:3},{value:"API\u63cf\u8ff0",id:"api\u63cf\u8ff0",level:3},{value:"\u6784\u9020\u51fd\u6570",id:"\u6784\u9020\u51fd\u6570",level:4},{value:"read",id:"read",level:3},{value:"write",id:"write",level:3},{value:"\u786c\u4ef6\u8bbe\u8ba1",id:"\u786c\u4ef6\u8bbe\u8ba1",level:2},{value:"\u4f8b\u7a0b\u529f\u80fd",id:"\u4f8b\u7a0b\u529f\u80fd",level:3},{value:"\u786c\u4ef6\u8d44\u6e90",id:"\u786c\u4ef6\u8d44\u6e90",level:3},{value:"\u539f\u7406\u56fe",id:"\u539f\u7406\u56fe",level:3},{value:"\u5b9e\u9a8c\u4ee3\u7801",id:"\u5b9e\u9a8c\u4ee3\u7801",level:2},{value:"\u8fd0\u884c\u9a8c\u8bc1",id:"\u8fd0\u884c\u9a8c\u8bc1",level:2}];function A(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"uart\u5b9e\u9a8c",children:"UART\u5b9e\u9a8c"})}),"\n",(0,r.jsx)(n.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u7ae0\u5c06\u4ecb\u7ecdmachine\u6a21\u5757\u4e2d\u7684UART\u7c7b\u3002\u901a\u8fc7\u672c\u7ae0\u7684\u5b66\u4e60\uff0c\u8bfb\u8005\u5c06\u5b66\u4e60\u5230machine\u6a21\u5757\u4e2dUART\u7c7b\u7684\u4f7f\u7528\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"uart\u6a21\u5757\u4ecb\u7ecd",children:"UART\u6a21\u5757\u4ecb\u7ecd"}),"\n",(0,r.jsx)(n.h3,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,r.jsx)(n.p,{children:"K230D\u5185\u90e8\u5305\u542b\u4e94\u4e2aUART\u786c\u4ef6\u6a21\u5757\uff0c\u5176\u4e2dUART0\u88ab\u5c0f\u6838sh\u5360\u7528\uff0cUART3\u88ab\u5927\u6838sh\u5360\u7528\uff0c\u5269\u4f59UART1\uff0cUART2\uff0cUART4\u53ef\u4f9b\u7528\u6237\u4f7f\u7528\u3002 UART IO\u914d\u7f6e\u53c2\u8003IOMUX\u6a21\u5757\u3002\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"api\u63cf\u8ff0",children:"API\u63cf\u8ff0"}),"\n",(0,r.jsx)(n.p,{children:"UART\u7c7b\u4f4d\u4e8emachine\u6a21\u5757\u4e0b"}),"\n",(0,r.jsx)(n.h4,{id:"\u6784\u9020\u51fd\u6570",children:"\u6784\u9020\u51fd\u6570"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"uart = UART(id, baudrate=115200, bits=UART.EIGHTBITS, parity=UART.PARITY_NONE, stop=UART.STOPBITS_ONE)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u3010\u53c2\u6570\u3011"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"id: UART\u53f7\uff0c\u6709\u6548\u503c UART1\u3001UART2\u3001UART4"}),"\n",(0,r.jsx)(n.li,{children:"baudrate: UART\u6ce2\u7279\u7387\uff0c\u53ef\u9009\u53c2\u6570\uff0c\u9ed8\u8ba4115200"}),"\n",(0,r.jsx)(n.li,{children:"bits: \u6bcf\u4e2a\u5b57\u7b26\u7684\u4f4d\u6570\uff0c\u6709\u6548\u503c FIVEBITS\u3001SIXBITS\u3001SEVENBITS\u3001EIGHTBITS\uff0c\u53ef\u9009\u53c2\u6570\uff0c\u9ed8\u8ba4EIGHTBITS"}),"\n",(0,r.jsx)(n.li,{children:"parity: \u5947\u5076\u6821\u9a8c\uff0c\u6709\u6548\u503c PARITY_NONE\u3001PARITY_ODD\u3001PARITY_EVEN\uff0c\u53ef\u9009\u53c2\u6570\uff0c\u9ed8\u8ba4PARITY_NONE"}),"\n",(0,r.jsx)(n.li,{children:"stop: \u505c\u6b62\u4f4d\u7684\u6570\u76ee\uff0c\u6709\u6548\u503c STOPBITS_ONE\u3001STOPBITS_TWO\uff0c\u53ef\u9009\u53c2\u6570\uff0c\u9ed8\u8ba4STOPBITS_ONE"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"read",children:"read"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"UART.read([nbytes])\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8bfb\u53d6\u5b57\u7b26\u3002\u82e5\u6307\u5b9anbytes\uff0c\u5219\u6700\u591a\u8bfb\u53d6\u8be5\u6570\u91cf\u7684\u5b57\u8282\u3002\u5426\u5219\u53ef\u8bfb\u53d6\u5c3d\u53ef\u80fd\u591a\u7684\u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u3010\u53c2\u6570\u3011"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"nbytes: \u6700\u591a\u8bfb\u53d6nbytes\u5b57\u8282\uff0c\u53ef\u9009\u53c2\u6570"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u4e2a\u5305\u62ec\u8bfb\u5165\u5b57\u8282\u7684\u5b57\u8282\u5bf9\u8c61"}),"\n",(0,r.jsx)(n.h3,{id:"write",children:"write"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"UART.write(buf)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5c06\u5b57\u8282\u7f13\u51b2\u533a\u5199\u5165UART\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u3010\u53c2\u6570\u3011"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"buf: \u4e00\u4e2abuffer\u5bf9\u8c61"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,r.jsx)(n.p,{children:"\u5199\u5165\u7684\u5b57\u8282\u6570"}),"\n",(0,r.jsx)(n.p,{children:"\u66f4\u591a\u7528\u6cd5\u8bf7\u9605\u8bfb\u5b98\u65b9API\u624b\u518c\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://developer.canaan-creative.com/k230_canmv/dev/zh/api/canmv_spec.html",children:"https://developer.canaan-creative.com/k230_canmv/dev/zh/api/canmv_spec.html"})}),"\n",(0,r.jsx)(n.h2,{id:"\u786c\u4ef6\u8bbe\u8ba1",children:"\u786c\u4ef6\u8bbe\u8ba1"}),"\n",(0,r.jsx)(n.h3,{id:"\u4f8b\u7a0b\u529f\u80fd",children:"\u4f8b\u7a0b\u529f\u80fd"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u521b\u5efa\u4e24\u4e2aUART\u5bf9\u8c61\uff0c\u4e24\u4e2aUART\u5bf9\u8c61\u9664\u4e86UART\u7f16\u53f7\u4f7f\u7528\u76f8\u540c\u7684\u914d\u7f6e\u53c2\u6570\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5f53KEY0\u6309\u952e\u88ab\u6309\u4e0b\u540e\uff0c\u4f7f\u7528UART1\u5f80UART2\u53d1\u9001\u6570\u636e\uff0c\u5e76\u5c06UART2\u63a5\u6536\u5230\u7684\u6570\u636e\u901a\u8fc7print()\u6253\u5370\u8f93\u51fa\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5f53KEY1\u6309\u952e\u88ab\u6309\u4e0b\u540e\uff0c\u4f7f\u7528UATY2\u5f80UART1\u53d1\u9001\u6570\u636e\uff0c\u5e76\u5c06UART1\u63a5\u6536\u5230\u7684\u6570\u636e\u901a\u8fc7printf()\u6253\u5370\u8f93\u51fa\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u786c\u4ef6\u8d44\u6e90",children:"\u786c\u4ef6\u8d44\u6e90"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u72ec\u7acb\u6309\u952e"}),"\n",(0,r.jsx)(n.p,{children:"\u200b\tKEY0\u6309\u952e - IO2"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6269\u5c55\u4e32\u53e3\u63a5\u53e31"}),"\n",(0,r.jsx)(n.p,{children:"\u200b\tUART1_TXD - IO40"}),"\n",(0,r.jsx)(n.p,{children:"\u200b\tUART1_RXD - IO41"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6269\u5c55\u4e32\u53e3\u63a5\u53e32"}),"\n",(0,r.jsx)(n.p,{children:"\u200b\tUART2_TXD - IO44"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u200b    \t   UART2_RXD - IO45"}),"\n",(0,r.jsx)(n.h3,{id:"\u539f\u7406\u56fe",children:"\u539f\u7406\u56fe"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u7ae0\u5b9e\u9a8c\u5185\u5bb9\uff0c\u9700\u8981\u4f7f\u7528\u5230DNK230D\u677f\u8f7d\u7684\u6269\u5c55\u4e32\u53e3\u63a5\u53e31\u548c\u6269\u5c55\u4e32\u53e3\u63a5\u53e32\uff0c\u6b63\u70b9\u539f\u5b50DNK230D\u5f00\u53d1\u677f\u4e0a\u7684\u6269\u5c55\u4e32\u53e3\u63a5\u53e3\u8fde\u63a5\u539f\u7406\u56fe\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"01",src:i(1051).A+"",width:"648",height:"435"})}),"\n",(0,r.jsx)(n.p,{children:"\u7531\u4e8e\u9700\u8981\u8ba9\u8fd9\u4e24\u4e2a\u4e32\u53e3\u6269\u5c55\u63a5\u53e3\u76f8\u4e92\u901a\u4fe1\uff0c\u56e0\u6b64\u9700\u8981\u4f7f\u7528\u675c\u90a6\u7ebf\u6216\u5176\u4ed6\u7ebf\u6750\u4ece\u7269\u7406\u4e0a\u8fde\u63a5\u8fd9\u8fd9\u4e24\u4e2a\u63a5\u53e3\uff0c\u8fde\u63a5\u65f6\u9700\u8981\u6ce8\u610f\u4e32\u53e3\u7ebf\u8def\u7684\u8fde\u63a5\u9700\u8981\u5c06TXD\u4fe1\u53f7\u548cRXD\u4fe1\u53f7\u4ea4\u53c9\u8fde\u63a5\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5b9e\u9a8c\u4ee3\u7801",children:"\u5b9e\u9a8c\u4ee3\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from machine import Pin\nfrom machine import UART\nfrom machine import FPIOA\nimport time\n\n# \u5b9e\u4f8b\u5316FPIOA\nfpioa = FPIOA()\n\n# \u4e3aIO\u5206\u914d\u76f8\u5e94\u7684\u786c\u4ef6\u529f\u80fd\nfpioa.set_function(2, FPIOA.GPIO2)\nfpioa.set_function(5, FPIOA.GPIO5)\nfpioa.set_function(40,FPIOA.UART1_TXD)\nfpioa.set_function(41,FPIOA.UART1_RXD)\nfpioa.set_function(44,FPIOA.UART2_TXD)\nfpioa.set_function(45,FPIOA.UART2_RXD)\n\n# \u6784\u9020UART\u5bf9\u8c61\nkey0 = Pin(2, Pin.IN, pull=Pin.PULL_UP, drive=7)\nkey1 = Pin(5, Pin.IN, pull=Pin.PULL_UP, drive=7)\nuart1 = UART(UART.UART1, baudrate=115200, bits=UART.EIGHTBITS, parity=UART.PARITY_NONE, stop=UART.STOPBITS_ONE)\nuart2 = UART(UART.UART2, baudrate=115200, bits=UART.EIGHTBITS, parity=UART.PARITY_NONE, stop=UART.STOPBITS_ONE)\n\nwhile True:\n    if key0.value() == 0:\n        time.sleep_ms(20)\n        if key0.value() == 0:\n            # UART\u53d1\u9001\u6570\u636e\n            uart1.write("From UART1!")\n            while key0.value() == 0:\n                pass\n    elif key1.value() == 0:\n        time.sleep_ms(20)\n        if key1.value() == 0:\n            # UART\u53d1\u9001\u6570\u636e\n            uart2.write("From UART2!")\n            while key1.value() == 0:\n                pass\n\n    # UART\u63a5\u6536\u6570\u636e\n    data = uart1.read(128)\n    if data != b\'\':\n        print("UART1 get data:", data.decode())\n\n    # UART\u63a5\u6536\u6570\u636e\n    data = uart2.read(128)\n    if data != b\'\':\n        print("UART2 get data:", data.decode())\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\u9996\u5148\u5c31\u662f\u6784\u9020\u4e86\u4e24\u4e2aUART\u5bf9\u8c61\uff0c\u5e76\u4e14\u914d\u7f6e\u4e86\u76f8\u540c\u7684\u901a\u4fe1\u6ce2\u7279\u7387\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u63a5\u7740\u4fbf\u5728\u4e00\u4e2a\u5faa\u73af\u4e2d\u8bfb\u53d6\u6309\u952e\u72b6\u6001\u548c\u4e24\u4e2aUART\u7684\u6570\u636e\u63a5\u6536\u72b6\u6001\uff0c\u5982\u679cKEY0\u6309\u952e\u88ab\u6309\u4e0b\uff0c\u5219\u901a\u8fc7UART1\u5bf9\u8c61\u53d1\u9001\u201cFrom UART1\uff01\u201d\u7684\u6570\u636e\uff0c\u5982\u679cKEY1\u6309\u952e\u88ab\u6309\u4e0b\uff0c\u5219\u901a\u8fc7UART2\u5bf9\u8c61\u53d1\u9001\u201cFrom UART2\uff01\u201d\u7684\u6570\u636e\uff0c\u5982\u679cUART1\u5bf9\u8c61\u6216UART2\u5bf9\u8c61\u63a5\u6536\u5230\u6570\u636e\uff0c\u5e76\u5c06\u63a5\u6536\u5230\u7684\u6570\u636e\u52a0\u4e0aUART\u5bf9\u8c61\u7f16\u53f7\u540e\u901a\u8fc7print()\u6253\u5370\u8f93\u51fa\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u7531\u4e8e\u672c\u7ae0\u5b9e\u9a8c\u8981\u6c42\u677f\u8f7d\u7684\u4e24\u4e2a\u6269\u5c55\u4e32\u53e3\u63a5\u53e3\u901a\u8fc7\u7ebf\u6750\u8fdb\u884c\u8fde\u63a5\uff0c\u56e0\u6b64\u5f53KEY0\u6309\u952e\u88ab\u6309\u4e0b\u540e\uff0cUART1\u5bf9\u8c61\u53d1\u51fa\u7684\u6570\u636e\u5c06\u88abUART2\u5bf9\u8c61\u63a5\u6536\uff0c\u5e76\u4f1a\u88ab\u901a\u8fc7print()\u6253\u5370\u8f93\u51fa\uff0c\u5f53KEY1\u6309\u952e\u88ab\u6309\u4e0b\u540e\uff0cUART2\u5bf9\u8c61\u53d1\u51fa\u7684\u6570\u636e\u5c06\u88abUART1\u5bf9\u8c61\u63a5\u6536\uff0c\u5e76\u4f1a\u901a\u8fc7print()\u6253\u5370\u8f93\u51fa\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8fd0\u884c\u9a8c\u8bc1",children:"\u8fd0\u884c\u9a8c\u8bc1"}),"\n",(0,r.jsx)(n.p,{children:"\u5c06DNK230D\u5f00\u53d1\u677f\u8fde\u63a5CanMV IDE\uff0c\u5e76\u70b9\u51fbCanMV IDE\u4e0a\u7684\u201c\u5f00\u59cb(\u8fd0\u884c\u811a\u672c)\u201d\u6309\u94ae\u540e\uff0c\u540c\u65f6\u5c06\u677f\u8f7d\u7684\u4e24\u4e2a\u6269\u5c55\u4e32\u53e3\u63a5\u53e3\u901a\u8fc7\u7ebf\u6750\u6309\u7167\u8981\u6c42\u8fdb\u884c\u76f8\u4e92\u8fde\u63a5\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6b64\u65f6\uff0c\u82e5\u5206\u522b\u6309\u4e0bKEY0\u6309\u952e\u548cKEY1\u6309\u952e\uff0cCanMV IDE\u8f6f\u4ef6\u7684\u201c\u4e32\u884c\u4e2d\u65ad\u201d\u5c06\u4f9d\u6b21\u8f93\u51faUART2\u5bf9\u8c61\u548cUART1\u5bf9\u8c61\u63a5\u6536\u5230\u7684\u6570\u636e\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"01",src:i(7452).A+"",width:"225",height:"64"})}),"\n",(0,r.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0c\u9996\u5148UART2\u5bf9\u8c61\u63a5\u6536\u5230\u4e86\u6765\u81eaUART1\u5bf9\u8c61\u53d1\u9001\u7684\u6570\u636e\uff0c\u7136\u540eUART1\u5bf9\u8c61\u63a5\u6536\u5230\u4e86\u6765\u81eaUART2\u53d1\u9001\u7684\u6570\u636e\uff0c\u8fd9\u4e0e\u7406\u8bba\u63a8\u65ad\u7684\u7ed3\u679c\u4e00\u81f4\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(A,{...e})}):A(e)}},1051:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/07-9e11cefb6221a0080ee8b57dba8c549c.png"},7452:(e,n,i)=>{i.d(n,{A:()=>r});const r="data:image/png;base64,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"},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var r=i(6540);const s={},a=r.createContext(s);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);