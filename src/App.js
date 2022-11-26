import "./App.css";
import WeatherSearch from "./WeatherSearch";
import City from "./City";

export default function App() {
  return (
    <div className="App">
      <body>
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <City />
              <WeatherSearch />
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
