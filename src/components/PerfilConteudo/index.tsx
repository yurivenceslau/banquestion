import { Container } from "./styles";
// import user  from '../../imagens/alan-perfil.jpg'
import { HiUserCircle } from "react-icons/hi";
import { FaUserEdit } from "react-icons/fa";
import Modal from "react-modal";
import { useState } from "react";
import { NovoPerfil } from "../NovoPerfil";

interface State {
  nome: string;
  cpf: string;
  email: string;
  telefone:string;
  empresa: string;
  curso:string;
  codigo:string;
  pagamento:string;
  data:string;
  observacao:string;
}

interface propsPerfilConteudo{
  dados:State;
  setDados:React.Dispatch<React.SetStateAction<State>>;
}



export function PerfilConteudo({ dados,setDados } :propsPerfilConteudo) {
 
  const [ModalOpen,setModalOpen] = useState(false);
  const handleModalOpen=()=>{
    setModalOpen(true);
  }
  const handleModalClose=()=>{
    setModalOpen(false);
  }

  return (
    <>
    <Container>
      <div className="perfil_conteudo">
        <HiUserCircle />
      </div>
      <span>Delair Cavalcante</span>

      <button onClick={handleModalOpen}>
        <FaUserEdit />
        Editar
      </button>

    </Container>
      <NovoPerfil handleModalClose={handleModalClose} ModalOpen={ModalOpen} dados={dados}
       setDados={setDados}
       />
      </>
  );
}
