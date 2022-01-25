import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logado from "../Logado";
import Modal from "react-modal"
import { Container } from "./styles";
import { IniciarProvaModal } from "../../components/IniciarProvaModal";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

interface propsLogado {
  open: boolean;
  handleDrawerClose: () => {};
  handleDrawerOpen: () => {};
  entrada: boolean;
  handleAvaliacaoOpen: () => {};
  handleAvaliacaoClose: () => {};
  textFinishTimes: number;
  handleTextFinishTimes: () =>{};

}

export function Autorizacao({
  open,
  handleDrawerClose,
  handleDrawerOpen,
  entrada,
  handleAvaliacaoOpen,
  handleAvaliacaoClose,
  textFinishTimes,
  handleTextFinishTimes,
}: propsLogado) {
  const navigate = useNavigate();
  const [isStartTestModalOpen, setisStartTestModalOpen] = useState(false);

  const handleStartTestModalOpen = () => {
    setisStartTestModalOpen(true);
  };

  const handleStartTestModalClose = () => {
    setisStartTestModalOpen(false);
  };
  useEffect(() => {
    handleAvaliacaoClose();
  }, [])

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
                Ao finalizar click no botão
                <strong> Enviar </strong>e sua resposta será enviada com
                sucesso.
              </li>
              <li>
                Se já finalizou a prova uma vez, você pode clicar no botão<strong> Resultado </strong>para ver sua pontuação.
              </li>
            </ol>
          </div>

              {/* {
              document.onkeydown = function(event) {
              const tecla = Event.keyCode;
              const tecla1= document.onkeydown
              console.log(tecla);
              if (tecla == '122') {
                 alert('Funcionou o click no F11');
             }
             }
            } */}
             

          <div className="buttonDiv">
            {
              textFinishTimes < 3 && <button
                onClick={handleStartTestModalOpen
              }
              >
                <span>Iniciar</span>
              </button>
            }
            {
              textFinishTimes != 0 && <button
              className="botaoResultado"
              onClick={() => navigate("/ResultadoAvaliacao")}
              >
                <span>Resultado</span>
              </button>
            }
          </div>
          
        </div>

        <IniciarProvaModal 
        isOpen={isStartTestModalOpen} 
        onRequestClose={handleStartTestModalClose} 
        entrada={entrada}
        handleAvaliacaoOpen={handleAvaliacaoOpen}
        handleAvaliacaoClose={handleAvaliacaoClose}
        />
      </Container>
    </>
  );
}
