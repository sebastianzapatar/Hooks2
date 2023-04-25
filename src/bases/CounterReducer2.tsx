import {useReducer} from 'react'

interface CounterState{
    counter:number;
    previous:number;
    changes:number;
}
const counter:CounterState={
    counter:0,
    previous:0,
    changes:0
}
const INITIAL_STATE:CounterState={
    counter:0,
    previous:0,
    changes:0
}
type counterAction=|{type:'increaseBy',payLoad:{value:number}}
|{type:'reset'}

const counterReducer=(state:CounterState,action:counterAction):
CounterState=>{
    switch(action.type){
        case 'reset':
            return{
                counter:0,
                previous:0,
                changes:0
            }
        case 'increaseBy':
            return{
                counter:state.counter+action.payLoad.value,
                previous:state.counter,
                changes:state.changes+1
            }
        default:
            return state;
    }
}
export const CounterReducer2 = () => {
  const [counter, dispatch] = 
  useReducer(counterReducer, INITIAL_STATE);
  const handleReset=()=>{
    dispatch({type:'reset'});
  }
  const handleAdd=(value:number)=>{
    dispatch({type:'increaseBy',payLoad:{value}});
  }
  return (
    <>
        <h1>Contador:{counter.counter}</h1>
        <h2>Total Cambios{counter.changes}</h2>
        <h3>Previo:{counter.previous}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos incidunt dolore, possimus velit illo aliquid quisquam beatae magnam ad praesentium voluptatem hic accusamus, in dolorum similique repellendus! Distinctio, provident! Optio?</p>
        <button onClick={()=>handleReset()}>Reset</button>
        <button onClick={()=>handleAdd(2)}>Add 2</button>
        <button onClick={()=>handleAdd(-2)}>Reduce 2</button>
    </>
  )
}
