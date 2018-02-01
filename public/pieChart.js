var PieChart = function(arr1, arr2){
  var container = document.querySelector('#pie-chart');

  var chart = new Highcharts.Chart({
    chart: {
      type: 'pie',
      renderTo: container
    },
    title: {
      text: 'Pokemon Types I\'ve Caught'
    },
    series:[{
      name:'Type',
      data:[{
        name: nameX,
        y: x,
        // color: '#ffac33'
      },
      {
        name: nameY,
        y: y,
        // color: '#73b7ff',
        // sliced: true
      },
      {
        name: nameZ,
        y:z,
        color: '#00ba2f'
      }]
    }]
  });
}
