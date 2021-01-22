import React, { useEffect, useState } from "react";


export const TodoList = (props) => {
  console.log('props in todoList comp: ', props)

  const deleteItem = (e) => {
    let index = props.list.indexOf(e.target.id)
    if (index > -1) {
      props.list.splice(index, 1)
    }
    console.log(props.list)
  }


  return (
    props.list.map((item) => (
       <div>
         <div>{`Todo: ${item.todo}`}</div>
         <div>{`Date added: ${item.posting_date}`}</div>
       <button id={item} onClick={deleteItem}>Delete</button>
       </div>
    ))
  )
};
