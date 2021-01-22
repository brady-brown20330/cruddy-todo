import React, { useEffect, useState } from "react";
import { TodoList } from './components/todoList';
import { AddItem } from './components/addItem';
import axios from 'axios';

const App = () => {

  const [list, setList] = useState([]);
  const [input, setInput] = useState('')

  useEffect(() => {
    axios.get('/todos/list')
    .then((res) => res.data)
    .then(res => setList(res.rows))
  }, [])

  return (
   <div>
      <h1>title</h1>
    <AddItem input={input} setInput={setInput} list={list} setList={setList}/>
    <TodoList list={list} setList={setList}/>
   </div>
  )
}
export default App;