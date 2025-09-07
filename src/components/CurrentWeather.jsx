import { weatherCodeMap } from "../utils/weather";

const CurrentWeather = ({ data, location, units }) => {
  const cw = data.weather.current_weather;
  const temp = Math.round(cw.temperature);
  const { text, Icon } = weatherCodeMap(cw.weathercode);

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-6">
      <div className="md:col-span-2 bg-white/8 p-6 rounded-2xl flex items-center gap-6">
        <div className="flex items-center gap-4 sm:text-2xl">
          <div className="text-4xl sm:text-6xl font-bold mt-2">
  {temp}{units === "metric" ? "°C" : "°F"}
</div>

          <Icon className="w-14 h-14 text-yellow-300" />
        </div>
        <div>
          <div className="text-lg font-semibold">{location}</div>
          <div className="text-sm text-white/80">
            {text} • Wind {Math.round(cw.windspeed)} km/h
          </div>
        </div>
      </div>
      <div className="bg-white/6 p-4 rounded-2xl">
        <div className="text-sm text-white/80">Shivam Singh</div>
        <div className="text-2xl font-semibold mt-2">--</div>
        <div className="mt-3 text-xs text-white/70">
          Current: {new Date(cw.time).toLocaleString()}
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;