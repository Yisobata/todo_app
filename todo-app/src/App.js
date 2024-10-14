import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

// TarefaItem: Representa uma única tarefa
function TarefaItem({ tarefa, onDelete }) {
  return (
    <div className="tarefa-item">
      <p>{tarefa.titulo}</p>
      <button onClick={() => onDelete(tarefa.id)}>Excluir</button>
    </div>
  );
}

// TarefaForm: Formulário para adicionar novas tarefas
function TarefaForm({ onAdd }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ titulo, descricao });
    setTitulo('');
    setDescricao('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Título" />
      <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição" />
      <button type="submit">Adicionar</button>
    </form>
  );
}

// TarefaList: Lista todas as tarefas
function TarefaList({ tarefas, onDelete }) {
  return (
    <ul>
      {tarefas.map(tarefa => (
        <TarefaItem key={tarefa.id} tarefa={tarefa} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export { TarefaItem, TarefaForm, TarefaList };
