//    display the all flags with the help of the url

  var vsk = new XMLHttpRequest();
  vsk.open("GET", "https://restcountries.eu/rest/v2/all");
  vsk.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);
  };