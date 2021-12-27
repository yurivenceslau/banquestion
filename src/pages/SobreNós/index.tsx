import { ReactNode } from 'react';
import Logado from "../Logado";
import { InfoEmpresa } from '../../components/InfoEmpresa';


import { Container } from './styles';

interface propsLogado {
  open:boolean;
  handleDrawerClose: ()=>{};
  handleDrawerOpen: ()=>{};
 }

export function SobreNós({open, handleDrawerClose, handleDrawerOpen}: propsLogado) {
  return (
    <>
      <Logado open={open} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen}/>
      <Container isOpen={open}>
        <InfoEmpresa/>
      </Container>
    </>
  );
};
