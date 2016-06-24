"use strict";$(document).ready(function(){$.getJSON("../funcMachineSettings.json",function(n){window.professorConfigFile=n,$.each(n,function(n,e){var o=$("<option></option>").append(e.name);$(o).val(e.equation),$("select").append(o),0===n&&changePlot(e.equation)})})});
"use strict";function startFuncMach(){var n=$("input[type='number']"),e=$("#animate:checked").length>0,t=$("#showGraph:checked").length>0;({callback:fun,animate:e,showGraph:t,equation:"3x+2",window:{x:{min:-10,max:10},y:{min:-10,max:10}}});console.log(e,t),$.each(n,function(n,e){console.log(n,1*$(e).val())})}function changePlot(n){console.log(professorConfigFile[0].equation,n),$.each(professorConfigFile,function(e,t){console.log(t.equation,n),t.equation===n}),$(o).empty("");var e="y = ",t=""+n,o=$("#functionMachine #equ"),c=$("#functionMachine #y");katex.render(e,c[0]),katex.render(t,o[0])}$("select").change(function(n){changePlot(n.target.value)}),$(document).keypress(function(n){13==n.which&&startFuncMach()}),$("input[type='button'][value='Go!']").click(function(){startFuncMach()});
"use strict";
"use strict";
"use strict";!function(){for(var t,p,d,n,r=$("tbody"),a=19,e=1;e<=a;e++)n=$("<input>"),t=$("<td></td>"),p=$("<td></td>"),d=$("<tr></tr>"),$(d).attr("id","row"+e),$(n).attr("name","input"+e).attr("type","number"),$(t).append(n),$(d).append(t).append(p),$(r).append(d)}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFqYXguanMiLCJldmVudHMuanMiLCJhbmltYXRvcmNvbnRyb2wuanMiLCJhbmltYXRvcmNvbnRyb2wyLmpzIiwibWFpbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImdldEpTT04iLCJyZXN1bHQiLCJ3aW5kb3ciLCJwcm9mZXNzb3JDb25maWdGaWxlIiwiZWFjaCIsImkiLCJmaWVsZCIsIm9wdCIsImFwcGVuZCIsIm5hbWUiLCJ2YWwiLCJlcXVhdGlvbiIsImNoYW5nZVBsb3QiLCJzdGFydEZ1bmNNYWNoIiwieGlucHV0cyIsImhpZGVBbmltYXRpb25DaGVja2VkIiwibGVuZ3RoIiwiaGlkZUdyYXBoQ2hlY2tlZCIsImNhbGxiYWNrIiwiZnVuIiwiYW5pbWF0ZSIsInNob3dHcmFwaCIsIngiLCJtaW4iLCJtYXgiLCJ5IiwiY29uc29sZSIsImxvZyIsIml0ZW0iLCJlcXVQYXJhIiwiZW1wdHkiLCJlcXVhdCIsInlQYXJhIiwia2F0ZXgiLCJyZW5kZXIiLCJjaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJrZXlwcmVzcyIsIndoaWNoIiwiY2xpY2siLCJ0ZDEiLCJ0ZDIiLCJ0ciIsImlucHV0IiwidGJvZHkiLCJyb3dDb3VudCIsImoiLCJhdHRyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFJQSxHQUFFQyxVQUFVQyxNQUFNLFdBRWRGLEVBQUVHLFFBQVEsOEJBQStCLFNBQVVDLEdBRS9DQyxPQUFPQyxvQkFBc0JGLEVBRTdCSixFQUFFTyxLQUFLSCxFQUFRLFNBQVVJLEVBQUdDLEdBRXhCLEdBQUlDLEdBQU1WLEVBQUUscUJBQXFCVyxPQUFPRixFQUFNRyxLQUU5Q1osR0FBRVUsR0FBS0csSUFBSUosRUFBTUssVUFFakJkLEVBQUUsVUFBVVcsT0FBT0QsR0FFVCxJQUFORixHQUNBTyxXQUFXTixFQUFNSztBQ2ZyQyxZQUFBLFNBQVNFLGlCQUVMLEdBQUlDLEdBQVVqQixFQUFFLHdCQUVaa0IsRUFBdUJsQixFQUFFLG9CQUFvQm1CLE9BQVMsRUFDdERDLEVBQW1CcEIsRUFBRSxzQkFBc0JtQixPQUFTLElBRWhERSxTQUFVQyxJQUNWQyxRQUFTTCxFQUNUTSxVQUFXSixFQUNYTixTQUFVLE9BQ1ZULFFBQ0lvQixHQUNJQyxRQUNBQyxJQUFLLElBRVRDLEdBQ0lGLFFBQ0FDLElBQUssTUFLckJFLFNBQVFDLElBQUlaLEVBQXNCRSxHQUVsQ3BCLEVBQUVPLEtBQUtVLEVBQVMsU0FBU1QsRUFBR0ssR0FDeEJnQixRQUFRQyxJQUFJdEIsRUFBa0IsRUFBZlIsRUFBRWEsR0FBS0EsU0FpQjlCLFFBQVNFLFlBQVdGLEdBRWhCZ0IsUUFBUUMsSUFBSXhCLG9CQUFvQixHQUFHUSxTQUFVRCxHQUU3Q2IsRUFBRU8sS0FBS0Qsb0JBQXFCLFNBQVNFLEVBQUd1QixHQUNwQ0YsUUFBUUMsSUFBSUMsRUFBS2pCLFNBQVVELEdBQ3ZCa0IsRUFBS2pCLFdBQWFELElBSzFCYixFQUFFZ0MsR0FBU0MsTUFBTSxHQUNqQixJQUFJTCxHQUFBLE9BQ0FNLEVBQUEsR0FBV3JCLEVBQ1htQixFQUFVaEMsRUFBRSx5QkFDWm1DLEVBQVFuQyxFQUFFLHNCQUVkb0MsT0FBTUMsT0FBT1QsRUFBR08sRUFBTSxJQUN0QkMsTUFBTUMsT0FBT0gsRUFBT0YsRUFBUSxJQUloQ2hDLEVBQUUsVUFBVXNDLE9BQU8sU0FBVUMsR0FDekJ4QixXQUFXd0IsRUFBRUMsT0FBT0MsU0FJeEJ6QyxFQUFFQyxVQUFVeUMsU0FBUyxTQUFVSCxHQUNaLElBQVhBLEVBQUVJLE9BQ0YzQixrQkFLUmhCLEVBQUUscUNBQXFDNEMsTUFBTSxXQUN6QzVCO0FDeUpKO0FDdk9BO0FDQUEsY0FBQyxXQVdHLElBQUssR0FORDZCLEdBQ0FDLEVBQ0FDLEVBQ0FDLEVBSkFDLEVBQVFqRCxFQUFFLFNBS1ZrRCxFQUFXLEdBRU5DLEVBQUksRUFBR0EsR0FBS0QsRUFBVUMsSUFDM0JILEVBQVFoRCxFQUFFLFdBQ1Y2QyxFQUFNN0MsRUFBRSxhQUNSOEMsRUFBTTlDLEVBQUUsYUFDUitDLEVBQUsvQyxFQUFFLGFBRVBBLEVBQUUrQyxHQUFJSyxLQUFLLEtBQVgsTUFBdUJELEdBRXZCbkQsRUFBRWdELEdBQU9JLEtBQUssT0FBZCxRQUE4QkQsR0FBS0MsS0FBSyxPQUFRLFVBRWhEcEQsRUFBRTZDLEdBQUtsQyxPQUFPcUMsR0FDZGhELEVBQUUrQyxHQUFJcEMsT0FBT2tDLEdBQUtsQyxPQUFPbUMsR0FDekI5QyxFQUFFaUQsR0FBT3RDLE9BQU9vQyIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgJC5nZXRKU09OKFwiLi4vZnVuY01hY2hpbmVTZXR0aW5ncy5qc29uXCIsIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHdpbmRvdy5wcm9mZXNzb3JDb25maWdGaWxlID0gcmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgJC5lYWNoKHJlc3VsdCwgZnVuY3Rpb24gKGksIGZpZWxkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG9wdCA9ICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKS5hcHBlbmQoZmllbGQubmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJChvcHQpLnZhbChmaWVsZC5lcXVhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICQoXCJzZWxlY3RcIikuYXBwZW5kKG9wdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQbG90KGZpZWxkLmVxdWF0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuIiwiZnVuY3Rpb24gc3RhcnRGdW5jTWFjaCgpIHtcclxuICAgIFxyXG4gICAgdmFyIHhpbnB1dHMgPSAkKFwiaW5wdXRbdHlwZT0nbnVtYmVyJ11cIiksXHJcbiAgICAgICAgZ3JhcGhDb25maWcgPSBbXSxcclxuICAgICAgICBoaWRlQW5pbWF0aW9uQ2hlY2tlZCA9ICQoXCIjYW5pbWF0ZTpjaGVja2VkXCIpLmxlbmd0aCA+IDAsXHJcbiAgICAgICAgaGlkZUdyYXBoQ2hlY2tlZCA9ICQoXCIjc2hvd0dyYXBoOmNoZWNrZWRcIikubGVuZ3RoID4gMCxcclxuICAgICAgICBncmFwaE9wdCA9IHtcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bixcclxuICAgICAgICAgICAgYW5pbWF0ZTogaGlkZUFuaW1hdGlvbkNoZWNrZWQsXHJcbiAgICAgICAgICAgIHNob3dHcmFwaDogaGlkZUdyYXBoQ2hlY2tlZCxcclxuICAgICAgICAgICAgZXF1YXRpb246ICczeCsyJyxcclxuICAgICAgICAgICAgd2luZG93OiB7XHJcbiAgICAgICAgICAgICAgICB4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluOiAtMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4OiAxMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICBtaW46IC0xMCxcclxuICAgICAgICAgICAgICAgICAgICBtYXg6IDEwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhoaWRlQW5pbWF0aW9uQ2hlY2tlZCwgaGlkZUdyYXBoQ2hlY2tlZCk7XHJcblxyXG4gICAgJC5lYWNoKHhpbnB1dHMsIGZ1bmN0aW9uKGksIHZhbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGksICQodmFsKS52YWwoKSAqIDEpO1xyXG4gICAgICAgIHZhciBncmFwaE9wdCA9IHtcclxuICAgICAgICAgICAgZGF0YTogW3tcclxuICAgICAgICAgICAgICAgIHg6IDUsXHJcbiAgICAgICAgICAgICAgICB5OiAxNyxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVBvaW50OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB4OiAyLFxyXG4gICAgICAgICAgICAgICAgeTogOCxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVBvaW50OiB0cnVlXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuLy9EaXBzbGF5IEthdGV4IGVxdWF0aW9uXHJcbmZ1bmN0aW9uIGNoYW5nZVBsb3QodmFsKSB7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKHByb2Zlc3NvckNvbmZpZ0ZpbGVbMF0uZXF1YXRpb24sIHZhbCk7XHJcbiAgICBcclxuICAgICQuZWFjaChwcm9mZXNzb3JDb25maWdGaWxlLCBmdW5jdGlvbihpLCBpdGVtKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbS5lcXVhdGlvbiwgdmFsKVxyXG4gICAgICAgIGlmIChpdGVtLmVxdWF0aW9uID09PSB2YWwpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKGVxdVBhcmEpLmVtcHR5KFwiXCIpO1xyXG4gICAgdmFyIHkgPSBgeSA9IGAsXHJcbiAgICAgICAgZXF1YXQgPSBgJHt2YWx9YCxcclxuICAgICAgICBlcXVQYXJhID0gJChcIiNmdW5jdGlvbk1hY2hpbmUgI2VxdVwiKSxcclxuICAgICAgICB5UGFyYSA9ICQoXCIjZnVuY3Rpb25NYWNoaW5lICN5XCIpO1xyXG5cclxuICAgIGthdGV4LnJlbmRlcih5LCB5UGFyYVswXSk7XHJcbiAgICBrYXRleC5yZW5kZXIoZXF1YXQsIGVxdVBhcmFbMF0pO1xyXG59XHJcblxyXG4vKioqKipET0NVTUVOVCBvbmNoYW5nZSBFVkVOVCBIQU5ETEVSKioqKiovXHJcbiQoXCJzZWxlY3RcIikuY2hhbmdlKGZ1bmN0aW9uIChlKSB7ICAgIFxyXG4gICAgY2hhbmdlUGxvdChlLnRhcmdldC52YWx1ZSk7XHJcbn0pO1xyXG5cclxuLyoqKipET0NVTUVOVCBrZXlkb3duIEVWRU5UIEhBTkRMRVIqKioqL1xyXG4kKGRvY3VtZW50KS5rZXlwcmVzcyhmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKGUud2hpY2ggPT0gMTMpIHtcclxuICAgICAgICBzdGFydEZ1bmNNYWNoKCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLyoqKioqR08hIENsaWNrKioqKiovXHJcbiQoXCJpbnB1dFt0eXBlPSdidXR0b24nXVt2YWx1ZT0nR28hJ11cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgc3RhcnRGdW5jTWFjaCgpO1xyXG59KTtcclxuIiwiLy92YXIgbGFzdFNoZWV0ID0gZG9jdW1lbnQuc3R5bGVTaGVldHNbZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoIC0gMV07XG4vL1xuLy8vLyBUT0RPOiBGdW5jdGlvbiBtYWNoaW5lIGluXG4vL1xuLy8vL0FscGhhIElEIGlzIHRvIGlkZW50aWZ5IHRoZSBkaWZmZXJlbnQgYW5pbWF0aW9ucyB0aGF0IGNvdWxkIGhhcHBlbiBpbiB0aGUgYXBwbGljYXRpb25cbi8vdmFyIGFscGhhaWQgPSBbJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCcsICdpJywgJ2onLCAnaycsICdsJywgJ20nLCAnbicsICdvJywgJ3AnLCAncScsICdyJ10sXG4vLyAgICBzdGF0dXNCYXIgPSB3YW5kLnF1ZXJBcG5kcihcIiNzdGF0dXMgcFwiKSxcbi8vICAgIHN0YXJ0aW5nRGF0YSA9IFtdO1xuLy9cbi8vLyoqKioqKioqXCJDT05TVFJVQ1RPUlwiIChub3QgZXhhY3RseSkgZnVuY3Rpb25zKioqKioqKioqKi9cbi8vZnVuY3Rpb24gYW5pQ29uZmlnKGJlZ0Nvb3JEYXRhLCBlbmRDb29yRGF0YSwgbnVtLCBhbHBoYWlkLCBpKSB7XG4vLyAgICB2YXIgYW5pbWF0ZUNvbmZpZyA9IHt9O1xuLy8gICAgYW5pbWF0ZUNvbmZpZy5iZWdDb29yRGF0YSA9IGJlZ0Nvb3JEYXRhO1xuLy8gICAgYW5pbWF0ZUNvbmZpZy5lbmRDb29yRGF0YSA9IGVuZENvb3JEYXRhO1xuLy8gICAgYW5pbWF0ZUNvbmZpZy5udW0gPSBudW07XG4vLyAgICBhbmltYXRlQ29uZmlnLmFscGhhaWQgPSBhbHBoYWlkO1xuLy8gICAgYW5pbWF0ZUNvbmZpZy5kZWxheSA9IGk7XG4vLyAgICByZXR1cm4gYW5pbWF0ZUNvbmZpZztcbi8vfVxuLy9cbi8vZnVuY3Rpb24gYW5pbWF0aW9uVGVtcGxhdGUoYW5pbWF0ZUNvbmZpZykge1xuLy8gICAgXCJ1c2Ugc3RyaWN0XCI7XG4vLyAgICB2YXIgc3RhcnRUb3BPZmYgPSBhbmltYXRlQ29uZmlnLmJlZ0Nvb3JEYXRhLnRvcCArIDUsXG4vLyAgICAgICAgc3RhcnRSaWdodE9mZiA9IGFuaW1hdGVDb25maWcuYmVnQ29vckRhdGEucmlnaHQgLSAzMCxcbi8vICAgICAgICBlbmRUb3BPZmYgPSBhbmltYXRlQ29uZmlnLmVuZENvb3JEYXRhLnRvcCxcbi8vICAgICAgICBlbmRSaWdodE9mZiA9IGFuaW1hdGVDb25maWcuZW5kQ29vckRhdGEucmlnaHQsXG4vLyAgICAgICAgaGlnaHdheVBhdGggPSAyNDYsXG4vLyAgICAgICAgbnVtQ29udGFpbmVyID0gd2FuZC5xdWVyQXBuZHIoXCIjbnVtQ29udGFpbmVyXCIpO1xuLy8gICAgYW5pbWF0ZUNvbmZpZy5udW0uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4vLyAgICBhbmltYXRlQ29uZmlnLm51bS5zdHlsZS50b3AgPSBgJHtzdGFydFRvcE9mZn1weGA7XG4vLyAgICBhbmltYXRlQ29uZmlnLm51bS5zdHlsZS5sZWZ0ID0gYCR7c3RhcnRSaWdodE9mZn1weGA7XG4vLyAgICB3YW5kLmFwbmRyKG51bUNvbnRhaW5lciwgYW5pbWF0ZUNvbmZpZy5udW0pO1xuLy8gICAgbGFzdFNoZWV0Lmluc2VydFJ1bGUoYEBrZXlmcmFtZXMgdG9GdW5jTWFjaGluZSR7YW5pbWF0ZUNvbmZpZy5hbHBoYWlkfSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAwJSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6ICR7c3RhcnRUb3BPZmZ9cHg7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogJHtzdGFydFJpZ2h0T2ZmfXB4O1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgMzMlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6ICR7c3RhcnRUb3BPZmZ9cHg7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogJHtoaWdod2F5UGF0aH1weDtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIDY2JSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAke2VuZFRvcE9mZn1weDtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAke2hpZ2h3YXlQYXRofXB4O1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgOTAlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6ICR7ZW5kVG9wT2ZmfXB4O1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6ICR7ZW5kUmlnaHRPZmZ9cHg7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIH1gLCBsYXN0U2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcbi8vICAgIGFuaW1hdGVDb25maWcubnVtLnN0eWxlLmFuaW1hdGlvbiA9IGB0b0Z1bmNNYWNoaW5lJHthbmltYXRlQ29uZmlnLmFscGhhaWR9IDNzIGVhc2UtaW4tb3V0ICR7YW5pbWF0ZUNvbmZpZy5kZWxheSoxNH1zYDtcbi8vICAgIGFuaW1hdGVDb25maWcubnVtLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4vLyAgICBhbmltYXRlQ29uZmlnLm51bS5zdHlsZS56SW5kZXggPSAnMTAwJztcbi8vXG4vLyAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbi8vICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgICAgIHJlc29sdmUoYW5pbWF0ZUNvbmZpZy5udW0pO1xuLy8gICAgICAgIH0sIGFuaW1hdGVDb25maWcuZGVsYXkgKiAzMDAwKTtcbi8vICAgIH0pO1xuLy99XG4vL1xuLy8vKioqKioqKioqKioqQU5JTUFUSU9OIEZVTkNUSU9OUyoqKioqKioqKioqKioqKioqKioqKiovXG4vL2Z1bmN0aW9uIGFuaW1hdGVUb1N0YXR1c0JhcigpIHtcbi8vICAgIGNvbnNvbGUubG9nKFwiQW5pbWF0ZSB0byBzdGF0dXMgYmFyIGFuZCBwYXNzIHRoZSBpbmZvcm1hdGlvbiB0byB0aGUgZ3JhcGggZnVuY3Rpb25cIik7XG4vL1xuLy8gICAgLy9TaG93IGdyYXBoIGNoZWNrYm94XG4vLyAgICAvL0FuaW1hdGlvbiBjaGVja2JveFxuLy8gICAgLy9FcXVhdGlvblxuLy8gICAgLy9XaW5kb3cgbGltaXRzXG4vLyAgICAvL1ggYW5kIFkgdmFsdWVcbi8vXG4vLyAgICAvL2dyYXBoSXQoKTtcbi8vfVxuLy9cbi8vZnVuY3Rpb24gZXF1QXBwZWFyKGNoYW5nZUVxdSkge1xuLy8gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4vLyAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgICAgIGlmICh0eXBlb2YgY2hhbmdlRXF1ID09PSBcIm51bWJlclwiKSB7XG4vLyAgICAgICAgICAgICAgICBzdGF0dXNCYXIuaW5uZXJUZXh0ID0gXCJcIjtcbi8vICAgICAgICAgICAgICAgIHN0YXR1c0Jhci5pbm5lclRleHQgPSBcIj4+IFJldHVybmluZyBhbnN3ZXIuXCI7XG4vLyAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgZXF1UGFyYS5pbm5lckhUTUwgPSBcIlwiO1xuLy8gICAgICAgICAgICBlcXVQYXJhLnN0eWxlLm9wYWNpdHkgPSAwO1xuLy8gICAgICAgICAgICBrYXRleC5yZW5kZXIoYCR7Y2hhbmdlRXF1fWAsIGVxdVBhcmEpO1xuLy8gICAgICAgICAgICBlcXVQYXJhLnN0eWxlLmFuaW1hdGlvbiA9ICd0ZXh0QXBwZWFyIDFzIGVhc2UtaW4tb3V0Jztcbi8vICAgICAgICAgICAgZXF1UGFyYS5zdHlsZS5vcGFjaXR5ID0gMTtcbi8vICAgICAgICAgICAgcmVzb2x2ZShjaGFuZ2VFcXUpO1xuLy8gICAgICAgIH0sIDE1MDApO1xuLy8gICAgfSk7XG4vL31cbi8vXG4vL2Z1bmN0aW9uIGVxdUFuaW1lRGlzYXBwZWFyKG51bSkge1xuLy8gICAgXCJ1c2Ugc3RyaWN0XCI7XG4vLyAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbi8vICAgICAgICB2YXIgY2hhbmdlRXF1O1xuLy9cbi8vICAgICAgICBpZiAodHlwZW9mIG51bSA9PT0gXCJvYmplY3RcIikge1xuLy8gICAgICAgICAgICBjaGFuZ2VFcXUgPSBnbG9iYWxFcXUucmVwbGFjZShcInhcIiwgYCgke251bS5pbm5lclRleHR9KWApO1xuLy9cbi8vICAgICAgICAgICAgc3RhdHVzQmFyLmlubmVyVGV4dCA9IFwiXCI7XG4vLyAgICAgICAgICAgIHN0YXR1c0Jhci5pbm5lclRleHQgPSBcIj4+IENhbGN1bGF0aW5nXCI7XG4vL1xuLy8gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgICAgICAgIGVxdVBhcmEuc3R5bGUuYW5pbWF0aW9uID0gJ3RleHREaXNhcHBlYXIgMS41cyBlYXNlLWluLW91dCc7XG4vLyAgICAgICAgICAgICAgICByZXNvbHZlKGNoYW5nZUVxdSk7XG4vLyAgICAgICAgICAgIH0sIDE1MDApO1xuLy8gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG51bSA9PT0gXCJzdHJpbmdcIikge1xuLy8gICAgICAgICAgICBjaGFuZ2VFcXUgPSBtYXRoLmV2YWwobnVtKTtcbi8vXG4vLyAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICAgICAgICAgZXF1UGFyYS5zdHlsZS5hbmltYXRpb24gPSAndGV4dERpc2FwcGVhciAxLjVzIGVhc2UtaW4tb3V0Jztcbi8vICAgICAgICAgICAgICAgIHJlc29sdmUoY2hhbmdlRXF1KTtcbi8vICAgICAgICAgICAgfSwgMTUwMCk7XG4vLyAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgcmV0dXJuO1xuLy8gICAgICAgIH1cbi8vICAgIH0pO1xuLy99XG4vL1xuLy9mdW5jdGlvbiBjcmVhdGVBbnMoYW5zKSB7XG4vLyAgICBcInVzZSBzdHJpY3RcIjtcbi8vICAgIHZhciBhbnNDb250YWluZXIgPSB3YW5kLnF1ZXJBcG5kcihcIiNhbnNDb250YWluZXJcIiksXG4vLyAgICAgICAgbnVtID0gd2FuZC5jcnRFbG0oXCJwXCIsIGFucy50b1N0cmluZygpKTtcbi8vICAgIGFuc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuLy9cbi8vICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuLy8gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICAgICB2YXIgZnVuY01hY2hDb29yID0ge1xuLy8gICAgICAgICAgICAgICAgICAgIHRvcDogNTUsXG4vLyAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDMwMFxuLy8gICAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgICAgIGVuZENvb3JEYXRhID0ge307XG4vL1xuLy8gICAgICAgICAgICBlbmRDb29yRGF0YS50b3AgPSBzdGFydGluZ0RhdGFbMF0udG9wICsgNy41O1xuLy8gICAgICAgICAgICBlbmRDb29yRGF0YS5yaWdodCA9IHN0YXJ0aW5nRGF0YVswXS5yaWdodDtcbi8vXG4vLyAgICAgICAgICAgIHZhciBhbmltYXRlQ29uZmlnID0gYW5pQ29uZmlnKGZ1bmNNYWNoQ29vciwgZW5kQ29vckRhdGEsIG51bSwgJ3p6JywgMCk7XG4vL1xuLy8gICAgICAgICAgICBzdGFydGluZ0RhdGEucG9wKCk7XG4vLyAgICAgICAgICAgIHJlc29sdmUoYW5pbWF0ZUNvbmZpZyk7XG4vLyAgICAgICAgfSwgMTUwMCk7XG4vLyAgICB9KTtcbi8vfVxuLy9cbi8vZnVuY3Rpb24gYW5pbWF0ZShpLCBhdykge1xuLy8gICAgY29uc29sZS5sb2coaSwgYXdbaV0pO1xuLy8gICAgdmFyIG51bSA9IHdhbmQuY3J0RWxtKFwicFwiLCBhd1tpXS5udW0pLFxuLy8gICAgICAgIGZ1bmNNYWNoQ29vciA9IHtcbi8vICAgICAgICAgICAgdG9wOiA1NSxcbi8vICAgICAgICAgICAgcmlnaHQ6IDMwMFxuLy8gICAgICAgIH0sXG4vLyAgICAgICAgYW5pbWF0ZUNvbmZpZyA9IGFuaUNvbmZpZyhhd1tpXS5jb29yRGF0YSwgZnVuY01hY2hDb29yLCBudW0sIGFscGhhaWRbaV0sIGkpLFxuLy8gICAgICAgIG51bWJlcklucHV0ID0gYXdbaV0uaW5wdXRUYWcubmFtZS5tYXRjaCgvXFxkKy8pO1xuLy9cbi8vICAgIHN0YXJ0aW5nRGF0YS5wdXNoKGF3W2ldLmNvb3JEYXRhKTtcbi8vXG4vLyAgICAvKkJVRyBGSVgqL1xuLy8gICAgLyp3aGVuIHJ1bm5pbmcgdGhyb3VnaCBhIGxvb3AgdGhpcyBwcm9taXNlIGNoYWluIGlzIGFsbCBydW5uaW5nIHNpbXVsdGFuZW91c2x5Ki9cbi8vICAgIC8qVGhlIHRpbWluZyBpcyBnb2luZyB0byBoYXZlIHRvIGNoYW5nZSBiZWNhdXNlIHRoZSBzZXRUaW1lb3V0cyBhcmUgcnVubmluZyByaWdodCBhZnRlciB0aGUgbG9vcCBtYWtlcyB0aGUgZXhlY3V0aW9uIHN0YWNrKi9cbi8vICAgIC8qVGhlIHRpbWluZyBpcyBhbGwgbWVzc2VkIHVwLiovXG4vLyAgICBhbmltYXRpb25UZW1wbGF0ZShhbmltYXRlQ29uZmlnKVxuLy8gICAgICAgIC50aGVuKGVxdUFuaW1lRGlzYXBwZWFyKVxuLy8gICAgICAgIC50aGVuKGVxdUFwcGVhcilcbi8vICAgICAgICAudGhlbihlcXVBbmltZURpc2FwcGVhcilcbi8vICAgICAgICAudGhlbihlcXVBcHBlYXIpXG4vLyAgICAgICAgLnRoZW4oY3JlYXRlQW5zKVxuLy8gICAgICAgIC50aGVuKGFuaW1hdGlvblRlbXBsYXRlKVxuLy8gICAgICAgIC50aGVuKGZ1bmN0aW9uICh5dmFsKSB7XG4vLyAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuLy8gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgdmFyIHRkID0gd2FuZC5xdWVyQXBuZHIoYCNyb3ckeyhudW1iZXJJbnB1dFswXSoxKX0gdGQ6bnRoLWNoaWxkKDIpYCksXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBgeSA9IGAsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGVxdWF0ID0gYCR7Z2xvYmFsRXF1fWAsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIHl2YWx1ZSA9IHl2YWwuaW5uZXJUZXh0LFxuLy8gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNCYXJDb29yID0ge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxNTAsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNDAwXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIH07XG4vL1xuLy8gICAgICAgICAgICAgICAgICAgIGthdGV4LnJlbmRlcih5LCB5UGFyYSk7XG4vLyAgICAgICAgICAgICAgICAgICAga2F0ZXgucmVuZGVyKGVxdWF0LCBlcXVQYXJhKTtcbi8vICAgICAgICAgICAgICAgICAgICB3YW5kLmFwbmRyKHRkLCB5dmFsdWUpO1xuLy9cbi8vICAgICAgICAgICAgICAgICAgICBhbmltYXRlQ29uZmlnID0gYW5pQ29uZmlnKGF3W2ldLmNvb3JEYXRhLCBzdGF0dXNCYXJDb29yLCB5dmFsLCBcInphXCIsIDApO1xuLy9cbi8vICAgICAgICAgICAgICAgICAgICBzdGF0dXNCYXIuaW5uZXJUZXh0ID0gXCJcIjtcbi8vICAgICAgICAgICAgICAgICAgICBzdGF0dXNCYXIuaW5uZXJUZXh0ID0gXCI+PiBQbG90dGluZyBhbnN3ZXIuXCI7XG4vL1xuLy8gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYW5pbWF0ZUNvbmZpZyk7XG4vLyAgICAgICAgICAgICAgICB9LCAzMDAwKTtcbi8vICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgfSlcbi8vICAgICAgICAudGhlbihhbmltYXRpb25UZW1wbGF0ZSk7XG4vL1xuLy8gICAgICAgIC8qVE9ETzogZXZhbHVhdGUgdGhlIGFycmF5IGluIG9yZGVyIHRvIGNvbnRpbnVlIHRoZSBhcnJheSBhbmltYXRpb247Ki9cbi8vICAgICAgICAvKiogIFdJVEggUFJPTUlTRVMgcGFzcyBhbiBvYmplY3QgdGhyb3VnaG91dCB0aGUgY2hhaW4gYW5kIGV2YWx1YXRlIGl0IGlmIGl0IGlzIGRvbmUuXG4vLyAgICAgICAgLy8qKiAgVGhlIGdyYXBoIHdpbGwgbmVlZCBhbGwgdGhlIGluZm9ybWF0aW9uXG4vLyAgICAgICAgLyoqIEFuaW1hdGUgdHJ1ZSBvciBmYWxzZS5cbi8vICAgICAgICAvKlRPRE86IGlmIGFscmVhZHkgYW5pbWF0ZWQgY2FuIG5vdCByZWFuaW1hdGUgYWdhaW4uKi9cbi8vXG4vL31cbi8vXG4vLy8vSGFuZGxlIGFsbCBDU1MgYW5pbWF0aW9uc1xuLy9mdW5jdGlvbiBhbmltYXRvckNvbnRyb2woYXcsIGZ1bmMpIHtcbi8vICAgIFwidXNlIHN0cmljdFwiO1xuLy8gICAgdmFyIG51bUNvbnRhaW5lciA9IHdhbmQucXVlckFwbmRyKFwiI251bUNvbnRhaW5lclwiKSxcbi8vICAgICAgICBydW5Db3VudGVyID0gLTE7XG4vLyAgICBudW1Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbi8vXG4vLy8vICAgIHZhciBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbi8vLy8gICAgICAgIHJ1bkNvdW50ZXIgKz0gMTtcbi8vLy8gICAgICAgIGlmIChydW5Db3VudGVyID09PSAxOSkge1xuLy8vLyAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuLy8vLyAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RvcFwiKTtcbi8vLy8gICAgICAgIH1cbi8vLy8gICAgICAgIGFuaW1hdGUocnVuQ291bnRlciwgYXcpO1xuLy8vLyAgICAgICAgY29uc29sZS5sb2cocnVuQ291bnRlciwgYXcpO1xuLy8vLyAgICB9LCAxNDAwMCk7XG4vL1xuLy8gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXcubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgICAgYW5pbWF0ZShpLCBhdyk7XG4vLyAgICAgICAgfVxuLy99XG5cInVzZSBzdHJpY3RcIjsiLCJcInVzZSBzdHJpY3RcIjsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgLyoqKipUQUJMRSBNQUtFUioqKiovXHJcbiAgICB2YXIgdGJvZHkgPSAkKFwidGJvZHlcIiksXHJcbiAgICAgICAgdGQxLFxyXG4gICAgICAgIHRkMixcclxuICAgICAgICB0cixcclxuICAgICAgICBpbnB1dCxcclxuICAgICAgICByb3dDb3VudCA9IDE5O1xyXG5cclxuICAgIGZvciAodmFyIGogPSAxOyBqIDw9IHJvd0NvdW50OyBqKyspIHtcclxuICAgICAgICBpbnB1dCA9ICQoXCI8aW5wdXQ+XCIpO1xyXG4gICAgICAgIHRkMSA9ICQoXCI8dGQ+PC90ZD5cIik7XHJcbiAgICAgICAgdGQyID0gJChcIjx0ZD48L3RkPlwiKTtcclxuICAgICAgICB0ciA9ICQoXCI8dHI+PC90cj5cIik7XHJcblxyXG4gICAgICAgICQodHIpLmF0dHIoXCJpZFwiLCBgcm93JHtqfWApO1xyXG5cclxuICAgICAgICAkKGlucHV0KS5hdHRyKFwibmFtZVwiLCBgaW5wdXQke2p9YCkuYXR0cihcInR5cGVcIiwgXCJudW1iZXJcIik7XHJcblxyXG4gICAgICAgICQodGQxKS5hcHBlbmQoaW5wdXQpO1xyXG4gICAgICAgICQodHIpLmFwcGVuZCh0ZDEpLmFwcGVuZCh0ZDIpO1xyXG4gICAgICAgICQodGJvZHkpLmFwcGVuZCh0cik7XHJcbiAgICB9XHJcbn0oKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
