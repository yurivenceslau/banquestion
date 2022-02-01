import { useNavigate } from "react-router-dom";
import { Container } from './styles';
import {toast} from 'react-toastify';
import { useState, useEffect, useRef} from 'react';

interface propsTemporizador{
  handleAvaliacaoClose: () => {}
  handleTextFinishTimes: () => {}
}

export function Temporizador({handleAvaliacaoClose, handleTextFinishTimes}: propsTemporizador) {
  const [segRest, setSegRest] = useState(10);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    if (Number(seconds) >= 0) {
      setTimeout(() => setSeconds(Number(seconds) - 1), 1000);
    } else {
      if(Number(minutes) > 0){
        setSeconds(59);
        setMinutes(Number(minutes) - 1);
      }else{
        setSeconds(0);
        handleAvaliacaoClose();
        navigate('/autorizacao');
        handleTextFinishTimes();
        toast.warning("Tempo Esgotado! Avaliação enviada automaticamente")
      }
    }
  });
  // const [minRest, setMinRest] = useState(10);
  // let intervalRef = useRef<NodeJS.Timeout>();

  // useEffect(() => {
  //   if(segRest < 0){
  //     setSegRest(9);
  //   }
  //   const timerSeg = segRest >= 0 && setInterval(() => 
  //     setSegRest(segRest - 1), 1000
  //   );
  //   return () => clearInterval(Number(timerSeg));
  //   // const timerMin = minRest > 0 && setInterval(() => setSegRest(minRest - 1), 60000);
    
  // }, [segRest]);

  // const [num, setNum] = useState(10)
  // const [pause, setPause] = useState(false)
  

  // useEffect(() => {
  //   timer();
  // }, []);
  
  // const timer =() => {
  //     intervalRef.current = setInterval(() => {
  //       setNum((prev) => prev-1);
  //       console.log(num);
  //     }, 1000);
    
  //     return () => clearInterval(Number(intervalRef.current));
      
  // }
  // const handleCancel = () => {
  //   clearInterval(Number(intervalRef.current));
  // }
  
  return (
    <Container>
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
    </Container>
  );
};