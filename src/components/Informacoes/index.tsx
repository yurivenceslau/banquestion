
import { TituloInformacoes } from '../TituloInformacoes';
import { Container } from './styles';
import { ConteudoInformacoes } from '../ConteudoInformacoes';

export function Informacoes() {
  return (
    <Container>
     <TituloInformacoes/>
     <ConteudoInformacoes/>
    </Container>
  );
};
