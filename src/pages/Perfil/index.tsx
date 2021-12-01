import { ReactNode } from 'react';
import Logado from '../Logado';

import { Container } from './styles';


export function Perfil() {
  return (
    <>
    <Container>
      
      {/* <div style={{marginLeft: open? '4rem' : '0rem',transition:'0.3s',}}> */}
        <Logado />
         {/* </div> */}
      
      <h1>Perfil</h1>
      
    </Container>
    </>
  );
};


