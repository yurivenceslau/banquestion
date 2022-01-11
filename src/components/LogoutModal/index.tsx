import { ReactNode } from 'react';
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { Botoes, Container, TituloModal } from './styles';
import { IoMdClose } from "react-icons/io";


interface LogoutModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  open: boolean;
  handleDrawerClose: () => {};
  handleDrawerOpen: () => {};
  entrada: boolean;
  handleAvaliacaoOpen: () => {};
  handleAvaliacaoClose: () => {};
}

Modal.setAppElement("#root");

export function LogoutModal({ 
  isOpen, 
  onRequestClose,
  open,
  handleDrawerClose,
  handleDrawerOpen,
  entrada,
  handleAvaliacaoOpen,
  handleAvaliacaoClose, }: LogoutModalProps) {
  const navigate = useNavigate();
  const caminhoSaida=()=>{
    handleDrawerClose();
    navigate("/");
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="start-test-overlay"
      className="exit-content"
    >
      <Container>
        <TituloModal>
          <h1>Sair</h1>
          <button onClick={onRequestClose}><IoMdClose/></button>
        </TituloModal>
        <span>Você realmente deseja sair?</span>
        <Botoes>
          <button className='nao' onClick={onRequestClose}>NÃO</button>
          <button className='sim' onClick={caminhoSaida
          }>SIM</button>
        </Botoes>
      </Container>
    </Modal>
  );
};
