import { Container } from "./styles";
// import user  from '../../imagens/alan-perfil.jpg'
import { HiUserCircle } from "react-icons/hi";
import { FaUserEdit } from "react-icons/fa";
import Modal from "react-modal";
import { useState } from "react";
import { NovoPerfil } from "../NovoPerfil";


export function PerfilConteudo() {
  const [dados] = useState({
    nome: "werlley",
    cpf: "025.255.225-69",
    email: "werlley@gmail.com",
    telefone: "(88) 58585-5858",
    empresa: "Ágil Engenharia",
    pagamento:"Pix",
  })
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
      <NovoPerfil handleModalClose={handleModalClose} ModalOpen={ModalOpen} dados={dados}/>
      </>
  );
}
