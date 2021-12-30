

import { Container } from "./styles";
export interface props{
  pergunta:string,
  alternativas:string[],
}

export function Pergunta({pergunta,alternativas}:props) {
  // muakt7hk
  // let objeto = {
  //   pergunta:
  //     "Assim como o Microsoft Internet Explorer, são navegadores de Internet, EXCETO:",
  //   alternativas: ["Mozilla Firefox", "Google Chrome"],
  // };
  
  return (
    <Container>
      <div className="pergunta">
            <span>{pergunta ?? "Pergunta"}</span>
      </div>

      <form method="POST">
        {alternativas.map((alternativa, i) => {
          return(
            <div key={i} className="opcao">
            <input type="radio" name="radio" id={`opcao-${i}`} />
            <label htmlFor={`opcao-${i}`}>{alternativa}</label>
          </div>
          )
        })}
      </form>
    </Container>
  );
}
