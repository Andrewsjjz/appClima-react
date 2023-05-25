import { } from '../style/Formulario.css'
import useClima from '../hooks/useClima'
import clima from '../../public/weather-forecast.png'
import { useState } from 'react'

export default function Formulario() {

    const [error, setError] = useState(false)
    const { busqueda, datosBusqueda, consultarClima } = useClima()

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
            setError('Todos los campos son obligatorios')
            return
        }
        consultarClima(busqueda)
    }

    return (
        <div className="contenedor">
            {error && <p>{error}</p>}
            <form 
            onSubmit={handleSubmit}
            >
                <div className="campo">
                    <label>Ciudad</label>
                    <input
                        type="text"
                        id='ciudad'
                        name='ciudad'
                        onChange={datosBusqueda}
                        value={busqueda.ciudad}
                    />
                </div>

                <div className="campo">
                    <label>Pais</label>
                    <select
                        name="pais"
                        id="pais"
                        onChange={datosBusqueda}
                        value={busqueda.pais}
                    >
                        <option value="">Seleccione un Pais</option>
                        <option value="CO">Colombia</option>
                        <option value="US">Estados Unidos</option>
                        <option value="AR">Argentina</option>
                    </select>
                </div>

                <div className='boton'>
                <button> Consultar <img src={clima} alt="" />
                </button>
                </div>



            </form>
        </div>
    )
}
