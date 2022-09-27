(()=>{"use strict";const e="__BACKGROUND-IMAGE__",n="bgImg",t="__BRIGHTNESS__",o="brghtns",a="__BLUR__",r="TRANSPARENCY",s="TRANSPARENCY__ACTIONS-PANEL",l=`${s}-OVERLAY`,i="TRANSPARENCY__ACTIONS_PANEL",c="TRANSPARENCY__ALERTS-STYLESHEET",u="theme-dark",m="theme-light",d=`${s}--SLIDE-IN`,g="TRANSPARENCY__ACTION",p=`${g}--ACTIVE`,h=`${g}-WARNING`,b=`${g}-INPUT`,v=`${g}-LEVEL-INDICATOR`,k=`${g}-SAVE-LEVEL`,y=new Map,N=new Map,T=new Map;function f(e){const n=y.get("mainStyleSheet"),t=y.get("overlayBarElement");if(!n.hasAttribute("media"))return n.setAttribute("media","1px"),null!==t&&(t.style.backgroundColor="var(--color-tertiary)"),void(e.style.display="none");const o=T.get("isDarkTheme"),a=T.get("brightness");n.removeAttribute("media"),null!==t&&(t.style.backgroundColor=o?`rgba(0,0,0,0.${a}`:`rgba(255,255,255,0.${a}`),e.classList.contains(d)&&(e.style.display="block")}function x(e){return`🛑 Oh no, there's been an error. If you see this, join the support server, and report the error. [[${e}]]`}const w=`.${g} {\n  min-height: 200px;\n  background-color: rgba(0, 0, 0, 0.5);\n  margin: 10px;\n  color: white;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: background-color 300ms linear;\n}\n\n.${p} {\n  background-color: rgba(0, 0, 0, 0.8);\n  cursor: initial;\n}\n\n.${b} {\n  box-sizing: border-box;\n  text-align: center;\n  height: 40px;\n  width: 85%;\n  margin: 10px 0 0;\n  border: 0;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 50px;\n  color: white;\n}\n\n.${b}:focus,\n.${k}:focus {\n  outline: none;\n  border: 2px solid dodgerblue;\n}\n\n.${v} {\n  margin: 0;\n  opacity: 0.8;\n  text-align: center;\n}\n\n.${h} {\n  font-size: 11px;\n  line-height: 20px;\n  padding: 10px;\n  color: white;\n  max-width: 310px;\n  margin: 10px 0 0;\n  opacity: 0.8;\n}\n\n.${k} {\n  height: 40px;\n  padding: 0 15px;\n  max-width: 300px;\n  margin-top: 10px;\n  border: 0;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 50px;\n  color: white;\n  cursor: pointer;\n}\n`,C=".typeWindows-2-g3UY.withFrame-2dL45i.titleBar-1it3bQ.horizontalReverse-2QssvL.flex-3BkGQD.directionRowReverse-HZatnx.justifyStart-2Mwniq.alignStretch-Uwowzr";function E(){const e=T.get("brightness"),n=T.get("isDarkTheme"),t=n?`rgba(0, 0, 0, 0.${e})`||"rgba(0,0,0,0.9)":`rgba(255, 255, 255, 0.${e})`||"rgba(255,255,255,0.7)",o=n?"rgba(0,0,0,0.78)":"rgba(255,255,255,0.85)",a=n?"rgba(0,0,0,0.92)":"rgba(255,255,255,0.95)";return`.theme-dark, .theme-light {\n  --background-primary: transparent;\n  --background-secondary: transparent;\n  --background-tertiary: transparent;\n  --channeltextarea-background: transparent;\n  --deprecated-panel-background: transparent;\n  --background-secondary-alt: transparent;\n  --scrollbar-auto-track: transparent;\n}\n\n.theme-dark {\n  --scrollbar-auto-thumb:rgba(255,255,255,0.3);\n  --profile-body-background-color: rgba(255, 255, 255, 0.1);   \n}\n\n.theme-light {\n  --scrollbar-auto-thumb:rgba(0,0,0,0.6);\n  --profile-body-background-color: rgba(0, 0, 0, 0.05);\n}\n\n#app-mount {\n  background: url(${(r={backgroundImageURL:T.get("backgroundImageURL"),blurLevelPixels:`${T.get("blur")}px`,brightnessLevelRGBA:t,variousElementsBackground:o,variousElementsBackgroundMoreOpaque:a}).backgroundImageURL}) center center no-repeat;\n  background-size: cover;\n}\n\n${C} {\n  margin-top: 0;\n  padding-top: 4px;\n  background: ${r.brightnessLevelRGBA};\n  backdrop-filter: blur(${r.blurLevelPixels})\n}\n\n.app-3xd6d0 {\n  background-color: ${r.brightnessLevelRGBA};\n  backdrop-filter: blur(${r.blurLevelPixels})\n} \n\n.container-2cd8Mz, .applicationStore-2nk7Lo, .background-fkKrXt, .container-3wLKDe {\n  background-color: transparent !important;\n}\n\n.popout-TdhJ6Z, .container-2O1UgZ, .wrapperAudio-1Bzv_Z, \n.wrapper-2vIMkT, .searchResultsWrap-5RVOkx, .contentWrapper-3vHNP2,\n.container-2RRFHK, .popout-VcNcHB, .reaction-3vwAF2,\n.embedFull-1HGV2S, .attachment-1PZZB2, .container-3XgAHv,\n.popoutContainer-1MXdqN, .wrapper-1HIH0j, .code.inline, .markup-2BOw-j code, code {\n  background-color: ${r.variousElementsBackground} !important;\n}\n\n.userPopout-2VyFj_, .main-jX9p1r, .recentMentionsPopout-3rCiI6, .channelHeader-3Gd2xq,\n.container-2ebMPP.recentMentionsPopout-2bI1ZN, .aboutMeGuildIconTooltip-tM91BN, .popout-1KHNAq,\n.emojiPicker-6YCk8a, .quickswitcher-pKcM9U, .messagesPopoutWrap-3zryHW,\n.container-18GwIk {\nbackground-color: ${r.variousElementsBackgroundMoreOpaque} !important;\n}\n\ndiv[class=${".groupStart-3Mlgv1".slice(1)}]:not(.message-2CShn3) {\n  display: none;\n}\n\n#${s} {\n  font-family: "Whitney", "Helvetica Neue", "Helvetica", monospace, "Arial", sans-serif;\n  width: 30%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.6);\n  position: absolute;\n  right: 0;\n  z-index: 200;\n  backdrop-filter: blur(8px);\n  transform: translateX(100%);\n  transition: transform 500ms ease;\n}\n\n#${l} {\n  display: none;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 199;\n}\n\n.${d} {\n  transform: translateX(0) !important;\n}\n`;var r}function L({elementName:e,appendTo:n,htmlProps:t}){const o=document.createElement(e);for(const[e,n]of Object.entries(t))o[e]=n;return n.appendChild(o),o}function S({text:e,timeout:n,containsHTML:t=!1}){const o=L({elementName:"div",appendTo:document.body,htmlProps:{className:"TRANSPARENCY__ALERT",[t?"innerHTML":"textContent"]:e}});return new Promise((e=>{setTimeout((()=>{o.classList.add("TRANSPARENCY__ALERT--INACTIVE"),setTimeout((()=>{o.remove(),e(!0)}),1e3)}),n)}))}function I(){const e=T.get("blur");window.localStorage.setItem(a,e.toString()),S({text:`Blur level updated! Now it is at level <b>${e}</b>.`,containsHTML:!0,timeout:3e3})}function A(){const e=T.get("brightness");window.localStorage.setItem(t,e.toString()),S({text:`Brightness level updated! Now it is at level <b>${e}</b>.`,containsHTML:!0,timeout:3e3})}const P=[{name:"Change the background image",execute(n){const t=L({elementName:"input",appendTo:n,htmlProps:{className:b,placeholder:"Paste image link here"}});t.onkeydown=n=>{"Enter"===n.code&&""!==t.value.trim()&&function(n){const t=n.value;y.get("mainStyleSheet").innerHTML+=`#app-mount{background: url(${t}) center center no-repeat !important; background-size: cover !important;}`,T.set("backgroundImageURL",t),window.localStorage.setItem(e,t)}(t)},L({elementName:"p",appendTo:n,htmlProps:{className:h,textContent:"🛑 The image you want as your background must be sent as a message on Discord. You will have to click on the image, press on <Open original>, and copy the link from there. After that, click on this input and press ENTER."}})}},{name:"Change the brightness level",execute(e){const n=T.get("isDarkTheme")?"0,0,0":"255,255,255",t=T.get("brightness"),o=L({elementName:"h3",appendTo:e,htmlProps:{className:v,textContent:`Brightness level: ${t}`}}),a=L({elementName:"input",appendTo:e,htmlProps:{className:b,type:"range",min:"0",max:"9",value:t.toString(),oninput:()=>function({overlayColor:e,brightnessLevelIndicator:n,brightnessLevelSlider:t}){const o=y.get("overlayDarkenerElement"),a=y.get("overlayBarElement");o.style.backgroundColor=`rgba(${e}, .${t.value})`,null!==a&&(a.style.backgroundColor=`rgba(${e}, .${t.value})`),n.textContent=`Brightness level: ${t.value}`,T.set("brightness",parseInt(t.value))}({overlayColor:n,brightnessLevelIndicator:o,brightnessLevelSlider:a})}});L({elementName:"button",appendTo:e,htmlProps:{className:k,textContent:"Save brightness level",onclick:A}})}},{name:"Change the blur level",execute(e){const n=T.get("blur"),t=L({elementName:"h3",appendTo:e,htmlProps:{className:v,textContent:`Blur level: ${n}`}}),o=L({elementName:"input",appendTo:e,htmlProps:{className:b,type:"range",min:"0",max:"50",value:n.toString(),oninput:()=>function(e,n){const t=y.get("overlayDarkenerElement"),o=y.get("overlayBarElement");t.style.backdropFilter=`blur(${n.value}px)`,null!==o&&(o.style.backdropFilter=`blur(${n.value}px)`),e.textContent=`Blur level: ${n.value}`,T.set("blur",parseInt(n.value))}(t,o)}});L({elementName:"button",appendTo:e,htmlProps:{className:k,textContent:"Save blur level",onclick:I}})}}];function R(e,n){n.classList.add(p),n.textContent="";try{n.onclick=null,e.execute(n)}catch(e){alert(x(e.message))}}function _(e){const n=document.querySelector(e);return null===n?(alert(x(`${e} is not in the DOM.`)),null):n}class ${constructor({targetElement:e,classNameToChange:n,classNameToChangeInto:t}){this._onClassChangeCallback=null,this.targetElement=e,this._classNameToChange=n,this._classNameToChangeInto=t,this._wasClassNamePreviouslyPresent=!this.targetElement.classList.contains(this._classNameToChange)&&this.targetElement.classList.contains(this._classNameToChangeInto),this._observer=new MutationObserver(((e,n)=>{for(const t of e){if("attributes"!==t.type||"class"!==t.attributeName)continue;const o=t.target,a=!o.classList.contains(this._classNameToChange)&&o.classList.contains(this._classNameToChangeInto);if(a!==this._wasClassNamePreviouslyPresent){if(this._wasClassNamePreviouslyPresent=a,null===this._onClassChangeCallback)throw new ReferenceError("No callback has been supplied on class change.");this._onClassChangeCallback(e,n)}}}))}onClassChange(e){return this._onClassChangeCallback=e,this}observe(e){return this._observer.observe(this.targetElement,e),this}unobserve(){return this._observer.disconnect(),this}}function B(){const e=document.getElementById(r),n=document.getElementById(c),t=document.getElementById(s),o=document.getElementById(l),a=document.getElementById(i);null==n||n.remove(),null==t||t.remove(),null==o||o.remove(),null==a||a.remove(),null!==e&&(window.onkeydown=null,e.remove())}!function(){if(B(),!(function(){const e=L({elementName:"iframe",appendTo:document.body,htmlProps:{}});return e.style.display="none",null===e.contentWindow?(alert(x("Could not create the localStorage object because the iframe's contentWindow isn't defined.")),!1):(window.localStorage=e.contentWindow.localStorage,!0)}()&&function(){var r,s,l;T.set("isDarkTheme",document.documentElement.classList.contains(u));try{let i=parseInt(null!==(r=window.localStorage.getItem(t))&&void 0!==r?r:"unset");isNaN(i)&&(i=parseInt(null!==(s=window.localStorage.getItem(o))&&void 0!==s?s:"unset"),isNaN(i)?i=9:(window.localStorage.removeItem(o),window.localStorage.setItem(t,i.toString())));let c=window.localStorage.getItem(e);null===c&&(c=window.localStorage.getItem(n),null===c?c="":(window.localStorage.removeItem(n),window.localStorage.setItem(e,c))),T.set("brightness",i).set("blur",parseInt(null!==(l=window.localStorage.getItem(a))&&void 0!==l?l:"unset")||0).set("backgroundImageURL",c)}catch(e){return alert(x(e.message)),!1}return!0}()&&function(){const e=T.get("isDarkTheme"),n=new $({targetElement:document.documentElement,classNameToChange:e?u:m,classNameToChangeInto:e?m:u});try{n.onClassChange((()=>{S({text:"🛑 It looks like you've changed the theme. Discord will refresh in 5 seconds.",timeout:5e3}).then((()=>{n.unobserve(),location.reload()}))})).observe({attributes:!0,attributeFilter:["class"]})}catch(e){return alert(x(e.message)),!1}return N.set("themeChangeObserver",n),!0}()&&function(){const e=_(".app-3xd6d0");if(null===e)return!1;const n=document.querySelector(C),t=L({elementName:"style",appendTo:document.head,htmlProps:{id:r,innerHTML:E()}});return y.set("overlayBarElement",n).set("overlayDarkenerElement",e).set("mainStyleSheet",t),!0}()))return void B();L({elementName:"style",appendTo:document.head,htmlProps:{id:c,innerHTML:".TRANSPARENCY__ALERT { \n  position: absolute;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n  padding: 20px;\n  font-size: 14px;\n  width: fit-content;\n  width: -moz-fit-content;\n  max-width: 450px;\n  background-color: rgba(0,0,0,0.6);\n  backdrop-filter: blur(8px);\n  color: white;\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  z-index: 10000;\n  box-shadow: 0px 13px 10px -5px rgba(0,0,0,0.5);\n  transition: transform 500ms ease;\n  animation: TRANSPARENCY__ALERT-SLIDE 500ms ease;\n}\n\n@keyframes TRANSPARENCY__ALERT-SLIDE {\n  from { transform: translateY(-130%); }\n  to { transform: translateY(0) }\n}\n\n.TRANSPARENCY__ALERT--INACTIVE {\n  transform: translateY(-130%);\n}"}});const{actionsPanel:p,toggleActionsPanel:h}=function(){const e=L({elementName:"div",appendTo:document.body,htmlProps:{id:s}}),n=L({elementName:"div",appendTo:document.body,htmlProps:{id:l}}),t=function(e,n){const t=y.get("mainStyleSheet");let o;return function(){const a=e.classList.contains(d),r=t.hasAttribute("media");if(clearTimeout(o),!a&&!r)return e.style.display="block",n.style.display="block",void setTimeout((()=>e.classList.add(d)),20);a&&(e.classList.remove(d),n.style.display="none",o=setTimeout((()=>{e.style.display="none"}),1e3))}}(e,n);n.onclick=t,L({elementName:"style",appendTo:document.head,htmlProps:{id:i,innerHTML:w}}),null!==y.get("overlayBarElement")&&(e.style.paddingTop="20px");for(const n of P){const t=L({elementName:"div",appendTo:e,htmlProps:{className:g,textContent:n.name}});t.onclick=()=>R(n,t)}return{actionsPanel:e,toggleActionsPanel:t}}();S({text:"Welcome! <br><br>To toggle the actions panel, press <b>CTRL + SHIFT + X</b><br>To toggle the theme, press <b>CTRL + D</b>",timeout:1e4,containsHTML:!0}).then((()=>{(function(){const e=T.get("isDarkTheme"),n=y.get("overlayBarElement");if(null!==n)return!e&&n.classList.contains(u);const t=_(".bg-1QIAus");return null!==t&&!e&&t.classList.contains(u)})()&&(S({text:"<b>🛑 Warning</b><br><br>Your sidebar is currently dark themed.<br>For proper text visibility, disable its dark theme in Settings > Appearance.<br><br>The theme has disabled itself. After disabling the sidebar's dark theme, you can reactivate the theme by pressing <b>CTRL + D</b>. <u>No need to refresh</u>.",timeout:15e3,containsHTML:!0}),f(p))})),window.onkeydown=e=>{e.ctrlKey&&(e.shiftKey&&"KeyX"===e.code&&(e.preventDefault(),h()),"KeyD"===e.code&&(e.preventDefault(),f(p)))}}()})();