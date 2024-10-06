import React, { useState } from 'react';
import axios from 'axios';
import pic1 from "../src/assets/pic1.jpg"


const Weather = () => {
    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('');
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bdbc6a4e8b198d8d884b2689a8fc0d34&units=metric`
            );

            setWeather(response.data);
            setError(null);
        } catch (error) {
            console.log(error);
            setError('City not found, please try again.');
            setWeather(null);
        }
    };

    return (
        <div className="weather-container">
            <h2 className="title">Weather App</h2>
            <div className="input-container">
                <input
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    value={city}
                    name="text"
                    placeholder="Enter the city"
                    className="input-field"
                />
                <button onClick={fetchWeather} className="btn btn-info">
                    Search
                </button>
            </div>
            {error && <div className="error-message">{error}</div>}
            {weather && (
    <div className="weather-card">
        <h1 className="weather-city">{weather.name}</h1>
        <div className="weather-details">
            <div className="weather-item">
                <i className="weather-icon fas fa-thermometer-half"></i>
                <p>Temperature: {weather.main?.temp} °C</p>
            </div>
            <div className="weather-item">
                <i className="weather-icon fas fa-tint"></i>
                <p>Humidity: {weather.main?.humidity} %</p>
            </div>
            <div className="weather-item">
                <i className="weather-icon fas fa-wind"></i>
                <p>Wind Speed: {weather.wind?.speed} m/s</p>
            </div>
            <div className="weather-item">
                <i className="weather-icon fas fa-compress-arrows-alt"></i>
                <p>Pressure: {weather.main?.pressure} hPa</p>
            </div>
        </div>
    </div>
)}

        </div>
    );
};

export default Weather;
