import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const Weather = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=a96df25e42a5473f874170139240602&q=London&aqi=no');
                setWeather(response.data);
            } catch (error) {
                console.error('Weather Fetch Error:', error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='weatherpage-container'>
            <h2>Weather Information</h2>
            {weather ? (
                <div>
                    <p>City: {weather.location.name}</p>
                    <p>Temperature: {weather.current.temp_c}°C</p>
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
};

export default Weather;


