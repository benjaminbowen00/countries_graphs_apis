var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function(){
  if (this.status !== 200) {return;}
  var jsonString = this.responseText;
  var countries = JSON.parse(jsonString);
  var jsonStringCountries = JSON.stringify(countries);
  localStorage.setItem('Countries Array', jsonStringCountries);
}

var getCountries = function(){
  var jsonString = localStorage.getItem('Countries Array');
  var countries = JSON.parse(jsonString);
  return countries;
}

var getSubRegionCountries = function(subregion){
  var countries = getCountries();
  return countries.filter(x => x.subregion === subregion);
}

var getCountryNameArray = function(countries){
  return countries.map(x => x.name);
}

var getCountryPopulationArray = function(countries){
  return countries.map(x => x.population);
}

var getFinalPopulationArray = function(subregion){
  return getCountryPopulationArray(getSubRegionCountries(subregion));
}
var getFinalNameArray = function(subregion){
  return getCountryNameArray(getSubRegionCountries(subregion));
}

var formColumnChart = function(subregion){
  new ColumnChart(subregion, getFinalPopulationArray(subregion), getFinalNameArray(subregion));
}

window.addEventListener("load", function(){
  console.log("Hello");
  // new PieChart(5,6,7, "Pikachu", "Raichu", "Bulbasaur");
  new ColumnChart([2,3,4], ["Thailand", "Vietnam", "Laos"]);
  new ColumnChart("South-Eastern Asia", getFinalPopulationArray(), getFinalNameArray());

  formColumnChart("Northern Europe");

  var url = "https://restcountries.eu/rest/v2";
  makeRequest(url, requestComplete);
});
