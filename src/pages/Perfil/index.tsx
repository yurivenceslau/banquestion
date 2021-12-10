import { ReactNode, useState } from 'react';
import Logado from '../Logado';

import { Container } from './styles';

interface propsLogado {
  open:boolean;
  handleDrawerClose: ()=>{};
  handleDrawerOpen: ()=>{};
 }

export function Perfil({open, handleDrawerClose, handleDrawerOpen}: propsLogado) {
  
  return (
    <>
    <Logado open={open} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen}/>
    <Container isOpen={open}>
      <h1>Perfil
      </h1>
    </Container>
    </>
  );
};


