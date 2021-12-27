import { Container } from "./styles";
// import user  from '../../imagens/alan-perfil.jpg'
import { HiUserCircle } from "react-icons/hi";


export function PerfilConteudo() {
  return (
    <Container>
      <div className="perfil_conteudo">
       <HiUserCircle/>
      </div>
      <span>
     Alan Araujo 
     </span>
    </Container>
  );
}
