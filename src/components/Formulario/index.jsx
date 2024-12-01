import { useState } from "react"


const Formulario = ({ onCalcular}) => {
    const [nome, setNome] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');

    const previne = (e) => {
        e.preventDefault();
        if (!altura || !peso){
            alert(`Por favor, ${nome} insira o seu peso e altura.`)
            return;
        }
        onCalcular(altura, peso);
    };

    return (
        <div className="formulario-calculo">
            <form onSubmit={previne} className="mt-3">
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome:</label>
                    <input type="text" id="name" className="form-control" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="peso" className="form-label">Peso:</label>
                    <input type="number" id="peso" className="form-control" value={peso} onChange={(e) => setPeso(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="altura" className="form-label">Altura:</label>
                    <input type="number" id="altura" className="form-control" value={altura} onChange={(e) => setAltura(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary w-100" >Calcular</button>
            </form>
        </div>
    )
}

export default Formulario;