import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./compo/Home"
import MyContextProvider from './context/Myprovider';
import WeatherApi from './compo/WeatherApi';

function App() {
  return (
    <MyContextProvider>
    <div className="bg-blue-500">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="WeatherApi" element={<WeatherApi />} />
      </Routes>
    </div>
    </MyContextProvider>
  );
}

export default App;
