import React from 'react';

const DailyForecast = ({data, units})=>{
  const daily = data.weather.daily;
  const days = daily.time.slice(0,7);
  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold mb-2">7-Day Forecast</h3>
      <div className="grid grid-cols-2 md:grid-cols-7 gap-3">
        {days.map((d,i)=>{
          const date = new Date(d);
          const day = date.toLocaleDateString(undefined,{weekday:'short'});
          const hi = Math.round(daily.temperature_2m_max[i]);
          const lo = Math.round(daily.temperature_2m_min[i]);
          return (
            <div key={d} className="bg-white/6 p-3 rounded-xl text-center">
              <div className="text-sm">{day}</div>
              <div className="mt-2 font-bold">{hi}{units==='metric'?'°':'°'} / <span className="text-white/80">{lo}{units==='metric'?'°':''}</span></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default DailyForecast;
