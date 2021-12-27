import { ReactNode } from 'react';

import { Container, ListaFuncion, TituloGeral } from './styles';

export function InfoFuncion() {
  return (
    <Container>
      <TituloGeral>
        <h1>Equipe Ágil</h1>
      </TituloGeral>
      <ListaFuncion>
        <table>
          <tr>
            <td>Alan Araújo</td>
          </tr>
          <tr>
            <td>Lorenna Araújo</td>
          </tr>
          <tr>
            <td>Jeann Texeira</td>
          </tr>
          <tr>
            <td>Vanessa Alves</td>
          </tr>
        </table>
      </ListaFuncion>
    </Container>
  );
};
