import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Mycontext from '../context/Mycontext';
import validator from 'validator'; // Import the validator library


const Home = () => {

  const navigate = useNavigate(); // Get the navigate function from React Router
  const [cV, setcV] = useState("");
  const { setCity } = useContext(Mycontext);
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (validator.isAlpha(cV)) {
        setcV('');

      // Use history.push to navigate to the next page
      navigate('/WeatherApi');
      }else{
        console.error('Invalid city name');

      }
    }
  };
  const cities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Philadelphia',
    'Phoenix',
    'San Antonio',
    'San Diego',
    'Dallas',
    'San Jose',
    'Austin',
    'Jacksonville',
    'San Francisco',
    'Indianapolis',
    'Columbus',
    'Fort Worth',
    'Charlotte',
    'Seattle',
    'Denver',
    'El Paso',
    'Washington, D.C.',
    'Boston',
    'Detroit',
    'Nashville',
    'Memphis',
    'Portland',
    'Oklahoma City',
    'Las Vegas',
    'Louisville',
    'Baltimore',
  ]; 
  const getRandomCity = () => {
    const randomIndex = Math.floor(Math.random() * cities.length);
    return cities[randomIndex];
  };
  
  const randomCityName = getRandomCity();
  const handleAuto = ()=>{
    setCity(randomCityName);
    setcV('');
    navigate('/WeatherApi');

  }
  return (

    <div className="h-screen flex items-center justify-center shadow-lg ">
      <div className="border border-blue-300 p-8 rounded-lg bg-blue-400 max-w-md w-full shadow-custom rounded transform scale-90 shadow-lg">
        <h1 className="text-2xl font-semibold text-white mb-6 border-gray-300 pb-4" style={{ borderBottomWidth: '2px', borderBottomStyle: 'solid' }}>
          Weather App
        </h1>
        <input type="text" onChange={(e) => setcV(e.target.value)} value={cV} onKeyDown={handleKeyDown} placeholder="Enter City Name"
          className="border border-blue-300 px-4 py-2 font-semibold  text-xl rounded-lg w-full h-16 focus:outline-none text-center" />

        <p className=" text-center text-white text-xl font-semibold m-2">or</p>
        <button type="submit" onClick={handleAuto}
          className="bg-blue-500 shadow-custom font-semibold text-white text-xl py-2 px-4 rounded-lg w-full h-16 shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out">
          <Link to='WeatherApi'>

            Location auto-detect
          </Link>

        </button>
      </div>
    </div>

  );
}

export default Home;
