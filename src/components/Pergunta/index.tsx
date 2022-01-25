

import { useState } from "react";
import { Container } from "./styles";
export interface props{
  pergunta:string,
  vetor:number;
  alternativas:string[],
  verificacao: any,
  index:number,
  handleSubmit:(event:any)=>void,
  // confirmacao:()=>{},
}

export function Pergunta({pergunta,alternativas,verificacao,index,handleSubmit,vetor}:props) {
  // muakt7hk
  // let objeto = {
  //   pergunta:
  //     "Assim como o Microsoft Internet Explorer, são navegadores de Internet, EXCETO:",
  //   alternativas: ["Mozilla Firefox", "Google Chrome"],
  // };
  // function handleSubmit(event:any) {
  //   event.preventDefault();
  //   console.log("Entrou/Enviou");
    
  // }
  // handleSubmit=()=>{
  // console.log("Entrou/Enviou");
  // if( ==="")
  // }
  //  const valor = ()=>{
  //   if(value){

  //   }else{

  //   }
  //  }

  const [contador,Setcontador] = useState()
  const confirmacao=()=>{
      // if(vetor===alternativas.length){
          // console.log("esse é o vetor: "+vetor);

          console.log("esse é as alternativas: "+ alternativas.length);
          console.log("meu deus");
      // }
  }
  //   {if(alternativas){
      
  //   }else
  // }
  

  return (
    <Container  >
      <div className="pergunta">
            <span>{pergunta ?? "Pergunta"}</span>
      </div>

      <div className="opcoes"  >
        {alternativas.map((alternativa, i) => {
          return(
            <div key={i} className="opcao">
              <input type="radio" name={`radio${index}`} value={''} id={`${i}`} required onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{verificacao(e.currentTarget.id, e.currentTarget.value);confirmacao()}} />
              <label htmlFor={`${i}`}>{alternativa}</label> 
            </div>
          )
        })}
      </div>
    </Container>

  );
}
