import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";

import { Container, TituloNovoPerfil, ModalPerfil } from "./styles";
import React, { useState } from "react";
// @ts-ignore
import { mask } from "remask";


interface State {
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  empresa: string;
  pagamento:string;
}
interface NovoPerfilProps {
  handleModalClose: () => void;
  ModalOpen: boolean;
  dados: State;
}

Modal.setAppElement("#root");

export function NovoPerfil({ handleModalClose, ModalOpen, dados, }: NovoPerfilProps) {
  const patern = "(99)99999-9999";
  const patern1 = "999.999.999-99";

  const [campo, setCampo] = useState(dados? dados: {
    nome: "werlley",
    cpf: "025.255.225-69",
    email: "werlley@gmail.com",
    telefone: "(88) 58585-5858",
    empresa: "Ágil Engenharia",
    pagamento:"Cartão",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name == "telefone") {
      setCampo({
        ...campo,
        [event.target.name]: mask(event.target.value, patern),
      });
    }else if (event.target.name == "cpf") {
      setCampo({
        ...campo,
        [event.target.name]: mask(event.target.value, patern1),
      });
    }else{
      setCampo({
        ...campo,
        [event.target.name]: event.target.value,
      });
    }
  };

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
          <div className="salvar">
            <button  className="botaoCancelar" onClick={handleModalClose}>
               Cancelar
            </button>
            <button  className="botaoSalvar"  >
               Salvar
            </button>
          </div>
        </TituloNovoPerfil>
        <ModalPerfil>
          <div className="meusDados">
            <div className="novo">
              <span>Novo Nome:</span>
              <input type="text" name="nome" value={campo.nome} onChange={handleChange}/>
            </div>

            <div className="novo">
              <span>Novo CPF:</span>
              <input
                type="text"
                name="cpf"
                value={campo.cpf}
                onChange={handleChange}
              />
            </div>

            <div className="novo">
              <span>Novo Email:</span>
              <input type="email" name="email" value={campo.email} onChange={handleChange}/>
            </div>

            <div className="novo">
              <span>Novo Telefone:</span>
              <input
                type="text"
                name="telefone"
                value={campo.telefone}
                onChange={handleChange}
              />
            </div>

            <div className="novo">
              <span>Nova Empresa:</span>
              <input type="text" name="empresa" value={campo.empresa} onChange={handleChange}/>
            </div>
          </div>

          <div className="sobreMim">
            <div className="novo">
              <span>Curso:</span>
              <input type="text" disabled value="JavaScript" />
            </div>

            <div className="novo">
              <span>Código de inscrição:</span>
              <input type="text" disabled value="52323533" />
            </div>

            <div className="novo">
              <span>Método de pagamento:</span>
              <input type="text" name="pagamento" value={campo.pagamento} onChange={handleChange}/>
            </div>

            <div className="novo">
              <span>Data de Inscrição:</span>
              <input type="date" disabled value="23/03/2006" />
            </div>

            <div className="novo">
              <span>Observação:</span>
              <input type="text" disabled value="Nenhuma" />
            </div>
          </div>
        </ModalPerfil>
      </Container>
    </Modal>
  );
}
