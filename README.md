Weather App 🌦️

A simple and responsive weather application built with React that allows users to search for real-time weather information for any city using the OpenWeather API.

Features
  Search weather by city name
  Displays:
  Temperature
  Weather condition icon
  Humidity
  Wind speed
  Responsive modern UI
  Default weather shown on startup

Technologies Used
  React
  JavaScript
  CSS
  Vite
  OpenWeather API

Project Structure
  src/
  │
  ├── App.jsx
  ├── Weather.jsx
  ├── Weather.css
  └── assets/
  
Installation
  Clone the repository
    git clone <your-repository-url>
Navigate to the project folder
  cd weather-app
Install dependencies
  npm install
Start the development server
  npm run dev
  
Environment Variables
Create a .env file in the root directory and add your OpenWeather API key:

VITE_APP_ID=your_api_key_here

You can get a free API key from:

OpenWeather API

Example API Request
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
Default City

The application loads weather data for:
Plettenberg Bay
when the app starts.


Future Improvements
5-day weather forecast
Dark/light mode
Geolocation support
Weather animations
Better error handling

Author
Ronaldo Jansen

License
This project is open source and available under the MIT License.
