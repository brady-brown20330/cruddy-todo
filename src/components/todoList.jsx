import React, { useEffect, useState } from "react";


export const TodoList = (props) => {

  return (
    props.list.map((item) => (
       <div>{item}</div>
    ))
  )
};
