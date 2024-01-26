import { useState } from 'react'
import './App.css'

function App() {

  const [temperature, setTemperature] = useState(25);
  const [temperatureColor, setTemperatureColor] = useState('normal');
  
  const increaseTemperature = () => {
    if (temperature === 50) return;

    const newTemp = temperature + 1;
    setTemperature(newTemp);

    if (newTemp >= 30) {
      setTemperatureColor('hot');
    } else if (newTemp > 18 && newTemp < 30) {
      setTemperatureColor('normal');
    }
  }

  const decreaseTemperature = () => {
    if (temperature === -10) return;

    const newTemp = temperature - 1;
    setTemperature(newTemp);

    if (newTemp <= 18) {
      setTemperatureColor('cold');
    } else if (newTemp > 18 && newTemp < 30) {
      setTemperatureColor('normal');
    }
  }

  return (
    <div className='container'>

      <h1>Temperature Control App</h1>
      
      <div className='temp-card'>
        <div className={`temperature-container ${temperatureColor}`}>
          <span>{temperature}</span>
          <span>°C</span>
        </div>

        <div className='buttons-container'>
          <button onClick={increaseTemperature}>+</button>
          <button onClick={decreaseTemperature}>-</button>
        </div>

      </div>

    </div>
  )
}

export default App
