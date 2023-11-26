// 1 - Get all the countries data using uri - 

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Filter countries belonging to Asia
    const asiaCountries = data.filter(country => {
      return country.continents.includes('Asia');
    });

    // Display details of Asia countries in console
    console.log(asiaCountries);
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });


// 2 - get all the countriess with population is less than 2 lakhs - 
     
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Filter countries with population less than 200,000
    const countriesWithLowPopulation = data.filter(country => {
      // Check if population is less than 200,000 (2 lakhs)
      return country.population < 200000;
    });

    // Display details of countries with low population in console
    console.log(countriesWithLowPopulation);
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });


// 3 - print all the details like name capital flags using forEach function -

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Filter countries with population less than 200,000
    const countriesWithLowPopulation = data.filter((country) => {
      // Check if population is less than 200,000 (2 lakhs)
      return country.population < 200000;
    });

    // Print details of countries with low population using forEach
    countriesWithLowPopulation.forEach((country) => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital);
      console.log("Flag:", country.flags.png);
      console.log("--------------------------");
    });
  })
  .catch((error) => {
    console.log("Error fetching data:", error);
  });



