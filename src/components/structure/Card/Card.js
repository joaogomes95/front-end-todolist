import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  const todo = props.data;
  return (
    <Link to={`/view/${todo._id}`} className="col">
      <div className="card text-white bg-primary mb-3 flex-grow-1" style={{maxHeight: 20 + 'rem'}}>
            <div className="card-header">{todo.nome}</div>
            <div className="card-body">  
                <label>Descrição:</label>            
                <p className="card-text">{todo.descricao}</p>
                <label>Prioridade:</label>            
                <p className="card-text">{todo.prioridade}</p>
                <label>Status:</label>            
                <p className="card-text">{todo.status} </p>
                <label>Prazo:</label>            
                <p className="card-text">{todo.prazo}</p>
              
            </div>
        </div>
    </Link>
  )
}

export default Card