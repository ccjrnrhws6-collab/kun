(function(){var k='kun-lang',l=localStorage.getItem(k)||((navigator.language||'').toLowerCase().indexOf('zh')==0?'zh-Hant':'en');
function s(x){document.documentElement.lang=x;localStorage.setItem(k,x)}s(l);
document.addEventListener('DOMContentLoaded',function(){var b=document.querySelector('button.lang');if(b)b.onclick=function(){s(document.documentElement.lang=='en'?'zh-Hant':'en')}})})();
