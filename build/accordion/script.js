!function(){"use strict";class t{constructor(t){this.rootEl=t,this.buttonEl=this.rootEl.querySelector("button[aria-expanded]");const e=this.buttonEl.getAttribute("aria-controls");this.contentEl=document.getElementById(e),this.buttonEl.setAttribute("aria-expanded","false"),this.open=!1,this.contentEl.setAttribute("hidden",""),this.buttonEl.addEventListener("click",this.onButtonClick.bind(this))}onButtonClick(){this.toggle(!this.open)}toggle(t){t!==this.open&&(this.open=t,this.buttonEl.setAttribute("aria-expanded",`${t}`),t?this.contentEl.removeAttribute("hidden"):this.contentEl.setAttribute("hidden",""))}open(){this.toggle(!0)}close(){this.toggle(!1)}}document.querySelectorAll(".wp-block-wpe-accordion h3").forEach((e=>{new t(e)}))}();