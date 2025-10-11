export default function Table({ setBrand1, setBrand2, setBrand3 }) {
  const handleClick = (e) => {
    const banda = e.target.dataset.banda;
    const valor = e.target.dataset.valor;

    switch (banda) {
      case "banda1":
        setBrand1(valor);
        break;
      case "banda2":
        setBrand2(valor);
        break;
      case "multiplicador":
        setBrand3(valor);
        break;
      default:
        break;
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table md:table-sm">
        <thead>
          <tr>
            <th>Banda 1</th>
            <th>Banda 2</th>
            <th>Multiplicador</th>
          </tr>
        </thead>
        <tbody>
          {/* FILA 0 - NEGRO */}
          <tr className="bg-black">
            <th
              data-banda="banda1"
              data-valor="0"
              data-color="Negro"
              className="text-white text-center"
              onClick={handleClick}
            >
              0
            </th>
            <th
              data-banda="banda2"
              data-valor="0"
              data-color="Negro"
              className="text-white text-center"
              onClick={handleClick}
            >
              0
            </th>
            <th
              data-banda="multiplicador"
              data-valor="1"
              data-color="Negro"
              className="text-white text-center"
              onClick={handleClick}
            >
              1
            </th>
          </tr>

          {/* FILA 1 - MARRÓN */}
          <tr className="bg-orange-950">
            <th data-banda="banda1" data-valor="1" data-color="Marrón" className="text-white text-center" onClick={handleClick}>1</th>
            <th data-banda="banda2" data-valor="1" data-color="Marrón" className="text-white text-center" onClick={handleClick}>1</th>
            <th data-banda="multiplicador" data-valor="10" data-color="Marrón" className="text-white text-center" onClick={handleClick}>10</th>
          </tr>

          {/* FILA 2 - ROJO */}
          <tr className="bg-red-600">
            <th data-banda="banda1" data-valor="2" data-color="Rojo" className="text-white text-center" onClick={handleClick}>2</th>
            <th data-banda="banda2" data-valor="2" data-color="Rojo" className="text-white text-center" onClick={handleClick}>2</th>
            <th data-banda="multiplicador" data-valor="100" data-color="Rojo" className="text-white text-center" onClick={handleClick}>100</th>
          </tr>

          {/* FILA 3 - NARANJA */}
          <tr className="bg-orange-600">
            <th data-banda="banda1" data-valor="3" data-color="Naranja" className="text-white text-center" onClick={handleClick}>3</th>
            <th data-banda="banda2" data-valor="3" data-color="Naranja" className="text-white text-center" onClick={handleClick}>3</th>
            <th data-banda="multiplicador" data-valor="1000" data-color="Naranja" className="text-white text-center" onClick={handleClick}>1K</th>
          </tr>

          {/* FILA 4 - AMARILLO */}
          <tr className="bg-yellow-400">
            <th data-banda="banda1" data-valor="4" data-color="Amarillo" className="text-white text-center" onClick={handleClick}>4</th>
            <th data-banda="banda2" data-valor="4" data-color="Amarillo" className="text-white text-center" onClick={handleClick}>4</th>
            <th data-banda="multiplicador" data-valor="10000" data-color="Amarillo" className="text-white text-center" onClick={handleClick}>10K</th>
          </tr>

          {/* FILA 5 - VERDE */}
          <tr className="bg-green-600">
            <th data-banda="banda1" data-valor="5" data-color="Verde" className="text-white text-center" onClick={handleClick}>5</th>
            <th data-banda="banda2" data-valor="5" data-color="Verde" className="text-white text-center" onClick={handleClick}>5</th>
            <th data-banda="multiplicador" data-valor="100000" data-color="Verde" className="text-white text-center" onClick={handleClick}>100K</th>
          </tr>

          {/* FILA 6 - AZUL */}
          <tr className="bg-blue-600">
            <th data-banda="banda1" data-valor="6" data-color="Azul" className="text-white text-center" onClick={handleClick}>6</th>
            <th data-banda="banda2" data-valor="6" data-color="Azul" className="text-white text-center" onClick={handleClick}>6</th>
            <th data-banda="multiplicador" data-valor="1000000" data-color="Azul" className="text-white text-center" onClick={handleClick}>1M</th>
          </tr>

          {/* FILA 7 - VIOLETA */}
          <tr className="bg-violet-500">
            <th data-banda="banda1" data-valor="7" data-color="Violeta" className="text-white text-center" onClick={handleClick}>7</th>
            <th data-banda="banda2" data-valor="7" data-color="Violeta" className="text-white text-center" onClick={handleClick}>7</th>
            <th data-banda="multiplicador" data-valor="10000000" data-color="Violeta" className="text-white text-center" onClick={handleClick}>10M</th>
          </tr>

          {/* FILA 8 - GRIS */}
          <tr className="bg-gray-500">
            <th data-banda="banda1" data-valor="8" data-color="Gris" className="text-white text-center" onClick={handleClick}>8</th>
            <th data-banda="banda2" data-valor="8" data-color="Gris" className="text-white text-center" onClick={handleClick}>8</th>
            <th data-banda="multiplicador" data-valor="100000000" data-color="Gris" className="text-white text-center" onClick={handleClick}>100M</th>
          </tr>

          {/* FILA 9 - BLANCO */}
          <tr className="bg-slate-100">
            <th data-banda="banda1" data-valor="9" data-color="Blanco" className="text-center" onClick={handleClick}>9</th>
            <th data-banda="banda2" data-valor="9" data-color="Blanco" className="text-center" onClick={handleClick}>9</th>
            <th data-banda="multiplicador" data-valor="1000000000" data-color="Blanco" className="text-center" onClick={handleClick}>1G</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
