"use strict";(self.webpackChunkopenedv_wiki=self.webpackChunkopenedv_wiki||[]).push([[8827],{1318:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var l=i(4848),d=i(8453);const s={title:"\u89e6\u6478\u5c4f\u5b9e\u9a8c",sidebar_position:11},a="\u89e6\u6478\u5c4f\u5b9e\u9a8c",r={id:"Boards/DNK230D/example-base/touch",title:"\u89e6\u6478\u5c4f\u5b9e\u9a8c",description:"\u524d\u8a00",source:"@site/docs/Boards/01_DNK230D/example-base/touch.md",sourceDirName:"Boards/01_DNK230D/example-base",slug:"/Boards/DNK230D/example-base/touch",permalink:"/openedv_wiki/release/docs/Boards/DNK230D/example-base/touch",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"\u89e6\u6478\u5c4f\u5b9e\u9a8c",sidebar_position:11},sidebar:"DNK230DSidebar",previous:{title:"LCD\u5b9e\u9a8c",permalink:"/openedv_wiki/release/docs/Boards/DNK230D/example-base/lcd"},next:{title:"\u6444\u50cf\u5934\u5b9e\u9a8c",permalink:"/openedv_wiki/release/docs/Boards/DNK230D/example-base/camera"}},t={},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:3},{value:"API\u63cf\u8ff0",id:"api\u63cf\u8ff0",level:3},{value:"\u6784\u9020\u51fd\u6570",id:"\u6784\u9020\u51fd\u6570",level:4},{value:"read",id:"read",level:3},{value:"deinit",id:"deinit",level:3},{value:"\u786c\u4ef6\u8bbe\u8ba1",id:"\u786c\u4ef6\u8bbe\u8ba1",level:2},{value:"\u4f8b\u7a0b\u529f\u80fd",id:"\u4f8b\u7a0b\u529f\u80fd",level:3},{value:"\u786c\u4ef6\u8d44\u6e90",id:"\u786c\u4ef6\u8d44\u6e90",level:3},{value:"\u539f\u7406\u56fe",id:"\u539f\u7406\u56fe",level:3},{value:"\u5b9e\u9a8c\u4ee3\u7801",id:"\u5b9e\u9a8c\u4ee3\u7801",level:2},{value:"\u8fd0\u884c\u9a8c\u8bc1",id:"\u8fd0\u884c\u9a8c\u8bc1",level:2}];function o(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"\u89e6\u6478\u5c4f\u5b9e\u9a8c",children:"\u89e6\u6478\u5c4f\u5b9e\u9a8c"})}),"\n",(0,l.jsx)(e.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,l.jsx)(e.p,{children:"\u672c\u7ae0\u5c06\u4ecb\u7ecdCanMV\u4e0b\u89e6\u63a7\u529f\u80fd\u7684\u4f7f\u7528\uff0c\u80fd\u901a\u8fc7LCD\u4e0a\u7684\u89e6\u6478\u5c4f\u83b7\u53d6\u624b\u6307\u89e6\u63a7\u7684\u4f4d\u7f6e\uff0c\u7136\u540e\u628a\u5bf9\u5e94\u7684\u70b9\u7ed8\u5236\u5230LCD\u5c4f\u5e55\u4e0a\u3002\u901a\u8fc7\u672c\u7ae0\u7684\u5b66\u4e60\uff0c\u8bfb\u8005\u5c06\u638c\u63e1\u5982\u4f55\u5728CanMV\u4e0b\u4f7f\u7528\u89e6\u6478\u9a71\u52a8\u6a21\u5757\u5b9e\u73b0\u624b\u5199\u753b\u677f\u7684\u529f\u80fd\u3002"}),"\n",(0,l.jsx)(e.h1,{id:"touch\u6a21\u5757\u4ecb\u7ecd",children:"TOUCH\u6a21\u5757\u4ecb\u7ecd"}),"\n",(0,l.jsx)(e.h3,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,l.jsx)(e.p,{children:"\u89e6\u6478\u6a21\u5757\u57fa\u4e8eRTT\u7684\u89e6\u6478\u6846\u67b6\uff0c\u652f\u6301\u5355\u70b9\u548c\u591a\u70b9\u7535\u5bb9\u89e6\u6478\u5c4f\u53ca\u7535\u963b\u89e6\u6478\u5c4f\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"api\u63cf\u8ff0",children:"API\u63cf\u8ff0"}),"\n",(0,l.jsx)(e.p,{children:"TOUCH\u7c7b\u4f4d\u4e8emachine\u6a21\u5757\u4e0b"}),"\n",(0,l.jsx)(e.h4,{id:"\u6784\u9020\u51fd\u6570",children:"\u6784\u9020\u51fd\u6570"}),"\n",(0,l.jsx)(e.p,{children:"\u3010\u63cf\u8ff0\u3011"}),"\n",(0,l.jsx)(e.p,{children:"\u6784\u5efaTOUCH\u5bf9\u8c61"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"touch = TOUCH(index, rotation)\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u3010\u53c2\u6570\u3011"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"index\uff1aTOUCH\u8bbe\u5907\u53f7\uff0c\u53d6\u503c\u8303\u56f4\u4e3a [0, 9]\uff0c\u5b9e\u9645\u503c\u53d6\u51b3\u4e8e\u5b58\u5728\u7684\u89e6\u6478\u8bbe\u5907\u6570\u91cf\u3002"}),"\n",(0,l.jsx)(e.li,{children:"rotation\uff1a\u9762\u677f\u8f93\u51fa\u5750\u6807\u4e0e\u5c4f\u5e55\u5750\u6807\u7684\u65cb\u8f6c\uff0c\u53d6\u503c\u8303\u56f4\u4e3a [0-3]\uff0c"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,l.jsx)(e.p,{children:"TOUCH\u5bf9\u8c61"}),"\n",(0,l.jsx)(e.h3,{id:"read",children:"read"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"TOUCH.read([count])\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u83b7\u53d6\u89e6\u6478\u6570\u636e\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u3010\u53c2\u6570\u3011"}),"\n",(0,l.jsx)(e.p,{children:"count\uff1a\u6700\u591a\u8bfb\u53d6\u7684\u89e6\u6478\u70b9\u6570\u91cf\uff0c\u53d6\u503c\u8303\u56f4\u4e3a[0:10]\uff0c\u9ed8\u8ba4\u4e3a0\uff0c\u8868\u793a\u8bfb\u53d6\u6240\u6709\u89e6\u6478\u70b9"}),"\n",(0,l.jsx)(e.p,{children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,l.jsxs)(e.p,{children:["\u8fd4\u56de\u89e6\u6478\u70b9\u6570\u636e\uff0c\u7c7b\u578b\u4e3a\u5143\u7ec4",(0,l.jsx)(e.code,{children:"([tp[, tp...]])"}),"\uff0c\u5176\u4e2d\u6bcf\u4e2a",(0,l.jsx)(e.code,{children:"tp"}),"\u662f\u4e00\u4e2a",(0,l.jsx)(e.code,{children:"touch_info"}),"\u7c7b\u5b9e\u4f8b\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"deinit",children:"deinit"}),"\n",(0,l.jsx)(e.p,{children:"\u91ca\u653eTOUCH\u8d44\u6e90\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"TOUCH.deinit()\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u3010\u53c2\u6570\u3011"}),"\n",(0,l.jsx)(e.p,{children:"\u65e0"}),"\n",(0,l.jsx)(e.p,{children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,l.jsx)(e.p,{children:"\u65e0"}),"\n",(0,l.jsx)(e.p,{children:"\u66f4\u591a\u7528\u6cd5\u8bf7\u9605\u8bfb\u5b98\u65b9API\u624b\u518c\uff1a"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://developer.canaan-creative.com/k230_canmv/dev/zh/api/canmv_spec.html",children:"https://developer.canaan-creative.com/k230_canmv/dev/zh/api/canmv_spec.html"})}),"\n",(0,l.jsx)(e.h2,{id:"\u786c\u4ef6\u8bbe\u8ba1",children:"\u786c\u4ef6\u8bbe\u8ba1"}),"\n",(0,l.jsx)(e.h3,{id:"\u4f8b\u7a0b\u529f\u80fd",children:"\u4f8b\u7a0b\u529f\u80fd"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u521d\u59cb\u5316LCD\u6a21\u5757\u548c\u89e6\u63a7\u6a21\u5757\uff0c\u7cfb\u7edf\u80fd\u591f\u5b9e\u65f6\u83b7\u53d6\u624b\u6307\u89e6\u6478\u89e6\u63a7\u677f\u7684\u4f4d\u7f6e\uff0c\u540c\u65f6\u7ed8\u5236\u5bf9\u5e94\u7684\u70b9\u5230\u5c4f\u5e55\u4e0a\uff0c\u5b9e\u73b0\u4e00\u4e2a\u753b\u677f\u7684\u529f\u80fd\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u786c\u4ef6\u8d44\u6e90",children:"\u786c\u4ef6\u8d44\u6e90"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"LCD - MIPI DSI"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u89e6\u6478\u6a21\u5757"}),"\n",(0,l.jsx)(e.p,{children:"SCL - IO36"}),"\n",(0,l.jsx)(e.p,{children:"SDA - IO37"}),"\n",(0,l.jsx)(e.p,{children:"INT - IO32"}),"\n",(0,l.jsx)(e.p,{children:"EST - IO33"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u539f\u7406\u56fe",children:"\u539f\u7406\u56fe"}),"\n",(0,l.jsx)(e.p,{children:"\u6b63\u70b9\u539f\u5b50K230D BOX\u5f00\u53d1\u677f\u4e0a\u7684\u89e6\u6478\u6a21\u5757\u63a5\u53e3\u7684\u8fde\u63a5\u539f\u7406\u56fe\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"01",src:i(4430).A+"",width:"860",height:"237"})}),"\n",(0,l.jsx)(e.h2,{id:"\u5b9e\u9a8c\u4ee3\u7801",children:"\u5b9e\u9a8c\u4ee3\u7801"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'import time, os, urandom, sys\nfrom media.display import *\nfrom media.media import *\nfrom machine import TOUCH\n\n# \u5b9e\u4f8b\u5316TOUCH\u8bbe\u59070\ntp = TOUCH(0)\n\ndef load_draw_dialog():\n    img.clear()\n    img.draw_string_advanced(640 - 52, 0, 30, "RST", color = (255, 0, 0))\n\n\n"""\n * @brief       \u753b\u7c97\u7ebf\n * @param       x1,y1: \u8d77\u70b9\u5750\u6807\n * @param       x2,y2: \u7ec8\u70b9\u5750\u6807\n * @param       size : \u7ebf\u6761\u7c97\u7ec6\u7a0b\u5ea6\n * @param       color: \u7ebf\u7684\u989c\u8272\n * @retval      \u65e0\n"""\ndef lcd_draw_bline(x1,y1,x2,y2,size,color):\n\n    t = 0\n    xerr = 0\n    yerr = 0\n    delta_x = 0\n    delta_y = 0\n    distance = 0\n    incx = 0\n    incy = 0\n    row = 0\n    col = 0\n\n    delta_x = x2 - x1                       # \u8ba1\u7b97\u5750\u6807\u589e\u91cf\n    delta_y = y2 - y1\n    row = x1\n    col = y1\n\n    if delta_x > 0:\n        incx = 1                            # \u7f6e\u5355\u6b65\u65b9\u5411\n    elif delta_x == 0:\n        incx = 0                            #\u5782\u76f4\u7ebf\n    else:\n        incx = -1\n        delta_x = -delta_x\n\n    if delta_y > 0:\n        incy = 1\n    elif delta_y == 0:\n        incy = 0                            # \u6c34\u5e73\u7ebf\n    else:\n        incy = -1\n        delta_y = -delta_y\n\n    if delta_x > delta_y:\n        distance = delta_x;                 # \u9009\u53d6\u57fa\u672c\u589e\u91cf\u5750\u6807\u8f74\n    else:\n        distance = delta_y\n\n    for t in range(0,distance + 1):         # \u753b\u7ebf\u8f93\u51fa\n        img.draw_circle(row, col, size, color)   # \u753b\u70b9\n        xerr += delta_x\n        yerr += delta_y\n\n        if xerr > distance:\n            xerr -= distance\n            row += incx\n\n        if yerr > distance:\n            yerr -= distance\n            col += incy\n\nif __name__ == "__main__":\n    os.exitpoint(os.EXITPOINT_ENABLE)\n    img = image.Image(640, 480, image.RGB888)\n    Display.init(Display.ST7701, width=640, height=480, to_ide=True)\n    MediaManager.init()\n\n    lastpos = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]    #\u6700\u540e\u4e00\u6b21\u7684\u6570\u636e\n    # \u6e05\u7a7a\u5c4f\u5e55\u5e76\u5728\u53f3\u4e0a\u89d2\u663e\u793a"RST"\n    load_draw_dialog()\n    Display.show_image(img, 640, 480)\n    try:\n        while True:\n            # \u83b7\u53d6TOUCH\u6570\u636e\n            p = tp.read(5)\n\n            if p == ():  # \u53d1\u751f\u89e6\u6478\u4e8b\u4ef6\n                lastpos = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]  # \u91cd\u65b0\u6e05\u7a7a\u6240\u6709\u70b9\n\n            for i in range(len(p)): # \u6253\u5370\u6bcf\u4e2a\u70b9\u5750\u6807\u4fe1\u606f\uff0c\u6700\u59275\u70b9\u3002\n                if (p[i].x < 640 and p[i].y < 480):\n\n                    if lastpos[i][0] == 0x0 and lastpos[i][1] == 0x0:\n\n                        lastpos[i][0] = p[i].x\n                        lastpos[i][1] = p[i].y\n\n                    lcd_draw_bline(lastpos[i][0], lastpos[i][1], p[i].x, p[i].y, 2, color=(255, 0, 0));\n                    lastpos[i][0] = p[i].x\n                    lastpos[i][1] = p[i].y\n\n                    if (p[i].x > (640 - 50) and p[i].y < 30):\n\n                        load_draw_dialog()\n                        lastpos[i][0] = 0\n                        lastpos[i][1] = 0\n                else:\n                    lastpos[i][0] = 0x0\n                    lastpos[i][1] = 0x0\n\n            # \u5237\u65b0\u5230\u663e\u793a\u5668\u4e0a\n            Display.show_image(img)\n            time.sleep_ms(5)\n            os.exitpoint()\n\n    except KeyboardInterrupt as e:\n        print("user stop: ", e)\n    except BaseException as e:\n        print(f"Exception {e}")\n\n    # deinit display\n    Display.deinit()\n    os.exitpoint(os.EXITPOINT_ENABLE_SLEEP)\n    time.sleep_ms(100)\n    # release media buffer\n    MediaManager.deinit()\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0c\u9996\u5148\u5bfc\u5165\u76f8\u5173\u7684\u6a21\u5757\uff0c\u7136\u540e\u521d\u59cb\u5316LCD\u663e\u793a\u6a21\u5757\u548c\u89e6\u6478\u6a21\u5757\uff0c\u63a5\u7740\u521b\u5efa\u4e00\u4e2aimage\u5bf9\u8c61\uff0c\u56fe\u50cf\u683c\u5f0f\u4e3aRGB888\uff0c\u901a\u8fc7\u8c03\u7528load_draw_dialog()\u51fd\u6570\u5b9e\u73b0\u6e05\u5c4f\u5e76\u5728\u56fe\u50cf\u7684\u53f3\u4e0a\u89d2\u7ed8\u5236\u201cRST\u201d\u5b57\u6837\uff0c\u7136\u540e\u663e\u793a\u5230LCD\u663e\u793a\u5668\u4e0a\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u6700\u540e\u5728\u4e00\u4e2a\u5faa\u73af\u4e2d\u4e0d\u65ad\u8bfb\u53d6\u89e6\u63a7\u70b9\u7684\u5750\u6807\uff0c\u5e76\u7ed8\u5236\u5230\u56fe\u50cf\u4e0a\uff0c\u8be5\u89e6\u63a7\u6a21\u5757\u6700\u9ad8\u652f\u63015\u70b9\u89e6\u63a7\uff0c\u6700\u540e\u663e\u793a\u5230LCD\u663e\u793a\u5668\u4e0a\uff0c\u6211\u4eec\u901a\u8fc7\u70b9\u51fb\u5c4f\u5e55\u53f3\u4e0a\u65b9\u7684RST\u533a\u57df\uff0c\u7a0b\u5e8f\u80fd\u591f\u5b9e\u73b0\u6e05\u5c4f\u7684\u529f\u80fd\uff0c\u4ece\u800c\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684\u624b\u5199\u753b\u677f\u7684\u529f\u80fd\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u8fd0\u884c\u9a8c\u8bc1",children:"\u8fd0\u884c\u9a8c\u8bc1"}),"\n",(0,l.jsx)(e.p,{children:"\u5c06K230D BOX\u5f00\u53d1\u677f\u8fde\u63a5CanMV IDE\uff0c\u5e76\u70b9\u51fbCanMV IDE\u4e0a\u7684\u201c\u5f00\u59cb(\u8fd0\u884c\u811a\u672c)\u201d\u6309\u94ae\u540e\uff0c\u53ef\u4ee5\u770b\u5230LCD\u4e0a\u770b\u5230\u53f3\u4e0a\u89d2\u663e\u793a\u201cRST\u201d\u7684\u5b57\u6837\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u89e6\u63a7\u5c4f\u5e55\u8fdb\u884c\u56fe\u50cf\u7684\u7ed8\u5236\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"01",src:i(8398).A+"",width:"520",height:"386"})})]})}function p(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},8398:(n,e,i)=>{i.d(e,{A:()=>l});const l=i.p+"assets/images/19-875bec3604ead3e3fe0dd35bbc11b90a.png"},4430:(n,e,i)=>{i.d(e,{A:()=>l});const l=i.p+"assets/images/20-18d0868624ee8d93d3294a95bd85c914.png"},8453:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>r});var l=i(6540);const d={},s=l.createContext(d);function a(n){const e=l.useContext(s);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:a(n.components),l.createElement(s.Provider,{value:e},n.children)}}}]);