import { ReactNode } from 'react';
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { Botoes, Container, TituloModal } from './styles';
import { IoMdClose } from "react-icons/io";

interface IniciarProvaModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  entrada: boolean;
  handleAvaliacaoOpen: () => {};
  handleAvaliacaoClose: () => {};
}



Modal.setAppElement("#root");

export function IniciarProvaModal({ 
  isOpen, 
  onRequestClose,
  entrada,
  handleAvaliacaoOpen,
  handleAvaliacaoClose, }: IniciarProvaModalProps) {
    const navigate = useNavigate();

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="start-test-overlay"
      className="start-test-content"
    >
      <Container>
        <TituloModal>
          <h1>Iniciar prova</h1>
          <button onClick={onRequestClose}><IoMdClose/></button>
        </TituloModal>
        <span>Ao clicar em SIM, você será redirecionado para a prova e o tempo irá comecar a contar e não poderá sair da prova quando iniciar. Você realmente deseja iniciar?</span>
        <Botoes>
        <div>
        {/* <button onClick={handle.enter}>
          Enter fullscreen
        </button> */}
      </div>
          <button className='nao' onClick={onRequestClose}>NÃO</button>
          <button className='sim' onClick={
              () => {
                handleAvaliacaoOpen();
                navigate("/avaliacao");
              }
          }>SIM</button>
        </Botoes>
      </Container>
    </Modal>
  );
};
