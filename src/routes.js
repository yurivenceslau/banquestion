import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { Perfil } from "./pages/Perfil";
import { Login } from "./pages/Login";
import { Contato } from "./pages/Contato";
import { Avaliacao } from "./pages/Avaliacao";
import { SobreNós } from "./pages/SobreNós";
import { Autorizacao } from "./pages/Autorizacao";
import { ResultadoAvaliacao } from "./pages/ResultadoAvaliacao";

export function MainRoutes() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [entrada, setEntrada] = useState(false);

  const handleAvaliacaoOpen = () => {
    setEntrada(true);
  };

  const handleAvaliacaoClose = () => {
    setEntrada(false);
  };

  return (
    <Routes>
      {/* <Route path="/" element={<Login/>}/> */}
      <Route path="/" element={<Login />} />
      <Route path="/contato" element={<Contato />} />
      <Route
        path="/autorizacao"
        element={
          <Autorizacao
            open={open}
            handleDrawerClose={handleDrawerClose}
            handleDrawerOpen={handleDrawerOpen}
            entrada={entrada}
            handleAvaliacaoOpen={handleAvaliacaoOpen}
            handleAvaliacaoClose={handleAvaliacaoClose}
          />
        }
      />
      <Route
        path="/perfil"
        element={
          <Perfil
            open={open}
            entrada={entrada}
            handleDrawerClose={handleDrawerClose}
            handleDrawerOpen={handleDrawerOpen}
          />
        }
      />
      <Route
        path="/avaliacao"
        element={
          <Avaliacao
            open={open}
            entrada={entrada}
            handleDrawerClose={handleDrawerClose}
            handleDrawerOpen={handleDrawerOpen}
            entrada={entrada}
            handleAvaliacaoOpen={handleAvaliacaoOpen}
            handleAvaliacaoClose={handleAvaliacaoClose}
          />
        }
      />
      <Route
        path="/sobrenos"
        element={
          <SobreNós
            open={open}
            entrada={entrada}
            handleDrawerClose={handleDrawerClose}
            handleDrawerOpen={handleDrawerOpen}
          />
        }
      />
      <Route
        path="/ResultadoAvaliacao"
        element={
          <ResultadoAvaliacao
            open={open}
            entrada={entrada}
            handleDrawerClose={handleDrawerClose}
            handleDrawerOpen={handleDrawerOpen}
          />
        }
      />
      {/* <Route path="/Perfil" element={<Perfil/>}/> */}
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}
