import React from 'react';

const HourlyStrip = ({ data, units }) => {
  const hourly = data.weather.hourly;
  const times = hourly.time.slice(0, 24);

  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Hourly</h3>
      <div className="overflow-x-auto no-scrollbar py-2">
        <div className="flex gap-3">
          {times.map((t, i) => {
            const date = new Date(t);
            const hour = date.getHours();
            const temp = Math.round(hourly.temperature_2m[i]);
            const precip = Math.round(hourly.precipitation_probability?.[i] || 0);

            return (
              <div
                key={t}
                className="min-w-[84px] bg-white/6 p-3 rounded-xl text-center flex flex-col items-center justify-between"
              >
                <div className="text-sm">{hour}:00</div>
                <div className="text-xl font-bold mt-1">{temp}{units === 'metric' ? '°C' : '°F'}</div>
                <div className="text-xs text-white/80 mt-1">{precip}%</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HourlyStrip;
