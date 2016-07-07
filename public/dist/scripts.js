"use strict";!function(){for(var t,a,d,p,r=$("tbody"),n=19,e=1;n>=e;e++)p=$("<input>"),t=$("<td></td>"),a=$("<td></td>"),d=$("<tr></tr>"),$(d).attr("id","row"+e),$(p).attr("name","input"+e).attr("type","number"),$(a).attr("id","yval"+e),$(t).append(p),$(d).append(t).append(a),$(r).append(d)}();
"use strict";$(document).ready(function(){$.getJSON("../funcMachineSettings.json",function(n){window.professorConfigFile=n,$.each(n,function(n,e){var o=$("<option></option>").append(e.name);$(o).val(e.equation),$("select").append(o),0===n&&changePlot(e.equation)})})});
"use strict";function stairStep(t){var n=246.5;lastSheet.insertRule("@keyframes "+t.name+" {\n                            0% {\n                                opacity: 0;\n                                top: "+t.startTopOff+"px;\n                                left: "+t.startLeftOff+"px;\n                            }\n                            10% {\n                                opacity: 1;\n                            }\n                            33% {\n                                top: "+t.startTopOff+"px;\n                                left: "+n+"px;\n                            }\n                            66% {\n                                top: "+t.endTopOff+"px;\n                                left: "+n+"px;\n                            }\n                            90% {\n                                opacity: 1;\n                            }\n                            100% {\n                                opacity: 0;\n                                top: "+t.endTopOff+"px;\n                                left: "+t.endLeftOff+"px;\n                            }\n                        }",lastSheet.cssRules.length)}function makeXToMachine(t,n){stairStep({startTopOff:t.top+5,startLeftOff:t.left+30,endTopOff:55,endLeftOff:300,name:"xToMachine"+n})}function makeMachineToY(t,n){stairStep({startTopOff:55,startLeftOff:300,endTopOff:t.top+5,endLeftOff:t.right+5,name:"machineToY"+n})}function makeYToStatusBar(t,n){stairStep({startTopOff:t.top+5,startLeftOff:t.right+10,endTopOff:150,endLeftOff:300,name:"yToStatusBar"+n})}function startFuncMach(){var t=$("input[type='number']"),n=$("#animate:checked").length>0,e=$("#showGraph:checked").length>0,o={callback:function(t){return new Promise(function(n){console.log("finished!"),n(t)})},animateHide:n,graphHide:e,equation:profOpt.equation},a={datapoints:[],currentRound:0,graphOpt:o};t.each(function(t){var n=+$(this).val(),e=profOpt.equation;if(n){var o=e.replace("x","("+n+")"),i=math.eval(o),f=this.getBoundingClientRect(),p={x:n,y:i,id:t,changeEqu:profOpt.equation.replace("x","("+n+")"),updatePoint:xMemory[t]!==n,element:$("#numContainer p").get(t),beginCoor:{top:f.top,left:f.left},endCoor:{top:55,left:300}};p.updatePoint&&$("td#yval"+(t+1)).html(""),xMemory[t]=n,a.datapoints.push(p)}}),animatorControl(a)}function checkConfig(t){var n;return $.each(professorConfigFile,function(e,o){o.equation===t&&(n=o)}),n}function changePlot(t){window.profOpt=checkConfig(t);var n="y = ",e=""+t,o=$("#functionMachine #equ")[0],a=$("#functionMachine #y");$(o).empty(""),katex.render(n,a[0]),katex.render(e,o)}for(var xMemory=[],inputs=document.querySelectorAll("input[type='number']"),inputCount=inputs.length,lastSheet=document.styleSheets[document.styleSheets.length-1],i=0;inputCount>i;i++){xMemory[i]=null;var inputCoor=inputs[i].getBoundingClientRect();makeXToMachine(inputCoor,i),makeMachineToY(inputCoor,i),makeYToStatusBar(inputCoor,i),$("#numContainer").append($("<p></p>"))}$("select").change(function(t){changePlot(t.target.value)}),$(document).keypress(function(t){13==t.which&&startFuncMach()}),$("input[type='button'][value='Go!']").click(function(){startFuncMach()});
"use strict";function runAnimation(n,t){return function(a){var e=a.datapoints[a.currentRound],i=e.element;return new Promise(function(e){$(i).html(t).css({animation:""+n+a.currentRound+" "+aniDuration+"s ease-in-out"}).one("animationend",function(n){e(a)})})}}function replaceXEqu(n){return new Promise(function(t){$(statusBar).html("<p>Calculating</p>"),$(equPara).css("animation","textDisappear "+aniDuration+"s ease-in-out").one("animationend",function(a){$(equPara).css("opacity",0),t(n)})})}function showEvaluateEqu(n){var t=n.datapoints[n.currentRound],a=t.changeEqu;return new Promise(function(t){katex.render(""+a,equPara),$(equPara).css("animation","textAppear "+aniDuration+"s ease-in-out").one("animationend",function(a){$(equPara).css("opacity",1),t(n)})})}function showYAns(n){var t=n.datapoints[n.currentRound];return new Promise(function(a){$(equPara).css("animation","textDisappear "+aniDuration+"s ease-in-out").one("animationend",function(){$(equPara).css("opacity",0),katex.render(""+t.y,equPara),a(n)})})}function showEquationAgain(n){return new Promise(function(t){$(equPara).css("animation","textAppear "+aniDuration+"s ease-in-out").one("animationend",function(a){$(equPara).css("opacity",1),t(n)})})}function placeYValue(n){var t=n.datapoints[n.currentRound];return new Promise(function(a){var e=$("td#yval"+(t.id+1))[0];$(e).html(""),$(e).append("<p>"+t.y+"</p>"),a(n)})}function resetRound(n){n.datapoints[n.currentRound];return new Promise(function(t){$(equPara).css("animation","textDisappear "+aniDuration+"s ease-in-out").one("animationend",function(a){$(equPara).css("opacity",0),katex.render(""+profOpt.equation,equPara),t(n)})})}function showDefaultEqu(n){return new Promise(function(t){$(equPara).css("animation","textAppear "+aniDuration+"s ease-in-out").one("animationend",function(a){$(equPara).css("opacity",1),$(statusBar).html(""),t(n)})})}function plotter(n){n.graphOpt.callback()}function updateRound(n){var t=n.datapoints[n.currentRound];return new Promise(function(a){n.currentRound+=1,t.updatePoint=!1,a(n)})}function animatorControl(n){var t=$("#numContainer"),a=Promise.resolve(n);t.innerHTML="";for(var e=0;e<n.datapoints.length;e++){var i=n.datapoints[e];i.updatePoint===!0&&(a=a.then(runAnimation("xToMachine",i.x)).then(replaceXEqu).then(showEvaluateEqu).then(showYAns).then(showEquationAgain).then(runAnimation("machineToY",i.y)).then(placeYValue).then(runAnimation("yToStatusBar","("+i.x+","+i.y+")")).then(resetRound).then(showDefaultEqu)),a=a.then(updateRound)}}var statusBar=$("#status p"),lastSheet=document.styleSheets[document.styleSheets.length-1],equPara=$("#functionMachine #equ")[0],aniDuration=2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJhamF4LmpzIiwiZXZlbnRzLmpzIiwiYW5pbWF0b3Jjb250cm9sLmpzIl0sIm5hbWVzIjpbInRkMSIsInRkMiIsInRyIiwiaW5wdXQiLCJ0Ym9keSIsIiQiLCJyb3dDb3VudCIsImoiLCJhdHRyIiwiYXBwZW5kIiwiZG9jdW1lbnQiLCJyZWFkeSIsImdldEpTT04iLCJyZXN1bHQiLCJ3aW5kb3ciLCJwcm9mZXNzb3JDb25maWdGaWxlIiwiZWFjaCIsImkiLCJmaWVsZCIsIm9wdCIsIm5hbWUiLCJ2YWwiLCJlcXVhdGlvbiIsImNoYW5nZVBsb3QiLCJzdGFpclN0ZXAiLCJvcHRpb25zIiwiaGlnaHdheVBhdGgiLCJsYXN0U2hlZXQiLCJpbnNlcnRSdWxlIiwic3RhcnRUb3BPZmYiLCJzdGFydExlZnRPZmYiLCJlbmRUb3BPZmYiLCJlbmRMZWZ0T2ZmIiwiY3NzUnVsZXMiLCJsZW5ndGgiLCJtYWtlWFRvTWFjaGluZSIsImlucHV0Q29yZHMiLCJpbmRleCIsInRvcCIsImxlZnQiLCJtYWtlTWFjaGluZVRvWSIsInJpZ2h0IiwibWFrZVlUb1N0YXR1c0JhciIsInN0YXJ0RnVuY01hY2giLCJ4aW5wdXRzIiwiaGlkZUFuaW1hdGlvbkNoZWNrZWQiLCJoaWRlR3JhcGhDaGVja2VkIiwiZ3JhcGhPcHQiLCJjYWxsYmFjayIsImFuaVNldHRpbmdzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjb25zb2xlIiwibG9nIiwiYW5pbWF0ZUhpZGUiLCJncmFwaEhpZGUiLCJwcm9mT3B0IiwiZGF0YXBvaW50cyIsImN1cnJlbnRSb3VuZCIsInh2YWwiLCJ0aGlzIiwicmVwbGFjZVgiLCJyZXBsYWNlIiwieXZhbCIsIm1hdGgiLCJldmFsIiwiaW5wdXRDb29yIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicG9pbnQiLCJ4IiwieSIsImlkIiwiY2hhbmdlRXF1IiwidXBkYXRlUG9pbnQiLCJ4TWVtb3J5IiwiZWxlbWVudCIsImdldCIsImJlZ2luQ29vciIsImVuZENvb3IiLCJodG1sIiwicHVzaCIsImFuaW1hdG9yQ29udHJvbCIsImNoZWNrQ29uZmlnIiwiaXRlbSIsImVxdWF0IiwiZXF1UGFyYSIsInlQYXJhIiwiZW1wdHkiLCJrYXRleCIsInJlbmRlciIsImlucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnB1dENvdW50Iiwic3R5bGVTaGVldHMiLCJjaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJrZXlwcmVzcyIsIndoaWNoIiwiY2xpY2siLCJydW5BbmltYXRpb24iLCJkYXRhcG9pbnQiLCJudW1QYXJhIiwiY3NzIiwiYW5pbWF0aW9uIiwiYW5pRHVyYXRpb24iLCJvbmUiLCJyZXBsYWNlWEVxdSIsImRhdGEiLCJzdGF0dXNCYXIiLCJzaG93RXZhbHVhdGVFcXUiLCJwb2ludERhdGEiLCJzaG93WUFucyIsInNob3dFcXVhdGlvbkFnYWluIiwicGxhY2VZVmFsdWUiLCJyZXNldFJvdW5kIiwic2hvd0RlZmF1bHRFcXUiLCJwbG90dGVyIiwidXBkYXRlUm91bmQiLCJwbGFjZWhvbGRlciIsImRwcyIsIm51bUNvbnRhaW5lciIsImNoYWluIiwiaW5uZXJIVE1MIiwidGhlbiJdLCJtYXBwaW5ncyI6IkFBQUEsY0FBQyxXQWFHLElBQUssR0FOREEsR0FDQUMsRUFDQUMsRUFDQUMsRUFKQUMsRUFBUUMsRUFBRSxTQUtWQyxFQUFXLEdBRU5DLEVBQUksRUFBUUQsR0FBTEMsRUFBZUEsSUFDM0JKLEVBQVFFLEVBQUUsV0FDVkwsRUFBTUssRUFBRSxhQUNSSixFQUFNSSxFQUFFLGFBQ1JILEVBQUtHLEVBQUUsYUFFUEEsRUFBRUgsR0FBSU0sS0FBSyxLQUFYLE1BQXVCRCxHQUV2QkYsRUFBRUYsR0FBT0ssS0FBSyxPQUFkLFFBQThCRCxHQUFLQyxLQUFLLE9BQVEsVUFFaERILEVBQUVKLEdBQUtPLEtBQUssS0FBWixPQUF5QkQsR0FFekJGLEVBQUVMLEdBQUtTLE9BQU9OLEdBQ2RFLEVBQUVILEdBQUlPLE9BQU9ULEdBQUtTLE9BQU9SLEdBQ3pCSSxFQUFF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SyxHQUFJM0csR0FBSSxFQUFHQSxFQUFJd0csRUFBSWhFLFdBQVd2QixPQUFRakIsSUFBSyxDQUM1QyxHQUFJcUYsR0FBWW1CLEVBQUloRSxXQUFXeEMsRUFDM0JxRixHQUFVN0IsZUFBZ0IsSUFDMUJrRCxFQUFRQSxFQUNIRSxLQUFLeEIsYUFBYSxhQUFjQyxFQUFVakMsSUFDMUN3RCxLQUFLakIsYUFDTGlCLEtBQUtkLGlCQUNMYyxLQUFLWixVQUNMWSxLQUFLWCxtQkFDTFcsS0FBS3hCLGFBQWEsYUFBY0MsRUFBVWhDLElBQzFDdUQsS0FBS1YsYUFDTFUsS0FBS3hCLGFBQWEsZUFBYixJQUFpQ0MsRUFBVWpDLEVBQTNDLElBQWdEaUMsRUFBVWhDLEVBQTFELE1BQ0x1RCxLQUFLVCxZQUNMUyxLQUFLUixpQkFHZE0sRUFBUUEsRUFBTUUsS0FBS04sY0FuTjNCLEdBQUlULFdBQVl6RyxFQUFFLGFBQ2RzQixVQUFZakIsU0FBU21GLFlBQVluRixTQUFTbUYsWUFBWTNELE9BQVMsR0FDL0RtRCxRQUFVaEYsRUFBRSx5QkFBeUIsR0FDckNxRyxZQUFjIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgLypcclxuICAgIE1ha2UgdGhlIHdob2xlIHRhYmxlIGFuZCBjZWxscyBmb3IgdGhlIGlucHV0IGJveGVzIGFuZCB1c2VyIGludGVyYWN0aW9uLlxyXG4gICAgKi9cclxuICAgIHZhciB0Ym9keSA9ICQoXCJ0Ym9keVwiKSxcclxuICAgICAgICB0ZDEsXHJcbiAgICAgICAgdGQyLFxyXG4gICAgICAgIHRyLFxyXG4gICAgICAgIGlucHV0LFxyXG4gICAgICAgIHJvd0NvdW50ID0gMTk7XHJcblxyXG4gICAgZm9yICh2YXIgaiA9IDE7IGogPD0gcm93Q291bnQ7IGorKykge1xyXG4gICAgICAgIGlucHV0ID0gJChcIjxpbnB1dD5cIik7XHJcbiAgICAgICAgdGQxID0gJChcIjx0ZD48L3RkPlwiKTtcclxuICAgICAgICB0ZDIgPSAkKFwiPHRkPjwvdGQ+XCIpO1xyXG4gICAgICAgIHRyID0gJChcIjx0cj48L3RyPlwiKTtcclxuXHJcbiAgICAgICAgJCh0cikuYXR0cihcImlkXCIsIGByb3cke2p9YCk7XHJcblxyXG4gICAgICAgICQoaW5wdXQpLmF0dHIoXCJuYW1lXCIsIGBpbnB1dCR7an1gKS5hdHRyKFwidHlwZVwiLCBcIm51bWJlclwiKTtcclxuXHJcbiAgICAgICAgJCh0ZDIpLmF0dHIoXCJpZFwiLCBgeXZhbCR7an1gKTtcclxuXHJcbiAgICAgICAgJCh0ZDEpLmFwcGVuZChpbnB1dCk7XHJcbiAgICAgICAgJCh0cikuYXBwZW5kKHRkMSkuYXBwZW5kKHRkMik7XHJcbiAgICAgICAgJCh0Ym9keSkuYXBwZW5kKHRyKTtcclxuICAgIH1cclxufSgpKTtcclxuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgXHJcbiAgICAvKlxyXG4gICAgTG9hZCB0aGUgcHJvZmVzc29yIGNvbmZpZ3VyYXRpb24gZmlsZVxyXG4gICAgKi9cclxuICAgIFxyXG4gICAgJC5nZXRKU09OKFwiLi4vZnVuY01hY2hpbmVTZXR0aW5ncy5qc29uXCIsIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgd2luZG93LnByb2Zlc3NvckNvbmZpZ0ZpbGUgPSByZXN1bHQ7XHJcblxyXG4gICAgICAgICQuZWFjaChyZXN1bHQsIGZ1bmN0aW9uIChpLCBmaWVsZCkge1xyXG5cclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgQXBwZW5kIHRoZSBwcm9mZXNzb3IncyBjaG9zZW4gZXF1YXRpb25zIHRvIHRoZSBhcHBsaWNhdGlvblxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIG9wdCA9ICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKS5hcHBlbmQoZmllbGQubmFtZSk7XHJcblxyXG4gICAgICAgICAgICAkKG9wdCkudmFsKGZpZWxkLmVxdWF0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICQoXCJzZWxlY3RcIikuYXBwZW5kKG9wdCk7XHJcblxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICBEaXNwbGF5IHRoZSBkZWZhdWx0IGVxdWF0aW9uIHRvIHRoZSBmdW5jdGlvbiBtYWNoaW5lXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlUGxvdChmaWVsZC5lcXVhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG59KTtcclxuIiwidmFyIHhNZW1vcnkgPSBbXSxcclxuICAgIGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPSdudW1iZXInXVwiKSxcclxuICAgIGlucHV0Q291bnQgPSBpbnB1dHMubGVuZ3RoLFxyXG4gICAgbGFzdFNoZWV0ID0gZG9jdW1lbnQuc3R5bGVTaGVldHNbZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoIC0gMV07XHJcblxyXG4vKlxyXG5BbmltYXRpb24gcGF0aCBmb3IgdGhlIHN0YWlyc3RlcFxyXG4qL1xyXG5mdW5jdGlvbiBzdGFpclN0ZXAob3B0aW9ucykge1xyXG4gICAgdmFyIGhpZ2h3YXlQYXRoID0gMjQ2LjU7XHJcbiAgICBsYXN0U2hlZXQuaW5zZXJ0UnVsZShgQGtleWZyYW1lcyAke29wdGlvbnMubmFtZX0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAke29wdGlvbnMuc3RhcnRUb3BPZmZ9cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogJHtvcHRpb25zLnN0YXJ0TGVmdE9mZn1weDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMzJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAke29wdGlvbnMuc3RhcnRUb3BPZmZ9cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogJHtoaWdod2F5UGF0aH1weDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDY2JSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAke29wdGlvbnMuZW5kVG9wT2ZmfXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6ICR7aGlnaHdheVBhdGh9cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA5MCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogJHtvcHRpb25zLmVuZFRvcE9mZn1weDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAke29wdGlvbnMuZW5kTGVmdE9mZn1weDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfWAsIGxhc3RTaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xyXG59XHJcblxyXG4vKlxyXG5BIHNldCBvZiBmdW5jdGlvbnMgdXNpbmcgdGhlIHN0YWlyc3RlcCBhbmltYXRpb24gdGVtcGxhdGUgXHJcbnRvIGNyZWF0ZSBwYXRod2F5cyB3aXRoIGNvb3JkaW5hdGUgZGF0YVxyXG4qL1xyXG5mdW5jdGlvbiBtYWtlWFRvTWFjaGluZShpbnB1dENvcmRzLCBpbmRleCkge1xyXG4gICAgc3RhaXJTdGVwKHtcclxuICAgICAgICBzdGFydFRvcE9mZjogaW5wdXRDb3Jkcy50b3AgKyA1LFxyXG4gICAgICAgIHN0YXJ0TGVmdE9mZjogaW5wdXRDb3Jkcy5sZWZ0ICsgMzAsXHJcbiAgICAgICAgZW5kVG9wT2ZmOiA1NSxcclxuICAgICAgICBlbmRMZWZ0T2ZmOiAzMDAsXHJcbiAgICAgICAgbmFtZTogYHhUb01hY2hpbmUke2luZGV4fWBcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlTWFjaGluZVRvWShpbnB1dENvcmRzLCBpbmRleCkge1xyXG4gICAgc3RhaXJTdGVwKHtcclxuICAgICAgICBzdGFydFRvcE9mZjogNTUsXHJcbiAgICAgICAgc3RhcnRMZWZ0T2ZmOiAzMDAsXHJcbiAgICAgICAgZW5kVG9wT2ZmOiBpbnB1dENvcmRzLnRvcCArIDUsXHJcbiAgICAgICAgZW5kTGVmdE9mZjogaW5wdXRDb3Jkcy5yaWdodCArIDUsXHJcbiAgICAgICAgbmFtZTogYG1hY2hpbmVUb1kke2luZGV4fWBcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlWVRvU3RhdHVzQmFyKGlucHV0Q29yZHMsIGluZGV4KSB7XHJcbiAgICBzdGFpclN0ZXAoe1xyXG4gICAgICAgIHN0YXJ0VG9wT2ZmOiBpbnB1dENvcmRzLnRvcCArIDUsXHJcbiAgICAgICAgc3RhcnRMZWZ0T2ZmOiBpbnB1dENvcmRzLnJpZ2h0ICsgMTAsXHJcbiAgICAgICAgZW5kVG9wT2ZmOiAxNTAsXHJcbiAgICAgICAgZW5kTGVmdE9mZjogMzAwLFxyXG4gICAgICAgIG5hbWU6IGB5VG9TdGF0dXNCYXIke2luZGV4fWBcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKlxyXG5TZXQgdXAgdGhlIHhNZW1vcnkgYXJyYXkgYW5kIHRoZSBhbmltYXRpb24gcGF0aHMgZm9yIGVhY2ggaW5wdXQgYm94XHJcbiovXHJcbmZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRDb3VudDsgaSsrKSB7XHJcbiAgICB4TWVtb3J5W2ldID0gbnVsbDtcclxuXHJcbiAgICB2YXIgaW5wdXRDb29yID0gaW5wdXRzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIG1ha2VYVG9NYWNoaW5lKGlucHV0Q29vcixpKTtcclxuICAgIG1ha2VNYWNoaW5lVG9ZKGlucHV0Q29vcixpKTtcclxuICAgIG1ha2VZVG9TdGF0dXNCYXIoaW5wdXRDb29yLGkpO1xyXG4gICAgJChcIiNudW1Db250YWluZXJcIikuYXBwZW5kKCQoYDxwPjwvcD5gKSk7XHJcbn1cclxuXHJcbi8qXHJcblNldCBhbGwgdGhlIGRhdGEgdG8gYW4gYXJyYXkgb2Ygb2JqZWN0cyB0byBiZSBpdGVyYXRlZCBcclxub3ZlciBieSB0aGUgcHJvbWlzZSBjaGFpbiBpbiBhbmltYXRvcmNvbnRyb2wuanNcclxuKi9cclxuZnVuY3Rpb24gc3RhcnRGdW5jTWFjaCgpIHtcclxuXHJcbiAgICB2YXIgeGlucHV0cyA9ICQoXCJpbnB1dFt0eXBlPSdudW1iZXInXVwiKSxcclxuICAgICAgICBoaWRlQW5pbWF0aW9uQ2hlY2tlZCA9ICQoXCIjYW5pbWF0ZTpjaGVja2VkXCIpLmxlbmd0aCA+IDAsXHJcbiAgICAgICAgaGlkZUdyYXBoQ2hlY2tlZCA9ICQoXCIjc2hvd0dyYXBoOmNoZWNrZWRcIikubGVuZ3RoID4gMCxcclxuICAgICAgICBncmFwaE9wdCA9IHtcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChhbmlTZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaW5pc2hlZCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhbmlTZXR0aW5ncyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYW5pbWF0ZUhpZGU6IGhpZGVBbmltYXRpb25DaGVja2VkLFxyXG4gICAgICAgICAgICBncmFwaEhpZGU6IGhpZGVHcmFwaENoZWNrZWQsXHJcbiAgICAgICAgICAgIGVxdWF0aW9uOiBwcm9mT3B0LmVxdWF0aW9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbmlTZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgZGF0YXBvaW50czogW10sXHJcbiAgICAgICAgICAgIGN1cnJlbnRSb3VuZDogMCxcclxuICAgICAgICAgICAgZ3JhcGhPcHQ6IGdyYXBoT3B0XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB4aW5wdXRzLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICB2YXIgeHZhbCA9ICskKHRoaXMpLnZhbCgpLFxyXG4gICAgICAgICAgICBlcXVhdGlvbiA9IHByb2ZPcHQuZXF1YXRpb247XHJcblxyXG4gICAgICAgIGlmICh4dmFsKSB7XHJcbiAgICAgICAgICAgIHZhciByZXBsYWNlWCA9IGVxdWF0aW9uLnJlcGxhY2UoXCJ4XCIsIGAoJHt4dmFsfSlgKSxcclxuICAgICAgICAgICAgICAgIHl2YWwgPSBtYXRoLmV2YWwocmVwbGFjZVgpLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRDb29yID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgICAgICAgICAgICAgIHBvaW50ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHh2YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogeXZhbCxcclxuICAgICAgICAgICAgICAgICAgICBpZDogaSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VFcXU6IHByb2ZPcHQuZXF1YXRpb24ucmVwbGFjZShcInhcIiwgYCgke3h2YWx9KWApLFxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBvaW50OiB4TWVtb3J5W2ldICE9PSB4dmFsLFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICQoXCIjbnVtQ29udGFpbmVyIHBcIikuZ2V0KGkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQ29vcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGlucHV0Q29vci50b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGlucHV0Q29vci5sZWZ0XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlbmRDb29yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDMwMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICBDbGVhciBvdXQgdGhlIFlzIHdoZW4gdGhleSBkb24ndCBlcXVhbCBlYWNoIG90aGVyIGFuZCBuZWVkIHRvIGJlIHVwZGF0ZWRcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgaWYgKHBvaW50LnVwZGF0ZVBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAkKGB0ZCN5dmFsJHtpICsgMX1gKS5odG1sKFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKlVwZGF0ZSB0aGUgeG1lbW9yeSovXHJcbiAgICAgICAgICAgIHhNZW1vcnlbaV0gPSB4dmFsO1xyXG5cclxuICAgICAgICAgICAgYW5pU2V0dGluZ3MuZGF0YXBvaW50cy5wdXNoKHBvaW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBhbmltYXRvckNvbnRyb2woYW5pU2V0dGluZ3MpO1xyXG59XHJcblxyXG4vL1doeSBkbyBJIGhhdmUgdGhpcyBmdW5jdGlvbj9cclxuZnVuY3Rpb24gY2hlY2tDb25maWcodmFsKSB7XHJcbiAgICB2YXIgcHJvZk9wdDtcclxuICAgICQuZWFjaChwcm9mZXNzb3JDb25maWdGaWxlLCBmdW5jdGlvbiAoaSwgaXRlbSkge1xyXG4gICAgICAgIGlmIChpdGVtLmVxdWF0aW9uID09PSB2YWwpIHtcclxuICAgICAgICAgICAgcHJvZk9wdCA9IGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBwcm9mT3B0O1xyXG59XHJcblxyXG4vL0RpcHNsYXkgS2F0ZXggZXF1YXRpb25cclxuZnVuY3Rpb24gY2hhbmdlUGxvdCh2YWwpIHtcclxuXHJcbiAgICB3aW5kb3cucHJvZk9wdCA9IGNoZWNrQ29uZmlnKHZhbCk7XHJcblxyXG4gICAgdmFyIHkgPSBgeSA9IGAsXHJcbiAgICAgICAgZXF1YXQgPSBgJHt2YWx9YCxcclxuICAgICAgICBlcXVQYXJhID0gJChcIiNmdW5jdGlvbk1hY2hpbmUgI2VxdVwiKVswXSxcclxuICAgICAgICB5UGFyYSA9ICQoXCIjZnVuY3Rpb25NYWNoaW5lICN5XCIpO1xyXG5cclxuICAgICQoZXF1UGFyYSkuZW1wdHkoXCJcIik7XHJcblxyXG4gICAga2F0ZXgucmVuZGVyKHksIHlQYXJhWzBdKTtcclxuICAgIGthdGV4LnJlbmRlcihlcXVhdCwgZXF1UGFyYSk7XHJcbn1cclxuXHJcbi8qXHJcbkRPQ1VNRU5UIG9uY2hhbmdlIEVWRU5UIEhBTkRMRVJcclxuKi9cclxuJChcInNlbGVjdFwiKS5jaGFuZ2UoZnVuY3Rpb24gKGUpIHtcclxuICAgIGNoYW5nZVBsb3QoZS50YXJnZXQudmFsdWUpO1xyXG59KTtcclxuXHJcbi8qXHJcbkRPQ1VNRU5UIGtleWRvd24gRVZFTlQgSEFORExFUlxyXG4qL1xyXG4kKGRvY3VtZW50KS5rZXlwcmVzcyhmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKGUud2hpY2ggPT0gMTMpIHtcclxuICAgICAgICBzdGFydEZ1bmNNYWNoKCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLypcclxuR08hIENsaWNrXHJcbiovXHJcbiQoXCJpbnB1dFt0eXBlPSdidXR0b24nXVt2YWx1ZT0nR28hJ11cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vVE9ETzogTW9zdCBsaWtlbHkgdG8gZGV0ZWN0IGlmIGFuIGFuaW1hdGlvbiBpcyBvY2N1cnJpbmcgaXQgd291bGQgYmUgYmVzdCB0byBjaGVjayBvZiBhIHNwZWNpZmljIGFuaW1hdGlvbiBjbGFzcyBleGlzdHMgb24gdGhlIHdlYnBhZ2UuXHJcblxyXG4gICAgLy8gICAgaWYgKCQoJzphbmltYXRlZCcpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgc3RhcnRGdW5jTWFjaCgpO1xyXG4gICAgLy8gICAgfVxyXG5cclxufSk7XHJcbiIsInZhciBzdGF0dXNCYXIgPSAkKFwiI3N0YXR1cyBwXCIpLFxyXG4gICAgbGFzdFNoZWV0ID0gZG9jdW1lbnQuc3R5bGVTaGVldHNbZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoIC0gMV0sXHJcbiAgICBlcXVQYXJhID0gJChcIiNmdW5jdGlvbk1hY2hpbmUgI2VxdVwiKVswXSxcclxuICAgIGFuaUR1cmF0aW9uID0gMjtcclxuXHJcbmZ1bmN0aW9uIHJ1bkFuaW1hdGlvbihuYW1lLCB2YWx1ZSkge1xyXG4gICAgLypcclxuICAgIFRoaXMgaXMgYSBmdW5jdGlvbiBmYWN0b3J5IHdoaWNoIHdpbGwgZ3JhYiB0aGVcclxuICAgIG5lY2Vzc2FyeSBkYXRhIGFuZCB0aGVuIHJldHVybiB0aGUgZnVuY3Rpb24gcHJvbWlzZVxyXG4gICAgKi9cclxuICAgIHJldHVybiBmdW5jdGlvbiBhbmltYXRpb24oYW5pU2V0dGluZ3MpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB2YXIgZGF0YXBvaW50ID0gYW5pU2V0dGluZ3MuZGF0YXBvaW50c1thbmlTZXR0aW5ncy5jdXJyZW50Um91bmRdLFxyXG4gICAgICAgICAgICBudW1QYXJhID0gZGF0YXBvaW50LmVsZW1lbnQ7XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgTWFrZSB0aGUgcHJvbWlzZSB0aGF0IHdoZW4gdGhlIGR5bmFtaWNcclxuICAgICAgICBhbmltYXRpb24gcGF0aCBpcyBkb25lIHRoZW4gdGhpcyBwcm9taXNlIGlzIGZpbmlzaGVkXHJcbiAgICAgICAgKi9cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgJChudW1QYXJhKVxyXG4gICAgICAgICAgICAgICAgLmh0bWwodmFsdWUpXHJcbiAgICAgICAgICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBcImFuaW1hdGlvblwiOiBgJHtuYW1lfSR7YW5pU2V0dGluZ3MuY3VycmVudFJvdW5kfSAke2FuaUR1cmF0aW9ufXMgZWFzZS1pbi1vdXRgLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5vbmUoJ2FuaW1hdGlvbmVuZCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhbmlTZXR0aW5ncyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXBsYWNlWEVxdShkYXRhKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAvKlxyXG4gICAgUmVwbGFjZSB0aGUgeCBpbiB0aGUgZGlzYXBwZWFyZWQgZXF1YXRpb24gd2l0aG91dCBoYXZpbmcgdGhlIHkgZGlzYXBwZWFyLlxyXG4gICAgKi9cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICQoc3RhdHVzQmFyKVxyXG4gICAgICAgICAgICAuaHRtbChcIjxwPkNhbGN1bGF0aW5nPC9wPlwiKTtcclxuXHJcbiAgICAgICAgJChlcXVQYXJhKVxyXG4gICAgICAgICAgICAuY3NzKFwiYW5pbWF0aW9uXCIsIGB0ZXh0RGlzYXBwZWFyICR7YW5pRHVyYXRpb259cyBlYXNlLWluLW91dGApXHJcbiAgICAgICAgICAgIC5vbmUoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICQoZXF1UGFyYSkuY3NzKFwib3BhY2l0eVwiLCAwKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dFdmFsdWF0ZUVxdShhbmlTZXR0aW5ncykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgLypcclxuICAgIEdldCB0aGUgeSBhbnN3ZXIgYW5kIHRoZSB4LWNoYW5nZWQgZXF1YXRpb25cclxuICAgICovXHJcbiAgICB2YXIgcG9pbnREYXRhID0gYW5pU2V0dGluZ3MuZGF0YXBvaW50c1thbmlTZXR0aW5ncy5jdXJyZW50Um91bmRdLFxyXG4gICAgICAgIGNoYW5nZUVxdSA9IHBvaW50RGF0YS5jaGFuZ2VFcXU7XHJcblxyXG4gICAgLypcclxuICAgIFNob3cgdGhlIG5ldyBlcXVhdGlvbiB3aXRoIHRoZSByZXBsYWNlZCB4LXZhbHVlIGVxdWF0aW9uXHJcbiAgICAqL1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAga2F0ZXgucmVuZGVyKGAke2NoYW5nZUVxdX1gLCBlcXVQYXJhKTtcclxuXHJcbiAgICAgICAgJChlcXVQYXJhKVxyXG4gICAgICAgICAgICAuY3NzKFwiYW5pbWF0aW9uXCIsIGB0ZXh0QXBwZWFyICR7YW5pRHVyYXRpb259cyBlYXNlLWluLW91dGApXHJcbiAgICAgICAgICAgIC5vbmUoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICQoZXF1UGFyYSkuY3NzKFwib3BhY2l0eVwiLCAxKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoYW5pU2V0dGluZ3MpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dZQW5zKGFuaVNldHRpbmdzKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAvKlxyXG4gICAgQW5pbWF0ZSB0aGUgbmV3IHkgdmFsdWUgdG8gdGhlIGNvb3JkaW5hdGVkIHkgY29sdW1uIGFuZCBvbmNlXHJcbiAgICBhbmltYXRpb24gaXMgZG9uZSB0aGVuIHJldHVybiB0aGUgcHJvbWlzZVxyXG4gICAgKi9cclxuICAgIHZhciBwb2ludERhdGEgPSBhbmlTZXR0aW5ncy5kYXRhcG9pbnRzW2FuaVNldHRpbmdzLmN1cnJlbnRSb3VuZF07XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcblxyXG4gICAgICAgICQoZXF1UGFyYSlcclxuICAgICAgICAgICAgLmNzcyhcImFuaW1hdGlvblwiLCBgdGV4dERpc2FwcGVhciAke2FuaUR1cmF0aW9ufXMgZWFzZS1pbi1vdXRgKVxyXG4gICAgICAgICAgICAub25lKFwiYW5pbWF0aW9uZW5kXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQoZXF1UGFyYSkuY3NzKFwib3BhY2l0eVwiLCAwKTtcclxuICAgICAgICAgICAgICAgIGthdGV4LnJlbmRlcihgJHtwb2ludERhdGEueX1gLCBlcXVQYXJhKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoYW5pU2V0dGluZ3MpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93RXF1YXRpb25BZ2FpbihhbmlTZXR0aW5ncykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgJChlcXVQYXJhKVxyXG4gICAgICAgICAgICAuY3NzKFwiYW5pbWF0aW9uXCIsIGB0ZXh0QXBwZWFyICR7YW5pRHVyYXRpb259cyBlYXNlLWluLW91dGApXHJcbiAgICAgICAgICAgIC5vbmUoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICQoZXF1UGFyYSkuY3NzKFwib3BhY2l0eVwiLCAxKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoYW5pU2V0dGluZ3MpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbGFjZVlWYWx1ZShhbmlTZXR0aW5ncykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgcG9pbnREYXRhID0gYW5pU2V0dGluZ3MuZGF0YXBvaW50c1thbmlTZXR0aW5ncy5jdXJyZW50Um91bmRdO1xyXG5cclxuICAgIC8qXHJcbiAgICBPbmNlIHRoZSB5LXZhbHVlIGFwcGVhcnMgaW4gdGhlIGNvcnJlY3QgeS1jb2x1bW4gdGhlbiBmdWxmaWxsIHRoZSBwcm9taXNlLlxyXG4gICAgKi9cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgIHZhciBpbnB1dCA9ICQoYHRkI3l2YWwke3BvaW50RGF0YS5pZCArIDF9YClbMF07XHJcbiAgICAgICAgJChpbnB1dCkuaHRtbChcIlwiKTtcclxuICAgICAgICAkKGlucHV0KS5hcHBlbmQoYDxwPiR7cG9pbnREYXRhLnl9PC9wPmApO1xyXG4gICAgICAgIHJlc29sdmUoYW5pU2V0dGluZ3MpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Um91bmQoYW5pU2V0dGluZ3MpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIC8qXHJcbiAgICBHZXQgdGhlIGN1cnJlbnQgcm91bmQgYW5kIGN1cnJlbnQgZGF0YSBwb2ludHNcclxuICAgICovXHJcbiAgICB2YXIgcG9pbnREYXRhID0gYW5pU2V0dGluZ3MuZGF0YXBvaW50c1thbmlTZXR0aW5ncy5jdXJyZW50Um91bmRdO1xyXG5cclxuICAgIC8qXHJcbiAgICBPbmNlIHRoZSBlcXVhdGlvbiBpcyBjbGVhcmVkIGFuZCByZXNldCB0byB0aGUgZGVmYXVsdCBlcXVhdGlvblxyXG4gICAgdGhlbiBmdWxmaWxsIHRoZSBwcm9taXNlXHJcbiAgICAqL1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgJChlcXVQYXJhKVxyXG4gICAgICAgICAgICAuY3NzKFwiYW5pbWF0aW9uXCIsIGB0ZXh0RGlzYXBwZWFyICR7YW5pRHVyYXRpb259cyBlYXNlLWluLW91dGApXHJcbiAgICAgICAgICAgIC5vbmUoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICQoZXF1UGFyYSkuY3NzKFwib3BhY2l0eVwiLCAwKTtcclxuICAgICAgICAgICAgICAgIGthdGV4LnJlbmRlcihgJHtwcm9mT3B0LmVxdWF0aW9ufWAsIGVxdVBhcmEpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShhbmlTZXR0aW5ncyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dEZWZhdWx0RXF1KGFuaVNldHRpbmdzKSB7XHJcbiAgICAvKlxyXG4gICAgUmV0dXJuIHRvIGRlZmF1bHQgYmVnaW5uaW5nIHBvaW50IGZvciB0aGUgbmV4dCBhbmltYXRpb24gb3IgZm9yIHRoZSBlbmRcclxuICAgICovXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAkKGVxdVBhcmEpXHJcbiAgICAgICAgICAgIC5jc3MoXCJhbmltYXRpb25cIiwgYHRleHRBcHBlYXIgJHthbmlEdXJhdGlvbn1zIGVhc2UtaW4tb3V0YClcclxuICAgICAgICAgICAgLm9uZShcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgJChlcXVQYXJhKS5jc3MoXCJvcGFjaXR5XCIsIDEpO1xyXG4gICAgICAgICAgICAgICAgJChzdGF0dXNCYXIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmh0bWwoXCJcIik7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGFuaVNldHRpbmdzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxvdHRlcihhbmlTZXR0aW5ncykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBhbmlTZXR0aW5ncy5ncmFwaE9wdC5jYWxsYmFjaygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVSb3VuZChhbmlTZXR0aW5ncykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgdmFyIHBsYWNlaG9sZGVyID0gYW5pU2V0dGluZ3MuZGF0YXBvaW50c1thbmlTZXR0aW5ncy5jdXJyZW50Um91bmRdO1xyXG5cclxuICAgIC8qICBcclxuICAgIFRoaXMgZnVuY3Rpb24gYWN0cyBhcyBhbiBpdGVyYXRvciBzbyB0aGF0IHRoZSBwcm9taXNlIGNoYWluIGtub3dzIHdoaWNoIFxyXG4gICAgZGF0YXBvaW50IHRvIGhhbmRsZSBhbmQgdG8gYW5pbWF0ZVxyXG4gICAgKi9cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICBhbmlTZXR0aW5ncy5jdXJyZW50Um91bmQgKz0gMTtcclxuICAgICAgICBwbGFjZWhvbGRlci51cGRhdGVQb2ludCA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXNvbHZlKGFuaVNldHRpbmdzKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLypcclxuSGFuZGxlIGFsbCBDU1MgYW5pbWF0aW9ucyBieSBjcmVhdGluZyBhIFByb21pc2UgY2hhaW4gdGhyb3VnaCBhIGZvciBsb29wLlxyXG4qL1xyXG5mdW5jdGlvbiBhbmltYXRvckNvbnRyb2woZHBzKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciBudW1Db250YWluZXIgPSAkKFwiI251bUNvbnRhaW5lclwiKSxcclxuICAgICAgICBjaGFpbiA9IFByb21pc2UucmVzb2x2ZShkcHMpO1xyXG5cclxuICAgIG51bUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZHBzLmRhdGFwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgZGF0YXBvaW50ID0gZHBzLmRhdGFwb2ludHNbaV07XHJcbiAgICAgICAgaWYgKGRhdGFwb2ludC51cGRhdGVQb2ludCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjaGFpbiA9IGNoYWluXHJcbiAgICAgICAgICAgICAgICAudGhlbihydW5BbmltYXRpb24oXCJ4VG9NYWNoaW5lXCIsIGRhdGFwb2ludC54KSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcGxhY2VYRXF1KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oc2hvd0V2YWx1YXRlRXF1KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oc2hvd1lBbnMpXHJcbiAgICAgICAgICAgICAgICAudGhlbihzaG93RXF1YXRpb25BZ2FpbilcclxuICAgICAgICAgICAgICAgIC50aGVuKHJ1bkFuaW1hdGlvbihcIm1hY2hpbmVUb1lcIiwgZGF0YXBvaW50LnkpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocGxhY2VZVmFsdWUpXHJcbiAgICAgICAgICAgICAgICAudGhlbihydW5BbmltYXRpb24oXCJ5VG9TdGF0dXNCYXJcIiwgYCgke2RhdGFwb2ludC54fSwke2RhdGFwb2ludC55fSlgKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc2V0Um91bmQpXHJcbiAgICAgICAgICAgICAgICAudGhlbihzaG93RGVmYXVsdEVxdSlcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihwbG90dGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hhaW4gPSBjaGFpbi50aGVuKHVwZGF0ZVJvdW5kKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
