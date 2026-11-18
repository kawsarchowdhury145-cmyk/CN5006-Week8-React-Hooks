import { useState, useEffect } from "react";

function WeatherMoodWidget({ weather }) {
  const [emoji, setEmoji] = useState("☀️");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const weatherData = {
      Sunny: { emoji: "☀️", message: "Feeling bright and happy!" },
      Rainy: { emoji: "🌧️", message: "Feeling a bit gloomy..." },
      Cloudy: { emoji: "☁️", message: "Feeling calm and relaxed." },
    };
    const chosen = weatherData[weather] || weatherData.Sunny;
    setEmoji(chosen.emoji);
    setMessage(chosen.message);
  }, [weather]);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="App">
      <h2>{weather}</h2>
      <p style={{ fontSize: "50px", margin: "25px 0", lineHeight: "1.5" }}>{emoji}</p>
      <p>{message}</p>
      <button type="button" onClick={handleClick}>
        This weather makes me feel this way ({count})
      </button>
    </div>
  );
}

export default WeatherMoodWidget;