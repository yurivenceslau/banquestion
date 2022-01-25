import { Perguntas } from "../Perguntas";
import { TituloAvaliacao } from "../TituloAvaliacao";
import { Container } from "./styles";

interface propsQuestionatio {
  entrada: boolean;
  handleAvaliacaoOpen: () => {};
  handleAvaliacaoClose: () => {};
}

export function Questionario({entrada,handleAvaliacaoOpen,handleAvaliacaoClose}:propsQuestionatio) {
  return (
    <Container>
      <TituloAvaliacao/>
      <Perguntas  entrada={entrada}
        handleAvaliacaoOpen={handleAvaliacaoOpen}
        handleAvaliacaoClose={handleAvaliacaoClose}/>
    </Container>
  );
}
