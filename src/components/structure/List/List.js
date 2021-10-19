import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import Api from '../../../api/api'

const List = () => {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    getTodos();
  }, []);
  
  const getTodos = async () => {
    const response = await Api.fetchGetAll(); // requiscao do tipo GET para api
    const data = await response.json(); // API retorna um array com dados
    setTodos(data); // atualizamos o nosso objeto do estado com o array vindo da api backend
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
      {
        todos.map((todo, index) => ( // iterar o array de vagas e para cada vaga chamar um componente card
          <Card data={todo} key={index}/>
        ))
      }
    </div>
  )
}

export default List