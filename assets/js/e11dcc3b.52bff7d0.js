"use strict";(self.webpackChunkopenedv_wiki=self.webpackChunkopenedv_wiki||[]).push([[68479],{2622:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>_,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>r});var i=s(74848),d=s(28453);const t={title:"\u624b\u638c\u5173\u952e\u70b9\u68c0\u6d4b\u5b9e\u9a8c",sidebar_position:10},_="\u624b\u638c\u5173\u952e\u70b9\u68c0\u6d4b\u5b9e\u9a8c",l={id:"Boards/Kendryte/DNK230D/example-ai/hand_keypoint_detection",title:"\u624b\u638c\u5173\u952e\u70b9\u68c0\u6d4b\u5b9e\u9a8c",description:"\u524d\u8a00",source:"@site/docs/Boards/Kendryte/DNK230D/example-ai/hand_keypoint_detection.md",sourceDirName:"Boards/Kendryte/DNK230D/example-ai",slug:"/Boards/Kendryte/DNK230D/example-ai/hand_keypoint_detection",permalink:"/docs/Boards/Kendryte/DNK230D/example-ai/hand_keypoint_detection",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u624b\u638c\u5173\u952e\u70b9\u68c0\u6d4b\u5b9e\u9a8c",sidebar_position:10},sidebar:"BoardsKendryteDNK230DSidebar",previous:{title:"\u624b\u52bf\u8bc6\u522b\u5b9e\u9a8c",permalink:"/docs/Boards/Kendryte/DNK230D/example-ai/hand_recognition"},next:{title:"\u624b\u638c\u5173\u952e\u70b9\u5206\u7c7b\u5b9e\u9a8c",permalink:"/docs/Boards/Kendryte/DNK230D/example-ai/hand_keypoint_class"}},o={},r=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"AI\u5f00\u53d1\u6846\u67b6\u4ecb\u7ecd",id:"ai\u5f00\u53d1\u6846\u67b6\u4ecb\u7ecd",level:2},{value:"\u786c\u4ef6\u8bbe\u8ba1",id:"\u786c\u4ef6\u8bbe\u8ba1",level:2},{value:"\u4f8b\u7a0b\u529f\u80fd",id:"\u4f8b\u7a0b\u529f\u80fd",level:3},{value:"\u786c\u4ef6\u8d44\u6e90",id:"\u786c\u4ef6\u8d44\u6e90",level:3},{value:"\u539f\u7406\u56fe",id:"\u539f\u7406\u56fe",level:3},{value:"\u5b9e\u9a8c\u4ee3\u7801",id:"\u5b9e\u9a8c\u4ee3\u7801",level:2},{value:"\u8fd0\u884c\u9a8c\u8bc1",id:"\u8fd0\u884c\u9a8c\u8bc1",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u624b\u638c\u5173\u952e\u70b9\u68c0\u6d4b\u5b9e\u9a8c",children:"\u624b\u638c\u5173\u952e\u70b9\u68c0\u6d4b\u5b9e\u9a8c"})}),"\n",(0,i.jsx)(n.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5df2\u7ecf\u5b66\u4e60\u4e86\u5982\u4f55\u5728CanMV\u4e0b\u4f7f\u7528CanMV AI\u89c6\u89c9\u5f00\u53d1\u6846\u67b6\u548cMicroPython\u7f16\u7a0b\u65b9\u6cd5\u5b9e\u73b0\u624b\u52bf\u8bc6\u522b\u7684\u529f\u80fd\uff0c\u672c\u7ae0\u5c06\u901a\u8fc7\u624b\u638c\u5173\u952e\u70b9\u68c0\u6d4b\u5b9e\u9a8c\uff0c\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528CanMV AI\u89c6\u89c9\u5f00\u53d1\u6846\u67b6\u548cMicroPython\u7f16\u7a0b\u5b8c\u6210\u624b\u638c\u68c0\u6d4b\uff0c\u5e76\u8fdb\u4e00\u6b65\u4f7f\u7528\u624b\u638c\u5173\u952e\u70b9\u68c0\u6d4b\u6a21\u578b\u5c06\u68c0\u6d4b\u5230\u7684\u6bcf\u4e00\u4e2a\u624b\u638c\u8fdb\u884c\u5173\u952e\u70b9\u56de\u5f52\u5f97\u523021\u4e2a\u624b\u638c\u9aa8\u9abc\u5173\u952e\u70b9\u4f4d\u7f6e\uff0c\u7136\u540e\u7528\u4e0d\u540c\u989c\u8272\u7684\u7ebf\u6761\u8fde\u63a521\u4e2a\u5173\u952e\u70b9\u5e76\u7ed8\u5236\u51fa\u6765\u3002\u5728\u672c\u5b9e\u9a8c\u4e2d\uff0c\u6211\u4eec\u9996\u5148\u91c7\u96c6\u6444\u50cf\u5934\u6355\u83b7\u7684\u56fe\u50cf\uff0c\u7136\u540e\u7ecf\u8fc7\u56fe\u50cf\u9884\u5904\u7406\u3001\u6a21\u578b\u63a8\u7406\u548c\u8f93\u51fa\u5904\u7406\u7ed3\u679c\u7b49\u4e00\u7cfb\u5217\u6b65\u9aa4\uff0c\u5b8c\u6210\u624b\u638c\u68c0\u6d4b\u7684\u529f\u80fd\uff0c\u7136\u540e\u5728\u68c0\u6d4b\u5230\u624b\u638c\u7684\u533a\u57df\uff0c\u8fdb\u4e00\u6b65\u4f7f\u7528\u624b\u638c\u5173\u952e\u70b9\u68c0\u6d4b\u6a21\u578b\u8fdb\u884c\u63a8\u7406\uff0c\u4ece\u800c\u5f97\u5230\u6bcf\u4e2a\u624b\u638c\u768421\u4e2a\u624b\u638c\u9aa8\u9abc\u5173\u952e\u70b9\u4f4d\u7f6e\uff0c\u6700\u540e\uff0c\u5c0621\u4e2a\u624b\u638c\u5173\u952e\u70b9\u7528\u4e0d\u540c\u989c\u8272\u7ebf\u6bb5\u7ed8\u5236\u5e76\u663e\u793a\u5230\u663e\u793a\u5668\u4e0a\u3002\u901a\u8fc7\u672c\u7ae0\u7684\u5b66\u4e60\uff0c\u8bfb\u8005\u5c06\u638c\u63e1\u5982\u4f55\u5728CanMV\u4e0b\u4f7f\u7528CanMV AI\u89c6\u89c9\u5f00\u53d1\u6846\u67b6\u548cMicroPython\u7f16\u7a0b\u65b9\u6cd5\u5b9e\u73b0\u624b\u638c\u5173\u952e\u70b9\u68c0\u6d4b\u529f\u80fd\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"ai\u5f00\u53d1\u6846\u67b6\u4ecb\u7ecd",children:"AI\u5f00\u53d1\u6846\u67b6\u4ecb\u7ecd"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e3a\u4e86\u7b80\u5316AI\u5f00\u53d1\u6d41\u7a0b\u5e76\u964d\u4f4eAI\u5f00\u53d1\u96be\u5ea6\uff0cCanMV\u5b98\u65b9\u9488\u5bf9K230D\u4e13\u95e8\u642d\u5efa\u4e86AI\u5f00\u53d1\u6846\u67b6\uff0c\u6709\u5173AI\u5f00\u53d1\u6846\u67b6\u7684\u4ecb\u7ecd\uff0c\u8bf7\u89c1",(0,i.jsx)(n.a,{href:"/docs/Boards/Kendryte/DNK230D/example-ai/development_framework",children:"CanMV AI\u5f00\u53d1\u6846\u67b6"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u786c\u4ef6\u8bbe\u8ba1",children:"\u786c\u4ef6\u8bbe\u8ba1"}),"\n",(0,i.jsx)(n.h3,{id:"\u4f8b\u7a0b\u529f\u80fd",children:"\u4f8b\u7a0b\u529f\u80fd"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u83b7\u53d6\u6444\u50cf\u5934\u8f93\u51fa\u7684\u56fe\u50cf\uff0c\u7136\u540e\u5c06\u56fe\u50cf\u8f93\u5165\u5230CanMV K230D\u7684AI\u6a21\u578b\u8fdb\u884c\u63a8\u7406\u3002\u672c\u5b9e\u9a8c\u4f7f\u7528\u4e86\u4e24\u4e2aAI\u6a21\u578b\uff1a\u4e00\u4e2a\u662f\u524d\u9762\u7ae0\u8282\u4f7f\u7528\u5230\u7684\u624b\u638c\u68c0\u6d4b\u6a21\u578b\uff0c\u53e6\u4e00\u4e2a\u662f\u624b\u638c\u5173\u952e\u70b9\u68c0\u6d4b\u6a21\u578b\u3002\u624b\u638c\u68c0\u6d4b\u6a21\u578b\u8d1f\u8d23\u627e\u51fa\u56fe\u50cf\u4e2d\u7684\u624b\u638c\u533a\u57df\uff0c\u7136\u540e\u5c06\u8be5\u533a\u57df\u4f20\u9012\u7ed9\u624b\u638c\u5173\u952e\u70b9\u68c0\u6d4b\u6a21\u578b\u8fdb\u884c\u624b\u638c\u5173\u952e\u70b9\u4f4d\u7f6e\u7684\u63a8\u7406\u3002\u624b\u638c\u5173\u952e\u70b9\u68c0\u6d4b\u6a21\u578b\u80fd\u5c06\u8f93\u5165\u6a21\u578b\u7684\u624b\u638c\u56fe\u8fdb\u884c\u68c0\u6d4b\uff0c\u7136\u540e\u5bf9\u68c0\u6d4b\u5230\u7684\u6bcf\u4e00\u4e2a\u624b\u638c\u8fdb\u884c\u5173\u952e\u70b9\u56de\u5f52\u5f97\u523021\u4e2a\u624b\u638c\u9aa8\u9abc\u5173\u952e\u70b9\u4f4d\u7f6e\uff0c\u63a5\u7740\u5728\u56fe\u50cf\u4e0a\u7528\u4e0d\u540c\u989c\u8272\u7684\u7ebf\u6bb5\u5c06\u5173\u952e\u70b9\u548c\u5173\u952e\u70b9\u7684\u8fde\u7ebf\u6807\u8bc6\u51fa\u6765\u3002\u6700\u540e\uff0c\u5c06\u5904\u7406\u540e\u7684\u56fe\u50cf\u663e\u793a\u5728LCD\u4e0a\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u786c\u4ef6\u8d44\u6e90",children:"\u786c\u4ef6\u8d44\u6e90"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u672c\u7ae0\u5b9e\u9a8c\u5185\u5bb9\u4e3b\u8981\u8bb2\u89e3K230D\u7684\u795e\u7ecf\u7f51\u7edc\u52a0\u901f\u5668KPU\u7684\u4f7f\u7528\uff0c\u65e0\u9700\u5173\u6ce8\u786c\u4ef6\u8d44\u6e90\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u539f\u7406\u56fe",children:"\u539f\u7406\u56fe"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u672c\u7ae0\u5b9e\u9a8c\u5185\u5bb9\u4e3b\u8981\u8bb2\u89e3K230D\u7684\u795e\u7ecf\u7f51\u7edc\u52a0\u901f\u5668KPU\u7684\u4f7f\u7528\uff0c\u65e0\u9700\u5173\u6ce8\u539f\u7406\u56fe\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5b9e\u9a8c\u4ee3\u7801",children:"\u5b9e\u9a8c\u4ee3\u7801"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from libs.PipeLine import PipeLine, ScopedTiming\nfrom libs.AIBase import AIBase\nfrom libs.AI2D import Ai2d\nimport os\nimport ujson\nfrom media.media import *\nfrom media.sensor import *\nfrom time import *\nimport nncase_runtime as nn\nimport ulab.numpy as np\nimport time\nimport image\nimport aicube\nimport random\nimport gc\nimport sys\n\n# \u81ea\u5b9a\u4e49\u624b\u638c\u68c0\u6d4b\u4efb\u52a1\u7c7b\nclass HandDetApp(AIBase):\n    def __init__(self,kmodel_path,labels,model_input_size,anchors,confidence_threshold=0.2,nms_threshold=0.5,nms_option=False, strides=[8,16,32],rgb888p_size=[1920,1080],display_size=[1920,1080],debug_mode=0):\n        super().__init__(kmodel_path,model_input_size,rgb888p_size,debug_mode)\n        # kmodel\u8def\u5f84\n        self.kmodel_path=kmodel_path\n        self.labels=labels\n        # \u68c0\u6d4b\u6a21\u578b\u8f93\u5165\u5206\u8fa8\u7387\n        self.model_input_size=model_input_size\n        # \u7f6e\u4fe1\u5ea6\u9608\u503c\n        self.confidence_threshold=confidence_threshold\n        # nms\u9608\u503c\n        self.nms_threshold=nms_threshold\n        # \u951a\u6846,\u76ee\u6807\u68c0\u6d4b\u4efb\u52a1\u4f7f\u7528\n        self.anchors=anchors\n        # \u7279\u5f81\u4e0b\u91c7\u6837\u500d\u6570\n        self.strides = strides\n        # NMS\u9009\u9879\uff0c\u5982\u679c\u4e3aTrue\u505a\u7c7b\u95f4NMS,\u5982\u679c\u4e3aFalse\u505a\u7c7b\u5185NMS\n        self.nms_option = nms_option\n        # sensor\u7ed9\u5230AI\u7684\u56fe\u50cf\u5206\u8fa8\u7387\uff0c\u5bbd16\u5b57\u8282\u5bf9\u9f50\n        self.rgb888p_size=[ALIGN_UP(rgb888p_size[0],16),rgb888p_size[1]]\n        # \u89c6\u9891\u8f93\u51faVO\u5206\u8fa8\u7387\uff0c\u5bbd16\u5b57\u8282\u5bf9\u9f50\n        self.display_size=[ALIGN_UP(display_size[0],16),display_size[1]]\n        # debug\u6a21\u5f0f\n        self.debug_mode=debug_mode\n        # Ai2d\u5b9e\u4f8b\u7528\u4e8e\u5b9e\u73b0\u9884\u5904\u7406\n        self.ai2d=Ai2d(debug_mode)\n        # \u8bbe\u7f6eai2d\u7684\u8f93\u5165\u8f93\u51fa\u7684\u683c\u5f0f\u548c\u6570\u636e\u7c7b\u578b\n        self.ai2d.set_ai2d_dtype(nn.ai2d_format.NCHW_FMT,nn.ai2d_format.NCHW_FMT,np.uint8, np.uint8)\n\n    # \u914d\u7f6e\u9884\u5904\u7406\u64cd\u4f5c\uff0c\u8fd9\u91cc\u4f7f\u7528\u4e86pad\u548cresize\uff0cAi2d\u652f\u6301crop/shift/pad/resize/affine\uff0c\u5177\u4f53\u4ee3\u7801\u8bf7\u6253\u5f00/sdcard/libs/AI2D.py\u67e5\u770b\n    def config_preprocess(self,input_image_size=None):\n        with ScopedTiming("set preprocess config",self.debug_mode > 0):\n            # \u521d\u59cb\u5316ai2d\u9884\u5904\u7406\u914d\u7f6e\uff0c\u9ed8\u8ba4\u4e3asensor\u7ed9\u5230AI\u7684\u5c3a\u5bf8\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6einput_image_size\u81ea\u884c\u4fee\u6539\u8f93\u5165\u5c3a\u5bf8\n            ai2d_input_size = input_image_size if input_image_size else self.rgb888p_size\n            # \u8ba1\u7b97padding\u53c2\u6570\u5e76\u5e94\u7528pad\u64cd\u4f5c\uff0c\u4ee5\u786e\u4fdd\u8f93\u5165\u56fe\u50cf\u5c3a\u5bf8\u4e0e\u6a21\u578b\u8f93\u5165\u5c3a\u5bf8\u5339\u914d\n            top, bottom, left, right = self.get_padding_param()\n            self.ai2d.pad([0, 0, 0, 0, top, bottom, left, right], 0, [114, 114, 114])\n            # \u4f7f\u7528\u53cc\u7ebf\u6027\u63d2\u503c\u8fdb\u884cresize\u64cd\u4f5c\uff0c\u8c03\u6574\u56fe\u50cf\u5c3a\u5bf8\u4ee5\u7b26\u5408\u6a21\u578b\u8f93\u5165\u8981\u6c42\n            self.ai2d.resize(nn.interp_method.tf_bilinear, nn.interp_mode.half_pixel)\n            # \u6784\u5efa\u9884\u5904\u7406\u6d41\u7a0b,\u53c2\u6570\u4e3a\u9884\u5904\u7406\u8f93\u5165tensor\u7684shape\u548c\u9884\u5904\u7406\u8f93\u51fa\u7684tensor\u7684shape\n            self.ai2d.build([1,3,ai2d_input_size[1],ai2d_input_size[0]],[1,3,self.model_input_size[1],self.model_input_size[0]])\n\n    # \u81ea\u5b9a\u4e49\u5f53\u524d\u4efb\u52a1\u7684\u540e\u5904\u7406\uff0c\u7528\u4e8e\u5904\u7406\u6a21\u578b\u8f93\u51fa\u7ed3\u679c\uff0c\u8fd9\u91cc\u4f7f\u7528\u4e86aicube\u5e93\u7684anchorbasedet_post_process\u63a5\u53e3\n    def postprocess(self,results):\n        with ScopedTiming("postprocess",self.debug_mode > 0):\n            dets = aicube.anchorbasedet_post_process(results[0], results[1], results[2], self.model_input_size, self.rgb888p_size, self.strides, len(self.labels), self.confidence_threshold, self.nms_threshold, self.anchors, self.nms_option)\n            # \u8fd4\u56de\u624b\u638c\u68c0\u6d4b\u7ed3\u679c\n            return dets\n\n    # \u8ba1\u7b97padding\u53c2\u6570\uff0c\u786e\u4fdd\u8f93\u5165\u56fe\u50cf\u5c3a\u5bf8\u4e0e\u6a21\u578b\u8f93\u5165\u5c3a\u5bf8\u5339\u914d\n    def get_padding_param(self):\n        # \u6839\u636e\u76ee\u6807\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u8ba1\u7b97\u6bd4\u4f8b\u56e0\u5b50\n        dst_w = self.model_input_size[0]\n        dst_h = self.model_input_size[1]\n        input_width = self.rgb888p_size[0]\n        input_high = self.rgb888p_size[1]\n        ratio_w = dst_w / input_width\n        ratio_h = dst_h / input_high\n        # \u9009\u62e9\u8f83\u5c0f\u7684\u6bd4\u4f8b\u56e0\u5b50\uff0c\u4ee5\u786e\u4fdd\u56fe\u50cf\u5185\u5bb9\u5b8c\u6574\n        if ratio_w < ratio_h:\n            ratio = ratio_w\n        else:\n            ratio = ratio_h\n        # \u8ba1\u7b97\u65b0\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\n        new_w = int(ratio * input_width)\n        new_h = int(ratio * input_high)\n        # \u8ba1\u7b97\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u7684\u5dee\u503c\uff0c\u5e76\u786e\u5b9apadding\u7684\u4f4d\u7f6e\n        dw = (dst_w - new_w) / 2\n        dh = (dst_h - new_h) / 2\n        top = int(round(dh - 0.1))\n        bottom = int(round(dh + 0.1))\n        left = int(round(dw - 0.1))\n        right = int(round(dw + 0.1))\n        return top, bottom, left, right\n\n# \u81ea\u5b9a\u4e49\u624b\u52bf\u5173\u952e\u70b9\u68c0\u6d4b\u4efb\u52a1\u7c7b\nclass HandKPDetApp(AIBase):\n    def __init__(self,kmodel_path,model_input_size,rgb888p_size=[1920,1080],display_size=[1920,1080],debug_mode=0):\n        super().__init__(kmodel_path,model_input_size,rgb888p_size,debug_mode)\n        # kmodel\u8def\u5f84\n        self.kmodel_path=kmodel_path\n        # \u68c0\u6d4b\u6a21\u578b\u8f93\u5165\u5206\u8fa8\u7387\n        self.model_input_size=model_input_size\n        # sensor\u7ed9\u5230AI\u7684\u56fe\u50cf\u5206\u8fa8\u7387\uff0c\u5bbd16\u5b57\u8282\u5bf9\u9f50\n        self.rgb888p_size=[ALIGN_UP(rgb888p_size[0],16),rgb888p_size[1]]\n        # \u89c6\u9891\u8f93\u51faVO\u5206\u8fa8\u7387\uff0c\u5bbd16\u5b57\u8282\u5bf9\u9f50\n        self.display_size=[ALIGN_UP(display_size[0],16),display_size[1]]\n        self.crop_params=[]\n        # debug\u6a21\u5f0f\n        self.debug_mode=debug_mode\n        # Ai2d\u5b9e\u4f8b\u7528\u4e8e\u5b9e\u73b0\u9884\u5904\u7406\n        self.ai2d=Ai2d(debug_mode)\n        # \u8bbe\u7f6eai2d\u7684\u8f93\u5165\u8f93\u51fa\u7684\u683c\u5f0f\u548c\u6570\u636e\u7c7b\u578b\n        self.ai2d.set_ai2d_dtype(nn.ai2d_format.NCHW_FMT,nn.ai2d_format.NCHW_FMT,np.uint8, np.uint8)\n\n    # \u914d\u7f6e\u9884\u5904\u7406\u64cd\u4f5c\uff0c\u8fd9\u91cc\u4f7f\u7528\u4e86crop\u548cresize\uff0cAi2d\u652f\u6301crop/shift/pad/resize/affine\uff0c\u5177\u4f53\u4ee3\u7801\u8bf7\u6253\u5f00/sdcard/libs/AI2D.py\u67e5\u770b\n    def config_preprocess(self,det,input_image_size=None):\n        with ScopedTiming("set preprocess config",self.debug_mode > 0):\n            ai2d_input_size=input_image_size if input_image_size else self.rgb888p_size\n            self.crop_params = self.get_crop_param(det)\n            self.ai2d.crop(self.crop_params[0],self.crop_params[1],self.crop_params[2],self.crop_params[3])\n            self.ai2d.resize(nn.interp_method.tf_bilinear, nn.interp_mode.half_pixel)\n            self.ai2d.build([1,3,ai2d_input_size[1],ai2d_input_size[0]],[1,3,self.model_input_size[1],self.model_input_size[0]])\n\n    # \u81ea\u5b9a\u4e49\u540e\u5904\u7406\uff0cresults\u662f\u6a21\u578b\u8f93\u51fa\u7684array\u5217\u8868\n    def postprocess(self,results):\n        with ScopedTiming("postprocess",self.debug_mode > 0):\n            results=results[0].reshape(results[0].shape[0]*results[0].shape[1])\n            results_show = np.zeros(results.shape,dtype=np.int16)\n            results_show[0::2] = results[0::2] * self.crop_params[3] + self.crop_params[0]\n            results_show[1::2] = results[1::2] * self.crop_params[2] + self.crop_params[1]\n            results_show[0::2] = results_show[0::2] * (self.display_size[0] / self.rgb888p_size[0])\n            results_show[1::2] = results_show[1::2] * (self.display_size[1] / self.rgb888p_size[1])\n            return results_show\n\n    # \u8ba1\u7b97crop\u53c2\u6570\n    def get_crop_param(self,det_box):\n        x1, y1, x2, y2 = det_box[2],det_box[3],det_box[4],det_box[5]\n        w,h= int(x2 - x1),int(y2 - y1)\n        w_det = int(float(x2 - x1) * self.display_size[0] // self.rgb888p_size[0])\n        h_det = int(float(y2 - y1) * self.display_size[1] // self.rgb888p_size[1])\n        x_det = int(x1*self.display_size[0] // self.rgb888p_size[0])\n        y_det = int(y1*self.display_size[1] // self.rgb888p_size[1])\n        length = max(w, h)/2\n        cx = (x1+x2)/2\n        cy = (y1+y2)/2\n        ratio_num = 1.26*length\n        x1_kp = int(max(0,cx-ratio_num))\n        y1_kp = int(max(0,cy-ratio_num))\n        x2_kp = int(min(self.rgb888p_size[0]-1, cx+ratio_num))\n        y2_kp = int(min(self.rgb888p_size[1]-1, cy+ratio_num))\n        w_kp = int(x2_kp - x1_kp + 1)\n        h_kp = int(y2_kp - y1_kp + 1)\n        return [x1_kp, y1_kp, w_kp, h_kp]\n\n# \u624b\u638c\u5173\u952e\u70b9\u68c0\u6d4b\u4efb\u52a1\nclass HandKeyPointDet:\n    def __init__(self,hand_det_kmodel,hand_kp_kmodel,det_input_size,kp_input_size,labels,anchors,confidence_threshold=0.25,nms_threshold=0.3,nms_option=False,strides=[8,16,32],rgb888p_size=[1280,720],display_size=[1920,1080],debug_mode=0):\n        # \u624b\u638c\u68c0\u6d4b\u6a21\u578b\u8def\u5f84\n        self.hand_det_kmodel=hand_det_kmodel\n        # \u624b\u638c\u5173\u952e\u70b9\u6a21\u578b\u8def\u5f84\n        self.hand_kp_kmodel=hand_kp_kmodel\n        # \u624b\u638c\u68c0\u6d4b\u6a21\u578b\u8f93\u5165\u5206\u8fa8\u7387\n        self.det_input_size=det_input_size\n        # \u624b\u638c\u5173\u952e\u70b9\u6a21\u578b\u8f93\u5165\u5206\u8fa8\u7387\n        self.kp_input_size=kp_input_size\n        self.labels=labels\n        # anchors\n        self.anchors=anchors\n        # \u7f6e\u4fe1\u5ea6\u9608\u503c\n        self.confidence_threshold=confidence_threshold\n        # nms\u9608\u503c\n        self.nms_threshold=nms_threshold\n        # nms\u9009\u9879\n        self.nms_option=nms_option\n        # \u7279\u5f81\u56fe\u5bf9\u4e8e\u8f93\u5165\u7684\u4e0b\u91c7\u6837\u500d\u6570\n        self.strides=strides\n        # sensor\u7ed9\u5230AI\u7684\u56fe\u50cf\u5206\u8fa8\u7387\uff0c\u5bbd16\u5b57\u8282\u5bf9\u9f50\n        self.rgb888p_size=[ALIGN_UP(rgb888p_size[0],16),rgb888p_size[1]]\n        # \u89c6\u9891\u8f93\u51faVO\u5206\u8fa8\u7387\uff0c\u5bbd16\u5b57\u8282\u5bf9\u9f50\n        self.display_size=[ALIGN_UP(display_size[0],16),display_size[1]]\n        # debug_mode\u6a21\u5f0f\n        self.debug_mode=debug_mode\n        self.hand_det=HandDetApp(self.hand_det_kmodel,self.labels,model_input_size=self.det_input_size,anchors=self.anchors,confidence_threshold=self.confidence_threshold,nms_threshold=self.nms_threshold,nms_option=self.nms_option,strides=self.strides,rgb888p_size=self.rgb888p_size,display_size=self.display_size,debug_mode=0)\n        self.hand_kp=HandKPDetApp(self.hand_kp_kmodel,model_input_size=self.kp_input_size,rgb888p_size=self.rgb888p_size,display_size=self.display_size)\n        self.hand_det.config_preprocess()\n\n    # run\u51fd\u6570\n    def run(self,input_np):\n        # \u624b\u638c\u68c0\u6d4b\n        det_boxes=self.hand_det.run(input_np)\n        hand_res=[]\n        boxes=[]\n        for det_box in det_boxes:\n            # \u5bf9\u68c0\u6d4b\u5230\u7684\u6bcf\u4e2a\u624b\u638c\u6267\u884c\u624b\u52bf\u5173\u952e\u70b9\u8bc6\u522b\n            x1, y1, x2, y2 = det_box[2],det_box[3],det_box[4],det_box[5]\n            w,h= int(x2 - x1),int(y2 - y1)\n            # \u4e22\u5f03\u4e0d\u5408\u7406\u7684\u6846\n            if (h<(0.1*self.rgb888p_size[1])):\n                continue\n            if (w<(0.25*self.rgb888p_size[0]) and ((x1<(0.03*self.rgb888p_size[0])) or (x2>(0.97*self.rgb888p_size[0])))):\n                continue\n            if (w<(0.15*self.rgb888p_size[0]) and ((x1<(0.01*self.rgb888p_size[0])) or (x2>(0.99*self.rgb888p_size[0])))):\n                continue\n            self.hand_kp.config_preprocess(det_box)\n            results_show=self.hand_kp.run(input_np)\n            boxes.append(det_box)\n            hand_res.append(results_show)\n        return boxes,hand_res\n\n    # \u7ed8\u5236\u6548\u679c\uff0c\u7ed8\u5236\u624b\u638c\u5173\u952e\u70b9\u3001\u68c0\u6d4b\u6846\n    def draw_result(self,pl,dets,hand_res):\n        pl.osd_img.clear()\n        if dets:\n            for k in range(len(dets)):\n                det_box=dets[k]\n                x1, y1, x2, y2 = det_box[2],det_box[3],det_box[4],det_box[5]\n                w,h= int(x2 - x1),int(y2 - y1)\n                w_det = int(float(x2 - x1) * self.display_size[0] // self.rgb888p_size[0])\n                h_det = int(float(y2 - y1) * self.display_size[1] // self.rgb888p_size[1])\n                x_det = int(x1*self.display_size[0] // self.rgb888p_size[0])\n                y_det = int(y1*self.display_size[1] // self.rgb888p_size[1])\n                pl.osd_img.draw_rectangle(x_det, y_det, w_det, h_det, color=(255, 0, 255, 0), thickness = 2)\n\n                results_show=hand_res[k]\n                for i in range(len(results_show)/2):\n                    pl.osd_img.draw_circle(results_show[i*2], results_show[i*2+1], 1, color=(255, 0, 255, 0),fill=False)\n                for i in range(5):\n                    j = i*8\n                    if i==0:\n                        R = 255; G = 0; B = 0\n                    if i==1:\n                        R = 255; G = 0; B = 255\n                    if i==2:\n                        R = 255; G = 255; B = 0\n                    if i==3:\n                        R = 0; G = 255; B = 0\n                    if i==4:\n                        R = 0; G = 0; B = 255\n                    pl.osd_img.draw_line(results_show[0], results_show[1], results_show[j+2], results_show[j+3], color=(255,R,G,B), thickness = 3)\n                    pl.osd_img.draw_line(results_show[j+2], results_show[j+3], results_show[j+4], results_show[j+5], color=(255,R,G,B), thickness = 3)\n                    pl.osd_img.draw_line(results_show[j+4], results_show[j+5], results_show[j+6], results_show[j+7], color=(255,R,G,B), thickness = 3)\n                    pl.osd_img.draw_line(results_show[j+6], results_show[j+7], results_show[j+8], results_show[j+9], color=(255,R,G,B), thickness = 3)\n\n\n\nif __name__=="__main__":\n    # \u663e\u793a\u6a21\u5f0f\uff0c\u9ed8\u8ba4"lcd"\n    display_mode="lcd"\n    display_size=[640,480]\n    # \u624b\u638c\u68c0\u6d4b\u6a21\u578b\u8def\u5f84\n    hand_det_kmodel_path="/sdcard/examples/kmodel/hand_det.kmodel"\n    # \u624b\u90e8\u5173\u952e\u70b9\u6a21\u578b\u8def\u5f84\n    hand_kp_kmodel_path="/sdcard/examples/kmodel/handkp_det.kmodel"\n    # \u5176\u5b83\u53c2\u6570\n    anchors_path="/sdcard/examples/utils/prior_data_320.bin"\n    rgb888p_size=[1280,960]\n    hand_det_input_size=[512,512]\n    hand_kp_input_size=[256,256]\n    confidence_threshold=0.2\n    nms_threshold=0.5\n    labels=["hand"]\n    anchors = [26,27, 53,52, 75,71, 80,99, 106,82, 99,134, 140,113, 161,172, 245,276]\n\n    # \u521d\u59cb\u5316PipeLine\uff0c\u53ea\u5173\u6ce8\u4f20\u7ed9AI\u7684\u56fe\u50cf\u5206\u8fa8\u7387\uff0c\u663e\u793a\u7684\u5206\u8fa8\u7387\n    sensor = Sensor(width=1280, height=960) # \u6784\u5efa\u6444\u50cf\u5934\u5bf9\u8c61\n    pl = PipeLine(rgb888p_size=rgb888p_size, display_size=display_size, display_mode=display_mode)\n    pl.create(sensor=sensor)  # \u521b\u5efaPipeLine\u5b9e\u4f8b\n    hkd=HandKeyPointDet(hand_det_kmodel_path,hand_kp_kmodel_path,det_input_size=hand_det_input_size,kp_input_size=hand_kp_input_size,labels=labels,anchors=anchors,confidence_threshold=confidence_threshold,nms_threshold=nms_threshold,nms_option=False,strides=[8,16,32],rgb888p_size=rgb888p_size,display_size=display_size)\n    try:\n        while True:\n            os.exitpoint()\n            with ScopedTiming("total",1):\n                img=pl.get_frame()                      # \u83b7\u53d6\u5f53\u524d\u5e27\n                det_boxes,hand_res=hkd.run(img)         # \u63a8\u7406\u5f53\u524d\u5e27\n#                print(det_boxes, hand_res)              # \u6253\u5370\u7ed3\u679c\n                hkd.draw_result(pl,det_boxes,hand_res)  # \u7ed8\u5236\u63a8\u7406\u7ed3\u679c\n                pl.show_image()                         # \u5c55\u793a\u63a8\u7406\u7ed3\u679c\n                gc.collect()\n    except Exception as e:\n        sys.print_exception(e)\n    finally:\n        hkd.hand_det.deinit()\n        hkd.hand_kp.deinit()\n        pl.destroy()\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\u9996\u5148\u662f\u5b9a\u4e49\u663e\u793a\u6a21\u5f0f\u3001\u56fe\u50cf\u5927\u5c0f\u3001\u6a21\u578b\u76f8\u5173\u7684\u4e00\u4e9b\u53d8\u91cf\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u63a5\u7740\u662f\u901a\u8fc7\u521d\u59cb\u5316PipeLine\uff0c\u8fd9\u91cc\u4e3b\u8981\u521d\u59cb\u5316sensor\u548cdisplay\u6a21\u5757\uff0c\u914d\u7f6e\u6444\u50cf\u5934\u8f93\u51fa\u4e24\u8def\u4e0d\u540c\u7684\u683c\u5f0f\u548c\u5927\u5c0f\u7684\u56fe\u50cf\uff0c\u4ee5\u53ca\u8bbe\u7f6e\u663e\u793a\u6a21\u5f0f\uff0c\u5b8c\u6210\u521b\u5efaPipeLine\u5b9e\u4f8b\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u7136\u540e\u8c03\u7528\u81ea\u5b9a\u4e49HandKeyPointDet\u7c7b\u6784\u5efa\u624b\u638c\u5173\u952e\u70b9\u68c0\u6d4b\u7684\u4efb\u52a1\uff0cHandKeyPointDet\u7c7b\u4f1a\u901a\u8fc7\u8c03\u7528HandDetApp\u7c7b\u548cHandKPDetApp\u7c7b\u5b8c\u6210\u5bf9AIBase\u63a5\u53e3\u7684\u521d\u59cb\u5316\u4ee5\u53ca\u4f7f\u7528Ai2D\u63a5\u53e3\u7684\u65b9\u6cd5\u5b9a\u4e49\u624b\u638c\u68c0\u6d4b\u6a21\u578b\u548c\u624b\u638c\u5173\u952e\u70b9\u68c0\u6d4b\u6a21\u578b\u8f93\u5165\u56fe\u50cf\u7684\u9884\u5904\u7406\u65b9\u6cd5\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6700\u540e\u5728\u4e00\u4e2a\u5faa\u73af\u4e2d\u4e0d\u65ad\u5730\u83b7\u53d6\u6444\u50cf\u5934\u8f93\u51fa\u7684RGBP888\u683c\u5f0f\u7684\u56fe\u50cf\u5e27\uff0c\u7136\u540e\u4f9d\u6b21\u5c06\u56fe\u50cf\u8f93\u5165\u5230\u624b\u638c\u68c0\u6d4b\u6a21\u578b\u3001\u624b\u638c\u5173\u952e\u70b9\u68c0\u6d4b\u6a21\u578b\u8fdb\u884c\u63a8\u7406\uff0c\u7136\u540e\u5c06\u63a8\u7406\u7ed3\u679c\u901a\u8fc7print\u6253\u5370\uff0c\u540c\u65f6\u6839\u636e\u7ed3\u679c\u4fe1\u606f\u7528\u4e0d\u540c\u989c\u8272\u7ebf\u6bb5\u5c06\u624b\u638c\u548c\u624b\u638c\u768421\u4e2a\u5173\u952e\u70b9\u7ed8\u5236\u5230\u56fe\u50cf\u4e0a\uff0c\u5e76\u5728LCD\u4e0a\u663e\u793a\u56fe\u50cf\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u8fd0\u884c\u9a8c\u8bc1",children:"\u8fd0\u884c\u9a8c\u8bc1"}),"\n",(0,i.jsx)(n.p,{children:"\u5b9e\u9a8c\u539f\u56fe\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"01",src:s(77514).A+"",width:"612",height:"519"})}),"\n",(0,i.jsx)(n.p,{children:"\u5c06K230D BOX\u5f00\u53d1\u677f\u8fde\u63a5CanMV IDE\uff0c\u70b9\u51fbCanMV IDE\u4e0a\u7684\u201c\u5f00\u59cb(\u8fd0\u884c\u811a\u672c)\u201d\u6309\u94ae\u540e\uff0c\u5c06\u6444\u50cf\u5934\u5bf9\u51c6\u624b\u638c\uff0c\u8ba9\u5176\u91c7\u96c6\u5230\u624b\u638c\u56fe\u50cf\uff0c\u968f\u540e\uff0c\u5728LCD\u5c4f\u5e55\u4e0a\u53ef\u4ee5\u770b\u5230\u6444\u50cf\u5934\u8f93\u51fa\u7684\u56fe\u50cf\uff0c\u5176\u4e2d\uff0c\u624b\u638c\u4f1a\u88ab\u4e00\u4e2a\u77e9\u5f62\u6846\u6807\u8bb0\u51fa\u6765\uff0c\u800c\u77e9\u5f62\u6846\u5185\u4e94\u4e2a\u624b\u6307\u5219\u4f1a\u6839\u636e21\u4e2a\u624b\u638c\u9aa8\u9abc\u7684\u5173\u952e\u70b9\uff0c\u4f7f\u7528\u4e94\u79cd\u4e0d\u540c\u989c\u8272\u7684\u7ebf\u6761\u6709\u5e8f\u8fde\u63a5\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"01",src:s(89466).A+"",width:"426",height:"355"})})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>_,x:()=>l});var i=s(96540);const d={},t=i.createContext(d);function _(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:_(e.components),i.createElement(t.Provider,{value:n},e.children)}},77514:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/22-76855621bf7a2b054773eb72515b81e8.png"},89466:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/31-7fa9e203f64c8abf96fb3a875d9b2b7d.png"}}]);