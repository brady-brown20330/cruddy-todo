import React, { useEffect, useState } from "react";
import { TodoList } from './components/todoList';
import { AddItem } from './components/addItem';

const App = () => {

  const [list, setList] = useState(['hey', 'hello', 'laundry']);
  const [input, setInput] = useState('')



  return (
   <div>
      <h1>title</h1>
    <AddItem input={input} setInput={setInput} list={list} setList={setList}/>
    <TodoList list={list} />
   </div>
  )
}
export default App;