// paginas privadas 
import  Logado  from "./pages/Logado";
import Comocentralizar from "./pages/Comocentralizar";
// paginas publicas
import { Login } from "./pages/Login";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      {/* <Comocentralizar/> */}
      {/* <Login/> */}
      <Logado/>
      <GlobalStyle/>
    </>
  );
}