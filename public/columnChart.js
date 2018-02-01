var ColumnChart = function(subregionName, arr1, arr2){
  var container = document.querySelector('#column-chart');

  var chart = new Highcharts.Chart({
    chart: {
      type: 'column',
      renderTo: container
    },
    title:{
      text: 'Our Favourite Programming Languages'
    },
    series:[{
      name: subregionName,
      data: arr1,
      color: '#000'
    },
    // {
    //   name: 'Cohort 18',
    //   data: [8, 12, 11, 1],
    //   color: 'tomato'
    // }
    
    ],
    xAxis: {
      categories: arr2
    }



  })
}
