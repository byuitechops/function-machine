"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function(e,t){e.wand=t()}("undefined"!=typeof window?window:void 0,function(){var e={apndr:function(e,t){if("object"!==("undefined"==typeof e?"undefined":_typeof(e))||"object"!==("undefined"==typeof t?"undefined":_typeof(t))||Array.isArray(t))if("object"!==("undefined"==typeof e?"undefined":_typeof(e)))console.error("First parameter passed is not an object element.");else if("object"!==("undefined"==typeof t?"undefined":_typeof(t)))"string"!=typeof t&&"number"!=typeof t||e.appendChild(this.txt(t));else if(Array.isArray(t))for(var r=t,o=0;o<r.length;o++)this.apndr(e,r[o]);else console.error("Parameters are not compatible in the lib.apndr function.  Hit the arrow on the left for call stack.");else e.appendChild(t)},querApndr:function(e,t,r){var o=document.querySelector(e);if(null!=o){if(Array.isArray(t))for(var n=t,i=0;i<n.length;i++)this.apndr(o,this.crtElm(n[i]));else t&&this.apndr(o,this.crtElm(t,r));return o}console.error("No tag exists in the DOM. Hit the arrow on the left for call stack.")},querAttr:function(e,t,r){var o=document.querySelector(e);null==o?console.error("No tag exists in the DOM. Hit the arrow on the left for call stack."):t&&o.setAttribute(t,r)},txt:function(e){return"string"==typeof e?document.createTextNode(e):"number"==typeof e?document.createTextNode(e.toString()):void console.error("Parameter passed to lib.txt is not a string nor a number.  Hit the arrow on the left for call stack.")},crtElm:function(e,t){var r,o=document.createElement(e);return t&&("string"==typeof t?(r=this.txt(t),this.apndr(o,r)):console.error("Must pass a string as the second param in lib.crtElm function.  Hit the arrow on the left for call stack.")),o}};return e});
"use strict";!function(){function e(e){console.log(e)}wand.querApndr("#dropdown","select");for(var n=["x^2","x^3"],o=0;o<n.length;o++)wand.querApndr("select","option",n[o]);document.onchange=function(n){console.log(n),"select"===n.target.localName&&e(n.target.value)}}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbmQuanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm9iaiIsImNvbnN0cnVjdG9yIiwiZ2xvIiwibGliIiwid2FuZCIsIndpbmRvdyIsInVuZGVmaW5lZCIsImFwbmRyIiwiYSIsImIiLCJBcnJheSIsImlzQXJyYXkiLCJjb25zb2xlIiwiZXJyb3IiLCJhcHBlbmRDaGlsZCIsInRoaXMiLCJ0eHQiLCJhcnIiLCJpIiwibGVuZ3RoIiwicXVlckFwbmRyIiwiYyIsImVsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNydEVsbSIsInF1ZXJBdHRyIiwic2V0QXR0cmlidXRlIiwiY3JlYXRlVGV4dE5vZGUiLCJ0b1N0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJjaGFuZ2VQbG90IiwibG9nIiwibWF0aGZ1bmMiLCJvbmNoYW5nZSIsImUiLCJ0YXJnZXQiLCJsb2NhbE5hbWUiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFFQSxJQUFJQSxTQUE0QixrQkFBWEMsU0FBb0QsZ0JBQXBCQSxRQUFPQyxTQUF3QixTQUFVQyxHQUFPLGFBQWNBLElBQVMsU0FBVUEsR0FBTyxNQUFPQSxJQUF5QixrQkFBWEYsU0FBeUJFLEVBQUlDLGNBQWdCSCxPQUFTLGVBQWtCRSxLQUZ6TyxTQUFVRSxFQUFLQyxHQUNaRCxFQUFJRSxLQUFPRCxLQUNLLG1CQUFYRSxRQUF5QkEsT0FBaENDLE9BQStDLFdBQzdDLEdBQUlILElBQ0FJLE1BQU8sU0FBVUMsRUFBR0MsR0FDaEIsR0FBaUIsWUFBYixtQkFBT0QsR0FBUCxZQUFBWCxRQUFPVyxLQUErQixZQUFiLG1CQUFPQyxHQUFQLFlBQUFaLFFBQU9ZLEtBQW1CQyxNQUFNQyxRQUFRRixHQUU5RCxHQUFpQixZQUFiLG1CQUFPRCxHQUFQLFlBQUFYLFFBQU9XLElBQ2RJLFFBQVFDLE1BQU0sd0RBQ1gsSUFBaUIsWUFBYixtQkFBT0osR0FBUCxZQUFBWixRQUFPWSxJQUNHLGdCQUFOQSxJQUErQixnQkFBTkEsSUFDaENELEVBQUVNLFlBQVlDLEtBQUtDLElBQUlQLFFBRXhCLElBQUlDLE1BQU1DLFFBQVFGLEdBRXJCLElBQUssR0FERFEsR0FBTVIsRUFDRFMsRUFBSSxFQUFHQSxFQUFJRCxFQUFJRSxPQUFRRCxJQUM1QkgsS0FBS1IsTUFBTUMsRUFBR1MsRUFBSUMsUUFHdEJOLFNBQVFDLE1BQU0sMkdBYmRMLEdBQUVNLFlBQVlMLElBZ0J0QlcsVUFBVyxTQUFVWixFQUFHQyxFQUFHWSxHQUN2QixHQUFJQyxHQUFNQyxTQUFTQyxjQUFjaEIsRUFDakMsSUFBVyxNQUFQYyxFQUVHLENBQ0gsR0FBSVosTUFBTUMsUUFBUUYsR0FFZCxJQUFLLEdBRERRLEdBQU1SLEVBQ0RTLEVBQUksRUFBR0EsRUFBSUQsRUFBSUUsT0FBUUQsSUFDNUJILEtBQUtSLE1BQU1lLEVBQUtQLEtBQUtVLE9BQU9SLEVBQUlDLFNBRTdCVCxJQUNQTSxLQUFLUixNQUFNZSxFQUFLUCxLQUFLVSxPQUFPaEIsRUFBR1ksR0FFbkMsT0FBT0MsR0FWUFYsUUFBUUMsTUFBTSx3RUFhdEJhLFNBQVUsU0FBVWxCLEVBQUdDLEVBQUdZLEdBQ3RCLEdBQUlDLEdBQU1DLFNBQVNDLGNBQWNoQixFQUN0QixPQUFQYyxFQUNBVixRQUFRQyxNQUFNLHVFQUVWSixHQUNBYSxFQUFJSyxhQUFhbEIsRUFBR1ksSUFJaENMLElBQUssU0FBVVIsR0FDWCxNQUFpQixnQkFBTkEsR0FDQWUsU0FBU0ssZUFBZXBCLEdBQ1gsZ0JBQU5BLEdBQ1BlLFNBQVNLLGVBQWVwQixFQUFFcUIsZ0JBRWpDakIsU0FBUUMsTUFBTSx5R0FHdEJZLE9BQVEsU0FBVWpCLEVBQUdDLEdBQ2pCLEdBQ0lPLEdBREFNLEVBQU1DLFNBQVNPLGNBQWN0QixFQVVqQyxPQVJJQyxLQUNpQixnQkFBTkEsSUFDUE8sRUFBTUQsS0FBS0MsSUFBSVAsR0FDZk0sS0FBS1IsTUFBTWUsRUFBS04sSUFFaEJKLFFBQVFDLE1BQU0sOEdBR2ZTLEdBR2YsT0FBT25CO0FDdkVYLGNBQUMsV0FHRyxRQUFTNEIsR0FBV3ZCLEdBQ2hCSSxRQUFRb0IsSUFBSXhCLEdBS2hCSixLQUFLZ0IsVUFBVSxZQUFhLFNBTzVCLEtBQUssR0FMRGEsSUFDRSxNQUNBLE9BR0dmLEVBQUksRUFBR0EsRUFBSWUsRUFBU2QsT0FBUUQsSUFDakNkLEtBQUtnQixVQUFVLFNBQVUsU0FBVWEsRUFBU2YsR0FJaERLLFVBQVNXLFNBQVcsU0FBVUMsR0FDMUJ2QixRQUFRb0IsSUFBSUcsR0FDZSxXQUF2QkEsRUFBRUMsT0FBT0MsV0FDVE4sRUFBV0ksRUFBRUMsT0FBT0UiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoZ2xvLCBsaWIpIHtcbiAgICBnbG8ud2FuZCA9IGxpYigpO1xufSh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdGhpcywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBsaWIgPSB7XG4gICAgICAgIGFwbmRyOiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBiID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGIpKSB7XG4gICAgICAgICAgICAgICAgYS5hcHBlbmRDaGlsZChiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGEgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmlyc3QgcGFyYW1ldGVyIHBhc3NlZCBpcyBub3QgYW4gb2JqZWN0IGVsZW1lbnQuXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYiAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYiA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgYiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICBhLmFwcGVuZENoaWxkKHRoaXMudHh0KGIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYikpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJyID0gYjtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwbmRyKGEsIGFycltpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUGFyYW1ldGVycyBhcmUgbm90IGNvbXBhdGlibGUgaW4gdGhlIGxpYi5hcG5kciBmdW5jdGlvbi4gIEhpdCB0aGUgYXJyb3cgb24gdGhlIGxlZnQgZm9yIGNhbGwgc3RhY2suXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBxdWVyQXBuZHI6IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgICAgICB2YXIgZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhKTtcbiAgICAgICAgICAgIGlmIChlbGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyB0YWcgZXhpc3RzIGluIHRoZSBET00uIEhpdCB0aGUgYXJyb3cgb24gdGhlIGxlZnQgZm9yIGNhbGwgc3RhY2suXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShiKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gYjtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBuZHIoZWxlLCB0aGlzLmNydEVsbShhcnJbaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwbmRyKGVsZSwgdGhpcy5jcnRFbG0oYiwgYykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBxdWVyQXR0cjogZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgICAgIHZhciBlbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGEpO1xuICAgICAgICAgICAgaWYgKGVsZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIHRhZyBleGlzdHMgaW4gdGhlIERPTS4gSGl0IHRoZSBhcnJvdyBvbiB0aGUgbGVmdCBmb3IgY2FsbCBzdGFjay5cIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoYiwgYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0eHQ6IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQYXJhbWV0ZXIgcGFzc2VkIHRvIGxpYi50eHQgaXMgbm90IGEgc3RyaW5nIG5vciBhIG51bWJlci4gIEhpdCB0aGUgYXJyb3cgb24gdGhlIGxlZnQgZm9yIGNhbGwgc3RhY2suXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcnRFbG06IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICB2YXIgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhKSxcbiAgICAgICAgICAgICAgICB0eHQ7XG4gICAgICAgICAgICBpZiAoYikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB0eHQgPSB0aGlzLnR4dChiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcG5kcihlbGUsIHR4dCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk11c3QgcGFzcyBhIHN0cmluZyBhcyB0aGUgc2Vjb25kIHBhcmFtIGluIGxpYi5jcnRFbG0gZnVuY3Rpb24uICBIaXQgdGhlIGFycm93IG9uIHRoZSBsZWZ0IGZvciBjYWxsIHN0YWNrLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZWxlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsaWI7XG59KSk7XG4iLCIoZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgZnVuY3Rpb24gY2hhbmdlUGxvdChhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGEpO1xuICAgIH1cblxuICAgIFxuICAgIC8qKioqRFJPUERPV04gTUFLRVIqKioqL1xuICAgIHdhbmQucXVlckFwbmRyKCcjZHJvcGRvd24nLCAnc2VsZWN0Jyk7XG5cbiAgICB2YXIgbWF0aGZ1bmMgPSBbXG4gICAgICAgICAgJ3heMicsXG4gICAgICAgICAgJ3heMydcbiAgICAgICBdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRoZnVuYy5sZW5ndGg7IGkrKykge1xuICAgICAgICB3YW5kLnF1ZXJBcG5kcignc2VsZWN0JywgJ29wdGlvbicsIG1hdGhmdW5jW2ldKTtcbiAgICB9XG4gICAgXG4gICAgLyoqKipET0NVTUVOVCBPTkNIQU5HRSBFVkVOVCBIQU5ETEVSKioqKi9cbiAgICBkb2N1bWVudC5vbmNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICBpZiAoZS50YXJnZXQubG9jYWxOYW1lID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgICAgICBjaGFuZ2VQbG90KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn0oKSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
