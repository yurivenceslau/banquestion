import { ReactNode } from 'react';
import Logado from "../Logado";

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
        <h1>Sobre Nós</h1>
      </Container>
    </>
  );
};
