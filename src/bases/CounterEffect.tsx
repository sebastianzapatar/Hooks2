import { useState,useEffect,useRef } from 'react';
import { gsap } from 'gsap';
const MAXIMUM:number=10;
export const CounterEffect = ({initialValue=0}) => {
  console.log(initialValue)
  const [contador, setcontador] = useState(initialValue);
  const counterElement = useRef<HTMLHeadingElement>(null);
  const handleCounter=(add:number)=>{
    setcontador(Math.min(contador+add,MAXIMUM));
  }
  useEffect(() => {
    if(contador<10) return;
    console.log('%cSe llego al valor máximo','color:red');
    const timeline=gsap.timeline();
    timeline.to(counterElement.current,{y:-10,duration:1,ease:'ease.out'}).
    to(counterElement.current,{y:10,duration:0.11,ease:'bounce.out'});
  }, [contador])
  
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