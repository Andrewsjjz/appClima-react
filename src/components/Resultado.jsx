import useClima from "../hooks/useClima"
import {} from '../style/ResultadoClima.css'


export default function Resultado() {

    const {resultado} = useClima()
    const {name, main, wind, sys} = resultado

    const kelvin = 273.15

  return (
    <>

    <div className="carta">
    <div className="card">
  <div className="container">
    <div className="cloud front">
      <span className="left-front"></span>
      <span className="right-front"></span>
    </div>
    <span className="sun sunshine"></span>
    <span className="sun"></span>
    <div className="cloud back">
      <span className="left-back"></span>
      <span className="right-back"></span>
    </div>
  </div>

  <div className="card-header">
    <span>{name}</span>
    <span className="humedad">Humedad {main.humidity} %</span>
    <span>Viento {wind.speed} km/h</span>
  </div>

  <span className="temp">{parseInt(main.temp - kelvin)}</span>

  <div className="temp-scale">
    <span>Celcius</span>
  </div>
</div>
    </div>

    </>
  )
}
