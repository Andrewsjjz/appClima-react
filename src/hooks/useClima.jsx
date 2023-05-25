import { useContext } from "react";
import  ClimaContext  from "../contexts/ClimaProvider";

const useClima = () => {
return useContext(ClimaContext)
}

export default useClima
