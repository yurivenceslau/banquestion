import { Container } from "./styles";
// import user  from '../../imagens/alan-perfil.jpg'
import { HiUserCircle } from "react-icons/hi";
import { FaUserEdit } from "react-icons/fa";
import Modal from "react-modal";
import { useState } from "react";
import { NovoPerfil } from "../NovoPerfil";


export function PerfilConteudo() {
  
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
      <NovoPerfil handleModalClose={handleModalClose} ModalOpen={ModalOpen}/>
      </>
  );
}
