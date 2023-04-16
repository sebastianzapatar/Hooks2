import React from 'react'
import { useState } from 'react';

export const Counter = ({initialValue=0}) => {
  console.log(initialValue)
  const [contador, setcontador] = useState(initialValue);
  const handleCounter=(add:number)=>{
    setcontador(contador+add);
  }
  return (
    <>
    <h1>Counter: {contador} 
    </h1>
    <button onClick={()=>handleCounter(1)}>Add 1</button>
    <button onClick={()=>handleCounter(2)}>Add 2</button>
    </>
  )
}
