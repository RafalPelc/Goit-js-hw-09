function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},o.parcelRequired7c6=r);var l=r("7Y9D8");document.querySelector(".form").addEventListener("submit",(function(o){o.preventDefault();const n=document.querySelector('[name="delay"]'),t=document.querySelector('[name="step"]'),r=document.querySelector('[name="amount"]'),u=parseInt(n.value),s=parseInt(t.value),a=parseInt(r.value);(function(e,o,n){let t=e,r=[];for(let e=1;e<=n;e++)r.push(i(e,t)),t+=o;return Promise.all(r)})(u,s,a).then((o=>{o.forEach((o=>{o.shouldResolve?e(l).Notify.success(`✅ Fulfilled promise ${o.position} in ${o.delay}ms`):e(l).Notify.failure(`❌ Rejected promise ${o.position} in ${o.delay}ms`)}))})).catch((e=>{console.error("Błąd:",e)}))}));const i=(e,o)=>new Promise((n=>{setTimeout((()=>{const t=Math.random()>.3;n({position:e,delay:o,shouldResolve:t})}),o)}));
//# sourceMappingURL=03-promises.e0b4b728.js.map
