"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function(e,t){e.wand=t()}("undefined"!=typeof window?window:void 0,function(){var e={apndr:function(e,t){if("object"!==("undefined"==typeof e?"undefined":_typeof(e))||"object"!==("undefined"==typeof t?"undefined":_typeof(t))||Array.isArray(t))if("object"!==("undefined"==typeof e?"undefined":_typeof(e)))console.error("First parameter passed is not an object element.");else if("object"!==("undefined"==typeof t?"undefined":_typeof(t)))"string"!=typeof t&&"number"!=typeof t||e.appendChild(this.txt(t));else if(Array.isArray(t))for(var r=t,o=0;o<r.length;o++)this.apndr(e,r[o]);else console.error("Parameters are not compatible in the lib.apndr function.  Hit the arrow on the left for call stack.");else e.appendChild(t)},querApndr:function(e,t,r){var o=document.querySelector(e);if(null!=o){if(Array.isArray(t))for(var n=t,i=0;i<n.length;i++)this.apndr(o,this.crtElm(n[i]));else t&&this.apndr(o,this.crtElm(t,r));return o}console.error("No tag exists in the DOM. Hit the arrow on the left for call stack.")},querAttr:function(e,t,r){var o=document.querySelector(e);null==o?console.error("No tag exists in the DOM. Hit the arrow on the left for call stack."):t&&o.setAttribute(t,r)},txt:function(e){return"string"==typeof e?document.createTextNode(e):"number"==typeof e?document.createTextNode(e.toString()):void console.error("Parameter passed to lib.txt is not a string nor a number.  Hit the arrow on the left for call stack.")},crtElm:function(e,t){var r,o=document.createElement(e);return t&&("string"==typeof t?(r=this.txt(t),this.apndr(o,r)):console.error("Must pass a string as the second param in lib.crtElm function.  Hit the arrow on the left for call stack.")),o}};return e});
"use strict";!function(){function n(n){console.log(n)}for(var a,r,d,t,e=wand.querApndr("tbody"),o=15,c=1;o>=c;c++)t=wand.crtElm("input"),a=wand.crtElm("td"),r=wand.crtElm("td"),d=wand.crtElm("tr"),wand.apndr(a,t),wand.apndr(d,[a,r]),wand.apndr(e,d);for(var l=["x^2","x^2","x^2","x^2","x^2","x^3"],w=0;w<l.length;w++){var u=wand.crtElm("div");katex.render(l[w],u);var p=wand.querApndr("#dropdown");wand.apndr(p,u)}document.onchange=function(a){console.log(a),"select"===a.target.localName&&n(a.target.value)}}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbmQuanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm9iaiIsImNvbnN0cnVjdG9yIiwiZ2xvIiwibGliIiwid2FuZCIsIndpbmRvdyIsInVuZGVmaW5lZCIsImFwbmRyIiwiYSIsImIiLCJBcnJheSIsImlzQXJyYXkiLCJjb25zb2xlIiwiZXJyb3IiLCJhcHBlbmRDaGlsZCIsInRoaXMiLCJ0eHQiLCJhcnIiLCJpIiwibGVuZ3RoIiwicXVlckFwbmRyIiwiYyIsImVsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNydEVsbSIsInF1ZXJBdHRyIiwic2V0QXR0cmlidXRlIiwiY3JlYXRlVGV4dE5vZGUiLCJ0b1N0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJjaGFuZ2VQbG90IiwibG9nIiwidGQxIiwidGQyIiwidHIiLCJpbnB1dCIsInRib2R5Iiwicm93Q291bnQiLCJqIiwibWF0aGZ1bmMiLCJlcXVEaXYiLCJrYXRleCIsInJlbmRlciIsImRyb3Bkb3duIiwib25jaGFuZ2UiLCJlIiwidGFyZ2V0IiwibG9jYWxOYW1lIiwidmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBRUEsSUFBSUEsU0FBNEIsa0JBQVhDLFNBQW9ELGdCQUFwQkEsUUFBT0MsU0FBd0IsU0FBVUMsR0FBTyxhQUFjQSxJQUFTLFNBQVVBLEdBQU8sTUFBT0EsSUFBeUIsa0JBQVhGLFNBQXlCRSxFQUFJQyxjQUFnQkgsT0FBUyxlQUFrQkUsS0FNek8sU0FBVUUsRUFBS0MsR0FDWkQsRUFBSUUsS0FBT0QsS0FDSyxtQkFBWEUsUUFBeUJBLE9BQWhDQyxPQUErQyxXQUM3QyxHQUFJSCxJQUNBSSxNQUFPLFNBQVVDLEVBQUdDLEdBQ2hCLEdBQWlCLFlBQWIsbUJBQU9ELEdBQVAsWUFBQVgsUUFBT1csS0FBK0IsWUFBYixtQkFBT0MsR0FBUCxZQUFBWixRQUFPWSxLQUFtQkMsTUFBTUMsUUFBUUYsR0FFOUQsR0FBaUIsWUFBYixtQkFBT0QsR0FBUCxZQUFBWCxRQUFPVyxJQUNkSSxRQUFRQyxNQUFNLHdEQUNYLElBQWlCLFlBQWIsbUJBQU9KLEdBQVAsWUFBQVosUUFBT1ksSUFDRyxnQkFBTkEsSUFBK0IsZ0JBQU5BLElBQ2hDRCxFQUFFTSxZQUFZQyxLQUFLQyxJQUFJUCxRQUV4QixJQUFJQyxNQUFNQyxRQUFRRixHQUVyQixJQUFLLEdBRERRLEdBQU1SLEVBQ0RTLEVBQUksRUFBR0EsRUFBSUQsRUFBSUUsT0FBUUQsSUFDNUJILEtBQUtSLE1BQU1DLEVBQUdTLEVBQUlDLFFBR3RCTixTQUFRQyxNQUFNLDJHQWJkTCxHQUFFTSxZQUFZTCxJQWdCdEJXLFVBQVcsU0FBVVosRUFBR0MsRUFBR1ksR0FDdkIsR0FBSUMsR0FBTUMsU0FBU0MsY0FBY2hCLEVBQ2pDLElBQVcsTUFBUGMsRUFFRyxDQUNILEdBQUlaLE1BQU1DLFFBQVFGLEdBRWQsSUFBSyxHQUREUSxHQUFNUixFQUNEUyxFQUFJLEVBQUdBLEVBQUlELEVBQUlFLE9BQVFELElBQzVCSCxLQUFLUixNQUFNZSxFQUFLUCxLQUFLVSxPQUFPUixFQUFJQyxTQUU3QlQsSUFDUE0sS0FBS1IsTUFBTWUsRUFBS1AsS0FBS1UsT0FBT2hCLEVBQUdZLEdBRW5DLE9BQU9DLEdBVlBWLFFBQVFDLE1BQU0sd0VBYXRCYSxTQUFVLFNBQVVsQixFQUFHQyxFQUFHWSxHQUN0QixHQUFJQyxHQUFNQyxTQUFTQyxjQUFjaEIsRUFDdEIsT0FBUGMsRUFDQVYsUUFBUUMsTUFBTSx1RUFFVkosR0FDQWEsRUFBSUssYUFBYWxCLEVBQUdZLElBSWhDTCxJQUFLLFNBQVVSLEdBQ1gsTUFBaUIsZ0JBQU5BLEdBQ0FlLFNBQVNLLGVBQWVwQixHQUNYLGdCQUFOQSxHQUNQZSxTQUFTSyxlQUFlcEIsRUFBRXFCLGdCQUVqQ2pCLFNBQVFDLE1BQU0seUdBR3RCWSxPQUFRLFNBQVVqQixFQUFHQyxHQUNqQixHQUNJTyxHQURBTSxFQUFNQyxTQUFTTyxjQUFjdEIsRUFVakMsT0FSSUMsS0FDaUIsZ0JBQU5BLElBQ1BPLEVBQU1ELEtBQUtDLElBQUlQLEdBQ2ZNLEtBQUtSLE1BQU1lLEVBQUtOLElBRWhCSixRQUFRQyxNQUFNLDhHQUdmUyxHQUdmLE9BQU9uQjtBQy9FWCxjQUFDLFdBR0csUUFBUzRCLEdBQVd2QixHQUNoQkksUUFBUW9CLElBQUl4QixHQVdoQixJQUFLLEdBTkR5QixHQUNBQyxFQUNBQyxFQUNBQyxFQUpBQyxFQUFRakMsS0FBS2dCLFVBQVUsU0FLdkJrQixFQUFXLEdBRU5DLEVBQUksRUFBUUQsR0FBTEMsRUFBZUEsSUFDM0JILEVBQVFoQyxLQUFLcUIsT0FBTyxTQUNwQlEsRUFBTTdCLEtBQUtxQixPQUFPLE1BQ2xCUyxFQUFNOUIsS0FBS3FCLE9BQU8sTUFDbEJVLEVBQUsvQixLQUFLcUIsT0FBTyxNQUVqQnJCLEtBQUtHLE1BQU0wQixFQUFLRyxHQUNoQmhDLEtBQUtHLE1BQU00QixHQUFLRixFQUFLQyxJQUNyQjlCLEtBQUtHLE1BQU04QixFQUFPRixFQWF0QixLQUFLLEdBVERLLElBQVcsTUFBQSxNQUFBLE1BQUEsTUFBQSxNQUFBLE9BU050QixFQUFJLEVBQUdBLEVBQUlzQixFQUFTckIsT0FBUUQsSUFBSyxDQUN0QyxHQUFJdUIsR0FBU3JDLEtBQUtxQixPQUFPLE1BQ3pCaUIsT0FBTUMsT0FBT0gsRUFBU3RCLEdBQUl1QixFQUMxQixJQUFJRyxHQUFXeEMsS0FBS2dCLFVBQVUsWUFDOUJoQixNQUFLRyxNQUFNcUMsRUFBVUgsR0FJekJsQixTQUFTc0IsU0FBVyxTQUFVQyxHQUMxQmxDLFFBQVFvQixJQUFJYyxHQUNlLFdBQXZCQSxFQUFFQyxPQUFPQyxXQUNUakIsRUFBV2UsRUFBRUMsT0FBT0UiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqXG5cblRoaXMgaXMgYSBjdXN0b20gbWFkZSBsaWJyYXJ5IG5hbWVkIFwid2FuZFwiIHRoYXQgSSBtYWRlIHRvIGhhbmRsZSBzb21lIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBJIHdhbnQgdG8gZG8gaW4gdGhpcyBhcHBsaWNhdGlvbi5cblxuLUFuZHJldyBHcmVtbGljaFxuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuKGZ1bmN0aW9uIChnbG8sIGxpYikge1xuICAgIGdsby53YW5kID0gbGliKCk7XG59KHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxpYiA9IHtcbiAgICAgICAgYXBuZHI6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGEgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGIgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoYikpIHtcbiAgICAgICAgICAgICAgICBhLmFwcGVuZENoaWxkKGIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGaXJzdCBwYXJhbWV0ZXIgcGFzc2VkIGlzIG5vdCBhbiBvYmplY3QgZWxlbWVudC5cIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBiICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBiID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBiID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGEuYXBwZW5kQ2hpbGQodGhpcy50eHQoYikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShiKSkge1xuICAgICAgICAgICAgICAgIHZhciBhcnIgPSBiO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBuZHIoYSwgYXJyW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQYXJhbWV0ZXJzIGFyZSBub3QgY29tcGF0aWJsZSBpbiB0aGUgbGliLmFwbmRyIGZ1bmN0aW9uLiAgSGl0IHRoZSBhcnJvdyBvbiB0aGUgbGVmdCBmb3IgY2FsbCBzdGFjay5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHF1ZXJBcG5kcjogZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgICAgIHZhciBlbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGEpO1xuICAgICAgICAgICAgaWYgKGVsZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIHRhZyBleGlzdHMgaW4gdGhlIERPTS4gSGl0IHRoZSBhcnJvdyBvbiB0aGUgbGVmdCBmb3IgY2FsbCBzdGFjay5cIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBiO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcG5kcihlbGUsIHRoaXMuY3J0RWxtKGFycltpXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBuZHIoZWxlLCB0aGlzLmNydEVsbShiLCBjKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBlbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHF1ZXJBdHRyOiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICAgICAgdmFyIGVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYSk7XG4gICAgICAgICAgICBpZiAoZWxlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gdGFnIGV4aXN0cyBpbiB0aGUgRE9NLiBIaXQgdGhlIGFycm93IG9uIHRoZSBsZWZ0IGZvciBjYWxsIHN0YWNrLlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlLnNldEF0dHJpYnV0ZShiLCBjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHR4dDogZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGEgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlBhcmFtZXRlciBwYXNzZWQgdG8gbGliLnR4dCBpcyBub3QgYSBzdHJpbmcgbm9yIGEgbnVtYmVyLiAgSGl0IHRoZSBhcnJvdyBvbiB0aGUgbGVmdCBmb3IgY2FsbCBzdGFjay5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNydEVsbTogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHZhciBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGEpLFxuICAgICAgICAgICAgICAgIHR4dDtcbiAgICAgICAgICAgIGlmIChiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBiID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHR4dCA9IHRoaXMudHh0KGIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwbmRyKGVsZSwgdHh0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTXVzdCBwYXNzIGEgc3RyaW5nIGFzIHRoZSBzZWNvbmQgcGFyYW0gaW4gbGliLmNydEVsbSBmdW5jdGlvbi4gIEhpdCB0aGUgYXJyb3cgb24gdGhlIGxlZnQgZm9yIGNhbGwgc3RhY2suXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxpYjtcbn0pKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VQbG90KGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYSk7XG4gICAgfVxuXG4gICAgLyoqKipUQUJMRSBNQUtFUioqKiovXG4gICAgdmFyIHRib2R5ID0gd2FuZC5xdWVyQXBuZHIoXCJ0Ym9keVwiKSxcbiAgICAgICAgdGQxLFxuICAgICAgICB0ZDIsXG4gICAgICAgIHRyLFxuICAgICAgICBpbnB1dCxcbiAgICAgICAgcm93Q291bnQgPSAxNTtcblxuICAgIGZvciAodmFyIGogPSAxOyBqIDw9IHJvd0NvdW50OyBqKyspIHtcbiAgICAgICAgaW5wdXQgPSB3YW5kLmNydEVsbShcImlucHV0XCIpO1xuICAgICAgICB0ZDEgPSB3YW5kLmNydEVsbShcInRkXCIpO1xuICAgICAgICB0ZDIgPSB3YW5kLmNydEVsbShcInRkXCIpO1xuICAgICAgICB0ciA9IHdhbmQuY3J0RWxtKFwidHJcIik7XG5cbiAgICAgICAgd2FuZC5hcG5kcih0ZDEsIGlucHV0KTtcbiAgICAgICAgd2FuZC5hcG5kcih0ciwgW3RkMSwgdGQyXSk7XG4gICAgICAgIHdhbmQuYXBuZHIodGJvZHksIHRyKTtcbiAgICB9XG5cbiAgICAvKioqKkRST1BET1dOIE1BS0VSKioqKi9cbiAgICB2YXIgbWF0aGZ1bmMgPSBbXG4gICAgICAgICAgYHheMmAsXG4gICAgICAgICAgYHheMmAsXG4gICAgICAgICAgYHheMmAsXG4gICAgICAgICAgYHheMmAsXG4gICAgICAgICAgYHheMmAsXG4gICAgICAgICAgYHheM2BcbiAgICAgICBdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRoZnVuYy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXF1RGl2ID0gd2FuZC5jcnRFbG0oXCJkaXZcIik7XG4gICAgICAgIGthdGV4LnJlbmRlcihtYXRoZnVuY1tpXSwgZXF1RGl2KTtcbiAgICAgICAgdmFyIGRyb3Bkb3duID0gd2FuZC5xdWVyQXBuZHIoXCIjZHJvcGRvd25cIik7XG4gICAgICAgIHdhbmQuYXBuZHIoZHJvcGRvd24sIGVxdURpdik7XG4gICAgfVxuXG4gICAgLyoqKipET0NVTUVOVCBPTkNIQU5HRSBFVkVOVCBIQU5ETEVSKioqKi9cbiAgICBkb2N1bWVudC5vbmNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICBpZiAoZS50YXJnZXQubG9jYWxOYW1lID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgICAgICBjaGFuZ2VQbG90KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn0oKSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
