import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [city, setCity] = useState({});
  const [isLoeding, setIsLoeding] = useState(false);
  const cityName = "Tokyo";
  const apiKey = `ce14b608e511a5001fb13d57053f3e48`;

  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setCity(data);
        setIsLoeding(true);
      });
  }, []);

  const convertTemp = (k) => {
    return (k - 273).toFixed();
  };

  return (
    isLoeding && (
      <div className="App">
        <section>
          <div className="location">
            <h1 className="city">{city.name}</h1>
            <p className="state">{city.sys.country}</p>
          </div>
          <div className="card">
            <div className="weather">
              <h1>{convertTemp(city.main.temp)}&deg;c</h1>
              <small>
                Max : {convertTemp(city.main.temp_max)} , Min :{" "}
                {convertTemp(city.main.temp_min)}
              </small>
            </div>
            <div className="info">
              <div className="status">{city.weather[0].main}</div>
              <div className="humidity">Humidity : {city.main.humidity}</div>
              <div className="wind">Wind speed : {city.wind.speed}</div>
            </div>
          </div>
        </section>
      </div>
    )
  );
}

export default App;
