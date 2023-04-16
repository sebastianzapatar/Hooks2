import { useCounter } from '../hooks/useCounter';

const MAXIMUM:number=10;
export const CounterHook = ({initialValue=0}) => {
  const {contador,counterElement,handleCounter}=
  useCounter({maxCount:MAXIMUM});
  return (
    <>
    <h1>Counter: 
    </h1>
    <h2 ref={counterElement}>{contador}</h2> 
    <button onClick={()=>handleCounter(1)}>Add 1</button>
    <button onClick={()=>handleCounter(2)}>Add 2</button>
    </>
  )
}