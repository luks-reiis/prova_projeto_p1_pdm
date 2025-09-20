import { useState } from 'react'
import LembreteLista from './LembreteLista'
import LembreteEntrada from "./components/LembreteEntrada";

function App() {
  const [lembretes, setLembretes] = useState([]);

  const handleAdd = (novo) => {
    setLembretes((prev) => [novo, ...prev]);
    console.log("Novo lembrete cadastrado:", novo);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <LembreteLista />
          <LembreteEntrada onAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
}

export default App;
