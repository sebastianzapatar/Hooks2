import { useState,useEffect,useRef } from "react";
import { gsap } from 'gsap';

export const  useCounter=({maxCount=10}) => {
    const [contador, setcontador] = useState(5);
  const elementtoAnimate = useRef<any>(null);
  const tl=useRef(gsap.timeline())
  const handleCounter=(add:number)=>{
    setcontador(Math.min(contador+add,maxCount));
  }
  useEffect(() => {
    if(contador<10) return;
    console.log('%cSe llego al valor máximo','color:red');
    tl.current.to(elementtoAnimate.current,{y:-10,duration:1,ease:'ease.out'}).
    to(elementtoAnimate.current,{y:10,duration:0.11,ease:'bounce.out'});
  }, [contador]);
  return {
    contador,
    counterElement: elementtoAnimate,
    handleCounter
  }
}