!function(){var t,e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),o=document.querySelector("body");function r(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}e.addEventListener("click",(function(){e.disabled=!0,o.style.backgroundColor=r(),t=setInterval((function(){o.style.backgroundColor=r()}),1e3),n.disabled=!1})),n.addEventListener("click",(function(){e.disabled=!1,clearInterval(t),n.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.c2809bc6.js.map
