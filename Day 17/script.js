var rest_api = "https://restcountries.com/v3.1/all";

async function api() {
  var url = fetch(rest_api);
  var out = await (await url).json();

  var parent = document.querySelector(".row");
  for (let i of out) {
    try {
      var data_cont = document.createElement("div");
      data_cont.classList.add("card");

      var lat = i.latlng[0];
      var lng = i.latlng[1];
      data_cont.setAttribute("lat", lat);
      data_cont.setAttribute("lng", lng);

      var country_name = document.createElement("h2");
      country_name.innerText = i.name.common;
      data_cont.append(country_name);

      var country_flag = document.createElement("img");
      country_flag.setAttribute("src", i.flags.png);
      data_cont.append(country_flag);

      var country_capital = document.createElement("p");
      country_capital.innerText = "Capital : " + i.capital[0];
      data_cont.append(country_capital);

      var country_region = document.createElement("p");
      country_region.innerText = "Region : " + i.region;
      data_cont.append(country_region);

      var country_population = document.createElement("p");
      country_population.innerText = "population : " + i.population;
      data_cont.append(country_population);

      var country_code = document.createElement("p");
      country_code.innerText = "Contry Code : " + i.cca3;
      data_cont.append(country_code);

      var click_btn = document.createElement("button");
      click_btn.setAttribute("onclick", "clicking(this)");
      click_btn.innerHTML = "Click for Weather";
      data_cont.append(click_btn);

      parent.append(data_cont);
    } catch (err) {}
  }
}
api();

async function clicking(e) {
  var parent = e.parentElement;

  var lat = parent.getAttribute("lat");
  var lon = parent.getAttribute("lng");
  var api_key = "02c0a4cb6d534fb8ec504bd1d2f69fe2";
  var weather_api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;
  var weather_url = fetch(weather_api);
  var out1 = await (await weather_url).json();

  var result = document.querySelector("body div.container");
  result.innerHTML = "";
  var data_ele = document.createElement("h1");
  data_ele.classList.add("cName");
  var data_ele1 = document.createElement("p");
  data_ele.classList.add("cWeather");

  data_ele.innerText = JSON.stringify(out1.sys.country);
  data_ele1.innerText = JSON.stringify(out1.weather);
  result.append(data_ele);
  result.append(data_ele1);
}
