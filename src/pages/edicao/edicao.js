import React, { useEffect, useState } from "react";
import Api from "../../api/api";
import { Link } from 'react-router-dom';

const Edicao = (props) => {
  const _id = props.match.params.id;
  const history = props.history;
  // criacao do estado
  const [todo, setTodo] = useState({});

 
  useEffect(() => {
    getTodosById();
  }, []);

  const getTodosById = async () => {
   
    const response = await Api.fetchGetById(_id);
    const result = await response.json();
    
    setTodo(result);
  };

  const handleFieldsChange = (event) => {
  
    const campos = { ...todo };
   
    campos[event.target.name] = event.target.value;

   
    setTodo(campos);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    // faco uma copia do estado com obj atualizado.
    const todoObj = { ...todo };   
    
    try {
      const response = await Api.fetchPut(todoObj, _id);
      const result = await response.json();
      alert(result.message);
      history.push("/"); // forca o historico a voltar para a rota de / => home
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container cadastro flex-grow-1" >
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3>Edição de Tarefas</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">                  
                  <input
                    type="text"
                    value={todo.nome}
                    className="form-control"
                    name="nome"
                    id="floatingInput"
                    placeholder="Digite o Titulo"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Nome</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    value={todo.prazo}
                    className="form-control"
                    name="prazo"
                    id="floatingprazo"
                    placeholder="Digite a data limite para esta tarefa"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Prazo</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={todo.descricao}
                    className="form-control"
                    name="descricao"
                    id="floatingInput"
                    placeholder="Digite a Descricao"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Descricao</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <select value={todo.status}
                    className="form-control"
                    name="status"
                    id="floatingstatus"                    
                    onChange={handleFieldsChange}
                    >
                    <option value="Fazer">Fazer</option>
                    <option value="Fazendo">Fazendo</option>
                    <option value="Feito">Feito</option>
                  </select>
                  <label htmlFor="floatingstatus">Status</label>
                </div>
              </div>
            </div>

            <div className="col">
                <div className="form-floating mb-3">
                  <select className="form-control" value={todo.prioridade} name="prioridade" id="floatingInput" onChange={handleFieldsChange} placeholder="Digite a prioridade da tarefa">
                  <option value="alta">Alta</option>
                    <option value="media">Média</option>
                    <option value="baixa">Baixa</option>
                  </select>
                  <label htmlFor="floatingInput">Prioridade</label>
                </div>
              </div> 

            {/* <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="prioridade" id="floatingInput" placeholder="Digite a prioridade da tarefa"/>
                  <label htmlFor="floatingInput">Prioridade</label>
                </div> */}

            <div className="row">
              <div className="col">
                <button className="btn btn-success" type="submit">
                  Concluir
                </button>
                <Link to="/">
                  <button className="btn btn-outline-default" to="/">Voltar</button>
                </Link>
              </div>
            {/* </div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edicao;

