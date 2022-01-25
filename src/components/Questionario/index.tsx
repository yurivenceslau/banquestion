import { Perguntas } from "../Perguntas";
import { TituloAvaliacao } from "../TituloAvaliacao";
import { Container } from "./styles";

interface propsQuestionatio {
  entrada: boolean;
  handleAvaliacaoOpen: () => {};
  handleAvaliacaoClose: () => {};
  textFinishTimes: number
  handleTextFinishTimes: () => {};
}

export function Questionario({entrada,handleAvaliacaoOpen,handleAvaliacaoClose,textFinishTimes,handleTextFinishTimes}:propsQuestionatio) {
  return (
    <Container>
      <TituloAvaliacao/>
      <Perguntas 
        entrada={entrada}
        handleAvaliacaoOpen={handleAvaliacaoOpen}
        handleAvaliacaoClose={handleAvaliacaoClose}
        textFinishTimes={textFinishTimes}
        handleTextFinishTimes={handleTextFinishTimes}/>
    </Container>
  );
}
