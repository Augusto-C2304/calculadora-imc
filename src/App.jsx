import Formulario from "./components/Formulario";
import CalculoIMC from "./components/Calcular";
import Resultado from "./components/Resultado";
import { useState } from "react";

function App() {
  const [resultado, setResultado] = useState({imc: null, classificacao:''});

  const handleCalcular = (altura, peso) => {
    const calculo = CalculoIMC(altura, peso);
    setResultado(calculo);
  };
  
  return (
    <div className="container mt-5">
    <Formulario onCalcular = {handleCalcular} />
    <Resultado imc={resultado.imc} classificacao={resultado.classificacao} />
    </div>
  )
}
export default App
