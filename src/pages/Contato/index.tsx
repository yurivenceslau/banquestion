import { ReactNode } from 'react';
import { Cabecalho } from '../../components/Cabecalho';
import { EspacoLogin } from '../../components/EspacoLogin';
import { EspacoPedido } from '../../components/EspacoPedido';

import { Container } from './styles';


export function Contato() {
  return (
    <Container>
      <Cabecalho/>
      <EspacoPedido/>
    </Container>
  );
};
