import { ReactNode, useEffect } from "react";
import Logado from "../Logado";
import { InfoEmpresa } from "../../components/InfoEmpresa";

import { Container } from "./styles";

interface propsLogado {
  open: boolean;
  handleDrawerClose: () => {};
  handleDrawerOpen: () => {};
  entrada: boolean;
  handleAvaliacaoOpen: () => {};
  handleAvaliacaoClose: () => {};
}

export function SobreNós({
  open,
  handleDrawerClose,
  handleDrawerOpen,
  entrada,
  handleAvaliacaoOpen,
  handleAvaliacaoClose,
}: propsLogado) {
  return (
    <>
      <Logado
        open={open}
        handleDrawerClose={handleDrawerClose}
        entrada={entrada}
        handleAvaliacaoOpen={handleAvaliacaoOpen}
        handleAvaliacaoClose={handleAvaliacaoClose}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Container isOpen={open}>
        <InfoEmpresa />
      </Container>
    </>
  );
}
