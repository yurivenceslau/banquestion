import { Container } from "./styles";
import user  from '../../imagens/alan-perfil.jpg'
export function PerfilConteudo() {
  return (
    <Container>
      <div className="perfil_conteudo">
        <img src={user} alt="o perfil" />
      </div>
      <span>
     Alan Araujo 
     </span>
    </Container>
  );
}
