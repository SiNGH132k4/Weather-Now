// src/utils/weather.js
import {
  Sun,
  Cloud,
  CloudSun,
  CloudFog,
  CloudDrizzle,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudHail,
} from "lucide-react";

export const weatherCodeMap = (code) => {
  if (code === 0)
    return { text: "Clear sky", Icon: Sun, bg: "from-sky-300 via-sky-400 to-blue-600" };
  if (code === 1)
    return { text: "Mainly clear", Icon: CloudSun, bg: "from-sky-200 via-sky-400 to-blue-500" };
  if (code === 2)
    return { text: "Partly cloudy", Icon: CloudSun, bg: "from-indigo-200 via-sky-300 to-blue-500" };
  if (code === 3)
    return { text: "Overcast", Icon: Cloud, bg: "from-gray-400 via-gray-500 to-gray-700" };
  if (code === 45 || code === 48)
    return { text: "Fog", Icon: CloudFog, bg: "from-gray-300 via-gray-400 to-gray-600" };
  if ([51, 53, 55].includes(code))
    return { text: "Drizzle", Icon: CloudDrizzle, bg: "from-cyan-300 via-blue-400 to-blue-600" };
  if ([56, 57].includes(code))
    return { text: "Freezing drizzle", Icon: CloudHail, bg: "from-sky-100 via-blue-300 to-gray-400" };
  if ([61, 63, 65].includes(code))
    return { text: "Rain", Icon: CloudRain, bg: "from-blue-400 via-blue-500 to-slate-700" };
  if ([66, 67].includes(code))
    return { text: "Freezing rain", Icon: CloudHail, bg: "from-indigo-300 via-blue-400 to-gray-600" };
  if ([71, 73, 75, 77].includes(code))
    return { text: "Snowfall", Icon: CloudSnow, bg: "from-sky-200 via-blue-200 to-slate-400" };
  if ([80, 81, 82].includes(code))
    return { text: "Rain showers", Icon: CloudRain, bg: "from-blue-300 via-blue-500 to-slate-700" };
  if ([85, 86].includes(code))
    return { text: "Snow showers", Icon: CloudSnow, bg: "from-blue-100 via-sky-200 to-gray-400" };
  if (code === 95)
    return { text: "Thunderstorm", Icon: CloudLightning, bg: "from-purple-700 via-indigo-800 to-gray-900" };
  if ([96, 99].includes(code))
    return { text: "Thunderstorm with hail", Icon: CloudHail, bg: "from-purple-600 via-indigo-700 to-gray-900" };

  return { text: "Unknown", Icon: Cloud, bg: "from-sky-500 via-blue-500 to-indigo-700" };
};
