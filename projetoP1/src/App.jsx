import React from "react"
import LembreteLista from './components/LembreteLista'
import LembreteEntrada from "./components/LembreteEntrada";
class App extends React.Component {
  state = {
    lista_lembretes: []
  }

  adicionar_lembrete = (texto) => {
    const lembrete = {
      descricao: texto,
      favoritado: false
    }

    this.setState({
      lista_lembretes: [...this.state.lista_lembretes, lembrete]
    });
  }

  remover_lembrete = (descricao) => {
    this.setState({
      lista_lembretes: this.state.lista_lembretes.filter(
        (lembrete) => lembrete.descricao !== descricao
      )
    });
  }

  alternar_favorito = (descricao) => {
    this.setState({
      lista_lembretes: this.state.lista_lembretes.map((lembrete) => 
        lembrete.descricao === descricao 
          ? { ...lembrete, favoritado: !lembrete.favoritado } 
          : lembrete
      )
    });
  }


  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <LembreteLista lista_lembretes={this.state.lista_lembretes} remover_lembrete={this.remover_lembrete} />
            <LembreteEntrada novo_lembrete={this.adicionar_lembrete} />
          </div>
        </div>
      </div>
    )
  }
}

export default App