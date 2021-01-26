import React, { useEffect, useState } from "react";
import axios from 'axios';

export const TodoList = (props) => {
  // console.log('props in todoList comp: ', props)

  const deleteItem = (e) => {
    axios.delete(`/delete:id`, {
      headers: {
        id: e.target.id
      }
    })
    // .then((res) => console.log(res.data))
    // .then(res => setList(res.rows))
    console.log(e.target.id)
  }


  return (
    props.list.map((item) => (
       <div>
         <div>{`Todo: ${item.todo}`}</div>
         <div>{`Date added: ${item.posting_date}`}</div>
       <button id={item.id} onClick={deleteItem}>Delete</button>
       </div>
    ))
  )
};
