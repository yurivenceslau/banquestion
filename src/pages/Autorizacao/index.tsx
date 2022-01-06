import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logado from "../Logado";
import Modal from "react-modal"
import { Container } from "./styles";
import { IniciarProvaModal } from "../../components/IniciarProvaModal";

interface propsLogado {
  open: boolean;
  handleDrawerClose: () => {};
  handleDrawerOpen: () => {};
  entrada: boolean;
  handleAvaliacaoOpen: () => {};
  handleAvaliacaoClose: () => {};
}

export function Autorizacao({
  open,
  handleDrawerClose,
  handleDrawerOpen,
  entrada,
  handleAvaliacaoOpen,
  handleAvaliacaoClose,
}: propsLogado) {
  const navigate = useNavigate();

  const [isStartTestModalOpen, setisStartTestModalOpen] = useState(false);

  const handleStartTestModalOpen = () => {
    setisStartTestModalOpen(true);
  };

  const handleStartTestModalClose = () => {
    setisStartTestModalOpen(false);
  };

  return (
    <>
      <Logado
        open={open}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
        entrada={entrada}
        handleAvaliacaoOpen={handleAvaliacaoOpen}
        handleAvaliacaoClose={handleAvaliacaoClose}
      />
      <Container isOpen={open}>
        <div className="autorizacao">
          <div className="tituloAutorizacao">
            <span>SOBRE A AVALIAÇÃO</span>
          </div>
          <div className="instrucoes">
            <ol>
              <span>Instruções</span>
              <li>
                Ao clicar no botão de iniciar você tera o tempo de
                <strong> 1 (uma) hora </strong>
                para realizar a avaliação.
              </li>
              <li>Não faça consulta de nenhuma natureza.</li>
              <li>Cada questão tera apenas uma alternativa correta.</li>
              <li>
                Ao finalizar click no botaão
                <strong> Enviar </strong>e sua resposta será enviada com
                sucesso.
              </li>
            </ol>
          </div>

          <div className="buttonDiv">
            <button
              onClick={handleStartTestModalOpen
              //   () => {
              //   handleAvaliacaoOpen();
              //   navigate("/avaliacao");
              // }
            }
            >
              <span>Iniciar</span>
            </button>
          </div>
        </div>

        <IniciarProvaModal 
        isOpen={isStartTestModalOpen} 
        onRequestClose={handleStartTestModalClose} 
        entrada={entrada}
        handleAvaliacaoOpen={handleAvaliacaoOpen}
        handleAvaliacaoClose={handleAvaliacaoClose}/>
      </Container>
    </>
  );
}
