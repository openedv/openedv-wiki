"use strict";(self.webpackChunkopenedv_wiki=self.webpackChunkopenedv_wiki||[]).push([[24843],{5:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>Q,contentTitle:()=>f,default:()=>o,frontMatter:()=>I,metadata:()=>P,toc:()=>r});var h=s(74848),E=s(28453);const I={title:"4.17 TF\uff08SD\uff09\u5361\u6d4b\u8bd5",sidebar_position:17},f="4.17 TF\uff08SD\uff09\u5361\u6d4b\u8bd5",P={id:"Boards/Linux/STM32MP157/STM32MP157 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4/4.17",title:"4.17 TF\uff08SD\uff09\u5361\u6d4b\u8bd5",description:"&emsp;&emsp;\u6307\u4ee4\u63d0\u793a\uff1a",source:"@site/docs/Boards/Linux/STM32MP157/STM32MP157 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4/4.17.md",sourceDirName:"Boards/Linux/STM32MP157/STM32MP157 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4",slug:"/Boards/Linux/STM32MP157/STM32MP157 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4/4.17",permalink:"/docs/Boards/Linux/STM32MP157/STM32MP157 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4/4.17",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"4.17 TF\uff08SD\uff09\u5361\u6d4b\u8bd5",sidebar_position:17},sidebar:"BoardsLinuxSTM32MP157Sidebar",previous:{title:"4.16 4G\u6a21\u5757ME3630-W\u6d4b\u8bd5",permalink:"/docs/Boards/Linux/STM32MP157/STM32MP157 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4/4.16"},next:{title:"4.18 OV5640\u6444\u50cf\u5934/USB\u6444\u50cf\u5934\u6d4b\u8bd5",permalink:"/docs/Boards/Linux/STM32MP157/STM32MP157 \u5feb\u901f\u4f53\u9a8c\u624b\u518c/4/4.18"}},Q={},r=[{value:"4.17.1 \u8bfb\u53d6\u901f\u5ea6\u6d4b\u8bd5",id:"4171-\u8bfb\u53d6\u901f\u5ea6\u6d4b\u8bd5",level:2},{value:"4.17.2 \u5199\u901f\u5ea6\u6d4b\u8bd5",id:"4172-\u5199\u901f\u5ea6\u6d4b\u8bd5",level:2}];function i(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,E.R)(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n.header,{children:(0,h.jsx)(n.h1,{id:"417-tfsd\u5361\u6d4b\u8bd5",children:"4.17 TF\uff08SD\uff09\u5361\u6d4b\u8bd5"})}),"\n",(0,h.jsxs)(n.p,{children:["\u2003\u2003\u6307\u4ee4\u63d0\u793a\uff1a",(0,h.jsx)("br",{}),'\n\u2003\u2003time\u547d\u4ee4\u5e38\u7528\u4e8e\u6d4b\u91cf\u4e00\u4e2a\u547d\u4ee4\u7684\u8fd0\u884c\u65f6\u95f4\uff0cdd \u7528\u4e8e\u590d\u5236\uff0c\u4ece if(input file)\u6587\u4ef6\u8bfb\u51fa\uff0c\u5199\u5230 of(output file)\u6307\u5b9a\u7684\u6587\u4ef6\uff0cbs \u662f\u6bcf\u6b21\u5199\u5757\u7684\u5927\u5c0f\uff0ccount \u662f\u8bfb\u5199\u5757\u7684\u6570\u91cf\u3002"if=/dev/zero"\u4e0d\u4ea7\u751f IO\uff0c\u5373\u53ef\u4ee5\u4e0d\u65ad\u8f93\u51fa\u6570\u636e\uff0c\u56e0\u6b64\u53ef\u4ee5\u7528\u6765\u6d4b\u8bd5\u7eaf\u5199\u901f\u5ea6\u3002']}),"\n",(0,h.jsx)(n.p,{children:"\u2003\u2003\u9700\u8981\u51c6\u5907TF\u5361"}),"\n",(0,h.jsx)(n.p,{children:"\u2003\u2003\u5f00\u53d1\u677f\u542f\u52a8\u540e\u5c06TF\u5361\u63d2\u5230\u5f00\u53d1\u677f\u5e95\u677f\u5361\u69fd\u5904\u3002\u5f00\u53d1\u677f\u4f1a\u5c06TF\u5361\u81ea\u52a8\u6302\u8f7d\u3002"}),"\n",(0,h.jsx)(n.p,{children:"\u2003\u2003\u4f5c\u8005\u662f\u4eceeMMC\u542f\u52a8\uff0c\u53ef\u4ee5\u770b\u5230/dev/mmcblk1\u5c31\u662fTF\u5361\u7684\u8bbe\u5907\u8282\u70b9\uff0c\u7cfb\u7edf\u5c06/dev/mmcblk1\u6302\u8f7d\u5230/run/media/mmcblk1\u76ee\u5f55\u4e0b\u3002\uff08\u6ce8\u610f\u9700\u8981\u4f7f\u7528FAT32\u683c\u5f0f\u7684TF\u5361\uff0c\u4e0d\u80fd\u4f7f\u7528NTFS\u683c\u5f0f\uff09"}),"\n",(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-c#",children:"ls /dev/mmcblk1\n"})}),"\n",(0,h.jsx)("center",{children:(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.img,{src:s(43905).A+"",width:"719",height:"50"}),(0,h.jsx)("br",{}),"\n\u56fe4.17 1 \u67e5\u770bTF\u5361\u7684\u5206\u533a"]})}),"\n",(0,h.jsx)(n.p,{children:"\u2003\u2003\u4f7f\u7528df\u547d\u4ee4\u67e5\u770bTF\u5361\u6302\u8f7d\u7684\u76ee\u5f55\uff0c\u7531\u4e8e\u7b14\u8005\u4f7f\u7528\u7684TF\u5361\u662f\u7cfb\u7edf\u542f\u52a8\u5361\uff0c\u6709\u4e94\u4e2a\u5206\u533a\uff0c\u80fd\u88ab\u8bc6\u522b\u6302\u8f7d\u7684\u662f\u201cboot\u201d\u548c\u201crootfs\u201d\u5206\u533a\u3002\u5982\u679c\u60a8\u4f7f\u7528\u662f\u4e00\u5f20\u7a7a\u767d\u7684TF\u5361\uff0c\u90a3\u4e48\u5c31\u53ea\u6709\u4e00\u4e2a\u5206\u533a\uff0c\u540d\u79f0\u4e3a\u201c/dev/mmcblk1\u201d\uff0c\u6302\u8f7d\u7684\u76ee\u5f55\u4e3a\u201c/run/media/mmcblk1\u201d\u3002"}),"\n",(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-c#",children:"df -h\n"})}),"\n",(0,h.jsx)("center",{children:(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.img,{src:s(94922).A+"",width:"697",height:"212"}),(0,h.jsx)("br",{}),"\n\u56fe4.17 2 \u67e5\u770bTF\u5361\u7684\u6302\u8f7d\u76ee\u5f55"]})}),"\n",(0,h.jsx)(n.h2,{id:"4171-\u8bfb\u53d6\u901f\u5ea6\u6d4b\u8bd5",children:"4.17.1 \u8bfb\u53d6\u901f\u5ea6\u6d4b\u8bd5"}),"\n",(0,h.jsx)(n.p,{children:"\u2003\u2003\u5e38\u7528\u4e8e\u6d4b\u8bd5\u786c\u76d8\u8bfb\u53d6\u901f\u5ea6\u6307\u4ee4\u6709hdparm\u4e0edd\uff0c\u672c\u6b21\u53ea\u6f14\u793ahdparm\u8bfb\u53d6TF\u5361\u7684\u901f\u5ea6\u3002\uff08\u8bfb\u53d6\u901f\u5ea6\u4e0e\u4f60\u6240\u7528\u7684TF\u5361\u7c7b\u578b\u6709\u5173\uff09"}),"\n",(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-c#",children:"hdparm -t /dev/mmcblk1\n"})}),"\n",(0,h.jsx)("center",{children:(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.img,{src:s(22426).A+"",width:"817",height:"94"}),(0,h.jsx)("br",{}),"\n\u56fe4.17.1 1 \u8bfb\u53d6\u901f\u5ea6\u8bc4\u6d4b"]})}),"\n",(0,h.jsx)(n.h2,{id:"4172-\u5199\u901f\u5ea6\u6d4b\u8bd5",children:"4.17.2 \u5199\u901f\u5ea6\u6d4b\u8bd5"}),"\n",(0,h.jsx)(n.p,{children:"\u2003\u2003\u4f7f\u7528dd\u6307\u4ee4\u519950MB\u6570\u636e\u5230\u201c/run/media/mmcblk1p5\u201d\u76ee\u5f55\uff0c\u201d\u4e5f\u5c31\u662fTF\u5361\u7684\u6302\u8f7d\u76ee\u5f55\u3002\u5982\u679c\u60a8\u7684\u662f\u7a7a\u767d\u7684TF\u5361\uff0c\u53ea\u6709\u4e00\u4e2a\u5206\u533a\uff0c\u90a3\u4e48\uff0c\u6302\u8f7d\u7684\u76ee\u5f55\u4e3a\u201c/run/media/mmcblk1\u201d\uff0c\u8bf7\u4fee\u6539\u4e0b\u9762\u7684\u6307\u4ee4\u3002\u6ce8\u610f\uff0c\u5199\u7684\u6570\u636e\u8d8a\u5927\u6570\u636e\uff0c\u5199\u5165\u7684\u901f\u5ea6\u8d8a\u63a5\u8fd1\u5b9e\u9645\u503c\u3002"}),"\n",(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-c#",children:"time dd if=/dev/zero of=/run/media/mmcblk1p5/test bs=1024k count=50 conv=fdatasync\n"})}),"\n",(0,h.jsx)("center",{children:(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.img,{src:s(29998).A+"",width:"849",height:"121"}),(0,h.jsx)("br",{}),"\n\u56fe4.17.2 2 \u5220\u9664\u5199\u5165\u7684\u6587\u4ef6"]})})]})}function o(e={}){const{wrapper:n}={...(0,E.R)(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(i,{...e})}):i(e)}},22426:(e,n,s)=>{s.d(n,{A:()=>h});const h="data:image/png;base64,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"},28453:(e,n,s)=>{s.d(n,{R:()=>f,x:()=>P});var h=s(96540);const E={},I=h.createContext(E);function f(e){const n=h.useContext(I);return h.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function P(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(E):e.components||E:f(e.components),h.createElement(I.Provider,{value:n},e.children)}},29998:(e,n,s)=>{s.d(n,{A:()=>h});const h="data:image/png;base64,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"},43905:(e,n,s)=>{s.d(n,{A:()=>h});const h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAs8AAAAyCAIAAAAsg6EOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAArQSURBVHhe7ZvhbRtJD4avhhyC4HCHqJk7uJP8chvJTzUR5K96cAOuIEgFKeIj+XK4HM7OWnZW+iznfRCcZjjkO9zRYUmtrD8+EkIIIYRcEnYbhBBCCLks7DZujLvj40/ndH84uPViHO5PPx+Pd5ff6Lkc9CBWTmB2PuavV+JzQgghV4TdxqvgoMXQqnp79YUJs1q7OzfXbYBx1SzsNggh5P/Dzt2GFqe1GmD3ekdu+W4VOxZSPVOBAV3v6wf0ZI7piGWiHj5FgAiVDZqDsOSY8vEMFzyHahZS1HM5aLqqrKoppRnlNH4d1VvLf69uY6b/YrZPYFw1i2bg84Su/PI7SAghZINrdBtm9Bt9uenb1G/zsAQocz5xT1e2oCdqLTZ9fFxCBFVMGVqN73YRSn1FA1B8Rkq2z0U3sU1FR5Jz65x8Gr8OzmF133IaL2ND/8Vsn8C42t7GaQ67XCkhhJBVvNuwO+1RSgJAYUCRcNIH7lW73c17bGmsNLirY4yikC1BMUb9sH2mZSbAtsdUxGWsimaPcKhiDNTXYnzayhSmq4yVzNNMOjPyWS48FRin4XMjS+UDf5LhkkPI/qdIS8sO8b63YEzH8xSyPs5KGj/V0LdEsLWJHQrLvp1OcxTKmzicD/QhqMPhiMohEEII2ZGl28g3d6BG7xj8Vr1tF6xO9Xf5Zmk17PF08oKEcF2TleFGD5tPxNl8rbp0+jN8X4kSFRnbUBVhbwrIAGNQkvG+oZFTClZEEJV0trEELei8kDg5n+uOnjem96ezTkmId8Hnw/sbV1HscRTYOOxZSijGFgppTdLzntglRPfVFVWQ5aNJwW81H8EMKuLztX19oVHed0IIITuSn210dbRUr7gXz+zLtL+V47Yvg7bid3uxREkomgAmn7izIzFundMykTD9xIyRKqYMbd9uF6FcUabl3i1B5MmU4NbSt92tI2hLasSruT9BHJ3Pm365lnPQuHS9pqNzn7bVmb3zGbISsqdOm0/Y/XVmb68ID8x/sYe3T8fzMX/tdIcMQVEghBCyI/Nuo79fx714Zl+m/d28uftrWHwATZSCPoGSUuxrW2iYL8iSrYEIiUxi4HvoNDFU93JFBWThE2PbP7g7npAzElI0qmQDNFtEzYjT8LmRjmE5h23y+wKKclxdFnfaVUdDgFAEgg39UO6C53aPbxR7RPl0iDKL5Kzf1ciCWxNFgRBCyI5c5dmGOWBFLN0g0xcqCPtElFP90MC06SrTTAZ7oVxRAVn4RJwtrZznCxAJ29Bf3brJWE0z47XPGD033/eppnndIyc3GSv6LfNQ9teZvb16fKMdfM3Tp8P5hL96rgr2CoQQQnZk2m0Ielu2ylpq6swulBog2M3dqoiNBP9io93dixumApZ94sruEBUDS6uMgp7aYC+0vFpi9lAixuWT8Xi9ACeTdTaQDTUhiTjPX8AJlEyWPJ+6xgDX6pMGomVQriLsuiQruevSNaFuOuqbpLrFOfvrxC4hMoAF4Wf93YYlVM4n3qksGMS+PieEELIfW92GFxuQS8vEDvRWDiaVALRy4Df3sTyUlEwm+ds2o2xQ9AXPY7AH0FwQZ3NLV9tlKEDMJ4lSpzcwT/MTrTWpGZFtHELKUwVh3KAcaZDe3/lvUvpLw9tX8l/VD6NGtOvW14kdUaZutH3hP/tNioCMBIiYvwbr2CYREp5O24IQQsheeLdxUdq9nXfw10Uu55fg0vqEEEJuhWt0G4J/9jVYgV4D8SzB53tzaX1CCCE3xJW6DUIIIYT8trDbIIQQQshlObfbOHz68OPhr/9e34Pxw79/PXz/8GlI7L/P7398f2f/ulXzf//lXz7hJ4QQQq7Em+02wLjKboMQQgi5MrXb0EcCa13FXt3GTP/F7NhtLI9DXmVfRQghhNwoXbdxOPz97fuf3z6tFNpduo0N/RezY7cBXu1THEIIIeRG6buNvtCiObCP+++/fO6WPn2F/d2Pr3/DYs5LFdfnBG0pyPqo+g8PqvPts4xloOEzOxSWfTudD1/isUS/6Xa3gYcZpftht0EIIYTsy9JtHA7/fHnoHjxoabfijaWowcX+8Pkf9TY7xqOUUIxR9a3ka0OA8JldQnTf1GR8MSnzX89HsNX1biP0faHBboMQQgjZl9RtrDzYWB4qxOrM3vkMNV6o+s0n7KnbWLP3+wbRPfh0sgumAvy/fV1vNYSiQAghhJBfxLuN8WlEqdNRg83evs7Av1aboyEYv0bZ0D+32+jzCWZ5+nSIMsufPx7ey3/L0xfAboMQQgjZl9ZtSIktVXnr2cZK1QfWGfy98jXKqP9UV1Htuz7bEH9LaU2wVyCEEELIL+LdBio6xoEYt/9uQ5ekeKfHGFbC341fUoz6065iYpcQ3bflIG5n/d2G9ijjMxVvMrJgwG6DEEII2RftNqLAwxR4k6Hdw/w3KX1hRnWvX6Os6Yfx/G5DGPeF/+w3KYLq2BJEzN+7Db/A6Jyap//rL40QQgghL0O7jVzOL8Gl9QkhhBDymvlj9cHDjlxanxBCCCGvHP+7DUIIIYSQC8FugxBCCCGXhd0GIYQQQi4Lu41XweFwd3x8PN4tr75ACCGE3D47dxuH+9PPn6f7oVhqEf3pSDF1q1dZM7UQFRjQdXVclKEnc0xHLBP18CkCRKhs0ByEJceUj2e44DlUs5CinstB01VlVU0pEUIIIW+Aa3QbZtRSrGMtpz5uUy/UsAQSJFafuKcrW1DdpYBNHx+XEEEVU4ZW47tdBLVpOi6OBqD4jJRsn4tuYpuKjiTnVkIIIeRN4N2GFcujlF6Agodi7KQP3Kv21jckbAnOuYLaXl6YNeh0ny1BMUa3Yft4u7ABtj2mIi5jVTR7hEMVY6C+FuPTM7qN5rKk5GkmnRn5LBfOCCSEEEJuhaXbGB8woC7LoFTcmV1orUWqu83SepTH08kLPMJ1TVaG+gqbT8TZfLVj6PVn+L4SJSoytqEqwt4UkAHGoCTjfUMjpxSsiCAq6WxjCVrQ2SGEEELIrZCfbXR1NFoAn7YaPLMv01TLhajEbcXKMLoNrA2aACafuLMjMW6d0zLRAv5o26iAKKYM0QDlXYRyRZmWe7cEkSdTgltL33a/PyHKltSIV3MnhBBC3g7zbqO1Aj6Fh1TEiX2ZplWhuftrWHwAzdYJWIRTUop9bQsN8wVZsjUQIZFJDHwPnSaG6l6uqIAsfGJs+wd3xxNyXtoOjSrZAM0WUYQQQsgb4CrPNswBK2LpBpm+ikPYJ6Lcug0Za2DadJVpJoO9UK6oULqN1T7puYiEbeivbiWEEELeCtNuQ0BdlkGpqTO70AxLyYyqH5/p/YuNVtWLG6YCln3iyu4Aqbw6Mgp6aoO90PJqidlDiRiXb1LG6wU4mayzgWyoCUnEef6EEELIbbHVbXjJBMMHeqd/ICFoNQeTjgSUbqA9+1hqbUnJZJK/bTPKBi/oNqC5IM7mlq62y1CAmE8S53cbS5chWmtShBBCyK3j3cZFQeUtdZoQQgghvwnX6DaE+BpF2HggQQghhJC3x5W6DUIIIYT8trDbIIQQQshlYbdBCCGEkMvCbuNVsPwypb36AiGEEHL77NxtjL87BfhZCsh/JTr+UrT8ChXoujouytDb+J2L/1lq+02pJyBCZYP0o9Mlx5SPZ7jgOVSzkKKei//+FZvxd7CEEELeEh8//g+dsYLEXZKiFwAAAABJRU5ErkJggg=="},94922:(e,n,s)=>{s.d(n,{A:()=>h});const h=s.p+"assets/images/4.17.2-60508d0133b84f17ed8be0b27b1abc6b.png"}}]);