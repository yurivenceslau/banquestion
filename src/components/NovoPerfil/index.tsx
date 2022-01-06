import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";

import { Container, TituloNovoPerfil, A } from "./styles";
import React, { useState } from "react";
// @ts-ignore
import { mask } from 'remask';

interface NovoPerfilProps {
  handleModalClose: () => void;
  ModalOpen: boolean;
}

interface State {
    nome:string;
    cpf:string;
    email:string;
    telefone:string;
    empresa:string;
}


Modal.setAppElement("#root");

export function NovoPerfil({ handleModalClose, ModalOpen }: NovoPerfilProps) {
  const patern = '(99)99999-9999';
  const patern1 = '999.999.999-99';


  const [campo,setCampo] = useState({
    nome:'',
    cpf:'',
    email:'',
    telefone:'',
    empresa:'',
  });

  const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    if(event.target.name == 'telefone'){
      setCampo({...campo,[event.target.name]: mask(event.target.value, patern)}
      )
    }
    if(event.target.name == 'cpf'){
      setCampo({...campo,[event.target.name]: mask(event.target.value, patern1)}
      )
    }
  }


  return (
    <Modal
      onRequestClose={handleModalClose}
      isOpen={ModalOpen}
      overlayClassName="overlay"
      className="content"
    >
      {/* <h1>deu certo</h1> */}
      <Container>
        <TituloNovoPerfil>
          <span>Editar Perfil</span>
          <button onClick={handleModalClose}>
            <IoMdClose />
          </button>
        </TituloNovoPerfil>
        <A>
          <div className="novoNome">
          <span>Novo Nome:</span>
          <input type="text"  />
          </div>

          <div className="novoCpf">
          <span>Novo CPF:</span>
          <input type="text" name="cpf" value={campo.cpf} onChange={handleChange}/>
          </div>

          <div className="novoEmail">
          <span>Novo Email:</span>
          <input type="email" />
          </div>

          <div className="novoTelefone">
          <span>Novo Telefone:</span>
          <input type="text" name="telefone" value={campo.telefone} onChange={handleChange}/>
          </div>

          <div className="novaEmpresa">
          <span>Nova Empresa:</span>
          <input type="text" />
          </div>
        </A>
      </Container>
    </Modal>
  );
}


