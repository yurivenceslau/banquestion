import { Container } from './styles';
import Logado from '../Logado'
import { ResultQuestoes } from '../../components/ResultQuestoes';
import { useEffect } from 'react';


interface propsLogado {
  open: boolean;
  handleDrawerClose: () => {};
  handleDrawerOpen: () => {};
  entrada: boolean;
  handleAvaliacaoOpen: () => {};
  handleAvaliacaoClose: () => {};
}
export function ResultadoAvaliacao({
  open,
  handleDrawerClose,
  handleDrawerOpen,
  entrada,
  handleAvaliacaoOpen,
  handleAvaliacaoClose,
}: propsLogado) {
  
  return (
    <>
      <Logado
        open={open}
        handleDrawerClose={handleDrawerClose}
        entrada={entrada}
        handleAvaliacaoOpen={handleAvaliacaoOpen}
        handleAvaliacaoClose={handleAvaliacaoClose}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Container isOpen={open}>
        <ResultQuestoes/>
      </Container>
    </>
  );
};
