import React, { useState, useEffect, useContext } from 'react';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import Mycontext from '../context/Mycontext';

const WeatherApi = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { city } = useContext(Mycontext);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                // Replace {API key} with your actual OpenWeatherMap API key
                const apiKey = '09b8e023b1a6da1f4251f2149fc8d14a';
                const apkey = '33673353c58ee88f3119771df82a2f85';
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apkey}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchWeatherData();
    }, []);
    const override = css`
  display: block;
  margin: 0 auto;
`;

    if (isLoading) {
        // Show the spinner while data is being fetched
        return (
            <div className="flex justify-center items-center h-screen">
                <RingLoader color="blue" size={15} css={override} /> {/* Use RingLoader component from react-spinners */}
            </div>
        );
    }

    if (!weatherData) {
        return <div>Error: Failed to fetch weather data</div>; // Show error message if failed to fetch data
    }
console.log(weatherData);
    return (
        <div className="h-screen flex items-center justify-center shadow-lg">
            <div className="border border-blue-300 p-8 rounded-lg bg-blue-400 max-w-md w-full shadow-custom rounded transform scale-90 shadow-lg">
                <h1 className="text-2xl font-semibold text-white mb-6 border-gray-300 pb-5" style={{ borderBottomWidth: '2px', borderBottomStyle: 'solid' }}>
                    <span className='pr-2 w-16 h-16'>
                        <Link to="/">
                            <ion-icon name="arrow-back-sharp" className="w-8 h-8"></ion-icon>

                        </Link>

                    </span>



                    Weather App
                </h1>
                <div className="flex items-center flex-col mb-8 h-80"> {/* Increased height to h-32 */}
                    <ion-icon name="partly-sunny-outline " className="bg-white-500"></ion-icon>
                    <h2 className="text-6xl font-bold text-white p-2" >{weatherData.main.temp}&deg;C</h2>
                    <span className="text-2xl text-white ml-2 mt-5">  {weatherData.base}</span>

                    <span className="text-2xl text-white ml-2 mt-5">  {weatherData.name}, {weatherData.sys.country}</span>
                </div>
                {/*  edit here */}
                <div className="flex justify-evenly divide-x">
                    <div className="w-1/2 text-white border-t border-gray-300 pt-4">
                        <p className="text-center text-3xl" style={{ fontSize: '20px', height: "25px" }}>{weatherData.main.feels_like}&deg;C</p>
                        <h3 className="text-xl font-semibold text-center" style={{ fontSize: '16px', height: "25px" }}        >
                            <ion-icon name="thermometer-outline" className="bg-white-100 h-12 w-12 mt-2"></ion-icon>
                            Feels Like
                        </h3>
                    </div>
                    <div className="w-1/2 text-white border-t border-gray-300 pt-4">
                        <p className="text-2xl text-center" style={{ fontSize: '20px', height: "25px" }}>{weatherData.main.humidity}%</p>
                        <h3 className="text-xl font-semibold text-center" style={{ fontSize: '16px', height: "25px" }}>
                            <ion-icon name="water-outline"></ion-icon>
                            Humidity</h3>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default WeatherApi;
