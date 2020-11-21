import React, { useState } from 'react';
const api = {
    key:"85653a68344e22e319dfeae04503dcbd",
    base:"https://api.openweathermap.org/data/2.5/"
}

const Widget2 = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const search = evt =>{
        if(evt.key === "Enter"){
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery('');
                console.log(result);
            });
        }
    }

    const dateBuilder = (d) => {
        let months = ["Janvier", "fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
        let days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];   
        
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }
    return(
        <div className="Widget section">
            <div className="card z-depth-0 Widget_1-summary">
                <div className="card-content gray-text text-darken-3">
                    <span className="card-title">Widget 1</span>
                    {/* <p>Widget content</p> */}
                    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
                        <main>
                            <div className="search-box">
                            <input 
                                type="text"
                                className="search-bar"
                                placeholder="Search..."
                                onChange={e => setQuery(e.target.value)}
                                value={query}
                                onKeyPress={search}
                            />
                            </div>
                            {(typeof weather.main != "undefined") ? (
                            <div>
                            <div className="location-box">
                                <div className="location">{weather.name}, {weather.sys.country}</div>
                                <div className="date">{dateBuilder(new Date())}</div>
                            </div>
                            <div className="weather-box">
                                <div className="temp">
                                {Math.round(weather.main.temp)}°c
                                </div>
                                <div className="weather">{weather.weather[0].main}</div>
                            </div>
                            </div>
                            ) : ('')}
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Widget2