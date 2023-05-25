import { useState, createContext } from "react";
import axios from "axios";

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {

    const [busqueda, setBusqueda] = useState ({
        ciudad: '',
        pais: ''
    })

    const [resultado, setResultado] = useState({})
    const [loading, setLoading] = useState (false)
    const [noresultado, setNoresultado] = useState(false)

    const datosBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const consultarClima = async datos => {
        setLoading(true)
        setNoresultado(false)
        try{
            const {ciudad, pais} = datos

            const appId= import.meta.env.VITE_API_KEY

            const url=`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=e9ded93ee02d8249929f6298205f5413`

            const {data} = await axios(url)
            const {lat, lon} = data[0]

            const UrlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e9ded93ee02d8249929f6298205f5413`
            const { data:clima } = await axios (UrlClima)

            setResultado(clima)

        } catch (error){
            setNoresultado('No existe esa localizacion')
        } finally {
            setLoading(false)

        }

    }


    return(
        <ClimaContext.Provider
            value={{
                busqueda, 
                datosBusqueda,
                consultarClima,
                resultado,
                loading,
                noresultado
            }}
        >
            {children}
        </ClimaContext.Provider>
    )
}

export {
    ClimaProvider
}

export default ClimaContext
