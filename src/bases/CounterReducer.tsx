import { useReducer } from 'react';
interface CounterState{
  counter:number;
  previous:number;
  changes:number;
}
const INITIAL_STATE:CounterState={
  counter:23,
  previous:1,
  changes:3
}
type counterAction=|{type:'increaseBy',payload:{value:number}}
                  |{type:'reset'}
const counterReducer=(state:CounterState,action:counterAction):CounterState=>{
  switch(action.type){
    case 'reset':
      return{
        counter:0,
        previous:0,
        changes:0
      }
    case 'increaseBy':
      return{
        counter:state.counter+action.payload.value,
        previous:state.counter,
        changes:state.changes+1
      }
    
    default:
      return state;
  }
}

export const CounterReducer = ({initialValue=0}) => {
  console.log(initialValue)
  const [contador, dispatch] = useReducer(counterReducer, INITIAL_STATE);
  const handleReset=()=>{
    dispatch({type:'reset'})
  }
  const handleAdd=(value:number)=>{
    dispatch({type:'increaseBy',payload:{value}});
  }
    
  return (
    <>
    <h2>
      Contador: {contador.counter}
    </h2>
    <h2>
      Total cambios: {contador.changes}
    </h2>
    <h2>
      anterior:{contador.previous}
    </h2>
    <button onClick={()=>handleReset()}>Reset</button>
    <button onClick={()=>handleAdd(2)}>Add 2</button>
    <button onClick={()=>handleAdd(-2)}>Reduce 2</button>
    </>
  )
}
