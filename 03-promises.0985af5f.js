!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequire7bc7;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequire7bc7=i);var r=i("iU1Pc"),a=document.querySelector(".form");function u(e,n){var o=Math.random()>.3;return new Promise((function(t,i){setInterval((function(){o?t({position:e,delay:n}):i({position:e,delay:n})}),n)}))}a.addEventListener("submit",(function(n){n.preventDefault();for(var o=Number(a.delay.value),t=Number(a.step.value),i=Number(a.amount.value),l=1;l<=i;l+=1)u(l,o).then((function(n){var o=n.position,t=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),o+=t}))}();
//# sourceMappingURL=03-promises.0985af5f.js.map