import { Cabecalho } from '../../components/Cabecalho';
import { EspacoLogin } from '../../components/EspacoLogin';
import { Rodape } from '../../components/Rodapé';
import { Container } from './styles';


export function Login() {
  return (
    <Container>
      <Cabecalho/>
      <EspacoLogin/>
    </Container>
  );
};
