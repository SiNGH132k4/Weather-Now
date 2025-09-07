import React, { useEffect, useState, useCallback } from 'react';
import Searchbox from './Searchbox';
import CurrentWeather from './components/CurrentWeather';
import HourlyStrip from './components/HourlyStrip';
import DailyForecast from './components/DailyForecast';
import DetailsGrid from './components/DetailsGrid';
import { weatherCodeMap } from "./utils/weather";

// WeatherApp.jsx
const WeatherApp = () => {
  const [query, setQuery] = useState('New Delhi');
  const [coords, setCoords] = useState(null);
  const [locationName, setLocationName] = useState('New Delhi');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [units, setUnits] = useState('metric'); // metric or imperial

  const fetchWeatherByCoords = useCallback(async (lat, lon) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        latitude: lat,
        longitude: lon,
        hourly:
          "temperature_2m,apparent_temperature,precipitation_probability,weathercode,winddirection_10m,windspeed_10m",
        daily:
          "temperature_2m_max,temperature_2m_min,weathercode,sunrise,sunset,precipitation_sum",
        current_weather: "true",
        timezone: "auto",
      });

      const url = `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
      const resp = await fetch(url);
      const jw = await resp.json();

      setData({
        weather: jw,
        lat: parseFloat(lat),
        lon: parseFloat(lon),
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  const geocodeAndFetch = useCallback(async (q) => {
    setLoading(true);
    try {
      const r = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=1`
      );
      const j = await r.json();
      if (!j || !j.results || j.results.length === 0) {
        setLoading(false);
        return;
      }
      const lat = j.results[0].latitude;
      const lon = j.results[0].longitude;
      setLocationName(j.results[0].name);
      setCoords({ lat, lon });

      await fetchWeatherByCoords(lat, lon);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  }, [fetchWeatherByCoords]);

  useEffect(() => {
  // Always fetch New Delhi first
  geocodeAndFetch('New Delhi');

  // Then try geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      setCoords({ lat, lon });
      setLocationName('Your Location');
      fetchWeatherByCoords(lat, lon);
    }, () => { });
  }
}, [fetchWeatherByCoords, geocodeAndFetch]);


  const handleSearch = (q) => {
    setQuery(q);
    geocodeAndFetch(q);
  };

  const currentCode = data?.weather?.current_weather?.weathercode || 0;
  const { bg } = weatherCodeMap(currentCode);

  return (
    <div className={`min-h-screen bg-gradient-to-b ${bg} text-gray-100 p-4 transition-all duration-700`}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4 md:gap-0">
          <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-md text-center md:text-left">Weather Now 🌦</h1>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            {/* Searchbox container responsive */}
            <div className="w-full sm:w-auto">
              <Searchbox onSearch={handleSearch} placeholder="Search city or ZIP" />
            </div>
          </div>
        </div>

        <main className="bg-white/20 rounded-3xl p-6 sm:p-8 backdrop-blur-lg shadow-2xl transition-all">
          {loading && <div className="text-center py-12 text-lg animate-pulse">Loading...</div>}
          {!data && !loading && (
            <div className="text-center py-12 text-lg">No data yet — try searching a city.</div>
          )}
          {data && (
            <>
              <CurrentWeather data={data} location={locationName} units={units} />
              <div className="overflow-x-auto sm:overflow-x-visible no-scrollbar">
                <HourlyStrip data={data} units={units} />
              </div>
              <DailyForecast data={data} units={units} />
              <DetailsGrid data={data} units={units} />
            </>
          )}
        </main>

        <footer className="mt-8 text-center text-sm text-white/70 backdrop-blur-sm p-2 rounded-lg">
  Open-Meteo API &bull; Shivam Singh
  <span className="mx-2">|</span>
  <a
    href="https://github.com/SiNGH132k4"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-white"
  >
    GitHub
  </a>
  <span className="mx-2">|</span>
  <a
    href="https://linkedin.com/in/singhShivam-dev"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-white"
  >
    LinkedIn
  </a>
</footer>
      </div>
    </div>
  );
};

export default WeatherApp;
