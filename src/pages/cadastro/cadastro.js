import React from 'react'
import './cadastro.css';
import Api from '../../api/api';
import { Link } from 'react-router-dom';

const Cadastro = (props) => {
  const history = props.history;

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    // pego o valor que usuario digitou nos inputs
    const nome = evento.target.nome.value; 
    const descricao = evento.target.descricao.value;
    const prioridade = evento.target.prioridade.value;
    const status = evento.target.status.value;
    const prazo = evento.target.prazo.value;

    const todo = {
      nome,
      descricao,
      prioridade,
      status,
      prazo,
    }
    
    try {
      const response = await Api.fetchPost(todo)
      const result = await response.json();
      alert(result.message);
      history.push('/'); // forca o historico a voltar para a rota de / => home
    } catch(error) {
      console.log(error);
    }
    
  }

  return (
    <div className="container cadastro">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3>Cadastro de Tarefas</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="nome" id="floatingInput" placeholder="Digite o nome da tarefa!"/>
                  <label htmlFor="floatingInput">Nome</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input type="text" className="form-control" name="prazo" id="floatingprazo" placeholder="Digite o prazo da tarefa!"/>
                  <label htmlFor="floatingInput">Prazo</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="descricao" id="floatingInput" placeholder="Digite a Descricao"/>
                  <label htmlFor="floatingInput">Descricao</label>
                </div>
              </div>           
                

              <div className="col">
                <div className="form-floating">
                  <select className="form-control" name="status" id="floatingstatus" placeholder="Escolha o status da tarefa!">
                  <option value="fazer">Fazer</option>
                    <option value="fazendo">Fazendo</option>
                    <option value="feito">Feito</option>
                  </select>
                  <label htmlFor="floatingInput">Status</label>
                </div>
              </div>   

              <div className="col">
                <div className="form-floating mb-3">
                  <select className="form-control" name="prioridade" id="floatingInput" placeholder="Digite a prioridade da tarefa">
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


            {/* </div> */}
            <div className="row">
              <div className="col">
                <button className="btn btn-success" type="submit">Enviar</button>
                <Link to="/">
                <button className="btn btn-outline-default" to="/">Voltar</button>
                </Link>
              </div>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro


