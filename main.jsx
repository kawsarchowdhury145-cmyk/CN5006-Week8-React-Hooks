import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WeatherMoodWidget from './WeatherMoodWidget'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherMoodWidget weather='Sunny'/>
    <WeatherMoodWidget weather='Rainy'/>
    <WeatherMoodWidget weather='Cloudy'/>
  </StrictMode>,
)