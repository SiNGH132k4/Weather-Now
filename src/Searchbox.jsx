import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Searchbox = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!city.trim()) {
      setError(true);
      return;
    }
    setError(false);
    onSearch(city.trim());   // ✅ pass city up to WeatherApp
    setCity("");
  };

  return (
    <div className="bg-white/80 shadow-lg p-5 border border-gray-200 rounded-xl max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          className="w-full"
        />

        <Button
          variant="contained"
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 text-lg rounded-lg shadow-md"
        >
          Search
        </Button>

        {error && (
          <p className="mt-2 bg-red-100 text-red-600 border border-red-200 rounded-lg p-3 text-center font-medium">
            Please enter a city name
          </p>
        )}
      </form>
    </div>
  );
};

export default Searchbox;
