import Logado from "../Logado";
import { useState } from "react";
import { Container } from "./styles";
import { Questionario } from "../../components/Questionario";

interface propsLogado {
  open: boolean;
  handleDrawerClose: () => {};
  handleDrawerOpen: () => {};
  entrada: boolean;
  handleAvaliacaoOpen: () => {};
  handleAvaliacaoClose: () => {};
  textFinishTimes: number;
  handleTextFinishTimes: () => {};
}
// window.history.back();
export function Avaliacao({
  open,
  handleDrawerClose,
  handleDrawerOpen,
  entrada,
  handleAvaliacaoOpen,
  handleAvaliacaoClose,
  textFinishTimes,
  handleTextFinishTimes,
}: propsLogado) {
  return (
    <>
      {/* <Logado
        open={open}
        entrada={entrada}
        handleAvaliacaoOpen={handleAvaliacaoOpen}
        handleAvaliacaoClose={handleAvaliacaoClose}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
      /> */}
      <Container isOpen={open}>
        <Questionario 
        entrada={entrada}
        handleAvaliacaoOpen={handleAvaliacaoOpen}
        handleAvaliacaoClose={handleAvaliacaoClose}
        textFinishTimes={textFinishTimes}
        handleTextFinishTimes={handleTextFinishTimes}
        />
      </Container>
    </>
  );
}
