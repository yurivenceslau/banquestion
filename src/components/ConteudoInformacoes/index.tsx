import { Dados } from '../Dados';
import { PerfilConteudo } from '../PerfilConteudo';
import { Container } from './styles';

export function ConteudoInformacoes() {
  return (
    <Container>
     <PerfilConteudo/>
     <Dados/>
    </Container>
  );
};

