

import { Container } from "./styles";
export interface props{
  pergunta:string,
  alternativas:string[],
  verificacao: any,
  handleSubmit:any,
}

export function Pergunta({pergunta,alternativas,verificacao,handleSubmit}:props) {
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
    
  

  return (
    <Container>
      <div className="pergunta">
            <span>{pergunta ?? "Pergunta"}</span>
      </div>

      <form onSubmit={handleSubmit} method="POST">
        {alternativas.map((alternativa, i) => {
          return(
            <div key={i} className="opcao">
            <input type="radio" name="radio" value={''} id={`${i}`} required onChange={(e: React.ChangeEvent<HTMLInputElement>)=>verificacao(e.currentTarget.id, e.currentTarget.value)} />
            <label htmlFor={`${i}`}>{alternativa}</label>
          </div>
          )
        })}
      </form>
    </Container>
  );
}
