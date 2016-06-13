"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};!function(t,e){t.wand=e()}("undefined"!=typeof window?window:void 0,function(){var t={apndr:function(t,e){if("object"!==("undefined"==typeof t?"undefined":_typeof(t))||"object"!==("undefined"==typeof e?"undefined":_typeof(e))||Array.isArray(e))if("object"!==("undefined"==typeof t?"undefined":_typeof(t)))console.error("First parameter passed is not an object element.");else if("object"!==("undefined"==typeof e?"undefined":_typeof(e)))"string"!=typeof e&&"number"!=typeof e||t.appendChild(this.txt(e));else if(Array.isArray(e))for(var r=e,n=0;n<r.length;n++)this.apndr(t,r[n]);else console.error("Parameters are not compatible in the lib.apndr function.  Hit the arrow on the left for call stack.");else t.appendChild(e)},querApndr:function(t,e,r){var n=document.querySelector(t);if(null!=n){if(Array.isArray(e))for(var o=e,i=0;i<o.length;i++)this.apndr(n,this.crtElm(o[i]));else r?this.apndr(n,this.crtElm(e,r)):this.apndr(n,e);return n}console.error("No tag exists in the DOM. Hit the arrow on the left for call stack.")},querAttr:function(t,e,r){var n=document.querySelector(t);null==n?console.error("No tag exists in the DOM. Hit the arrow on the left for call stack."):e&&n.setAttribute(e,r)},txt:function(t){return"string"==typeof t?document.createTextNode(t):"number"==typeof t?document.createTextNode(t.toString()):void console.error("Parameter passed to lib.txt is not a string nor a number.  Hit the arrow on the left for call stack.")},crtElm:function(t,e){var r,n=document.createElement(t);return e&&("string"==typeof e?(r=this.txt(e),this.apndr(n,r)):console.error("Must pass a string as the second param in lib.crtElm function.  Hit the arrow on the left for call stack.")),n}};return t});
"use strict";function changePlot(n){equPara.innerText="",katex.render("y = "+n,equPara),globalEqu=n}function dispConfig(n){var e=JSON.parse(n),a=wand.crtElm("select");a.name="equDrop";for(var o=0;o<e.length;o++){var t=wand.crtElm("option",e[o].name);t.value=e[o].equation,wand.apndr(a,t),wand.querApndr("#dropdown",a),0===o&&changePlot(e[o].equation)}}function loadConfig(n,e){var a=new XMLHttpRequest;a.onreadystatechange=function(){4==a.readyState&&200==a.status&&(config=a.responseText,n(config))},a.open("GET",e,!0),a.send()}var config,globalEqu,equPara=wand.querApndr("#functionMachine p");loadConfig(dispConfig,"../funcMachineSettings.json");
"use strict";function equAnimeDisappear(n,e,a,t){var i=n;i.style.animation="textDisappear 1.5s ease-in-out",n.addEventListener("animationend",function(){equPara.innerText="",a(i,e,t)})}function equAnimeAppear(n,e,a){var t=n;t.style.opacity=0,katex.render("y = "+e,equPara),t.style.animation="textAppear 1s ease-in-out",t.addEventListener("animationend",function(){if(t.style.opacity=1,"final"===a)return statusBar.innerText="",void wand.apndr(statusBar,">> Finished Calculations");if("stop"!==a){var i=math.eval(e);equAnimeDisappear(n,i,equAnimeAppear,"stop")}else equAnimeDisappear(n,globalEqu,equAnimeAppear,"final")})}function toFuncMachEnd(n){var e=globalEqu.replace("x","*"+n.target.innerText);equAnimeDisappear(equPara,e,equAnimeAppear),wand.apndr(statusBar,""),wand.apndr(statusBar,">> Calculating")}function animeToFuncMach(n,e,a,t){var i=e.right-50,r=e.top+7;return n.style.position="absolute",n.style.top=r+"px",n.style.left=i+"px",n.className="anime"+a,lastSheet.insertRule("@keyframes toFuncMachine"+a+" {\n                            0% {\n                                opacity: 0;\n                                top: "+r+"px;\n                                left: "+i+"px;\n                            }\n                            10% {\n                                opacity: 1;\n                            }\n                            33% {\n                                top: "+r+"px;\n                                left: 240px;\n                            }\n                            66% {\n                                top: 55px;\n                                left: 240px;\n                            }\n                            90% {\n                                opacity: 1;\n                            }\n                            100% {\n                                opacity: 0;\n                                top: 55px;\n                                left: 300px;\n                            }\n                        }",lastSheet.cssRules.length),n.style.animation="toFuncMachine"+a+" 3s ease-in-out "+7*t[0]+"s 1",n.style.opacity="0",n.style.zIndex="100",n.addEventListener("animationend",toFuncMachEnd),n}function animator(n){var e=wand.querApndr("#numContainer");e.innerHTML="";for(var a=0;a<n.length;a++){var t=wand.crtElm("p",n[a].num),i=animeToFuncMach(t,n[a].coorData,alphaid[a],[a]);wand.apndr(e,i)}}var lastSheet=document.styleSheets[document.styleSheets.length-1],alphaid=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r"],statusBar=wand.querApndr("#status p");
"use strict";!function(){var n=["input1","input2","input3","input4","input5","input6","input7","input8","input9","input10","input11","input12","input13","input14","input15","input16","input17","input18","input19"],t=[];document.onchange=function(n){"select"===n.target.localName&&(changePlot(n.target.value),console.log(globalEqu))},document.onclick=function(u){if("Go!"===u.target.value){t=[];for(var i=0;i<n.length;i++){var a=wand.querApndr("[name='"+n[i]+"']");if(a.value){var e={};e.coorData=a.getBoundingClientRect(),e.num=a.value,t.push(e)}}animator(t)}}}();
"use strict";!function(){for(var n,d,r,t,a=wand.querApndr("tbody"),w=19,p=1;w>=p;p++)t=wand.crtElm("input"),n=wand.crtElm("td"),d=wand.crtElm("td"),r=wand.crtElm("tr"),t.name="input"+p,t.type="number",wand.apndr(n,t),wand.apndr(r,[n,d]),wand.apndr(a,r)}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbmQuanMiLCJhamF4LmpzIiwiYW5pbWF0b3IuanMiLCJldmVudHMuanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm9iaiIsImNvbnN0cnVjdG9yIiwiZ2xvIiwibGliIiwid2FuZCIsIndpbmRvdyIsInVuZGVmaW5lZCIsImFwbmRyIiwiYSIsImIiLCJBcnJheSIsImlzQXJyYXkiLCJjb25zb2xlIiwiZXJyb3IiLCJhcHBlbmRDaGlsZCIsInRoaXMiLCJ0eHQiLCJhcnIiLCJpIiwibGVuZ3RoIiwicXVlckFwbmRyIiwiYyIsImVsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNydEVsbSIsInF1ZXJBdHRyIiwic2V0QXR0cmlidXRlIiwiY3JlYXRlVGV4dE5vZGUiLCJ0b1N0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJjaGFuZ2VQbG90IiwidmFsIiwiZXF1UGFyYSIsImlubmVyVGV4dCIsImthdGV4IiwicmVuZGVyIiwiZ2xvYmFsRXF1IiwiZGlzcENvbmZpZyIsInBhcnNlZE9iaiIsIkpTT04iLCJwYXJzZSIsInNlbGVjdCIsIm5hbWUiLCJvcHQiLCJ2YWx1ZSIsImVxdWF0aW9uIiwibG9hZENvbmZpZyIsImZ1bmMiLCJzZWFyY2giLCJ4aHR0cCIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsImNvbmZpZyIsInJlc3BvbnNlVGV4dCIsIm9wZW4iLCJzZW5kIiwiZXF1QW5pbWVEaXNhcHBlYXIiLCJjaGFuZ2VFcXUiLCJzdGF0ZSIsImUiLCJzdHlsZSIsImFuaW1hdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlcXVBbmltZUFwcGVhciIsIm9wYWNpdHkiLCJzdGF0dXNCYXIiLCJldmFsTnVtIiwibWF0aCIsImV2YWwiLCJ0b0Z1bmNNYWNoRW5kIiwicmVwbGFjZSIsInRhcmdldCIsImFuaW1lVG9GdW5jTWFjaCIsIm51bWUiLCJhdyIsImlkIiwiZGVsYXkiLCJsZWZ0Q29vck9mZiIsInJpZ2h0IiwidG9wQ29vck9mZiIsInRvcCIsInBvc2l0aW9uIiwibGVmdCIsImNsYXNzTmFtZSIsImxhc3RTaGVldCIsImluc2VydFJ1bGUiLCJjc3NSdWxlcyIsInpJbmRleCIsImFuaW1hdG9yIiwibnVtQ29udGFpbmVyIiwiaW5uZXJIVE1MIiwibnVtIiwibnVtV2l0aEFuaW1lIiwiY29vckRhdGEiLCJhbHBoYWlkIiwic3R5bGVTaGVldHMiLCJpbnB1dE9wdCIsImFuaW1hdGVXYWl0Iiwib25jaGFuZ2UiLCJsb2NhbE5hbWUiLCJsb2ciLCJvbmNsaWNrIiwiaW5wdXQiLCJhbmlEYXRhIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicHVzaCIsInRkMSIsInRkMiIsInRyIiwidGJvZHkiLCJyb3dDb3VudCIsImoiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUVBLElBQUlBLFNBQTRCLGtCQUFYQyxTQUFvRCxnQkFBcEJBLFFBQU9DLFNBQXdCLFNBQVVDLEdBQU8sYUFBY0EsSUFBUyxTQUFVQSxHQUFPLE1BQU9BLElBQXlCLGtCQUFYRixTQUF5QkUsRUFBSUMsY0FBZ0JILE9BQVMsZUFBa0JFLEtBSXpPLFNBQVVFLEVBQUtDLEdBQ1pELEVBQUlFLEtBQU9ELEtBQ0ssbUJBQVhFLFFBQXlCQSxPQUFoQ0MsT0FBK0MsV0FDN0MsR0FBSUgsSUFDQUksTUFBTyxTQUFVQyxFQUFHQyxHQUNoQixHQUFpQixZQUFiLG1CQUFPRCxHQUFQLFlBQUFYLFFBQU9XLEtBQStCLFlBQWIsbUJBQU9DLEdBQVAsWUFBQVosUUFBT1ksS0FBbUJDLE1BQU1DLFFBQVFGLEdBRTlELEdBQWlCLFlBQWIsbUJBQU9ELEdBQVAsWUFBQVgsUUFBT1csSUFDZEksUUFBUUMsTUFBTSx3REFDWCxJQUFpQixZQUFiLG1CQUFPSixHQUFQLFlBQUFaLFFBQU9ZLElBQ0csZ0JBQU5BLElBQStCLGdCQUFOQSxJQUNoQ0QsRUFBRU0sWUFBWUMsS0FBS0MsSUFBSVAsUUFFeEIsSUFB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dUQsRUFBWVEsS0FBS0YsSUFHekJmLFNBQVNTO0FDN0JyQixjQUFDLFdBV0csSUFBSyxHQU5EUyxHQUNBQyxFQUNBQyxFQUNBTixFQUpBTyxFQUFRNUcsS0FBS2dCLFVBQVUsU0FLdkI2RixFQUFXLEdBRU5DLEVBQUksRUFBUUQsR0FBTEMsRUFBZUEsSUFDM0JULEVBQVFyRyxLQUFLcUIsT0FBTyxTQUNwQm9GLEVBQU16RyxLQUFLcUIsT0FBTyxNQUNsQnFGLEVBQU0xRyxLQUFLcUIsT0FBTyxNQUNsQnNGLEVBQUszRyxLQUFLcUIsT0FBTyxNQUVqQmdGLEVBQU05RCxLQUFOLFFBQXFCdUUsRUFDckJULEVBQU1VLEtBQU8sU0FFYi9HLEtBQUtHLE1BQU1zRyxFQUFLSixHQUNoQnJHLEtBQUtHLE1BQU13RyxHQUFLRixFQUFLQyxJQUNyQjFHLEtBQUtHLE1BQU15RyxFQUFPRCIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG5UaGlzIGlzIGEgY3VzdG9tIGxpYnJhcnkgdGhhdCBJIG1hZGUgdG8gbWFrZSBET00gbWFuaXB1bGF0aW9uIGEgbGl0dGxlIGJpdCBmYXN0ZXJcblxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbihmdW5jdGlvbiAoZ2xvLCBsaWIpIHtcbiAgICBnbG8ud2FuZCA9IGxpYigpO1xufSh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdGhpcywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBsaWIgPSB7XG4gICAgICAgIGFwbmRyOiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBiID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGIpKSB7XG4gICAgICAgICAgICAgICAgYS5hcHBlbmRDaGlsZChiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGEgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmlyc3QgcGFyYW1ldGVyIHBhc3NlZCBpcyBub3QgYW4gb2JqZWN0IGVsZW1lbnQuXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYiAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYiA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgYiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICBhLmFwcGVuZENoaWxkKHRoaXMudHh0KGIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYikpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJyID0gYjtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwbmRyKGEsIGFycltpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUGFyYW1ldGVycyBhcmUgbm90IGNvbXBhdGlibGUgaW4gdGhlIGxpYi5hcG5kciBmdW5jdGlvbi4gIEhpdCB0aGUgYXJyb3cgb24gdGhlIGxlZnQgZm9yIGNhbGwgc3RhY2suXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBxdWVyQXBuZHI6IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgICAgICB2YXIgZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhKTtcbiAgICAgICAgICAgIGlmIChlbGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyB0YWcgZXhpc3RzIGluIHRoZSBET00uIEhpdCB0aGUgYXJyb3cgb24gdGhlIGxlZnQgZm9yIGNhbGwgc3RhY2suXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShiKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gYjtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBuZHIoZWxlLCB0aGlzLmNydEVsbShhcnJbaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwbmRyKGVsZSwgdGhpcy5jcnRFbG0oYiwgYykpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBuZHIoZWxlLCBiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBxdWVyQXR0cjogZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgICAgIHZhciBlbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGEpO1xuICAgICAgICAgICAgaWYgKGVsZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIHRhZyBleGlzdHMgaW4gdGhlIERPTS4gSGl0IHRoZSBhcnJvdyBvbiB0aGUgbGVmdCBmb3IgY2FsbCBzdGFjay5cIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoYiwgYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0eHQ6IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQYXJhbWV0ZXIgcGFzc2VkIHRvIGxpYi50eHQgaXMgbm90IGEgc3RyaW5nIG5vciBhIG51bWJlci4gIEhpdCB0aGUgYXJyb3cgb24gdGhlIGxlZnQgZm9yIGNhbGwgc3RhY2suXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcnRFbG06IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICB2YXIgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhKSxcbiAgICAgICAgICAgICAgICB0eHQ7XG4gICAgICAgICAgICBpZiAoYikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB0eHQgPSB0aGlzLnR4dChiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcG5kcihlbGUsIHR4dCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk11c3QgcGFzcyBhIHN0cmluZyBhcyB0aGUgc2Vjb25kIHBhcmFtIGluIGxpYi5jcnRFbG0gZnVuY3Rpb24uICBIaXQgdGhlIGFycm93IG9uIHRoZSBsZWZ0IGZvciBjYWxsIHN0YWNrLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZWxlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsaWI7XG59KSk7XG4iLCIgICAgdmFyIGNvbmZpZyxcbiAgICAgICAgZ2xvYmFsRXF1LFxuICAgICAgICBlcXVQYXJhID0gd2FuZC5xdWVyQXBuZHIoXCIjZnVuY3Rpb25NYWNoaW5lIHBcIik7XG5cbi8vRGlwc2xheSBLYXRleCBlcXVhdGlvblxuICAgIGZ1bmN0aW9uIGNoYW5nZVBsb3QodmFsKSB7XG4gICAgICAgIGVxdVBhcmEuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICAgICAga2F0ZXgucmVuZGVyKGB5ID0gJHt2YWx9YCwgZXF1UGFyYSk7XG4gICAgICAgIGdsb2JhbEVxdSA9IHZhbDtcbiAgICB9XG5cbiAgICAvKkFKQVggUkVRVUVTVCBUTyBGVU5DTUFDSElORVNFVFRJTkdTLkpTIEFORCBMT0FEKi9cbiAgICBmdW5jdGlvbiBkaXNwQ29uZmlnKGMpIHtcbiAgICAgICAgdmFyIHBhcnNlZE9iaiA9IEpTT04ucGFyc2UoYyksXG4gICAgICAgICAgICBzZWxlY3QgPSB3YW5kLmNydEVsbShcInNlbGVjdFwiKTtcbiAgICAgICAgc2VsZWN0Lm5hbWUgPSBcImVxdURyb3BcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJzZWRPYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvcHQgPSB3YW5kLmNydEVsbShcIm9wdGlvblwiLCBwYXJzZWRPYmpbaV0ubmFtZSk7XG4gICAgICAgICAgICBvcHQudmFsdWUgPSBwYXJzZWRPYmpbaV0uZXF1YXRpb247XG4vLyAgICAgICAgICBvcHQuY2xhc3MgPSBKU09OLnN0cmluZ2lmeShwYXJzZWRPYmpbaV0ud2luZG93KTtcbiAgICAgICAgICAgIHdhbmQuYXBuZHIoc2VsZWN0LCBvcHQpO1xuICAgICAgICAgICAgd2FuZC5xdWVyQXBuZHIoXCIjZHJvcGRvd25cIiwgc2VsZWN0KTtcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlUGxvdChwYXJzZWRPYmpbaV0uZXF1YXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4vL0xvYWQgaW4gdGhlIGNvbmZpZ3VyYXRpb24gZmlsZVxuICAgIGZ1bmN0aW9uIGxvYWRDb25maWcoZnVuYywgc2VhcmNoKSB7XG4gICAgICAgIHZhciB4aHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoeGh0dHAucmVhZHlTdGF0ZSA9PSA0ICYmIHhodHRwLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICBjb25maWcgPSB4aHR0cC5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgICAgZnVuYyhjb25maWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB4aHR0cC5vcGVuKFwiR0VUXCIsIHNlYXJjaCwgdHJ1ZSk7XG4gICAgICAgIHhodHRwLnNlbmQoKTtcbiAgICB9XG5cbiAgICBsb2FkQ29uZmlnKGRpc3BDb25maWcsIFwiLi4vZnVuY01hY2hpbmVTZXR0aW5ncy5qc29uXCIpO1xuIiwidmFyIGxhc3RTaGVldCA9IGRvY3VtZW50LnN0eWxlU2hlZXRzW2RvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aCAtIDFdO1xuXG4vLyBUT0RPOiBGdW5jdGlvbiBtYWNoaW5lIGluXG4vLyBUT0RPOiBNYWtlIHN1cmUgdGhlIGRvIHRoZSBhbmltYXRpb25zIG9uIHRoZSB0ZXh0XG5cbi8vQWxwaGEgSUQgaXMgdG8gaWRlbnRpZnkgdGhlIDE1IGRpZmZlcmVudCBhbmltYXRpb25zIHRoYXQgY291bGQgaGFwcGVuIGluIHRoZSBhcHBsaWNhdGlvblxudmFyIGFscGhhaWQgPSBbJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCcsICdpJywgJ2onLCAnaycsICdsJywgJ20nLCAnbicsICdvJywgJ3AnLCAncScsICdyJ10sXG4gICAgc3RhdHVzQmFyID0gd2FuZC5xdWVyQXBuZHIoXCIjc3RhdHVzIHBcIik7XG5cbmZ1bmN0aW9uIGVxdUFuaW1lRGlzYXBwZWFyKGVsZSwgY2hhbmdlRXF1LCBmdW5jLCBzdGF0ZSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIHZhciBlID0gZWxlO1xuICAgIGUuc3R5bGUuYW5pbWF0aW9uID0gJ3RleHREaXNhcHBlYXIgMS41cyBlYXNlLWluLW91dCc7XG4gICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBlcXVQYXJhLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgICAgIGZ1bmMoZSwgY2hhbmdlRXF1LCBzdGF0ZSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGVxdUFuaW1lQXBwZWFyKGVsZSwgY2hhbmdlRXF1LCBzdGF0ZSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIHZhciBlID0gZWxlO1xuICAgIGUuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAga2F0ZXgucmVuZGVyKGB5ID0gJHtjaGFuZ2VFcXV9YCwgZXF1UGFyYSk7XG4gICAgZS5zdHlsZS5hbmltYXRpb24gPSAndGV4dEFwcGVhciAxcyBlYXNlLWluLW91dCc7XG4gICAgZS5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZS5zdHlsZS5vcGFjaXR5ID0gMTtcblxuICAgICAgICBpZiAoc3RhdGUgPT09IFwiZmluYWxcIikge1xuICAgICAgICAgICAgc3RhdHVzQmFyLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgICAgICAgICB3YW5kLmFwbmRyKHN0YXR1c0JhciwgXCI+PiBGaW5pc2hlZCBDYWxjdWxhdGlvbnNcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgIT09IFwic3RvcFwiKSB7XG4gICAgICAgICAgICB2YXIgZXZhbE51bSA9IG1hdGguZXZhbChjaGFuZ2VFcXUpO1xuICAgICAgICAgICAgZXF1QW5pbWVEaXNhcHBlYXIoZWxlLCBldmFsTnVtLCBlcXVBbmltZUFwcGVhciwgXCJzdG9wXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXF1QW5pbWVEaXNhcHBlYXIoZWxlLCBnbG9iYWxFcXUsIGVxdUFuaW1lQXBwZWFyLCBcImZpbmFsXCIpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuLy9DaGFuZ2UgdGhlIEthdGV4IGVxdWF0aW9uIGZyb20gdGhlIHNlbGVjdGVkIGlucHV0IGJveC5cbmZ1bmN0aW9uIHRvRnVuY01hY2hFbmQoZSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIC8vZ2xvYmFsRXF1IGFuZCBlcXVQYXJhIGFzc2lnbmVkIGluIGFqYXguanNcbiAgICB2YXIgY2hhbmdlRXF1ID0gZ2xvYmFsRXF1LnJlcGxhY2UoXCJ4XCIsIGAqJHtlLnRhcmdldC5pbm5lclRleHR9YCk7XG4gICAgZXF1QW5pbWVEaXNhcHBlYXIoZXF1UGFyYSwgY2hhbmdlRXF1LCBlcXVBbmltZUFwcGVhcik7XG5cbiAgICB3YW5kLmFwbmRyKHN0YXR1c0JhciwgXCJcIik7XG4gICAgd2FuZC5hcG5kcihzdGF0dXNCYXIsIFwiPj4gQ2FsY3VsYXRpbmdcIik7XG59XG5cbi8vRHluYW1pY2FsbHkgbW9kaWZ5IHRoZSBDU1MgYW5pbWF0aW9ucyBvZiB0aGUgMTUgaW5wdXQgYm94ZXNcbmZ1bmN0aW9uIGFuaW1lVG9GdW5jTWFjaChudW1lLCBhdywgaWQsIGRlbGF5KSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgdmFyIGxlZnRDb29yT2ZmID0gYXcucmlnaHQgLSA1MCxcbiAgICAgICAgdG9wQ29vck9mZiA9IGF3LnRvcCArIDc7XG4gICAgbnVtZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBudW1lLnN0eWxlLnRvcCA9IGAke3RvcENvb3JPZmZ9cHhgO1xuICAgIG51bWUuc3R5bGUubGVmdCA9IGAke2xlZnRDb29yT2ZmfXB4YDtcbiAgICBudW1lLmNsYXNzTmFtZSA9IGBhbmltZSR7aWR9YFxuICAgIGxhc3RTaGVldC5pbnNlcnRSdWxlKGBAa2V5ZnJhbWVzIHRvRnVuY01hY2hpbmUke2lkfSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6ICR7dG9wQ29vck9mZn1weDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogJHtsZWZ0Q29vck9mZn1weDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMzMlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAke3RvcENvb3JPZmZ9cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDI0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA2NiUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDU1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDI0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA5MCUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAzMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9YCwgbGFzdFNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgbnVtZS5zdHlsZS5hbmltYXRpb24gPSBgdG9GdW5jTWFjaGluZSR7aWR9IDNzIGVhc2UtaW4tb3V0ICR7ZGVsYXlbMF0qN31zIDFgO1xuICAgIG51bWUuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICBudW1lLnN0eWxlLnpJbmRleCA9ICcxMDAnO1xuICAgIG51bWUuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCB0b0Z1bmNNYWNoRW5kKTtcbiAgICByZXR1cm4gbnVtZTtcbn1cblxuLy9IYW5kbGUgYWxsIENTUyBhbmltYXRpb25zXG5mdW5jdGlvbiBhbmltYXRvcihhdykge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIHZhciBudW1Db250YWluZXIgPSB3YW5kLnF1ZXJBcG5kcihcIiNudW1Db250YWluZXJcIik7XG4gICAgbnVtQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBudW1lID0gd2FuZC5jcnRFbG0oXCJwXCIsIGF3W2ldLm51bSk7XG5cbiAgICAgICAgdmFyIG51bVdpdGhBbmltZSA9IGFuaW1lVG9GdW5jTWFjaChudW1lLCBhd1tpXS5jb29yRGF0YSwgYWxwaGFpZFtpXSwgW2ldKTtcbiAgICAgICAgd2FuZC5hcG5kcihudW1Db250YWluZXIsIG51bVdpdGhBbmltZSk7XG4gICAgfVxufSIsIihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvL3JlZ2lzdGVyIGFsbCBpbnB1dHMgb24gdGhlIGFwcGxpY2F0aW9uXG4gICAgdmFyIGlucHV0T3B0ID0gW1wiaW5wdXQxXCIsIFwiaW5wdXQyXCIsIFwiaW5wdXQzXCIsIFwiaW5wdXQ0XCIsIFwiaW5wdXQ1XCIsIFwiaW5wdXQ2XCIsIFwiaW5wdXQ3XCIsIFwiaW5wdXQ4XCIsIFwiaW5wdXQ5XCIsIFwiaW5wdXQxMFwiLCBcImlucHV0MTFcIiwgXCJpbnB1dDEyXCIsIFwiaW5wdXQxM1wiLCBcImlucHV0MTRcIiwgXCJpbnB1dDE1XCIsIFwiaW5wdXQxNlwiLCBcImlucHV0MTdcIiwgXCJpbnB1dDE4XCIsIFwiaW5wdXQxOVwiXSxcbiAgICAgICAgYW5pbWF0ZVdhaXQgPSBbXTtcblxuICAgIC8qKioqRE9DVU1FTlQgT05DSEFOR0UgRVZFTlQgSEFORExFUioqKiovXG4gICAgZG9jdW1lbnQub25jaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQubG9jYWxOYW1lID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgICAgICAvL2NoYW5nZVBsb3QgZnVuY3Rpb24gaW4gYWpheC5qc1xuICAgICAgICAgICAgY2hhbmdlUGxvdChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhnbG9iYWxFcXUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKioqKkRPQ1VNRU5UIENMSUNLIEhBTkRMRVIqKioqKi9cbiAgICBkb2N1bWVudC5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIkdvIVwiKSB7XG4gICAgICAgICAgICBhbmltYXRlV2FpdCA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dE9wdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IHdhbmQucXVlckFwbmRyKGBbbmFtZT0nJHtpbnB1dE9wdFtpXX0nXWApO1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYW5pRGF0YSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBhbmlEYXRhLmNvb3JEYXRhID0gaW5wdXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGFuaURhdGEubnVtID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVXYWl0LnB1c2goYW5pRGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5pbWF0b3IoYW5pbWF0ZVdhaXQpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKSk7XG4iLCIoZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLyoqKipUQUJMRSBNQUtFUioqKiovXG4gICAgdmFyIHRib2R5ID0gd2FuZC5xdWVyQXBuZHIoXCJ0Ym9keVwiKSxcbiAgICAgICAgdGQxLFxuICAgICAgICB0ZDIsXG4gICAgICAgIHRyLFxuICAgICAgICBpbnB1dCxcbiAgICAgICAgcm93Q291bnQgPSAxOTtcblxuICAgIGZvciAodmFyIGogPSAxOyBqIDw9IHJvd0NvdW50OyBqKyspIHtcbiAgICAgICAgaW5wdXQgPSB3YW5kLmNydEVsbShcImlucHV0XCIpO1xuICAgICAgICB0ZDEgPSB3YW5kLmNydEVsbShcInRkXCIpO1xuICAgICAgICB0ZDIgPSB3YW5kLmNydEVsbShcInRkXCIpO1xuICAgICAgICB0ciA9IHdhbmQuY3J0RWxtKFwidHJcIik7XG5cbiAgICAgICAgaW5wdXQubmFtZSA9IGBpbnB1dCR7an1gO1xuICAgICAgICBpbnB1dC50eXBlID0gJ251bWJlcic7XG5cbiAgICAgICAgd2FuZC5hcG5kcih0ZDEsIGlucHV0KTtcbiAgICAgICAgd2FuZC5hcG5kcih0ciwgW3RkMSwgdGQyXSk7XG4gICAgICAgIHdhbmQuYXBuZHIodGJvZHksIHRyKTtcbiAgICB9XG59KCkpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
