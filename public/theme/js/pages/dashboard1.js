'use strict';(function($){$(document).ready(function(){"use strict";Demo.init();Core.init();$('.allcp-panels').allcppanel({grid:'.allcp-grid',draggable:true,preserveGrid:true,onStart:function(){},onFinish:function(){$('.allcp-panels').addClass('animated fadeIn').removeClass('fade-onload');demoHighCharts.init();runVectorMaps();},onSave:function(){$(window).trigger('resize');}});var taskWidget=$('div.task-widget');var taskItems=taskWidget.find('li.task-item');taskWidget.sortable({items:taskItems,handle:'.task-menu',axis:'y',scroll:false,connectWith:".task-list",update:function(event,ui){var Item=ui.item;var ParentList=Item.parent();if(ParentList.hasClass('task-current')){Item.removeClass('item-checked').find('input[type="checkbox"]').prop('checked',false);}
if(ParentList.hasClass('task-completed')){Item.addClass('item-checked').find('input[type="checkbox"]').prop('checked',true);}}});taskItems.on('click',function(e){e.preventDefault();var This=$(this);var Target=$(e.target);if(Target.is('.task-menu')&&Target.parents('.task-completed').length){This.remove();return;}
if(Target.parents('.task-handle').length){if(This.hasClass('item-checked')){This.removeClass('item-checked').find('input[type="checkbox"]').prop('checked',false);}
else{This.addClass('item-checked').find('input[type="checkbox"]').prop('checked',true);}}});var highColors=[bgSystem,bgSuccess,bgWarning,bgPrimary];var chart101=c3.generate({bindto:'#pie-chart1',color:{pattern:[bgDangerLr,bgSuccessLr,bgPrimaryL]},padding:{top:0,right:0,bottom:40,left:0,},data:{columns:[['Option 1',40],['Option 2',31],['Option 3',19]],type:'pie',onclick:function(d,i){console.log("onclick",d,i);},onmouseover:function(d,i){console.log("onmouseover",d,i);},onmouseout:function(d,i){console.log("onmouseout",d,i);}},pie:{label:{show:false}}});var ecomChart=$('#sales_chart1');if(ecomChart.length){ecomChart.highcharts({credits:false,colors:highColors,chart:{backgroundColor:'transparent',className:'',type:'line',zoomType:'x',panning:true,panKey:'shift',marginTop:45,marginRight:1},title:{text:null},xAxis:{gridLineColor:'#EEE',lineColor:'#EEE',tickColor:'#EEE',categories:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']},yAxis:{min:0,tickInterval:5,gridLineColor:'#EEE',title:{text:null}},plotOptions:{spline:{lineWidth:3},area:{fillOpacity:0.2}},legend:{enabled:true,floating:false,align:'right',verticalAlign:'top',x:-15},series:seriesData});}
function runVectorMaps(){var runJvectorMap=function(){var mapData=[900,700,350,500];$('#WidgetMap').vectorMap({map:'us_lcc_en',backgroundColor:'transparent',series:{markers:[{attribute:'r',scale:[3,7],values:mapData}]},regionStyle:{initial:{fill:'#cfdce2'},hover:{"fill-opacity":0.3}}});var states=['US-MT','US-NV','US-IA'];var colors=[bgInfo,bgPrimaryL,bgSystemL];$.each(states,function(i,e){$("#WidgetMap path[data-code="+e+"]").css({fill:colors[i]});});};if($('#WidgetMap').length){runJvectorMap();}}
$('#external-events .fc-event').each(function(){$(this).data('event',{title:$.trim($(this).text()),stick:true,className:'fc-event-'+$(this).attr('data-event')});$(this).draggable({zIndex:999,revert:true,revertDuration:0});});var Calendar=$('#calendar');var Picker=$('.inline-mp');Calendar.fullCalendar({dayNamesShort:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],header:{left:'prev,next today',center:'title',right:'month,agendaWeek,agendaDay'},editable:true,firstDay:1,events:[{title:'International Literacy Day 2016',start:'2016-03-04',end:'2016-03-04',className:'fc-event-default'},{title:'International Literacy Day 2016',start:'2016-03-28',end:'2016-03-28',className:'fc-event-default'},{title:'Leadership Strategies Conference',start:'2016-03-5',end:'2016-03-5',className:'fc-event-success'},{title:'Seminar: Fundamentals of Strategic Planning',start:'2016-03-13',end:'2016-03-13',className:'fc-event-warning'},{title:'Project Management Seminar',start:'2016-03-20',end:'2016-03-20',className:'fc-event-warning'},{title:'Workshop:Customer Service Workshop',start:'2016-03-8',end:'2016-03-8',className:'fc-event-primary'},{title:'Critical Thinking Workshop',start:'2016-03-9',end:'2016-03-9',className:'fc-event-primary'},{title:'International Labor Day 2016',start:'2016-03-21',end:'2016-03-21',className:'fc-event-alert'},{title:'Meeting: Leading Your Team to Success',start:'2016-03-23',end:'2016-03-23',className:'fc-event-alert'},{title:'Tools and Techniques for Mastering Data',start:'2016-03-29',end:'2016-03-29',className:'fc-event-success'},{title:'Leadership Strategies Conference',start:'2016-03-15',end:'2016-03-15',className:'fc-event-success'},{title:'Seminar: Fundamentals of Strategic Planning',start:'2016-03-25',end:'2016-03-25',className:'fc-event-warning'},{title:'Project Management Seminar',start:'2016-03-19',end:'2016-03-19',className:'fc-event-warning'},{title:'Workshop:Customer Service Workshop',start:'2016-03-18',end:'2016-03-18',className:'fc-event-primary'},{title:'Critical Thinking Workshop',start:'2016-03-14',end:'2016-03-14',className:'fc-event-primary'},{title:'International Labor Day 2016',start:'2016-03-22',end:'2016-03-22',className:'fc-event-alert'},{title:'Meeting: Leading Your Team to Success',start:'2016-03-24',end:'2016-03-24',className:'fc-event-alert'},{title:'Tools and Techniques for Mastering Data',start:'2016-03-30',end:'2016-03-30',className:'fc-event-success'}],viewRender:function(view){if(Picker.hasClass('hasMonthpicker')){var selectedDate=Calendar.fullCalendar('getDate');var formatted=moment(selectedDate,'MM-DD-YYYY').format('MM/YY');Picker.monthpicker("setDate",formatted);}
var titleContainer=$('.fc-title-clone');if(!titleContainer.length){return;}
titleContainer.html(view.title);},droppable:true,drop:function(){if(!$(this).hasClass('event-recurring')){$(this).remove();}},eventRender:function(event,element){$(element).attr("data-original-title",event.title);$(element).tooltip({container:'body',delay:{"show":100,"hide":200}});$(element).on('show.bs.tooltip',function(){var autoClose=setTimeout(function(){$('.tooltip').fadeOut();},3500);});}});Picker.monthpicker({prevText:'<i class="fa fa-chevron-left"></i>',nextText:'<i class="fa fa-chevron-right"></i>',showButtonPanel:false,onSelect:function(selectedDate){var formatted=moment(selectedDate,'MM/YYYY').format('MM/DD/YYYY');Calendar.fullCalendar('gotoDate',formatted)}});$('#compose-event-btn').magnificPopup({removalDelay:500,callbacks:{beforeOpen:function(e){$('body').addClass('mfp-bg-open');this.st.mainClass=this.st.el.attr('data-effect');},afterClose:function(e){$('body').removeClass('mfp-bg-open');}},midClick:true});$("#eventDate").datepicker({numberOfMonths:1,prevText:'<i class="fa fa-chevron-left"></i>',nextText:'<i class="fa fa-chevron-right"></i>',showButtonPanel:false,beforeShow:function(input,inst){var newclass='allcp-form';var themeClass=$(this).parents('.allcp-form').attr('class');var smartpikr=inst.dpDiv.parent();if(!smartpikr.hasClass(themeClass)){inst.dpDiv.wrap('<div class="'+themeClass+'"></div>');}}});});})(jQuery);