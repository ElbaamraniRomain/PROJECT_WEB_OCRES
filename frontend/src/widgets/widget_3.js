import React from 'react';


// function searchWeather(city) {
//     console.info(city)
//     // Création de l'objet apiWeather
//     const apiWeather = new API_WEATHER(city);
//     // Appel de la fonction fetchTodayForecast
  
//     apiWeather
//       .fetchTodayForecast()
//       .then(function (response) {
//         // Récupère la donnée d'une API
//         const data = response.data.list;
  
//         for (let i = 0; i < 4; i++) {
//           // On récupère l'information principal
//           const main = data[i].weather[0].main;
//           const description = data[i].weather[0].description;
//           const temp = data[i].temp.day;
//           const icon = apiWeather.getHTMLElementFromIcon(data[i].weather[0].icon);
  
//           // Modifier le DOM
//           document.getElementById(`day${i}-forecast-main`).innerHTML = main;
//           document.getElementById(`day${i}-forecast-more-info`).innerHTML = description;
//           document.getElementById(`day${i}-icon-weather-container`).innerHTML = icon;
//           document.getElementById(`day${i}-forecast-temp`).innerHTML = `${temp}°C`;
//         }
//       })
//       .catch(function (error) {
//         // Affiche une erreur
//         console.error(error);
//       });
//   }

const Widget3 = () => {
    return(
        <div className="Widget section">
            <div className="card z-depth-0 Widget_1-summary">
                <div className="card-content gray-text text-darken-3">
                    <span className="card-title">Widget 3</span>
                    {/* <p>Widget content</p> */}
                    {/* <div class="container">
                        <div class="input-group mb-5 offset-4 col-4">
                            <input id="city-input" type="text" class="form-control" placeholder="Rentrer le nom d'une ville"/>
                            <div class="input-group-append">
                                <button id="city-input-button" class="btn btn-success" type="submit" onclick="SearchWeather(document.getElementById('city-input').value)">Actualiser</button>
                            </div>
                        </div>
                    </div>                     */}
                    </div>
                </div>
                {/* <script src="API_Weather.js"></script>
                <script src="script.js"></script> */}
            </div>
    )
}

export default Widget3