var kanbanchart = kanbanchart || {};

/* To draw burn-down chart
 */
kanbanchart.drawChart = function(data, target) {
  var myChart = echarts.init(document.getElementById(target));
  var option = {
    
  };  

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
};

