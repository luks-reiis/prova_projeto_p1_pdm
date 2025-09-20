import React, { Component } from 'react'
export class LembreteEntrada extends Component {
  state = {
    texto: ""
  }

  enviar_descricao_lembrete = (e) => {
    e.preventDefault();
    const texto_tratado = this.state.texto.trim();
    if (!texto_tratado) {
      return
    }

    this.props.novo_lembrete(texto_tratado);
    this.setState({
      texto: ""
    })
  }


  render() {
    return (
      <form onSubmit={this.enviar_descricao_lembrete} className="mt-2">
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Digite seu novo lembrete"
            value={this.state.texto}
            onChange={(e) => this.setState({
              texto: e.target.value
            })}
          />
        </div>
        <div>
          <button
            type="submit"
            className="mb-5 btn btn-primary w-100"
          >
            Adicionar
          </button>
        </div>
      </form>
    )
  }
}

export default LembreteEntrada