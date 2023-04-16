import { useEffect, useState,useRef } from "react";
import { gsap } from "gsap";
const MAXIMUM=10;
export const CounterCosita = () => {
    const [count, setcount] = useState(0);
    const counterRef = useRef<any>(null);
    const hanldeCounter=(add:number)=>{
        setcount(Math.min(count+add,MAXIMUM));
    }
    const handleReset=()=>{
        setcount(0);
    }
    useEffect(() => {
      if(count<10)return;
      console.log('%cSe llego al valor maximo','color:red');
      const timeline=gsap.timeline();
      timeline.to(counterRef.current,{y:-10,duration:1,ease:'ease.out'}).to(
        counterRef.current,{y:10,duration:0.11,ease:'bounce.out'});
    }, [count])
    
    return (
    <>
        <h1>Counter Click: <span ref={counterRef}>{count}</span></h1>
        <span>Hp tengo hambre :(</span>
        <button onClick={()=>hanldeCounter(1)}>+1</button>
        <button onClick={()=>hanldeCounter(2)}>+2</button>
        <button onClick={()=>handleReset()}>Reset</button>
    </>
  )
}
