import useClima from "../hooks/useClima"
import Formulario from "./Formulario"
import Resultado from "./Resultado"
import Loading from "./Loading"


export default function AppClima() {

  const {resultado, loading, noresultado} = useClima()

  console.log(loading)

  return (
    <>
    <main className="dos-columnas">
      <Formulario/>

      { loading ? <Loading/> :
      
      resultado?.name ? <Resultado/> : 
      noresultado ? <p>{noresultado}</p> : 
      <p></p>}
    </main>
    </>

  )
}
