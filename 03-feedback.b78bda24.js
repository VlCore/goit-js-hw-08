function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var r,o,a,i,u,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,a=o;return r=o=void 0,c=t,i=e.apply(a,n)}function S(e){return c=e,u=setTimeout(j,t),l?b(e):i}function x(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=a}function j(){var e=v();if(x(e))return q(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?d(n,a-(e-c)):n}(e))}function q(e){return u=void 0,g&&r?b(e):(r=o=void 0,i)}function O(){var e=v(),n=x(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),i}return t=y(t)||0,p(n)&&(l=!!n.leading,a=(s="maxWait"in n)?m(y(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},O.flush=function(){return void 0===u?i:q(v())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||i.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const b={email:"",message:""};document.addEventListener("DOMContentLoaded",(function(){!function(){const e=document.querySelector(".feedback-form"),t=JSON.parse(localStorage.getItem("feedback-form-state"));if(t){const{email:n,message:r}=t,o=e.querySelector('input[name="email"]'),a=e.querySelector('textarea[name="message"]');o.value=n,a.value=r}}()})),document.addEventListener("input",e(t)((function(e){const t=e.target,n=t.querySelector('input[name="email"]'),r=t.querySelector('textarea[name="message"]');b.email=n.value,b.message=r.value,localStorage.setItem("feedback-form-state",JSON.stringify(b))}),500));document.querySelector(".feedback-form").addEventListener("submit",(function(e){e.preventDefault();const t=e.target,n=t.querySelector('input[name="email"]'),r=t.querySelector('textarea[name="message"]'),o={email:n.value,message:r.value};console.log(o),function(e){const t=e.target,n=t.querySelector('input[name="email"]'),r=t.querySelector('textarea[name="message"]');t.reset(),n.value="",r.value="",localStorage.removeItem("feedback-form-state")}(e)}));
//# sourceMappingURL=03-feedback.b78bda24.js.map
