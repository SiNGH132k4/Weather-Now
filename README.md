
# Weather App

This repository contains the completed internship task assigned to me. The project is a Weather Application developed using **React, Vite, Tailwind CSS, and Material UI (MUI)**. It fetches real-time weather data such as temperature, humidity, wind speed, and overall conditions using the **Meteo API**.

The purpose of this project was to demonstrate the ability to build a fully functional, responsive, and modern web application using industry-standard tools and practices.


## Project Overview

* Built a weather application from scratch as part of the internship assignment.
* Integrated Meteo API to fetch and display live weather data.
* Implemented a clean, responsive design using Tailwind CSS and Material UI.
* Optimized the app with Vite for fast development and build processes.


## Features Completed

* Search weather by city name.
* Display current temperature, humidity, and wind speed.
* Weather data updates dynamically from the API.
* Mobile-first responsive layout.
* Clean and professional user interface.


## Technology Stack

* [React](https://reactjs.org/) with [Vite](https://vitejs.dev/) for fast development.
* [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
* [Material UI](https://mui.com/) for ready-to-use UI components.
* [Meteo API](https://open-meteo.com/) for real-time weather data.



## Setup Instructions

1. Clone the repository:


git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>


2. Install dependencies:

npm install

3. Create an `.env` file in the root directory and add the API key (if required by Meteo API):

VITE_METEO_API_KEY=your_meteo_api_key_here

4. Start the development server:

npm run dev


## API Notes

The project uses the **Meteo API** for fetching live weather details. Example endpoint:

https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true


* `latitude` → City latitude.
* `longitude` → City longitude.
* `current_weather` → true.


## Task Completion Notes

* All required features were implemented successfully.
* The application is tested locally and works as expected.
* Documentation and README are included as part of the deliverables.


## Future Improvements

* Multi-day weather forecast integration.
* Add dark/light mode toggle.
* Option to save favorite cities.
* Auto-detect user location using Geolocation API.



