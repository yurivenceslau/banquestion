import { ReactNode } from 'react';
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { Botoes, Container, TituloModal } from './styles';
import { IoMdClose } from "react-icons/io";
import {toast} from 'react-toastify';


interface FinalizarProvaModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  entrada: boolean;
  handleAvaliacaoOpen: () => {};
  handleAvaliacaoClose: () => {};
}

Modal.setAppElement("#root");

export function FinalizarProvaModal({ 
  isOpen, 
  onRequestClose,
  entrada,
  handleAvaliacaoOpen,
  handleAvaliacaoClose, }: FinalizarProvaModalProps) {
    const navigate = useNavigate();
    const confirm=()=>{
      navigate("/autorizacao");
      handleAvaliacaoClose();
      toast.success("Avaliação enviada");
    }

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="start-test-overlay"
      className="start-test-content"
    >
      <Container>
        <TituloModal>
          <h1>Finalizar prova</h1>
          <button onClick={onRequestClose}><IoMdClose/></button>
        </TituloModal>
        <span>Você realmente deseja finalizar a prova?</span>
        <Botoes>
          <button className='nao' onClick={onRequestClose}>NÃO</button>
          <button className='sim' onClick={
              () => {confirm()}
          }>SIM</button>
        </Botoes>
      </Container>
    </Modal>
  );
};
