import React, { useState } from "react";

export default function LembreteEntrada({ onAdd }) {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = texto.trim();
    if (!trimmed) return;

    onAdd(trimmed);
    setTexto("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Digite seu novo lembrete"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
      </div>
      <div>
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={texto.trim() === ""}
        >
          Adicionar
        </button>
      </div>
    </form>
  );
}