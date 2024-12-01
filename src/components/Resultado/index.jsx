const Resultado = ({ imc, classificacao }) => {
    if (!imc) return null; // Não mostra nada se não houver cálculo

    return (
        <div className="mt-4">
            <h2>Resultado</h2>
            <p>
                <strong>IMC:</strong> {imc}
            </p>
            <p>
                <strong>Classificação:</strong> {classificacao}
            </p>
        </div>
    );
};

export default Resultado;