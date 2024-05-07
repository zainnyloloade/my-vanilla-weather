function refreshWeather (response){
let tempElement = document.querySelector("#temp");
let temp = response.data.temp.current 

tempElement.innerHTML = Math.round(temp);
   
}
function searchCity(city) {
 let apiKey = "fa49b3b035f29f4a1887od48f7teb11d";
 let apiUrl = 
 `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(refreshWeather);
}


function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);