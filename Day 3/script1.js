//    display the all flags with the help of the url

  // var vsk = new XMLHttpRequest();
  // vsk.open("GET", "https://restcountries.eu/rest/v2/all");
  // vsk.onload = function () {
  //   var data = JSON.parse(this.response);
  //   console.log(data);
  // };

// var scores = [1,2,3,4,5,6];
//  function print (element){
//     console.log(element);
// }
 
//  const print2 = (element) => {
//    console.log(element);
// }
// scores.forEach(print2);

// using rest countries api display all the flags using in the console

      //  using fetch method - 
   
  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Extracting flags and logging them to the console
    data.forEach(country => {
      if (country.flags) {
        console.log(country.flags.png);
      }
    });
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });
