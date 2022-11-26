import "./App.css";
import WeatherSearch from "./WeatherSearch";
import City from "./City";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <body>
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <WeatherSearch />
              <City />
              <Weather />
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
