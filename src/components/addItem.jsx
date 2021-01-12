import React, { useEffect, useState } from "react";


export const AddItem = (props) => {

  const handleInput = (e) => {
    props.setInput(e.target.value)
    console.log(props.input)
  };

  const handleSubmit = (item) => {
    props.setList(props.list.concat(item))
  };

  return (
    <div>
      <input onChange={handleInput}/>
      <button onClick={function(){ handleSubmit(props.input) } }>Add Item</button>
    </div>
  )
};
