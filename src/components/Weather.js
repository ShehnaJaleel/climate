import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Weather = ()=>{
    const [weather, setWeather] = useState(null);

    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const response =  await axios.get('YOUR_WEATHER_API_ENDPOINT');
                setWeather(response.data);
            } catch(error){
                console.error('Weather Fetch Error:', error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Weather Information</h2>
            {weather && (
                <div>
                    <p>City: {weather.city}</p>
                    <p>Temperature:{weather.temperature}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;