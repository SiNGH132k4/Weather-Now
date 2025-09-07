import React from 'react';

const DetailsGrid = ({data, units})=>{
  const cw = data.weather.current_weather;
  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Details</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-white/6 p-3 rounded-xl">
          <div className="text-xs text-white/80">Wind</div>
          <div className="font-semibold mt-1">{Math.round(cw.windspeed)} km/h</div>
        </div>
        <div className="bg-white/6 p-3 rounded-xl">
          <div className="text-xs text-white/80">Precipitation (today)</div>
          <div className="font-semibold mt-1">{Math.round(data.weather.daily?.precipitation_sum?.[0]||0)} mm</div>
        </div>
      </div>
    </section>
  );
}

export default DetailsGrid;
